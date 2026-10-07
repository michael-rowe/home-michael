# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What the site is for

`/home/michael` is a resource someone can come to and learn something about AI in health professions education. It is also evidence of Michael's own learning, in public — but "learning in public" is not permission to publish drafts. Everything on the site is work he is satisfied with, proud of, and prepared to put his name to and be accountable for. The site is not a course and its parts are not a progression; each content type has a purpose, and a piece belongs on the site when it serves that purpose for a reader, not because it happened to be finished.

- **Note** — one concept, readable on its own, leaving the reader knowing something about the topic they did not before.
- **Post** — an attempt to articulate an understanding of a concept, or the implications across several.
- **Essay** — a coherent articulation of a position Michael is committed to. The test is whether the argument is adequate to the position, not whether it meets a field's standard.
- **Newsletter** — an annotated reading list.
- **Podcast** — closer to a lecture: an extended spoken treatment.
- **Field notes** — worked examples of practice.

Future work conforms to this. Existing content is brought up to it over time, as WP issues — not as a restructure. Decided 2026-09-17 (`~/harness/record/2026-09-17-what-the-site-is-for.md`).

## Target audience

Content on this site is primarily for **health professions educators** and those involved in developing practitioners at any level. This includes:

- Medical educators and health professions educators
- Clinical supervisors and practice supervisors
- Practice educators and placement coordinators
- Faculty development professionals
- Curriculum designers in health sciences
- Anyone with an interest or role in developing health professionals (students, trainees, or practitioners)

When creating or editing content, frame concepts, examples, and applications with this audience in mind. Use terminology familiar to health professions education contexts and draw on examples from clinical teaching, supervision, curriculum design, and professional development.

## Style guidelines

The binding rules for how to think, what earns public form, and how to write — one file, shared with `~/writing`:

@~/harness/rules.md

**Read the writing persona before writing any prose for this site.** `content/personas/writing_style.md` (alias `+style`) is not a review step applied afterwards — it governs drafting. Any session that writes or rewrites body text in `content/` reads it first and applies it unasked, whatever the content type. Posts and newsletters add `writing_style_post.md` (`+post`); essays add `writing_style_article.md` (`+article`); presentation pages and slides add `writing_style_talk.md` (`+talk`). The parts that matter most are the ones no word-level check catches: rationing technique, the named tells, contractions, and the calm rather than percussive register.

### Teach the reader

The site's reader is a health professions educator, not a technologist. Content aims to teach — not as a small course on every page, but by making sure a reader outside the field can follow the argument and see what it is for. Two rules do most of the work:

- **Gloss jargon in a footnote, link out for the rest.** A term the reader cannot be assumed to know (`Unix`, `pipe`, `grep`, `embedding`, `DOI`, `programmatic assessment` used in passing) gets a footnote at first use: bold term, a one- or two-sentence gloss in plain language, then a link to the Wikipedia page (or the canonical reference page if Wikipedia has none). The body sentence stays as written — no inline parenthetical definitions, no "(a type of…)". The footnote gives the quick reference without leaving the page; the link serves the reader who wants the full account. Do not write a definition the web already holds a million times; write the two sentences that connect the term to this page. A term that is itself the subject of a site note gets a wikilink, not a footnote. Footnotes render at the foot of the page with back-links (GFM, `Plugin.GitHubFlavoredMarkdown`); the footnote label is the term in lower case (`[^unix]`). A jargon term in the `description` field has to be rewritten out — frontmatter cannot carry a footnote.
- **One example the reader recognises.** A note or post about a technical concept carries at least one example from health professions education — module evaluations, placement records, a reading list, supervision notes — placed where it does the most work, usually right after the mechanism is explained. An example from Michael's own system is welcome alongside it, but does not substitute for it. Keep the technical grounding: the example is added, the mechanism is not simplified away.

**Footnote or note? Count how often the term comes up.** A term the site passes through once or twice belongs in a footnote — writing a note for it means maintaining a page that reproduces Wikipedia and is reached by almost nobody. A term the site keeps returning to earns a local note, because it is being explained repeatedly anyway and because a note can carry the health professions education context that no general reference will. A quick `grep -rc` before deciding is cheaper than guessing.

