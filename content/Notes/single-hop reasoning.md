---
title: Single-hop reasoning
description: >-
  Direct question-answer retrieval based on statistical similarity, the default
  reasoning pattern in RAG systems
aliases:
  - single-step reasoning
  - direct retrieval
type: note
author: '[[Michael Rowe]]'
created: 2026-02-10T00:00:00.000Z
updated: 2026-02-10T00:00:00.000Z
needs_review: false
tags:
  - reasoning
  - information-retrieval
category: AI and technology
related:
  - '[[multi-hop reasoning]]'
  - '[[retrieval augmented generation]]'
  - '[[vector database]]'
  - '[[prompt engineering]]'
  - '[[embeddings]]'
builds_on:
  - '[[embeddings]]'
  - '[[vector database]]'
leads_to: null
contradicts: null
source: ''
source_url: ''
---

> [!tip] Finding answers versus constructing them
> Most AI retrieval works like a sophisticated search engine: you ask a question, the system finds the most relevant passages, and the model generates a response from those passages. This is single-hop reasoning -- one step from question to answer. It works well when the answer exists somewhere in your documents. It fails when answering requires connecting ideas across multiple sources.

## Single-hop reasoning

**One-sentence definition:** A direct question-answer retrieval pattern where a system finds content statistically similar to the query and generates a response from that content, without traversing relationships between concepts.

Single-hop reasoning is the default pattern in [[retrieval augmented generation]] systems. You ask a question. The system converts it to an [[embeddings|embedding]], searches a [[vector database]] for similar passages, and generates a response from what it finds. One hop: from query to relevant content.

This is remarkably effective for direct questions. "What does the GMC say about fitness to practise?" -- the system finds the relevant passages and summarises them accurately. "What are the key features of problem-based learning?" -- it retrieves descriptions of PBL and synthesises a clear answer.

## Where single-hop fails

The limitation becomes apparent with questions that require synthesis. "Which criticisms of competency-based assessment also apply to portfolio assessment?" demands more than retrieval -- it requires traversing the relationship between two frameworks, not just finding passages about each. Single-hop reasoning returns relevant passages. It cannot construct the inference path between them.

When questions require that kind of reasoning across connected concepts, [[multi-hop reasoning]] is needed.

---

## Sources

- Teki, S. (2025). Context Engineering: The 2025 Guide to Advanced AI Strategy and RAG.

---

## Notes

Single-hop and [[multi-hop reasoning]] are not competing approaches but different capabilities suited to different tasks. The sophistication of the reasoning depends on the sophistication of the underlying knowledge structure.
