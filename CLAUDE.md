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

When generating content for this site:

- **British spelling**: Use British English spelling throughout (e.g., organised, colour, behaviour, centre, programme)
- **Sentence case headings**: All headings MUST use sentence case, not title case (e.g., "How does it work?" not "How Does It Work?")
- **Strict adherence**: This applies to all content, including course titles, section headers, and blog post titles.

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
The draft is saved to `content/Newsletters/YYYY-MM-DD-newsletter-draft.md`. It uses git commit history (subject and body) to identify significant work and filters out routine maintenance noise.

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
| `content/templates/` | Content templates (excluded from build) |
| `content/personas/` | AI reviewer persona files (excluded from build) |

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
slug: ""
```

**`type: essay`** — Academic essays
```yaml
type: essay
title: ""
slug: essays/slug-here
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
```

**`type: note`** — Concept notes
```yaml
type: note
title: ""
description: ""
author: "[[Michael Rowe]]"
created: YYYY-MM-DD
updated: YYYY-MM-DD
status: draft
keyphrase: ""
slug: notes/slug-here
category: ""             # Single category
tags: []
related: []
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
```

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
slug: ""
```

### YAML conventions

- **Author format**: Essays use list format (`author: ["[[Michael Rowe]]"]`); posts, notes, and lessons use scalar (`author: "[[Michael Rowe]]"`). Always wiki-link format.
- **Date fields**: Essays use `created:`/`modified:`; posts use `date:`/`updated:`; lessons use `created:`/`updated:`. Quartz treats `created` and `date` as aliases, and `modified`, `updated`, `last-modified` as aliases — but follow existing conventions per type.
- **Category**: Always list format (`category: [Assessment]`), never scalar string.
- **DOI**: Omit the `doi:` field entirely if no DOI exists. Don't use empty `doi:`.
- **cssclasses**: Don't add `cssclasses: [""]` — it has no effect and adds noise.
- **`related` field**: Wiki-link format: `["[[Slug or Title]]"]`
- **Essay `version` field**: Follows a semantic versioning scheme indicating publication stage:
  - `0.1`–`0.6`: Working draft / in development
  - `0.7`–`0.8`: Preprint deposited
  - `0.9`: Submitted to a peer-reviewed journal
  - `1.0`+: Published in a peer-reviewed venue; minor revisions increment the minor number (e.g. `1.1`)

### Taxonomy (categories and tags)

Approved vocabulary is defined in `content/personas/taxonomy.md`. **Always choose values from this list** — do not invent new terms when an existing one covers the concept.

**Categories** (7 approved, pick 1–2 per piece):
`AI and technology` · `Assessment` · `Curriculum` · `Pedagogy` · `Scholarship` · `Knowledge management` · `Professional development`

**Tags must use hyphens** — Obsidian does not support tags with spaces. Always use hyphenated form: `ai-agents` not `AI agents`, `context-engineering` not `context engineering`. The canonical forms are defined in `content/personas/taxonomy.md`.

**Tags** (approved): see `content/personas/taxonomy.md` for the full list. Key clusters:
- AI: `large-language-models`, `ai-literacy`, `ai-agents`, `ai-integration`, `generative-ai`, `context-engineering`, `retrieval-augmented-generation`, `machine-learning`, `model-context-protocol`, `vector-database`, `graph-database`
- Scholarship: `academic-writing`, `academic-practice`, `open-scholarship`, `publishing`, `peer-review`, `research-methods`, `emergent-scholarship`
- Teaching/learning: `learning-design`, `feedback`, `learning-theory`, `critical-thinking`, `educational-technology`, `prompting`, `supervision`
- Health professions: `health-professions-education`, `clinical-education`, `competency-frameworks`, `workplace-learning`
- Knowledge: `note-taking`, `information-architecture`, `documentation`, `personal-knowledge-management`, `knowledge-graphs`

**Adding new terms**: run `node scripts/validate-taxonomy.mjs` — it flags any unknown values and shows the exact line to add to `taxonomy.md`. Add the term there first, then use it in content.

**Tags to avoid** (too broad, or duplicate a category): `ai`, `technology`, `learning`, `knowledge`, `teaching`, `education`, `practice`, `skills`, `scholarship`, `pedagogy`, `assessment` — use the category field or a more specific tag instead.

**Validate at any time:**
```bash
node scripts/validate-taxonomy.mjs           # full report with file paths
node scripts/validate-taxonomy.mjs --summary # counts only
node scripts/validate-taxonomy.mjs --path content/Posts  # single directory
```

### Personas

Reviewer personas live in `content/personas/` (excluded from build). Apply with:
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
- **`npm run check` failures**: There are pre-existing TypeScript errors in the codebase (multiple components). These do not block building — `npx quartz build` succeeds. Don't treat `npm run check` failures as blockers unless they're in files you've changed.

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
