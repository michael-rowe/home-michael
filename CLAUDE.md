# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this site is

This is ***/home/michael*** — a framework for the entire knowledge creation pipeline: from identifying problems worth solving, to learning systematically, to sharing what you've learned in ways that matter. (The site was formerly called Emergent Scholarship.)

It's not just about publishing differently. It's about working differently as someone who creates and shares knowledge. The framework helps users get better at getting better.

This is not a personal portfolio or CV. It's a **project** that happens to use one practitioner's work as its primary demonstration. Think of how an open source project works:

- **A working framework** (you can use it)
- **A demonstration of that framework** (you can learn from it)
- **A place where outputs accumulate** (work produced through the framework)
- **An invitation to participate** (others can practice this way, adapt, contribute)

### What this means for content

Outputs on this site serve dual purposes:
- **Content value**: The work itself is valuable (an essay on AI pedagogy, a course on digital literacy, etc.)
- **Framework demonstration**: The work's existence shows emergent scholarship in practice - knowledge work done openly, with visible process, across the entire pipeline from problem identification to sharing

### Navigation structure

The site structure should centre these questions (inspired by open source project onboarding):

1. **What is this project/method?** (README-first orientation)
2. **How does it work?** (Progressive disclosure of the practice)
3. **What has it produced?** (Outputs organised by user need, not author taxonomy)
4. **How can I try it / contribute?** (Contribution ladders from reader → practitioner → contributor)

**Key constraints:**
- No CV-style "About Me" as primary navigation
- No exhaustive lists organised by content type
- Entry points by problem/need rather than author's categorisation
- Simple starting points that reveal complexity as users go deeper

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

**Read the writing persona before writing any prose for this site.** `content/personas/writing_style.md` (alias `+style`) is not a review step applied afterwards — it governs drafting. Any session that writes or rewrites body text in `content/` reads it first and applies it unasked, whatever the content type. The bullets below are the summary; the persona file is the binding version, and the parts that matter most are the ones no word-level check catches: rationing technique, the named tells, contractions, and the calm rather than percussive register.

When generating content for this site:

- **Classic style (default voice across almost all outputs)**: Write as a guide pointing something out clearly to a peer, not as a scholar defending a claim to gatekeepers; language is a transparent window onto the subject. Strip meta-discourse ("in this section I will…"), cut defensive hedging ("arguably", "it seems that"), and unpack nominalisations into verbs. The scholarly apparatus (methods sections, formal literature positioning) is a deliberate register exception. Full treatment: `content/personas/writing_style.md` (a symlink into `~/harness/personas/`; alias `+style`).
- **British spelling**: Use British English spelling throughout (e.g., organised, colour, behaviour, centre, programme)
- **Sentence case headings**: All headings MUST use sentence case, not title case (e.g., "How does it work?" not "How Does It Work?")
- **Strict adherence**: This applies to all content, including course titles, section headers, and blog post titles.

### What the site is for

`/home/michael` is a resource someone can come to and learn something about AI in health professions education. It is also evidence of Michael's own learning, in public — but "learning in public" is not permission to publish drafts. Everything on the site is work he is satisfied with, proud of, and prepared to put his name to and be accountable for. The site is not a course and its parts are not a progression; each content type has a purpose, and a piece belongs on the site when it serves that purpose for a reader, not because it happened to be finished.

- **Note** — one concept, readable on its own, leaving the reader knowing something about the topic they did not before.
- **Post** — an attempt to articulate an understanding of a concept, or the implications across several.
- **Essay** — a coherent articulation of a position Michael is committed to. The test is whether the argument is adequate to the position, not whether it meets a field's standard.
- **Newsletter** — an annotated reading list.
- **Podcast** — closer to a lecture: an extended spoken treatment.
- **Field notes** — worked examples of practice.

Future work conforms to this. Existing content is brought up to it over time, as WP issues — not as a restructure. Decided 2026-09-17 (`~/harness/record/2026-09-17-what-the-site-is-for.md`).

### Teach the reader

The site's reader is a health professions educator, not a technologist. Content aims to teach — not as a small course on every page, but by making sure a reader outside the field can follow the argument and see what it is for. Two rules do most of the work:

