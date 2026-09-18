---
title: Knowledge graph
description: A structured representation of knowledge using entities connected by explicit, typed relationships
aliases:
  - knowledge graphs
type: note
author: "[[Michael Rowe]]"
created: 2026-01-30
updated: 2026-09-18
needs_review: false
tags:
  - knowledge-representation
  - knowledge-graphs
  - information-architecture
  - context-engineering
category: Information management
related:
  - "[[Notes/context-engineering]]"
  - "[[Notes/graphRAG]]"
  - "[[Notes/multi-hop-reasoning]]"
  - "[[Notes/vector-database]]"
  - "[[Notes/graph-database]]"
builds_on:
leads_to:
  - "[[context engineering]]"
contradicts:
source: ""
source_url: ""
reviewed:
  - writing_style
linkedin:

---

> [!info] Relationships as first-class citizens
> We understand concepts through their connections to other concepts, theories through their critiques and extensions, methods through the traditions they came out of. A knowledge graph makes that relational structure explicit and computable, treating the connections between ideas as carrying as much information as the ideas themselves.

## Knowledge graph

**One-sentence definition:** A structured representation of knowledge that connects entities through explicit, typed relationships, enabling traversal and reasoning over conceptual connections rather than statistical similarity.

Scholars have always built knowledge graphs, even if we didn't call them that. The citation network showing who built on whose work, the conceptual map linking related theories, the methodological genealogy tracing an intellectual tradition — each is a network of entities connected by meaningful relationships.

What's changed is that these structures can now be made computationally explicit, so a system can reason about them. Not simply that Paper A and Paper B both discuss validity, but that Paper A critiques Paper B's approach to validity, that both draw on Methodology X, and that the same critique reaches Framework Y.

## How they work

A knowledge graph consists of nodes and edges. **Nodes** represent the entities you want to reason about — concepts, people, papers, methods, theories — and carry properties of their own: a scholar has an affiliation and research interests, a paper has a publication year and a methodology, a concept has a definition and a domain.

**Edges** represent typed, directional relationships. The useful claim isn't that Einstein and Bohr are connected but that Einstein influenced Bohr's thinking about quantum mechanics; not that Paper A relates to Paper B but that Paper A extends Paper B while challenging some of its assumptions. Properties can attach to edges as well as nodes, so a "critiques" relationship can record the nature of the critique, the year it was published, and whether the person critiqued ever acknowledged it.

Written out, the structure looks like this: `(Paper A) --[extends while challenging]--> (Paper B)`

## Why this differs from embeddings

[[Notes/vector-database|Vector database]]s store numerical representations of text that support similarity search. That works for finding passages about similar topics, and it can't answer questions about how concepts relate, because embeddings capture co-occurrence patterns rather than explicit relationships.

The semantic difference is the whole of it. Embeddings encode the principle that you know a word by the company it keeps, which is distributional semantics built on statistical patterns. Knowledge graphs encode a different principle, that you know a concept by its connections, which is structural semantics built on relationships someone has stated.

Query a vector database for "social constructivism" and you'll find passages that discuss social constructivism often. Query a knowledge graph and you can ask which critiques of social constructivism also apply to phenomenology, a question that turns on shared methodological foundations rather than on similar text. This is why knowledge graphs support [[multi-hop reasoning]] while vector databases support only single-hop retrieval.

## What becomes possible once the graph is explicit

Making your implicit knowledge graphs explicit creates new capabilities. Following chains of critique and influence through a citation network is the case [[Notes/multi-hop reasoning|multi-hop reasoning]] works through; two more are specific to holding your own field as a graph.

**Methodological genealogy** maps where methods come from, what assumptions they carry, and how they've changed, which needs explicit relationships between methods, traditions, and underlying commitments.

**Research trajectory mapping** shows how your own thinking has developed: which ideas led to which, which readings shaped which arguments, which collaborations produced which projects.

In [[context engineering]], the graph is what lets AI reason about your scholarship rather than retrieve content that resembles it. The linked notes in Obsidian, the conceptual maps, the citation networks you trace are already knowledge graphs; the question is whether to make them explicit enough to traverse.

## The curation challenge

Building a knowledge graph takes work. Automated extraction through [[graphRAG]] helps and makes errors, and scholarly nuance is easily lost in the process — subtle distinctions collapsed, contested relationships stated as settled, contextual qualifications stripped out.

So a graph needs active curation. The relationship between two scholars is rarely just "cites" or "critiques"; it might be "extends while challenging certain assumptions", or "applies to a new context", and characterising it accurately takes scholarly judgement.

The investment makes sense when you're building knowledge infrastructure you'll return to — a research area you're committed to, a personal knowledge base supporting ongoing work. For a one-off literature review, reading will do. For building systems that can reason about your field, the explicit graph is what makes it possible.

## What remains difficult

How to represent contested or ambiguous relationships, when scholarly disagreement is productive rather than a fault to be corrected. What granularity is right: concepts, arguments, papers, authors. How to handle understanding that shifts as your reading deepens. When explicit structure earns the effort, and when trusting implicit knowledge is enough.

Knowledge graphs work best for stabilised knowledge where relationships are broadly agreed. They struggle in emerging fields where every claim is contested, and in highly interpretive domains where relationships resist formalisation. The useful question isn't whether a graph beats other representations but when its benefits — structured reasoning, explicit connections, knowledge that others can build on — outweigh what it costs to curate and maintain.

---

## Sources

- Teki, S. (2025). Context Engineering: The 2025 Guide to Advanced AI Strategy and RAG.

---

## Notes

Knowledge graphs are to [[context engineering]] what [[vector database]]s are to [[prompt engineering]]. The choice of representation shapes what AI can do with your work: embeddings find similar passages, graphs allow reasoning about connections.
