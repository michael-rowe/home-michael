---
title: Knowledge graph
description: A structured representation of knowledge using entities connected by explicit, typed relationships
aliases:
  - knowledge graphs
type: note
author: "[[Michael Rowe]]"
created: 2026-01-30
updated: 2026-01-30
status: draft
needs_review: false
tags:
  - knowledge-representation
  - knowledge-graphs
  - information-architecture
  - context-engineering
category: "knowledge management"
related:
  - "[[context engineering]]"
  - "[[graphRAG]]"
  - "[[multi-hop reasoning]]"
  - "[[vector database]]"
  - "[[graph database]]"
builds_on:
leads_to:
  - "[[context engineering]]"
contradicts:
source: ""
source_url: ""
---

## Definition

**Knowledge graph** (noun): A structured representation of knowledge that connects entities (concepts, people, places, things) through explicit, typed relationships.

Knowledge graphs encode semantic information as networks of nodes (entities) and edges (relationships), enabling traversal, querying, and reasoning over structured knowledge.

Key characteristics:
- Entities represented as nodes with properties
- Relationships represented as typed, directional edges
- Supports traversal and path-based queries
- Makes implicit connections explicit and navigable

## Context and background

Knowledge graphs have roots in semantic web technologies and have been used by organisations like Google (Knowledge Graph), Facebook, and LinkedIn to structure information about entities and their relationships. In the context of [[context engineering]], knowledge graphs serve as the primary data structure enabling [[multi-hop reasoning]].

Unlike [[vector database]]s that store embeddings for similarity matching, knowledge graphs preserve the explicit relationships between concepts—enabling systems to answer "how are X and Y connected?" rather than just "what is similar to X?"

## Related concepts

*[[Context engineering]]*: The discipline that uses knowledge graphs as its primary knowledge representation approach.

*[[GraphRAG]]*: A technique that automates knowledge graph construction from unstructured documents.

*[[Vector database]]*: An alternative storage approach using embeddings; supports similarity search but not relationship traversal.

*[[Graph database]]*: The underlying technology for storing and querying knowledge graphs (e.g., Neo4j, Amazon Neptune).

## Distinctive characteristics

| Vector database | Knowledge graph |
|----------------|-----------------|
| Stores numerical embeddings | Stores entities and relationships |
| Implicit relationships via statistical co-occurrence | Explicit, typed relationships |
| Similarity search | Traversal and path queries |
| "You know a word by the company it keeps" | "You know a concept by its connections" |
| Supports single-hop reasoning | Enables [[multi-hop reasoning]] |

### Structure

A knowledge graph consists of:
- **Nodes**: Entities with properties (e.g., Person: name, birthdate)
- **Edges**: Relationships with types (e.g., "authored", "influenced", "located_in")
- **Properties**: Attributes on both nodes and edges

Example triple: `(Einstein) --[influenced]--> (Bohr)`

## Applications

Knowledge graphs are essential for:
- **Enterprise knowledge management**: Connecting information across departments and systems
- **Research synthesis**: Mapping relationships between concepts, papers, and authors
- **AI systems**: Providing structured context for [[context engineering]]
- **Recommendation systems**: Finding connections between users, items, and preferences

In [[context engineering]], knowledge graphs enable:
- Complex queries requiring relationship traversal
- Explainable AI responses showing reasoning paths
- Permission-controlled access to knowledge subsets
- Integration of knowledge from multiple sources

## Implications

Knowledge graphs represent a fundamentally different approach to knowledge representation than document-centric or embedding-based systems. They make the relationships between concepts first-class citizens, enabling queries like:
- "What connects these two concepts?"
- "What is three steps removed from this entity?"
- "Show me the path between these ideas"

This structural approach supports [[multi-hop reasoning]]—the ability to derive conclusions by traversing chains of relationships.

## Questions and tensions

- How do we maintain knowledge graphs as source information changes?
- What's the right granularity for entities and relationships?
- How do we handle uncertainty or contested relationships?
- When is the overhead of building a knowledge graph justified?

## My thinking

Knowledge graphs are to [[context engineering]] what [[vector database]]s are to [[prompt engineering]]. The choice of knowledge representation fundamentally shapes what questions a system can answer. If you only have embeddings, you can find similar things. If you have a knowledge graph, you can reason about connections.

The manual knowledge graph building I do in Obsidian—linking notes and making relationships explicit—is essentially context engineering at the personal knowledge management scale.

---

## Sources

- Teki, S. (2025). Context Engineering: The 2025 Guide to Advanced AI Strategy and RAG.
- engineering_paradigms_handover.md

---

## Notes

Extracted as a distinct concept from context engineering notes where it appears as the primary data structure enabling structured reasoning.
