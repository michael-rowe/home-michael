import { FullSlug, resolveRelative } from "../util/path"
import { QuartzPluginData } from "../plugins/vfile"
import { Date, getDate } from "./Date"
import { QuartzComponent, QuartzComponentProps } from "./types"
import { byDateAndAlphabetical } from "./PageList"

interface TypeGroup {
  type: string
  notes: QuartzPluginData[]
}

export const NotesByType: QuartzComponent = ({ cfg, fileData, allFiles }: QuartzComponentProps) => {
  const sorter = byDateAndAlphabetical(cfg)

  // Group notes by type
  const typeGroups = new Map<string, QuartzPluginData[]>()

  for (const note of allFiles) {
    const type = note.frontmatter?.type
    if (type && typeof type === "string") {
        const normalizedType = type.trim();
        if (!typeGroups.has(normalizedType)) {
          typeGroups.set(normalizedType, [])
        }
        typeGroups.get(normalizedType)!.push(note)
    }
  }

  // Sort notes within each type group and sort types alphabetically
  // We might want a custom order, but alphabetical is a safe default.
  // The user might want "Courses", "Essays", "Posts", "Notes" order.
  // I'll stick to alphabetical for now, or move specific ones to top if needed.
  const sortedTypeGroups: TypeGroup[] = Array.from(typeGroups.entries())
    .map(([type, notes]) => ({
      type,
      notes: notes.sort(sorter),
    }))
    .sort((a, b) => a.type.localeCompare(b.type))

  // Helper to pluralize/capitalize header
  const getHeader = (type: string) => {
     // Simple pluralization: add 's' if not ending in 's'
     // Capitalize first letter
     let header = type.charAt(0).toUpperCase() + type.slice(1);
     if (!header.endsWith('s')) header += 's';
     return header;
  }

  return (
    <div class="notes-by-type">
      {sortedTypeGroups.map(({ type, notes }) => {
        const header = getHeader(type)
        return (
          <section class="type-section">
            <div class="type-header">
              <h2 class="type-title">
                {header}
              </h2>
              <span class="type-count">{notes.length} items</span>
            </div>

            <ul class="type-notes-list">
              {notes.map((note) => {
                const title = note.frontmatter?.title
                const description = note.frontmatter?.description ?? note.description ?? ""

                return (
                  <li class="type-note-item">
                    <div class="type-note-content">
                      <div class="type-note-header">
                        <h3 class="type-note-title">
                          <a href={resolveRelative(fileData.slug!, note.slug!)} class="internal">
                            {title}
                          </a>
                        </h3>
                        {note.dates && (
                          <time class="type-note-date">
                            <Date date={getDate(cfg, note)!} locale={cfg.locale} />
                          </time>
                        )}
                      </div>
                      {description && (
                        <p class="type-note-description">{description}</p>
                      )}
                    </div>
                  </li>
                )
              })}
            </ul>
          </section>
        )
      })}
    </div>
  )
}

NotesByType.css = `
.notes-by-type {
  display: flex;
  flex-direction: column;
  gap: 3rem;
  margin-top: 2rem;
}

.type-section {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.type-header {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 1rem;
  border-bottom: 2px solid var(--lightgray);
  padding-bottom: 0.5rem;
}

.type-title {
  margin: 0;
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--dark);
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.type-count {
  font-size: 0.9rem;
  color: var(--gray);
}

.type-notes-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.type-note-item {
  margin: 0;
  padding: 0;
}

.type-note-content {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.type-note-header {
  display: flex;
  align-items: baseline;
  gap: 1rem;
  flex-wrap: wrap;
}

.type-note-title {
  margin: 0;
  font-size: 1.1rem;
  font-weight: 600;
  flex-grow: 1;
}

.type-note-title a {
  color: var(--dark);
  text-decoration: none;
  transition: color 0.2s ease;
}

.type-note-title a:hover {
  color: var(--secondary);
}

.type-note-date {
  font-size: 0.85rem;
  color: var(--gray);
  white-space: nowrap;
}

.type-note-description {
  margin: 0;
  font-size: 0.95rem;
  line-height: 1.6;
  color: var(--darkgray);
}

@media (max-width: 768px) {
  .type-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }

  .type-note-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.25rem;
  }
}
`

export default (() => NotesByType) satisfies QuartzComponentConstructor
