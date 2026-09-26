/**
 * review-status.mjs
 *
 * Derives the persona-review backlog from the content itself, rather than from
 * a hand-maintained tally. Every file declares its `type`; every type has a
 * pipeline in content/personas/content-review-queue.md; each file's `reviewed:`
 * list says which personas have run. The backlog is those three facts joined.
 *
 * The queue file stays the source of truth for the pipelines (a judgement about
 * which personas a content type needs). What is pending is computed, so it
 * cannot drift the way a ticked table does.
 *
 * A file's `review-notes:` list (things a past session left for the next one)
 * is printed under the file while it is pending, and separately once the file
 * is fully reviewed or has no pipeline, since then nothing will reopen it.
 *
 * Usage:
 *   node scripts/review-status.mjs                    # summary + next items per type
 *   node scripts/review-status.mjs --summary          # counts only
 *   node scripts/review-status.mjs --type note        # one content type, all pending files
 *   node scripts/review-status.mjs --next 5           # how many files to list per type
 *   node scripts/review-status.mjs --include-drafts   # count draft: true files too
 *   node scripts/review-status.mjs --count            # one number: files with work outstanding
 *   node scripts/review-status.mjs --json             # machine-readable, for Atlas
 */

import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

// ── Config ─────────────────────────────────────────────────────────────────

const QUEUE_FILE  = 'content/personas/content-review-queue.md'
const CONTENT_DIR = 'content'

// Directories excluded from the Quartz build — skip these too
const IGNORE_DIRS = new Set(['private', 'templates', '.obsidian', 'drafts', 'personas'])

// The queue names pipelines by plural heading ("Essays"); files declare a
// singular `type` ("essay"). Lessons live under Courses; a `course` page is the
// container rather than a reviewable lesson.
const HEADING_TO_TYPE = {
  essays: ['essay'],
  posts: ['post'],
  notes: ['note'],
  lessons: ['lesson'],
  newsletters: ['newsletter'],
  'other (frameworks, policies, nav)': ['framework', 'policy', 'guide'],
}

// Personas marked with a trailing * in the queue are not yet defined, so a file
// cannot be through them and they must not count as outstanding work.
const UNDEFINED_MARKER = '*'

// ── Args ───────────────────────────────────────────────────────────────────

const args          = process.argv.slice(2)
const summaryOnly   = args.includes('--summary')
const includeDrafts = args.includes('--include-drafts')
const countOnly     = args.includes('--count')
const asJson        = args.includes('--json')

const valueArg = (flag, fallback) => {
  const i = args.indexOf(flag)
  if (i === -1) return fallback
  const v = args[i + 1]
  if (!v || v.startsWith('--')) {
    console.error(`${flag} requires an argument`)
    process.exit(1)
  }
  return v
}

const typeFilter = valueArg('--type', null)
const nextCount  = Number(valueArg('--next', summaryOnly ? 0 : 3))

// ── Pipelines, read from the queue file ────────────────────────────────────

