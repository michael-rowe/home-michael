---
title: Graph database
description: A graph database stores entities and the typed relationships between them, and is the storage layer behind a knowledge graph. For a programme team it can hold the curriculum map itself, so questions about how standards, outcomes, and assessments connect are answered by following the links instead of reading the handbooks.
meta-description: "A graph database for curriculum mapping stores how outcomes, assessments, and standards connect, so coverage gaps show up in a single query."
aliases:
  - graph DB
type: note
author: "[[Michael Rowe]]"
created: 2026-02-10
updated: 2026-09-26
draft: false
tags:
  - knowledge-graphs
  - information-architecture
  - context-engineering
  - graph-database
  - curriculum-mapping
category:
  - Information management
related:
  - "[[Notes/knowledge graph]]"
  - "[[Notes/vector database]]"
  - "[[Notes/graphRAG]]"
  - "[[Notes/multi-hop reasoning]]"
  - "[[Notes/context engineering]]"
  - "[[Notes/mcp server]]"
  - "[[Essays/curriculum-infrastructure]]"
builds_on:
leads_to:
  - "[[knowledge graph]]"
  - "[[graphRAG]]"
contradicts:
source: ""
source_url: ""
keyphrase: "graph database for curriculum mapping"
linkedin:
reviewed:
  - note_writer
  - writing_style
  - SEO_optimiser
  - copy_editor
---

> [!info] A graph database stores the connections as data
> Most databases keep records in rows and columns, which suits structured data and handles relationships awkwardly. A graph database stores the connections between entities as data in their own right, each with a type and a direction, and that's what lets a system follow chains of relationships through a [[Notes/knowledge graph|knowledge graph]].

## Graph database

**One-sentence definition:** A graph database is a database that stores entities as nodes and the explicit, typed relationships between them as edges, enabling complex traversal[^traversal] queries and pattern matching across interconnected data.

A graph database is easy to confuse with a [[Notes/knowledge graph|knowledge graph]], and the two are worth keeping apart. A knowledge graph is a conceptual structure: entities connected by meaningful relationships. A graph database is the storage technology that makes that structure queryable and persistent. The knowledge graph is the map; the graph database is the filing system that holds it.

In a graph database, concepts are stored as nodes with properties, connected by directional, typed relationships. The database records that Theory A and Theory B exist, and also that Theory A *critiques the assumptions of* Theory B and that both *build on* Methodology X. The relationship type, direction, and properties are all explicit and searchable.

A relational database, the kind behind most student record systems, keeps entities in separate tables and rebuilds the relationships between them at query time by matching identifiers across tables. That works well for one or two steps and gets slower and harder to write with every step added. A graph database stores the relationship itself, so following a chain of five connections is the same kind of operation as following one.

Neo4j[^neo4j] is the most widely used graph database, and its query language, Cypher[^cypher], is written for matching patterns and following paths through the graph. An [[Notes/mcp server|MCP server]] gives a language model a standard way to query a graph database during a conversation.

## Curriculum mapping with a graph database

The case for a graph database in health professions education is clearest in curriculum mapping. Suppose a quality assurance officer needs to confirm that a prescribing safety competency is adequately assessed across a programme. That means finding the learning outcomes that address the competency, the assessments that test those outcomes, and the modules those assessments sit in, and checking that no link in the chain is missing. Across a set of module handbooks that's days of reading; in a graph database it's one traversal outwards from the competency. The [[Essays/curriculum-infrastructure|curriculum infrastructure]] essay takes the idea further and makes the graph the source of truth, with module specifications and accreditation evidence generated from it instead of being maintained as separate documents.

## How it differs from a vector database

- A **[[Notes/vector database|vector database]]** stores content as numerical representations ([[Notes/embeddings|embeddings]]) and retrieves by similarity. Ask "what is related to clinical assessment?" and it finds passages that appear in similar linguistic contexts. It answers: *what is similar to this?*
- A **graph database** stores content as entities with explicit connections and retrieves by traversal. Ask "which assessment methods address the validity concerns raised about OSCEs[^osce]?" and it follows paths: OSCEs → validity concerns → shared by → other methods. It answers: *how are these things connected?*

Following chains of connection like this is [[Notes/multi-hop reasoning|multi-hop reasoning]], which needs explicit relationships to traverse. The [[Notes/knowledge graph|knowledge graph]] note works through why similarity can't stand in for them.

---

## Sources

- Angles, R., & Gutierrez, C. (2008). Survey of graph database models. *ACM Computing Surveys*, *40*(1), 1–39. https://doi.org/10.1145/1322432.1322433

---

## Notes

Many systems use both kinds of database, with vector search for a first pass that finds similar material and a graph for reasoning about how the retrieved material connects. Which you need depends on the questions your application has to answer.

[^traversal]: **Traversal.** Moving through a graph by following its edges from one node to the next, the way you'd trace a professional standard to the learning outcome that addresses it and then to the assessment that tests it. See [Graph traversal](https://en.wikipedia.org/wiki/Graph_traversal).

[^neo4j]: **Neo4j.** A graph database first released in 2007, available as open source and as a commercial product, and the one most tutorials and courses use. See [Neo4j](https://en.wikipedia.org/wiki/Neo4j).

[^cypher]: **Cypher.** The query language used with Neo4j. A query is written as a small picture of the pattern you're looking for, such as an outcome connected to an assessment, and the database returns every match. See [Cypher (query language)](https://en.wikipedia.org/wiki/Cypher_(query_language)).

[^osce]: **OSCE.** Objective structured clinical examination: a circuit of timed stations at which students carry out a clinical task, such as a medication history or a counselling conversation, while an examiner scores them against a checklist. See [Objective structured clinical examination](https://en.wikipedia.org/wiki/Objective_structured_clinical_examination).
