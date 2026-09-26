---
title: Context engineering
description: "How context engineering differs from prompt engineering: building the knowledge and structure a language model needs to reason well about your work."
aliases:
  - context design
type: note
author: "[[Michael Rowe]]"
created: 2026-01-08
updated: 2026-09-24
draft: false
keyphrase: "context engineering vs prompt engineering"
tags:
  - context-engineering
  - prompt-engineering
  - generative-ai
  - information-architecture
  - knowledge-graphs
category:
  - Technology
  - Information management
related:
  - "[[Notes/prompt engineering]]"
  - "[[Notes/knowledge graph]]"
  - "[[Notes/graphRAG]]"
  - "[[Notes/multi-hop reasoning]]"
  - "[[Notes/retrieval augmented generation]]"
  - "[[Notes/model context protocol]]"
  - "[[Notes/system prompt]]"
  - "[[Notes/agentic workflows]]"
  - "[[Notes/context sovereignty]]"
builds_on:
  - "[[prompt engineering]]"
leads_to:
  - agent
contradicts:
reviewed:
  - note_writer
  - writing_style
  - SEO_optimiser
  - copy_editor
linkedin:

---

> [!info] What a model knows matters more than how you ask
> Capable models underperform when what they're given is incomplete or badly structured. [[Notes/prompt engineering|Prompt engineering]] improves what you say to a model; context engineering improves what the model knows about your work, and the second matters more.

## Context engineering

**One-sentence definition:** The process of building dynamic systems that provide [[Notes/large language models|large language models]] with the information, structure, and connections they need to reason effectively about your work.

When scholars find AI tools shallow or generic, the problem is usually the context rather than the model. A general-purpose assistant has no access to your theoretical frameworks, your methodological commitments, or the relationships between concepts you've worked out over years, so it can't engage with your work in any depth.

Context engineering addresses that by giving the model the frameworks, connections, and commitments you've already built, in a form it can reason over. Most of the gain comes from how that knowledge is structured, which is why a better-worded query only gets you so far.

## Context engineering vs prompt engineering

[[Notes/prompt engineering|Prompt engineering]] emerged as the craft of writing effective queries: choosing words, providing examples, structuring requests. It's useful, and it's limited to optimising one interaction at a time. Context engineering moves from that kind of local optimisation to designing the system every interaction runs inside.

The distinction matters because academic work isn't a series of isolated tasks to be tuned one prompt at a time. It's an interconnected body of knowledge where understanding depends on grasping how ideas relate. Prompt engineering treats each query as independent; context engineering treats the whole corpus as a structured system.

The difference shows up in the answers. Ask "what are the key debates about social constructivism?" with a well-written prompt and you get a competent overview. Ask the same thing of a system that knows your theoretical position, your previous work on constructivism, your objections to particular approaches, and how constructivism sits against the other frameworks you engage with, and you get something closer to intellectual partnership than to an encyclopaedia entry.

## What context engineering includes

Context engineering covers the full range of techniques for shaping what a system knows and how it reasons. Promptingguide.ai (2025) catalogues the components:

- **Prompt and instruction design**: tuning system prompts, structuring inputs and outputs (delimiters,[^delimiters] JSON schema[^json-schema]), managing dynamic elements such as user inputs and date/time
- **Retrieval and knowledge preparation**: searching and preparing relevant knowledge ([[Notes/retrieval augmented generation|RAG]]), query augmentation,[^query-augmentation] short-term memory (managing conversational state), long-term memory via [[Notes/vector database|vector]] or [[Notes/graph database|graph]] stores
- **Demonstrations**: preparing and optimising few-shot examples[^few-shot] that show the model how to perform a task
- **Agentic scaffolding**: tool definitions and instructions, prompt chains, and orchestration logic for [[Notes/agentic workflows|multi-step systems]]

Prompt engineering sits inside the first of these components. What each of these components means for decisions about AI-supported learning is the subject of [[Posts/2026-02-14-context-engineering-for-educators|Context engineering for educators]].

## Vector databases and knowledge graphs

Most retrieval in context engineering runs on [[Notes/vector database|vector databases]], while much of what a well-engineered context can do beyond that depends on knowledge graphs. A vector database stores text as [[Notes/embeddings|embeddings]] and finds passages that resemble the query, which works until the answer has to be assembled from several sources. A knowledge graph stores entities and the typed relationships between them, so a system can follow a chain of inference from one to the next, which is what [[Notes/multi-hop reasoning|multi-hop reasoning]] needs. The [[Notes/knowledge graph|knowledge graph]] note sets out the difference in full.

This is also why [[Notes/graphRAG|GraphRAG]] matters: it automates knowledge graph construction from documents you already hold, extracting entities and relationships at scale. You can work from curated knowledge, meaning the links you've already built in your notes, or automate extraction from unstructured sources such as a PDF library. Automated extraction refined by scholarly judgement works better than either on its own.

