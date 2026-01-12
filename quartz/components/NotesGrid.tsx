import { FullSlug, resolveRelative } from "../util/path"
import { QuartzPluginData } from "../plugins/vfile"
import { Date, getDate } from "./Date"
import { QuartzComponent, QuartzComponentProps } from "./types"
import { byDateAndAlphabetical } from "./PageList"

type Props = {
  limit?: number
} & QuartzComponentProps

export const NotesGrid: QuartzComponent = ({ cfg, fileData, allFiles, limit }: Props) => {
  const sorter = byDateAndAlphabetical(cfg)
  let list = allFiles.sort(sorter)
  if (limit) {
    list = list.slice(0, limit)
  }

  return (
    <div class="notes-grid">
      {list.map((page) => {
        const title = page.frontmatter?.title
        const description = page.frontmatter?.description ?? page.description ?? ""
        const tags = page.frontmatter?.tags ?? []

        return (
          <article class="note-card">
            <a href={resolveRelative(fileData.slug!, page.slug!)} class="note-card-link">
              <div class="note-card-content">
                <h3 class="note-card-title">{title}</h3>
                {page.dates && (
                  <time class="note-card-date">
                    <Date date={getDate(cfg, page)!} locale={cfg.locale} />
                  </time>
                )}
                {description && <p class="note-card-description">{description}</p>}
                {tags.length > 0 && (
                  <ul class="note-card-tags">
                    {tags.slice(0, 3).map((tag) => (
                      <li class="note-card-tag">{tag}</li>
                    ))}
                    {tags.length > 3 && <li class="note-card-tag-more">+{tags.length - 3}</li>}
                  </ul>
                )}
              </div>
            </a>
          </article>
        )
      })}
    </div>
  )
}

NotesGrid.css = `
.notes-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
}

@media (max-width: 768px) {
  .notes-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
}

.note-card {
  background: var(--light);
  border: 1px solid var(--lightgray);
  border-radius: 8px;
  overflow: hidden;
  transition: all 0.2s ease;
  height: 100%;
}

.note-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border-color: var(--secondary);
}

.note-card-link {
  text-decoration: none;
  color: inherit;
  display: block;
  height: 100%;
}

.note-card-content {
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  height: 100%;
}

.note-card-title {
  margin: 0;
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--dark);
  line-height: 1.3;
}

.note-card:hover .note-card-title {
  color: var(--secondary);
}

.note-card-date {
  font-size: 0.85rem;
  color: var(--gray);
  display: block;
}

.note-card-description {
  margin: 0;
  font-size: 0.95rem;
  line-height: 1.6;
  color: var(--darkgray);
  flex-grow: 1;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}

.note-card-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  list-style: none;
  margin: 0;
  padding: 0;
  margin-top: auto;
}

.note-card-tag,
.note-card-tag-more {
  background-color: var(--highlight);
  border-radius: 4px;
  padding: 0.25rem 0.5rem;
  font-size: 0.8rem;
  color: var(--secondary);
  font-weight: 500;
}

.note-card-tag-more {
  background-color: var(--lightgray);
  color: var(--gray);
}
`
