# Content review queue

This file tracks the persona review pipeline across all published content. Each piece goes through personas in order. Progress is tracked here (overview) and in each file's `reviewed:` frontmatter field (ground truth).

## Pipelines

| Content type | Pipeline | Template |
|---|---|---|
| Essays | `writing_style` → `essay_writer` → `copy_editor` → `SEO_optimiser` → `zotero_citations`* | `content/templates/essay_template.md` |
| Posts | `writing_style` → `blog_writer` → `copy_editor` → `SEO_optimiser` → `zotero_citations`* | `content/templates/post_template.md` |
| Notes | `writing_style` → `note_writer` → `copy_editor` → `SEO_optimiser` | `content/templates/note_template.md` |
| Lessons | `writing_style` → `course_designer` → `web_designer` → `copy_editor` → `SEO_optimiser` | `content/templates/lesson_template.md` |
| Newsletters | `writing_style` → `newsletter_editor` → `copy_editor` → `SEO_optimiser` | `content/templates/newsletter_template.md` |
| Other (frameworks, policies, nav) | `copy_editor` → `SEO_optimiser` | — |

\* `zotero_citations`: A final pass to integrate citation data from Zotero. Persona TBD — pending Zotero database cleanup. Apply only to essays and posts that reference academic sources.

The **SR step** (structural refiner) is responsible for template compliance: verifying that the required callouts, frontmatter fields, and section structure from the template are present and correctly populated, in addition to argument and narrative structure.

## Periodic reviews (not per-piece)

These personas operate at site level and should be run periodically rather than per content item:

- **`accessibility_reviewer`** — Full WCAG 2.1 AA audit of site components, templates, and rendered pages. Content-level accessibility checks (inclusive language, heading hierarchy, reading level) are handled by `copy_editor` in the per-piece pipeline.
- **`content_strategist`** — Site-level information architecture, audience journey, content gaps, and internal linking strategy. Run after completing a batch of per-piece reviews, or when the site structure changes.

## Status key

| Symbol | Meaning |
|---|---|
| `-` | Pending |
| `•` | In progress |
| `✓` | Done |

## Columns

**WS** = writing_style · **SR** = structural refiner (type shown in section header) · **WD** = web_designer (lessons only) · **CE** = copy_editor · **SEO** = SEO_optimiser · **ZC** = zotero_citations (essays and posts only; pending)

---

## Posts (structural refiner: `blog_writer`)

Ordered newest first.

| # | Title | File | WS | SR | CE | SEO | ZC |
|---|---|---|---|---|---|---|---|
| 1 | Seven AI collaboration principles | `Posts/2026-02-25-principles-ai-collaboration.md` | ✓ | ✓ | ✓ | ✓ | - |
| 2 | Building an AI-ready knowledge base: what the project actually looks like | `Posts/2026-02-24-ai-ready-knowledge-base.md` | ✓ | ✓ | ✓ | ✓ | - |
| 2 | The hidden inefficiency in how we work with AI | `Posts/2026-02-16-ai-models-for-different-tasks.md` | ✓ | ✓ | ✓ | ✓ | - |
| 2 | The database as context: what I learned when Claude Code read my Zotero library | `Posts/2026-02-15-database-as-context.md` | ✓ | ✓ | ✓ | ✓ | - |
| 3 | Context engineering for educators: Infrastructure, not just policy | `Posts/2026-02-14-context-engineering-for-educators.md` | ✓ | ✓ | ✓ | ✓ | - |
| 4 | The quality of the challenge: AI as a thinking partner | `Posts/2026-02-13-AI-thinking-partner.md` | ✓ | ✓ | ✓ | ✓ | - |
| 5 | Organising your notes for AI: why retrieval isn't enough | `Posts/2026-02-12-organising-notes-for-ai.md` | ✓ | ✓ | ✓ | ✓ | - |
| 6 | Building an AI workflow for academics with structured documentation | `Posts/2026-02-11-building-AI-collaboration-workflow.md` | ✓ | ✓ | ✓ | ✓ | - |
| 7 | Similarities between AI and human thinking: What if we're the language models? | `Posts/2026-02-06-LLM-similarities-human-cognition.md` | ✓ | ✓ | ✓ | ✓ | - |
| 8 | AI tripwires and assessment security theatre | `Posts/2026-02-05-AI-tripwires-and-assessment-security-theatre.md` | ✓ | ✓ | ✓ | ✓ | - |
| 9 | Essays as scholarship | `Posts/2026-01-29-essays-as-scholarship.md` | ✓ | ✓ | ✓ | ✓ | - |
| 10 | AI for learning at scale: Why I'm optimistic | `Posts/2026-01-29-AI-for-learning-at-scale.md` | ✓ | ✓ | ✓ | ✓ | - |
| 11 | AI and evaluative judgement: Cultivating taste in the age of capability | `Posts/2026-01-29-AI-and-evaluative-judgement.md` | ✓ | ✓ | ✓ | ✓ | - |
| 12 | A bitter lesson for higher education | `Posts/2026-01-28-bitter-lesson-higher-education.md` | ✓ | ✓ | ✓ | ✓ | - |
| 13 | AI meeting scribes, organisational memory, and new governance structures | `Posts/2026-01-28-AI-meeting-scribes-organisational-memory-new-governance.md` | ✓ | ✓ | ✓ | ✓ | - |
| 14 | What does scholarship sound like? | `Posts/2026-01-27-what-does-scholarship-sound-like.md` | ✓ | ✓ | ✓ | ✓ | - |
| 15 | A better game: Thoughtful AI use over performative critique | `Posts/2026-01-17-thoughtful-AI-use-a-better-game.md` | ✓ | ✓ | ✓ | ✓ | - |

