import { execFileSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { contentUrlPath, contentDirs, dateString } from './newsletter-lib.mjs';

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

// Configuration
const OUTPUT_DIR = 'content/Newsletters';
const DATE_STR = `${targetYear}-${String(targetMonth).padStart(2, '0')}`;
const monthStartDate = new Date(targetYear, targetMonth - 1, 1);
const MONTH_NAME = monthStartDate.toLocaleString('en-GB', { month: 'long', year: 'numeric' });
const SINCE_DATE = `${DATE_STR}-01T00:00:00`;
const nextMonthYear = targetMonth === 12 ? targetYear + 1 : targetYear;
const nextMonth = targetMonth === 12 ? 1 : targetMonth + 1;
const UNTIL_DATE = `${nextMonthYear}-${String(nextMonth).padStart(2, '0')}-01T00:00:00`;

// Content subdirectories — preferred display order first, remainder appended
// alphabetically. The newsletter itself shouldn't list newsletters or media.
const PREFERRED_ORDER = ['Essays', 'Presentations', 'Posts', 'Notes'];
const ALL_CONTENT_DIRS = contentDirs(['Newsletters', 'Media']);

// Ensure output directory exists
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

console.log(`Generating newsletter draft for ${MONTH_NAME}...`);

function runGit(gitArgs) {
  try {
    return execFileSync('git', ['-c', 'core.quotepath=off', ...gitArgs], {
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'pipe'],
    }).trim();
  } catch (e) {
    console.warn(`git ${gitArgs.join(' ')} failed: ${e.stderr?.toString().trim() || e.message}`);
    return '';
  }
}

function getFrontmatter(filePath) {
  const fallback = {
    title: path.basename(filePath, '.md'),
    description: '',
    slug: contentUrlPath(filePath),
    filename: path.basename(filePath, '.md'),
    date: null,
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

  const files = walk(dir);
  const items = [];

  for (const file of files) {
    const meta = getFrontmatter(file);
    if (meta.date && meta.date.slice(0, 7) === DATE_STR) {
      items.push({ ...meta, path: file });
    }
  }

  return items.sort((a, b) => b.date.localeCompare(a.date));
}

/**
 * Gets root-level content/*.md files modified during the month via git log,
 * with the most recent commit subject as a description.
 */
function getModifiedRootFiles() {
  const raw = runGit([
    'log', `--since=${SINCE_DATE}`, `--until=${UNTIL_DATE}`,
    '--name-only', '--format=', '--', 'content/*.md',
  ]);
  if (!raw) return [];

  const seen = new Set();
  const items = [];

  for (const line of raw.split('\n')) {
    const trimmed = line.trim();
    if (!trimmed.endsWith('.md')) continue;
    if (!/^content\/[^/]+\.md$/.test(trimmed)) continue;
    if (seen.has(trimmed)) continue;
    seen.add(trimmed);

    if (!fs.existsSync(trimmed)) continue;
    const meta = getFrontmatter(trimmed);

    // Get the most recent commit subject for this file within the month
    let commitMsg = runGit([
      'log', `--since=${SINCE_DATE}`, `--until=${UNTIL_DATE}`,
      '-1', '--format=%s', '--', trimmed,
    ]);
    // Strip conventional commit prefix and capitalise
    commitMsg = commitMsg.replace(/^(feat|fix|refactor|content|style|chore|docs):\s*/i, '');
    commitMsg = commitMsg.charAt(0).toUpperCase() + commitMsg.slice(1);

    items.push({ ...meta, path: trimmed, commitMsg });
  }

  return items;
}

// 1. Gather data
const allDirData = ALL_CONTENT_DIRS.map(dir => ({
  label: path.basename(dir),
  items: getNewContent(dir),
})).filter(d => d.items.length > 0);

// Sort: preferred order first, then remaining dirs alphabetically
const contentByDir = [
  ...PREFERRED_ORDER.map(label => allDirData.find(d => d.label === label)).filter(Boolean),
  ...allDirData.filter(d => !PREFERRED_ORDER.includes(d.label)).sort((a, b) => a.label.localeCompare(b.label)),
];

const rootFiles = getModifiedRootFiles();

// 2. Format helpers
const formatItem = (i) =>
  `- **[[${i.filename}|${i.title}]]** (${i.date})${i.description ? `: ${i.description}` : ''}`;

const formatList = (items) => items.map(formatItem).join('\n');

// 3. Build content sections
const contentSections = contentByDir.map(d =>
  `### ${d.label}\n\n${formatList(d.items)}`
).join('\n\n');

const totalNewItems = contentByDir.reduce((sum, d) => sum + d.items.length, 0);

const minorSection = rootFiles.length > 0
  ? `## Minor changes\n\n${rootFiles.map(i => `- [[${i.filename}|${i.title}]]: ${i.commitMsg}`).join('\n')}`
  : '';

// 4. Assemble draft
let draft = `---
title: "Newsletter: ${MONTH_NAME} Update"
description: "A summary of recent site updates and some behind-the-scenes context."
date: ${DATE_STR}-01
type: newsletter
status: draft
---

## Current reflections

[Placeholder: Add any additional notes, resources you're finding useful, or questions you're asking the audience.]

> [!tip] Subscriber Context
> [Write 1-2 paragraphs here about the 'Why' behind this month's work.]

## New content

${totalNewItems === 0 ? '_No new content this month._' : contentSections}

${minorSection}

---

*This draft was auto-generated from the site's project history to serve as a starting point.*
`;

const fileName = `${DATE_STR}-newsletter-draft.md`;
const outputPath = path.join(OUTPUT_DIR, fileName);

if (fs.existsSync(outputPath) && !force) {
  console.error(`\nRefusing to overwrite existing draft: ${outputPath}`);
  console.error('Re-run with --force to overwrite it.');
  process.exit(1);
}

fs.writeFileSync(outputPath, draft);

console.log(`\nSuccess! Draft generated at: ${outputPath}`);
if (totalNewItems > 0) {
  contentByDir.forEach(d => console.log(`  ${d.label}: ${d.items.length} item(s)`));
}
if (rootFiles.length > 0) {
  console.log(`  Minor changes: ${rootFiles.length} root file(s)`);
}
