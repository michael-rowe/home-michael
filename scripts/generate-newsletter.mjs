import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

// Parse command-line arguments for month and year
const args = process.argv.slice(2);
let targetMonth = new Date().getMonth() + 1; // 1-12
let targetYear = new Date().getFullYear();

if (args.length >= 1) {
  targetMonth = parseInt(args[0], 10);
  if (args.length >= 2) {
    targetYear = parseInt(args[1], 10);
  }
}

// Validate month
if (targetMonth < 1 || targetMonth > 12) {
  console.error('Month must be between 1 and 12');
  process.exit(1);
}

// Calculate date range for the month
const monthStartDate = new Date(targetYear, targetMonth - 1, 1);
const monthEndDate = new Date(targetYear, targetMonth, 1);

// Configuration
const OUTPUT_DIR = 'content/Newsletters';
const DATE_STR = `${targetYear}-${String(targetMonth).padStart(2, '0')}`;
const MONTH_NAME = monthStartDate.toLocaleString('en-GB', { month: 'long', year: 'numeric' });
const BASE_URL = 'https://michael-rowe.github.io/home-michael';
const SINCE_DATE = monthStartDate.toISOString();
const UNTIL_DATE = monthEndDate.toISOString();

// Ensure output directory exists
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

console.log(`Generating newsletter draft for ${MONTH_NAME}...`);

function run(cmd) {
  try {
    return execSync(cmd, { encoding: 'utf8', stdio: 'pipe' }).trim();
  } catch (e) {
    return '';
  }
}

function slugify(text) {
  return text.toString().toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');
}

/**
 * Gets metadata for new content in a specific directory
 */
function getNewContent(dir) {
  if (!fs.existsSync(dir)) return [];
  
  function walk(currentDir) {
    let results = [];
    const list = fs.readdirSync(currentDir);
    list.forEach(file => {
      const filePath = path.join(currentDir, file);
      const stat = fs.statSync(filePath);
      if (stat && stat.isDirectory()) {
        results = results.concat(walk(filePath));
      } else if (file.endsWith('.md')) {
        results.push(filePath);
      }
    });
    return results;
  }

  const files = walk(dir);

  const items = [];
  for (const file of files) {
    const meta = getFrontmatter(file);
    if (meta.date) {
      const fileDate = new Date(meta.date);
      if (fileDate >= monthStartDate && fileDate < monthEndDate) {
        items.push({
          ...meta,
          path: file
        });
      }
    }
  }
  
  return items.sort((a, b) => b.date.localeCompare(a.date));
}

function getSignificantCommits(allNewTitles) {
  const format = '%s%n%b%n---COMMIT-END---';
  const rawCommits = run(`git log --since="${SINCE_DATE}" --until="${UNTIL_DATE}" --format="${format}"`);

  if (!rawCommits) return [];

  return rawCommits.split(/---COMMIT-END---\r?\n?/)
    .map(c => {
      const lines = c.trim().split(/\r?\n/);
      let subject = lines[0] || '';
      let body = lines.slice(1).join('\n').trim();
      
      const rawSubject = subject;
      
      // Prettify Subject
      subject = subject.replace(/^(feat|fix|refactor|content|style|chore|docs):\s*/i, '');
      subject = subject.charAt(0).toUpperCase() + subject.slice(1);
      
      // Clean Body
      body = body.replace(/Co-Authored-By:.*?\n?/gi, '');
      body = body.replace(/Claude (Opus|Sonnet) \d+\.\d+ <.*?>/gi, '');
      body = body.trim();
      
      return { subject, body, rawSubject };
    })
    .filter(c => {
      if (!c.subject) return false;
      
      const sub = c.subject.toLowerCase();

      // 1. DEDUPLICATION: Only filter if it's a simple "Add/New/Publish" of a post we listed.
      // If it's a "Rename" or "Refactor", we keep it.
      const isPureAddition = /^(add|new|publish)\s/i.test(c.rawSubject);
      const isRenameOrRefactor = /rename|refactor|restructure|merge|consolidate/i.test(c.rawSubject);
      
      const mentionsNewContent = allNewTitles.some(title => {
        const cleanTitle = title.toLowerCase().split(':')[0].replace(/[^\w\s]/g, '').trim();
        return sub.includes(cleanTitle);
      });
      
      if (isPureAddition && mentionsNewContent && !isRenameOrRefactor) return false;

      // 2. BLOCKLIST: Routine noise
      const isNoise = /^(Update contact|Fix dropdown|SEO|Slug|Cruft|Formatting|Template|broken link|metadata|frontmatter|deployment|github pages|favicon|analytics|giscus|node version|package.json)/i.test(c.subject);
      if (isNoise) return false;

      // 3. SIGNIFICANCE THRESHOLD
      return c.body.length > 40; 
    });
}

