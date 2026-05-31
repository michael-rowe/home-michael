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
import { contentUrl, BASE_URL } from './newsletter-lib.mjs';

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

// Build a lookup map: filename stem (lowercase) → absolute URL.
// URLs come from contentUrl() in newsletter-lib.mjs, which honours the `slug:`
// frontmatter field when present and otherwise replicates Quartz's path-based
// slugify — the same logic the generator uses, so the two scripts agree.
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
        const content = fs.readFileSync(full, 'utf8');
        const url = contentUrl(full, content);
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

    // A bare [[index]] is the site home page. Stems collide (every folder has an
    // index.md), so resolve it explicitly to the site root rather than the map.
    if (key === 'index') {
      return `[${displayText}](${BASE_URL}/)`;
    }

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
