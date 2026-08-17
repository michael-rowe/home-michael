import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { resolveRelative } from "../util/path"
import { getDate } from "./Date"
import { classNames } from "../util/lang"

// Sections rendered in this order; only those with content for the month appear.
const TYPE_SECTIONS: { type: string; label: string }[] = [
  { type: "essay", label: "Essays" },
  { type: "presentation", label: "Presentations" },
  { type: "post", label: "Posts" },
  { type: "note", label: "Notes" },
  { type: "guide", label: "Guides" },
  { type: "framework", label: "Frameworks" },
  { type: "course", label: "Courses" },
]

const MONTH_NAMES = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
]

// How many items the rolling list shows when no month is pinned.
const ROLLING_COUNT = 5

// Renders recently published site content.
//
// Two modes, decided by the page's `month` frontmatter:
//
//  - `month: YYYY-MM` (the archive pages) buckets by that calendar month and
//    groups by content type, which is what an archive wants.
//  - No `month` (the main page) shows the most recent items regardless of when
//    they were published. Month bucketing was wrong here: a quiet month left
//    the page reading "Nothing published yet this month", which is the worst
//    thing it could say to someone who arrived from the newsletter or the
//    landing page looking for a way in. A rolling list always has something on
//    it, and the month archives in the sidebar still give the full record.
//
// The rolling list is flat and reverse-chronological rather than grouped: with
// five items across seven possible types, grouping mostly produces sections of
// one, which reads as broken rather than organised.
export default (() => {
  const RecentlyAddedList: QuartzComponent = ({ fileData, allFiles, cfg, displayClass }: QuartzComponentProps) => {
    const monthFm = fileData.frontmatter?.month as string | undefined
    const pinnedMonth = monthFm && /^\d{4}-\d{2}$/.test(monthFm) ? monthFm : undefined
    const year = pinnedMonth ? parseInt(pinnedMonth.slice(0, 4), 10) : 0
    const month = pinnedMonth ? parseInt(pinnedMonth.slice(5, 7), 10) - 1 : 0 // 0-indexed

    const validTypes = new Set(TYPE_SECTIONS.map((s) => s.type))
    const published = allFiles
      .filter((p) => {
        const t = p.frontmatter?.type as string | undefined
        const s = p.slug ?? ""
        if (!t || !validTypes.has(t)) return false
        if (s.startsWith("recently-added") || s.includes("templates")) return false
        return !!getDate(cfg, p)
      })
      .sort((a, b) => (getDate(cfg, b)?.getTime() ?? 0) - (getDate(cfg, a)?.getTime() ?? 0))

    if (!pinnedMonth) {
      const latest = published.slice(0, ROLLING_COUNT)
      const typeLabel = (t?: string) =>
        TYPE_SECTIONS.find((s) => s.type === t)?.label.replace(/s$/, "") ?? ""
      return (
        <div class={classNames(displayClass, "recently-added-list")}>
          <h2>Latest</h2>
          {latest.length === 0 && <p>Nothing published yet.</p>}
          <ul>
            {latest.map((p) => {
              const title = (p.frontmatter?.title as string | undefined) ?? (p.slug ?? "")
              const desc = p.frontmatter?.description as string | undefined
              const d = getDate(cfg, p)
              const when = d ? `${MONTH_NAMES[d.getMonth()]} ${d.getFullYear()}` : ""
              return (
                <li>
                  <a href={resolveRelative(fileData.slug!, p.slug!)} class="internal">
                    {title}
                  </a>
                  <span class="ra-meta">
                    {typeLabel(p.frontmatter?.type as string | undefined)}
                    {when ? ` · ${when}` : ""}
                  </span>
                  {desc ? <span class="ra-desc">{desc}</span> : null}
                </li>
              )
            })}
          </ul>
        </div>
      )
    }

    // Local-time month bucketing on dates parsed as UTC midnight: correct on
    // UTC/UK build machines; a build west of UTC would shift first-of-month
    // items into the previous month
    const pages = published.filter((p) => {
      const d = getDate(cfg, p)!
      return d.getFullYear() === year && d.getMonth() === month
    })

    return (
      <div class={classNames(displayClass, "recently-added-list")}>
        {pages.length === 0 && <p>Nothing published this month.</p>}
        {TYPE_SECTIONS.map((section) => {
          const items = pages.filter((p) => (p.frontmatter?.type as string | undefined) === section.type)
          if (items.length === 0) return null
          return (
            <div class="ra-section">
              <h3>{section.label}</h3>
              <ul>
                {items.map((p) => {
                  const title = (p.frontmatter?.title as string | undefined) ?? (p.slug ?? "")
                  const desc = p.frontmatter?.description as string | undefined
                  return (
                    <li>
                      <a href={resolveRelative(fileData.slug!, p.slug!)} class="internal">
                        {title}
                      </a>
                      {desc ? ` — ${desc}` : ""}
                    </li>
                  )
                })}
              </ul>
            </div>
          )
        })}
      </div>
    )
  }

  RecentlyAddedList.css = `
.recently-added-list h2 {
  margin: 0.5rem 0 0.5rem 0;
}
.recently-added-list .ra-section {
  margin-bottom: 1.5rem;
}
.recently-added-list .ra-section h3 {
  margin: 1.2rem 0 0.4rem 0;
}
.recently-added-list ul {
  margin-top: 0.3rem;
}
.recently-added-list li {
  margin-bottom: 0.5rem;
}
.recently-added-list .ra-meta {
  display: block;
  font-size: 0.8rem;
  color: var(--darkgray);
  margin-top: 0.1rem;
}
.recently-added-list .ra-desc {
  display: block;
  margin-top: 0.2rem;
}
`

  return RecentlyAddedList
}) satisfies QuartzComponentConstructor
