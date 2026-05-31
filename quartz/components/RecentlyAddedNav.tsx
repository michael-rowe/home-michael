import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { resolveRelative, simplifySlug, SimpleSlug } from "../util/path"
import style from "./styles/recentNotes.scss"
import { classNames } from "../util/lang"

// Left-hand "History" panel for the Recently added section.
// Lists the per-month archive pages (previous months); the current month is the landing page ("Latest").
export default (() => {
  const RecentlyAddedNav: QuartzComponent = ({ fileData, allFiles, displayClass }: QuartzComponentProps) => {
    const currentSlug = simplifySlug(fileData.slug!)
    if (!(currentSlug === "recently-added" || currentSlug.startsWith("recently-added/"))) {
      return null
    }

    const months = allFiles
      .map((f) => ({ file: f, slug: simplifySlug(f.slug!) }))
      .filter(({ slug }) => slug.startsWith("recently-added/") && slug !== "recently-added")
      .sort((a, b) => b.slug.localeCompare(a.slug))

    return (
      <div class={classNames(displayClass, "recent-notes")}>
        <h3>History</h3>
        <ul class="recent-ul">
          <li class="recent-li">
            <div class="section">
              <div class="desc">
                <h3>
                  <a href={resolveRelative(fileData.slug!, "recently-added" as SimpleSlug)} class="internal">
                    Latest
                  </a>
                </h3>
              </div>
            </div>
          </li>
          {months.map(({ file }) => {
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
