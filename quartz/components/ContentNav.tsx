import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { FullSlug, resolveRelative } from "../util/path"

interface ContentNavOptions {
  title: string
  links: { text: string; slug: string }[]
}

const defaultOptions: ContentNavOptions = {
  title: "Content",
  links: [
    { text: "Courses", slug: "Courses/" },
    { text: "Essays", slug: "Essays/" },
    { text: "Posts", slug: "Posts/" },
    { text: "Notes", slug: "Notes/" },
  ],
}

export default ((opts?: Partial<ContentNavOptions>) => {
  const options = { ...defaultOptions, ...opts }

  const ContentNav: QuartzComponent = ({ fileData, displayClass }: QuartzComponentProps) => {
    return (
      <div class={`content-nav ${displayClass ?? ""}`}>
        <h2>{options.title}</h2>
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
      </div>
    )
  }

  ContentNav.css = `
.content-nav {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.content-nav h2 {
  font-size: 1rem;
  font-weight: 700;
  margin: 0;
  color: var(--dark);
}

.content-nav ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  overflow: hidden;
}

.content-nav li {
  margin: 0;
  padding: 0;
}

.content-nav a.internal {
  color: var(--secondary);
  text-decoration: none;
  display: block;
  padding: 0.2rem 0;
  transition: color 0.2s ease;
  background-color: transparent;
  border-radius: 0;
}

.content-nav a.internal:hover {
  color: var(--tertiary);
  background-color: transparent;
}
`

  return ContentNav
}) satisfies QuartzComponentConstructor
