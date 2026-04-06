---
title: "Scoring your library for relevance"
type: post
description: "How I used Claude Haiku to score 4,460 Zotero items for relevance to my current research territory — and what the results revealed about how a reference library accumulates over time."
meta-description: ""
keyphrase: ""
author: "[[Michael Rowe]]"
tags:
  - mcp
  - zotero
  - personal-knowledge-management
  - context-engineering
  - anthropic-api
category: []
related:
draft: true
slug: ""
series: commonplace
series_order: 3
subtype: ""
enableToc: true
linkedin:
---

The metadata enrichment work described in the [previous post](link) fixed a lot. Abstracts appeared where there had been none; automatic tags were restored; dates and journal names were filled in. The library became materially more searchable. But working through that process surfaced a question that should probably have come first: some of these items might not belong in the library at all. Enriching metadata for a paper saved with passing interest five years ago and never returned to is wasted effort. The enrichment work had assumed the library was worth enriching. That assumption needed testing.

The practical question is harder than it sounds: how do you review 4,460 items in any reasonable way? Manual review at thirty seconds per item runs to over thirty hours. The answer is batch processing with AI — but batch processing with AI is not the same thing as working interactively with Claude Code, and understanding the difference shapes everything about how this kind of work gets done.

## Three tiers of processing

Working with AI on a large knowledge base involves three distinct modes, each suited to different kinds of tasks. Getting the choice right is a matter of matching the tool to the nature of the problem.

**Tier 1** is pure scripting with no AI involvement: Python scripts that page through items, compare fields against expected values, call free external APIs, and write results back. No tokens, no additional cost. The library health work in the [previous post](link) was mostly Tier 1. It's the right approach for mechanical operations where the logic is clear and the decisions don't require judgement.

**Tier 2** is batch processing via the [Anthropic API](link) — the developer service that is separate from a Claude subscription and charges per token used. A script calls the API directly, sending each item with a carefully constructed prompt and collecting structured responses. The key properties: you control exactly what goes into each prompt; you choose the most appropriate model for the task; the script runs in batches that can be left unattended, checked on, and continued. Automated enough to be practical at scale, without requiring approval for every individual decision.

**Tier 3** is MCP and Claude Code: interactive, conversational, targeted. One result shapes the next query. The AI is in the loop at every step. This is the right approach for exploratory work where you don't know in advance what you're looking for — and the wrong one for classifying thousands of items, where the cost and pace of interactive use would make the task impractical.

The relevance scoring in this post is Tier 2. The framework is worth naming explicitly because the choice of tier is not arbitrary. Applying Tier 3 to a 4,460-item classification problem would be prohibitively slow. Applying Tier 1 to a judgement problem — "does this paper belong in my library?" — would require encoding human judgement as deterministic rules, which isn't tractable. Each tier is right for something different.

| Task | Tier |
|---|---|
| Find all items missing abstracts | 1 — script |
| Bulk tag cleanup | 1 — script |
| Score 4,460 papers for relevance | 2 — batch API |
| Classify papers by methodology | 2 — batch API |
| Find sources for a paragraph | 3 — MCP |
| Explore what you have on a topic | 3 — MCP |
| Discuss a specific paper's argument | 3 — MCP |

## Matching the model to the task

Anthropic's model range runs from smaller, faster, cheaper models to larger, slower, more capable ones. The choice between them isn't about prestige — it's about what the task actually requires.

Relevance scoring is a classification problem: given a paper's title, type, year, and abstract, does it connect to a defined research territory? The question is closer to binary than it might appear. Either a paper on sleep insufficiency in adults belongs in a library focused on health professions education and AI, or it doesn't. That judgement doesn't require deep reasoning; it requires consistent application of a defined criterion across a large number of items. Claude Haiku — Anthropic's smallest, fastest model — handles this well, at roughly a tenth of the cost of Sonnet for equivalent output on this kind of task.

The total cost for scoring all 4,460 items was around £1. That's a useful data point rather than a complaint: at that price, re-running the scoring with a revised interest profile, or re-scoring a subset after library changes, is entirely practical.

The division of labour is worth being precise about: Claude Code helped design the scoring criteria and draft the system prompt; Haiku executed the classification at scale without any further involvement from the broader conversation. Its judgement was baked into the prompt once, and it applied that judgement independently across the library. This is the defining feature of Tier 2 — Claude's role is in the design, not the execution.

## Defining the interest profile

The scoring script's system prompt contains a concise profile of what belongs in the library. Writing that profile is the substantive work of the whole process, because it requires stating clearly what your intellectual territory actually is — not what you'd like it to be, or what it once was, but what it is now.

The profile I arrived at:

**In scope**: AI and its implications for professional practice; health professions education; assessment design; professional identity and expertise; knowledge management and epistemic literacy; education research methodology; technology governance and AI ethics.

**Out of scope**: pure machine learning and computer science technical research; general business and management; pure clinical medicine without an educational angle; legal studies; mainstream journalism; pure philosophy without practical application.

Two design decisions shaped it. The first is that the profile describes current intellectual territory, not historical engagement. A paper saved five years ago during a project that has since concluded doesn't automatically belong. The question is not "did I once find this useful?" but "does this connect to what I'm trying to understand and argue now?"

The second is that the profile deliberately ignores engagement signals — tags, annotations, citation history — as proxies for value. Years of saving things "in case" means that genuinely important papers may carry no engagement signals: never tagged, never annotated, simply saved and not yet returned to. A paper cited repeatedly in published work but never tagged is no more discoverable to the scoring script than one never opened. Relevance to current territory is the actual measure; engagement history is noise for this purpose.

