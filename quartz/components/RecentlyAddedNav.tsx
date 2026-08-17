import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { resolveRelative, SimpleSlug } from "../util/path"
import { comparableSlug, isInSection } from "./utils/slugs"
import style from "./styles/recentNotes.scss"
import { classNames } from "../util/lang"

// Left-hand month panel for the Recently added section.
// The landing page ("recently-added") shows the most recent items regardless of
// date and is listed as "Latest"; the per-month archive pages (those with a
// `month` frontmatter) are listed below it. Most recent first.
export default (() => {
  const RecentlyAddedNav: QuartzComponent = ({ fileData, allFiles, displayClass }: QuartzComponentProps) => {
    if (!isInSection(fileData.slug!, "recently-added")) {
      return null
    }

    // Archive month pages, identified by a "YYYY-MM" month frontmatter, newest first.
    const archives = allFiles
      .filter((f) => /^\d{4}-\d{2}$/.test((f.frontmatter?.month as string | undefined) ?? ""))
      .sort((a, b) =>
        ((b.frontmatter?.month as string) ?? "").localeCompare((a.frontmatter?.month as string) ?? ""),
      )

    // The landing page is a rolling list of the most recent items, not a month
    // bucket, so it is labelled for what it shows. Labelling it with the
    // current month was wrong once the list stopped being month-scoped: in a
    // quiet month the link read "August 2026" and led to a page of June and
    // July items.
    const currentLabel = "Latest"

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
            const title = (file.frontmatter?.title as string | undefined) ?? comparableSlug(file.slug!)
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
