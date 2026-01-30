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
status: draft
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

## Definition

**GraphRAG** (noun): A technique that automates the creation of [[knowledge graph]]s by extracting entities and relationships from documents, enabling structured reasoning and [[multi-hop reasoning]] capabilities.

GraphRAG extends traditional [[retrieval augmented generation]] by replacing flat text retrieval with graph-based knowledge structures that preserve relationships between concepts.

Key characteristics:
- Automatically extracts entities from source documents
- Detects and models relationships between entities
- Enables traversal-based retrieval rather than similarity matching
- Supports complex reasoning over structured knowledge

## Context and background

GraphRAG emerged as a response to the limitations of traditional RAG systems. While [[retrieval augmented generation]] using [[vector database]]s works well for finding similar text chunks, it cannot reason over relationships or answer questions requiring multiple inference steps.

By constructing [[knowledge graph]]s from source materials, GraphRAG enables the graph-aware processing flow central to [[context engineering]]: Query → Reason → Traverse → Synthesise.

## Related concepts

*[[Knowledge graph]]*: The output data structure that GraphRAG creates—a network of entities connected by typed relationships.

*[[Retrieval augmented generation]]*: The precursor technique using vector embeddings for similarity-based retrieval.

*[[Context engineering]]*: The broader discipline that uses GraphRAG as a key implementation technique.

*[[Vector database]]*: The storage technology used by traditional RAG, which GraphRAG replaces with graph databases.

## Distinctive characteristics

| Traditional RAG | GraphRAG |
|----------------|----------|
| Stores text chunks as embeddings | Stores entities and relationships |
| Similarity-based retrieval | Relationship-based traversal |
| [[Vector database]] storage | [[Knowledge graph]] storage |
| Single-hop reasoning | [[Multi-hop reasoning]] |
| Implicit relationships | Explicit, typed relationships |

### Processing pipeline

1. **Entity extraction**: Identify concepts, people, places, and other entities in documents
2. **Relationship detection**: Determine how entities relate to each other
3. **Graph construction**: Build a [[knowledge graph]] connecting entities
4. **Query processing**: Convert user queries to graph traversals
5. **Response synthesis**: Generate answers by following relationship paths

## Applications

GraphRAG is particularly valuable for:
- **Complex domains**: Where relationships between concepts matter
- **Multi-document synthesis**: Connecting information across many sources
- **Reasoning tasks**: Questions requiring inference chains
- **Knowledge management**: Building queryable representations of accumulated knowledge

### For academic work

GraphRAG addresses a fundamental challenge in scholarship: we accumulate vast libraries of PDFs, notes, and annotations, but this knowledge remains trapped in isolated documents.

- **Research libraries**: Extract entities (authors, concepts, methods, findings) and relationships (critiques, builds-on, contradicts) from your Zotero library
- **Literature synthesis**: Automatically map the intellectual landscape of a field—who cites whom, which concepts cluster together, where debates lie
- **Personal knowledge bases**: Transform your Obsidian vault or note system into a queryable knowledge graph
- **Collaborative research**: Build shared knowledge structures across research teams

GraphRAG can work with curated knowledge (the links you've already built in Obsidian) or automate extraction from unstructured documents (your PDF library). The hybrid approach—automated extraction refined by scholarly judgement—often works best.

## Implications

GraphRAG represents a shift from treating your research library as a collection of separate documents to treating it as a structured knowledge base. This enables AI to reason more like a knowledgeable colleague who understands how ideas in your field connect.

For scholars, this means the years invested in reading, annotating, and thinking about literature can become computationally accessible. Your expertise isn't just in your head—it's encoded in the patterns of what you've read and how you've connected it.

## Questions and tensions

- How do we handle errors in automated extraction? Scholarly nuance is easily lost.
- What's the right balance between automated extraction and human curation?
- How do we represent contested or evolving relationships between concepts?
- How do we maintain knowledge graphs as new literature emerges?

## My thinking

GraphRAG is what makes [[context engineering]] practical for scholars. The alternative—manually specifying every relationship between every concept—doesn't scale. GraphRAG lets you bootstrap a knowledge graph from your existing library, then refine it through use.

The combination of automated extraction and manual curation mirrors how scholarship actually works: we inherit frameworks from the field, then refine them through our own reading and thinking.

---

## Sources

- Teki, S. (2025). Context Engineering: The 2025 Guide to Advanced AI Strategy and RAG.
- engineering_paradigms_handover.md

---

## Notes

Extracted as a distinct concept from context engineering notes where it appears as a key enabling technique.
