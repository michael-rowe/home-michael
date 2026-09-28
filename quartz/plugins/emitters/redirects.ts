import fs from "fs"
import path from "path"
import yaml from "js-yaml"
import { styleText } from "util"
import {
  FilePath,
  FullSlug,
  getFileExtension,
  isAbsoluteURL,
  resolveRelative,
  slugifyFilePath,
} from "../../util/path"
import { QuartzEmitterPlugin } from "../types"
import { write } from "./helpers"

interface Options {
  /** Path to the redirects file, relative to the repository root */
  file: string
}

const defaultOptions: Options = {
  file: "redirects.yaml",
}

// Slugify an old path the same way frontmatter aliases are slugified,
// so `Posts/old post` and `Posts/old-post` land on the same stub
function toSlug(p: string): FullSlug {
  const trimmed = p.replace(/^\/+/, "")
  if (trimmed.endsWith("/")) {
    return slugifyFilePath((trimmed + "index.md") as FilePath)
  }
  const mockFp = getFileExtension(trimmed) === "md" ? trimmed : trimmed + ".md"
  return slugifyFilePath(mockFp as FilePath)
}

function warn(msg: string) {
  console.warn(styleText("yellow", `[Redirects] ${msg}`))
}

function readRedirects(file: string): [string, string][] {
  const fp = path.resolve(file)
  if (!fs.existsSync(fp)) return []
  const data = yaml.load(fs.readFileSync(fp, "utf-8"))
  if (data == null) return []
  if (typeof data !== "object" || Array.isArray(data)) {
    warn(`${file} must be a map of old path: new path; ignoring it`)
    return []
  }
  return Object.entries(data as Record<string, unknown>).flatMap(([from, to]) => {
    if (typeof to !== "string" || to.trim() === "") {
      warn(`"${from}" has no target; skipping`)
      return []
    }
    return [[from, to.trim()] as [string, string]]
  })
}

function stub(title: string, url: string) {
  return `
    <!DOCTYPE html>
    <html lang="en-us">
    <head>
    <title>${title}</title>
    <link rel="canonical" href="${url}">
    <meta name="robots" content="noindex">
    <meta charset="utf-8">
    <meta http-equiv="refresh" content="0; url=${url}">
    </head>
    </html>
    `
}

/**
 * Redirects for pages that no longer exist. AliasRedirects only covers
 * slugs listed on a surviving page; this reads a map of old path → new
 * path (a slug on this site, or an absolute URL) and writes the same
 * meta-refresh stub at each old path.
 */
export const Redirects: QuartzEmitterPlugin<Partial<Options>> = (userOpts) => {
  const opts = { ...defaultOptions, ...userOpts }
  return {
    name: "Redirects",
    async *emit(ctx) {
      const known = new Set<string>(ctx.allSlugs)
      const exists = (slug: FullSlug) =>
        known.has(slug) ||
        (slug.endsWith("/index") && ctx.allSlugs.some((s) => s.startsWith(slug.slice(0, -5))))

      for (const [from, to] of readRedirects(opts.file)) {
        const fromSlug = toSlug(from)
        if (known.has(fromSlug)) {
          warn(`"${from}" is still a page on the site; skipping its redirect`)
          continue
        }

        let url: string
        if (isAbsoluteURL(to)) {
          url = to
        } else {
          const toSlugged = toSlug(to)
          if (!exists(toSlugged)) {
            warn(`"${from}" points at "${to}", which is not a page on the site`)
          }
          url = resolveRelative(fromSlug, toSlugged)
        }

        yield write({ ctx, content: stub(fromSlug, url), slug: fromSlug, ext: ".html" })
      }
    },
    // the file sits outside content/, so the watcher never reports changes to it
    async *partialEmit() {},
  }
}
