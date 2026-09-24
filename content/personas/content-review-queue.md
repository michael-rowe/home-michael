# Content review pipelines

This file says which personas each content type needs, and how to work a review session. **It no longer tracks progress.** Each file's `reviewed:` frontmatter is the record, and `scripts/review-status.mjs` derives the backlog from it — so what is outstanding is computed, never ticked.

```bash
node scripts/review-status.mjs                  # what is pending, by type, next few each
node scripts/review-status.mjs --summary        # counts only
node scripts/review-status.mjs --type note      # one type, every pending file
node scripts/review-status.mjs --next 5         # how many to list per type
node scripts/review-status.mjs --include-drafts # count draft: true files too
```

Atlas surfaces the same number as `Unreviewed (n)` on SUPER+SLASH, and `n to review` in its status strip (ATLAS-16).

A hand-ticked table stood here until 2026-09-18. It had already drifted — it marked three notes unreviewed that had been reviewed, and one post reviewed with nothing in its frontmatter to show it — and nothing could settle a disagreement except reading the prose. Michael's call: signals are derived, not stored.

## Pipelines

| Content type | Pipeline | Template |
|---|---|---|
| Essays | `essay_writer` → `writing_style` → `SEO_optimiser` → `copy_editor` → `zotero_citations`* | `content/templates/essay_template.md` |
| Posts | `blog_writer` → `writing_style` → `SEO_optimiser` → `copy_editor` → `zotero_citations`* | `content/templates/post_template.md` |
| Notes | `note_writer` → `writing_style` → `SEO_optimiser` → `copy_editor` | `content/templates/note_template.md` |
| Lessons | `course_designer` → `writing_style` → `web_designer` → `SEO_optimiser` → `copy_editor` | `content/templates/lesson_template.md` |
| Newsletters | `newsletter_editor` → `writing_style` → `SEO_optimiser` → `copy_editor` | `content/templates/newsletter_template.md` |
| Other (frameworks, policies, nav) | `SEO_optimiser` → `copy_editor` | — |

\* `zotero_citations`: A final pass to integrate citation data from Zotero. Persona TBD — pending Zotero database cleanup. Apply only to essays and posts that reference academic sources. Marked `*` here because the persona does not exist yet; the script reads that marker and does not count it as outstanding work.

**The script parses this table**, matching the content-type column to the `type:` in each file's frontmatter. Changing a pipeline here changes what the backlog reports — no second place to update. Adding a row for a new content type is how that type enters the queue.

**Podcasts, presentations, projects and bibliography entries have no pipeline**, so the script reports them separately and does not count them. Which personas they need — and whether `writing_style` even applies to a few sentences of framing around someone else's work — is open in WP-9.

**Why this order** (2026-09-24): structure first, because there is no point polishing sentences the structural pass cuts or moves, and whatever it adds then gets the style pass; `SEO_optimiser` before `copy_editor`, so the final check sees the SEO edits to title, descriptions and opening lines. `SEO_optimiser` opens with the keyphrase confirmation gate and keeps body changes minimal — the pass after it checks correctness, not voice, so nothing downstream would catch a keyphrase forced into the prose.

The **structural refiner** step (the first in each pipeline) is responsible for template compliance: verifying that the required callouts, frontmatter fields, and section structure from the template are present and correctly populated, in addition to argument and narrative structure.

## Periodic reviews (not per-piece)

These personas operate at site level and should be run periodically rather than per content item:

- **`accessibility_reviewer`** — Full WCAG 2.1 AA audit of site components, templates, and rendered pages. Content-level accessibility checks (inclusive language, heading hierarchy, reading level) are handled by `copy_editor` in the per-piece pipeline.
- **`content_strategist`** — Site-level information architecture, audience journey, content gaps, and internal linking strategy. Run after completing a batch of per-piece reviews, or when the site structure changes.

## Instructions for delegated review sessions

**Editorial principle**: Treat the original as a solid starting point. Persona reviews are refinements — structural fine-tuning, sentence-level editing, template compliance — not rewrites. Unless the user explicitly asks for a rewrite or the piece has fundamental problems, preserve the author's framing, examples, and voice. The bar for changing a sentence is "this is unclear or incorrect", not "I could write this differently".

When picking up the queue:

1. Run `node scripts/review-status.mjs` to see what is pending. It lists fewest-steps-outstanding first, so a piece one step from done comes before one that has had nothing — finishing beats starting.
2. Apply the next pending persona for that file, in pipeline order.
   - **Always use the template for the content type** (see the pipeline table above) to verify required frontmatter fields, callouts, and section structure are present. If the file has no frontmatter, create it from the template.
   - **The `copy_editor` pass does three things beyond the persona, as edits rather than flags** (decided 2026-09-24, on `Notes/context engineering.md`):
     - **Complete the sources.** Every reference gets a URL and, where there is one, a site or publisher name, in APA. Look in the corpus first (Zotero, Readwise), then the web; confirm each URL resolves and matches the author and title before adding it. Never guess one.
     - **Remove cross-section repetition.** Where a later section restates something an earlier one already said, cut or compress the restatement instead of noting it.
     - **Gloss jargon in footnotes.** Apply *Teach the reader* in `CLAUDE.md`: a term the reader can't be assumed to know gets a footnote at first use — bold term, one or two plain sentences, a health professions education example where one helps, a Wikipedia link.
3. Tell the user what changed and wait for approval.
4. After approval, add the persona name to `reviewed:` in that file's frontmatter. That is the only place to record it.
5. Move on only when the current file is complete or the user explicitly skips a step.

Work through content types in whatever order the work calls for; posts are the shortest and the best place to iterate on a persona's instructions, essays and lessons the longest.

### Taxonomy workflow

When a new tag or category is proposed during a review:
1. Confirm with the user before using it
2. If approved: add it to `content/personas/taxonomy.md` immediately
3. Use it in the current file's frontmatter
4. Do **not** retroactively update all other content — run `node scripts/validate-taxonomy.mjs` later to identify content that could benefit from the new term if desired

### Frontmatter convention

Add a `reviewed:` list to each file's YAML after each persona is applied:

```yaml
reviewed:
  - writing_style
  - blog_writer
  - copy_editor
  - SEO_optimiser
```

On a partially reviewed file, list only the personas that have actually run. A missing `reviewed:` field means none have.
