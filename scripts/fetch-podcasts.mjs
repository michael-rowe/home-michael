#!/usr/bin/env node
/**
 * fetch-podcasts.mjs — generate a page for every episode of the podcast series
 * Michael has run, and rebuild that show's section of the Podcasts index.
 *
 * Both shows live on WordPress with an open REST API. The podcast RSS feeds are
 * not usable as a source: In Beta's caps at 10 items and silently ignores
 * `?paged=`, returning the same 10 every time, and SAAHE publishes no feed.
 *
 * Existing episode pages are never overwritten — tags, `related:` links and the
 * hand-written summaries survive every run. --force rewrites them and WILL
 * discard that work.
 *
 *   node scripts/fetch-podcasts.mjs                 # every show
 *   node scripts/fetch-podcasts.mjs --show=saahe    # one show
 *   node scripts/fetch-podcasts.mjs --dry-run
 *   node scripts/fetch-podcasts.mjs --force
 *
 * The two shows differ in one way that matters. In Beta is live, so its pages
 * send the reader there to listen and nothing is copied here beyond a summary.
 * SAAHE's audio is gone from its site (PODS-7), so those pages point nowhere —
 * they are the record, and the recordings Michael holds have no home yet.
 */

import { readFile, writeFile, readdir } from "node:fs/promises"
import { existsSync } from "node:fs"
import path from "node:path"

const DIR = "content/Podcasts"
const INDEX = `${DIR}/index.md`

const SHOWS = {
  inbeta: {
    site: "https://inbetaphysio.com",
    categorySlug: "podcasts",
    show: "In Beta",
    showUrl: "https://inbetaphysio.com/category/podcasts/",
    host: "Michael Rowe",
    role: "host",
    filePrefix: "in-beta",
    marker: "inbeta",
    // Ben Ellis ran the Environmental Healthcare Unconference independently and
    // only hosted it on In Beta; it is not Michael's work.
    exclude: [
      "environmental-healthcare-unconference-podcast-1",
      "environmental-healthcare-unconference-podcast-2",
      "environmental-healthcare-unconference-podcast-3",
      "environmental-healthcare-unconference-podcast-4",
    ],
    // In Beta stores the running time in meta.duration; SAAHE stores nothing.
    duration: (p) => (p.meta?.duration ?? "").trim(),
    // Summaries come from the excerpt: for episodes 1–21 the post body is only
    // the audio player, and the real notes are in the hand-written excerpt.
    source: (p) => p.excerpt?.rendered,
    listen: (e) => `[Listen to this episode on In Beta →](${e.link})`,
  },
  saahe: {
    site: "https://saahe.org.za",
    categorySlug: null, // resolved by id below; the slug is shared with other content
    categoryId: 83,
    show: "SAAHE",
    showUrl: "https://saahe.org.za/category/podcast/",
    host: "Michael Rowe",
    role: "host",
    filePrefix: "saahe",
    marker: "saahe",
    // The five-part "Running effective workshops" series was not Michael's.
    excludeMatching: /running-effective-workshops/,
    duration: () => "",
    source: (p) => p.content?.rendered,
    // Published titles name the guest inconsistently — ", with Elize Archer",
    // " with Simone Titus", or not at all. The guest is named in the summary,
    // so the title is the topic, as it is for In Beta.
    cleanTitle: (t) => t.replace(/,?\s+with\s+.+$/i, "").trim(),
    // The guest is the draw on an interview series, so the index names them.
    // Most titles carry it as a ", with X" suffix. Three do not follow from the
    // title: #6 never named its guest, #5 is Michael reading his own chapter
    // rather than interviewing anyone, and #4's title drops Corné's accent,
    // which the show notes carry.
    guestOverrides: {
      "6-a-humanistic-pedagogy-for-student-support": "Mpho Jama",
      "5-a-critical-digital-pedagogy-for-online-learning-with-michael-rowe": "",
      "4-case-based-learning-with-corne-postma": "Corné Postma",
    },
    guest(raw, slug) {
      if (slug in this.guestOverrides) return this.guestOverrides[slug]
      return (raw.match(/,?\s+with\s+(.+)$/i)?.[1] ?? "").trim()
    },
    // No link out: the audio is no longer on saahe.org.za, so there is nothing
    // to send a reader there for.
    listen: () => "*The recording isn't currently online.*",
  },
}

const argv = process.argv.slice(2)
const dryRun = argv.includes("--dry-run")
const force = argv.includes("--force")
const only = argv.find((a) => a.startsWith("--show="))?.split("=")[1]