A programme team would see the same difference. Ask a general assistant where clinical reasoning is developed across a physiotherapy programme and you'll get a sensible account of how programmes usually do it. Give it the module descriptors, the placement assessment forms, and last year's external examiner reports, with the links between them made explicit, and it can tell you which modules claim to teach clinical reasoning, which placements assess it, and where an outcome is assessed in year two without being taught anywhere before it. That last answer takes three hops, from outcome to module to assessment to year, and a similarity search across the same documents won't produce it.

## What AI can join in with

Context engineering changes what AI can take part in. Synthesising across sources is the obvious case, and [[Notes/multi-hop reasoning|multi-hop reasoning]] sets out how that works; three further shifts matter as much.

**Research development** that reflects your theoretical commitments. A system that knows your position on key debates, your methodological preferences, and the arguments you're currently making can give feedback that engages with those arguments directly.

**Writing support** that holds your voice. When the system knows how you build an argument, which authors you engage with, and which concepts carry weight in your work, what it drafts starts to sound like you.

**Teaching materials** that draw on what you've curated — your annotations, the connections you've made between readings, the pedagogical judgements accumulated over years of teaching.

You've already built a personal knowledge system, in Zotero or Obsidian or a folder of annotated PDFs. Context engineering makes that investment legible to a machine, so the linked notes and conceptual maps become infrastructure for reasoning rather than material you alone can read.

## The investment question

Context engineering asks for more upfront work than prompt engineering. Building explicit relationships between concepts, structuring graphs, and refining what automated extraction produces all take time.

Whether that time is well spent depends on what you need the system to do. For isolated tasks — summarise this paper, draft a methods section — prompt engineering is enough. For sustained scholarly work where your intellectual position is the thing that matters, the upfront work is what lets the system engage with that position at all.

Every hour spent connecting ideas and making relationships explicit extends what a system can reason about, and most scholars are already spending some of those hours through ordinary practice. So the question is whether making those connections a little more explicit would repay the effort for you as well as for the machine.

## Voice, ownership, and what resists representation

How do we hold on to scholarly voice and intellectual ownership when a system has deep access to our thinking? Does externalising knowledge structures change how we think? What happens to tacit knowledge that resists explicit representation? How should contested or shifting relationships between concepts be handled?

None of these have settled answers. Context engineering is valuable precisely because scholarship is relational — we build on predecessors, respond to critics, synthesise across traditions — but whether making those relationships computationally explicit enhances scholarly thinking or constrains it remains open.

[^delimiters]: **Delimiters**: markers such as `###`, triple quotes or XML-style tags that separate the parts of a prompt, so the model can tell the instructions apart from the material it's being asked to work on. [Wikipedia](https://en.wikipedia.org/wiki/Delimiter)
[^json-schema]: **JSON schema**: a formal description of the shape a piece of structured data must take (which fields, of what type). Giving a model a schema is how you get output a program can read reliably, such as a list of learning outcomes with a level attached to each. [Wikipedia: JSON](https://en.wikipedia.org/wiki/JSON)
[^query-augmentation]: **Query augmentation**: rewriting or expanding a question before it's used to search, adding synonyms or related terms, so that retrieval finds relevant material the original wording would have missed. [Wikipedia](https://en.wikipedia.org/wiki/Query_expansion)
[^few-shot]: **Few-shot examples**: a handful of worked examples included in the prompt, showing the model what a good answer looks like before it's asked for one. Three marked pieces of reflective writing with feedback, for instance, before asking for feedback on a fourth. [Wikipedia](https://en.wikipedia.org/wiki/Prompt_engineering)

---

## Sources

- Chalef, D. (2025, June 26). *What is context engineering, anyway?* Zep. https://blog.getzep.com/what-is-context-engineering/
- Chase, H. (2025, June 23). *The rise of "context engineering"*. LangChain. https://www.langchain.com/blog/the-rise-of-context-engineering
- King, S. (2025). *Context engineering: Why feeding AI the right context matters*. Inspired Nonsense. https://inspirednonsense.com/context-engineering-why-feeding-ai-the-right-context-matters-353e8f87d6d3
- Promptingguide.ai. (2025). *Context engineering guide*. https://www.promptingguide.ai/guides/context-engineering-guide
- Teki, S. (2025). *Context engineering: A framework for robust generative AI systems*. Sundeep Teki. https://www.sundeepteki.org/blog/context-engineering-a-framework-for-robust-generative-ai-systems
- Yan, W. (2025). *Don't build multi-agents*. Cognition. https://cognition.com/blog/dont-build-multi-agents

---

## Notes

The move from prompt engineering to context engineering repeats a familiar pattern in technology, where hand-tuning individual interactions gives way to designing the system those interactions run on. With AI, that system is the structured knowledge a model needs before it can reason well about anything particular to you.