---

## Essays (structural refiner: `essay_writer`)

Ordered newest modified first.

| # | Title | File | WS | SR | CE | SEO | ZC |
|---|---|---|---|---|---|---|---|
| 1 | AI tutor accuracy in health professions education: The accuracy-engagement paradox | `Essays/ai-tutor-accuracy-health-professions.md` | ✓ | ✓ | ✓ | ✓ | - |
| 2 | A theoretical framework for integrating AI into HPE | `Essays/ai-hpe-theoretical-framework.md` | - | - | - | - | - |
| 3 | Context sovereignty for AI-supported learning | `Essays/context-sovereignty.md` | - | - | - | - | - |
| 4 | Documentation becomes infrastructure when AI agents are the readers | `Essays/documentation-as-infrastructure.md` | - | - | - | - | - |
| 5 | Beyond document management: Graph infrastructure for professional education | `Essays/curriculum-infrastructure.md` | - | - | - | - | - |
| 6 | Context engineering and the technical foundations of educational transformation | `Essays/context-engineering.md` | - | - | - | - | - |
| 7 | Technological nature of language and implications for HPE | `Essays/language-technology.md` | - | - | - | - | - |
| 8 | From journals to networks: How transparency transforms trust in scholarship | `Essays/transparency-transforms-trust.md` | - | - | - | - | - |
| 9 | Taste and judgement in human-AI systems | `Essays/taste-and-judgement.md` | - | - | - | - | - |
| 10 | From teaching to learning: Rethinking education for a world of information abundance | `Essays/teaching-to-learning.md` | - | - | - | - | - |
| 11 | Publishing with purpose: Using AI to enhance scientific discourse | `Essays/publishing-with-purpose.md` | - | - | - | - | - |
| 12 | The learning alignment problem: AI and the loss of control in higher education | `Essays/learning-alignment.md` | - | - | - | - | - |
| 13 | Avoiding innovation theatre: A framework for institutional AI integration | `Essays/institutional-ai-governance.md` | - | - | - | - | - |
| 14 | Beyond text boxes: A graph-based user interface for AI-supported learning | `Essays/graph-user-interface.md` | - | - | - | - | - |

---

## Notes (structural refiner: `note_writer`)

Ordered by topic cluster, then alphabetically within cluster.

### AI and technology
| # | Title | File | WS | SR | CE | SEO |
|---|---|---|---|---|---|---|
| 1 | AI literacy | `Notes/AI literacy.md` | - | - | - | - |
| 21 | Prompt injection | `Notes/prompt injection.md` | - | - | - | - |
| 2 | AI-forward | `Notes/AI-forward.md` | - | - | - | - |
| 3 | Claude code | `Notes/Claude code.md` | - | - | - | - |
| 4 | Embeddings | `Notes/embeddings.md` | - | - | - | - |
| 5 | Graph database | `Notes/graph database.md` | - | - | - | - |
| 6 | GraphRAG | `Notes/graphRAG.md` | - | - | - | - |
| 7 | Human cognition and LLM parallels | `Notes/human cognition and LLM parallels.md` | - | - | - | - |
| 8 | Inference | `Notes/inference.md` | ✓ | ✓ | ✓ | ✓ |
| 9 | Intelligence as a service | `Notes/intelligence-as-service.md` | - | - | - | - |
| 10 | Knowledge graph | `Notes/knowledge graph.md` | - | - | - | - |
| 11 | Large language models | `Notes/large language models.md` | - | - | - | - |
| 12 | MCP server | `Notes/mcp server.md` | - | - | - | - |
| 13 | Model Context Protocol | `Notes/model-context-protocol.md` | - | - | - | - |
| 14 | Multi-hop reasoning | `Notes/multi-hop reasoning.md` | - | - | - | - |
| 15 | Prompt engineering | `Notes/prompt engineering.md` | - | - | - | - |
| 16 | Retrieval augmented generation | `Notes/retrieval augmented generation.md` | - | - | - | - |
| 17 | Single-hop reasoning | `Notes/single-hop reasoning.md` | - | - | - | - |
| 18 | System prompt | `Notes/system prompt.md` | - | - | - | - |
| 19 | Token budget | `Notes/token budget.md` | ✓ | ✓ | ✓ | ✓ |
| 20 | Vector database | `Notes/vector database.md` | - | - | - | - |

