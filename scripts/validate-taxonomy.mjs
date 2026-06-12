/**
 * validate-taxonomy.mjs
 *
 * Checks that all `category` and `tags` frontmatter values across content files
 * match the approved vocabulary in content/personas/taxonomy.md.
 *
 * Usage:
 *   node scripts/validate-taxonomy.mjs                  # check all content
 *   node scripts/validate-taxonomy.mjs --path content/Posts   # check a subtree
 *   node scripts/validate-taxonomy.mjs --strict          # exit 1 if issues found (for CI)
 *   node scripts/validate-taxonomy.mjs --summary         # show counts only, no file detail
 */

import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

// ── Config ─────────────────────────────────────────────────────────────────

const TAXONOMY_FILE = 'content/personas/taxonomy.md'
const CONTENT_DIR   = 'content'

// Directories excluded from the Quartz build — skip these too
const IGNORE_DIRS = new Set(['private', 'templates', '.obsidian', 'drafts', 'personas'])

// Content types that are expected to have category/tags (skip structural pages)
const TYPED_CONTENT = new Set(['post', 'essay', 'note', 'course', 'lesson', 'framework', 'bib', 'presentation', 'guide'])

// ── Args ───────────────────────────────────────────────────────────────────

const args       = process.argv.slice(2)
const strict     = args.includes('--strict')
const summaryOnly = args.includes('--summary')
const pathArg    = (() => {
  const i = args.indexOf('--path')
  if (i === -1) return null
  const value = args[i + 1]
  if (!value || value.startsWith('--')) {
    console.error('--path requires a directory argument, e.g. --path content/Posts')
    process.exit(1)
  }
  return value
})()

// ── Load taxonomy ──────────────────────────────────────────────────────────

if (!fs.existsSync(TAXONOMY_FILE)) {
  console.error(`Taxonomy file not found: ${TAXONOMY_FILE}`)
  process.exit(1)
}

const taxonomyRaw  = fs.readFileSync(TAXONOMY_FILE, 'utf-8')
const { data: tax } = matter(taxonomyRaw)

// Normalise a term: lowercase, collapse hyphens/underscores to spaces, trim.
// Used for category matching and for suggesting the canonical form of a
// malformed tag — NOT for tag validation, which is literal (tags must use the
// exact hyphenated canonical form; Obsidian doesn't support tags with spaces).
const normalise = s => String(s).trim().toLowerCase().replace(/[-_]+/g, ' ').replace(/\s+/g, ' ')

const approvedCategories = new Set(
  (tax.categories ?? []).map(c => normalise(c))
)
// Literal (lowercased) canonical tags for validation…
const approvedTagsLiteral = new Set(
  (tax.tags ?? []).map(t => String(t).trim().toLowerCase())
)
// …and normalised forms for recognising a malformed variant of an approved tag
const approvedTagsNormalised = new Set(
  (tax.tags ?? []).map(t => normalise(t))
)

// ── Collect markdown files ─────────────────────────────────────────────────

function collectFiles(dir) {
  const results = []
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.isDirectory()) {
      if (IGNORE_DIRS.has(entry.name)) continue
      results.push(...collectFiles(path.join(dir, entry.name)))
    } else if (entry.name.endsWith('.md')) {
      results.push(path.join(dir, entry.name))
    }
  }
  return results
}

const searchRoot = pathArg ?? CONTENT_DIR
if (!fs.existsSync(searchRoot)) {
  console.error(`Path not found: ${searchRoot}`)
  process.exit(1)
}

const files = collectFiles(searchRoot)

// ── Validate ───────────────────────────────────────────────────────────────

const unknownCategories = new Map() // term → Set<filePath>
const unknownTags       = new Map() // term → Set<filePath>
const malformedTags     = new Map() // "written → canonical" → Set<filePath>

// Replicates Quartz's coerceToArray (quartz/plugins/transformers/frontmatter.ts):
// a scalar string splits on commas; numbers are stringified. Anything Quartz
// would render as a tag gets validated.
function coerceToArray(input) {
  if (input === undefined || input === null) return []
  if (!Array.isArray(input)) {
    input = input.toString().split(',').map(s => s.trim())
  }
  return input
    .filter(v => typeof v === 'string' || typeof v === 'number')
    .map(v => v.toString())
}

let checkedFiles   = 0
let skippedFiles   = 0
let skippedDrafts  = 0

