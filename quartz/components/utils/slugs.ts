import { FullSlug, simplifySlug } from "../../util/path"

/**
 * A page's slug, normalised so it can be compared with `===`.
 *
 * `simplifySlug` deliberately leaves a trailing slash on folder pages:
 * `"Newsletters/index"` becomes `"Newsletters/"`, not `"Newsletters"`. That is
 * specified upstream (see the `simplifySlug` case in `util/path.test.ts`) and
 * load-bearing — `resolveRelative` joins the simplified slug onto a path of
 * `..` segments, and a browser resolves subsequent relative links differently
 * against `../Newsletters` than against `../Newsletters/`. Stripping the slash
 * in `simplifySlug` itself would change every folder link on the site.
 *
 * The catch is that it makes equality checks quietly wrong. A component asking
 * `simplifySlug(slug) === "Newsletters"` to detect the section index matches
 * nothing, renders anyway, and reports no error — the failure looks like the
 * guard was never written. `startsWith` checks happen to survive this, which is
 * why the problem stays hidden until someone needs an exact match.
 *
 * So: use `simplifySlug` for building links, and this for comparing.
 */
export function comparableSlug(slug: FullSlug): string {
  return simplifySlug(slug).replace(/\/$/, "")
}

/**
 * True when `slug` is the index page of `section` — `"Newsletters/index"` for
 * section `"Newsletters"`. The root index (`"/"`) belongs to no section.
 */
export function isSectionIndex(slug: FullSlug, section: string): boolean {
  return comparableSlug(slug) === section && section !== ""
}

/**
 * True when `slug` is anywhere in `section`, including its index page.
 */
export function isInSection(slug: FullSlug, section: string): boolean {
  const s = comparableSlug(slug)
  return s === section || s.startsWith(`${section}/`)
}
