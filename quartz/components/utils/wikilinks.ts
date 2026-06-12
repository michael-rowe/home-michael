import { QuartzPluginData } from "../../plugins/vfile"
import { simplifySlug } from "../../util/path"

/**
 * Shared resolver for `related:` frontmatter wikilinks, used by
 * RelatedContent, ContextualNav, and MobileNav. Resolution order: exact slug
 * match (so explicit page-paths like [[Notes/context-engineering]] always win),
 * then title match, then basename fallback — the fallback can be ambiguous
 * when two files share a basename, which is why it comes last.
 */

/** Mirrors Quartz's sluggify (quartz/util/path.ts) per path segment. */
export function slugifyText(text: string): string {
  return text
    .replace(/\s/g, "-")
    .replace(/&/g, "-and-")
    .replace(/%/g, "-percent")
    .replace(/\?/g, "")
    .replace(/#/g, "")
}

/**
 * Resolve a single `related:` entry (e.g. `"[[Notes/some-note]]"` or
 * `"[[Some title|display]]"`) to a file. `preferFolder` (e.g. `"Notes/"`)
 * scopes the first lookup pass to that folder.
 */
export function resolveWikilink(
  allFiles: QuartzPluginData[],
  item: unknown,
  preferFolder?: string,
): QuartzPluginData | undefined {
  const match = typeof item === "string" ? item.match(/\[\[([^\]]+)\]\]/) : null
  if (!match) return undefined
  const linkText = match[1].split("|")[0].split("#")[0].trim()
  if (!linkText) return undefined
  const slugified = slugifyText(linkText)

  const exactMatch = (f: QuartzPluginData) =>
    f.slug === slugified || simplifySlug(f.slug!) === slugified
  const titleMatch = (f: QuartzPluginData) => f.frontmatter?.title === linkText
  const basenameMatch = (f: QuartzPluginData) => f.slug?.endsWith(`/${slugified}`)

  if (preferFolder) {
    const inFolder = allFiles.filter((f) => f.slug?.startsWith(preferFolder))
    const found =
      inFolder.find((f) => f.slug === `${preferFolder}${slugified}`) ??
      inFolder.find(exactMatch) ??
      inFolder.find(titleMatch) ??
      inFolder.find(basenameMatch)
    if (found) return found
  }

  return allFiles.find(exactMatch) ?? allFiles.find(titleMatch) ?? allFiles.find(basenameMatch)
}

/**
 * Resolve a frontmatter `related:` field (string or array of wikilinks) to
 * unique files, excluding `currentSlug`.
 */
export function resolveRelatedField(
  allFiles: QuartzPluginData[],
  relatedField: unknown,
  currentSlug: string,
  preferFolder?: string,
): QuartzPluginData[] {
  if (!relatedField) return []
  const list = Array.isArray(relatedField) ? relatedField : [relatedField]
  const seen = new Set<string>()
  const results: QuartzPluginData[] = []
  for (const item of list) {
    const found = resolveWikilink(allFiles, item, preferFolder)
    if (found && found.slug !== currentSlug && !seen.has(found.slug!)) {
      seen.add(found.slug!)
      results.push(found)
    }
  }
  return results
}
