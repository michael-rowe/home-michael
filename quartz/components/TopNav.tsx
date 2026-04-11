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
                  <a href={href} class="internal" data-no-popover="true">
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
                          <a href={itemHref} class="internal" data-no-popover="true">
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
        <div class="top-nav-social">
          <a href="https://github.com/michael-rowe/home-michael" target="_blank" rel="noopener noreferrer" aria-label="GitHub repository" class="social-link">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/michael-rowe-phd/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile" class="social-link">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
        </div>
      </nav>
    )
  }

  TopNav.css = `
.top-nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 200;
  width: 100%;
  background-color: var(--light);
  border-bottom: 1px solid var(--lightgray);
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.06);
  padding: 0 0 0.5rem 0;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.top-nav > ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 0;
  justify-content: center;
}

.top-nav-social {
  position: absolute;
  right: 1.25rem;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.top-nav-social .social-link {
  color: var(--gray);
  display: flex;
  align-items: center;
  padding: 0.25rem;
  transition: color 0.2s ease;
}

.top-nav-social .social-link:hover {
  color: var(--secondary);
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
