import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { resolveRelative, simplifySlug, SimpleSlug } from "../util/path"
import { publishedMonths, monthLabel } from "./RecentlyAddedList"
import style from "./styles/recentNotes.scss"
import { classNames } from "../util/lang"

// Left-hand month panel for the Recently added section.
// The landing page ("recently-added") shows the most recent items regardless of
// date and is listed as "Latest"; the per-month archive pages (those with a
// `month` frontmatter) are listed below it. Most recent first.
// How many month archives the sidebar lists. Deriving months from content
// rather than from hand-written files surfaced the whole back catalogue —
// presentations dated 2017 onward, 53 months of it — which is a correct record
// and an unusable nav. Every month still gets a page, so older links and any
// direct URL keep working; this only bounds what is offered.
const ARCHIVE_MONTHS = 12

export default (() => {
  const RecentlyAddedNav: QuartzComponent = ({
    fileData,
    allFiles,
    cfg,
    displayClass,
  }: QuartzComponentProps) => {
    const currentSlug = simplifySlug(fileData.slug!)
    if (!(currentSlug === "recently-added" || currentSlug.startsWith("recently-added/"))) {
      return null
    }

    // Months derived from the content itself, not from hand-written archive
    // files. Those files stopped at 2026-05 and the sidebar silently lost four
    // months of record; a month now appears here exactly when something was
    // published in it, and RecentlyAddedArchive emits the matching page from
    // the same predicate.
    const archives = publishedMonths(allFiles, cfg).slice(0, ARCHIVE_MONTHS)

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
          {archives.map((month) => (
            <li class="recent-li">
              <div class="section">
                <div class="desc">
                  <h3>
                    <a
                      href={resolveRelative(
                        fileData.slug!,
                        `recently-added/${month}` as SimpleSlug,
                      )}
                      class="internal"
                    >
                      {monthLabel(month)}
                    </a>
                  </h3>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  RecentlyAddedNav.css = style
  return RecentlyAddedNav
}) satisfies QuartzComponentConstructor
