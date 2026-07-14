import { QuartzTransformerPlugin } from "../types"

// Quartz's upstream CreatedModifiedDate transformer parses bare `YYYY-MM-DD`
// frontmatter dates as *local* midnight (see plugins/transformers/lastmod.ts),
// because the JS Date constructor treats a date-time string with no offset as
// local time. That makes every date-only post date — and everything derived
// from it (the futurePublished embargo, RSS pubDate, JSON-LD datePublished,
// sitemap lastmod, month-bucketing on the recently-added page) shift by the
// build machine's UTC offset. A post dated 2026-06-11 goes live an hour early
// in a BST build versus a UTC build, and CI (UTC) and local previews
// (Europe/London) then disagree about what's published.
//
// Running after CreatedModifiedDate, this re-parses the same frontmatter
// fields it already resolved (created/date, modified/updated, published) as
// UTC midnight instead, so build timezone no longer affects publish state or
// displayed/emitted dates. Full ISO timestamps and filesystem/git-derived
// dates are left untouched — only bare date-only strings are affected.

const iso8601DateOnlyRegex = /^\d{4}-\d{2}-\d{2}$/

function coalesceAliases(data: { [key: string]: unknown }, aliases: string[]): unknown {
  for (const alias of aliases) {
    if (data[alias] !== undefined && data[alias] !== null) return data[alias]
  }
  return undefined
}

function utcMidnightIfDateOnly(raw: unknown): Date | undefined {
  if (typeof raw !== "string" || !iso8601DateOnlyRegex.test(raw)) return undefined
  return new Date(`${raw}T00:00:00Z`)
}

export const NormalizeDates: QuartzTransformerPlugin = () => ({
  name: "NormalizeDates",
  markdownPlugins() {
    return [
      () => (_tree, file) => {
        const fm = file.data.frontmatter
        const dates = file.data.dates
        if (!fm || !dates) return

        // Mirrors frontmatter.ts's own alias resolution, so this checks the
        // same raw value CreatedModifiedDate used to derive each field.
        const created = utcMidnightIfDateOnly(coalesceAliases(fm, ["created", "date"]))
        if (created) dates.created = created

        // frontmatter.ts already backfills fm.modified from fm.created when no
        // modified/updated/last-modified field is set, so this alone covers
        // both the explicit-modified and fallback-to-created cases.
        const modified = utcMidnightIfDateOnly(
          coalesceAliases(fm, ["modified", "updated", "last-modified"]),
        )
        if (modified) dates.modified = modified

        const published = utcMidnightIfDateOnly(
          coalesceAliases(fm, ["published", "publishDate", "date"]),
        )
        if (published) dates.published = published
      },
    ]
  },
})
