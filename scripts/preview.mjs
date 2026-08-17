#!/usr/bin/env node
/**
 * Visual preview and smoke-test harness.
 *
 * Serves the built `public/` directory and drives Chromium over it, capturing
 * screenshots at each viewport and theme, and reporting console errors, failed
 * requests, and images that fail to load or render at the wrong aspect ratio.
 *
 * Build first (`npx quartz build`), then:
 *
 *   node scripts/preview.mjs
 *   node scripts/preview.mjs --pages index,Posts/index --viewports mobile
 *   node scripts/preview.mjs --themes dark --out /tmp/shots
 *
 * Flags:
 *   --pages      comma-separated slugs, default: index
 *   --viewports  desktop | tablet | mobile, default: all three
 *   --themes     light | dark, default: light
 *   --out        screenshot directory, default: .preview/
 *   --full       capture the full scrollable page rather than the viewport
 */

import { chromium } from "playwright"
import http from "http"
import fs from "fs"
import path from "path"
import { fileURLToPath } from "url"

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..")
const PUBLIC_DIR = path.join(ROOT, "public")

const VIEWPORTS = {
  // 1200px is the desktop breakpoint; 820px sits in the tablet band where the
  // top nav shows but hover is unavailable; 390px is a common phone width.
  desktop: { width: 1440, height: 900 },
  tablet: { width: 820, height: 1180 },
  mobile: { width: 390, height: 844 },
}

/**
 * Third-party noise that is not a site defect. giscus returns 404 for any page
 * that has no discussion thread yet, which is most of them.
 */
const IGNORED = [
  /giscus\.app/,
  /umami/,
  // Redundant: the response listener already reports these with their URL and
  // status, whereas this console message carries neither.
  /console: Failed to load resource/,
  // Quartz's hot-reload client, baked in by the last `build --serve`. It fails
  // to reach port 3001 when the dev server isn't running, which says nothing
  // about the page being captured.
  /ws:\/\/localhost:3001/,
]

const isNoise = (msg) => IGNORED.some((re) => re.test(msg))

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".mjs": "text/javascript; charset=utf-8",
  ".json": "application/json",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".avif": "image/avif",
  ".gif": "image/gif",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".ttf": "font/ttf",
  ".xml": "application/xml",
  ".ico": "image/x-icon",
}

function parseArgs() {
  const args = {}
  const argv = process.argv.slice(2)
  for (let i = 0; i < argv.length; i++) {
    if (!argv[i].startsWith("--")) continue
    const [k, v] = argv[i].replace(/^--/, "").split("=")
    if (v !== undefined) {
      args[k] = v
    } else if (argv[i + 1] && !argv[i + 1].startsWith("--")) {
      // Support `--out path` as well as `--out=path`
      args[k] = argv[++i]
    } else {
      args[k] = true
    }
  }
  const list = (val, fallback) =>
    typeof val === "string" ? val.split(",").map((s) => s.trim()).filter(Boolean) : fallback

  return {
    pages: list(args.pages, ["index"]),
    viewports: list(args.viewports, Object.keys(VIEWPORTS)),
    themes: list(args.themes, ["light"]),
    out: typeof args.out === "string" ? args.out : path.join(ROOT, ".preview"),
    full: Boolean(args.full),
  }
}

function startServer() {
  const server = http.createServer((req, res) => {
    const urlPath = decodeURIComponent(req.url.split("?")[0])
    let filePath = path.join(PUBLIC_DIR, urlPath)

    // Resolve directory URLs and extensionless slugs to their index.html.
    //
    // A slug can exist as both a page and a folder — `recently-added.html`
    // alongside `recently-added/` holding the month archives. Resolving the
    // directory first and stopping there 404s the page, because Quartz emits
    // no index.html for that folder. So fall back to the sibling .html before
    // giving up, which is what a static host does for the same URL.
    try {
      if (fs.statSync(filePath).isDirectory()) {
        const index = path.join(filePath, "index.html")
        filePath = fs.existsSync(index) ? index : `${filePath}.html`
      }
    } catch {
      if (!path.extname(filePath)) filePath += ".html"
    }

    // Never serve outside public/
    if (!path.resolve(filePath).startsWith(PUBLIC_DIR)) {
      res.writeHead(403).end("Forbidden")
      return
    }

    // Stream rather than readFile: an image-heavy page requests dozens of large
    // files at once, and buffering them all can exhaust file descriptors. That
    // surfaced as spurious 404s and "broken image" reports that looked like
    // site bugs — the server must not invent failures it is itself causing.
    fs.stat(filePath, (err, stat) => {
      if (err || !stat.isFile()) {
        res.writeHead(404, { "Content-Type": "text/plain" }).end("Not found")
        return
      }

      res.writeHead(200, {
        "Content-Type": MIME[path.extname(filePath)] ?? "application/octet-stream",
        "Content-Length": stat.size,
      })

      const stream = fs.createReadStream(filePath)
      stream.pipe(res)
      stream.on("error", (e) => {
        console.error(`  server error serving ${urlPath}: ${e.code ?? e.message}`)
        res.destroy()
      })
    })
  })

  return new Promise((resolve) => {
    server.listen(0, "127.0.0.1", () => resolve({ server, port: server.address().port }))
  })
}

