import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { resolveRelative, simplifySlug, SimpleSlug } from "../util/path"
import style from "./styles/recentNotes.scss"
import { classNames } from "../util/lang"

const MONTH_NAMES = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
]

// Left-hand month panel for the Recently added section.
// The landing page ("recently-added") is the current month; the per-month archive
// pages (those with a `month` frontmatter) are listed below it. Most recent first.
export default (() => {
  const RecentlyAddedNav: QuartzComponent = ({ fileData, allFiles, displayClass }: QuartzComponentProps) => {
    const currentSlug = simplifySlug(fileData.slug!)
    if (!(currentSlug === "recently-added" || currentSlug.startsWith("recently-added/"))) {
      return null
    }

    // Archive month pages, identified by a "YYYY-MM" month frontmatter, newest first.
    const archives = allFiles
      .filter((f) => /^\d{4}-\d{2}$/.test((f.frontmatter?.month as string | undefined) ?? ""))
      .sort((a, b) =>
        ((b.frontmatter?.month as string) ?? "").localeCompare((a.frontmatter?.month as string) ?? ""),
      )

    // Landing page = the current month (RecentlyAddedList shows current-month content).
    // Local-time month bucketing — see the note in RecentlyAddedList
    const now = new Date()
    const currentLabel = `${MONTH_NAMES[now.getMonth()]} ${now.getFullYear()}`

    return (
      <div class={classNames(displayClass, "recent-notes")}>
        <ul class="recent-ul">
          <li class="recent-li">
            <div class="section">
              <div class="desc">
                <h3>
                  <a href={resolveRelative(fileData.slug!, "recently-added" as SimpleSlug)} class="internal">
                    {currentLabel}
                  </a>
                </h3>
              </div>
            </div>
          </li>
          {archives.map((file) => {
            const title = (file.frontmatter?.title as string | undefined) ?? simplifySlug(file.slug!)
            return (
              <li class="recent-li">
                <div class="section">
                  <div class="desc">
                    <h3>
                      <a href={resolveRelative(fileData.slug!, file.slug!)} class="internal">
                        {title}
                      </a>
                    </h3>
                  </div>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }

  RecentlyAddedNav.css = style
  return RecentlyAddedNav
}) satisfies QuartzComponentConstructor
