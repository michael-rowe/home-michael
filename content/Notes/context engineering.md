---
title: Context engineering
description: A system-level discipline focused on building dynamic, state-aware information ecosystems for AI agents
aliases:
  - context design
type: note
author: "[[Michael Rowe]]"
created: 2026-01-08
updated: 2026-09-18
draft: false
keyphrase: "context engineering for AI systems"
tags:
  - context-engineering
  - generative-ai
  - information-architecture
  - knowledge-graphs
category:
  - Technology
  - Information management
related:
  - "[[Notes/prompt-engineering]]"
  - "[[Notes/knowledge-graph]]"
  - "[[Notes/graphRAG]]"
  - "[[Notes/multi-hop-reasoning]]"
  - "[[Notes/retrieval-augmented-generation]]"
  - "[[Notes/model-context-protocol]]"
builds_on:
  - "[[prompt engineering]]"
leads_to:
  - agent
contradicts:
reviewed:
  - writing_style
linkedin:

---

> [!info] Context is king
> Capable models underperform when what they're given is incomplete or badly structured. [[Notes/prompt-engineering|Prompt engineering]] improves what you say to a model; context engineering improves what the model knows about your work, and that second difference turns out to matter more.

## Context engineering

**One-sentence definition:** The process of building dynamic systems that provide large language models with the information, structure, and connections they need to reason effectively about your work.

When scholars find AI tools shallow or generic, the problem is usually the context rather than the model. A general-purpose assistant has no access to your theoretical frameworks, your methodological commitments, or the relationships between concepts you've worked out over years, so it can't engage with your work in any depth. It doesn't know how your ideas connect.

Context engineering addresses that by making your intellectual infrastructure computationally accessible — the frameworks, connections, and commitments you've already built. The gain comes from structuring knowledge so that a model can reason about relationships, not from writing a better query.

## From prompts to systems

[[Notes/prompt-engineering|Prompt engineering]] emerged as the craft of writing effective queries: choosing words, providing examples, structuring requests. It's useful, and it's limited to optimising one interaction at a time. Context engineering is a shift from that kind of local optimisation to systematic architecture.

The distinction matters because academic work isn't a series of isolated tasks to be tuned one prompt at a time. It's an interconnected body of knowledge where understanding depends on grasping how ideas relate, and prompt engineering treats each query as independent while context engineering treats the whole corpus as a structured system.

The difference shows up in the answers. Ask "what are the key debates about social constructivism?" with a well-written prompt and you get a competent overview. Ask the same thing of a system that knows your theoretical position, your previous work on constructivism, your objections to particular approaches, and how constructivism sits against the other frameworks you engage with, and you get something closer to intellectual partnership than to an encyclopaedia entry.

## What context engineering includes

Context engineering covers the full range of techniques for shaping what a system knows and how it reasons. Promptingguide.ai (2025) catalogues the components:

- **Prompt and instruction design**: tuning system prompts, structuring inputs and outputs (delimiters, JSON schema), managing dynamic elements such as user inputs and date/time
- **Retrieval and knowledge preparation**: searching and preparing relevant knowledge ([[retrieval augmented generation|RAG]]), query augmentation, short-term memory (managing conversational state), long-term memory via [[vector database|vector]] or [[graph database|graph]] stores
- **Demonstrations**: preparing and optimising few-shot examples that show the model how to perform a task
- **Agentic scaffolding**: tool definitions and instructions, prompt chains, and orchestration logic for [[multi-hop reasoning|multi-step systems]]

That scope clarifies how the two relate. Prompt engineering is one component of context engineering, the craft of writing effective individual instructions, while context engineering designs the information architecture that shapes every interaction.

## How it actually works

Context engineering relies on [[knowledge graph]]s rather than [[vector database]]s, and the technical distinction has consequences.

Vector databases store text as embeddings, mathematical representations that cluster statistically similar content. Query for "social constructivism debates" and you'll find passages discussing social constructivism debates. Query for something that requires synthesis across several sources and the system struggles, because similarity matching can't construct a chain of inference.

Knowledge graphs store entities and the relationships between them: not simply that Paper A discusses constructivism, but that Paper A critiques Paper B's methodological assumptions, that those assumptions reappear in Paper C's framework, and that Paper C shaped your thinking in Paper D. Explicit relationships of that kind are what make [[multi-hop reasoning]] possible.

This is also why [[graphRAG]] matters: it automates knowledge graph construction from documents you already hold, extracting entities and relationships at scale. You can work from curated knowledge, meaning the links you've already built in your notes, or automate extraction from unstructured sources such as a PDF library. Automated extraction refined by scholarly judgement tends to work better than either on its own.

## What AI can join in with

Context engineering changes what AI can take part in. Synthesising across sources is the obvious case, and [[Notes/multi-hop reasoning|multi-hop reasoning]] sets out how that works; three further shifts matter as much.

**Research development** that reflects your theoretical commitments. A system that knows your position on key debates, your methodological preferences, and the arguments you're currently making can offer substantive feedback rather than generic suggestions.

**Writing support** that holds your voice. When the system knows how you build an argument, which authors you engage with, and which concepts carry weight in your work, what it drafts sounds like you rather than like every other academic.

**Teaching materials** that draw on what you've curated — your annotations, the connections you've made between readings, the pedagogical judgements accumulated over years of teaching.

You've already built a personal knowledge system, in Zotero or Obsidian or a folder of annotated PDFs. Context engineering makes that investment legible to a machine, so the linked notes and conceptual maps become infrastructure for reasoning rather than material you alone can read.

## The investment question

Context engineering asks for more upfront work than prompt engineering. Building explicit relationships between concepts, structuring graphs, and refining what automated extraction produces all take time, and the question is whether that buys richer intellectual partnership.

It depends on what you need the system to do. For isolated tasks — summarise this paper, draft a methods section — prompt engineering is enough. For sustained scholarly work where your intellectual position is the thing that matters, context engineering becomes the difference between a tool and a collaborator.

There's a reframing worth making here. Every hour spent connecting ideas and making relationships explicit extends what a system can reason about, and most scholars are already spending some of those hours through ordinary practice. The real question is whether making those connections a little more explicit would repay the effort for you as well as for the machine.

## Voice, ownership, and what resists representation

How do we hold on to scholarly voice and intellectual ownership when a system has deep access to our thinking? Does externalising knowledge structures change how we think? What happens to tacit knowledge that resists explicit representation? How should contested or shifting relationships between concepts be handled?

None of these have settled answers. Context engineering is valuable precisely because scholarship is relational — we build on predecessors, respond to critics, synthesise across traditions — but whether making those relationships computationally explicit enhances scholarly thinking or constrains it remains open.

---

## Sources

- Promptingguide.ai. (2025). Context Engineering Guide.
- Chalef, D. (2025). What is Context Engineering, Anyway?
- Chase, H. (2025). The rise of context engineering.
- King, S. (2025). Context Engineering: Why Feeding AI the Right Context Matters.
- Teki, S. (2025). Context Engineering: The 2025 Guide to Advanced AI Strategy and RAG.
- Yan, W. (2025). Don't Build Multi-Agents.

---

## Notes

The shift from prompt engineering to context engineering follows a pattern that recurs in technology: from manual optimisation to systematic design, from individual interactions to persistent systems, from treating AI as a tool to treating it as something that needs structured knowledge before it can reason well.
