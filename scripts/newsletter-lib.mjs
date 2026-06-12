/**
 * newsletter-lib.mjs
 *
 * Shared helpers for the newsletter scripts so that generate-newsletter.mjs and
 * resolve-newsletter-links.mjs agree on how a content file maps to its site URL.
 *
 * The single source of truth for URLs is Quartz's own logic: a page's URL is the
 * path under content/ run through Quartz's `sluggify` (see quartz/util/path.ts).
 * Note that Quartz ignores any `slug:` frontmatter field.
 */

import fs from 'fs';
import path from 'path';

// Mirrors `baseUrl` in quartz.config.ts — update both together if the site moves.
export const BASE_URL = 'https://michael-rowe.github.io/home-michael'

// Mirrors `ignorePatterns` in quartz.config.ts, plus Newsletters/Media handling
// is left to callers.
const EXCLUDED_DIRS = new Set(['private', 'templates', '.obsidian', 'drafts', 'personas'])

/**
 * Content subdirectories derived from what actually exists under content/,
 * minus the directories Quartz excludes from the build. Returns paths of the
 * form `content/<Dir>`.
 *
 * @param {string[]} [exclude]  additional directory names to omit
 */
export function contentDirs(exclude = []) {
  const skip = new Set([...EXCLUDED_DIRS, ...exclude])
  return fs
    .readdirSync('content', { withFileTypes: true })
    .filter((e) => e.isDirectory() && !skip.has(e.name))
    .map((e) => path.join('content', e.name))
    .sort()
}

/**
 * Replicates Quartz's `sluggify` (quartz/util/path.ts): operates per path
 * segment — spaces → hyphens, `&` → `-and-`, `%` → `-percent`, drops `?` and
 * `#`. Case is preserved (Quartz does not lowercase slugs).
 */
export function sluggify(s) {
  return s
    .split('/')
    .map((segment) =>
      segment
        .replace(/\s/g, '-')
        .replace(/&/g, '-and-')
        .replace(/%/g, '-percent')
        .replace(/\?/g, '')
        .replace(/#/g, ''),
    )
    .join('/')
    .replace(/\/$/, '')
}

/**
 * The site URL path (no base, no leading slash) for a content file, matching how
 * Quartz generates page URLs: the path under content/ run through `sluggify`.
 *
 * @param {string} filePath  path beginning with `content/…`
 */
export function contentUrlPath(filePath) {
  const urlPath = sluggify(filePath.replace(/^content\//, '').replace(/\.md$/, ''))
  return urlPath.replace(/^\/+/, '')
}

/** Full absolute URL for a content file. */
export function contentUrl(filePath) {
  return `${BASE_URL}/${contentUrlPath(filePath)}`
}

/**
 * Normalise a frontmatter date value (js-yaml parses bare dates as Date
 * objects) to a `YYYY-MM-DD` string, or null.
 */
export function dateString(value) {
  if (value == null) return null
  if (value instanceof Date) return value.toISOString().slice(0, 10)
  const m = String(value).match(/^\d{4}-\d{2}(-\d{2})?/)
  return m ? (m[1] ? m[0] : `${m[0]}-01`) : null
}
