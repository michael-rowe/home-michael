import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { FullSlug, resolveRelative } from "../util/path"

interface TopNavOptions {
  links: { text: string; slug: string }[]
}

const defaultOptions: TopNavOptions = {
  links: [
    { text: "Book", slug: "Book/" },
    { text: "Courses", slug: "Courses/" },
    { text: "Essays", slug: "Essays/" },
    { text: "Posts", slug: "Posts/" },
    { text: "Notes", slug: "Notes/" },
    { text: "About", slug: "about" },
    { text: "Contact", slug: "contact" },
    { text: "Newsletter", slug: "newsletter" },
  ],
}

export default ((opts?: Partial<TopNavOptions>) => {
  const options = { ...defaultOptions, ...opts }

  const TopNav: QuartzComponent = ({ fileData, displayClass }: QuartzComponentProps) => {
    return (
      <nav class={`top-nav ${displayClass ?? ""}`}>
        <ul>
          {options.links.map((link) => {
            const href = resolveRelative(fileData.slug!, link.slug as FullSlug)
            return (
              <li>
                <a href={href} class="internal">
                  {link.text}
                </a>
              </li>
            )
          })}
        </ul>
      </nav>
    )
  }

  TopNav.css = `
.top-nav {
  width: 100%;
  background-color: var(--light);
  border-bottom: 1px solid var(--lightgray);
  padding: 0 0 0.5rem 0;
  margin-bottom: 1rem;
}

.top-nav ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 0;
  justify-content: flex-start;
}

.top-nav li {
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
}

.top-nav li:not(:last-child)::after {
  content: "|";
  color: var(--lightgray);
  margin: 0 0.35rem;
}

.top-nav a.internal {
  color: var(--secondary);
  text-decoration: none;
  display: block;
  padding: 0.75rem 0.5rem;
  transition: color 0.2s ease;
  font-weight: 500;
  font-size: 1rem;
  background-color: transparent;
  border-radius: 0;
  line-height: inherit;
}

.top-nav a.internal:hover {
  color: var(--tertiary);
  text-decoration: underline;
  text-decoration-thickness: 2px;
  text-underline-offset: 4px;
  background-color: transparent;
}

@media (max-width: 768px) {
  .top-nav {
    display: none;
  }
}
`

  return TopNav
}) satisfies QuartzComponentConstructor
