import { FullSlug, isFolderPath, resolveRelative, slugTag } from "../util/path"
import { QuartzPluginData } from "../plugins/vfile"
import { Date, getDate } from "./Date"
import { QuartzComponent, QuartzComponentProps } from "./types"
import { GlobalConfiguration } from "../cfg"

export type SortFn = (f1: QuartzPluginData, f2: QuartzPluginData) => number

export function byDateAndAlphabetical(cfg: GlobalConfiguration): SortFn {
  return (f1, f2) => {
    // Sort by date/alphabetical
    if (f1.dates && f2.dates) {
      // sort descending
      return getDate(cfg, f2)!.getTime() - getDate(cfg, f1)!.getTime()
    } else if (f1.dates && !f2.dates) {
      // prioritize files with dates
      return -1
    } else if (!f1.dates && f2.dates) {
      return 1
    }

    // otherwise, sort lexographically by title
    const f1Title = f1.frontmatter?.title.toLowerCase() ?? ""
    const f2Title = f2.frontmatter?.title.toLowerCase() ?? ""
    return f1Title.localeCompare(f2Title)
  }
}

export function byDateAndAlphabeticalFolderFirst(cfg: GlobalConfiguration): SortFn {
  return (f1, f2) => {
    // Sort folders first
    const f1IsFolder = isFolderPath(f1.slug ?? "")
    const f2IsFolder = isFolderPath(f2.slug ?? "")
    if (f1IsFolder && !f2IsFolder) return -1
    if (!f1IsFolder && f2IsFolder) return 1

    // If both are folders or both are files, sort by date/alphabetical
    if (f1.dates && f2.dates) {
      // sort descending
      return getDate(cfg, f2)!.getTime() - getDate(cfg, f1)!.getTime()
    } else if (f1.dates && !f2.dates) {
      // prioritize files with dates
      return -1
    } else if (!f1.dates && f2.dates) {
      return 1
    }

    // otherwise, sort lexographically by title
    const f1Title = f1.frontmatter?.title.toLowerCase() ?? ""
    const f2Title = f2.frontmatter?.title.toLowerCase() ?? ""
    return f1Title.localeCompare(f2Title)
  }
}

type Props = {
  limit?: number
  sort?: SortFn
} & QuartzComponentProps

export const PageList: QuartzComponent = ({ cfg, fileData, allFiles, limit, sort }: Props) => {
  const sorter = sort ?? byDateAndAlphabeticalFolderFirst(cfg)
  let list = allFiles.sort(sorter)
  if (limit) {
    list = list.slice(0, limit)
  }

  return (
    <ul class="section-ul">
      {list.map((page) => {
        const title = page.frontmatter?.title
        // Check frontmatter description first, then abstract, then fall back to auto-generated description
        const description =
          (page.frontmatter?.description as string) ??
          (page.frontmatter?.abstract as string) ??
          page.description ??
          null

        // Get tags from frontmatter (already processed as array by frontmatter plugin)
        const tags = page.frontmatter?.tags ?? []

        // Support both 'category' (singular) and 'categories' (plural) from frontmatter
        const categoryRaw = page.frontmatter?.category ?? page.frontmatter?.categories
        const categories: string[] = Array.isArray(categoryRaw)
          ? categoryRaw
          : typeof categoryRaw === "string"
            ? [categoryRaw]
            : []

        return (
          <li class="section-li">
            <div class="section">
              <div class="desc">
                <h3>
                  <a href={resolveRelative(fileData.slug!, page.slug!)} class="internal">
                    {title}
                  </a>
                </h3>
                {description && <p class="description">{description}</p>}
                {categories.length > 0 && (
                  <ul class="categories">
                    {categories.map((category) => (
                      <li>
                        <a
                          class="internal category-link"
                          href={resolveRelative(fileData.slug!, `tags/${slugTag(category)}` as FullSlug)}
                        >
                          {category}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
                {tags.length > 0 && (
                  <ul class="tags">
                    {tags.map((tag) => (
                      <li>
                        <a
                          class="internal tag-link"
                          href={resolveRelative(fileData.slug!, `tags/${tag}` as FullSlug)}
                        >
                          {tag}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
                {page.dates && (
                  <p class="meta">
                    <Date date={getDate(cfg, page)!} locale={cfg.locale} />
                  </p>
                )}
              </div>
            </div>
          </li>
        )
      })}
    </ul>
  )
}

PageList.css = `
.section h3 {
  margin: 0;
}

.section .desc {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.section .description {
  margin: 0;
  color: var(--darkgray);
  font-size: 0.95rem;
  line-height: 1.5;
}

.section .meta {
  margin: 0;
  opacity: 0.6;
  font-size: 0.875rem;
}

.section .categories {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  list-style: none;
  margin: 0;
  padding: 0;
}

.section .category-link {
  background-color: var(--highlight);
  border-radius: 4px;
  padding: 0.2rem 0.5rem;
  font-size: 0.85rem;
  color: var(--secondary);
}

.section .category-link:hover {
  background-color: var(--tertiary);
  color: var(--light);
}

.section .tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  list-style: none;
  margin: 0;
  padding: 0;
}

.section .tag-link {
  background-color: var(--highlight);
  border-radius: 4px;
  padding: 0.2rem 0.5rem;
  font-size: 0.85rem;
  color: var(--secondary);
}

.section .tag-link:hover {
  background-color: var(--tertiary);
  color: var(--light);
}
`
