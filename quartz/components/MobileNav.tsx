import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { FullSlug, resolveRelative, simplifySlug } from "../util/path"
import { byDateAndAlphabetical } from "./PageList"
import { Date, getDate } from "./Date"
// @ts-ignore
import script from "./scripts/mobilenav.inline"

interface MobileNavOptions {
  links: { text: string; slug: string }[]
  essaysLimit?: number
  postsLimit?: number
}

const defaultOptions: MobileNavOptions = {
  links: [
    { text: "Book", slug: "Book/" },
    { text: "Courses", slug: "Courses/" },
    { text: "Essays", slug: "Essays/" },
    { text: "Posts", slug: "Posts/" },
    { text: "Notes", slug: "Notes/" },
    { text: "About", slug: "about" },
    { text: "Contact", slug: "contact" },
    { text: "Newsletter", slug: "newsletter" },
  ],
  essaysLimit: 5,
  postsLimit: 5,
}

export default ((opts?: Partial<MobileNavOptions>) => {
  const options = { ...defaultOptions, ...opts }

  const MobileNav: QuartzComponent = ({
    fileData,
    allFiles,
    displayClass,
    cfg,
    tree,
  }: QuartzComponentProps) => {
    const currentSlug = fileData.slug!
    const slug = simplifySlug(currentSlug)

    // Determine which section we're in
    const isEssays = currentSlug.startsWith("Essays/")
    const isPosts = currentSlug.startsWith("Posts/")
    const isNotes = currentSlug.startsWith("Notes/")
    const isBook = currentSlug.startsWith("Book/")
    const isCourses = currentSlug.startsWith("Courses/")

    // Get contextual navigation content
    let contextualContent = null

    if (isEssays) {
      const essays = allFiles
        .filter((f) => f.slug?.startsWith("Essays/") && f.slug !== "Essays/index")
        .sort(byDateAndAlphabetical(cfg))
        .slice(0, options.essaysLimit)

      if (essays.length > 0) {
        contextualContent = (
          <div class="mobile-nav-section">
            <h3>Recent Essays</h3>
            <ul>
              {essays.map((essay) => (
                <li>
                  <a href={resolveRelative(fileData.slug!, essay.slug!)} class="internal mobile-nav-link">
                    {essay.frontmatter?.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )
      }
    } else if (isPosts) {
      const posts = allFiles
        .filter((f) => f.slug?.startsWith("Posts/") && f.slug !== "Posts/index")
        .sort(byDateAndAlphabetical(cfg))
        .slice(0, options.postsLimit)

      if (posts.length > 0) {
        contextualContent = (
          <div class="mobile-nav-section">
            <h3>Recent Posts</h3>
            <ul>
              {posts.map((post) => (
                <li>
                  <a href={resolveRelative(fileData.slug!, post.slug!)} class="internal mobile-nav-link">
                    {post.frontmatter?.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )
      }
    } else if (isNotes) {
      const backlinkFiles = allFiles.filter((file) => file.links?.includes(slug))
      const outgoingLinks = fileData.links ?? []
      const outgoingFiles = allFiles.filter((file) =>
        outgoingLinks.includes(simplifySlug(file.slug!)),
      )

      const relatedSlugs = new Set([
        ...backlinkFiles.map((f) => f.slug!),
        ...outgoingFiles.map((f) => f.slug!),
      ])
      relatedSlugs.delete(currentSlug)

      const relatedNotes = Array.from(relatedSlugs)
        .map((slug) => allFiles.find((f) => f.slug === slug))
        .filter((f) => f !== undefined)

      if (relatedNotes.length > 0) {
        contextualContent = (
          <div class="mobile-nav-section">
            <h3>Related Notes</h3>
            <ul>
              {relatedNotes.map((note) => (
                <li>
                  <a href={resolveRelative(fileData.slug!, note!.slug!)} class="internal mobile-nav-link">
                    {note!.frontmatter?.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )
      }
    } else if (isBook) {
      const chapters = allFiles
        .filter((f) => f.slug?.startsWith("Book/") && f.slug !== "Book/index")
        .sort((a, b) => {
          const aChapter = a.frontmatter?.chapter as number | undefined
          const bChapter = b.frontmatter?.chapter as number | undefined
          if (aChapter !== undefined && bChapter !== undefined) {
            return aChapter - bChapter
          }
          return (a.frontmatter?.title ?? "").localeCompare(b.frontmatter?.title ?? "")
        })

      if (chapters.length > 0) {
        contextualContent = (
          <div class="mobile-nav-section">
            <h3>Chapters</h3>
            <ul>
              {chapters.map((chapter) => (
                <li>
                  <a href={resolveRelative(fileData.slug!, chapter.slug!)} class="internal mobile-nav-link">
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
    } else if (isCourses && currentSlug !== "Courses/index") {
      const pathParts = currentSlug.split("/")
      const courseName = pathParts[1]

      const lessons = allFiles
        .filter((f) => {
          const fParts = f.slug!.split("/")
          return (
            fParts[0] === "Courses" && fParts[1] === courseName && f.slug !== `Courses/${courseName}/index`
          )
        })
        .sort((a, b) => {
          const aLesson = a.frontmatter?.lesson as number | undefined
          const bLesson = b.frontmatter?.lesson as number | undefined
          if (aLesson !== undefined && bLesson !== undefined) {
            return aLesson - bLesson
          }
          return (a.frontmatter?.title ?? "").localeCompare(b.frontmatter?.title ?? "")
        })

      if (lessons.length > 0) {
        contextualContent = (
          <div class="mobile-nav-section">
            <h3>Course Lessons</h3>
            <ul>
              {lessons.map((lesson) => (
                <li>
                  <a href={resolveRelative(fileData.slug!, lesson.slug!)} class="internal mobile-nav-link">
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
    }

    return (
      <div class={`mobile-nav ${displayClass ?? ""}`}>
        <button type="button" class="mobile-nav-toggle" aria-label="Open navigation menu">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="menu-icon"
          >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
        </button>
        <nav class="mobile-nav-content">
          <button
            type="button"
            class="mobile-nav-close"
            aria-label="Close navigation menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>

          {/* Site Navigation */}
          <div class="mobile-nav-section">
            <h3>Navigate</h3>
            <ul>
              {options.links.map((link) => {
                const href = resolveRelative(fileData.slug!, link.slug as FullSlug)
                return (
                  <li>
                    <a href={href} class="internal mobile-nav-link">
                      {link.text}
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>

          {/* Contextual Navigation */}
          {contextualContent}

          {/* Page Navigation (TOC) - handled by script */}
          <div class="mobile-nav-section mobile-nav-toc" style="display: none;">
            <h3>On This Page</h3>
            <ul id="mobile-toc-list"></ul>
          </div>
        </nav>
      </div>
    )
  }

  MobileNav.css = `
.mobile-nav {
  display: none;
}

@media (max-width: 800px) {
  .mobile-nav {
    display: block;
    position: fixed;
    top: 0.5rem;
    right: 0.5rem;
    z-index: 200;
  }

  .mobile-nav-toggle {
    background-color: var(--light);
    border: 1px solid var(--lightgray);
    border-radius: 5px;
    cursor: pointer;
    padding: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: background-color 0.2s ease;
  }

  .mobile-nav-toggle:hover {
    background-color: var(--lightgray);
  }

  .mobile-nav-toggle .menu-icon {
    stroke: var(--darkgray);
    width: 24px;
    height: 24px;
  }

  .mobile-nav-content {
    position: fixed;
    top: 0;
    right: 0;
    width: 85vw;
    max-width: 320px;
    height: 100vh;
    background-color: var(--light);
    border-left: 1px solid var(--lightgray);
    transform: translateX(100%);
    transition: transform 0.3s ease;
    overflow-y: auto;
    padding: 1rem;
    box-shadow: -2px 0 8px rgba(0, 0, 0, 0.1);
    z-index: 201;
  }

  .mobile-nav.open .mobile-nav-content {
    transform: translateX(0);
  }

  .mobile-nav-close {
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: 1rem;
  }

  .mobile-nav-close svg {
    stroke: var(--darkgray);
    width: 24px;
    height: 24px;
  }

  .mobile-nav-section {
    margin-bottom: 2rem;
    padding-bottom: 1.5rem;
    border-bottom: 1px solid var(--lightgray);
  }

  .mobile-nav-section:last-child {
    border-bottom: none;
  }

  .mobile-nav-section h3 {
    font-size: 0.9rem;
    font-weight: 700;
    margin: 0 0 0.75rem 0;
    color: var(--gray);
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .mobile-nav-section ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 0;
  }

  .mobile-nav-section li {
    margin: 0;
    padding: 0;
  }

  .mobile-nav-link {
    display: block;
    padding: 0.65rem 0.5rem;
    color: var(--secondary);
    text-decoration: none;
    font-weight: 400;
    font-size: 0.95rem;
    background-color: transparent;
    border-radius: 4px;
    transition: background-color 0.2s ease, color 0.2s ease;
  }

  .mobile-nav-link:hover,
  .mobile-nav-link:active {
    background-color: var(--highlight);
    color: var(--tertiary);
  }

  .mobile-nav-section .chapter-number,
  .mobile-nav-section .lesson-number {
    font-weight: 600;
    color: var(--darkgray);
  }

  /* Overlay */
  .mobile-nav-overlay {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 199;
  }

  .mobile-nav.open ~ .mobile-nav-overlay,
  .mobile-nav.open .mobile-nav-overlay {
    display: block;
  }

  /* Prevent body scroll when menu is open */
  body.mobile-nav-open {
    overflow: hidden;
  }

  /* Hide desktop top nav on mobile */
  .top-nav {
    display: none;
  }

  /* Hide sidebars on mobile */
  .page > #quartz-body > .sidebar.left,
  .page > #quartz-body > .sidebar.right {
    display: none !important;
  }
}
`

  MobileNav.afterDOMLoaded = script

  return MobileNav
}) satisfies QuartzComponentConstructor