function hasProvenance(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    return />\s*\[!(?:info|tip|warning|note)\]\s+(?:Provenance|provenance)/.test(content);
  } catch (e) {
    return false;
  }
}

function getFrontmatter(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const titleMatch = content.match(/^title:\s*["']?(.*?)["']?\s*$/m);
    const descMatch = content.match(/^description:\s*["']?(.*?)["']?\s*$/m);
    const slugMatch = content.match(/^slug:\s*["']?(.*?)["']?\s*$/m);
    const dateMatch = content.match(/^date:\s*["']?(.*?)["']?\s*$/m) || content.match(/^created:\s*["']?(.*?)["']?\s*$/m);

    let finalSlug = '';
    if (slugMatch && slugMatch[1]) {
      finalSlug = slugMatch[1];
    } else {
      const relativePath = filePath.replace('content/', '').replace('.md', '');
      const parts = relativePath.split('/');
      finalSlug = parts.map(p => slugify(p)).join('/');
    }

    if (finalSlug.startsWith('/')) finalSlug = finalSlug.substring(1);

    return {
      title: titleMatch ? titleMatch[1] : path.basename(filePath, '.md'),
      description: descMatch ? descMatch[1] : '',
      slug: finalSlug,
      filename: path.basename(filePath, '.md'),
      date: dateMatch ? dateMatch[1] : null,
      isRepurposed: hasProvenance(filePath)
    };
  } catch (e) {
    return { title: path.basename(filePath, '.md'), description: '', slug: filePath, filename: path.basename(filePath, '.md'), date: null, isRepurposed: false };
  }
}

// 1. Gather Data
const posts = getNewContent('content/Posts');
const essays = getNewContent('content/Essays');
const notes = getNewContent('content/Notes');

const allNewTitles = [...posts, ...essays, ...notes].map(i => i.title);
const commits = getSignificantCommits(allNewTitles);

// 2. Format Sections
const formatList = (items) => items.map(i => {
  const titleFormatted = i.isRepurposed ? `[[${i.filename}|${i.title}]]` : `**[[${i.filename}|${i.title}]]**`;
  return `- ${titleFormatted} (${i.date})${i.description ? `: ${i.description}` : ''}`;
}).join('\n');

let content = `---
title: "Newsletter: ${MONTH_NAME} Update"
description: "A summary of recent site updates and some behind-the-scenes context."
date: ${DATE_STR}
type: newsletter
status: draft
---

> [!info] Project Status
> This site was launched just over two months ago as a home for **/home/michael**. Since then, it has been under aggressive development—not just in terms of the content being published, but in the evolution of the site's architecture and the frameworks that support it. This update captures the significant velocity of the past 30 days.

> [!tip] Subscriber Context
> [Write 1-2 paragraphs here about the 'Why' behind this month's work.]

## Project updates

${essays.length > 0 ? `### Essays\n${formatList(essays)}\n` : ''}
${posts.length > 0 ? `### Posts\n${formatList(posts)}\n` : ''}
${notes.length > 0 ? `### Notes\n${formatList(notes)}\n` : ''}

${(essays.length + posts.length + notes.length === 0) ? '_No new content this month._' : ''}

## Behind the Scenes: Site & Infrastructure

${commits.length === 0 ? '_No major structural updates recorded._' : ''}

${commits.map(c => `### ${c.subject}

${c.body}
`).join('\n')}

## Current Reflections

[Placeholder: Add any additional notes, resources you're finding useful, or questions you're asking the audience.]

---

*This draft was auto-generated from the site's project history to serve as a starting point.*
`;

const fileName = `${DATE_STR}-newsletter-draft.md`;
const outputPath = path.join(OUTPUT_DIR, fileName);

fs.writeFileSync(outputPath, content);

console.log(`\nSuccess! Draft generated at: ${outputPath}`);