function loadPipelines() {
  if (!fs.existsSync(QUEUE_FILE)) {
    console.error(`Queue file not found: ${QUEUE_FILE}`)
    process.exit(1)
  }
  const lines = fs.readFileSync(QUEUE_FILE, 'utf-8').split('\n')
  const pipelines = {}

  for (const line of lines) {
    // | Essays | `writing_style` → `essay_writer` → … | `content/templates/…` |
    const cells = line.split('|').map(c => c.trim())
    if (cells.length < 4) continue
    const heading = cells[1].toLowerCase()
    const types = HEADING_TO_TYPE[heading]
    if (!types) continue

    const steps = [...cells[2].matchAll(/`([^`]+)`(\*?)/g)]
      .filter(([, , marker]) => marker !== UNDEFINED_MARKER)
      .map(([, name]) => name)

    if (steps.length) for (const type of types) pipelines[type] = steps
  }

  const missing = Object.values(HEADING_TO_TYPE).flat().filter(t => !pipelines[t])
  if (missing.length) {
    console.error(`No pipeline found in ${QUEUE_FILE} for: ${missing.join(', ')}`)
    process.exit(1)
  }
  return pipelines
}

// ── Walk the content tree ──────────────────────────────────────────────────

function* walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.isDirectory()) {
      if (IGNORE_DIRS.has(entry.name)) continue
      yield* walk(path.join(dir, entry.name))
    } else if (entry.name.endsWith('.md')) {
      yield path.join(dir, entry.name)
    }
  }
}

const pipelines = loadPipelines()
const byType = {}
const noPipeline = {}
let drafts = 0
const strandedNotes = []

for (const file of walk(CONTENT_DIR)) {
  let data
  try {
    ({ data } = matter(fs.readFileSync(file, 'utf-8')))
  } catch {
    continue // unparseable frontmatter is validate-taxonomy's problem, not ours
  }

  const type = data.type
  if (!type) continue // section index pages carry no type, by design

  // review-notes: work a past session found and left for the next one to
  // open this file. Shown with the file while it is pending; listed on its
  // own once the file has no pipeline steps left, since nothing reopens it.
  const notes = Array.isArray(data['review-notes'])
    ? data['review-notes'] : data['review-notes'] ? [data['review-notes']] : []

  if (data.draft === true) {
    drafts++
    if (!includeDrafts) continue
  }

  const pipeline = pipelines[type]
  if (!pipeline) {
    noPipeline[type] = (noPipeline[type] ?? 0) + 1
    if (notes.length) strandedNotes.push({ file, notes })
    continue
  }

  const done = new Set(
    Array.isArray(data.reviewed) ? data.reviewed : data.reviewed ? [data.reviewed] : [],
  )
  const pending = pipeline.filter(step => !done.has(step))

  if (!pending.length && notes.length) strandedNotes.push({ file, notes })
  ;(byType[type] ??= []).push({ file, pending, total: pipeline.length, notes })
}

// ── Report ─────────────────────────────────────────────────────────────────

const types = (typeFilter ? [typeFilter] : Object.keys(byType)).filter(t => byType[t])
if (typeFilter && !byType[typeFilter]) {
  console.error(`No files of type "${typeFilter}". Known: ${Object.keys(byType).join(', ')}`)
  process.exit(1)
}

const outstandingFiles = types.reduce(
  (n, t) => n + byType[t].filter(f => f.pending.length).length, 0)

if (countOnly) {
  console.log(outstandingFiles)
  process.exit(0)
}

if (asJson) {
  console.log(JSON.stringify({
    outstandingFiles,
    drafts,
    types: Object.fromEntries(types.map(t => {
      const files = byType[t]
      const steps = files.reduce((n, f) => n + f.total, 0)
      const doneSteps = steps - files.reduce((n, f) => n + f.pending.length, 0)
      return [t, {
        files: files.length,
        complete: files.filter(f => !f.pending.length).length,
        steps, doneSteps,
        pending: files.filter(f => f.pending.length)
          .map(f => ({ file: f.file, pending: f.pending, notes: f.notes })),
      }]
    })),
    noPipeline,
    strandedNotes,
  }, null, 2))
  process.exit(0)
}

const totalFiles = types.reduce((n, t) => n + byType[t].length, 0)
console.log(`\nReview status — ${totalFiles} files across ${types.length} content type${types.length === 1 ? "" : "s"}`)
console.log(`(${drafts} draft${drafts === 1 ? '' : 's'} ${includeDrafts ? 'included' : 'excluded'})\n`)

for (const type of types.sort()) {
  const files = byType[type]
  const steps = files.reduce((n, f) => n + f.total, 0)
  const doneSteps = steps - files.reduce((n, f) => n + f.pending.length, 0)
  const complete = files.filter(f => !f.pending.length).length
  const pct = steps ? Math.round((doneSteps / steps) * 100) : 100

  console.log(
    `  ${type.padEnd(11)} ${String(files.length).padStart(3)} files` +
    `   ${String(doneSteps).padStart(4)}/${String(steps).padEnd(4)} steps (${pct}%)` +
    `   ${complete} fully reviewed`)

  if (!summaryOnly) {
    const pending = files.filter(f => f.pending.length)
      .sort((a, b) => a.pending.length - b.pending.length || a.file.localeCompare(b.file))
    // A file carrying review notes is always listed, even past --next.
    const show = typeFilter ? pending
      : pending.filter((f, i) => i < nextCount || f.notes.length)
    for (const f of show) {
      console.log(`      ${f.file.replace(/^content\//, '')}`)
      console.log(`        pending: ${f.pending.join(', ')}`)
      for (const n of f.notes) console.log(`        note: ${n}`)
    }
    if (!typeFilter && pending.length > show.length) {
      console.log(`      … and ${pending.length - show.length} more ` +
                  `(node scripts/review-status.mjs --type ${type})`)
    }
    console.log()
  }
}

const orphans = Object.entries(noPipeline)
if (orphans.length) {
  console.log(`  No pipeline defined: ${orphans.map(([t, n]) => `${t} ${n}`).join(', ')}`)
  console.log(`  Which pipeline these need is open — see WP-9.\n`)
}

if (strandedNotes.length) {
  console.log(`  Review notes on files no pipeline step will reopen:`)
  for (const f of strandedNotes) {
    console.log(`      ${f.file.replace(/^content\//, '')}`)
    for (const n of f.notes) console.log(`        note: ${n}`)
  }
  console.log()
}

console.log(`  ${outstandingFiles} file${outstandingFiles === 1 ? '' : 's'} with work outstanding.\n`)
