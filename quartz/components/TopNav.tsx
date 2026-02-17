import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { FullSlug, resolveRelative } from "../util/path"

interface DropdownItem {
  text: string
  slug: string
}

interface NavLink {
  text: string
  slug: string
  dropdown?: DropdownItem[]
}

interface TopNavOptions {
  links: NavLink[]
}

const defaultOptions: TopNavOptions = {
  links: [
    {
      text: "Browse",
      slug: "formats",
      dropdown: [
        { text: "Courses", slug: "Courses/index" },
        { text: "Essays", slug: "Essays/index" },
        { text: "Posts", slug: "Posts/index" },
        { text: "Notes", slug: "Notes/index" },
        { text: "Presentations", slug: "Presentations/index" },
      ],
    },
    { text: "About", slug: "about" },
    { text: "Speaking", slug: "speaking" },
    { text: "Contact", slug: "contact" },
    { text: "Newsletter", slug: "newsletter" },
  ],
}

export default ((opts?: Partial<TopNavOptions>) => {
  const options = { ...defaultOptions, ...opts }

  const TopNav: QuartzComponent = ({ fileData, displayClass }: QuartzComponentProps) => {
    return (
      <nav class={`top-nav ${displayClass ?? ""}`} aria-label="Main navigation">
        <ul>
          {options.links.map((link) => {
            const href = resolveRelative(fileData.slug!, link.slug as FullSlug)
            const hasDropdown = link.dropdown && link.dropdown.length > 0

            if (hasDropdown) {
              return (
                <li class="has-dropdown">
                  <a href={href} class="internal">
                    {link.text}
                    <svg class="dropdown-arrow" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </a>
                  <ul class="dropdown-menu">
                    {link.dropdown!.map((item) => {
                      const itemHref = resolveRelative(fileData.slug!, item.slug as FullSlug)
                      return (
                        <li>
                          <a href={itemHref} class="internal">
                            {item.text}
                          </a>
                        </li>
                      )
                    })}
                  </ul>
                </li>
              )
            }

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

.top-nav > ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 0;
  justify-content: flex-start;
}

.top-nav > ul > li {
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  position: relative;
}

.top-nav > ul > li:not(:last-child)::after {
  content: "|";
  color: var(--lightgray);
  margin: 0 0.35rem;
}

.top-nav a.internal {
  color: var(--secondary);
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.25rem;
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

/* Dropdown arrow */
.top-nav .dropdown-arrow {
  transition: transform 0.2s ease;
}

.top-nav .has-dropdown:hover .dropdown-arrow {
  transform: rotate(180deg);
}

/* Dropdown menu */
.top-nav .dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  list-style: none;
  margin: 0;
  padding: 0.5rem 0;
  background-color: var(--light);
  border: 1px solid var(--lightgray);
  border-radius: 6px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  min-width: 140px;
  opacity: 0;
  visibility: hidden;
  transform: translateY(-8px);
  transition: opacity 0.2s ease, transform 0.2s ease, visibility 0.2s ease;
  z-index: 100;
}

.top-nav .has-dropdown:hover .dropdown-menu {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.top-nav .dropdown-menu li {
  margin: 0;
  padding: 0;
}

.top-nav .dropdown-menu li::after {
  content: none;
}

.top-nav .dropdown-menu a.internal {
  padding: 0.5rem 1rem;
  display: block;
  font-weight: 400;
  text-decoration: none;
}

.top-nav .dropdown-menu a.internal:hover {
  background-color: var(--lightgray);
  text-decoration: none;
}

@media (max-width: 800px) {
  .top-nav {
    display: none;
  }
}
`

  return TopNav
}) satisfies QuartzComponentConstructor
