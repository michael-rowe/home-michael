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

// Renders the list of site content published in a given month.
// Target month is the page's `month` frontmatter ("YYYY-MM") if present (archive pages),
// otherwise the current month at build time (the landing page — updates on every rebuild).
export default (() => {
  const RecentlyAddedList: QuartzComponent = ({ fileData, allFiles, cfg, displayClass }: QuartzComponentProps) => {
    const monthFm = fileData.frontmatter?.month as string | undefined
    let year: number
    let month: number // 0-indexed
    if (monthFm && /^\d{4}-\d{2}$/.test(monthFm)) {
      year = parseInt(monthFm.slice(0, 4), 10)
      month = parseInt(monthFm.slice(5, 7), 10) - 1
    } else {
      const now = new Date()
      year = now.getFullYear()
      month = now.getMonth()
    }

    const validTypes = new Set(TYPE_SECTIONS.map((s) => s.type))
    const pages = allFiles
      .filter((p) => {
        const t = p.frontmatter?.type as string | undefined
        const s = p.slug ?? ""
        if (!t || !validTypes.has(t)) return false
        if (s.startsWith("recently-added") || s.includes("templates")) return false
        const d = getDate(cfg, p)
        // Local-time month bucketing on dates parsed as UTC midnight: correct
        // on UTC/UK build machines; a build west of UTC would shift
        // first-of-month items into the previous month
        return !!d && d.getFullYear() === year && d.getMonth() === month
      })
      .sort((a, b) => (getDate(cfg, b)?.getTime() ?? 0) - (getDate(cfg, a)?.getTime() ?? 0))

    const monthLabel = `${MONTH_NAMES[month]} ${year}`
    const showHeading = !monthFm // archive pages already title themselves by month

    return (
      <div class={classNames(displayClass, "recently-added-list")}>
        {showHeading && <h2>{monthLabel}</h2>}
        {pages.length === 0 && <p>Nothing published yet this month.</p>}
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
`

  return RecentlyAddedList
}) satisfies QuartzComponentConstructor
