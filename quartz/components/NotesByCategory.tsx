import { FullSlug, resolveRelative } from "../util/path"
import { QuartzPluginData } from "../plugins/vfile"
import { Date, getDate } from "./Date"
import { QuartzComponent, QuartzComponentProps } from "./types"
import { byDateAndAlphabetical } from "./PageList"

interface CategoryGroup {
  category: string
  notes: QuartzPluginData[]
}

export const NotesByCategory: QuartzComponent = ({ cfg, fileData, allFiles }: QuartzComponentProps) => {
  const sorter = byDateAndAlphabetical(cfg)

  // Group notes by categories
  const categoryGroups = new Map<string, QuartzPluginData[]>()

  for (const note of allFiles) {
    // Support both 'category' (singular) and 'categories' (plural) from frontmatter
    const categoryRaw = note.frontmatter?.category ?? note.frontmatter?.categories
    const categories: string[] = Array.isArray(categoryRaw)
      ? categoryRaw
      : typeof categoryRaw === "string"
        ? [categoryRaw]
        : []

    for (const category of categories) {
        // Skip empty categories
        if (!category.trim()) continue;

        const normalizedCategory = category.trim();
        
        if (!categoryGroups.has(normalizedCategory)) {
          categoryGroups.set(normalizedCategory, [])
        }
        categoryGroups.get(normalizedCategory)!.push(note)
    }
  }

  // Sort notes within each category group and sort categories alphabetically
  const sortedCategoryGroups: CategoryGroup[] = Array.from(categoryGroups.entries())
    .map(([category, notes]) => ({
      category,
      notes: notes.sort(sorter),
    }))
    .sort((a, b) => a.category.localeCompare(b.category))

  return (
    <div class="notes-by-category">
      {sortedCategoryGroups.map(({ category, notes }) => {
        const total = notes.length
        const hasMore = total > 3
        const displayedNotes = notes.slice(0, 3)

        return (
          <section class="category-section">
            <div class="category-header">
              <h2 class="category-title">
                {category}
              </h2>
              {hasMore && (
                <a
                  href={resolveRelative(fileData.slug!, `tags/${category}` as FullSlug)}
                  class="category-view-all"
                >
                  View all {total} →
                </a>
              )}
              {!hasMore && <span class="category-count">{total} items</span>}
            </div>

            <ul class="category-notes-list">
              {displayedNotes.map((note) => {
                const title = note.frontmatter?.title
                const description = note.frontmatter?.description ?? note.description ?? ""

                return (
                  <li class="category-note-item">
                    <div class="category-note-content">
                      <div class="category-note-header">
                        <h3 class="category-note-title">
                          <a href={resolveRelative(fileData.slug!, note.slug!)} class="internal">
                            {title}
                          </a>
                        </h3>
                        {note.dates && (
                          <time class="category-note-date">
                            <Date date={getDate(cfg, note)!} locale={cfg.locale} />
                          </time>
                        )}
                      </div>
                      {description && (
                        <p class="category-note-description">{description}</p>
                      )}
                    </div>
                  </li>
                )
              })}
            </ul>
            
            {hasMore && (
              <a
                href={resolveRelative(fileData.slug!, `tags/${category}` as FullSlug)}
                class="category-show-more"
              >
                Show {total - 3} more items →
              </a>
            )}
          </section>
        )
      })}
    </div>
  )
}

NotesByCategory.css = `
.notes-by-category {
  display: flex;
  flex-direction: column;
  gap: 3rem;
  margin-top: 2rem;
}

.category-section {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.category-header {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 1rem;
  border-bottom: 2px solid var(--lightgray);
  padding-bottom: 0.5rem;
}

.category-title {
  margin: 0;
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--dark);
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.category-count {
  font-size: 0.9rem;
  color: var(--gray);
}

.category-view-all {
  font-size: 0.9rem;
  color: var(--secondary);
  text-decoration: none;
  white-space: nowrap;
  transition: color 0.2s ease;
}

.category-view-all:hover {
  color: var(--tertiary);
}

.category-notes-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.category-note-item {
  margin: 0;
  padding: 0;
}

.category-note-content {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.category-note-header {
  display: flex;
  align-items: baseline;
  gap: 1rem;
  flex-wrap: wrap;
}

.category-note-title {
  margin: 0;
  font-size: 1.1rem;
  font-weight: 600;
  flex-grow: 1;
}

.category-note-title a {
  color: var(--dark);
  text-decoration: none;
  transition: color 0.2s ease;
}

.category-note-title a:hover {
  color: var(--secondary);
}

.category-note-date {
  font-size: 0.85rem;
  color: var(--gray);
  white-space: nowrap;
}

.category-note-description {
  margin: 0;
  font-size: 0.95rem;
  line-height: 1.6;
  color: var(--darkgray);
}

.category-show-more {
  display: inline-block;
  font-size: 0.9rem;
  color: var(--secondary);
  text-decoration: none;
  padding: 0.5rem 0;
  transition: color 0.2s ease;
}

.category-show-more:hover {
  color: var(--tertiary);
}

@media (max-width: 768px) {
  .category-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }

  .category-note-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.25rem;
  }
}
`

export default (() => NotesByCategory) satisfies QuartzComponentConstructor
