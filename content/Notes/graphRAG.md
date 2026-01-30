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
- **Complex domains**: Where relationships between concepts matter (medicine, law, research)
- **Multi-document synthesis**: Connecting information across many sources
- **Reasoning tasks**: Questions requiring inference chains
- **Knowledge management**: Building queryable representations of organisational knowledge

GraphRAG can work with curated knowledge (e.g., manually built in Obsidian) or can automate the creation of knowledge graphs from unstructured documents.

## Implications

GraphRAG represents a shift from treating documents as bags of similar words to treating them as sources of structured knowledge. This enables AI systems to reason more like domain experts who understand how concepts connect, rather than search engines that find similar text.

The trade-off is implementation complexity: building and maintaining knowledge graphs requires more infrastructure than vector databases.

## Questions and tensions

- How do we handle errors in automated entity and relationship extraction?
- What's the right balance between automated extraction and human curation?
- How do we keep knowledge graphs current as source documents change?
- When does the complexity of GraphRAG justify itself over simpler RAG approaches?

## My thinking

GraphRAG is the practical technique that makes [[context engineering]] possible. While the concept of using knowledge graphs for AI is straightforward, GraphRAG's contribution is automating the extraction process—making it feasible to build structured knowledge representations at scale without manual curation of every relationship.

---

## Sources

- Teki, S. (2025). Context Engineering: The 2025 Guide to Advanced AI Strategy and RAG.
- engineering_paradigms_handover.md

---

## Notes

Extracted as a distinct concept from context engineering notes where it appears as a key enabling technique.
