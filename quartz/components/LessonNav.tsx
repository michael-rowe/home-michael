import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import { resolveRelative } from "../util/path"

interface LessonNavOptions {}

const defaultOptions: LessonNavOptions = {}

export default ((opts?: Partial<LessonNavOptions>) => {
  const options = { ...defaultOptions, ...opts }

  const LessonNav: QuartzComponent = ({
    fileData,
    allFiles,
    displayClass,
    cfg,
  }: QuartzComponentProps) => {
    const currentSlug = fileData.slug!
    const isCourses = currentSlug.startsWith("Courses/")

    // Only show on course lesson pages
    if (!isCourses) {
      return null
    }

    // Don't show on course index or overview pages
    if (currentSlug.endsWith("/index") || currentSlug.endsWith("/course-overview")) {
      return null
    }

    // Extract course name from path
    const pathParts = currentSlug.split("/")
    if (pathParts.length < 2) {
      return null
    }
    const courseName = pathParts[1]

    // Get all lessons for this course
    const lessons = allFiles
      .filter((f) => {
        const fParts = f.slug!.split("/")
        return (
          fParts[0] === "Courses" &&
          fParts[1] === courseName &&
          !f.slug!.endsWith("/index") &&
          !f.slug!.endsWith("/course-overview") &&
          !f.slug!.endsWith("/landing-page")
        )
      })
      .sort((a, b) => {
        // Sort by lesson number if available
        const aLesson =
          (a.frontmatter?.lesson_number ?? a.frontmatter?.lesson_order ?? a.frontmatter?.lesson) as
            | number
            | undefined
        const bLesson =
          (b.frontmatter?.lesson_number ?? b.frontmatter?.lesson_order ?? b.frontmatter?.lesson) as
            | number
            | undefined
        if (aLesson !== undefined && bLesson !== undefined) {
          return aLesson - bLesson
        }
        // Fall back to alphabetical
        return (a.frontmatter?.title ?? "").localeCompare(b.frontmatter?.title ?? "")
      })

    // Find current lesson index
    const currentIndex = lessons.findIndex((l) => l.slug === currentSlug)
    if (currentIndex === -1) {
      return null
    }

    const prevLesson = currentIndex > 0 ? lessons[currentIndex - 1] : null
    const nextLesson = currentIndex < lessons.length - 1 ? lessons[currentIndex + 1] : null

    if (!prevLesson && !nextLesson) {
      return null
    }

    return (
      <nav class={classNames(displayClass, "lesson-nav")}>
        <div class="lesson-nav-container">
          {prevLesson && (
            <a
              href={resolveRelative(fileData.slug!, prevLesson.slug!)}
              class="lesson-nav-button lesson-nav-prev"
            >
              <span class="lesson-nav-label">Previous</span>
              <span class="lesson-nav-title">{prevLesson.frontmatter?.title}</span>
            </a>
          )}
          {nextLesson && (
            <a
              href={resolveRelative(fileData.slug!, nextLesson.slug!)}
              class="lesson-nav-button lesson-nav-next"
            >
              <span class="lesson-nav-label">Next</span>
              <span class="lesson-nav-title">{nextLesson.frontmatter?.title}</span>
            </a>
          )}
        </div>
      </nav>
    )
  }

  LessonNav.css = `
.lesson-nav {
  margin: 3rem 0 2rem;
  padding-top: 2rem;
  border-top: 2px solid var(--lightgray);
}

.lesson-nav-container {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
}

.lesson-nav-button {
  display: flex;
  flex-direction: column;
  padding: 1rem 1.5rem;
  border: 1px solid var(--lightgray);
  border-radius: 8px;
  background-color: var(--light);
  text-decoration: none;
  transition: all 0.2s ease;
  min-width: 200px;
  max-width: 45%;
}

.lesson-nav-button:hover {
  border-color: var(--secondary);
  background-color: var(--highlight);
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.lesson-nav-prev {
  text-align: left;
}

.lesson-nav-next {
  text-align: right;
  margin-left: auto;
}

.lesson-nav-label {
  font-size: 0.85rem;
  color: var(--gray);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 0.5rem;
  font-weight: 600;
}

.lesson-nav-title {
  font-size: 1rem;
  color: var(--dark);
  font-weight: 500;
  line-height: 1.3;
}

@media (max-width: 800px) {
  .lesson-nav-container {
    flex-direction: column;
  }

  .lesson-nav-button {
    max-width: 100%;
  }

  .lesson-nav-next {
    margin-left: 0;
  }
}
`

  return LessonNav
}) satisfies QuartzComponentConstructor
