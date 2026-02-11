---
title: Graph database
description: A database that stores explicit relationships between entities, serving as the storage layer for knowledge graphs
aliases:
  - graph DB
type: note
author: "[[Michael Rowe]]"
created: 2026-02-10
updated: 2026-02-10
needs_review: false
tags:
  - knowledge-graphs
  - information-architecture
  - context-engineering
category: Knowledge management
related:
  - "[[knowledge graph]]"
  - "[[vector database]]"
  - "[[graphRAG]]"
  - "[[multi-hop reasoning]]"
  - "[[context engineering]]"
  - "[[mcp server]]"
builds_on:
leads_to:
  - "[[knowledge graph]]"
  - "[[graphRAG]]"
contradicts:
source: ""
source_url: ""
---

> [!info] Storing how things connect, not just what things are
> Most databases store records in rows and columns -- effective for structured data but awkward for representing relationships. Graph databases treat relationships as first-class citizens, storing not just entities but the explicit, typed connections between them. This architectural choice enables the kind of traversal and reasoning that [[knowledge graph]]s require.

## Graph database

**One-sentence definition:** A database that stores entities as nodes and the explicit, typed relationships between them as edges, enabling complex traversal queries and pattern matching across interconnected data.

The distinction between a graph database and a [[knowledge graph]] matters. A knowledge graph is a conceptual structure -- entities connected by meaningful relationships. A graph database is the storage technology that makes that structure queryable and persistent. The knowledge graph is the map; the graph database is the filing system that holds it.

In a graph database, concepts are stored as nodes with properties, connected by directional, typed relationships. Not just that "Theory A" and "Theory B" exist, but that Theory A *critiques the assumptions of* Theory B, and both *build on* Methodology X. The relationship type, direction, and properties are all explicit and searchable.

## How it differs from a vector database

The contrast with [[vector database]]s is instructive:

- A **vector database** stores content as numerical representations (embeddings) and retrieves by similarity. Ask "what is related to clinical assessment?" and it finds passages that appear in similar linguistic contexts. It answers: *what is similar to this?*
- A **graph database** stores content as entities with explicit connections and retrieves by traversal. Ask "which assessment methods address the validity concerns raised about OSCEs?" and it follows paths: OSCEs --> validity concerns --> shared by --> other methods. It answers: *how are these things connected?*

This is why graph databases enable [[multi-hop reasoning]] while vector databases support only [[single-hop reasoning|single-hop]] retrieval. Following chains of connection -- A critiques B, which builds on C, which influenced D -- requires explicit relationships to traverse. Statistical similarity cannot construct these inference paths.

Neo4j is the most widely used graph database, using its Cypher query language for pattern matching and traversal. An [[mcp server]] can provide standardised access for language models to query graph databases during conversations.

---

## Sources

- Gupta, M. (2024). What is GraphRAG? Data Science in Your Pocket. Medium. https://medium.com/data-science-in-your-pocket/what-is-graphrag-1ee1cc9027a4

---

## Notes

The choice between graph and vector databases is not either/or. Many systems use both -- vector databases for initial similarity-based retrieval, graph databases for relational reasoning over retrieved results. The question is which capabilities your application requires.