What makes the note worth having is the health professions education material in it, and that has to be woven into wherever it belongs in the argument — the example that makes the mechanism land, the consequence for a programme team, the reason an educator would care. It is not a section. Do not add a standing *"Where it sits for most educators"* or *"Why it matters in education"* heading: across several notes the repeated frame reads as generated content and the reader stops trusting it. Vary the shape of a note to the concept.

Both rules apply to existing content, not only new writing. A sweep for unglossed terms and for technical notes without a recognisable example is a WP issue, not a by-product of other edits. The worked instance is `content/Notes/headless AI.md` (2026-09-17).

## Commands

`npx quartz build` builds the site; `npx quartz build --serve` previews it at localhost:8080. The other scripts are in `package.json` (`check`, `format`, `test`, `validate`, `fetch:podcasts`). `node scripts/generate-newsletter.mjs [month year]` drafts a newsletter; see `type: newsletter` below and `/newsletter`.

Everything else about how Quartz works (build pipeline, plugins, components, paths) is in `quartz/` and the upstream Quartz documentation.

## Styling

**Identity files:** `formats/identities/michael.css` holds the house identity's tokens, the one tracked file of the Publication Format Library (the rest of `formats/` is gitignored and private). `quartz/util/identity.ts` reads them at build time, maps them onto Quartz's colour slots and emits every token as a `--mr-*` CSS variable, so `quartz.config.ts` carries no colours of its own.

### The house identity

Since PFL-9 (September 2026) the site wears the same identity as Michael's decks and handouts. The spec is `identity-michael.md` in the Publication Format Library project folder (planning vault), § *Site*; the values are in `formats/identities/michael.css`. The rules a change is most likely to break:

- **Colours come from the tokens file.** Edit `formats/identities/michael.css`, not `quartz.config.ts`. Components can use the identity's own names (`--mr-surface`, `--mr-chip-line`, `--mr-ink-3`, `--mr-accent-tint`…) as well as Quartz's nine slots. `--secondary` is the text-safe deep accent (links); `--tertiary` is the accent (hover, rules, marks). Never put `#fff` on a `--secondary` fill: in dark mode `--secondary` is pale, so use `var(--light)`.
- **One accent per page.** No per-type or per-course hues. The content-type colour variables (`--note-color` and the rest) survive only as aliases of the chip ink; don't give them colours again. The functional exception is right/wrong and copied states (`--status-positive`, `--status-negative`).
- **Zero radius, no shadows, no hover lifts.** A floating layer (search panel, dropdown, drawer) is separated by a 1px ink hairline instead of a shadow.
- **Type:** IBM Plex Sans for headings and body, IBM Plex Mono for code, chips and labels. Running text stops at 35rem (about 70 characters); callouts, tables, grids and embedded decks use the full 44rem column.

## Content directories

| Directory | Purpose |
| --------- | ------- |
| `content/Essays/` | Long-form academic essays with abstracts, versioning, DOIs |
| `content/Posts/` | Shorter blog-style commentary and analysis |
| `content/Notes/` | Concept notes and knowledge management entries |
| `content/Guides/` | Practical guides |
| `content/Policies/` | Policy pages |
| `content/Media/` | Images and other media used by pages |
| `content/Bibliography/` | Annotated bibliography entries |
| `content/Frameworks/` | Framework documents |
| `content/Newsletters/` | Newsletter drafts and archives |
| `content/Presentations/` | Conference and invited presentation pages with embedded slides |
| `content/Podcasts/` | Podcast appearances and recorded interviews, with embedded video and context |
| `content/Projects/` | Project pages for ongoing work (software, frameworks, books), linked from the home page project cards |

