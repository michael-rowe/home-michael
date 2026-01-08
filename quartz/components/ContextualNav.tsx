import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { resolveRelative, simplifySlug } from "../util/path"
import { classNames } from "../util/lang"
import { byDateAndAlphabetical } from "./PageList"
import { Date, getDate } from "./Date"

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
    const slug = simplifySlug(currentSlug)

    // Determine which section we're in
    const isEssays = currentSlug.startsWith("Essays/")
    const isPosts = currentSlug.startsWith("Posts/")
    const isNotes = currentSlug.startsWith("Notes/")
    const isBook = currentSlug.startsWith("Book/")
    const isCourses = currentSlug.startsWith("Courses/")

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

    // Posts: Show recent posts
    if (isPosts) {
      const posts = allFiles
        .filter((f) => f.slug?.startsWith("Posts/") && f.slug !== "Posts/index")
        .sort(byDateAndAlphabetical(cfg))
        .slice(0, options.postsLimit)

      return (
        <div class={classNames(displayClass, "contextual-nav")}>
          <h3>Recent Posts</h3>
          <ul>
            {posts.map((post) => (
              <li>
                <a href={resolveRelative(fileData.slug!, post.slug!)} class="internal">
                  {post.frontmatter?.title}
                </a>
                {post.dates && (
                  <span class="date">
                    <Date date={getDate(cfg, post)!} locale={cfg.locale} />
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
      )
    }

    // Notes: Show related notes (backlinks + outgoing links)
    if (isNotes) {
      // Get backlinks (pages that link to this page)
      const backlinkFiles = allFiles.filter((file) => file.links?.includes(slug))

      // Get outgoing links (pages this page links to)
      const outgoingLinks = fileData.links ?? []
      const outgoingFiles = allFiles.filter((file) => outgoingLinks.includes(simplifySlug(file.slug!)))

      // Combine and deduplicate
      const relatedSlugs = new Set([
        ...backlinkFiles.map((f) => f.slug!),
        ...outgoingFiles.map((f) => f.slug!),
      ])
      // Remove current page from related notes
      relatedSlugs.delete(currentSlug)

      const relatedNotes = Array.from(relatedSlugs)
        .map((slug) => allFiles.find((f) => f.slug === slug))
        .filter((f) => f !== undefined)

      if (relatedNotes.length === 0) {
        return null
      }

      return (
        <div class={classNames(displayClass, "contextual-nav")}>
          <h3>Related Notes</h3>
          <ul>
            {relatedNotes.map((note) => (
              <li>
                <a href={resolveRelative(fileData.slug!, note!.slug!)} class="internal">
                  {note!.frontmatter?.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )
    }

    // Book: Show book chapters
    if (isBook) {
      const chapters = allFiles
        .filter((f) => f.slug?.startsWith("Book/") && f.slug !== "Book/index")
        .sort((a, b) => {
          // Try to sort by chapter number if available in frontmatter
          const aChapter = a.frontmatter?.chapter as number | undefined
          const bChapter = b.frontmatter?.chapter as number | undefined
          if (aChapter !== undefined && bChapter !== undefined) {
            return aChapter - bChapter
          }
          // Fall back to alphabetical
          return (a.frontmatter?.title ?? "").localeCompare(b.frontmatter?.title ?? "")
        })

      return (
        <div class={classNames(displayClass, "contextual-nav")}>
          <h3>Chapters</h3>
          <ul>
            {chapters.map((chapter) => (
              <li>
                <a href={resolveRelative(fileData.slug!, chapter.slug!)} class="internal">
                  {chapter.frontmatter?.chapter !== undefined && (
                    <span class="chapter-number">{chapter.frontmatter.chapter}. </span>
                  )}
                  {chapter.frontmatter?.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )
    }

    // Courses: Show course lessons when viewing a specific course
    if (isCourses) {
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
          // Try to sort by lesson number if available in frontmatter
          const aLesson = a.frontmatter?.lesson as number | undefined
          const bLesson = b.frontmatter?.lesson as number | undefined
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
            {lessons.map((lesson) => (
              <li>
                <a href={resolveRelative(fileData.slug!, lesson.slug!)} class="internal">
                  {lesson.frontmatter?.lesson !== undefined && (
                    <span class="lesson-number">{lesson.frontmatter.lesson}. </span>
                  )}
                  {lesson.frontmatter?.title}
                </a>
              </li>
            ))}
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
}

.contextual-nav h3 {
  font-size: 1rem;
  font-weight: 700;
  margin: 0;
  color: var(--dark);
}

.contextual-nav ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
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
}
`

  return ContextualNav
}) satisfies QuartzComponentConstructor