### Context and knowledge management
| # | Title | File | WS | SR | CE | SEO |
|---|---|---|---|---|---|---|
| 19 | Context drift | `Notes/context drift.md` | - | - | - | - |
| 20 | Context engineering | `Notes/context engineering.md` | - | - | - | - |
| 21 | Context sovereignty | `Notes/context sovereignty.md` | - | - | - | - |
| 22 | Contextual interoperability | `Notes/contextual interoperability.md` | - | - | - | - |
| 23 | Documentation debt | `Notes/documentation debt.md` | - | - | - | - |

### Scholarship and education
| # | Title | File | WS | SR | CE | SEO |
|---|---|---|---|---|---|---|
| 24 | AI literacy (qualifications) | `Notes/qualifications for AI literacy.md` | - | - | - | - |
| 25 | Arms race dynamics in higher education | `Notes/arms race dynamics higher education.md` | - | - | - | - |
| 26 | Boyer's model of scholarship | `Notes/Boyer's model of scholarship.md` | - | - | - | - |
| 27 | Common architecture of literacy | `Notes/common architecture of literacy.md` | - | - | - | - |
| 28 | Higher Education Reference Model | `Notes/higher education reference model.md` | - | - | - | - |
| 29 | Open access licensing | `Notes/open access licensing.md` | - | - | - | - |
| 30 | Open source software | `Notes/open source software.md` | - | - | - | - |
| 31 | Programmatic assessment | `Notes/programmatic assessment.md` | - | - | - | - |

### Technical tools
| # | Title | File | WS | SR | CE | SEO |
|---|---|---|---|---|---|---|
| 32 | LaTeX | `Notes/latex.md` | - | - | - | - |
| 33 | Markdown | `Notes/markdown.md` | - | - | - | - |
| 34 | Pandoc | `Notes/pandoc.md` | - | - | - | - |
| 35 | Plain text | `Notes/plain text.md` | - | - | - | - |

> **Note:** Any notes not listed above should be added here when encountered. Run `node scripts/validate-taxonomy.mjs` to check for unlisted files.

---

## Lessons (structural refiner: `course_designer`)

Ordered by course, then by lesson number.

### AI literacy (16 lessons)
| # | Lesson | File | WS | SR | WD | CE | SEO |
|---|---|---|---|---|---|---|---|
| 1–16 | Lessons 1–16 | `Courses/AI literacy/` | - | - | - | - | - |

> Work through lessons in order (lesson number field). List individually as each is started.

### Career development (7 lessons)
| # | Lesson | File | WS | SR | WD | CE | SEO |
|---|---|---|---|---|---|---|---|
| 1–7 | Lessons 1–7 | `Courses/Career development/` | - | - | - | - | - |

### Email management (7 lessons)
| # | Lesson | File | WS | SR | WD | CE | SEO |
|---|---|---|---|---|---|---|---|
| 1–7 | Lessons 1–7 | `Courses/Email management/` | - | - | - | - | - |

### Information management (7 lessons)
| # | Lesson | File | WS | SR | WD | CE | SEO |
|---|---|---|---|---|---|---|---|
| 1–7 | Lessons 1–7 | `Courses/Information management/` | - | - | - | - | - |

### Note-taking (7 lessons)
| # | Lesson | File | WS | SR | WD | CE | SEO |
|---|---|---|---|---|---|---|---|
| 1–7 | Lessons 1–7 | `Courses/Note-taking/` | - | - | - | - | - |

### Time management (7 lessons)
| # | Lesson | File | WS | SR | WD | CE | SEO |
|---|---|---|---|---|---|---|---|
| 1–7 | Lessons 1–7 | `Courses/Time management/` | - | - | - | - | - |

---

## Other (pipeline: `copy_editor` → `SEO_optimiser` only)

| # | Title | File | CE | SEO |
|---|---|---|---|---|
| 1 | AI literacy development framework | `Frameworks/AI literacy development framework.md` | - | - |
| 2 | Classroom policy: AI use | `Policies/classroom-policy-AI-use.md` | - | - |
| 3 | January 2026 newsletter | `Newsletters/2026-01-newsletter-draft.md` | - | - |
| 4 | February 2026 newsletter | `Newsletters/2026-02-newsletter-draft.md` | - | - |

---

## Instructions for delegated review sessions

Work through content types in this order: **Posts → Essays → Lessons**. Notes and Other can be done at any point. The sections in this file are ordered accordingly.

**Editorial principle**: Treat the original as a solid starting point. Persona reviews are refinements — structural fine-tuning, sentence-level editing, template compliance — not rewrites. Unless the user explicitly asks for a rewrite or the piece has fundamental problems, preserve the author's framing, examples, and voice. The bar for changing a sentence is "this is unclear or incorrect", not "I could write this differently".

When picking up this queue:

1. Find the first item in the current content type where any column still shows `-`
2. Apply the next pending persona in sequence for that item
   - **Always use the template for the content type** (see pipeline table above) to verify required frontmatter fields, callouts, and section structure are present. If the file has no frontmatter, create it from the template.
3. Tell the user what changes were made and wait for approval before marking the step `✓`
4. After approval: update the symbol in this file **and** add the persona name to `reviewed:` in the file's frontmatter
5. Move to the next item only after the current item is complete or the user explicitly skips a step

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

For partially reviewed files (like `2026-02-13-AI-thinking-partner.md`), add only the personas that have been applied.