- **Gloss jargon in a footnote, link out for the rest.** A term the reader cannot be assumed to know (`Unix`, `pipe`, `grep`, `embedding`, `DOI`, `programmatic assessment` used in passing) gets a footnote at first use: bold term, a one- or two-sentence gloss in plain language, then a link to the Wikipedia page (or the canonical reference page if Wikipedia has none). The body sentence stays as written — no inline parenthetical definitions, no "(a type of…)". The footnote gives the quick reference without leaving the page; the link serves the reader who wants the full account. Do not write a definition the web already holds a million times; write the two sentences that connect the term to this page. A term that is itself the subject of a site note gets a wikilink, not a footnote. Footnotes render at the foot of the page with back-links (GFM, `Plugin.GitHubFlavoredMarkdown`); the footnote label is the term in lower case (`[^unix]`). A jargon term in the `description` field has to be rewritten out — frontmatter cannot carry a footnote.
- **One example the reader recognises.** A note or post about a technical concept carries at least one example from health professions education — module evaluations, placement records, a reading list, supervision notes — placed where it does the most work, usually right after the mechanism is explained. An example from Michael's own system is welcome alongside it, but does not substitute for it. Keep the technical grounding: the example is added, the mechanism is not simplified away.

**Footnote or note? Count how often the term comes up.** A term the site passes through once or twice belongs in a footnote — writing a note for it means maintaining a page that reproduces Wikipedia and is reached by almost nobody. A term the site keeps returning to earns a local note, because it is being explained repeatedly anyway and because a note can carry the health professions education context that no general reference will. Counted across `content/` on 2026-09-18: `Unix` 8 mentions in 1 file (footnote — the worked instance in `Notes/headless AI.md`); `markdown` 135 in 31 files, `plain text` 78 in 23, `YAML` 59 in 13, `open source` 46 in 9, `pandoc` 45 in 8, `git` 39 in 11, `LaTeX` 23 in 6 (all notes). A quick `grep -rc` before deciding is cheaper than guessing.

What makes the note worth having is the health professions education material in it, and that has to be woven into wherever it belongs in the argument — the example that makes the mechanism land, the consequence for a programme team, the reason an educator would care. It is not a section. Do not add a standing *"Where it sits for most educators"* or *"Why it matters in education"* heading: across several notes the repeated frame reads as generated content and the reader stops trusting it. Vary the shape of a note to the concept.

Both rules apply to existing content, not only new writing. A sweep for unglossed terms and for technical notes without a recognisable example is a WP issue, not a by-product of other edits. The worked instance is `content/Notes/headless AI.md` (2026-09-17).

## Technical overview

This site uses Quartz, a static site generator that transforms Markdown files (particularly from digital gardens/note-taking apps like Obsidian) into a fully-featured website. It uses a plugin-based architecture with transformers, filters, and emitters to process content through a build pipeline.

## Essential commands

### Building and development
```bash
# Build the site (production)
npx quartz build

# Build with live preview server (http://localhost:8080)
npx quartz build --serve

# Build documentation site
npm run docs

# Type checking
npm run check

# Format code
npm run format

# Run tests
npm test
```

### Newsletter generation
A draft newsletter can be auto-generated based on the last 30 days of site activity (new posts, notes, and significant structural changes):
```bash
node scripts/generate-newsletter.mjs
```
The draft is saved to `content/Newsletters/YYYY-MM-newsletter-draft.md` (month, not date) with `draft: true`, so it is neither committed nor built until it is finished and renamed to `YYYY-MM.md`. It uses git commit history (subject and body) to identify significant work and filters out routine maintenance noise.

The script takes optional `month year` arguments (`node scripts/generate-newsletter.mjs 3 2026`) and refuses to overwrite an existing draft unless given `--force`. See the `type: newsletter` schema under *Content types* for the filename and frontmatter rules.

## Architecture

### Build pipeline overview

Quartz processes content through a three-stage plugin pipeline:

1. **Transformers** (map): Transform individual Markdown files
   - Text transformations (before parsing)
   - Markdown-to-Markdown via remark plugins
   - HTML-to-HTML via rehype plugins
   - Examples: frontmatter parsing, syntax highlighting, LaTeX rendering

2. **Filters** (filter): Decide which content to publish
   - Example: RemoveDrafts filters out draft content

3. **Emitters** (reduce): Generate output files from all content
   - Examples: ContentPage, FolderPage, RSS feed, sitemap

### Key files and directories

**Configuration:**
- `quartz.config.ts` - Main site configuration (theme, plugins, analytics, etc.)
- `quartz.layout.ts` - Page layout definitions (components for header, body, sidebar, etc.)
- `tsconfig.json` - TypeScript configuration with Preact JSX settings

