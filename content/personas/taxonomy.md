---
categories:
  - Technology
  - Assessment
  - Education
  - Teaching
  - Scholarship
  - Information management
  - Professional development
tags:
  - language-model
  - ai-literacy
  - agent
  - ai-integration
  - context-engineering
  - generative-ai
  - machine-learning
  - retrieval-augmented-generation
  - model-context-protocol
  - vector-database
  - graph-database
  - cognition
  - human-ai-collaboration
  - value-alignment
  - ai-forward
  - natural-language-programming
  - academic-writing
  - academic-practice
  - academic-integrity
  - emergent-scholarship
  - open-scholarship
  - publishing
  - peer-review
  - research-methods
  - research-skills
  - citation
  - authorship
  - note-taking
  - information-architecture
  - information-management
  - information-retrieval
  - documentation
  - knowledge-representation
  - knowledge-graphs
  - operational-architecture
  - documentation-debt
  - learning-design
  - learning-outcomes
  - learning-theory
  - learning-alignment
  - feedback
  - active-learning
  - supervision
  - clinical-supervision
  - mentoring
  - critical-thinking
  - critical-pedagogy
  - digital-literacy
  - constructivism
  - connectivism
  - cognitive-science
  - distributed-cognition
  - educational-technology
  - prompt-engineering
  - health-professions-education
  - clinical-education
  - workplace-learning
  - professional-identity
  - professional-practice
  - professional-education
  - curriculum-mapping
  - curriculum-design
  - programme-design
  - competency-frameworks
  - faculty-development
  - professional-development
  - professional-learning
  - academic-development
  - leadership
  - organisational-change
  - governance
  - risk-management
  - higher-education
  - time-management
  - productivity
  - career-development
  - academic-career
  - judgement
  - discernment
  - taste
  - trust
  - context-sovereignty
  - complexity
  - curriculum-infrastructure
  - organisational-infrastructure
  - continuous-governance
  - institutional-dynamics
  - general-purpose-technology
  - artificial-information-scarcity
  - standards
  - strategy
  - reasoning
  - language
  - values
  - engagement
  - collaboration
  - communication
  - privacy
  - accessibility
  - human-ai-relationships
  - email-management
  - user-interface
  - self-directed-learning
  - ai-tutoring
  - ai-principles
  - doctoral-research
---

# Site taxonomy

This file defines the controlled vocabulary for `category` and `tags` frontmatter fields across the site. The canonical source is the vault taxonomy at `writing/processing/system/taxonomy.md`. When in conflict, the vault taxonomy takes precedence.

## How to use

Run the validator at any time to check content files:

```bash
node scripts/validate-taxonomy.mjs
```

Check a specific path:

```bash
node scripts/validate-taxonomy.mjs --path content/Posts
```

Summary only (no file-level detail):

```bash
node scripts/validate-taxonomy.mjs --summary
```

Strict mode (exits with code 1 if issues found, useful for pre-commit hooks):

```bash
node scripts/validate-taxonomy.mjs --strict
```

## Adding new terms

When you introduce a concept that isn't covered by existing terms:

1. Run the validator — it flags the unknown term and shows you the line to add
2. Add it to the appropriate list below **and** to the vault taxonomy
3. Re-run to confirm

Before adding, check: is this genuinely a new concept, or a near-synonym of something that already exists? If `research-methods` already covers it, don't also add `research-methodology` — update the content file to use the canonical term.

## Categories (broad areas)

Keep this list short and stable. Categories are like sections of a library — broad enough that multiple pieces belong together. These are a subset of the vault's 23 master categories.

| Category | Use for |
| -------- | ------- |
| `Technology` | AI tools, systems, and their implications. Covers: `artificial intelligence`, `generative AI`, `technology` as a category |
| `Assessment` | Evaluation, feedback, measurement of learning |
| `Education` | Educational systems, institutions, policy, curriculum, higher education |
| `Teaching` | Teaching approaches, learning theory, instructional methods. Covers: `pedagogy`, `learning` as a category |
| `Scholarship` | Academic practice, publishing, knowledge creation |
| `Information management` | PKM, note-taking, information organisation. Covers: `knowledge representation` as a category |
| `Professional development` | Craft improvement, professional learning, faculty development, academic development |

**Legacy category mappings** (cleanup completed June 2026 — use the canonical category if these resurface): `AI and technology` → `Technology`; `Pedagogy` → `Teaching`; `Knowledge management` → `Information management`; `Curriculum` → `Education`; `Philosophy` → `Scholarship`.

## Tags (specific concepts)

Tags are more granular than categories and describe the specific concepts a piece engages with. A post about AI feedback tools might have `category: Assessment` and tags `language-model`, `feedback`, `ai-integration`.

Tags to avoid (too broad — use the category instead, or a more specific tag):
- **Duplicates categories**: `scholarship`, `pedagogy`, `assessment`, `information management` — use the category field instead
- **Too broad to be useful**: `ai`, `technology`, `learning`, `knowledge`, `teaching`, `education`, `practice`, `skills`, `research`, `architecture`, `framework`, `professional`, `literacy`, `generative`
- **Use the canonical term instead**: see merge rules below
- **Metadata/format, not topics**: `editor`, `journal`, `audio`, `podcasts`, `essays`, `anthropic`

### Merge rules (avoid these; use canonical form instead)

| Avoid | Use instead |
| ----- | ----------- |
| `large-language-models` | `language-model` |
| `llm` | `language-model` |
| `nlp` | `language-model` |
| `ai-agents` | `agent` |
| `prompting` | `prompt-engineering` |
| `personal-knowledge-management`, `pkm` | `information-management` |
| `knowledge-management` | `information-management` |
| `curriculum-development` | `curriculum-design` |
| `research-methodology` | `research-methods` |
| `personal-learning` | `self-directed-learning` |
| `complexity-theory` | `complex-systems` |
| `career-strategy` | `career-development` |
| `publication` | `publishing` |
| `artificial-intelligence` (as a tag) | `language-model` or `ai-integration` (be specific) |

## Content types validated

The taxonomy validator checks files with these `type:` values:

| Type | Used for |
| ---- | -------- |
| `post` | Blog-style posts |
| `essay` | Long-form academic essays |
| `note` | Concept notes |
| `course` | Course index pages |
| `lesson` | Individual course lessons |
| `framework` | Framework documents |
| `bib` | Annotated bibliography entries |
| `presentation` | Conference and invited presentations |
| `guide` | One-page downloadable reference guides |
