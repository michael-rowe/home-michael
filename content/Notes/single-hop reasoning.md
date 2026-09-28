---
title: Single-hop reasoning
description: >-
  Answering a question in one step, by retrieving the passages most similar to
  it and generating a response from them. It's the default pattern in RAG
  systems, reliable when the answer sits in one place and weak when it has to
  be assembled from several.
meta-description: "Single-hop vs multi-hop reasoning: why AI retrieval answers direct questions well and struggles when the answer means connecting several sources."
aliases:
  - single-step reasoning
  - direct retrieval
type: note
author: '[[Michael Rowe]]'
created: 2026-02-10
updated: 2026-09-28
draft: false
tags:
  - reasoning
  - information-retrieval
  - retrieval-augmented-generation
category:
  - Technology
related:
  - '[[Notes/multi-hop reasoning]]'
  - '[[Notes/retrieval augmented generation]]'
  - '[[Notes/vector database]]'
  - '[[Notes/embeddings]]'
  - '[[Notes/knowledge graph]]'
builds_on:
  - '[[embeddings]]'
  - '[[vector database]]'
leads_to: null
contradicts: null
source: ''
source_url: ''
keyphrase: "single-hop vs multi-hop reasoning"
linkedin:
reviewed:
  - note_writer
  - writing_style
  - SEO_optimiser
  - copy_editor

---

> [!info] Single-hop reasoning finds answers that already exist
> Most AI retrieval works like a sophisticated search engine: you ask a question, the system finds the most relevant passages, and the model generates a response from them. That's single-hop reasoning, one step from question to answer. It works well when the answer exists somewhere in your documents and breaks down when answering means connecting ideas across several sources.

## Single-hop reasoning

**One-sentence definition:** Single-hop reasoning is a retrieval pattern in which a system finds content statistically similar to the query and generates a response from that content, without following relationships between concepts.

Single-hop reasoning is the default pattern in [[Notes/retrieval augmented generation|retrieval augmented generation]] systems. The system converts your question into an [[Notes/embeddings|embedding]], searches a [[Notes/vector database|vector database]] for similar passages, and generates a response from what it finds: one hop, from the query to the relevant content (Teki, 2025).

It's effective for direct questions. Ask what the GMC[^gmc] says about fitness to practise, and the system finds the relevant passages and summarises them accurately. Ask for the key features of problem-based learning, and it retrieves descriptions of PBL and synthesises a clear answer. In both cases the answer already exists in the documents, written down in one place, and the system's job is to find it.

### Where single-hop reasoning fails

The limitation shows with questions that need synthesis. "Which criticisms of competency-based assessment also apply to portfolio assessment?" needs the relationship between two frameworks worked out, and passages about each framework on its own don't supply it. Similarity search finds text that resembles the question, which isn't always text that answers it. The system returns relevant passages and leaves the inference between them undone, or leaves the model to guess at it.

Questions like that need [[Notes/multi-hop reasoning|multi-hop reasoning]], which follows a chain of relationships from one concept to the next, usually through a [[Notes/knowledge graph|knowledge graph]] where those relationships have been recorded.

---

## Sources

- Teki, S. (2025). *Context engineering: A framework for robust generative AI systems*. Sundeep Teki. https://www.sundeepteki.org/blog/context-engineering-a-framework-for-robust-generative-ai-systems

---

## Notes

Single-hop and multi-hop reasoning are suited to different tasks, and many systems need both. How sophisticated the reasoning can be depends on how sophisticated the underlying knowledge structure is.

[^gmc]: **GMC (General Medical Council)** — the regulator for doctors in the UK, which sets the standards doctors must meet and investigates concerns about their fitness to practise. The Nursing and Midwifery Council and the Health and Care Professions Council do the same for other professions. [Wikipedia](https://en.wikipedia.org/wiki/General_Medical_Council)
