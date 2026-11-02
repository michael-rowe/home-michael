import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { contentUrl, contentUrlPath, contentDirs, dateString } from './newsletter-lib.mjs';

// Parse command-line arguments: [month] [year] [--force]
const rawArgs = process.argv.slice(2);
const force = rawArgs.includes('--force');
const args = rawArgs.filter(a => a !== '--force');

let targetMonth = new Date().getMonth() + 1; // 1-12
let targetYear = new Date().getFullYear();

if (args.length >= 1) {
  targetMonth = parseInt(args[0], 10);
  if (args.length >= 2) {
    targetYear = parseInt(args[1], 10);
  }
}

// Validate month
if (!Number.isInteger(targetMonth) || targetMonth < 1 || targetMonth > 12) {
  console.error('Month must be between 1 and 12');
  process.exit(1);
}

// Validate year — an unparseable year yields NaN and writes a NaN-MM draft
// straight into the content tree.
if (!Number.isInteger(targetYear) || targetYear < 1970 || targetYear > 2200) {
  console.error('Year must be a four-digit year between 1970 and 2200');
  process.exit(1);
}

// Configuration
const OUTPUT_DIR = 'content/Newsletters';
const DATE_STR = `${targetYear}-${String(targetMonth).padStart(2, '0')}`;
const monthStartDate = new Date(targetYear, targetMonth - 1, 1);
const MONTH_NAME = monthStartDate.toLocaleString('en-GB', { month: 'long', year: 'numeric' });
const nextMonthYear = targetMonth === 12 ? targetYear + 1 : targetYear;
const nextMonth = targetMonth === 12 ? 1 : targetMonth + 1;

// Default `date:` for the issue — the last day of the target month, matching the
// issued archive. It is a placeholder: set the real send date by hand when the
// draft is issued.
const ISSUE_DATE = new Date(nextMonthYear, nextMonth - 1, 0)
  .toLocaleDateString('en-CA'); // YYYY-MM-DD, local time (toISOString would shift the day)

// Content subdirectories — preferred display order first, remainder appended
// alphabetically. The newsletter itself shouldn't list newsletters or media.
const PREFERRED_ORDER = ['Essays', 'Presentations', 'Posts', 'Notes'];
const ALL_CONTENT_DIRS = contentDirs(['Newsletters', 'Media']);

// Ensure output directory exists
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

console.log(`Generating newsletter skeleton for ${MONTH_NAME}...`);

function getFrontmatter(filePath) {
  const fallback = {
    title: path.basename(filePath, '.md'),
    description: '',
    slug: contentUrlPath(filePath),
    date: null,
    draft: false,
  };
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fm = matter(content).data;
    const description =
      typeof fm.description === 'string' ? fm.description.replace(/\s+/g, ' ').trim() : '';
    return {
      ...fallback,
      title: typeof fm.title === 'string' && fm.title.trim() ? fm.title.trim() : fallback.title,
      description,
      date: dateString(fm.date ?? fm.created),
      draft: fm.draft === true,
    };
  } catch (e) {
    console.warn(`Could not parse frontmatter in ${filePath}: ${e.message}`);
    return fallback;
  }
}

/**
 * Gets new content from a directory, matched by frontmatter date
 * (compared as YYYY-MM strings, so the window is timezone-proof).
 */
function getNewContent(dir) {
  if (!fs.existsSync(dir)) return [];

  function walk(currentDir) {
    let results = [];
    for (const entry of fs.readdirSync(currentDir, { withFileTypes: true })) {
      const filePath = path.join(currentDir, entry.name);
      if (entry.isDirectory()) {
        results = results.concat(walk(filePath));
      } else if (entry.name.endsWith('.md')) {
        results.push(filePath);
      }
    }
    return results;
  }

  const items = [];
  for (const file of walk(dir)) {
    const meta = getFrontmatter(file);
    if (meta.draft) continue; // don't leak embargoed/unpublished content into the draft
    if (meta.date && meta.date.slice(0, 7) === DATE_STR) {
      items.push({ ...meta, path: file });
    }
  }

  return items.sort((a, b) => b.date.localeCompare(a.date));
}

// 1. Inventory: what the site published this month. This is source material,
// not newsletter content — it is printed for the session, never written into
// the draft. An issue that lists what the site published is a digest.
const allDirData = ALL_CONTENT_DIRS.map(dir => ({
  label: path.basename(dir),
  items: getNewContent(dir),
})).filter(d => d.items.length > 0);

const contentByDir = [
  ...PREFERRED_ORDER.map(label => allDirData.find(d => d.label === label)).filter(Boolean),
  ...allDirData.filter(d => !PREFERRED_ORDER.includes(d.label)).sort((a, b) => a.label.localeCompare(b.label)),
];

const totalNewItems = contentByDir.reduce((sum, d) => sum + d.items.length, 0);

// 2. Skeleton: the house shape of an issue (see 2026-08 and 2026-09). Each
// placeholder says what the section owes the reader. Links in the draft are
// absolute URLs, so the issued file and the Kit copy match.
const draft = `---
title: "[Subject line: under 50 characters, names the lead idea]"
description: "[Preview text: 40-130 characters, extends the subject line rather than repeating it]"
date: ${ISSUE_DATE}
type: newsletter
tags: []
category: []
draft: true
---
## [Lead heading: the idea, not the month]

[The lead piece, 400-600 words. One idea a health professions educator can use or think with, grounded in a specific context: a programme, a placement, a consultation, a policy. Michael's own work can be the evidence, but the reader's situation is the subject. Close with a specific question readers could answer by replying.]

## Worth reading

[One or two pieces from elsewhere, each with a paragraph on why it matters to someone developing health professionals. The commentary is the value; a bare link is noise.]

## Something you can use

[Optional. Only what the reader can take away: slides, a handout, a note that explains a concept, a tool they can try. Say what it is for and who it helps, not that it was made. Leave the section out if nothing qualifies.]

## Quotes that resonated with me

> [Quote]
>
> [Speaker, source]

## Something for the commute

[One podcast or talk, with what the listener will get from it and how it connects to the lead.]

[One ask: a reply to the lead question, or sharing the signup page (https://michael-rowe.github.io/home-michael/newsletter).]
`;

const fileName = `${DATE_STR}-newsletter-draft.md`;
const outputPath = path.join(OUTPUT_DIR, fileName);

if (fs.existsSync(outputPath) && !force) {
  console.error(`\nRefusing to overwrite existing draft: ${outputPath}`);
  console.error('Re-run with --force to overwrite it.');
  process.exit(1);
}

fs.writeFileSync(outputPath, draft);

console.log(`\nSkeleton written to: ${outputPath}`);
console.log('  Written with draft: true — not built, not committed.');

console.log(`\nPublished on the site in ${MONTH_NAME} (source material, not a list for the issue):`);
if (totalNewItems === 0) {
  console.log('  (nothing)');
} else {
  for (const d of contentByDir) {
    console.log(`\n  ${d.label}`);
    for (const i of d.items) {
      console.log(`  - ${i.title} (${i.date})\n    ${contentUrl(i.path)}`);
      if (i.description) console.log(`    ${i.description}`);
    }
  }
}

console.log('\nTo issue it: fill the skeleton, add tags and category from');
console.log('content/personas/taxonomy.md, set draft: false, and rename to');
console.log(`  ${path.join(OUTPUT_DIR, `${DATE_STR}.md`)}`);
console.log('Nothing publishes until that rename — see CLAUDE.md, type: newsletter.');
