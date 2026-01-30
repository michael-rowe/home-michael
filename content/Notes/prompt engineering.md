---
title: Prompt engineering
description: Using natural language to produce desired responses from large language models through iterative refinement
aliases:
  - prompting
  - prompt design
type: note
author: "[[Michael Rowe]]"
created: 2026-01-09
updated: 2026-01-30
status: draft
needs_review: false
tags:
  - generative-ai
  - language-model
  - prompt-engineering
  - skills
category: "artificial intelligence"
related:
  - "[[context engineering]]"
  - "[[problem formulation]]"
  - "[[writing effective prompts for generative AI]]"
  - "[[visual literacy]]"
  - "[[media literacy]]"
builds_on:
leads_to:
  - "[[context engineering]]"
contradicts:
source: ""
source_url: ""
---

## Definition

**Prompt engineering** (noun): The process of using natural language to produce a desired response from a large language model (LLM) through iterative refinement.

Prompt engineering focuses on crafting optimal textual input by selecting appropriate words, phrases, sentence structures, and punctuation. It requires both linguistic proficiency and understanding of the specific AI tool being used.

Key characteristics:
- Iterative refinement of AI-generated outputs
- Relies on retrieving text based on statistical similarity (embeddings)
- Establishes the boundaries within which AI interactions take place

## Context and background

Prompt engineering emerged alongside the public release of large language models like GPT and DALL-E. Early enthusiasm led to predictions that "prompt engineer" would become a distinct occupation. However, as Matt Turck observed in 2023, "Being 'good at prompt engineering' is like being 'good at Googling' in 2003"—a useful skill, but not a career in itself.

The practice sits within broader discourses about AI literacy, digital media literacy, and human-AI collaboration. As models improve and auto-prompting capabilities develop, the emphasis is shifting from prompt crafting toward problem formulation and context engineering.

## Related concepts

*[[Context engineering]]*: An evolution of prompt engineering that uses structured, relationship-aware knowledge representations rather than flat text retrieval. Enables multi-hop reasoning across connected concepts.

*[[Problem formulation]]*: The ability to clearly define what problem generative AI should solve. Increasingly seen as more valuable than prompt engineering skills alone.

*Auto-prompting*: Automated systems that generate optimal prompts, potentially reducing the need for human prompt engineering expertise.

## Distinctive characteristics

Prompt engineering differs from context engineering in fundamental ways:

| Prompt engineering | Context engineering |
|-------------------|---------------------|
| Linear flow: Query → Search → Retrieve → Generate | Graph-aware flow: Query → Reason → Traverse → Synthesise |
| Flat information (text chunks based on similarity) | Structured knowledge (entities, relationships, hierarchies) |
| Single-hop reasoning | Multi-hop reasoning |
| Core philosophy: "Find information that appears contextually similar" | Core philosophy: "Understand and reason over explicit relationships" |

## Applications

Approach language model prompting as a skilful conversation with a domain expert, not as a search query. Many people provide a few keywords and expect "the answer", but generative AI is not search. Your role is to extract valuable expertise from the model through dialogue.

Common prompting techniques include:
- Few-shot prompting
- Zero-shot prompting
- Chain-of-thought prompting
- Structured frameworks like CIDI (Context, Instruction, Details, Input)

Choose prompt engineering when you need:
- Simple question-answering
- Fast deployment
- Limited implementation resources
- Mature, stable knowledge domains

## Implications

Prompt engineering skills are fundamentally management skills: clearly understanding the task; explaining it to the AI; providing useful feedback to improve outputs; and generalising lessons into reusable processes.

This framing suggests that effective prompting draws on the same competencies as effective delegation and collaboration—skills that transfer across many contexts beyond AI interaction.

## Questions and tensions

- Will auto-prompting make human prompt engineering obsolete?
- Is the refinement process itself a form of creative practice, or merely technical optimisation?
- How do we balance prompt engineering skills with deeper problem formulation abilities?

## My thinking

The most significant insight here is Ethan Mollick's observation that prompt engineering is essentially management. This reframes it from a technical skill to a transferable competency. The emphasis should be on developing problem formulation abilities—understanding what you actually need from an AI system—rather than memorising prompt templates.

The evolution toward context engineering also suggests that prompt engineering represents an early, relatively crude approach to AI interaction that will be superseded by more sophisticated methods involving structured knowledge representation.

---

## Sources

- Acar, O.A. (2023). AI Prompt Engineering Isn't the Future. Harvard Business Review. https://hbr.org/2023/06/ai-prompt-engineering-isnt-the-future
- Hardman, D. P. (2023). Structured Prompting for Educators. Dr Phil's Newsletter.
- Mollick, E. (2023). Now is the time for grimoires. One Useful Thing.
- Mollick, E. (2025). LinkedIn post on prompt engineering as management. https://www.linkedin.com/posts/emollick_many-of-the-most-important-prompt-engineering-activity-7328409150101622786-Y3Gy
- Mollick, E. and Mollick, L. (2023). Practical AI for Instructors and Students Part 3: Prompting AI.
- Roose, K. (2022). Cycles of computing, now and next. a16z Podcast.
- Turck, M. (2023). Tweet on prompt engineering. https://twitter.com/mattturck/status/1645842364450078738

---

## Notes

Consolidated from multiple atomic notes on prompt engineering concepts. Original notes covered: definition, importance of prompting, boundaries established by prompts, occupation viability, comparison with context engineering, and the management framing.