for (const filePath of files) {
  const content = fs.readFileSync(filePath, 'utf-8')
  const { data: fm } = matter(content)
  const type = typeof fm.type === 'string' ? fm.type.trim() : null

  // Only validate typed content
  if (!type || !TYPED_CONTENT.has(type)) {
    skippedFiles++
    continue
  }

  // Drafts never publish, so they don't gate CI (--strict). They're still
  // reported in normal runs so issues surface before draft: false is set.
  if (strict && fm.draft === true) {
    skippedDrafts++
    continue
  }

  checkedFiles++

  // Check category / categories
  const categories = coerceToArray(fm.category ?? fm.categories)

  for (const cat of categories) {
    const normalised = normalise(cat)
    if (!normalised) continue
    if (!approvedCategories.has(normalised)) {
      if (!unknownCategories.has(normalised)) unknownCategories.set(normalised, new Set())
      unknownCategories.get(normalised).add(filePath)
    }
  }

  // Check tags — coerced the way Quartz coerces them (tag: alias, scalar
  // comma-splitting, numbers), then validated literally against the canonical
  // hyphenated forms.
  const tags = coerceToArray(fm.tags ?? fm.tag)
  for (const tag of tags) {
    const literal = tag.trim().toLowerCase()
    if (!literal) continue
    if (approvedTagsLiteral.has(literal)) continue

    const normalised = normalise(tag)
    if (approvedTagsNormalised.has(normalised)) {
      // An approved tag written in the wrong form (spaces/underscores)
      const canonical = normalised.replace(/ /g, '-')
      const key = `"${tag.trim()}" → ${canonical}`
      if (!malformedTags.has(key)) malformedTags.set(key, new Set())
      malformedTags.get(key).add(filePath)
    } else {
      if (!unknownTags.has(normalised)) unknownTags.set(normalised, new Set())
      unknownTags.get(normalised).add(filePath)
    }
  }
}

// ── Report ─────────────────────────────────────────────────────────────────

const totalIssues = unknownCategories.size + unknownTags.size + malformedTags.size
const pad = s => `  ${s}`

console.log()
console.log('─── Taxonomy validator ───────────────────────────────────')
console.log(`  Taxonomy:  ${approvedCategories.size} categories, ${approvedTagsLiteral.size} tags`)
console.log(
  `  Scanned:   ${checkedFiles} content files (${skippedFiles} skipped — no type${
    skippedDrafts > 0 ? `; ${skippedDrafts} drafts not gated` : ''
  })`,
)
console.log()

if (totalIssues === 0) {
  console.log('  ✓ All categories and tags match the approved taxonomy.')
  console.log()
  process.exit(0)
}

// Unknown categories
if (unknownCategories.size > 0) {
  console.log(`  ✗ Unknown categories (${unknownCategories.size}):`)
  console.log()
  for (const [term, filePaths] of [...unknownCategories].sort()) {
    console.log(pad(`"${term}"`))
    if (!summaryOnly) {
      for (const f of filePaths) console.log(pad(pad(`↳ ${f}`)))
    }
  }
  console.log()
  console.log('  To approve, add to taxonomy.md under `categories:`:')
  for (const [term] of [...unknownCategories].sort()) {
    console.log(pad(`  - ${term}`))
  }
  console.log()
}

// Malformed tags (approved term, wrong written form — tags must be hyphenated)
if (malformedTags.size > 0) {
  console.log(`  ✗ Malformed tags (${malformedTags.size}) — use the hyphenated canonical form:`)
  console.log()
  for (const [key, filePaths] of [...malformedTags].sort()) {
    console.log(pad(key))
    if (!summaryOnly) {
      for (const f of filePaths) console.log(pad(pad(`↳ ${f}`)))
    }
  }
  console.log()
}

// Unknown tags
if (unknownTags.size > 0) {
  console.log(`  ✗ Unknown tags (${unknownTags.size}):`)
  console.log()
  for (const [term, filePaths] of [...unknownTags].sort()) {
    console.log(pad(`"${term}"`))
    if (!summaryOnly) {
      for (const f of filePaths) console.log(pad(pad(`↳ ${f}`)))
    }
  }
  console.log()
  console.log('  To approve, add to taxonomy.md under `tags:`:')
  for (const [term] of [...unknownTags].sort()) {
    console.log(pad(`  - ${term}`))
  }
  console.log()
}

console.log('──────────────────────────────────────────────────────────')
console.log()

if (strict) {
  process.exit(1)
}
