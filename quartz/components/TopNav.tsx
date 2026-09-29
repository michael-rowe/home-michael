import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { FullSlug, resolveRelative } from "../util/path"
import { Wordmark, wordmarkCss } from "./Wordmark"
import SearchConstructor from "./Search"
import DarkmodeConstructor from "./Darkmode"
import ReaderModeConstructor from "./ReaderMode"
import GraphConstructor from "./Graph"
import { concatenateResources } from "../util/resources"

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
        { text: "Posts", slug: "Posts/index" },
        { text: "Presentations", slug: "Presentations/index" },
        { text: "Podcasts", slug: "Podcasts/index" },
        { text: "Essays", slug: "Essays/index" },
        { text: "Notes", slug: "Notes/index" },
        { text: "Guides", slug: "Guides/index" },
      ],
    },
    { text: "Speaking", slug: "speaking" },
    { text: "Newsletter", slug: "newsletter" },
    { text: "About", slug: "about" },
    { text: "Contact", slug: "contact" },
  ],
}

export default ((opts?: Partial<TopNavOptions>) => {
  const options = { ...defaultOptions, ...opts }
  // The site controls live in the top bar's right-hand cluster, not the left
  // sidebar (POS-18), so reader mode can hide both sidebars and still leave its
  // own button on screen. One Search instance only: each instance binds its own
  // Ctrl-K handler, so MobileNav opens this one rather than rendering a second.
  const Search = SearchConstructor()
  const Darkmode = DarkmodeConstructor()
  const ReaderMode = ReaderModeConstructor()
  // The global graph is the one graph on the site; the per-page local graph
  // came out of the right sidebar. Ctrl-G opens it too (graph.inline.ts).
  // Defaults for readers who have not changed the panel: content folders only,
  // no tags, labels only when zoomed well in, more room between nodes.
  const Graph = GraphConstructor({
    globalOnly: true,
    globalGraph: {
      folders: [
        "Posts",
        "Notes",
        "Essays",
        "Guides",
        "Projects",
        "Presentations",
        "Podcasts",
        "Bibliography",
      ],
      defaultFolders: ["Posts", "Notes", "Essays", "Guides", "Projects", "Presentations"],
      userSettings: true,
      showTags: false,
      repelForce: 1,
      linkDistance: 50,
      opacityScale: 0.5,
    },
  })

  const TopNav: QuartzComponent = (props: QuartzComponentProps) => {
    const { fileData, displayClass } = props
    return (
      <nav class={`top-nav ${displayClass ?? ""}`} aria-label="Main navigation">
        <Wordmark
          href={resolveRelative(fileData.slug!, "index" as FullSlug)}
          class="top-nav-wordmark"
        />
        <ul>
          {options.links.map((link) => {
            const href = resolveRelative(fileData.slug!, link.slug as FullSlug)
            const hasDropdown = link.dropdown && link.dropdown.length > 0

            if (hasDropdown) {
              return (
                <li class="has-dropdown">
                  <a href={href} class="internal" data-no-popover="true">
                    {link.text}
                  </a>
                  {/* Separate control for the menu. The label above stays a real
                      link to the section index; this button is what touch and
                      keyboard users press to reveal the list, since tablets
                      between 800px and 1200px get this nav but cannot hover. */}
                  <button
                    type="button"
                    class="dropdown-toggle"
                    aria-expanded="false"
                    aria-haspopup="true"
                    aria-label={`Show ${link.text} menu`}
                  >
                    <svg
                      class="dropdown-arrow"
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      aria-hidden="true"
                    >
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </button>
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
          <Search {...props} />
          <Graph {...props} />
          <ReaderMode {...props} />
          <Darkmode {...props} />
          <span class="top-nav-divider" aria-hidden="true"></span>
          <a
            href="https://github.com/michael-rowe/home-michael"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub repository"
            class="social-link"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/michael-rowe-phd/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            class="social-link"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
        </div>
      </nav>
    )
  }

  const topNavCss =
    wordmarkCss +
    `
.top-nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 200;
  width: 100%;
  background-color: var(--light);
  border-bottom: 1px solid var(--lightgray);
  padding: 0 0 0.5rem 0;
  margin-bottom: 1rem;
  /* Three columns (PFL-9): wordmark left, links centred, social right. The
     equal 1fr side columns keep the links on the page's centre line. */
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  column-gap: 1rem;
  padding-left: 1.5rem;
  padding-right: 1.25rem;
  box-sizing: border-box; /* width is 100%; the padding must sit inside it */
}

.top-nav-wordmark {
  justify-self: start;
  margin-top: 0.5rem;
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
  justify-self: end;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.top-nav-social .global-graph-icon,
.top-nav-social .readermode,
.top-nav-social .darkmode {
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  color: var(--gray);
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.top-nav-social .global-graph-icon svg,
.top-nav-social .readermode svg,
.top-nav-social .darkmode svg {
  position: static;
  width: 20px;
  height: 20px;
  fill: var(--gray);
  stroke: none;
  transition: fill 0.2s ease;
}

.top-nav-social .global-graph-icon:hover svg,
.top-nav-social .readermode:hover svg,
.top-nav-social .darkmode:hover svg,
:root[reader-mode="on"] .top-nav-social .readermode svg {
  fill: var(--secondary);
}

.top-nav-social .search {
  max-width: none;
  margin-right: 0.25rem;
}

.top-nav-social .search > .search-button {
  width: 11rem;
}

/* Below 1440px a labelled search box makes the right column wider than the
   wordmark's, and the 1fr/auto/1fr grid then pushes the links off centre. The
   button drops its label and becomes an icon like its neighbours. */
@media (max-width: 1440px) {
  .top-nav-social .search > .search-button {
    width: 2rem;
    padding: 0;
    justify-content: center;
  }
  .top-nav-social .search > .search-button > p {
    display: none;
  }
}

.top-nav-divider {
  width: 1px;
  height: 1.25rem;
  background-color: var(--lightgray);
  margin: 0 0.25rem;
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

/* Dropdown toggle button — visually part of the nav label, but a real button */
.top-nav .dropdown-toggle {
  background: none;
  border: none;
  cursor: pointer;
  color: var(--secondary);
  display: flex;
  align-items: center;
  /* Padding, not size, does the work here: keeps the hit area comfortable
     without pushing the arrow away from its label */
  padding: 0.75rem 0.4rem 0.75rem 0;
  margin-left: -0.25rem;
}

.top-nav .dropdown-toggle:hover {
  color: var(--tertiary);
}

/* Dropdown arrow */
.top-nav .dropdown-arrow {
  transition: transform 0.2s ease;
}

.top-nav .has-dropdown:hover .dropdown-arrow,
.top-nav .has-dropdown:focus-within .dropdown-arrow,
.top-nav .has-dropdown.open .dropdown-arrow {
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
  border: 1px solid var(--dark); /* ink hairline, not a shadow (PFL-9) */
  border-radius: 0;
  min-width: 140px;
  opacity: 0;
  visibility: hidden;
  transform: translateY(-8px);
  transition: opacity 0.2s ease, transform 0.2s ease, visibility 0.2s ease;
  z-index: 100;
}

/* :focus-within keeps the menu open (and its links tabbable) for keyboard users.
   .open is set by the toggle button, which is the only route in on touch. */
.top-nav .has-dropdown:hover .dropdown-menu,
.top-nav .has-dropdown:focus-within .dropdown-menu,
.top-nav .has-dropdown.open .dropdown-menu {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

/* Set for the moment after navigating from the menu (POS-15), until the
   pointer leaves it. Keyboard focus and .open still open it. */
.top-nav .has-dropdown.suppress-hover:not(.open):not(:focus-within) .dropdown-menu {
  opacity: 0;
  visibility: hidden;
  transform: translateY(-8px);
}

/* Devices that cannot hover get the menu only via the toggle, so a stray
   :hover from a tap does not leave it stuck open */
@media (hover: none) {
  .top-nav .has-dropdown:hover .dropdown-menu {
    opacity: 0;
    visibility: hidden;
    transform: translateY(-8px);
  }

  .top-nav .has-dropdown.open .dropdown-menu {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }
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

/* Under 1100px MobileNav takes over (MobileNav.tsx shares this number). The bar collapses rather than leaving the
   page, because the one Search instance lives in it: MobileNav's search button
   opens this modal, which is position: fixed and so still covers the screen. */
@media (max-width: 1100px) {
  .top-nav {
    height: 0;
    padding: 0;
    margin: 0;
    border: 0;
    background: none;
    overflow: visible;
  }
  .top-nav > :not(.top-nav-social),
  .top-nav-social > :not(.search),
  .top-nav .search > .search-button {
    display: none;
  }
  /* MobileNav's bar shares z-index 200 and comes later, so lift the open modal */
  .top-nav:has(.search-container.active) {
    z-index: 1000;
  }
}
`
  TopNav.css = concatenateResources(Search.css, Graph.css, Darkmode.css, ReaderMode.css, topNavCss)

  TopNav.beforeDOMLoaded = concatenateResources(
    Search.beforeDOMLoaded,
    Graph.beforeDOMLoaded,
    Darkmode.beforeDOMLoaded,
    ReaderMode.beforeDOMLoaded,
  )
  const topNavScript = `
    document.addEventListener('nav', () => {
      const closeAll = (except) => {
        document.querySelectorAll('.top-nav .has-dropdown.open').forEach(li => {
          if (li === except) return
          li.classList.remove('open')
          li.querySelector('.dropdown-toggle')?.setAttribute('aria-expanded', 'false')
        })
      }

      // POS-15. SPA navigation swaps the page without a reload, so the link
      // just clicked keeps focus (holding :focus-within), .open survives, and
      // the pointer is still over the menu (holding :hover). Clear all three:
      // blur, drop .open, and suppress hover until the pointer leaves.
      closeAll()
      const active = document.activeElement
      if (active instanceof HTMLElement && active.closest('.top-nav .dropdown-menu')) {
        active.blur()
      }
      document.querySelectorAll('.top-nav .has-dropdown').forEach(li => {
        if (!li.matches(':hover')) return
        li.classList.add('suppress-hover')
        const release = () => li.classList.remove('suppress-hover')
        li.addEventListener('mouseleave', release, { once: true })
        window.addCleanup(() => li.removeEventListener('mouseleave', release))
      })

      document.querySelectorAll('.top-nav .dropdown-toggle').forEach(toggle => {
        const parent = toggle.closest('.has-dropdown')
        const onClick = (e) => {
          e.preventDefault()
          const willOpen = !parent.classList.contains('open')
          closeAll(parent)
          parent.classList.toggle('open', willOpen)
          toggle.setAttribute('aria-expanded', String(willOpen))
        }
        toggle.addEventListener('click', onClick)
        window.addCleanup(() => toggle.removeEventListener('click', onClick))
      })

      // Dismiss on outside click and on Escape
      const onDocClick = (e) => {
        if (!e.target.closest('.top-nav .has-dropdown')) closeAll()
      }
      const onKey = (e) => {
        if (e.key !== 'Escape') return
        const open = document.querySelector('.top-nav .has-dropdown.open')
        if (!open) return
        closeAll()
        open.querySelector('.dropdown-toggle')?.focus()
      }
      document.addEventListener('click', onDocClick)
      document.addEventListener('keydown', onKey)
      window.addCleanup(() => {
        document.removeEventListener('click', onDocClick)
        document.removeEventListener('keydown', onKey)
      })
    })
  `
  TopNav.afterDOMLoaded = concatenateResources(
    Search.afterDOMLoaded,
    Graph.afterDOMLoaded,
    Darkmode.afterDOMLoaded,
    ReaderMode.afterDOMLoaded,
    topNavScript,
  )

  return TopNav
}) satisfies QuartzComponentConstructor
