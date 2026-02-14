---
# Controlled vocabulary for the Emergent Scholarship site.
# Used by scripts/validate-taxonomy.mjs to check frontmatter consistency.
#
# ADDING NEW TERMS
# Run: node scripts/validate-taxonomy.mjs
# The script will flag any tags or categories not in this list, and show
# you exactly what to add here. Add the new term below, then re-run.
#
# CATEGORIES — broad thematic areas (keep to ~10 max)
# A piece of content usually has 1-2 categories.
# Ask: "what section of a library would this sit in?"
#
# TAGS — specific concepts, methods, or terms
# A piece of content may have 3-6 tags.
# Ask: "what would someone search for to find this?"
# Avoid near-synonyms: if AI literacy exists, don't add AI competence.

categories:
  - AI and technology
  - Assessment
  - Curriculum
  - Pedagogy
  - Scholarship
  - Knowledge management
  - Professional development

tags:
  # AI and machine learning
  - large-language-models
  - ai-literacy
  - ai-agents
  - ai-integration
  - context-engineering
  - generative-ai
  - machine-learning
  - retrieval-augmented-generation
  - model-context-protocol
  - vector-database
  - graph-database
  - human-cognition
  - human-ai-collaboration
  - value-alignment
  - ai-forward
  # Scholarship and academic practice
  - academic-writing
  - academic-practice
  - academic-integrity
  - open-scholarship
  - publishing
  - peer-review
  - research-methods
  - research-skills
  - citation
  - authorship
  - emergent-scholarship
  # Knowledge and information
  - note-taking
  - information-architecture
  - information-management
  - information-retrieval
  - documentation
  - knowledge-representation
  - personal-knowledge-management
  - knowledge-graphs
  - operational-architecture
  - documentation-debt
  # Teaching and learning
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
  - prompting
  - prompt-engineering
  # Health professions education
  - health-professions-education
  - clinical-education
  - workplace-learning
  - professional-identity
  - professional-practice
  - professional-education
  # Curriculum and programme design
  - curriculum-mapping
  - curriculum-design
  - curriculum-development
  - programme-design
  - competency-frameworks
  - learning-outcomes
  # Professional and organisational
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
  # Concepts and frameworks
  - judgement
  - discernment
  - taste
  - trust
  - context
  - context-sovereignty
  - complexity
  - complexity-theory
  - infrastructure
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
  # Specialist tools and methods
  - email-management
  - user-interface
  - personal-learning
  - academic-career
  - ai-tutoring
  - ai-principles
---

# Site taxonomy

This file defines the controlled vocabulary for `category` and `tags` frontmatter fields across the site.

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
2. Add it to the appropriate list below
3. Re-run to confirm

Before adding, check: is this genuinely a new concept, or a near-synonym of something that already exists? If `AI literacy` already covers it, don't also add `AI competence` — update the content file to use the canonical term.

## Categories (broad areas)

Keep this list short and stable. Categories are like sections of a library — broad enough that multiple pieces belong together.

| Category | Use for |
| -------- | ------- |
| AI and technology | AI tools, systems, and their implications. Covers: `artificial intelligence`, `generative AI`, `technology` as a category |
| Assessment | Evaluation, feedback, measurement of learning |
| Curriculum | Programme structure, curriculum design and mapping |
| Pedagogy | Teaching approaches, learning theory, instructional methods. Covers: `learning` as a category |
| Scholarship | Academic practice, publishing, knowledge creation |
| Knowledge management | PKM, note-taking, information organisation. Covers: `knowledge representation` as a category |
| Professional development | Faculty development, career, practice development. Covers: `organisations`, `professional practice` as categories |

**Category cleanup needed:** The following values exist in content files but should be replaced with the canonical category above: `artificial intelligence`, `ai and learning`, `ai literacy`, `ai architecture`, `ai implementation`, `ai interaction`, `ai standards`, `ai fluency`, `generative ai`, `knowledge representation`, `learning`, `organisations`, `professional practice`, `technology`, `courses`, `frameworks`.

## Tags (specific concepts)

Tags are more granular than categories and describe the specific concepts a piece engages with. A post about AI feedback tools might have `category: Assessment` and tags `large-language-models`, `feedback`, `ai-integration`.

Tags to avoid (too broad — use the category instead, or a more specific tag):
- **Duplicates categories**: `scholarship`, `pedagogy`, `assessment`, `knowledge management` — use the category field instead
- **Too broad to be useful**: `ai`, `technology`, `learning`, `knowledge`, `teaching`, `education`, `practice`, `skills`, `research`, `architecture`, `framework`, `professional`, `literacy`, `generative`
- **Use the canonical term instead**: `language-model` → `large-language-models`; `pkm` → `personal-knowledge-management`; `publication` → `publishing`; `artificial-intelligence` → `large-language-models` or `ai-integration`
- **Metadata/format, not topics**: `editor`, `journal`, `audio`, `podcasts`, `essays`, `anthropic`
