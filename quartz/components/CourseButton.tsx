import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import { resolveRelative, FullSlug } from "../util/path"

interface CourseButtonOptions {
  text?: string
}

const defaultOptions: CourseButtonOptions = {
  text: "Start Course",
}

export default ((opts?: Partial<CourseButtonOptions>) => {
  const options = { ...defaultOptions, ...opts }

  const CourseButton: QuartzComponent = ({
    fileData,
    allFiles,
    displayClass,
  }: QuartzComponentProps) => {
    const currentSlug = fileData.slug!
    const isCourseIndex = currentSlug.match(/^Courses\/[^\/]+\/index$/)

    // Only show on course index pages
    if (!isCourseIndex) {
      return null
    }

    // Extract course name from path
    const pathParts = currentSlug.split("/")
    const courseName = pathParts[1]

    // Look for course-overview or first lesson
    const courseOverview = allFiles.find(
      (f) => f.slug === `Courses/${courseName}/course-overview`,
    )
    const firstLesson = allFiles
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
        // Prioritize introduction
        const aTitle = (a.frontmatter?.title as string)?.toLowerCase() ?? ""
        const bTitle = (b.frontmatter?.title as string)?.toLowerCase() ?? ""
        const aIsIntro = aTitle.includes("introduction")
        const bIsIntro = bTitle.includes("introduction")
        if (aIsIntro && !bIsIntro) return -1
        if (!aIsIntro && bIsIntro) return 1

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
        return (a.frontmatter?.title ?? "").localeCompare(b.frontmatter?.title ?? "")
      })[0]

    const targetPage = courseOverview || firstLesson
    if (!targetPage) {
      return null
    }

    return (
      <div class={classNames(displayClass, "course-button-wrapper")}>
        <a
          href={resolveRelative(fileData.slug!, targetPage.slug! as FullSlug)}
          class="course-button"
        >
          {options.text}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </a>
      </div>
    )
  }

  CourseButton.css = `
.course-button-wrapper {
  margin: 2rem 0;
  display: flex;
  justify-content: center;
}

.course-button {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 2rem;
  background-color: var(--secondary);
  color: var(--light);
  border: 2px solid var(--secondary);
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.course-button:hover {
  background-color: var(--tertiary);
  border-color: var(--tertiary);
  color: var(--light);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.course-button svg {
  transition: transform 0.3s ease;
}

.course-button:hover svg {
  transform: translateX(4px);
}

@media (max-width: 800px) {
  .course-button {
    width: 100%;
    justify-content: center;
  }
}
`

  return CourseButton
}) satisfies QuartzComponentConstructor