**Build System:**
- `quartz/bootstrap-cli.mjs` - Entry point for CLI, handles transpilation via esbuild
- `quartz/build.ts` - Core build orchestration (clean, glob, parse, filter, emit)
- `quartz/worker.ts` - Worker thread code for parallel Markdown parsing (>128 files)

**Processing Pipeline:**
- `quartz/processors/parse.ts` - Markdown parsing via unified/remark/rehype
- `quartz/processors/filter.ts` - Content filtering
- `quartz/processors/emit.ts` - File emission

**Plugin System:**
- `quartz/plugins/types.ts` - Plugin type definitions
- `quartz/plugins/transformers/` - Transformer plugins
- `quartz/plugins/filters/` - Filter plugins
- `quartz/plugins/emitters/` - Emitter plugins

**Component System:**
- `quartz/components/` - Preact components for page rendering
- `quartz/components/types.ts` - Component type definitions
- `quartz/components/scripts/*.inline.ts` - Client-side scripts bundled inline
- Components can define: `css`, `beforeDOMLoaded`, `afterDOMLoaded`

### Build process details

When `npx quartz build` runs:

1. **Bootstrap** (`bootstrap-cli.mjs`):
   - Parse command-line arguments with yargs
   - Transpile TypeScript to JavaScript using esbuild
   - Bundle `.scss` imports via esbuild-sass-plugin
   - Bundle `.inline.ts` files for client-side use
   - Write transpiled build to `.quartz-cache/transpiled-build.mjs`
   - Dynamically import and execute build module

2. **Build** (`build.ts`):
   - Clean output directory
   - Glob all files in `content/` folder
   - Parse Markdown files (using workers if >128 files)
   - Apply transformers, filters, emitters
   - Write static files to output directory

3. **Hot Reload** (when `--serve` is set):
   - WebSocket server on port 3001 for reload signals
   - HTTP server on port 8080 (configurable) for preview
   - File watcher for source code changes (`.ts`, `.tsx`, `.scss`)
   - File watcher for content changes (`.md` files, debounced 250ms)

### Rendering pipeline

Content flows through unified/remark/rehype:
- Text → vfile
- Apply text transformations
- Text → mdast (Markdown AST) via remark-parse
- mdast → mdast transformations (remark plugins)
- mdast → hast (HTML AST) via remark-rehype
- hast → hast transformations (rehype plugins)
- hast → JSX via hast-util-to-jsx-runtime (Preact)
- JSX → HTML string via preact-render-to-string

## Plugin development

### Transformer plugin structure
```typescript
export const MyTransformer: QuartzTransformerPlugin<Options> = (opts) => {
  return {
    name: "MyTransformer",
    textTransform?: (ctx, src) => string,
    markdownPlugins?: (ctx) => PluggableList,  // remark plugins
    htmlPlugins?: (ctx) => PluggableList,      // rehype plugins
    externalResources?: (ctx) => Partial<StaticResources>
  }
}
```

### Filter plugin structure
```typescript
export const MyFilter: QuartzFilterPlugin<Options> = (opts) => {
  return {
    name: "MyFilter",
    shouldPublish(ctx, content): boolean
  }
}
```

### Emitter plugin structure
```typescript
export const MyEmitter: QuartzEmitterPlugin<Options> = (opts) => {
  return {
    name: "MyEmitter",
    emit: async (ctx, content, resources) => FilePath[],
    partialEmit?: async (ctx, content, resources, changeEvents) => FilePath[],
    getQuartzComponents?: (ctx) => QuartzComponent[],
    externalResources?: (ctx) => Partial<StaticResources>
  }
}
```

## Component development

Components are Preact components with special properties:

```typescript
const MyComponent: QuartzComponent = (props: QuartzComponentProps) => {
  return <div>...</div>
}

MyComponent.css = "/* styles */"
MyComponent.beforeDOMLoaded = "/* client script run in <head> */"
MyComponent.afterDOMLoaded = "/* client script run in <body> */"
```

Client-side scripts in `components/scripts/*.inline.ts` are bundled separately for browser execution.

## Important patterns

### Path handling
- `FilePath` type represents file paths
- Slugs are simplified paths used for URLs
- Path utilities in `quartz/util/path.ts`
- See `docs/advanced/paths.md` for detailed path logic

### Content map
The build maintains a `Map<FilePath, ProcessedContent>` that tracks:
- Parsed AST for each file
- Plugin-added metadata
- Updated incrementally during hot reload

