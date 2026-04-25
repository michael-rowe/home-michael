/**
 * Resolves Obsidian wikilinks in a newsletter draft to absolute URLs for Kit.
 *
 * Usage:
 *   node scripts/resolve-newsletter-links.mjs content/Newsletters/2026-04-newsletter-draft.md
 *
 * Output:
 *   content/Newsletters/2026-04-newsletter-kit.md
 */

import fs from 'fs';
import path from 'path';

const BASE_URL = 'https://michael-rowe.github.io/home-michael';

const CONTENT_DIRS = [
  'content/Bibliography',
  'content/Courses',
  'content/Essays',
  'content/Frameworks',
  'content/Guides',
  'content/Notes',
  'content/Newsletters',
  'content/Policies',
  'content/Posts',
  'content/Presentations',
];

const inputPath = process.argv[2];
if (!inputPath) {
  console.error('Usage: node scripts/resolve-newsletter-links.mjs <newsletter-draft.md>');
  process.exit(1);
}
if (!fs.existsSync(inputPath)) {
  console.error(`File not found: ${inputPath}`);
  process.exit(1);
}

// Build a lookup map: filename stem (lowercase) → absolute URL
// URLs are derived from the file path (preserving directory capitalisation),
// which is how Quartz generates page URLs — not from the slug: frontmatter field.
function buildLinkMap() {
  const map = new Map();

  function walk(dir) {
    if (!fs.existsSync(dir)) return;
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        walk(full);
      } else if (entry.name.endsWith('.md')) {
        const stem = path.basename(entry.name, '.md');
        // Strip leading 'content/' and '.md', replace spaces with hyphens
        const urlPath = full
          .replace(/^content\//, '')
          .replace(/\.md$/, '')
          .replace(/ /g, '-');
        const url = `${BASE_URL}/${urlPath}`;
        map.set(stem.toLowerCase(), { url, stem });
      }
    }
  }

  for (const dir of CONTENT_DIRS) walk(dir);
  return map;
}

function slugify(text) {
  return text.toString().toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/--+/g, '-')
    .replace(/^-+|-+$/g, '');
}

// Resolve [[filename|display]] or [[filename]] to markdown links
function resolveWikilinks(content, map) {
  const wikilinkRe = /\[\[([^\]|#]+)(?:#[^\]|]*)?((?:\|[^\]]*)?)\]\]/g;
  let unresolved = [];

  const result = content.replace(wikilinkRe, (match, target, pipeSection) => {
    const displayText = pipeSection ? pipeSection.slice(1).trim() : target.trim();
    const key = target.trim().toLowerCase();
    const entry = map.get(key) || map.get(slugify(key));

    if (entry) {
      return `[${displayText}](${entry.url})`;
    }

    unresolved.push(target.trim());
    return displayText; // strip the wikilink syntax, keep display text
  });

  return { result, unresolved };
}

// Main
const linkMap = buildLinkMap();
const raw = fs.readFileSync(inputPath, 'utf8');
const { result, unresolved } = resolveWikilinks(raw, linkMap);

const outputPath = inputPath.endsWith('-draft.md')
  ? inputPath.replace(/-draft\.md$/, '-kit.md')
  : inputPath.replace(/\.md$/, '-kit.md');
fs.writeFileSync(outputPath, result);

console.log(`\nResolved: ${outputPath}`);
if (unresolved.length > 0) {
  console.warn(`\nUnresolved wikilinks (kept as plain text):`);
  unresolved.forEach(l => console.warn(`  [[${l}]]`));
} else {
  console.log('All wikilinks resolved.');
}