async function main() {
  const opts = parseArgs()

  if (!fs.existsSync(PUBLIC_DIR)) {
    console.error("No public/ directory. Run `npx quartz build` first.")
    process.exit(1)
  }

  fs.mkdirSync(opts.out, { recursive: true })
  const { server, port } = await startServer()
  const browser = await chromium.launch()

  let problems = 0

  for (const theme of opts.themes) {
    for (const viewport of opts.viewports) {
      if (!VIEWPORTS[viewport]) {
        console.error(`Unknown viewport "${viewport}"`)
        continue
      }

      const context = await browser.newContext({
        viewport: VIEWPORTS[viewport],
        colorScheme: theme,
        deviceScaleFactor: 1,
        // Tablet and mobile are touch devices — this is what makes hover-only
        // menus fail, so the preview should reproduce it.
        hasTouch: viewport !== "desktop",
      })

      for (const slug of opts.pages) {
        const page = await context.newPage()
        const errors = []

        page.on("console", (m) => m.type() === "error" && errors.push(`console: ${m.text()}`))
        page.on("pageerror", (e) => errors.push(`pageerror: ${e.message}`))
        page.on("requestfailed", (r) =>
          errors.push(`request failed: ${r.url()} (${r.failure()?.errorText})`),
        )
        // A 404 is a successful response as far as requestfailed is concerned,
        // so catch it here — otherwise the console error arrives without a URL.
        page.on("response", (r) => {
          if (r.status() >= 400) errors.push(`HTTP ${r.status()}: ${r.url()}`)
        })

        const url = `http://127.0.0.1:${port}/${slug === "index" ? "" : slug}`
        await page.goto(url, { waitUntil: "networkidle" })

        // Quartz sets the theme from localStorage on load, so force it and
        // give the stylesheet a beat to settle before capturing.
        await page.evaluate((t) => document.documentElement.setAttribute("saved-theme", t), theme)
        await page.waitForTimeout(250)

        // Lazy-loaded images never enter the viewport during a full-page
        // capture, so they stay unloaded and screenshot as blank gaps. Scroll
        // the page first, then wait for every image to settle.
        //
        // `behavior: "instant"` is load-bearing. base.scss sets
        // `html { scroll-behavior: smooth }`, so a plain `scrollTo` animates:
        // each call 100ms later retargets an animation still in flight, the
        // page never actually reaches the bottom before snapping back to top,
        // and every image below the fold stays unloaded. That reported as
        // "broken image" with an empty `currentSrc` — a harness artefact that
        // looked exactly like a real pipeline failure.
        await page.evaluate(async () => {
          const step = window.innerHeight
          const bottom = () => document.documentElement.scrollHeight
          // Re-read the height each step: loading images add height as they go.
          for (let y = 0; y < bottom(); y += step) {
            window.scrollTo({ top: y, behavior: "instant" })
            await new Promise((r) => setTimeout(r, 100))
          }
          window.scrollTo({ top: 0, behavior: "instant" })
        })
        await page
          .waitForFunction(
            () => Array.from(document.querySelectorAll("img")).every((i) => i.complete),
            null,
            { timeout: 15000 },
          )
          .catch(() => {}) // fall through and let the image check report it
        await page.waitForTimeout(300)

        // Any image that finished loading but reports zero natural size failed;
        // any whose rendered box diverges from its intrinsic ratio is distorted.
        const imageIssues = await page.evaluate(() =>
          Array.from(document.querySelectorAll("img"))
            .map((img) => {
              const src = img.currentSrc || img.src
              // An empty currentSrc means the browser never selected a source
              // at all — the image was never reached, which is a harness
              // problem (scrolling, timeouts), not a broken file. Say so.
              if (!src) return `image never loaded (not scrolled into view?): ${img.getAttribute("src")}`
              if (!img.complete) return `image still loading after wait: ${src}`
              if (img.naturalWidth === 0) return `broken image: ${src}`
              const box = img.getBoundingClientRect()
              if (box.width < 1 || box.height < 1) return null
              const natural = img.naturalWidth / img.naturalHeight
              const rendered = box.width / box.height
              const objectFit = getComputedStyle(img).objectFit
              if (objectFit !== "fill" && objectFit !== "cover" && objectFit !== "contain") return null
              if (objectFit === "fill" && Math.abs(natural - rendered) / natural > 0.02) {
                return `distorted: ${src} (natural ${natural.toFixed(2)}, rendered ${rendered.toFixed(2)})`
              }
              return null
            })
            .filter(Boolean),
        )

        const name = `${slug.replace(/\//g, "-")}--${viewport}--${theme}.png`
        await page.screenshot({ path: path.join(opts.out, name), fullPage: opts.full })

        const all = [...errors, ...imageIssues].filter((m) => !isNoise(m))
        problems += all.length
        console.log(`${all.length === 0 ? "ok  " : "FAIL"} ${name}`)
        all.forEach((p) => console.log(`       ${p}`))

        await page.close()
      }

      await context.close()
    }
  }

  await browser.close()
  server.close()

  console.log(`\nScreenshots in ${opts.out}`)
  if (problems > 0) {
    console.log(`${problems} problem(s) found.`)
    process.exit(1)
  }
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