### Context objects
- `BuildCtx`: Contains argv, cfg, allSlugs, allFiles
- `QuartzComponentProps`: Props passed to components (ctx, fileData, cfg, tree, etc.)

### Static resources
Plugins and components can declare external resources:
- CSS files (external URL or inline content)
- JS files (with load time: beforeDOMReady/afterDOMReady)
- Additional `<head>` elements

## Styling

- SCSS files are processed via esbuild-sass-plugin
- CSS is minified and transformed via Lightning CSS (vendor prefixes, syntax lowering)
- Component styles can be defined inline via `.css` property
- Global styles assembled in `quartz/components/renderPage.tsx`

## Testing

- Test framework: Node.js built-in test runner (`tsx --test`)
- Test files: `**/*.test.ts`
- Existing tests:
  - `quartz/util/path.test.ts`
  - `quartz/util/fileTrie.test.ts`
  - `quartz/components/scripts/search.test.ts`

## TypeScript configuration

- Module system: ESNext with Node resolution
- JSX: `react-jsx` with `preact` as import source
- Strict mode enabled
- All `.ts` and `.tsx` files included
- Exclude `build/**/*.d.ts`

## Content structure

Content lives in `content/` directory (ignored by git per configuration):
- Markdown files with optional frontmatter
- Support for Obsidian-flavored Markdown
- Ignore patterns configurable in `quartz.config.ts`
- Examples: `ignorePatterns: ["private", "templates", ".obsidian"]`

### Content directories

| Directory | Purpose |
| --------- | ------- |
| `content/Essays/` | Long-form academic essays with abstracts, versioning, DOIs |
| `content/Posts/` | Shorter blog-style commentary and analysis |
| `content/Notes/` | Concept notes and knowledge management entries |
| `content/Courses/` | Course materials organised by course name, then lesson files |
| `content/Bibliography/` | Annotated bibliography entries |
| `content/Frameworks/` | Framework documents |
| `content/Newsletters/` | Newsletter drafts and archives |
| `content/Presentations/` | Conference and invited presentation pages with embedded slides |
| `content/Podcasts/` | Podcast appearances and recorded interviews, with embedded video and context |
| `content/Projects/` | Project pages for ongoing work (software, frameworks, books), linked from the home page project cards |
| `content/drafts/` | **Writing that is not ready to be read.** Not built (`drafts` is in `ignorePatterns`) and not committed (`.gitignore`), so nothing here reaches the public repo. Publish by moving the file into its content folder with `draft: false`; schedule a post by moving it into `content/Posts/` with `draft: true` and a date. Anything left in a content folder *is* committed and pushed — `draft: true` keeps it off the site, not off GitHub |
| `content/templates/` | Content templates (excluded from build) |
| `content/personas/` | Symlinks to the AI reviewer personas in `~/harness/personas/` (excluded from build); `taxonomy.md` and `content-review-queue.md` are real, tracked files |

### Content types and required frontmatter

Each piece of content requires a `type:` field. Valid types:

**`type: post`** — Blog-style posts
```yaml
type: post
title: ""
description: ""          # 3-5 sentences for index listings
meta-description: ""     # Under 155 chars; include keyphrase
keyphrase: ""            # Realistic search phrase (not a topic word)
author: "[[Michael Rowe]]"
date: YYYY-MM-DD
updated: YYYY-MM-DD
tags: []
category: []             # Always list format
draft: false
linkedin:                # Add date (YYYY-MM-DD) when posted; leave empty if not yet posted
```

**`type: essay`** — Academic essays
```yaml
type: essay
title: ""
description: ""          # 100-150 word summary
meta-description: ""     # Under 155 chars
author:
  - "[[Michael Rowe]]"
affiliation:
  - University of Lincoln
email:
  - mrowe@lincoln.ac.uk
abstract: ""
version: 0.1
created: YYYY-MM-DD
modified: YYYY-MM-DD
tags: []
doi: ""                  # Omit field entirely if no DOI exists
related: []
draft: false
linkedin:                # Add date (YYYY-MM-DD) when posted; leave empty if not yet posted
```

**`type: note`** — Concept notes
```yaml
type: note
title: ""
description: ""
author: "[[Michael Rowe]]"
created: YYYY-MM-DD
updated: YYYY-MM-DD
draft: false             # The only publication gate on the site; the repo is public, so unfinished writing lives in content/drafts/ instead. A legacy `status:` field did nothing and was removed from all notes on 2026-09-17
keyphrase: ""
category: ""             # Single category
tags: []
related: []
linkedin:                # Add date (YYYY-MM-DD) when posted; leave empty if not yet posted
```

