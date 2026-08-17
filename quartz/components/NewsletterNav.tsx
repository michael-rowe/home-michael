import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { resolveRelative, simplifySlug } from "../util/path"
import { getDate } from "./Date"
import style from "./styles/recentNotes.scss"
import { classNames } from "../util/lang"

const MONTH_NAMES = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
]

// Left-hand "Past issues" panel: every published newsletter, most recent first,
// labelled by month.
//
// Deliberately absent from the Newsletters index, which already lists every
// issue in the body with titles, descriptions and dates. Repeating that list in
// the sidebar of the page it came from is noise. It stays on individual issues
// and on the subscribe page, where there is no such list to duplicate and it
// does real navigational work.
export default (() => {
  const NewsletterNav: QuartzComponent = ({ fileData, allFiles, cfg, displayClass }: QuartzComponentProps) => {
    // simplifySlug leaves a trailing slash on folder pages: "Newsletters/index"
    // simplifies to "Newsletters/", not "Newsletters", because stripSlashes is
    // called with onlyStripPrefix. Normalise before comparing.
    const currentSlug = simplifySlug(fileData.slug!).replace(/\/$/, "")
    const inSection =
      currentSlug === "Newsletters" || currentSlug.startsWith("Newsletters/") || currentSlug === "newsletter"
    const isIndex = currentSlug === "Newsletters"
    if (!inSection || isIndex) {
      return null
    }

    const issues = allFiles
      .filter((f) => (f.frontmatter?.type as string | undefined) === "newsletter")
      .sort((a, b) => (getDate(cfg, b)?.getTime() ?? 0) - (getDate(cfg, a)?.getTime() ?? 0))

    if (issues.length === 0) {
      return null
    }

    return (
      <div class={classNames(displayClass, "recent-notes")}>
        <h3>Past issues</h3>
        <ul class="recent-ul">
          {issues.map((f) => {
            const d = getDate(cfg, f)
            // Local-time month labels on UTC-midnight dates — see RecentlyAddedList
            const label = d ? `${MONTH_NAMES[d.getMonth()]} ${d.getFullYear()}` : simplifySlug(f.slug!)
            const isActive = simplifySlug(f.slug!) === currentSlug
            return (
              <li class={`recent-li${isActive ? " active" : ""}`}>
                <div class="section">
                  <div class="desc">
                    <h3>
                      <a href={resolveRelative(fileData.slug!, f.slug!)} class="internal">
                        {label}
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

  NewsletterNav.css = style
  return NewsletterNav
}) satisfies QuartzComponentConstructor
