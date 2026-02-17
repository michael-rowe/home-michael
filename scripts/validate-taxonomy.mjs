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
const TYPED_CONTENT = new Set(['post', 'essay', 'note', 'course', 'lesson', 'framework', 'bib', 'presentation'])

// ── Args ───────────────────────────────────────────────────────────────────

const args       = process.argv.slice(2)
const strict     = args.includes('--strict')
const summaryOnly = args.includes('--summary')
const pathArg    = (() => {
  const i = args.indexOf('--path')
  return i !== -1 ? args[i + 1] : null
})()

// ── Load taxonomy ──────────────────────────────────────────────────────────

if (!fs.existsSync(TAXONOMY_FILE)) {
  console.error(`Taxonomy file not found: ${TAXONOMY_FILE}`)
  process.exit(1)
}

const taxonomyRaw  = fs.readFileSync(TAXONOMY_FILE, 'utf-8')
const { data: tax } = matter(taxonomyRaw)

// Normalise a term: lowercase, collapse hyphens/underscores to spaces, trim
const normalise = s => s.trim().toLowerCase().replace(/[-_]+/g, ' ').replace(/\s+/g, ' ')

const approvedCategories = new Set(
  (tax.categories ?? []).map(c => normalise(c))
)
const approvedTags = new Set(
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

let checkedFiles   = 0
let skippedFiles   = 0
let missingTypeFiles = 0

for (const filePath of files) {
  const content = fs.readFileSync(filePath, 'utf-8')
  const { data: fm } = matter(content)
  const type = fm.type?.trim()

  // Only validate typed content
  if (!type || !TYPED_CONTENT.has(type)) {
    skippedFiles++
    continue
  }

  checkedFiles++

  // Check category / categories
  const categoryRaw = fm.category ?? fm.categories
  const categories = Array.isArray(categoryRaw)
    ? categoryRaw
    : typeof categoryRaw === 'string' && categoryRaw.trim()
      ? [categoryRaw]
      : []

  for (const cat of categories) {
    const normalised = normalise(cat)
    if (!normalised) continue
    if (!approvedCategories.has(normalised)) {
      if (!unknownCategories.has(normalised)) unknownCategories.set(normalised, new Set())
      unknownCategories.get(normalised).add(filePath)
    }
  }

  // Check tags
  const tags = Array.isArray(fm.tags) ? fm.tags : []
  for (const tag of tags) {
    if (typeof tag !== 'string') continue
    const normalised = normalise(tag)
    if (!normalised) continue
    if (!approvedTags.has(normalised)) {
      if (!unknownTags.has(normalised)) unknownTags.set(normalised, new Set())
      unknownTags.get(normalised).add(filePath)
    }
  }
}

// ── Report ─────────────────────────────────────────────────────────────────

const totalIssues = unknownCategories.size + unknownTags.size
const pad = s => `  ${s}`

console.log()
console.log('─── Taxonomy validator ───────────────────────────────────')
console.log(`  Taxonomy:  ${approvedCategories.size} categories, ${approvedTags.size} tags`)
console.log(`  Scanned:   ${checkedFiles} content files (${skippedFiles} skipped — no type)`)
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
