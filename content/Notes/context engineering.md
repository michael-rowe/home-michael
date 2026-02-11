---
title: Context engineering
description: >-
  A system-level discipline focused on building dynamic, state-aware information
  ecosystems for AI agents
aliases:
  - context design
type: note
author: '[[Michael Rowe]]'
created: 2026-01-08T00:00:00.000Z
updated: 2026-01-30T00:00:00.000Z
needs_review: false
tags:
  - context-engineering
  - generative-ai
  - large language models
  - information-architecture
  - knowledge-graphs
category:
  - AI and technology
related:
  - '[[prompt engineering]]'
  - '[[knowledge graph]]'
  - '[[graphRAG]]'
  - '[[multi-hop reasoning]]'
  - '[[retrieval augmented generation]]'
  - '[[model-context-protocol]]'
builds_on:
  - '[[prompt engineering]]'
leads_to:
  - AI agents
contradicts: null
source: ''
source_url: ''
---

> [!tip] Context is king
> The most capable AI models consistently underperform not because of their limitations but because they're provided with incomplete or poorly structured context. [[Prompt engineering]] optimises what you say to AI. Context engineering optimises what AI knows about your work—and that difference matters more than most people realise.

## Context engineering

**One-sentence definition:** The process of building dynamic systems that provide large language models with the information, structure, and connections they need to reason effectively about your work.

When scholars complain that AI tools feel shallow or generic, the problem isn't usually the model—it's the context. Generic AI lacks access to your theoretical frameworks, your methodological commitments, the relationships between concepts you've developed over years. It cannot engage meaningfully with your work because it doesn't know how your ideas connect.

Context engineering solves this by making your intellectual infrastructure—the frameworks, connections, and commitments you've built—computationally accessible. It's not about writing better prompts. It's about structuring knowledge so AI can reason about relationships rather than merely retrieve similar text.

## From prompts to systems

[[Prompt engineering]] emerged as the craft of writing effective queries—choosing words, providing examples, structuring requests. Useful, but limited to optimising individual interactions. Context engineering represents a qualitative shift from individual optimisation to systematic architecture.

The distinction matters because academic work isn't a series of isolated tasks to be optimised one prompt at a time. It's an interconnected body of knowledge where understanding depends on grasping how ideas relate. Prompt engineering treats each query as independent. Context engineering treats your work as a structured knowledge system.

Consider the difference: with prompt engineering, you ask "what are the key debates about social constructivism?" and get a generic overview. With context engineering, AI that understands your theoretical position, your previous work on constructivism, your critiques of particular approaches, and how constructivism relates to other frameworks you engage with—that AI can offer substantive intellectual partnership rather than encyclopaedic summaries.

## How it actually works

Context engineering relies on [[knowledge graph]]s rather than [[vector database]]s. This technical distinction has profound implications:

Vector databases store text as embeddings—mathematical representations that cluster statistically similar content. Query for "social constructivism debates" and you'll find passages discussing social constructivism debates. Query for something requiring synthesis across multiple sources, and the system struggles because similarity matching cannot construct chains of inference.

Knowledge graphs store entities and relationships. Not just that Paper A discusses constructivism, but that Paper A critiques Paper B's methodological assumptions, which also appear in Paper C's framework, which influenced your thinking in Paper D. These explicit relationships enable [[multi-hop reasoning]]—following chains of connection rather than matching statistical patterns.

This is why [[graphRAG]] matters: it automates knowledge graph construction from your existing documents, extracting entities and relationships at scale. You can work with curated knowledge (the links you've already built in your notes) or automate extraction from unstructured documents (your PDF library). The hybrid approach—automated extraction refined by scholarly judgement—often works best.

## What this enables for scholarship

Context engineering transforms how AI can participate in scholarly work:

**Literature synthesis** that traverses intellectual lineages rather than keyword matches. "Which methodological critiques of phenomenology also apply to grounded theory?" requires understanding both frameworks, identifying specific critiques, recognising when they share methodological foundations. That's not retrieval. That's inference across connected concepts.

**Research development** that reflects your theoretical commitments. AI that understands your position on key debates, your methodological preferences, your ongoing arguments can offer substantive feedback rather than generic suggestions.

**Writing support** that maintains your voice. When AI understands how you build arguments, which authors you engage with, which concepts matter to your work, it can draft text that sounds like you rather than like every other academic.

**Teaching materials** that draw on your curated knowledge—your annotations, your connections between readings, your pedagogical insights accumulated over years of teaching.

The central insight: you've already built a personal knowledge system, whether in Zotero, Obsidian, or annotated PDFs. Context engineering makes that investment legible to AI. The linked notes, the annotated sources, the conceptual maps—these become infrastructure for AI reasoning rather than merely personal reference.

## The investment question

Context engineering requires more upfront work than prompt engineering. Building explicit relationships between concepts, structuring knowledge graphs, refining extracted relationships—this takes time. The question is whether the investment pays off in richer intellectual partnership.

The answer depends on what you need AI to do. For isolated tasks—"summarise this paper," "write a methods section"—prompt engineering suffices. For ongoing scholarly work where understanding your intellectual position matters, context engineering becomes essential.

Think of it this way: every hour spent connecting ideas, making relationships explicit, building knowledge structures extends what AI can reason about. The question isn't whether to invest that time but whether you're investing it anyway through your normal scholarly practice—and whether making those connections more explicit would benefit both you and AI.

## What remains uncertain

How do we maintain scholarly voice and intellectual ownership when AI has deep access to our thinking? Does externalising knowledge structures change how we think? What happens to tacit knowledge that resists explicit representation? How do we handle contested or evolving relationships between concepts?

These questions don't have settled answers. Context engineering is valuable precisely because scholarship is relational—we build on predecessors, respond to critics, synthesise across traditions. But the extent to which making these relationships computationally explicit enhances or constrains scholarly thinking remains an open question.

---

## Sources

- Chalef, D. (2025). What is Context Engineering, Anyway?
- Chase, H. (2025). The rise of context engineering.
- King, S. (2025). Context Engineering: Why Feeding AI the Right Context Matters.
- Teki, S. (2025). Context Engineering: The 2025 Guide to Advanced AI Strategy and RAG.
- Yan, W. (2025). Don't Build Multi-Agents.

---

## Notes

The shift from prompt engineering to context engineering mirrors broader patterns in technology: from manual optimisation to systematic design, from individual interactions to persistent systems, from treating AI as a tool to treating it as a partner that requires structured knowledge to reason effectively.