**`type: lesson`** — Course lessons (within `content/Courses/`)
```yaml
type: lesson
title: ""
lesson: 1                # Lesson number used for ordering
description: ""          # 1-2 sentences: what learners will be able to do
author: "[[Michael Rowe]]"
course: ""               # Parent course name (e.g. "Time management")
tags: []
related: []
linkedin:                # Add date (YYYY-MM-DD) when posted; leave empty if not yet posted
```

**`type: presentation`** — Conference and invited presentations (within `content/Presentations/`)
```yaml
type: presentation
title: ""
description: ""          # 3-5 sentences for index listings
meta-description: ""     # Under 155 chars
author:
  - "[[Michael Rowe]]"
date: YYYY-MM-DD         # Date published to site (use event: for the event date)
event: ""                # Event name
host: ""                 # Organising body
location: ""             # Online | City
presentation_type: contributed  # keynote | invited | contributed | workshop
credential: ""           # URL to verified digital credential, if issued
tags: []
category: []
related: []              # Wiki-link format: ["[[slug]]"]
draft: false
linkedin:                # Add date (YYYY-MM-DD) when posted; leave empty if not yet posted
```
*Slides are generated with Marp CLI and stored in `quartz/static/presentations/` to preserve the `.html` extension. The iframe `src` uses the full production URL (`https://michael-rowe.github.io/home-michael/static/presentations/…`) to prevent Quartz's link transformer from stripping the extension.*

**`type: newsletter`** — Monthly newsletter issues (within `content/Newsletters/`)
```yaml
type: newsletter
title: ""                # Doubles as the email subject line in Kit
description: ""          # 3-5 sentences for index listings
date: YYYY-MM-DD         # The date the issue was sent, not the month it covers
tags: []
category: []             # Always list format
draft: false
```
*Deliberately absent: `author` (every issue is Michael's, and no byline renders), `meta-description` and `keyphrase` (an issue is not a search target — it is read by subscribers who already arrived).*

**Two filenames, and the difference is what the file is.** An **issued** newsletter is `YYYY-MM.md` — tracked, built, published at `/Newsletters/YYYY-MM`. A **draft** is `YYYY-MM-newsletter-draft.md` and the Kit export is `YYYY-MM-newsletter-kit.md`; both patterns are gitignored, so neither is committed or built. Note that `content/Newsletters/` as a directory is **not** gitignored — only those two filename patterns are. A draft becomes an issue by being renamed, not by a flag.

**`draft:` is the gate; `status:` does nothing.** Quartz's `RemoveDrafts` filter tests `frontmatter.draft === true` and knows nothing about `status`. A file carrying `status: draft` and no `draft:` field publishes. Two auto-generated drafts sat in this state from February to September 2026 and were removed rather than finished (WP-3, 2026-09-18); the generator now writes `draft: true`, and a draft that is being issued has it flipped to `false` by hand as part of the rename.

**`type: podcast`** — Podcast appearances and recorded interviews (within `content/Podcasts/`)
```yaml
type: podcast
title: ""
description: ""          # 3-5 sentences for index listings
meta-description: ""     # Under 155 chars; include the show name
author:
  - "[[Michael Rowe]]"
date: YYYY-MM-DD         # Date the episode was published
recorded: YYYY-MM        # When the conversation was recorded
show: ""                 # Podcast name
show-url: ""             # Podcast home page or channel
host: ""                 # Interviewer
episode: ""              # Episode number or series title, if numbered
role: guest              # guest | host | panel
video: ""                # Watch URL
embed: ""                # Embed URL (https://www.youtube.com/embed/ID)
audio: ""                # Audio-only episode URL, if any
duration: ""             # e.g. "42 min"
tags: []
category: []             # Always list format
related: []              # Wiki-link format: ["[[Folder/slug]]"]
draft: false
linkedin:                # Add date (YYYY-MM-DD) when posted; leave empty if not yet posted
```
*Episodes are embedded with `<div class="video-embed"><iframe src="EMBED_URL" …></iframe></div>` — the responsive 16:9 wrapper in `quartz/styles/custom.scss`, not the inline `padding-bottom` hack older pages use. `Head.tsx` emits `PodcastEpisode` JSON-LD from the `show`, `show-url` and `video` fields.*

**`content/Podcasts/index.md` has three sections and only one is hand-written.** *As a guest* is a year-by-year list like `content/Presentations/index.md` — add each new episode page to it by hand. *In Beta* and *SAAHE* are **generated**: everything between `<!-- inbeta:start -->`/`<!-- inbeta:end -->` and `<!-- saahe:start -->`/`<!-- saahe:end -->` is written by `scripts/fetch-podcasts.mjs` and overwritten on the next run. Edit the framing around the markers, never inside them.

**The episode pages are generated too, but they are not overwritten.** `npm run fetch:podcasts` creates a `type: podcast` page for every episode that does not already have one and leaves existing pages alone, so tags, `category`, `related:` links and the hand-written summaries survive. `--force` rewrites them all and **will discard those summaries**; `--dry-run` reports without writing; `--show=inbeta|saahe` limits the run. The pages are generated with `tags: []` and `category: []` — the validator only rejects unknown values, not missing ones, so they can be filled in over time.

**The two shows differ in one way that governs everything else.** *In Beta* is live, so its pages carry a summary and then send the reader to inbetaphysio.com to listen; no MP3 is rehosted and no player is embedded, and the recordings, the full show notes and the download counts stay In Beta's. *SAAHE* lost its audio in a site rebuild, so those pages point nowhere — they are the record, and they say the recording is not currently online. Do not add a "listen at SAAHE" link; there is nothing there to hear. Its `show-url` appears only in the JSON-LD, never as a link on the page.

Both shows run WordPress with an open REST API, and the script reads `/wp-json/wp/v2/posts?categories=<id>`. In Beta carries the running time in `meta.duration` and its notes live in the excerpt (for episodes 1–21 the post body is nothing but the player); SAAHE carries no duration and keeps its notes in `content`. The In Beta podcast RSS feed is not a usable substitute: it caps at 10 items and silently ignores `?paged=`, returning the same 10 for every page.

**Two sets of posts are excluded by slug**, with the reason in the script: In Beta's *Environmental Healthcare Unconference* set (Ben Ellis's own project, only hosted there) and SAAHE's five-part *Running effective workshops* series (not Michael's).

