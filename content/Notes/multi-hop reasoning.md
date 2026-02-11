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
created: 2026-01-30T00:00:00.000Z
updated: 2026-01-30T00:00:00.000Z
needs_review: false
tags:
  - reasoning
  - knowledge-graphs
  - context-engineering
category: AI and technology
related:
  - '[[context engineering]]'
  - '[[knowledge graph]]'
  - '[[graphRAG]]'
  - '[[prompt engineering]]'
builds_on:
  - '[[knowledge graph]]'
leads_to: null
contradicts: null
source: ''
source_url: ''
---

> [!tip] From retrieval to inference
> The limitation of traditional AI retrieval isn't that it finds the wrong chunks of text—it's that it can only find chunks of text. Multi-hop reasoning enables what scholars actually do: synthesising across sources, following chains of intellectual influence, identifying structural parallels between different domains. The difference between finding similar passages and genuine inference.

## Multi-hop reasoning

**One-sentence definition:** The ability of an AI system to draw conclusions by traversing multiple connected concepts or relationships, rather than relying on direct question-answer patterns.

When you ask a traditional retrieval system "which methodological critiques of Theory A also apply to Theory B?", it searches for text chunks that are statistically similar to your query. It might find passages discussing Theory A and passages discussing Theory B. It almost certainly won't answer your actual question, which requires understanding critiques of Theory A, identifying their methodological foundations, and recognising when those same foundations appear in critiques of Theory B. That's not retrieval. That's inference across connected concepts.

Multi-hop reasoning enables this kind of synthesis by traversing explicit relationships in a [[knowledge graph]] rather than matching statistical patterns in embedded text. This is why [[context engineering]] differs fundamentally from [[prompt engineering]]—it's not about writing better prompts but about structuring knowledge so AI can reason about relationships rather than merely retrieve similar content.

## How it works

Traditional vector databases use embeddings—mathematical representations of text that cluster statistically similar content together. Query for "climate change impacts", and you'll find text chunks discussing climate change impacts. Query for something requiring synthesis across multiple sources, and the system struggles because similarity matching cannot construct chains of inference.

Multi-hop reasoning becomes possible when knowledge is structured as a graph with explicit, typed relationships between entities. Now the system can traverse: Theory A → critiqued by → Critique X → based on → Methodological Assumption Y → also applies to → Theory B. These aren't implicit statistical associations but explicit logical connections.

The capability depends entirely on the quality of relationship modelling. You cannot traverse connections that aren't represented. This is why the time spent explicitly linking concepts in your notes becomes infrastructure for sophisticated AI reasoning—each relationship you make explicit extends what AI can infer.

## What this enables for scholarship

Academic work is fundamentally relational. We build on predecessors, respond to critics, synthesise across traditions, identify structural parallels between different domains. Multi-hop reasoning lets AI participate in this kind of thinking rather than merely finding relevant passages.

Consider these scholarly tasks that require multi-hop reasoning:

**Literature review**: "Which methodological critiques of phenomenology also apply to grounded theory?" requires traversing phenomenology → critiques → methodological foundations → grounded theory → methodological foundations → comparison.

**Theoretical development**: "What concepts from complexity theory might address limitations in social constructivism?" requires understanding both frameworks, identifying specific limitations, finding structural parallels, and suggesting connections.

**Historiography**: "How did Scholar A's critique of Scholar B influence Scholar C's later work?" requires following chains of intellectual influence across time and citation networks.

**Interdisciplinary synthesis**: Connecting concepts across fields where the relationships aren't obvious from keyword similarity but emerge from structural or functional parallels.

None of these reduce to finding similar text. All require constructing chains of inference across explicitly modelled relationships.

## The practical implication

Multi-hop reasoning represents a qualitative shift in what AI can accomplish for knowledge work. Rather than sophisticated search, it enables genuine inference—following chains of critique, influence, and conceptual development.

But this capability isn't automatic. It depends on having explicit relationship structures to traverse. Vector databases with better embeddings won't get you there. You need knowledge graphs with typed relationships between entities.

This is the fundamental insight of [[context engineering]]: the sophistication of AI reasoning depends not on prompt quality but on knowledge structure quality. Build explicit relationships between concepts, and AI can reason across them. Rely on statistical similarity, and you're limited to retrieval no matter how clever your prompts.

The time you spend linking ideas in your notes, making relationships explicit, and structuring knowledge graphs isn't overhead—it's the foundation that makes sophisticated AI reasoning possible. Every connection you create extends what AI can infer about your domain.

---

## Sources

- Teki, S. (2025). Context Engineering: The 2025 Guide to Advanced AI Strategy and RAG.

---

## Notes

Multi-hop reasoning is what makes [[context engineering]] valuable for scholarship specifically. Other knowledge work might benefit from better retrieval. Scholarship requires inference across connected concepts—exactly what multi-hop reasoning enables.
