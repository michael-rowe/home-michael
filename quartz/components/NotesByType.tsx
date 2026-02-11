import { resolveRelative } from "../util/path"
import { QuartzPluginData } from "../plugins/vfile"
import { Date, getDate } from "./Date"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { byDateAndAlphabetical } from "./PageList"

interface TypeConfig {
  label: string
  description: string
  icon: string
}

const typeConfigs: Record<string, TypeConfig> = {
  post: {
    label: "Posts",
    description: "Short-form thinking — commentary and quick takes on emerging ideas.",
    icon: "ph-pencil-simple",
  },
  essay: {
    label: "Essays",
    description: "Long-form academic writing — structured arguments with abstracts and citations.",
    icon: "ph-file-text",
  },
  note: {
    label: "Notes",
    description: "Concept notes — atomic ideas and working definitions for quick reference.",
    icon: "ph-note",
  },
  course: {
    label: "Courses",
    description: "Structured learning — multi-lesson programmes with sequenced content.",
    icon: "ph-graduation-cap",
  },
}

const typeOrder = ["post", "essay", "note", "course"]

export const NotesByType: QuartzComponent = ({ cfg, fileData, allFiles }: QuartzComponentProps) => {
  const sorter = byDateAndAlphabetical(cfg)

  const typeGroups = new Map<string, QuartzPluginData[]>()
  for (const note of allFiles) {
    const type = note.frontmatter?.type
    if (type && typeof type === "string") {
      const normalizedType = type.trim()
      if (!typeConfigs[normalizedType]) continue
      if (!typeGroups.has(normalizedType)) typeGroups.set(normalizedType, [])
      typeGroups.get(normalizedType)!.push(note)
    }
  }

  const sortedGroups = typeOrder
    .filter((type) => typeGroups.has(type))
    .map((type) => ({ type, notes: typeGroups.get(type)!.sort(sorter) }))

  return (
    <div class="notes-by-type">
      <div class="type-overview-grid">
        {sortedGroups.map(({ type, notes }) => {
          const config = typeConfigs[type]
          return (
            <a href={`#type-${type}`} class="type-overview-card">
              <div class={`content-type content-type--${type}`}>
                <i class={`ph ${config.icon}`}></i>
                <span>{config.label}</span>
              </div>
              <p class="type-overview-description">{config.description}</p>
              <span class="type-overview-count">
                {notes.length} {notes.length === 1 ? "item" : "items"}
              </span>
            </a>
          )
        })}
      </div>

      {sortedGroups.map(({ type, notes }) => {
        const config = typeConfigs[type]
        return (
          <section class="type-section" id={`type-${type}`}>
            <h2 class="type-section-title">{config.label}</h2>
            <ul class="type-notes-list">
              {notes.map((note) => (
                <li class="type-note-item">
                  <a
                    href={resolveRelative(fileData.slug!, note.slug!)}
                    class="type-note-link internal"
                  >
                    {note.frontmatter?.title}
                  </a>
                  {note.dates && (
                    <time class="type-note-date">
                      <Date date={getDate(cfg, note)!} locale={cfg.locale} />
                    </time>
                  )}
                </li>
              ))}
            </ul>
          </section>
        )
      })}
    </div>
  )
}

NotesByType.css = `
.notes-by-type {
  margin-top: 1.5rem;
}

.type-overview-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(190px, 1fr));
  gap: 1rem;
  margin-bottom: 3rem;
}

.type-overview-card {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1rem 1.25rem;
  background-color: var(--light);
  border: 1px solid var(--lightgray);
  border-radius: 8px;
  text-decoration: none !important;
  transition: border-color 0.15s ease;
}

.type-overview-card:hover {
  border-color: var(--secondary);
}

.type-overview-description {
  margin: 0;
  font-size: 0.875rem;
  color: var(--darkgray);
  line-height: 1.4;
  flex-grow: 1;
}

.type-overview-count {
  font-size: 0.8rem;
  color: var(--gray);
}

.type-section {
  margin-bottom: 2.5rem;
  scroll-margin-top: 2rem;
}

.type-section-title {
  font-size: 1.2rem;
  font-weight: 700;
  margin: 0 0 0.75rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid var(--lightgray);
  color: var(--dark);
}

.type-notes-list {
  list-style: none;
  margin: 0;
  padding: 0;
}

.type-note-item {
  display: flex;
  align-items: baseline;
  gap: 0.75rem;
  padding: 0.45rem 0;
  border-bottom: 1px solid var(--lightgray);
}

.type-note-item:last-child {
  border-bottom: none;
}

.type-note-link {
  flex-grow: 1;
  color: var(--dark) !important;
  text-decoration: none !important;
  font-size: 0.95rem;
}

.type-note-link:hover {
  color: var(--secondary) !important;
}

.type-note-date {
  font-size: 0.8rem;
  color: var(--gray);
  white-space: nowrap;
}
`

export default (() => NotesByType) satisfies QuartzComponentConstructor
