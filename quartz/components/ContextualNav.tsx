import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { resolveRelative } from "../util/path"
import { classNames } from "../util/lang"
import { byDateAndAlphabetical } from "./PageList"
import { Date, getDate } from "./Date"
import { courseLessons, lessonNumber } from "./utils/lessons"
import { resolveRelatedField } from "./utils/wikilinks"

interface ContextualNavOptions {
  essaysLimit?: number
  postsLimit?: number
}

const defaultOptions: ContextualNavOptions = {
  essaysLimit: 5,
  postsLimit: 5,
}

export default ((opts?: Partial<ContextualNavOptions>) => {
  const options = { ...defaultOptions, ...opts }

  const ContextualNav: QuartzComponent = ({
    fileData,
    allFiles,
    displayClass,
    cfg,
  }: QuartzComponentProps) => {
    const currentSlug = fileData.slug!

    // Don't show ContextualNav for AI literacy course (has its own navigation)
    // But DO show it for the index page (type: course)
    if (currentSlug.startsWith("Courses/AI-literacy/") && fileData.frontmatter?.type !== "course") {
      return null
    }

    // Determine which section we're in
    const isEssays = currentSlug.startsWith("Essays/")
    const isPosts = currentSlug.startsWith("Posts/")
    const isNotes = currentSlug.startsWith("Notes/")
    const isCourses = currentSlug.startsWith("Courses/")

    // Posts and notes: "Continue reading" at end of article handles related content
    if (isPosts || isNotes) return null

    // Essays: Show 5 most recent essays
    if (isEssays) {
      const essays = allFiles
        .filter((f) => f.slug?.startsWith("Essays/") && f.slug !== "Essays/index")
        .sort(byDateAndAlphabetical(cfg))
        .slice(0, options.essaysLimit)

      return (
        <div class={classNames(displayClass, "contextual-nav")}>
          <h3>Recent Essays</h3>
          <ul>
            {essays.map((essay) => (
              <li>
                <a href={resolveRelative(fileData.slug!, essay.slug!)} class="internal">
                  {essay.frontmatter?.title}
                </a>
                {essay.dates && (
                  <span class="date">
                    <Date date={getDate(cfg, essay)!} locale={cfg.locale} />
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
      )
    }

    // Courses: Handle both Index (Related Content) and Lessons (Course Nav)
    if (isCourses) {
      // 1. Course Index Page: Show Related Content (same logic as Notes)
      if (fileData.frontmatter?.type === "course") {
        const explicitRelated = resolveRelatedField(
          allFiles,
          fileData.frontmatter?.related,
          currentSlug,
          "Notes/",
        )
        const relatedSlugs = new Set<string>(explicitRelated.map((f) => f.slug!))

        // Find content in same category
        const rawCategory = fileData.frontmatter?.category
        const currentCategories: string[] = Array.isArray(rawCategory)
          ? rawCategory.map((c: string) => c.toLowerCase())
          : typeof rawCategory === "string" && rawCategory
            ? [rawCategory.toLowerCase()]
            : []

        const categoryMatches = currentCategories.length > 0
          ? allFiles
              .filter((f) => {
                // Include Notes, Posts, Essays, and Course Indices
                const isValidSection = f.slug?.startsWith("Notes/") ||
                                      f.slug?.startsWith("Posts/") ||
                                      f.slug?.startsWith("Essays/") ||
                                      (f.slug?.startsWith("Courses/") && f.frontmatter?.type === "course")
                
                // Exclude standard index pages, but allow Course indices
                const isIndex = f.slug?.endsWith("/index") && f.frontmatter?.type !== "course"

                if (!isValidSection || isIndex || f.slug === currentSlug || relatedSlugs.has(f.slug!)) {
                  return false
                }
                const fileCategory = f.frontmatter?.category
                const fileCategories: string[] = Array.isArray(fileCategory)
                  ? fileCategory.map((c: string) => c.toLowerCase())
                  : typeof fileCategory === "string" && fileCategory
                    ? [fileCategory.toLowerCase()]
                    : []
                return fileCategories.some((fc) => currentCategories.includes(fc))
              })
              .sort(byDateAndAlphabetical(cfg))
          : []

        const combinedRelated = [
          ...explicitRelated,
          ...categoryMatches.filter(f => !explicitRelated.some(e => e?.slug === f.slug))
        ].slice(0, options.postsLimit)

        if (combinedRelated.length === 0) {
          return null
        }

        return (
          <div class={classNames(displayClass, "contextual-nav")}>
            <h3>Related</h3>
            <ul>
              {combinedRelated.map((item) => (
                <li>
                  <a href={resolveRelative(fileData.slug!, item!.slug!)} class="internal">
                    {item!.frontmatter?.title}
                  </a>
                  {item!.dates && (
                    <span class="date">
                      <Date date={getDate(cfg, item!)!} locale={cfg.locale} />
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )
      }

      // 2. Course Lesson Page: Show Course Lessons Navigation
      // Check if we're viewing a specific course (not the courses index)
      if (currentSlug === "Courses/index") {
        return null
      }

      // Extract course name from path (e.g., "Courses/course-name/lesson-1" -> "course-name")
      const pathParts = currentSlug.split("/")
      const courseName = pathParts[1]

      // Get all lessons for this course in canonical order
      const lessons = courseLessons(allFiles, courseName)

      if (lessons.length === 0) {
        return null
      }

      return (
        <div class={classNames(displayClass, "contextual-nav")}>
          <h3>Course Lessons</h3>
          <ul>
            {lessons.map((lesson) => {
              const lessonNum = lessonNumber(lesson)
              return (
                <li>
                  <a href={resolveRelative(fileData.slug!, lesson.slug!)} class="internal">
                    {lessonNum !== undefined && (
                      <span class="lesson-number">{lessonNum}. </span>
                    )}
                    {lesson.frontmatter?.title}
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
      )
    }

    // Newsletters get no contextual nav. This used to list the five most recent
    // issues with a "See all" link, which on the Newsletters index reproduced
    // the page the reader was already looking at, and sat directly above the
    // "Past issues" panel listing the same issues again by month. Three
    // renderings of one short list. The index itself is enough.

    // Default: Don't show contextual nav
    return null
  }

  ContextualNav.css = `
.contextual-nav {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  overflow-y: auto;
  flex: 1 1 auto;
  min-height: 0;
}

.contextual-nav h3 {
  font-size: 1rem;
  font-weight: 700;
  margin: 0;
  color: var(--dark);
  flex-shrink: 0;
}

.contextual-nav ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  overflow-y: auto;
}

.contextual-nav li {
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}

.contextual-nav a.internal {
  color: var(--secondary);
  text-decoration: none;
  transition: color 0.2s ease;
  background-color: transparent;
  padding: 0;
  border-radius: 0;
}

.contextual-nav a.internal:hover {
  color: var(--tertiary);
  background-color: transparent;
}

.contextual-nav .date {
  font-size: 0.75rem;
  color: var(--gray);
  opacity: 0.8;
}

.contextual-nav .chapter-number,
.contextual-nav .lesson-number {
  font-weight: 600;
  color: var(--darkgray);
  display: inline;
}
`

  return ContextualNav
}) satisfies QuartzComponentConstructor
