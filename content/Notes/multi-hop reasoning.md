---
title: Multi-hop reasoning
description: >-
  AI reasoning capability that draws conclusions by traversing multiple
  connected concepts
aliases:
  - multi-step reasoning
  - chain reasoning
type: note
author: '[[Michael Rowe]]'
created: 2026-01-30
updated: 2026-09-18
needs_review: false
tags:
  - reasoning
  - knowledge-graphs
  - context-engineering
category: Technology
related:
  - '[[Notes/context-engineering]]'
  - '[[Notes/knowledge-graph]]'
  - '[[Notes/graphRAG]]'
  - '[[Notes/prompt-engineering]]'
builds_on:
  - '[[knowledge graph]]'
leads_to: null
contradicts: null
source: ''
source_url: ''
reviewed:
  - writing_style
linkedin:

---

> [!info] From retrieval to inference
> A retrieval system can only hand back passages. Ask it which critiques of one theory also apply to another and it will find text about both, then leave the comparison to you. Multi-hop reasoning follows the connections instead, which is what makes it useful for work that depends on synthesis rather than lookup.

## Multi-hop reasoning

**One-sentence definition:** The ability of an AI system to draw conclusions by traversing multiple connected concepts or relationships, rather than relying on direct question-answer patterns.

Ask a retrieval system "which methodological critiques of Theory A also apply to Theory B?" and it searches for text that is statistically similar to the query. It will find passages discussing Theory A and passages discussing Theory B, and it almost certainly won't answer the question, which requires understanding the critiques of Theory A, identifying their methodological foundations, and recognising when those same foundations turn up in critiques of Theory B. The work there is inference across connected concepts, and similarity matching has no way to perform it.

Multi-hop reasoning does that work by traversing explicit relationships in a [[knowledge graph]] rather than matching statistical patterns in embedded text. It's also where [[context engineering]] parts company with [[prompt engineering]]: what improves the answer is how the knowledge is structured, not how the question is phrased.

## How it works

Vector databases store embeddings, which are mathematical representations of text that cluster statistically similar content together. Query for "climate change impacts" and you'll get passages about climate change impacts. Query for something that requires synthesis across several sources and the system struggles, because similarity matching can't construct a chain of inference.

That becomes possible when knowledge is structured as a graph with explicit, typed relationships between entities, so the system can traverse a path: Theory A → critiqued by → Critique X → based on → Methodological Assumption Y → also applies to → Theory B. Each step in that chain is a connection someone recorded, not a correlation the system inferred.

The capability depends entirely on how well those relationships are modelled, because you can't traverse a connection that was never represented. This is what turns the hours spent linking concepts in your notes into infrastructure rather than housekeeping: every relationship you make explicit extends what can be inferred later.

## Academic work is relational

Academic work is relational almost by definition. We build on predecessors, respond to critics, and look for structural parallels between domains that don't obviously share anything. Multi-hop reasoning lets a system take part in that kind of thinking instead of returning relevant passages and stopping.

Four scholarly tasks show what this requires:

**Literature review**: "Which methodological critiques of phenomenology also apply to grounded theory?" requires traversing phenomenology → critiques → methodological foundations → grounded theory → methodological foundations → comparison.

**Theoretical development**: "What concepts from complexity theory might address limitations in social constructivism?" requires understanding both frameworks, identifying specific limitations, finding structural parallels, and suggesting connections.

**Historiography**: "How did Scholar A's critique of Scholar B influence Scholar C's later work?" requires following chains of intellectual influence across time and citation networks.

**Interdisciplinary synthesis**: connecting concepts across fields where the relationships aren't obvious from keyword similarity but emerge from structural or functional parallels.

None of these reduce to finding similar text; each one needs a chain of inference across relationships that somebody has modelled explicitly.

## The structure has to exist first

Multi-hop reasoning is a qualitative shift in what AI can do for knowledge work, from sophisticated search to genuine inference along chains of critique, influence, and conceptual development.

The capability isn't automatic, though. It depends on there being explicit relationship structures to traverse, and better embeddings won't produce them; what's needed is a graph with typed relationships between entities. This is the claim behind [[context engineering]] — that how well a system reasons depends on how the knowledge is structured rather than on how the prompt is written. Build explicit relationships between concepts and a model can reason across them; rely on statistical similarity and you're limited to retrieval however carefully you phrase the question.

Which puts the time spent linking ideas in your notes in a different light. It's the part that decides what can be inferred later.

---

## Sources

- Teki, S. (2025). Context Engineering: The 2025 Guide to Advanced AI Strategy and RAG.

---

## Notes

Multi-hop reasoning is what makes [[context engineering]] specifically valuable for scholarship. Other kinds of knowledge work are served well enough by better retrieval; scholarship needs inference across connected concepts.
