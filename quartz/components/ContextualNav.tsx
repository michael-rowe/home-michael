import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { resolveRelative, simplifySlug } from "../util/path"
import { classNames } from "../util/lang"
import { byDateAndAlphabetical } from "./PageList"
import { Date, getDate } from "./Date"

interface ContextualNavOptions {
  essaysLimit?: number
  postsLimit?: number
  newslettersLimit?: number
}

const defaultOptions: ContextualNavOptions = {
  essaysLimit: 5,
  postsLimit: 5,
  newslettersLimit: 5,
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
    if (currentSlug.startsWith("Courses/AI literacy/") && fileData.frontmatter?.type !== "course") {
      return null
    }

    // Determine which section we're in
    const isEssays = currentSlug.startsWith("Essays/")
    const isPosts = currentSlug.startsWith("Posts/")
    const isNotes = currentSlug.startsWith("Notes/")
    const isCourses = currentSlug.startsWith("Courses/")
    const isNewsletters = currentSlug.startsWith("Newsletters/") || currentSlug === "newsletter"

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
        const relatedSlugs = new Set<string>()
        
        // Helper function to slugify text
        const slugifyText = (text: string): string => {
          return text
            .replace(/\s/g, "-")
            .replace(/&/g, "-and-")
            .replace(/%/g, "-percent")
            .replace(/\?/g, "")
            .replace(/#/g, "")
        }

        // Parse 'related' field
        const relatedField = fileData.frontmatter?.related
        if (relatedField) {
          const relatedList = Array.isArray(relatedField) ? relatedField : [relatedField]
          for (const item of relatedList) {
            const match = typeof item === "string" ? item.match(/\[\[([^\]]+)\]\]/) : null
            if (match) {
              const linkText = match[1]
              const slugifiedLink = slugifyText(linkText)
              
              // Search in Notes, then globally
              let relatedFile = allFiles.find(
                (f) =>
                  f.slug?.startsWith("Notes/") &&
                  (f.slug === `Notes/${slugifiedLink}` ||
                    simplifySlug(f.slug!) === slugifiedLink ||
                    f.slug?.endsWith(`/${slugifiedLink}`) ||
                    f.frontmatter?.title === linkText)
              )

              if (!relatedFile) {
                relatedFile = allFiles.find(
                  (f) =>
                    f.frontmatter?.title === linkText ||
                    simplifySlug(f.slug!) === slugifiedLink ||
                    f.slug?.endsWith(`/${slugifiedLink}`)
                )
              }

              if (relatedFile && relatedFile.slug !== currentSlug) {
                relatedSlugs.add(relatedFile.slug!)
              }
            }
          }
        }

        const explicitRelated = Array.from(relatedSlugs)
          .map((slug) => allFiles.find((f) => f.slug === slug))
          .filter((f) => f !== undefined)

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

      // Get all lessons for this course
      const lessons = allFiles
        .filter((f) => {
          const fParts = f.slug!.split("/")
          return fParts[0] === "Courses" && fParts[1] === courseName && f.slug !== `Courses/${courseName}/index`
        })
        .sort((a, b) => {
          // Prioritize introduction
          const aTitle = (a.frontmatter?.title as string)?.toLowerCase() ?? ""
          const bTitle = (b.frontmatter?.title as string)?.toLowerCase() ?? ""
          const aIsIntro = aTitle.includes("introduction")
          const bIsIntro = bTitle.includes("introduction")
          if (aIsIntro && !bIsIntro) return -1
          if (!aIsIntro && bIsIntro) return 1

          // Try to sort by lesson number if available in frontmatter
          // Check both lesson_number and lesson_order fields
          const aLesson = (a.frontmatter?.lesson_number ?? a.frontmatter?.lesson_order ?? a.frontmatter?.lesson) as number | undefined
          const bLesson = (b.frontmatter?.lesson_number ?? b.frontmatter?.lesson_order ?? b.frontmatter?.lesson) as number | undefined
          if (aLesson !== undefined && bLesson !== undefined) {
            return aLesson - bLesson
          }
          // Fall back to alphabetical
          return (a.frontmatter?.title ?? "").localeCompare(b.frontmatter?.title ?? "")
        })

      if (lessons.length === 0) {
        return null
      }

      return (
        <div class={classNames(displayClass, "contextual-nav")}>
          <h3>Course Lessons</h3>
          <ul>
            {lessons.map((lesson) => {
              const lessonNum = (lesson.frontmatter?.lesson_number ?? lesson.frontmatter?.lesson_order ?? lesson.frontmatter?.lesson) as number | undefined
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

    // Newsletters: Show 5 most recent newsletters with "See all" link
    if (isNewsletters) {
      const newsletters = allFiles
        .filter((f) => f.slug?.startsWith("Newsletters/") && f.slug !== "Newsletters/index")
        .sort(byDateAndAlphabetical(cfg))
        .slice(0, options.newslettersLimit)

      if (newsletters.length === 0) {
        return null
      }

      return (
        <div class={classNames(displayClass, "contextual-nav")}>
          <h3>Recent Newsletters</h3>
          <ul>
            {newsletters.map((newsletter) => (
              <li>
                <a href={resolveRelative(fileData.slug!, newsletter.slug!)} class="internal">
                  {newsletter.frontmatter?.title}
                </a>
              </li>
            ))}
            <li>
              <a href={resolveRelative(fileData.slug!, "Newsletters/index" as any)} class="internal">
                See all
              </a>
            </li>
          </ul>
        </div>
      )
    }

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
