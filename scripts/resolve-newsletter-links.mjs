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
import { slug as slugAnchor } from 'github-slugger';
import { contentUrl, contentDirs, sluggify, BASE_URL } from './newsletter-lib.mjs';

const CONTENT_DIRS = contentDirs(['Media']);

const inputPath = process.argv[2];
if (!inputPath) {
  console.error('Usage: node scripts/resolve-newsletter-links.mjs <newsletter-draft.md>');
  process.exit(1);
}
if (!fs.existsSync(inputPath)) {
  console.error(`File not found: ${inputPath}`);
  process.exit(1);
}

// Build a lookup map: link target (lowercase) → absolute URL.
// Each file is registered under every suffix of its path under content/ — so
// content/Notes/context engineering.md answers to both [[Notes/context
// engineering]] and [[context engineering]] — in both the raw and the sluggified
// spelling. The folder-qualified form is the house convention for internal
// links, and resolving only bare stems shipped those as unlinked plain text.
// URLs come from contentUrl() in newsletter-lib.mjs, which replicates Quartz's
// path-based slugify — the same logic the generator uses, so the two scripts
// agree. Key collisions resolve last-write-wins, so warn loudly: a wrong link
// in a sent email can't be corrected.
function buildLinkMap() {
  const map = new Map();
  // One collision reaches setEntry under several keys (the raw and sluggified
  // spellings of the same stem), so report each colliding pair once.
  const warned = new Set();

  // Keys come in two tiers. Tier 0 is the file's own spelling; tier 1 is the
  // sluggified spelling, which is only an alias. A tier-1 alias must never
  // displace a tier-0 key, or a file whose name literally is
  // "context-sovereignty" would lose [[context-sovereignty]] to a sibling
  // named "context sovereignty".
  function add(key, url, relPath, tier) {
    if (key === 'index') return; // resolved to the site root in resolveWikilinks
    const existing = map.get(key);
    if (existing) {
      if (existing.tier < tier) return; // keep the more exact spelling
      if (existing.tier === tier && existing.url !== url) {
        const pair = `${existing.url}|${url}`;
        if (!warned.has(pair)) {
          warned.add(pair);
          console.warn(
            `Warning: duplicate link target "${key}" — [[${key}]] will resolve to ${url}, not ${existing.url}. Qualify it with its folder to disambiguate.`,
          );
        }
      }
    }
    map.set(key, { url, relPath, tier });
  }

  // Register every suffix of the path so a file answers to its folder-qualified
  // form as well as its bare stem: content/Notes/context engineering.md is
  // reachable as [[Notes/context engineering]] and [[context engineering]].
  function setEntry(relPath, url) {
    const forms = [relPath, sluggify(relPath)];
    forms.forEach((form, tier) => {
      const parts = form.toLowerCase().split('/');
      for (let i = 0; i < parts.length; i++) {
        add(parts.slice(i).join('/'), url, relPath, tier);
      }
    });
  }

  function walk(dir) {
    if (!fs.existsSync(dir)) return;
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        walk(full);
      } else if (entry.name.endsWith('.md')) {
        setEntry(full.replace(/^content\//, '').replace(/\.md$/, ''), contentUrl(full));
      }
    }
  }

  for (const dir of CONTENT_DIRS) walk(dir);

  // Root-level pages (content/*.md) — the generator's "Minor changes" section
  // links to these by stem.
  for (const entry of fs.readdirSync('content', { withFileTypes: true })) {
    if (entry.isFile() && entry.name.endsWith('.md')) {
      const stem = path.basename(entry.name, '.md');
      setEntry(stem, contentUrl(path.join('content', entry.name)));
    }
  }

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

// Resolve [[filename#anchor|display]] or [[filename]] to markdown links.
// Anchors are re-slugged with github-slugger to match the heading IDs Quartz
// itself generates (quartz/plugins/transformers/toc.ts), not carried through
// as raw heading text. Uses the stateless `slug()` form since duplicate-heading
// disambiguation (e.g. a second "#Overview" becoming "#overview-1") would
// require parsing the full heading list of each target document.
function resolveWikilinks(content, map) {
  const wikilinkRe = /\[\[([^\]|#]+)(?:#([^\]|]*))?((?:\|[^\]]*)?)\]\]/g;
  let unresolved = [];

  const result = content.replace(wikilinkRe, (match, target, anchor, pipeSection) => {
    const displayText = pipeSection ? pipeSection.slice(1).trim() : target.trim();
    const key = target.trim().toLowerCase().replace(/^\/+/, '');
    const fragment = anchor ? `#${slugAnchor(anchor.trim())}` : '';

    // A bare [[index]] is the site home page. Stems collide (every folder has an
    // index.md), so resolve it explicitly to the site root rather than the map.
    if (key === 'index') {
      return `[${displayText}](${BASE_URL}/${fragment})`;
    }

    // Raw spelling, then Quartz's sluggified spelling (both preserve folder
    // structure), then the punctuation-stripping fallback for bare stems.
    const entry =
      map.get(key) || map.get(sluggify(key).toLowerCase()) || map.get(slugify(key));

    if (entry) {
      return `[${displayText}](${entry.url}${fragment})`;
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
