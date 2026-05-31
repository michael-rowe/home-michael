import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import { resolveRelative, simplifySlug } from "../util/path"

export default (() => {
  const RecentlyAddedNav: QuartzComponent = ({ fileData, allFiles, displayClass }: QuartzComponentProps) => {
    const currentSlug = simplifySlug(fileData.slug!)

    // Only render on the Recently added section (the hub and its month pages)
    if (!(currentSlug === "recently-added" || currentSlug.startsWith("recently-added/"))) {
      return null
    }

    // Collect the per-month pages (e.g. recently-added/2026-05), excluding the hub index,
    // sorted most-recent first by their YYYY-MM slug.
    const months = allFiles
      .map((f) => ({ file: f, slug: simplifySlug(f.slug!) }))
      .filter(({ slug }) => slug.startsWith("recently-added/") && slug !== "recently-added")
      .sort((a, b) => b.slug.localeCompare(a.slug))

    if (months.length === 0) {
      return null
    }

    return (
      <div class={classNames(displayClass, "recently-added-nav")}>
        <h3>History</h3>
        <ul class="month-list">
          <li class={currentSlug === "recently-added" ? "active" : ""}>
            <a href={resolveRelative(fileData.slug!, "recently-added" as any)} class="internal">
              Latest
            </a>
          </li>
          {months.map(({ file, slug }) => {
            const isActive = slug === currentSlug
            const title = (file.frontmatter?.title as string | undefined) ?? slug
            return (
              <li class={isActive ? "active" : ""}>
                <a href={resolveRelative(fileData.slug!, file.slug!)} class="internal">
                  {title}
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }

  RecentlyAddedNav.css = `
.recently-added-nav {
  margin-top: 1rem;
}

.recently-added-nav h3 {
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--secondary);
  margin: 0 0 0.5rem 0;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.recently-added-nav .month-list {
  list-style: none;
  margin: 0;
  padding: 0;
}

.recently-added-nav .month-list li {
  margin: 0;
  padding: 0;
}

.recently-added-nav .month-list a {
  display: block;
  padding: 0.4rem 0.5rem;
  margin-left: 0.5rem;
  color: var(--darkgray);
  text-decoration: none;
  border-left: 2px solid transparent;
  transition: all 0.2s ease;
  font-size: 0.9rem;
}

.recently-added-nav .month-list a:hover {
  color: var(--secondary);
  border-left-color: var(--secondary);
}

.recently-added-nav .month-list li.active a {
  color: var(--secondary);
  font-weight: 600;
  border-left-color: var(--secondary);
}

@media (max-width: 768px) {
  .recently-added-nav {
    display: none;
  }
}
`

  return RecentlyAddedNav
}) satisfies QuartzComponentConstructor