The courses were unpublished on 2026-09-27 (Record `2026-09-27-unpublish-the-courses`); the `lesson` and `course` schemas and components remain in the code, dormant.
| `content/drafts/` | **Writing that is not ready to be read.** Not built (`drafts` is in `ignorePatterns`) and not committed (`.gitignore`), so nothing here reaches the public repo. Publish by moving the file into its content folder with `draft: false`; schedule a post by moving it into `content/Posts/` with `draft: true` and a date. Anything left in a content folder *is* committed and pushed — `draft: true` keeps it off the site, not off GitHub |
| `content/templates/` | Content templates (excluded from build) |
| `content/personas/` | Symlinks to the AI reviewer personas in `~/harness/personas/` (excluded from build); `taxonomy.md` and `content-review-queue.md` are real, tracked files |

## Content types and required frontmatter

Each piece of content requires a `type:` field. **The schema for each type is its template, `content/templates/<type>_template.md`** (`bibliography_template.md` for `bib`): copy the frontmatter from there, comments included. Valid types are `post`, `essay`, `note`, `presentation`, `newsletter`, `podcast`, `bib` and `project`, plus the dormant `lesson` and `course`. The notes below are what the templates can't say.

**`type: presentation`** — Conference and invited presentations (within `content/Presentations/`)
*Slides are generated with Marp CLI and stored in `quartz/static/presentations/` to preserve the `.html` extension. The iframe `src` uses the full production URL (`https://michael-rowe.github.io/home-michael/static/presentations/…`) to prevent Quartz's link transformer from stripping the extension.*

