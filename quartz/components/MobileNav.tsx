import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { FullSlug, resolveRelative } from "../util/path"
// @ts-ignore
import script from "./scripts/mobilenav.inline"

interface MobileNavOptions {
  links: { text: string; slug: string }[]
}

const defaultOptions: MobileNavOptions = {
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

export default ((opts?: Partial<MobileNavOptions>) => {
  const options = { ...defaultOptions, ...opts }

  const MobileNav: QuartzComponent = ({ fileData, displayClass }: QuartzComponentProps) => {
    return (
      <div class={`mobile-nav ${displayClass ?? ""}`}>
        <button
          type="button"
          class="mobile-nav-toggle"
          aria-label="Open navigation menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="menu-icon"
          >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
        </button>
        <nav class="mobile-nav-content">
          <button
            type="button"
            class="mobile-nav-close"
            aria-label="Close navigation menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
          <ul>
            {options.links.map((link) => {
              const href = resolveRelative(fileData.slug!, link.slug as FullSlug)
              return (
                <li>
                  <a href={href} class="internal mobile-nav-link">
                    {link.text}
                  </a>
                </li>
              )
            })}
          </ul>
        </nav>
      </div>
    )
  }

  MobileNav.css = `
.mobile-nav {
  display: none;
}

@media (max-width: 768px) {
  .mobile-nav {
    display: block;
    position: fixed;
    top: 0.5rem;
    left: 0.5rem;
    z-index: 200;
  }

  .mobile-nav-toggle {
    background-color: var(--light);
    border: 1px solid var(--lightgray);
    border-radius: 5px;
    cursor: pointer;
    padding: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: background-color 0.2s ease;
  }

  .mobile-nav-toggle:hover {
    background-color: var(--lightgray);
  }

  .mobile-nav-toggle .menu-icon {
    stroke: var(--darkgray);
    width: 24px;
    height: 24px;
  }

  .mobile-nav-content {
    position: fixed;
    top: 0;
    left: 0;
    width: 80vw;
    max-width: 300px;
    height: 100vh;
    background-color: var(--light);
    border-right: 1px solid var(--lightgray);
    transform: translateX(-100%);
    transition: transform 0.3s ease;
    overflow-y: auto;
    padding: 1rem;
    box-shadow: 2px 0 8px rgba(0, 0, 0, 0.1);
    z-index: 201;
  }

  .mobile-nav.open .mobile-nav-content {
    transform: translateX(0);
  }

  .mobile-nav-close {
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-bottom: 1rem;
    margin-left: auto;
  }

  .mobile-nav-close svg {
    stroke: var(--darkgray);
    width: 24px;
    height: 24px;
  }

  .mobile-nav-content ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 0;
  }

  .mobile-nav-content li {
    margin: 0;
    padding: 0;
    border-bottom: 1px solid var(--lightgray);
  }

  .mobile-nav-content li:last-child {
    border-bottom: none;
  }

  .mobile-nav-link {
    display: block;
    padding: 1rem;
    color: var(--secondary);
    text-decoration: none;
    font-weight: 500;
    font-size: 1.1rem;
    background-color: transparent;
    transition: background-color 0.2s ease, color 0.2s ease;
  }

  .mobile-nav-link:hover {
    background-color: var(--highlight);
    color: var(--tertiary);
  }

  /* Overlay */
  .mobile-nav-overlay {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 199;
  }

  .mobile-nav.open ~ .mobile-nav-overlay,
  .mobile-nav.open .mobile-nav-overlay {
    display: block;
  }

  /* Prevent body scroll when menu is open */
  body.mobile-nav-open {
    overflow: hidden;
  }

  /* Hide desktop top nav on mobile */
  .top-nav {
    display: none;
  }

  /* Hide left sidebar on mobile when nav is open */
  body.mobile-nav-open .left.sidebar {
    display: none;
  }
}
`

  MobileNav.afterDOMLoaded = script

  return MobileNav
}) satisfies QuartzComponentConstructor
