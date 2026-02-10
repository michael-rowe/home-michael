---
title: GraphRAG
description: A technique that combines knowledge graphs with retrieval-augmented generation for structured reasoning
aliases:
  - graph RAG
  - graph-based RAG
type: note
author: "[[Michael Rowe]]"
created: 2026-01-30
updated: 2026-01-30
needs_review: false
tags:
  - artificial-intelligence
  - knowledge-graphs
  - retrieval-augmented-generation
  - context-engineering
category: "artificial intelligence"
related:
  - "[[context engineering]]"
  - "[[knowledge graph]]"
  - "[[retrieval augmented generation]]"
  - "[[multi-hop reasoning]]"
  - "[[vector database]]"
builds_on:
  - "[[retrieval augmented generation]]"
  - "[[knowledge graph]]"
leads_to:
contradicts:
source: ""
source_url: ""
---

> [!tip] From isolated documents to connected knowledge
> Scholars accumulate vast libraries of PDFs, notes, and annotations representing years of reading and thinking. But this knowledge remains trapped in isolated documents—inaccessible for synthesis, invisible for reasoning. GraphRAG solves this by extracting the entities and relationships that constitute scholarship, transforming document collections into queryable knowledge structures.

## GraphRAG

**One-sentence definition:** A technique that automates [[knowledge graph]] construction by extracting entities and relationships from documents, enabling [[multi-hop reasoning]] over structured knowledge rather than similarity-based retrieval.

The limitation of traditional [[retrieval augmented generation]] isn't that it finds the wrong chunks—it's that it can only find chunks. Ask "which methodological critiques of Theory A also apply to Theory B?" and RAG searches for statistically similar passages. It might surface discussions of Theory A and discussions of Theory B. It won't answer your actual question, which requires understanding critiques of Theory A, identifying their methodological foundations, and recognising when those foundations appear in critiques of Theory B.

That's not retrieval. That's inference across connected concepts—precisely what GraphRAG enables by replacing flat text retrieval with graph-based knowledge structures that preserve relationships.

## How it works

GraphRAG operates through a processing pipeline that transforms unstructured documents into structured knowledge:

**Entity extraction** identifies the concepts, people, methods, and theories in your documents. Not just that a paper mentions "social constructivism" but recognising it as a distinct theoretical framework with attributes and instances.

**Relationship detection** determines how entities connect. Not just that Paper A and Paper B both discuss validity, but that Paper A critiques Paper B's approach to validity, and both draw on Methodology X.

**Graph construction** builds a [[knowledge graph]] connecting entities through typed, directional relationships. This structure enables traversal-based queries rather than similarity matching.

**Query processing** converts your questions into graph traversals. Instead of finding similar text, the system follows relationship paths: Theory A → critiqued by → Critique X → based on → Methodological Assumption Y → also applies to → Theory B.

**Response synthesis** generates answers by reasoning over the paths found, not just retrieving the most similar passages.

## Why this matters for scholarship

Academic knowledge is inherently relational. Understanding a field means understanding how ideas connect—who built on whose work, which critiques challenge which assumptions, where conceptual parallels exist across apparently different domains. GraphRAG makes this relational structure explicit and computable.

Consider what becomes possible:

**Literature mapping** that automatically surfaces the intellectual landscape of a field—who cites whom, which concepts cluster together, where debates lie. Not just keyword co-occurrence but actual relationships: influences, critiques, extensions, applications.

**Research synthesis** that answers questions requiring inference across sources. "Which qualitative methods address the validity concerns raised about phenomenology?" needs to traverse phenomenology → validity concerns → methodological responses → qualitative methods. GraphRAG can follow those paths.

**Personal knowledge bases** that transform your Obsidian vault or Zotero library into queryable knowledge structures. The connections you've built become infrastructure for AI reasoning.

**Collaborative research** where teams share knowledge graphs built from their collective reading, creating common intellectual infrastructure.

The key insight: GraphRAG works with both curated knowledge (the links you've already built in your notes) and automated extraction (your PDF library). The hybrid approach—automated extraction refined by scholarly judgement—often works best. Let GraphRAG bootstrap a knowledge graph from your library, then refine the relationships through use.

## The quality question

Automated extraction inevitably makes errors. Scholarly nuance is easily lost—subtle distinctions collapsed, contested relationships stated as fact, contextual qualifications stripped away. This is why GraphRAG requires active curation, not passive automation.

The relationship between Scholar A and Scholar B isn't simply "cites" or "critiques"—it might be "extends while challenging certain assumptions" or "applies to a new context." GraphRAG can identify that a relationship exists. Characterising it accurately often requires scholarly judgement.

This creates work. The question is whether that work pays off. If you're building knowledge infrastructure you'll use repeatedly—a research area you're committed to, a personal knowledge base supporting ongoing scholarship—the investment may be worthwhile. For one-off literature reviews, manual reading may suffice.

## What it enables that RAG cannot

The difference between RAG and GraphRAG isn't just better retrieval—it's qualitatively different capabilities:

- **Comparison across frameworks:** "Which theoretical approaches share this assumption?"
- **Intellectual genealogy:** "How did Critic A's challenge to Scholar B influence Researcher C's later work?"
- **Structural parallels:** "What concepts from Field X address limitations in Approach Y?"
- **Contested relationships:** "Who disagrees with this characterisation and why?"

None of these reduce to finding similar passages. All require reasoning about explicit relationships between concepts—which is why GraphRAG matters for [[context engineering]].

---

## Sources

- Teki, S. (2025). Context Engineering: The 2025 Guide to Advanced AI Strategy and RAG.

---

## Notes

GraphRAG sits at the intersection of automated extraction and scholarly curation. The technology enables scale; human judgement ensures accuracy. Neither alone suffices for serious scholarship.