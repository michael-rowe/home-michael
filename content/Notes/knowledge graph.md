---
title: Knowledge graph
description: A structured representation of knowledge using entities connected by explicit, typed relationships
aliases:
  - knowledge graphs
type: note
author: "[[Michael Rowe]]"
created: 2026-01-30
updated: 2026-01-30
needs_review: false
tags:
  - knowledge-representation
  - knowledge-graphs
  - information-architecture
  - context-engineering
category: Knowledge management
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

> [!info] Relationships as first-class citizens
> Academic knowledge is fundamentally relational—we understand concepts through their connections to other concepts, theories through their critiques and extensions, methods through their intellectual lineages. Knowledge graphs make this relational structure explicit and computable, treating connections between ideas as equally important as the ideas themselves.

## Knowledge graph

**One-sentence definition:** A structured representation of knowledge that connects entities through explicit, typed relationships, enabling traversal and reasoning over conceptual connections rather than statistical similarity.

Scholars have always built knowledge graphs, even if we didn't call them that. The citation network showing who built on whose work. The conceptual map linking related theories. The methodological genealogy tracing intellectual traditions. These are knowledge graphs—networks of entities connected by meaningful relationships.

The difference now is making these structures computationally explicit so AI can reason about them. Not just recognising that Paper A and Paper B both discuss validity, but understanding that Paper A critiques Paper B's approach to validity, both draw on Methodology X, and this critique also applies to Framework Y.

## How they work

Knowledge graphs consist of nodes (entities) and edges (relationships):

**Nodes** represent concepts, people, papers, methods, theories—any entity you want to reason about. Each node has properties: a scholar has affiliation and research interests, a paper has publication year and methodology, a concept has definition and domain.

**Edges** represent typed, directional relationships between nodes. Not just that Einstein and Bohr are connected, but specifically that Einstein influenced Bohr's thinking about quantum mechanics. Not just that Paper A relates to Paper B, but that Paper A extends while challenging certain assumptions in Paper B.

**Properties** can attach to both nodes and edges, enabling rich representation. A "critiques" relationship might have properties indicating the nature of the critique, the year it was published, whether it was acknowledged by the critiqued scholar.

Example structure: `(Paper A) --[extends while challenging]--> (Paper B)`

## Why this differs from embeddings

[[Vector database]]s store numerical representations of text that enable similarity search. This works well for finding passages about similar topics. It cannot answer questions about how concepts relate because embeddings capture co-occurrence patterns, not explicit relationships.

The semantic difference matters:

- **Embeddings** encode "you know a word by the company it keeps"—distributional semantics based on statistical patterns
- **Knowledge graphs** encode "you know a concept by its connections"—structural semantics based on explicit relationships

When you query a vector database for "social constructivism," you'll find passages that frequently discuss social constructivism. When you query a knowledge graph, you can ask "which critiques of social constructivism also apply to phenomenology?"—a question requiring reasoning about shared methodological foundations, not just finding similar text.

This is why knowledge graphs enable [[multi-hop reasoning]] while vector databases support only single-hop retrieval.

## What this enables for scholarship

Making your implicit knowledge graphs explicit creates new capabilities:

**Literature synthesis** that traverses intellectual lineages rather than keyword matches. "How did Critic A's challenge to Scholar B influence Researcher C's later work?" requires following paths through a citation network with typed relationships: critiques, responds to, influenced by.

**Theoretical comparison** that identifies structural parallels. "Which theoretical frameworks share this epistemological assumption?" requires reasoning about shared conceptual foundations, not just finding frameworks discussed in similar passages.

**Methodological genealogy** that maps where methods come from, what assumptions they carry, how they've evolved. This requires explicit relationships between methods, traditions, and underlying commitments.

**Research trajectory mapping** that shows how your own thinking has developed—which ideas led to which, which readings influenced which arguments, which collaborations shaped which projects.

In [[context engineering]], knowledge graphs provide the structure that enables AI to reason about your scholarship rather than merely retrieve similar content. The linked notes you build in Obsidian, the conceptual maps you sketch, the citation networks you trace—these are knowledge graphs. The question is whether to make them explicit enough for AI to traverse.

## The curation challenge

Building knowledge graphs requires work. Automated extraction via [[graphRAG]] helps but makes errors. Scholarly nuance is easily lost—subtle distinctions collapsed, contested relationships stated as fact, contextual qualifications stripped away.

This means knowledge graphs require active curation. The relationship between scholars isn't simply "cites" or "critiques"—it might be "extends while challenging certain assumptions" or "applies to a new context." Characterising relationships accurately requires scholarly judgement.

The investment makes sense when you're building knowledge infrastructure you'll use repeatedly—a research area you're committed to, a personal knowledge base supporting ongoing scholarship. For one-off literature reviews, manual reading may suffice. For building AI systems that can reason about your field, explicit knowledge graphs become essential.

## What remains difficult

How do we represent contested or ambiguous relationships? Scholarly disagreement is productive, not a bug to fix. What granularity is right—concepts, arguments, papers, authors? How do we handle evolving understanding as our reading deepens? When is explicit structure worth the effort versus trusting implicit knowledge?

Knowledge graphs work best for stabilised knowledge where relationships are relatively agreed upon. They struggle with emerging fields where every claim is contested, or with highly interpretive domains where relationships resist formalisation.

The question isn't whether knowledge graphs are always better than other representations but when their benefits—enabling structured reasoning, making connections explicit, supporting collaborative knowledge building—outweigh their costs in curation and maintenance.

---

## Sources

- Teki, S. (2025). Context Engineering: The 2025 Guide to Advanced AI Strategy and RAG.

---

## Notes

Knowledge graphs are to [[context engineering]] what [[vector database]]s are to [[prompt engineering]]. The choice of knowledge representation fundamentally shapes what AI can do with your work. Embeddings find similar passages. Knowledge graphs enable reasoning about connections.