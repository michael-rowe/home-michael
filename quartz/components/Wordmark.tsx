// The house wordmark (PFL-9; identity-michael.md § Wordmark): *Michael Rowe*
// in Plex Sans 700, tracking −0.04em, with a rule in the accent one third of
// the name's width beneath it. Used by TopNav (desktop) and MobileNav
// (≤1100px) at the far left of the top bar, where a site title is expected.
// `cfg.pageTitle` stays "/home/michael": it names the site in tab titles and
// link previews; the wordmark names who is behind it.

export function Wordmark({ href, class: cls }: { href: string; class: string }) {
  return (
    <a
      href={href}
      class={`wordmark ${cls}`}
      aria-label="Michael Rowe — home"
      data-no-popover="true"
    >
      Michael Rowe
    </a>
  )
}

export const wordmarkCss = `
/* Two classes, to beat the site's \`.top-nav a { font-weight: 400 }\` */
.wordmark.wordmark {
  display: inline-block;
  font-family: var(--headerFont);
  font-weight: 700;
  font-size: 1.2rem;
  letter-spacing: -0.04em;
  line-height: 1;
  color: var(--dark) !important;
  background: transparent !important;
  text-decoration: none !important;
  white-space: nowrap;
}

.wordmark::after {
  content: "";
  display: block;
  width: 33.3%;
  height: 3px;
  margin-top: 0.3em;
  background-color: var(--tertiary);
}
`
