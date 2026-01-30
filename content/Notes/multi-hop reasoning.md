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
- **Complex queries**: Questions requiring synthesis across multiple sources
- **Inference chains**: Drawing conclusions through multiple logical steps
- **Cross-domain synthesis**: Connecting concepts from different knowledge areas
- **Explanation generation**: Showing the reasoning path, not just the answer

### For academic work

Multi-hop reasoning enables the kind of synthetic thinking central to scholarship:

- **Literature review**: "Which methodological critiques of [Theory A] also apply to [Theory B]?" requires traversing theory → critiques → methodological assumptions → related theories
- **Theoretical development**: "What concepts from [Field X] might address limitations in [Framework Y]?" requires understanding both domains and finding structural similarities
- **Historiography**: "How did [Scholar A]'s critique of [Scholar B] influence [Scholar C]'s later work?" requires traversing intellectual lineages
- **Interdisciplinary work**: Connecting concepts across fields where the relationships aren't obvious from keyword similarity

Example: To answer "Which qualitative methods address the validity concerns raised about [specific approach]?", a system must:
1. Identify the validity concerns for that approach
2. Find methods that explicitly address those concerns
3. Filter for qualitative methods
4. Synthesise recommendations

This is the kind of reasoning scholars do constantly—and that simple retrieval systems cannot support.

## Implications

Multi-hop reasoning represents a qualitative shift in what AI systems can accomplish for scholarship. Rather than finding similar passages, it enables genuine inference—following chains of intellectual influence, methodological critique, and conceptual development.

This is why building explicit relationships between concepts matters: you cannot traverse connections that aren't represented. The time spent linking ideas in your notes becomes the infrastructure for sophisticated AI reasoning.

## Questions and tensions

- How do we validate AI reasoning chains against scholarly standards of evidence?
- Can multi-hop reasoning handle contested or ambiguous relationships between concepts?
- How do we distinguish genuine inference from plausible-sounding but unfounded connections?

## My thinking

Multi-hop reasoning is what makes [[context engineering]] genuinely valuable for scholarship. Academic work is fundamentally relational—we build on predecessors, respond to critics, synthesise across traditions. AI that can only find similar text cannot participate in this kind of thinking. AI that can traverse conceptual relationships can.

The practical implication: every link you create between notes, every relationship you make explicit, extends what AI can reason about.

---

## Sources

- Teki, S. (2025). Context Engineering: The 2025 Guide to Advanced AI Strategy and RAG.
- engineering_paradigms_handover.md

---

## Notes

Extracted as a distinct concept from context engineering notes where it appears as a key differentiating capability.
