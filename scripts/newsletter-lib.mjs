/**
 * newsletter-lib.mjs
 *
 * Shared helpers for the newsletter scripts so that generate-newsletter.mjs and
 * resolve-newsletter-links.mjs agree on how a content file maps to its site URL.
 *
 * The single source of truth for URLs is Quartz's own logic: a page's URL is the
 * `slug:` frontmatter field when present, otherwise the path under content/ run
 * through Quartz's `sluggify` (see quartz/util/path.ts).
 */

export const BASE_URL = 'https://michael-rowe.github.io/home-michael'

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

/** Extract the raw `slug:` frontmatter value from file content, or null. */
export function readSlugField(content) {
  const m = content.match(/^slug:\s*["']?(.*?)["']?\s*$/m)
  return m && m[1].trim() ? m[1].trim() : null
}

/**
 * The site URL path (no base, no leading slash) for a content file, matching how
 * Quartz generates page URLs: honour the `slug:` frontmatter field when present,
 * otherwise derive it from the path under content/ via `sluggify`.
 *
 * @param {string} filePath  path beginning with `content/…`
 * @param {string} [fileContent]  the file's text, used to read `slug:`
 */
export function contentUrlPath(filePath, fileContent) {
  const explicit = fileContent != null ? readSlugField(fileContent) : null
  const urlPath = explicit ?? sluggify(filePath.replace(/^content\//, '').replace(/\.md$/, ''))
  return urlPath.replace(/^\/+/, '')
}

/** Full absolute URL for a content file. */
export function contentUrl(filePath, fileContent) {
  return `${BASE_URL}/${contentUrlPath(filePath, fileContent)}`
}
