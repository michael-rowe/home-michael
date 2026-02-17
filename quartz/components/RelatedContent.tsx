import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { QuartzPluginData } from "../plugins/vfile"
import { FullSlug, resolveRelative, simplifySlug } from "../util/path"
import { byDateAndAlphabetical } from "./PageList"
import { getDate } from "./Date"

const RelatedContent: QuartzComponent = ({
  fileData,
  allFiles,
  cfg,
}: QuartzComponentProps) => {
  const type = fileData.frontmatter?.type as string | undefined
  const validTypes = ["post", "note", "essay", "presentation"]
  if (!type || !validTypes.includes(type)) return null

  const currentSlug = fileData.slug!

  const slugifyText = (text: string): string => {
    return text
      .replace(/\s/g, "-")
      .replace(/&/g, "-and-")
      .replace(/%/g, "-percent")
      .replace(/\?/g, "")
      .replace(/#/g, "")
  }

  // --- Tier 1: explicit `related` wikilinks from frontmatter ---
  const relatedSlugs = new Set<string>()
  const relatedField = fileData.frontmatter?.related
  if (relatedField) {
    const relatedList = Array.isArray(relatedField) ? relatedField : [relatedField]
    for (const item of relatedList) {
      const match = typeof item === "string" ? item.match(/\[\[([^\]]+)\]\]/) : null
      if (!match) continue
      const linkText = match[1]
      const slugifiedLink = slugifyText(linkText)

      // For notes: search Notes section first, then all files
      let found = type === "note"
        ? allFiles.find(
            (f) =>
              f.slug?.startsWith("Notes/") &&
              (simplifySlug(f.slug!) === slugifiedLink ||
                f.slug?.endsWith(`/${slugifiedLink}`) ||
                f.frontmatter?.title === linkText)
          )
        : undefined

      if (!found) {
        found = allFiles.find(
          (f) =>
            f.frontmatter?.title === linkText ||
            simplifySlug(f.slug!) === slugifiedLink ||
            f.slug?.endsWith(`/${slugifiedLink}`)
        )
      }

      if (found && found.slug !== currentSlug) {
        relatedSlugs.add(found.slug!)
      }
    }
  }

  const explicitRelated = Array.from(relatedSlugs)
    .map((slug) => allFiles.find((f) => f.slug === slug))
    .filter((f) => f !== undefined)

  // --- Tier 2: category matches across Notes, Posts, Essays ---
  const rawCategory = fileData.frontmatter?.category
  const currentCategories: string[] = Array.isArray(rawCategory)
    ? rawCategory.map((c: string) => c.toLowerCase())
    : typeof rawCategory === "string" && rawCategory
      ? [rawCategory.toLowerCase()]
      : []

  const isValidSection = (slug: string | undefined) =>
    slug?.startsWith("Notes/") ||
    slug?.startsWith("Posts/") ||
    slug?.startsWith("Essays/")

  const categoryMatches =
    currentCategories.length > 0
      ? allFiles
          .filter((f) => {
            if (
              !isValidSection(f.slug) ||
              f.slug?.endsWith("/index") ||
              f.slug === currentSlug ||
              relatedSlugs.has(f.slug!)
            )
              return false
            const fileCategory = f.frontmatter?.category
            const fileCategories: string[] = Array.isArray(fileCategory)
              ? fileCategory.map((c: string) => c.toLowerCase())
              : typeof fileCategory === "string" && fileCategory
                ? [fileCategory.toLowerCase()]
                : []
            return fileCategories.some((fc) => currentCategories.includes(fc))
          })
          .sort(byDateAndAlphabetical(cfg))
      : []

  const combined = [
    ...explicitRelated,
    ...categoryMatches.filter((f) => !explicitRelated.some((e) => e?.slug === f.slug)),
  ]

  if (combined.length >= 3) {
    return renderSection(combined.slice(0, 3), fileData.slug!)
  }

  // --- Tier 3: tag-scored matches as fallback ---
  const currentTags = fileData.frontmatter?.tags
  const currentTagSet = new Set<string>()
  if (Array.isArray(currentTags)) {
    currentTags.forEach((tag: string) => currentTagSet.add(tag.toLowerCase().trim()))
  } else if (typeof currentTags === "string" && currentTags) {
    ;(currentTags as string).split(",").forEach((tag: string) => currentTagSet.add(tag.toLowerCase().trim()))
  }

  const alreadyIncluded = new Set(combined.map((f) => f?.slug))

  const tagScored = currentTagSet.size > 0
    ? allFiles
        .filter(
          (f) =>
            isValidSection(f.slug) &&
            !f.slug?.endsWith("/index") &&
            f.slug !== currentSlug &&
            !alreadyIncluded.has(f.slug)
        )
        .map((f) => {
          const fileTags = f.frontmatter?.tags
          const fileTagSet = new Set<string>()
          if (Array.isArray(fileTags)) {
            fileTags.forEach((tag: string) => fileTagSet.add(tag.toLowerCase().trim()))
          } else if (typeof fileTags === "string") {
            ;(fileTags as string).split(",").forEach((tag: string) => fileTagSet.add(tag.toLowerCase().trim()))
          }
          let shared = 0
          currentTagSet.forEach((tag) => { if (fileTagSet.has(tag)) shared++ })
          return { f, shared }
        })
        .filter(({ shared }) => shared > 0)
        .sort((a, b) => {
          if (b.shared !== a.shared) return b.shared - a.shared
          const aDate = getDate(cfg, a.f)
          const bDate = getDate(cfg, b.f)
          if (aDate && bDate) return bDate.getTime() - aDate.getTime()
          return 0
        })
        .map(({ f }) => f)
    : []

  const withFallback = [
    ...combined,
    ...tagScored.filter((f) => !alreadyIncluded.has(f.slug)),
  ].slice(0, 3)

  if (withFallback.length === 0) return null

  return renderSection(withFallback, fileData.slug!)
}

function renderSection(
  items: QuartzPluginData[],
  currentSlug: FullSlug,
) {
  return (
    <section class="related-content" aria-label="Related content">
      <h3>Continue reading</h3>
      <ul>
        {items.map((item) => (
          <li>
            <a href={resolveRelative(currentSlug, item.slug!)} class="internal">
              {item.frontmatter?.title}
            </a>
            {item.frontmatter?.description && (
              <p class="related-description">{item.frontmatter.description as string}</p>
            )}
          </li>
        ))}
      </ul>
    </section>
  )
}

RelatedContent.css = `
.related-content {
  margin-top: 2rem;
  padding-top: 1.5rem;
  border-top: 1px solid var(--lightgray);

  h3 {
    font-size: 0.9rem;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: var(--gray);
    margin-bottom: 0.75rem;
    font-weight: 600;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  li {
    a {
      font-weight: 500;
      color: var(--secondary);
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }

    .related-description {
      font-size: 0.85rem;
      color: var(--gray);
      margin: 0.15rem 0 0;
      line-height: 1.4;
    }
  }
}
`

export default (() => RelatedContent) satisfies QuartzComponentConstructor
