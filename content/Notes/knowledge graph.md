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
- **Research synthesis**: Mapping relationships between concepts, papers, and authors
- **Knowledge management**: Connecting information across projects and domains
- **AI-assisted reasoning**: Providing structured context for [[context engineering]]
- **Collaboration**: Sharing structured knowledge across research teams

### For academic work

Scholars have always built implicit knowledge graphs—the web of citations, influences, critiques, and conceptual relationships that constitute expertise in a field. Knowledge graphs make this structure explicit and computable.

- **Citation networks**: Not just who cites whom, but *how*—critiques, extends, applies, contradicts
- **Conceptual maps**: How theories relate, where they overlap, where they conflict
- **Methodological genealogies**: Which methods derive from which traditions, what assumptions they share
- **Research trajectories**: How your own thinking has developed, which ideas led to which

In [[context engineering]], knowledge graphs enable:
- Literature reviews that traverse intellectual lineages rather than keyword matches
- Writing assistance that understands your theoretical commitments
- Teaching materials that reflect the actual structure of disciplinary knowledge

## Implications

Knowledge graphs represent a fundamentally different approach to knowledge representation than document-centric systems. They make the relationships between concepts first-class citizens, enabling queries like:
- "What connects these two theorists?"
- "Which critiques of this method also apply to related approaches?"
- "Show me the intellectual path from this early work to current debates"

For scholars, this matters because academic knowledge *is* relational. Understanding a field means understanding how ideas connect—and that's precisely what knowledge graphs represent.

## Questions and tensions

- How do we represent contested or ambiguous relationships? Scholarly disagreement is productive, not a bug.
- What granularity is right? Concepts, arguments, papers, authors?
- How do we handle evolving understanding as our reading deepens?
- When is explicit structure worth the effort versus trusting implicit knowledge?

## My thinking

Knowledge graphs are to [[context engineering]] what [[vector database]]s are to [[prompt engineering]]. The choice of knowledge representation fundamentally shapes what AI can do with your work. Embeddings find similar passages. Knowledge graphs enable reasoning about connections.

The linked notes you build in Obsidian, the conceptual maps you sketch, the citation networks you trace—these are knowledge graphs. The question is whether to make them explicit enough for AI to traverse, and whether the investment pays off in richer intellectual partnership.

---

## Sources

- Teki, S. (2025). Context Engineering: The 2025 Guide to Advanced AI Strategy and RAG.
- engineering_paradigms_handover.md

---

## Notes

Extracted as a distinct concept from context engineering notes where it appears as the primary data structure enabling structured reasoning.
