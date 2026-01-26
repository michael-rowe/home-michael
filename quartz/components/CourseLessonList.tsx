import { QuartzComponent, QuartzComponentProps } from "./types"
import { resolveRelative } from "../util/path"
import { GlobalConfiguration } from "../cfg"
import { QuartzPluginData } from "../plugins/vfile"

export const CourseLessonList: QuartzComponent = ({ fileData, allFiles, cfg }: QuartzComponentProps) => {
  // Sort by filename (01, 02, etc.)
  const sortedFiles = allFiles.sort((a, b) => {
    const aTitle = a.frontmatter?.title?.toLowerCase() ?? ""
    const bTitle = b.frontmatter?.title?.toLowerCase() ?? ""
    // Fallback to filename if titles are similar
    return a.slug!.localeCompare(b.slug!)
  })

  return (
    <div class="course-lesson-list">
      <h3>Lessons</h3>
      <ul class="lesson-list">
        {sortedFiles.map((page) => {
          const title = page.frontmatter?.title ?? "Untitled"
          const description = page.frontmatter?.description ?? page.description

          return (
            <li class="lesson-item">
              <a href={resolveRelative(fileData.slug!, page.slug!)} class="lesson-link">
                <span class="lesson-title">{title}</span>
                {description && <span class="lesson-description">{description}</span>}
              </a>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

CourseLessonList.css = `
.course-lesson-list {
  margin-top: 2rem;
  border-top: 1px solid var(--lightgray);
  padding-top: 1.5rem;
}

.course-lesson-list h3 {
  margin-bottom: 1rem;
}

.lesson-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.lesson-item {
  margin: 0;
}

.lesson-link {
  display: block;
  text-decoration: none;
  padding: 1rem;
  border: 1px solid var(--lightgray);
  border-radius: 8px;
  background-color: var(--light);
  transition: background-color 0.2s ease;
}

.lesson-link:hover {
  background-color: rgba(143, 159, 169, 0.06);
}

.lesson-title {
  display: block;
  font-weight: 600;
  color: var(--secondary);
  margin-bottom: 0.25rem;
  font-size: 1.05rem;
}

.lesson-description {
  display: block;
  font-size: 0.9rem;
  color: var(--darkgray);
  line-height: 1.4;
  font-weight: 400;
}
`
