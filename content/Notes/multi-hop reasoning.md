---
title: Multi-hop reasoning
description: AI reasoning capability that draws conclusions by traversing multiple connected concepts
aliases:
  - multi-step reasoning
  - chain reasoning
type: note
author: "[[Michael Rowe]]"
created: 2026-01-30
updated: 2026-01-30
status: draft
needs_review: false
tags:
  - artificial-intelligence
  - reasoning
  - knowledge-graphs
  - context-engineering
category: "artificial intelligence"
related:
  - "[[context engineering]]"
  - "[[knowledge graph]]"
  - "[[graphRAG]]"
  - "[[prompt engineering]]"
builds_on:
  - "[[knowledge graph]]"
leads_to:
contradicts:
source: ""
source_url: ""
---

## Definition

**Multi-hop reasoning** (noun): The ability of an AI system to draw conclusions by traversing multiple connected concepts or relationships, rather than relying on direct question-answer patterns.

Multi-hop reasoning enables complex inference across linked information, following chains of relationships to arrive at answers that aren't explicitly stated in any single source.

Key characteristics:
- Traverses multiple nodes in a knowledge structure
- Synthesises information from connected concepts
- Enables answering questions that require combining facts
- Depends on explicit relationship modelling

## Context and background

Multi-hop reasoning emerged as a key capability distinguishing [[context engineering]] from [[prompt engineering]]. Traditional retrieval systems using vector databases and embeddings are limited to single-hop reasoning—finding text chunks that are statistically similar to a query. This works for direct questions but fails when answers require combining information across multiple sources.

The capability becomes possible when knowledge is structured as a [[knowledge graph]] with explicit, typed relationships between entities. Systems can then traverse these relationships to construct complex answers.

## Related concepts

*[[Context engineering]]*: The system-level discipline that enables multi-hop reasoning through structured knowledge representations.

*[[Knowledge graph]]*: The data structure that makes multi-hop reasoning possible by explicitly modelling relationships between entities.

*[[GraphRAG]]*: A technique that constructs the knowledge graphs enabling multi-hop traversal.

*Single-hop reasoning*: The simpler pattern where queries are matched directly to similar text chunks without relationship traversal.

## Distinctive characteristics

| Single-hop reasoning | Multi-hop reasoning |
|---------------------|---------------------|
| Direct question → answer matching | Inference across connected concepts |
| Finds similar text chunks | Traverses explicit relationships |
| Limited to information in one source | Synthesises across multiple sources |
| Statistical similarity-based | Relationship-aware |
| Supported by [[prompt engineering]] | Enabled by [[context engineering]] |

## Applications

Multi-hop reasoning is essential for:
- **Complex queries**: "What authors influenced the people who influenced Einstein?"
- **Inference chains**: Drawing conclusions that require multiple logical steps
- **Cross-domain synthesis**: Connecting concepts from different knowledge areas
- **Explanation generation**: Showing the reasoning path, not just the answer

Example: To answer "Which treatments are effective for diseases caused by this gene mutation?", a system must:
1. Identify diseases linked to the mutation
2. Find treatments associated with those diseases
3. Filter for effectiveness data
4. Synthesise a response

This requires traversing gene → disease → treatment relationships.

## Implications

Multi-hop reasoning represents a qualitative shift in what AI systems can accomplish. Rather than sophisticated pattern matching, it enables genuine inference—the ability to derive new conclusions from existing knowledge.

This capability is why [[context engineering]] requires [[knowledge graph]]s rather than [[vector database]]s: you cannot traverse relationships that aren't explicitly represented.

## Questions and tensions

- How many "hops" can systems reliably traverse before accuracy degrades?
- How do we validate reasoning chains for correctness?
- What's the computational cost of multi-hop queries at scale?
- When is the complexity of multi-hop infrastructure justified over simpler approaches?

## My thinking

Multi-hop reasoning is what makes [[context engineering]] genuinely different from sophisticated [[prompt engineering]]. It's not just about having more context—it's about having structured context that can be navigated. This is the difference between having a pile of documents and having a map showing how ideas connect.

---

## Sources

- Teki, S. (2025). Context Engineering: The 2025 Guide to Advanced AI Strategy and RAG.
- engineering_paradigms_handover.md

---

## Notes

Extracted as a distinct concept from context engineering notes where it appears as a key differentiating capability.