**Section index pages carry no `type`.** `Courses/`, `Guides/`, `Podcasts/` and `Presentations/` each have an `index.md` with `title`, `description` and `enableToc` only; the validator skips them, which is intended. `Bibliography/index.md` is the one exception (`type: bibliography-index`, so the bibliography layout can find it). Do not add a `type` to a section index to silence the skipped-files count.

**`type: bib`** — Annotated bibliography entries (within `content/Bibliography/`)
```yaml
type: bib
title: "Source Title Here"
source-author: "Author Name(s)"
source-year: YYYY
source-type: book        # book | article | podcast | video | report | blog | tool
source-url: ""
topics:
  - topic1
tags: []
date: YYYY-MM-DD
draft: true
linkedin:                # Add date (YYYY-MM-DD) when posted; leave empty if not yet posted
```

**`type: project`** — Project pages (within `content/Projects/`)
```yaml
type: project
title: ""
description: ""          # 3-5 sentences for index listings; the home page card carries its own shorter copy
meta-description: ""     # Under 155 chars
author: "[[Michael Rowe]]"
created: YYYY-MM-DD
updated: YYYY-MM-DD
status: ""               # Free text stage: Active | Prototype | In production
role: ""                 # Michael's role, e.g. "Conceived, designed, and built"
tags: []
category: []             # Always list format
related: []              # Wiki-link format: ["[[Projects/slug]]"]
draft: false
linkedin:                # Add date (YYYY-MM-DD) when posted; leave empty if not yet posted
```
*Each project page is surfaced by a card in the `.project-row` grid on `content/index.md` — add the card when the page is created, with an image in `content/Media/`. The grid is three columns, and `.project-row img` crops to 16:10 from the top (`quartz/styles/custom.scss`), so card images should be landscape and composed for that crop. Note that `scripts/validate-taxonomy.mjs` does not currently scan `type: project` files; check tags and categories against `content/personas/taxonomy.md` by hand.*

### Redirects: a page's URL is a promise

**Quartz has no automatic redirect for a deleted or renamed page.** `Plugin.AliasRedirects` (`quartz/plugins/emitters/aliases.ts`, enabled in `quartz.config.ts`) emits a meta-refresh stub at every slug listed in a **surviving** page's `aliases:` field, pointing at that page. There is no record of pages that used to exist, so a file that is deleted or moved simply 404s at its old URL, and the build says nothing.

