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
  - prompt-engineering
  - skills
category:
related:
  - "[[context engineering]]"
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

## Distinctive characteristics

Prompt engineering differs from [[context engineering]] in fundamental ways:

| Prompt engineering | Context engineering |
|-------------------|---------------------|
| Linear flow: Query → Search → Retrieve → Generate | Graph-aware flow: Query → Reason → Traverse → Synthesise |
| Flat information (text chunks based on similarity) | Structured knowledge (entities, relationships, hierarchies) |
| Single-hop reasoning | Multi-hop reasoning |
| Core philosophy: "Find information that appears contextually similar" | Core philosophy: "Understand and reason over explicit relationships" |

## Applications

Approach language model prompting as a skilful conversation with a domain expert, not as a search query. Many people provide a few keywords and expect "the answer", but generative AI is not search. Your role is to extract valuable expertise from the model through dialogue.

Common prompting techniques include:
- Few-shot prompting (providing examples of desired outputs)
- Zero-shot prompting (direct instruction without examples)
- Chain-of-thought prompting (requesting step-by-step reasoning)
- Structured frameworks like CIDI (Context, Instruction, Details, Input)

### For academic work

Prompt engineering supports everyday scholarly tasks:
- **Literature exploration**: "What are the key debates in [field] regarding [topic]? What methodological approaches dominate?"
- **Writing assistance**: Drafting abstracts, summarising arguments, identifying gaps in reasoning
- **Teaching preparation**: Generating discussion questions, creating worked examples, developing assessment rubrics
- **Peer review**: Using AI as a first reader to identify unclear arguments or missing citations

The limitation for scholarship is that prompt engineering treats your research as isolated queries rather than an interconnected body of knowledge. Each conversation starts fresh, without awareness of your theoretical commitments, methodological preferences, or the relationships between concepts you've developed over years of work.

## Implications

Prompt engineering skills are fundamentally management skills: clearly understanding the task; explaining it to the AI; providing useful feedback to improve outputs; and generalising lessons into reusable processes.

For academics, this maps directly to skills already developed through supervising research students and collaborating with colleagues; articulating what you need, providing context, and iterating toward better outputs. These skills [[qualifications for AI literacy#1. Literacy requires practice, not just instruction|develop through practice]] and the *Substitution* stage of the [[Courses/AI literacy/index|AI literacy course]] may help to learn their application across content creation, reading, and writing.

## Questions and tensions

- How do we maintain intellectual ownership when AI contributes to ideation?
- Does reliance on prompt engineering flatten the complexity of scholarly thinking?
- How do we teach students to use these tools without undermining their development of disciplinary expertise?

## My thinking

The most significant insight is Ethan Mollick's observation that prompt engineering is essentially management. For academics, this is both empowering and limiting. It's empowering because scholars already have the skills—articulating complex ideas, providing context, iterating on drafts. It's limiting because academic knowledge work isn't a series of isolated tasks to be managed; it's a web of interconnected ideas that prompt engineering cannot represent.

This is why [[context engineering]] matters more than [[prompt engineering]] for serious scholarly work; it moves beyond task-by-task interactions toward systems that understand how your ideas connect.

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
