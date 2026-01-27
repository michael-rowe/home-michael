import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import { resolveRelative } from "../util/path"

interface BookOverviewOptions {
  bookFolder?: string
  showCoverOnly?: boolean
  showChaptersOnly?: boolean
}

const defaultOptions: BookOverviewOptions = {
  bookFolder: "Book",
  showCoverOnly: false,
  showChaptersOnly: false,
}

export default ((opts?: Partial<BookOverviewOptions>) => {
  const options = { ...defaultOptions, ...opts }

  const BookOverview: QuartzComponent = ({
    fileData,
    allFiles,
    displayClass,
  }: QuartzComponentProps) => {
    // Only render on Book/index page
    if (fileData.slug !== `${options.bookFolder}/index`) {
      return null
    }

    // If showing cover only
    if (options.showCoverOnly) {
      return (
        <div class="book-cover-placeholder">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 200 300"
            class="book-cover-icon"
          >
            <rect width="200" height="300" fill="var(--lightgray)" />
            <path
              d="M60 100 L140 100 M60 130 L140 130 M60 160 L140 160 M60 190 L100 190"
              stroke="var(--gray)"
              stroke-width="3"
              stroke-linecap="round"
            />
            <circle cx="100" cy="220" r="25" fill="var(--secondary)" opacity="0.3" />
          </svg>
          <p class="cover-note">Cover image coming soon</p>
        </div>
      )
    }

    // Get all chapters from the Book folder
    const chapters = allFiles
      .filter((f) => {
        return (
          f.slug?.startsWith(`${options.bookFolder}/`) &&
          f.slug !== `${options.bookFolder}/index` &&
          !f.slug.includes("structure") &&
          !f.slug.includes("template")
        )
      })
      .sort((a, b) => {
        // Sort by chapter_number if available
        const aChapter = a.frontmatter?.chapter_number as number | undefined
        const bChapter = b.frontmatter?.chapter_number as number | undefined
        if (aChapter !== undefined && bChapter !== undefined) {
          return aChapter - bChapter
        }
        // Fall back to alphabetical
        return (a.frontmatter?.title ?? "").localeCompare(b.frontmatter?.title ?? "")
      })

    if (chapters.length === 0) {
      return null
    }

    // If showing chapters only
    if (options.showChaptersOnly) {
      return (
        <div class={classNames(displayClass, "book-chapters")}>
          <h2>Chapters</h2>
          <ul class="chapter-list">
            {chapters.map((chapter) => {
              const chapterNum = chapter.frontmatter?.chapter_number as number | undefined
              const title = chapter.frontmatter?.title as string | undefined
              const subtitle = chapter.frontmatter?.subtitle as string | undefined
              const description =
                (chapter.frontmatter?.description as string | undefined) ||
                (chapter.frontmatter?.key_insight as string | undefined) ||
                (chapter.frontmatter?.chapter_problem as string | undefined) ||
                ""

              return (
                <li class="chapter-item">
                  <a
                    href={resolveRelative(fileData.slug!, chapter.slug!)}
                    class="chapter-link"
                  >
                    <div class="chapter-header">
                      {chapterNum !== undefined && (
                        <span class="chapter-number">Chapter {chapterNum}</span>
                      )}
                      <h3 class="chapter-title">{title}</h3>
                      {subtitle && <p class="chapter-subtitle">{subtitle}</p>}
                    </div>
                    {description && <p class="chapter-description">{description}</p>}
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
      )
    }

    // Default: return null
    return null
  }

  BookOverview.css = `
.book-cover-placeholder {
  width: 200px;
  text-align: center;
  float: right;
  margin-left: 2rem;
  margin-bottom: 1rem;
}

.book-cover-icon {
  width: 100%;
  height: auto;
  border-radius: 4px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.cover-note {
  margin-top: 0.5rem;
  font-size: 0.8rem;
  color: var(--gray);
  font-style: italic;
}

.book-chapters {
  clear: both;
  margin: 3rem 0 2rem;
}

.book-chapters h2 {
  margin-top: 0;
  margin-bottom: 1.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid var(--lightgray);
}

.chapter-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.chapter-item {
  margin: 0;
}

.chapter-link {
  display: block;
  text-decoration: none;
  padding: 1.5rem;
  border-radius: 8px;
  background-color: transparent;
  transition: background-color 0.2s ease;
  border: none !important;
  color: var(--darkgray);
}

.chapter-link:hover,
.chapter-link:focus,
.chapter-link:active {
  background-color: rgba(143, 159, 169, 0.1);
  color: var(--darkgray);
  text-decoration: none;
}

.chapter-header {
  margin-bottom: 0.5rem;
}

.chapter-number {
  display: block;
  font-size: 0.85rem;
  color: var(--secondary);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 0.25rem;
}

.chapter-title {
  margin: 0;
  font-size: 1.3rem;
  line-height: 1.3;
  color: var(--dark);
  font-weight: 600;
}

.chapter-subtitle {
  margin: 0.25rem 0 0 0;
  font-size: 1rem;
  color: var(--gray);
  font-style: italic;
  font-weight: 400;
}

.chapter-description {
  margin: 0.25rem 0 0 0;
  color: var(--darkgray);
  line-height: 1.5;
  font-size: 0.95rem;
  font-weight: 400;
}

@media (max-width: 800px) {
  .book-cover-placeholder {
    float: none;
    margin: 0 0 2rem 0;
    max-width: 150px;
  }

  .chapter-link {
    padding: 1rem;
  }

  .chapter-title {
    font-size: 1.1rem;
  }
}
`

  return BookOverview
}) satisfies QuartzComponentConstructor