That matters more here than on most sites, because site URLs are published into places the site does not control: the monthly newsletter goes out through Kit and cannot be edited once sent, LinkedIn posts link to notes and essays, and OSF preprint DOIs point at essay pages. A link in a sent newsletter is permanent.

So: **never delete or rename a published page without rehoming its slug.** Before removing a file, check what points at it (`grep -rn "Notes/<slug>" content/` for wikilinks, and the `content/Newsletters/` archive for external links), then add the old slug to the `aliases:` of whichever page now covers the material. Aliases are slugified the same way filenames are (`getAliasSlugs` in `quartz/plugins/transformers/frontmatter.ts`), so `- Notes/distributed version control` produces the stub at `Notes/distributed-version-control`. This is already how the site's pre-Quartz URLs survive — see `posts/audio-scholarship` on `2026-01-27-what-does-scholarship-sound-like.md` and `essays/open-collaborative-version-controlled-workflow` on `2026-04-06-open-scholarship-workflow.md`.

If no surviving page covers the material, the page does not get deleted; it gets rewritten. An external link that lands on a thin page is recoverable, and a 404 is not.

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
- **`related` field**: Wiki-link format: `["[[Slug or Title]]"]`
- **`linkedin` field**: Use `linkedin: YYYY-MM-DD` when a post has been shared to LinkedIn; leave as `linkedin:` (empty) if not yet posted. Never use the old `linkedin-status`/`linkedin-date` fields.
- **Essay `version` field**: Follows a semantic versioning scheme indicating publication stage:
  - `0.1`–`0.6`: Working draft / in development
  - `0.7`–`0.8`: Preprint deposited
  - `0.9`: Submitted to a peer-reviewed journal
  - `1.0`+: Published in a peer-reviewed venue; minor revisions increment the minor number (e.g. `1.1`)

### Taxonomy (categories and tags)

Approved vocabulary is defined in `content/personas/taxonomy.md`. **Always choose values from this list** — do not invent new terms when an existing one covers the concept.

**Categories** (7 approved, pick 1–2 per piece):
`Technology` · `Assessment` · `Education` · `Teaching` · `Scholarship` · `Information management` · `Professional development`

**Tags must use hyphens** — Obsidian does not support tags with spaces. Always use hyphenated form: `ai-agents` not `AI agents`, `context-engineering` not `context engineering`. The canonical forms are defined in `content/personas/taxonomy.md`.

**Tags** (approved): see `content/personas/taxonomy.md` for the full list. Key clusters:
- AI: `language-model`, `ai-literacy`, `agent`, `ai-integration`, `generative-ai`, `context-engineering`, `retrieval-augmented-generation`, `machine-learning`, `model-context-protocol`, `vector-database`, `graph-database`
- Scholarship: `academic-writing`, `academic-practice`, `open-scholarship`, `publishing`, `peer-review`, `research-methods`, `emergent-scholarship`
- Teaching/learning: `learning-design`, `feedback`, `learning-theory`, `critical-thinking`, `educational-technology`, `prompt-engineering`, `supervision`
- Health professions: `health-professions-education`, `clinical-education`, `competency-frameworks`, `workplace-learning`
- Knowledge: `note-taking`, `information-architecture`, `documentation`, `information-management`, `knowledge-graphs`

**Adding new terms**: run `node scripts/validate-taxonomy.mjs` — it flags any unknown values and shows the exact line to add to `taxonomy.md`. Add the term there first, then use it in content.

**Use canonical forms** (not these): `large-language-models` → `language-model`; `ai-agents` → `agent`; `personal-knowledge-management` → `information-management`; `curriculum-development` → `curriculum-design`; `research-methodology` → `research-methods`; `complexity-theory` → `complex-systems`; `career-strategy` → `career-development`; `prompting` → `prompt-engineering`. Full merge rules in `content/personas/taxonomy.md`.

**Tags to avoid** (too broad, or duplicate a category): `ai`, `technology`, `learning`, `knowledge`, `teaching`, `education`, `practice`, `skills`, `scholarship`, `pedagogy`, `assessment` — use the category field or a more specific tag instead.

**Validate at any time:**
```bash
node scripts/validate-taxonomy.mjs           # full report with file paths
node scripts/validate-taxonomy.mjs --summary # counts only
node scripts/validate-taxonomy.mjs --path content/Posts  # single directory
```

### Personas

