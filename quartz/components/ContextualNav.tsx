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

    // Posts: Show related content from frontmatter first, then fall back to tag matching
    if (isPosts) {
      const relatedSlugs = new Set<string>()

      // Helper function to slugify text (convert spaces to hyphens, etc.)
      const slugifyText = (text: string): string => {
        return text
          .replace(/\s/g, "-")
          .replace(/&/g, "-and-")
          .replace(/%/g, "-percent")
          .replace(/\?/g, "")
          .replace(/#/g, "")
      }

      // First, check the 'related' field from frontmatter (like Notes does)
      const relatedField = fileData.frontmatter?.related
      if (relatedField) {
        const relatedList = Array.isArray(relatedField) ? relatedField : [relatedField]

        for (const item of relatedList) {
          // Extract slug from wikilink format [[slug]] or plain text
          const match = typeof item === "string" ? item.match(/\[\[([^\]]+)\]\]/) : null
          if (match) {
            const linkText = match[1]
            const slugifiedLink = slugifyText(linkText)

            // Search across all files (Essays, Notes, Posts, etc.)
            const relatedFile = allFiles.find(
              (f) =>
                f.frontmatter?.title === linkText ||
                simplifySlug(f.slug!) === slugifiedLink ||
                f.slug?.endsWith(`/${slugifiedLink}`)
            )

            if (relatedFile && relatedFile.slug !== currentSlug) {
              relatedSlugs.add(relatedFile.slug!)
            }
          }
        }
      }

      // Get explicit related items from frontmatter
      const explicitRelated = Array.from(relatedSlugs)
        .map((slug) => allFiles.find((f) => f.slug === slug))
        .filter((f) => f !== undefined)

      // Also find content in the same category (across Notes, Posts, Essays)
      // Handle category as either string or array
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
                            }              // Check if file has any matching category
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

      // Combine explicit related items with category matches
      const combinedRelated = [
        ...explicitRelated,
        ...categoryMatches.filter(f => !explicitRelated.some(e => e?.slug === f.slug))
      ].slice(0, options.postsLimit)

      // If we have related items (explicit or category), show them
      if (combinedRelated.length > 0) {
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

      // Fall back to tag-based related posts
      const currentTags = fileData.frontmatter?.tags
      const currentTagSet = new Set<string>()

      if (currentTags) {
        if (Array.isArray(currentTags)) {
          currentTags.forEach((tag: string) => currentTagSet.add(tag.toLowerCase().trim()))
        } else if (typeof currentTags === "string") {
          // Handle comma-separated tags
          currentTags.split(",").forEach((tag: string) => currentTagSet.add(tag.toLowerCase().trim()))
        }
      }

      // Find posts with shared tags and count matches
      const otherPosts = allFiles
        .filter((f) => f.slug?.startsWith("Posts/") && f.slug !== "Posts/index" && f.slug !== currentSlug)

      const postsWithScores = otherPosts.map((post) => {
        const postTags = post.frontmatter?.tags
        const postTagSet = new Set<string>()

        if (postTags) {
          if (Array.isArray(postTags)) {
            postTags.forEach((tag: string) => postTagSet.add(tag.toLowerCase().trim()))
          } else if (typeof postTags === "string") {
            postTags.split(",").forEach((tag: string) => postTagSet.add(tag.toLowerCase().trim()))
          }
        }

        // Count shared tags
        let sharedCount = 0
        currentTagSet.forEach((tag) => {
          if (postTagSet.has(tag)) sharedCount++
        })

        return { post, sharedCount }
      })

      // Sort by shared tag count (descending), then by date
      const relatedPosts = postsWithScores
        .filter((p) => p.sharedCount > 0)
        .sort((a, b) => {
          if (b.sharedCount !== a.sharedCount) {
            return b.sharedCount - a.sharedCount
          }
          // Fall back to date sorting
          const aDate = getDate(cfg, a.post)
          const bDate = getDate(cfg, b.post)
          if (aDate && bDate) {
            return bDate.getTime() - aDate.getTime()
          }
          return 0
        })
        .slice(0, options.postsLimit)
        .map((p) => p.post)

      // If no related posts found, fall back to recent posts
      const displayPosts = relatedPosts.length > 0
        ? relatedPosts
        : otherPosts.sort(byDateAndAlphabetical(cfg)).slice(0, options.postsLimit)

      const headerText = relatedPosts.length > 0 ? "Related Posts" : "Recent Posts"

      if (displayPosts.length === 0) {
        return null
      }

      return (
        <div class={classNames(displayClass, "contextual-nav")}>
          <h3>{headerText}</h3>
          <ul>
            {displayPosts.map((post) => (
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

    // Notes: Show related content from frontmatter AND category matching
    if (isNotes) {
      const relatedSlugs = new Set<string>()

      // Helper function to slugify text (convert spaces to hyphens, etc.)
      const slugifyText = (text: string): string => {
        return text
          .replace(/\s/g, "-")
          .replace(/&/g, "-and-")
          .replace(/%/g, "-percent")
          .replace(/\?/g, "")
          .replace(/#/g, "")
      }

      // Parse the 'related' field from frontmatter
      const relatedField = fileData.frontmatter?.related
      if (relatedField) {
        // Handle both string and array formats
        const relatedList = Array.isArray(relatedField) ? relatedField : [relatedField]

        for (const item of relatedList) {
          // Extract slug from wikilink format [[slug]] or plain text
          const match = typeof item === "string" ? item.match(/\[\[([^\]]+)\]\]/) : null
          if (match) {
            const linkText = match[1]
            const slugifiedLink = slugifyText(linkText)

            // Try to find the file, prioritizing Notes section
            let relatedFile = allFiles.find(
              (f) =>
                f.slug?.startsWith("Notes/") &&
                (f.slug === `Notes/${slugifiedLink}` ||
                  simplifySlug(f.slug!) === slugifiedLink ||
                  f.slug?.endsWith(`/${slugifiedLink}`) ||
                  f.frontmatter?.title === linkText)
            )

            // If not found in Notes, search in all files
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

      // Get explicit related items from frontmatter
      const explicitRelated = Array.from(relatedSlugs)
        .map((slug) => allFiles.find((f) => f.slug === slug))
        .filter((f) => f !== undefined)

      // Also find content in the same category (across Notes, Posts, Essays)
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
                            }              // Check if file has any matching category
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

      // Combine explicit related items with category matches
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
