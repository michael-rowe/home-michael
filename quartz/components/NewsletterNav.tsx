import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { resolveRelative, simplifySlug } from "../util/path"
import { getDate } from "./Date"
import style from "./styles/recentNotes.scss"
import { classNames } from "../util/lang"

const MONTH_NAMES = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
]

// Left-hand "Past issues" panel for the newsletter archive.
// Lists every published newsletter (type: newsletter), most recent first, labelled by month.
export default (() => {
  const NewsletterNav: QuartzComponent = ({ fileData, allFiles, cfg, displayClass }: QuartzComponentProps) => {
    const currentSlug = simplifySlug(fileData.slug!)
    if (!(currentSlug === "Newsletters" || currentSlug.startsWith("Newsletters/") || currentSlug === "newsletter")) {
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