Reviewer personas live in `~/harness/personas/` (one home for all three vaults, since 2026-09-12); `content/personas/` holds gitignored symlinks to them, excluded from the build, so the local convention still works. Apply with `+<alias>` (`+style`, `+copyedit`, `+seo`; `pa -l` lists them) or:
```
Read personas/[name].md and apply it to [target]
```

Available personas:
- `writing_style.md` — generates new content in site voice
- `essay_writer.md` — academic essay structure, methodology, positionality
- `blog_writer.md` — blog post structure, narrative velocity, signal-to-noise
- `note_writer.md` — concept note structure, definition clarity, retrieval fitness
- `copy_editor.md` — British English, sentence-level prose editing, cross-section coherence
- `SEO_optimiser.md` — keyphrase strategy, meta-descriptions, slug optimisation
- `course_designer.md` — learning design, lesson and course structure
- `newsletter_editor.md` — email-specific editorial review
- `web_designer.md` — minimalist layout, visual hierarchy, cognitive load
- `accessibility_reviewer.md` — WCAG 2.1 AA compliance (periodic site-level review)
- `content_strategist.md` — information architecture, content gaps (periodic site-level review)
- `taxonomy.md` — approved categories and tags (controlled vocabulary reference, not a reviewer persona)
- `content-review-queue.md` — tracks persona review pipeline across all content

### Content review order

When working through the persona review pipeline across the site, process content in this order:

1. **Blog posts** (`content/Posts/`) — shorter, faster to sense-check; good for iterating on the instruction set
2. **Essays** (`content/Essays/`) — longer and more complex; review after the workflow is stable
3. **Lessons** (`content/Courses/`) — course materials last

### Editorial principle for persona reviews

Treat every piece as a solid starting point. Persona reviews are refinements — structural fine-tuning, sentence-level editing, template compliance — not rewrites. Preserve the author's framing, examples, and voice unless there is a clear reason to change them. The bar for changing a sentence is "this is unclear or incorrect", not "I could write this differently".

## Component conventions

Key design decisions to be aware of when modifying components:

- **Responsive breakpoint**: Both `TopNav.tsx` and `MobileNav.tsx` use `800px`. TopNav hides at `≤800px`; MobileNav shows at `≤800px`. Don't change one without changing the other.
- **CSS variables**: Note colour is `--note-color` (defined in `contentType.scss`); course colour is `--course-color`. Add new content-type colours as CSS variables there, not hardcoded hex values.
- **Overlay pattern**: `MobileNav` appends its overlay to `<body>` via JS, so the show/hide rule is `body.mobile-nav-open .mobile-nav-overlay`, not a CSS sibling selector.
- **JSON-LD / canonical**: `Head.tsx` emits `<link rel="canonical">` and `<script type="application/ld+json">` for `type: post`, `type: essay`, and course pages. Structured data uses Article schema for posts/essays, Course schema for courses.
- **RelatedContent**: Uses a three-tier matching strategy — explicit `related` wikilinks first, then category matches, then tag-scored fallback. The `renderSection()` function takes `QuartzPluginData[]`, not `any[]`.
- **`npm run check` failures**: There are 14 pre-existing TypeScript errors in the codebase (`quartz.layout.ts`, `Footer.tsx`, `LessonNav.tsx`, `MobileNav.tsx`, `mobilenav.inline.ts`, `folderPage.tsx`, `fileTrie.ts`). These do not block building — `npx quartz build` succeeds. Don't treat `npm run check` failures as blockers unless they're in files you've changed. **`Head.tsx` is clean and must stay clean** — a new error there is a real error, not noise.
- **Site-specific frontmatter fields are declared in `quartz/plugins/transformers/frontmatter.ts`**: `meta-description`, `tab-title`, `keyphrase`, `linkedin`, and the podcast fields (`show`, `show-url`, `video`, `embed`, `audio`, `duration`) are in the `Partial<{…}>` on the `frontmatter` type. Without that they fall through the `{ [key: string]: unknown }` index signature and type as `unknown`, which poisons any `??` chain they start (this is what used to break `Head.tsx`). When a new content type adds a field that a component reads, declare it there too.

## Performance considerations

- Worker threads used for parsing when >128 files
- Incremental rebuilds track changes since last build
- esbuild rebuild API for fast transpilation
- CSS/JS bundling and minification
- Note: Dynamic imports with query strings cause ~350KB memory leak per reload (acceptable for dev)

## Internationalisation

- Locale support in `quartz/i18n/locales/`
- Configured via `locale` in `quartz.config.ts`
- Used for date formatting and UI strings