The profile wasn't derived from self-description but from reading the root notes and literature notes in my Obsidian vault — what I've actually been writing about, rather than what I imagined I was working on. Notes reveal intellectual territory more honestly than intentions do.

[*Image: Claude Code screenshot showing the interest profile and cost estimate before the scoring run.*]

## Running the script

The script processes items in batches of ten, sending title, item type, year, and abstract — truncated to 400 characters where present — to Haiku with the interest profile as system context. Each item receives a score from 1 to 5 and a one-line reason. The output is a TSV file with key, title, score, reason, DOI, year, and type: sortable, reviewable, importable into a spreadsheet.

The run took around twenty minutes. Zero failures across all 4,460 items. The results:

| Score | Label | Count | % of library |
|---|---|---|---|
| 5 | Core | 277 | 5% |
| 4 | Relevant | 1,193 | 21% |
| 3 | Peripheral | 1,111 | 20% |
| 2 | Marginal | 1,026 | 18% |
| 1 | Out of scope | 1,971 | 35% |
| **1–2** | **Deletion candidates** | **2,997** | **54%** |

The score-5 items look like this: *How university students work on assessment tasks with generative AI*; *Developing evaluative judgement for a time of generative artificial intelligence*; *Talk is cheap: why structural assessment changes are needed for a time of GenAI*. Papers that directly address primary research domains; items I'd cite in current work without hesitation.

The score-1 items look like this: *Associations of frequent sleep insufficiency with health-related quality of life*; *Deep Learning for Community Detection: Progress, Challenges and Opportunities*; *The attitudes of therapists and physicians on the use of sex robots*. The contrast makes the point more clearly than any analysis could: a significant fraction of the library was accumulated by accident — during broader reading sessions, from colleagues' reading lists, from projects that ended years ago and were never properly cleared out.

[*Image: the score distribution table from Claude Code.*]

## What the model can't know

The scoring output is a starting shortlist, not a final verdict, and being clear about its limits matters before acting on it.

Items with no abstract score on title alone. Of the 4,460 items, 2,032 had no abstract and no DOI — the grey literature, blog posts, and policy documents that resist automatic enrichment. For these, the title is all the model has to work with. A score-1 result on an item with an ambiguous title warrants a closer look before deletion.

The model has no access to personal history with an item. A paper cited repeatedly in published work but never tagged scores identically to one never opened. Personal significance simply isn't in the data the script sees.

Grey literature scores systematically lower than peer-reviewed articles, because blog posts and policy documents typically lack the abstracts that give the model most of its signal. Score-1 items of type `blogPost` or `webpage` merit a separate pass before deletion decisions are made.

And some score-1 results may be correct-but-narrow: a technical machine learning paper saved specifically to understand a method used in one project will score low on relevance to professional education — but it was saved for a reason. The script cannot distinguish "saved for specific background reading" from "saved by accident". That distinction requires human judgement.

## What to do with the 54%

The script flags items; it does not remove them. Nothing is deleted automatically. The output is a TSV sorted by score ascending — the clearest deletion candidates at the top, ready to scan rapidly.

The review workflow has three phases. Phase 1 covers the 1,971 score-1 items. Most title-level decisions take two or three seconds. Anything uncertain gets flagged. For flagged items, the MCP comes back into the picture: ask Claude to retrieve the full item by key, read the abstract and any personal notes, and make a final call. This is exactly the Tier 3 use case — targeted, interactive, one result shaping the next action. Confirmed deletions go to Zotero's Trash rather than permanent deletion, preserving a recovery window.

Phase 2 covers the 1,026 score-2 items, with a higher threshold. The question is simple: would I ever cite this in the context of my current work? If the honest answer is "possibly, in a very different project", that's a deletion.

The 1,111 score-3 items — peripheral but legitimate — are worth keeping for now and revisiting after the first two phases are complete. A library reduced to around 2,500 items looks very different from one at 4,460, and the score-3 category may look different in that new context.

## Curation as an intellectual act

Writing the interest profile — the in-scope and out-of-scope domains — is an act of stating intellectual priorities. Not what you've accumulated, not what might be useful to someone in your general field, but what actually matters for the work you're doing now. This is [context sovereignty](link) at its most direct: a precise statement of what counts as relevant to your intellectual territory, handed to an AI system that then evaluates thousands of items against it.

The 54% that doesn't make the cut is not a judgement on those papers. It's a judgement about alignment. A paper on sleep health is not a bad paper. It simply doesn't belong in a library shaped around AI, assessment, and health professions education. The library should reflect what you're trying to understand, not the full range of things you've ever found interesting.

Curation is the same kind of intellectual act as deciding what to read next, or what to cite, or what argument to make. The AI executes it at scale. The judgement about what matters belongs to you.

## Why this matters for retrieval

The practical consequence of an undiscriminating library is diluted results. When the MCP searches and returns items, the quality of those results depends on what's in the pool. A library with 54% out-of-scope content produces noisier results than one without it — not because the search is broken, but because it's working as intended on material that doesn't warrant the effort.

Curation improves signal-to-noise at the data level, before any retrieval tool is involved. The metadata enrichment work from the previous post becomes more valuable applied to a focused collection. The library that remains — the score 3–5 items — is the one worth investing in: adding manual tags, writing personal notes, connecting items to vault notes and ongoing arguments.

With a cleaner, more focused library in place, the question shifts to what else the system can connect to. The Zotero library holds the literature. The thinking done with that literature lives somewhere else entirely.
