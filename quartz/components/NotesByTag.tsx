import { FullSlug, resolveRelative } from "../util/path"
import { QuartzPluginData } from "../plugins/vfile"
import { Date, getDate } from "./Date"
import { QuartzComponent, QuartzComponentProps } from "./types"
import { byDateAndAlphabetical } from "./PageList"

interface TagGroup {
  tag: string
  notes: QuartzPluginData[]
}

export const NotesByTag: QuartzComponent = ({ cfg, fileData, allFiles }: QuartzComponentProps) => {
  const sorter = byDateAndAlphabetical(cfg)

  // Group notes by tags
  const tagGroups = new Map<string, QuartzPluginData[]>()
  const untaggedNotes: QuartzPluginData[] = []

  for (const note of allFiles) {
    const tags = note.frontmatter?.tags ?? []

    if (tags.length === 0) {
      untaggedNotes.push(note)
    } else {
      for (const tag of tags) {
        if (!tagGroups.has(tag)) {
          tagGroups.set(tag, [])
        }
        tagGroups.get(tag)!.push(note)
      }
    }
  }

  // Sort notes within each tag group and limit to 5
  const sortedTagGroups: TagGroup[] = Array.from(tagGroups.entries())
    .map(([tag, notes]) => ({
      tag,
      notes: notes.sort(sorter).slice(0, 5),
    }))
    .sort((a, b) => a.tag.localeCompare(b.tag))

  // Add untagged notes if any exist
  if (untaggedNotes.length > 0) {
    sortedTagGroups.push({
      tag: "Untagged",
      notes: untaggedNotes.sort(sorter).slice(0, 5),
    })
  }

  const totalNotesInTag = (tag: string) => {
    if (tag === "Untagged") return untaggedNotes.length
    return tagGroups.get(tag)?.length ?? 0
  }

  return (
    <div class="notes-by-tag">
      {sortedTagGroups.map(({ tag, notes }) => {
        const total = totalNotesInTag(tag)
        const hasMore = total > 5

        return (
          <section class="tag-section">
            <div class="tag-header">
              <h2 class="tag-title">
                {tag !== "Untagged" && <span class="tag-icon">#</span>}
                {tag}
              </h2>
              {tag !== "Untagged" && (
                <a
                  href={resolveRelative(fileData.slug!, `tags/${tag}` as FullSlug)}
                  class="tag-view-all"
                >
                  View all {total} →
                </a>
              )}
            </div>

            <ul class="tag-notes-list">
              {notes.map((note) => {
                const title = note.frontmatter?.title
                const description = note.frontmatter?.description ?? note.description ?? ""

                return (
                  <li class="tag-note-item">
                    <div class="tag-note-content">
                      <div class="tag-note-header">
                        <h3 class="tag-note-title">
                          <a href={resolveRelative(fileData.slug!, note.slug!)} class="internal">
                            {title}
                          </a>
                        </h3>
                        {note.dates && (
                          <time class="tag-note-date">
                            <Date date={getDate(cfg, note)!} locale={cfg.locale} />
                          </time>
                        )}
                      </div>
                      {description && (
                        <p class="tag-note-description">{description}</p>
                      )}
                    </div>
                  </li>
                )
              })}
            </ul>

            {hasMore && tag !== "Untagged" && (
              <a
                href={resolveRelative(fileData.slug!, `tags/${tag}` as FullSlug)}
                class="tag-show-more"
              >
                Show {total - 5} more notes →
              </a>
            )}
          </section>
        )
      })}
    </div>
  )
}

NotesByTag.css = `
.notes-by-tag {
  display: flex;
  flex-direction: column;
  gap: 3rem;
  margin-top: 2rem;
}

.tag-section {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.tag-header {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 1rem;
  border-bottom: 2px solid var(--lightgray);
  padding-bottom: 0.5rem;
}

.tag-title {
  margin: 0;
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--dark);
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.tag-icon {
  color: var(--secondary);
  font-weight: 600;
}

.tag-view-all {
  font-size: 0.9rem;
  color: var(--secondary);
  text-decoration: none;
  white-space: nowrap;
  transition: color 0.2s ease;
}

.tag-view-all:hover {
  color: var(--tertiary);
}

.tag-notes-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.tag-note-item {
  margin: 0;
  padding: 0;
}

.tag-note-content {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.tag-note-header {
  display: flex;
  align-items: baseline;
  gap: 1rem;
  flex-wrap: wrap;
}

.tag-note-title {
  margin: 0;
  font-size: 1.1rem;
  font-weight: 600;
  flex-grow: 1;
}

.tag-note-title a {
  color: var(--dark);
  text-decoration: none;
  transition: color 0.2s ease;
}

.tag-note-title a:hover {
  color: var(--secondary);
}

.tag-note-date {
  font-size: 0.85rem;
  color: var(--gray);
  white-space: nowrap;
}

.tag-note-description {
  margin: 0;
  font-size: 0.95rem;
  line-height: 1.6;
  color: var(--darkgray);
}

.tag-show-more {
  display: inline-block;
  font-size: 0.9rem;
  color: var(--secondary);
  text-decoration: none;
  padding: 0.5rem 0;
  transition: color 0.2s ease;
}

.tag-show-more:hover {
  color: var(--tertiary);
}

@media (max-width: 768px) {
  .tag-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }

  .tag-note-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.25rem;
  }
}
`