**`type: newsletter`** — Monthly newsletter issues (within `content/Newsletters/`)
*Deliberately absent: `author` (every issue is Michael's, and no byline renders), `meta-description` and `keyphrase` (an issue is not a search target — it is read by subscribers who already arrived).*

**Two filenames, and the difference is what the file is.** An **issued** newsletter is `YYYY-MM.md` — tracked, built, published at `/Newsletters/YYYY-MM`. A **draft** is `YYYY-MM-newsletter-draft.md` and the Kit export is `YYYY-MM-newsletter-kit.md`; both patterns are gitignored, so neither is committed or built. Note that `content/Newsletters/` as a directory is **not** gitignored — only those two filename patterns are. A draft becomes an issue by being renamed, not by a flag.

**`draft:` is the gate; `status:` does nothing.** Quartz's `RemoveDrafts` filter tests `frontmatter.draft === true` and knows nothing about `status`. A file carrying `status: draft` and no `draft:` field publishes. The generator writes `draft: true`; a draft that is being issued has it flipped to `false` by hand as part of the rename.

**`type: podcast`** — Podcast appearances and recorded interviews (within `content/Podcasts/`)
*Episodes are embedded with `<div class="video-embed"><iframe src="EMBED_URL" …></iframe></div>` — the responsive 16:9 wrapper in `quartz/styles/custom.scss`, not the inline `padding-bottom` hack older pages use. `Head.tsx` emits `PodcastEpisode` JSON-LD from the `show`, `show-url` and `video` fields.*

**`content/Podcasts/index.md` has three sections and only one is hand-written.** *As a guest* is a year-by-year list like `content/Presentations/index.md` — add each new episode page to it by hand. *In Beta* and *SAAHE* are **generated**: everything between `<!-- inbeta:start -->`/`<!-- inbeta:end -->` and `<!-- saahe:start -->`/`<!-- saahe:end -->` is written by `scripts/fetch-podcasts.mjs` and overwritten on the next run. Edit the framing around the markers, never inside them.

**The episode pages are generated too, but never overwritten.** `npm run fetch:podcasts` creates a page for each new episode and leaves existing ones alone, so tags, `related:` links and hand-written summaries survive; `--force` discards them. The script's header covers the rest. Generated pages start with empty `tags` and `category`, to be filled in over time.

**Don't add a "listen at SAAHE" link.** In Beta is live, so its pages summarise and send the reader to inbetaphysio.com, with no audio rehosted. SAAHE's audio is gone, so its pages are the record and say the recording is not online; its `show-url` appears only in the JSON-LD.

**Section index pages carry no `type`.** `Guides/`, `Podcasts/` and `Presentations/` each have an `index.md` with `title`, `description` and `enableToc` only; the validator skips them, which is intended. `Bibliography/index.md` is the one exception (`type: bibliography-index`, so the bibliography layout can find it). Do not add a `type` to a section index to silence the skipped-files count.

**`type: project`** — Project pages (within `content/Projects/`)
*Each project page is surfaced by a card in the `.project-row` grid on `content/index.md` — add the card when the page is created, with an image in `content/Media/`. The grid is three columns, and `.project-row img` crops to 16:10 from the top (`quartz/styles/custom.scss`), so card images should be landscape and composed for that crop. Note that `scripts/validate-taxonomy.mjs` does not currently scan `type: project` files; check tags and categories against `content/personas/taxonomy.md` by hand.*

### Redirects: a page's URL is a promise

**Quartz has no automatic redirect for a deleted or renamed page.** `Plugin.AliasRedirects` (`quartz/plugins/emitters/aliases.ts`, enabled in `quartz.config.ts`) emits a meta-refresh stub at every slug listed in a **surviving** page's `aliases:` field, pointing at that page. A file that is deleted or moved 404s at its old URL unless someone records where it went, and the build says nothing.

That matters more here than on most sites, because site URLs are published into places the site does not control: the monthly newsletter goes out through Kit and cannot be edited once sent, LinkedIn posts link to notes and essays, and OSF preprint DOIs point at essay pages. A link in a sent newsletter is permanent.

So: **never delete or rename a published page without rehoming its slug.** Before removing a file, check what points at it (`grep -rn "Notes/<slug>" content/` for wikilinks, and the `content/Newsletters/` archive for external links), then add the old slug to the `aliases:` of whichever page now covers the material, or to `redirects.yaml` (below). Aliases are slugified the same way filenames are (`getAliasSlugs` in `quartz/plugins/transformers/frontmatter.ts`), so `- Notes/distributed version control` produces the stub at `Notes/distributed-version-control`. This is already how the site's pre-Quartz URLs survive — see `posts/audio-scholarship` on `2026-01-27-what-does-scholarship-sound-like.md` and `essays/open-collaborative-version-controlled-workflow` on `2026-04-06-open-scholarship-workflow.md`.

If no surviving page covers the material, add the old path to **`redirects.yaml`** at the repository root (`old path: new path`, read by `Plugin.Redirects`, `quartz/plugins/emitters/redirects.ts`). It writes the same meta-refresh stub as an alias, pointing at any slug on the site, a folder page (`Posts/`), or an absolute URL, and the build warns if an old path is still a page or a target does not exist. Aliases stay the first choice, because they keep the redirect next to the page that covers the material; the file is for pages removed outright, and the first entries are the six posts imported from mrowe.co.za and removed on 2026-09-28. The file is outside `content/`, so `--serve` picks up changes to it only on restart.

### Wikilinks: no markdown inside the alias

`[[Projects/still-yours|*Still Yours*]]` **silently fails** and publishes the raw `[[…]]` brackets to the page. Wikilinks are converted to links by a markdown plugin that runs `findAndReplace` over the parsed tree's *text nodes* (`quartz/plugins/transformers/ofm.ts`). Emphasis inside the alias makes remark split the line into text + emphasis + text nodes before that runs, so the regex never sees a complete wikilink in one text node. The same applies to backticks, bold, and underscores in the alias.

**`#` in the alias fails the same way**, and for a related reason: the alias group in `wikilinkRegex` is `(\\?\|[^\[\]\#]*)?`, which excludes `#` because `#` is the heading separator in `[[page#heading|alias]]`. So `[[Podcasts/ep|#38 Constructing learning]]` publishes raw brackets. Keep the number outside the link — `[[Podcasts/ep|Constructing learning]] *(#38)*`.

Use a plain alias (`[[Projects/still-yours|Still Yours]]`), or a normal markdown link if the formatting matters. Nothing warns you — the build succeeds and the page renders with visible brackets, so check the rendered paragraph, not just that the slug appears somewhere in the HTML (the related-content sidebar produces the same href and will mask the failure).

### YAML conventions

- **Author format**: Essays use list format (`author: ["[[Michael Rowe]]"]`); posts, notes, and lessons use scalar (`author: "[[Michael Rowe]]"`). Always wiki-link format.
- **Date fields**: Essays use `created:`/`modified:`; posts use `date:`/`updated:`; lessons use `created:`/`updated:`. Quartz treats `created` and `date` as aliases, and `modified`, `updated`, `last-modified` as aliases — but follow existing conventions per type.
- **Category**: Always list format (`category: [Assessment]`), never scalar string.
- **DOI**: Omit the `doi:` field entirely if no DOI exists. Don't use empty `doi:`.
- **No `slug:` field**: Quartz ignores it — page URLs always derive from the file path under `content/` (e.g. `content/Essays/my-essay.md` → `Essays/my-essay`). The field was removed from all content in June 2026; don't reintroduce it.
- **cssclasses**: Don't add `cssclasses: [""]` — it has no effect and adds noise.
- **`title-highlight` field** (optional, any type): a phrase from the title to tint with the accent — the identity's one decorative move, e.g. `title-highlight: getting better` on the home page. Matched case-insensitively; a page without it, or whose phrase is not in the title, keeps a plain title. Use it sparingly.
- **`related` field**: Wiki-link format: `["[[Slug or Title]]"]`
- **`linkedin` field**: Use `linkedin: YYYY-MM-DD` when a post has been shared to LinkedIn; leave as `linkedin:` (empty) if not yet posted. Never use the old `linkedin-status`/`linkedin-date` fields.
- **Essay `version` field**: Follows a semantic versioning scheme indicating publication stage:
  - `0.1`–`0.6`: Working draft / in development
  - `0.7`–`0.8`: Preprint deposited
  - `0.9`: Submitted to a peer-reviewed journal
  - `1.0`+: Published in a peer-reviewed venue; minor revisions increment the minor number (e.g. `1.1`)

  The masthead under an essay's title shows the version as a chip and derives a status chip from it (*draft*, *preprint*, *submitted*). It shows **no** status for `1.0`+, because in September 2026 both 1.x essays were preprints and a derived "peer reviewed" chip would have overclaimed. The numbers are being reconciled with the scheme in the content review.

### Taxonomy (categories and tags)

Approved vocabulary is defined in `content/personas/taxonomy.md`. **Always choose values from this list** — do not invent new terms when an existing one covers the concept.

**Categories** (7 approved, pick 1–2 per piece):
`Technology` · `Assessment` · `Education` · `Teaching` · `Scholarship` · `Information management` · `Professional development`

**Tags must use hyphens** — Obsidian does not support tags with spaces. Always use hyphenated form: `ai-agents` not `AI agents`, `context-engineering` not `context engineering`. The canonical forms are defined in `content/personas/taxonomy.md`.

**Adding new terms**: run `node scripts/validate-taxonomy.mjs` — it flags any unknown values and shows the exact line to add to `taxonomy.md`. Add the term there first, then use it in content.

**Canonical forms and merge rules** (`large-language-models` → `language-model` and the rest) are in `taxonomy.md`.

**Tags to avoid** (too broad, or duplicate a category): `ai`, `technology`, `learning`, `knowledge`, `teaching`, `education`, `practice`, `skills`, `scholarship`, `pedagogy`, `assessment` — use the category field or a more specific tag instead.

`node scripts/validate-taxonomy.mjs` validates (`--summary`, `--path content/Posts`).

### Personas

Reviewer personas live in `~/harness/personas/` (one home for all three vaults, since 2026-09-12); `content/personas/` holds gitignored symlinks to them, excluded from the build, so the local convention still works. Apply with `+<alias>` (`+style`, `+copyedit`, `+seo`; `pa -l` lists them) or:
```
Read personas/[name].md and apply it to [target]
```

`pa -l` lists the personas. Two files in `content/personas/` are not personas: `taxonomy.md` (the controlled vocabulary) and `content-review-queue.md` (which personas each content type's review needs; `node scripts/review-status.mjs` reports what is pending). Blog post structure is the `/blog-writer` command.

### Editorial principle for persona reviews

Treat every piece as a solid starting point. Persona reviews are refinements — structural fine-tuning, sentence-level editing, template compliance — not rewrites. Preserve the author's framing, examples, and voice unless there is a clear reason to change them. The bar for changing a sentence is "this is unclear or incorrect", not "I could write this differently".

## Component conventions

Key design decisions to be aware of when modifying components:

- **Responsive breakpoints**: the header swaps at `1100px` — TopNav collapses and MobileNav shows at `≤1100px`, because below that the top bar cannot hold its links centred beside the controls (2026-09-28). The sidebars still go at `800px`, the layout breakpoint in `variables.scss`. Don't change TopNav's number without MobileNav's. TopNav collapses to zero height rather than `display: none`, because the page's one Search instance (and the global graph overlay) lives inside it; MobileNav's search button opens that modal.
- **Site controls**: Search, the global graph, reader mode and the theme toggle are rendered by `TopNav`, not the sidebars. There is no per-page graph. Reader mode hides both sidebars and is not remembered across page loads — deliberately, since it is for reading one piece. The global graph draws only content folders (default: Posts, Notes, Essays, Guides, Projects, Presentations; tags off), set in `TopNav.tsx`; readers change folders, tags and spacing in its settings panel, saved in their own browser (`graph-settings` in localStorage). Nodes are coloured by folder — a functional exception to the one-accent rule (`--graph-<folder>` in `custom.scss`; identity spec § One accent). The masthead type chip takes the same colour as a border and dot, on trial since 2026-09-29; its text stays ink because three of the colours are under 4.5:1 on the light ground. A new content folder needs adding to `folders` and a `--graph-` colour in both themes.
- **Colours**: see *The house identity* under *Styling*. No hard-coded hex values in components; use the `--mr-*` tokens or Quartz's slots.
- **Masthead**: `ContentMeta` renders the chip row under a title (type · version · status · date, then reading time). `ContentType` is no longer in the layout; its stylesheet rides with `ContentMeta` because it still defines the colour aliases other components read.
- **Header placement**: `renderPage.tsx` renders the header (`TopNav`, `MobileNav`) before the page grid and outside `<main>`, so the site navigation is the first tab stop and *Skip to content* skips it. The space above a page's first line is set on `.page-header` in `custom.scss`; if you move the header back, that spacing doubles.
- **Wordmark**: `Wordmark.tsx`, used by `TopNav` and `MobileNav` at the left of the top bar. `cfg.pageTitle` stays `/home/michael` for tab titles and link previews; `PageTitle` is not in the layout.
- **Table of contents**: styled as the decks' rail. Only the current section is marked — the *last* entry Quartz flags `in-view` (it flags every section scrolled past). `OverflowListFactory()` returns the `id` its list renders with; anything pointing at the list (`aria-controls`) must use it.
- **Overlay pattern**: `MobileNav` appends its overlay to `<body>` via JS, so the show/hide rule is `body.mobile-nav-open .mobile-nav-overlay`, not a CSS sibling selector.
- **JSON-LD / canonical**: `Head.tsx` emits `<link rel="canonical">` and `<script type="application/ld+json">` for `type: post`, `type: essay`, and course pages. Structured data uses Article schema for posts/essays, Course schema for courses.
- **RelatedContent**: Uses a three-tier matching strategy — explicit `related` wikilinks first, then category matches, then tag-scored fallback. The `renderSection()` function takes `QuartzPluginData[]`, not `any[]`.
- **`npm run check`** is `tsc --noEmit` alone, clean since 2026-10-07: a TypeScript error is a real error; keep it at zero. Prettier is not part of the check (nothing enforced it, and it disagrees with the site's markdown); `content/` is in `.prettierignore`, so `npm run format` touches code only.
- **Site-specific frontmatter fields are declared in `quartz/plugins/transformers/frontmatter.ts`**: `meta-description`, `tab-title`, `keyphrase`, `linkedin`, `title-highlight`, and the podcast fields (`show`, `show-url`, `video`, `embed`, `audio`, `duration`) are in the `Partial<{…}>` on the `frontmatter` type. Without that they fall through the `{ [key: string]: unknown }` index signature and type as `unknown`, which poisons any `??` chain they start (this is what used to break `Head.tsx`). When a new content type adds a field that a component reads, declare it there too.
