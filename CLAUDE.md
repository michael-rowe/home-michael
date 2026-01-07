# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Quartz is a static site generator that transforms Markdown files (particularly from digital gardens/note-taking apps like Obsidian) into a fully-featured website. It uses a plugin-based architecture with transformers, filters, and emitters to process content through a build pipeline.

## Essential Commands

### Building and Development
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

### CLI Commands
The main CLI is defined in `quartz/bootstrap-cli.mjs`:
- `npx quartz create` - Initialize new Quartz site
- `npx quartz update` - Get latest Quartz updates
- `npx quartz restore` - Restore content folder from cache
- `npx quartz sync` - Sync to/from GitHub
- `npx quartz build` - Build static site

## Architecture

### Build Pipeline Overview

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

### Key Files and Directories

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

### Build Process Details

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

### Rendering Pipeline

Content flows through unified/remark/rehype:
- Text → vfile
- Apply text transformations
- Text → mdast (Markdown AST) via remark-parse
- mdast → mdast transformations (remark plugins)
- mdast → hast (HTML AST) via remark-rehype
- hast → hast transformations (rehype plugins)
- hast → JSX via hast-util-to-jsx-runtime (Preact)
- JSX → HTML string via preact-render-to-string

## Plugin Development

### Transformer Plugin Structure
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

### Filter Plugin Structure
```typescript
export const MyFilter: QuartzFilterPlugin<Options> = (opts) => {
  return {
    name: "MyFilter",
    shouldPublish(ctx, content): boolean
  }
}
```

### Emitter Plugin Structure
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

## Component Development

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

## Important Patterns

### Path Handling
- `FilePath` type represents file paths
- Slugs are simplified paths used for URLs
- Path utilities in `quartz/util/path.ts`
- See `docs/advanced/paths.md` for detailed path logic

### Content Map
The build maintains a `Map<FilePath, ProcessedContent>` that tracks:
- Parsed AST for each file
- Plugin-added metadata
- Updated incrementally during hot reload

### Context Objects
- `BuildCtx`: Contains argv, cfg, allSlugs, allFiles
- `QuartzComponentProps`: Props passed to components (ctx, fileData, cfg, tree, etc.)

### Static Resources
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

## TypeScript Configuration

- Module system: ESNext with Node resolution
- JSX: `react-jsx` with `preact` as import source
- Strict mode enabled
- All `.ts` and `.tsx` files included
- Exclude `build/**/*.d.ts`

## Content Structure

Content lives in `content/` directory (ignored by git per configuration):
- Markdown files with optional frontmatter
- Support for Obsidian-flavored Markdown
- Ignore patterns configurable in `quartz.config.ts`
- Examples: `ignorePatterns: ["private", "templates", ".obsidian"]`

## Performance Considerations

- Worker threads used for parsing when >128 files
- Incremental rebuilds track changes since last build
- esbuild rebuild API for fast transpilation
- CSS/JS bundling and minification
- Note: Dynamic imports with query strings cause ~350KB memory leak per reload (acceptable for dev)

## Internationalization

- Locale support in `quartz/i18n/locales/`
- Configured via `locale` in `quartz.config.ts`
- Used for date formatting and UI strings