const ENTITIES = {
  amp: "&", lt: "<", gt: ">", quot: '"', apos: "'", nbsp: " ",
  "#8211": "–", "#8212": "—", "#8216": "‘", "#8217": "’",
  "#8220": "“", "#8221": "”", "#8230": "…", "#038": "&", "#039": "'",
}
const decode = (s = "") =>
  s.replace(/&(#?\w+);/g, (m, e) =>
    ENTITIES[e] ?? (e.startsWith("#") ? String.fromCharCode(Number(e.slice(1))) : m))

// WordPress appends a read-more link to every excerpt inside
// <div class="more-link-wrapper">; stripping tags alone leaves "Continue
// reading#38 – …" glued to the summary.
const text = (s = "") =>
  decode((s || "")
    .replace(/<script[\s\S]*?<\/script>/g, "")
    .replace(/<div class="more-link-wrapper">[\s\S]*$/i, "")
    .replace(/<blockquote class="wp-embedded-content"[\s\S]*$/i, "")
    .replace(/<[^>]*>/g, "")).replace(/\s+/g, " ").trim()

const yaml = (s = "") => `"${s.replace(/\\/g, "\\\\").replace(/"/g, '\\"')}"`
const MONTHS = ["January","February","March","April","May","June","July","August","September","October","November","December"]

function clip(s, max) {
  if (s.length <= max) return s
  const cut = s.slice(0, max)
  const stop = Math.max(cut.lastIndexOf(". "), cut.lastIndexOf("? "), cut.lastIndexOf("! "))
  return stop > max * 0.5 ? cut.slice(0, stop + 1) : cut.replace(/\s\S*$/, "") + "…"
}

async function json(url) {
  const res = await fetch(url, { headers: { "user-agent": "home-michael/fetch-podcasts" } })
  if (!res.ok) throw new Error(`${res.status} ${res.statusText} for ${url}`)
  return { body: await res.json(), headers: res.headers }
}

function page(cfg, e) {
  const meta = [`**${cfg.show}**`, `${e.day} ${e.month} ${e.year}`, e.duration].filter(Boolean).join(" · ")
  return [
    "---",
    "type: podcast",
    `title: ${yaml(e.title)}`,
    `description: ${yaml(e.description)}`,
    `meta-description: ${yaml(e.metaDescription)}`,
    "author:",
    '  - "[[Michael Rowe]]"',
    `date: ${e.iso}`,
    "recorded:",
    `show: ${cfg.show}`,
    `show-url: ${cfg.showUrl}`,
    `host: ${cfg.host}`,
    `episode: ${yaml(e.number ?? "")}`,
    `role: ${cfg.role}`,
    "video:",
    "embed:",
    "audio:",
    `duration: ${yaml(e.duration)}`,
    "tags: []",
    "category: []",
    "related: []",
    "draft: false",
    "linkedin:",
    "---",
    "",
    meta,
    "",
    e.summary,
    "",
    cfg.listen(e),
    "",
  ].join("\n")
}

async function fetchShow(key, cfg) {
  let categoryId = cfg.categoryId
  if (!categoryId) {
    const { body } = await json(`${cfg.site}/wp-json/wp/v2/categories?slug=${cfg.categorySlug}`)
    if (!body[0]) throw new Error(`${key}: no category with slug "${cfg.categorySlug}"`)
    categoryId = body[0].id
  }

  const posts = []
  for (let p = 1; ; p++) {
    const { body, headers } = await json(
      `${cfg.site}/wp-json/wp/v2/posts?categories=${categoryId}&per_page=100&page=${p}&orderby=date&order=desc`)
    posts.push(...body)
    if (p >= Number(headers.get("x-wp-totalpages") ?? 1)) break
  }

  const excluded = new Set(cfg.exclude ?? [])
  if (excluded.size) {
    const matched = posts.filter((p) => excluded.has(p.slug)).length
    if (matched !== excluded.size) {
      console.warn(`${key}: expected ${excluded.size} excluded posts, matched ${matched} — check the exclude list`)
    }
  }

  return posts
    .filter((p) => !excluded.has(p.slug) && !(cfg.excludeMatching?.test(p.slug)))
    .map((p) => {
      const d = new Date(p.date)
      const raw = text(p.title?.rendered)
      // Titles carry the episode number with two separators across both shows:
      // "#38 – Title" and "#4: Title". The number belongs in the `episode`
      // field; the catalogue is organised by topic and title, so `#` appears
      // nowhere on the page — which also keeps it out of wikilink aliases,
      // where the regex in ofm.ts would reject it.
      // The separator is optional: In Beta used an en dash or a colon, SAAHE
      // used both and then dropped it entirely for #7 and #8.
      const m = raw.match(/^#\s*(\d+)\s*(?:[–—:-]\s*)?(.*)$/)
      const summary = text(cfg.source(p))
      return {
        iso: p.date.slice(0, 10),
        year: d.getFullYear(), month: MONTHS[d.getMonth()], day: d.getDate(),
        number: m ? m[1] : null,
        title: cfg.cleanTitle ? cfg.cleanTitle(m ? m[2] : raw) : (m ? m[2] : raw),
        link: p.link,
        duration: cfg.duration(p),
        guest: cfg.guest ? cfg.guest(m ? m[2] : raw, p.slug) : "",
        summary,
        description: clip(summary, 600),
        metaDescription: clip(summary, 150),
        file: `${p.date.slice(0, 10)}-${cfg.filePrefix}-${p.slug}.md`,
      }
    })
}

function section(cfg, episodes) {
  const start = `<!-- ${cfg.marker}:start — generated by scripts/fetch-podcasts.mjs; do not edit by hand -->`
  const end = `<!-- ${cfg.marker}:end -->`
  const years = [...new Set(episodes.map((e) => e.year))].sort((a, b) => b - a)
  const lines = [start, ""]
  for (const year of years) {
    lines.push(`### ${year}`, "")
    for (const e of episodes.filter((x) => x.year === year)) {
      const slug = e.file.replace(/\.md$/, "")
      const alias = e.title.replace(/#/g, "").replace(/\s+/g, " ").trim()
      const tail = [e.guest && `with ${e.guest}`, e.duration && `*(${e.duration})*`].filter(Boolean).join(" ")
      lines.push(`- **${e.day} ${e.month}** · [[Podcasts/${slug}|${alias}]]${tail ? ` · ${tail}` : ""}`)
    }
    lines.push("")
  }
  lines.push(end)
  return { start, end, body: lines.join("\n") }
}

async function main() {
  const keys = only ? [only] : Object.keys(SHOWS)
  for (const key of keys) {
    const cfg = SHOWS[key]
    if (!cfg) throw new Error(`unknown show "${key}" — one of: ${Object.keys(SHOWS).join(", ")}`)

    const episodes = await fetchShow(key, cfg)
    let created = 0, rewritten = 0, skipped = 0
    for (const e of episodes) {
      const file = path.join(DIR, e.file)
      const exists = existsSync(file)
      if (exists && !force) { skipped++; continue }
      if (!dryRun) await writeFile(file, page(cfg, e))
      exists ? rewritten++ : created++
    }

    const { start, end, body } = section(cfg, episodes)
    if (dryRun) {
      console.log(body)
      console.error(`\n(dry run — ${key}: ${episodes.length} episodes; would create ${created}, ` +
        `${force ? `rewrite ${rewritten}` : `skip ${skipped}`})`)
      continue
    }

    // Markers are matched on the `<!-- key:start` prefix rather than the whole
    // comment, so the note inside them can be reworded without breaking the run.
    const index = await readFile(INDEX, "utf8")
    const from = index.search(new RegExp(`<!--\\s*${cfg.marker}:start`))
    const endMatch = index.match(new RegExp(`<!--\\s*${cfg.marker}:end[^>]*-->`))
    if (from === -1 || !endMatch) throw new Error(`${key}: markers not found in ${INDEX}`)
    const to = index.indexOf(endMatch[0])
    await writeFile(INDEX, index.slice(0, from) + body + index.slice(to + endMatch[0].length))

    const known = new Set(episodes.map((e) => e.file))
    const orphans = (await readdir(DIR))
      .filter((f) => f.startsWith("20") && f.includes(`-${cfg.filePrefix}-`) && !known.has(f))
    if (orphans.length) console.warn(`${key}: orphaned pages (not removed): ${orphans.join(", ")}`)

    const years = [...new Set(episodes.map((e) => e.year))].sort()
    console.log(`${key}: ${episodes.length} episodes (${years[0]}–${years.at(-1)}) — ` +
      `${created} created, ${rewritten} rewritten, ${skipped} left alone. Index rebuilt.`)
  }
}

main().catch((err) => {
  // Non-destructive: a failed fetch leaves the existing pages and index intact.
  console.error(`fetch-podcasts: ${err.message}`)
  console.error("No pages or index changes were written.")
  process.exit(1)
})
