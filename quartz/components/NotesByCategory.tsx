import { resolveRelative } from "../util/path"
import { QuartzPluginData } from "../plugins/vfile"
import { Date, getDate } from "./Date"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { byDateAndAlphabetical } from "./PageList"

interface CategoryConfig {
  label: string
  description: string
  icon: string
}

const categoryConfigs: Record<string, CategoryConfig> = {
  "AI and technology": {
    label: "AI and technology",
    description: "Artificial intelligence, language models, and their implications for knowledge work and education.",
    icon: "ph-circuit-board",
  },
  "Assessment": {
    label: "Assessment",
    description: "Designing, evaluating, and rethinking assessment in the context of contemporary scholarship.",
    icon: "ph-clipboard-text",
  },
  "Curriculum": {
    label: "Curriculum",
    description: "Curriculum design, programme development, and the organisation of learning.",
    icon: "ph-books",
  },
  "Knowledge management": {
    label: "Knowledge management",
    description: "Capturing, organising, and connecting ideas — note-taking, information systems, and personal knowledge.",
    icon: "ph-brain",
  },
  "Pedagogy": {
    label: "Pedagogy",
    description: "Teaching practice, learning theory, and the relationships between educators and learners.",
    icon: "ph-chalkboard-teacher",
  },
  "Professional development": {
    label: "Professional development",
    description: "Building skills, habits, and systems for sustainable academic and professional practice.",
    icon: "ph-briefcase",
  },
  "Scholarship": {
    label: "Scholarship",
    description: "Academic writing, publication, research practice, and the nature of scholarly contribution.",
    icon: "ph-scroll",
  },
}

const categoryOrder = [
  "AI and technology",
  "Pedagogy",
  "Assessment",
  "Curriculum",
  "Scholarship",
  "Knowledge management",
  "Professional development",
]

function categoryToSlug(category: string): string {
  return category.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "")
}

export const NotesByCategory: QuartzComponent = ({ cfg, fileData, allFiles }: QuartzComponentProps) => {
  const sorter = byDateAndAlphabetical(cfg)

  const categoryGroups = new Map<string, QuartzPluginData[]>()

  const excludedTypes = new Set(["lesson", "note"])

  for (const note of allFiles) {
    const type = note.frontmatter?.type
    if (typeof type === "string" && excludedTypes.has(type.trim())) continue

    const categoryRaw = note.frontmatter?.category ?? note.frontmatter?.categories
    const categories: string[] = Array.isArray(categoryRaw)
      ? categoryRaw
      : typeof categoryRaw === "string"
        ? [categoryRaw]
        : []

    for (const category of categories) {
      const normalised = category.trim()
      if (!normalised) continue
      if (!categoryGroups.has(normalised)) categoryGroups.set(normalised, [])
      categoryGroups.get(normalised)!.push(note)
    }
  }

  const sortedGroups = categoryOrder
    .filter((cat) => categoryGroups.has(cat))
    .map((cat) => ({ category: cat, notes: categoryGroups.get(cat)!.sort(sorter) }))

  // Include any categories not in the predefined order (future-proofing)
  for (const [cat, notes] of categoryGroups.entries()) {
    if (!categoryOrder.includes(cat)) {
      sortedGroups.push({ category: cat, notes: notes.sort(sorter) })
    }
  }

  return (
    <div class="notes-by-category">
      <div class="category-overview-grid">
        {sortedGroups.map(({ category, notes }) => {
          const config = categoryConfigs[category]
          const slug = categoryToSlug(category)
          return (
            <a href={`#category-${slug}`} class="category-overview-card">
              <div class="category-overview-header">
                <i class={`ph ${config?.icon ?? "ph-folder"}`}></i>
                <span class="category-overview-label">{config?.label ?? category}</span>
              </div>
              <p class="category-overview-description">
                {config?.description ?? ""}
              </p>
              <span class="category-overview-count">
                {notes.length} {notes.length === 1 ? "item" : "items"}
              </span>
            </a>
          )
        })}
      </div>

      {sortedGroups.map(({ category, notes }) => {
        const config = categoryConfigs[category]
        const slug = categoryToSlug(category)
        return (
          <section class="category-section" id={`category-${slug}`}>
            <h2 class="category-section-title">{config?.label ?? category}</h2>
            <ul class="category-notes-list">
              {notes.map((note) => (
                <li class="category-note-item">
                  <a
                    href={resolveRelative(fileData.slug!, note.slug!)}
                    class="category-note-link internal"
                  >
                    {note.frontmatter?.title}
                  </a>
                  {note.dates && (
                    <time class="category-note-date">
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

NotesByCategory.css = `
.notes-by-category {
  margin-top: 1.5rem;
}

.category-overview-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 1rem;
  margin-bottom: 3rem;
}

.category-overview-card {
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

.category-overview-card:hover {
  border-color: var(--secondary);
}

.category-overview-header {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--secondary);
  font-weight: 600;
  font-size: 0.95rem;
}

.category-overview-header i {
  font-size: 1.1rem;
  flex-shrink: 0;
}

.category-overview-label {
  color: var(--dark);
}

.category-overview-description {
  margin: 0;
  font-size: 0.875rem;
  color: var(--darkgray);
  line-height: 1.4;
  flex-grow: 1;
}

.category-overview-count {
  font-size: 0.8rem;
  color: var(--gray);
}

.category-section {
  margin-bottom: 2.5rem;
  scroll-margin-top: 2rem;
}

.category-section-title {
  font-size: 1.2rem;
  font-weight: 700;
  margin: 0 0 0.75rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid var(--lightgray);
  color: var(--dark);
}

.category-notes-list {
  list-style: none;
  margin: 0;
  padding: 0;
}

.category-note-item {
  display: flex;
  align-items: baseline;
  gap: 0.75rem;
  padding: 0.45rem 0;
  border-bottom: 1px solid var(--lightgray);
}

.category-note-item:last-child {
  border-bottom: none;
}

.category-note-link {
  flex-grow: 1;
  color: var(--dark) !important;
  text-decoration: none !important;
  font-size: 0.95rem;
}

.category-note-link:hover {
  color: var(--secondary) !important;
}

.category-note-date {
  font-size: 0.8rem;
  color: var(--gray);
  white-space: nowrap;
}
`

export default (() => NotesByCategory) satisfies QuartzComponentConstructor
