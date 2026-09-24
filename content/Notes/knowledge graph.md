---
title: Knowledge graph
description: "How a knowledge graph differs from a vector database: it stores entities and the typed relationships between them, so AI can reason across connections."
aliases:
  - knowledge graphs
type: note
author: "[[Michael Rowe]]"
created: 2026-01-30
updated: 2026-09-24
draft: false
keyphrase: "knowledge graph vs vector database"
tags:
  - knowledge-representation
  - knowledge-graphs
  - information-architecture
  - context-engineering
  - vector-database
category:
  - Information management
related:
  - "[[Notes/context engineering]]"
  - "[[Notes/graphRAG]]"
  - "[[Notes/multi-hop reasoning]]"
  - "[[Notes/vector database]]"
  - "[[Notes/graph database]]"
  - "[[Notes/embeddings]]"
  - "[[Notes/retrieval augmented generation]]"
builds_on:
leads_to:
  - "[[context engineering]]"
contradicts:
source: ""
source_url: ""
reviewed:
  - note_writer
  - writing_style
  - SEO_optimiser
  - copy_editor
linkedin:

---

> [!info] In a knowledge graph, the connections carry the meaning
> We understand concepts through their connections to other concepts, theories through their critiques and extensions, methods through the traditions they came out of. A knowledge graph makes that relational structure explicit and computable, treating the connections between ideas as carrying as much information as the ideas themselves.

## Knowledge graph

**One-sentence definition:** A structured representation of knowledge that connects entities through explicit, typed relationships, enabling traversal[^traversal] and reasoning over conceptual connections rather than statistical similarity.

Scholars have always built knowledge graphs, even if we didn't call them that. The citation network showing who built on whose work, the conceptual map linking related theories, the methodological genealogy tracing an intellectual tradition — each is a network of entities connected by meaningful relationships.

What's changed is that these structures can now be made computationally explicit, so a system can reason about them. Not simply that Paper A and Paper B both discuss validity, but that Paper A critiques Paper B's approach to validity, that both draw on Methodology X, and that the same critique reaches Framework Y.

## How they work

A knowledge graph consists of nodes and edges. **Nodes** represent the entities you want to reason about — concepts, people, papers, methods, theories — and carry properties of their own: a scholar has an affiliation and research interests, a paper has a publication year and a methodology, a concept has a definition and a domain.

**Edges** represent typed relationships, which say how two things are connected and in which direction: Schön built his account of reflective practice on Dewey's account of reflective thinking, and Paper A extends Paper B while challenging some of its assumptions. Properties can attach to edges as well as nodes, so a 'critiques' relationship can record the nature of the critique, the year it was published, and whether the person critiqued ever acknowledged it.

Written out, the structure looks like this: `(Paper A) --[extends while challenging]--> (Paper B)`

A programme's curriculum map is a knowledge graph most educators already maintain, usually as a spreadsheet. The nodes are professional standards, learning outcomes, modules, assessments, and placements; the edges say which outcome maps to which standard, which assessment tests which outcome, and which module prepares students for which placement. Held as a spreadsheet, the map answers questions one row at a time. Held as a graph, it can answer questions that follow the edges, such as which of the regulator's standards are only ever assessed on placement, or which outcomes are tested by an assessment that no earlier module prepares students for.

## Knowledge graph vs vector database

[[Notes/vector database|Vector databases]] store numerical representations of text, called [[Notes/embeddings|embeddings]], that support similarity search. That works for finding passages about similar topics, but it can't answer questions about how concepts relate, because embeddings capture co-occurrence patterns rather than explicit relationships.

The difference lies in what each treats as meaning. Embeddings encode the linguist J. R. Firth's principle that you know a word by the company it keeps (Firth, 1957), which is distributional semantics[^distributional-semantics] built on statistical patterns. Knowledge graphs encode a different principle, that you know a concept by its connections, which is structural semantics[^structural-semantics] built on relationships someone has stated.

Query a vector database for 'social constructivism' and you'll find the passages that discuss it most. Query a knowledge graph and you can ask which critiques of social constructivism also apply to phenomenology, a question about shared methodological foundations that no amount of similar text will answer. This is why knowledge graphs support [[Notes/multi-hop reasoning|multi-hop reasoning]] while vector databases support only single-hop retrieval.

## What becomes possible once the graph is explicit

One use is following chains of critique and influence through a citation network, which the [[Notes/multi-hop reasoning|multi-hop reasoning]] note works through. Two more are specific to holding your own field as a graph.

**Methodological genealogy** maps where methods come from, what assumptions they carry, and how they've changed, which needs explicit relationships between methods, traditions, and underlying commitments.

**Research trajectory mapping** shows how your own thinking has developed: which ideas led to which, which readings shaped which arguments, which collaborations produced which projects.

In [[Notes/context engineering|context engineering]], the graph is what lets AI reason about how your scholarship fits together. The linked notes in Obsidian, the conceptual maps, and the citation networks you trace are already knowledge graphs; the question is whether to make them explicit enough to traverse.

## The curation challenge

Building a knowledge graph takes work. Automated extraction through [[Notes/graphRAG|GraphRAG]] helps, but it makes errors, and scholarly nuance is easily lost in the process — subtle distinctions collapsed, contested relationships stated as settled, contextual qualifications stripped out.

So a graph needs active curation. The relationship between two scholars is rarely just 'cites' or 'critiques'; it might be 'applies to a new context' or 'accepts the method but rejects the conclusions', and characterising it accurately takes scholarly judgement.

The investment makes sense when you're building knowledge infrastructure you'll return to, such as a research area you're committed to or a personal knowledge base supporting ongoing work. For a one-off literature review, reading will do. For building systems that can reason about your field, the explicit graph is what makes it possible.

## What remains difficult

How to represent contested or ambiguous relationships, when scholarly disagreement is productive rather than a fault to be corrected. What granularity is right: concepts, arguments, papers, authors. How to handle understanding that shifts as your reading deepens. When explicit structure earns the effort, and when trusting implicit knowledge is enough.

Knowledge graphs work best for stabilised knowledge where relationships are broadly agreed. They struggle in emerging fields where every claim is contested, and in highly interpretive domains where relationships resist formalisation. The useful question isn't whether a graph beats other representations but when its benefits — structured reasoning, explicit connections, knowledge that others can build on — outweigh what it costs to curate and maintain.

[^traversal]: **Traversal**: moving through a graph by following its edges from one node to the next, the way you'd trace a learning outcome to the module that teaches it and then to the assessment that tests it. [Wikipedia](https://en.wikipedia.org/wiki/Graph_traversal)
[^distributional-semantics]: **Distributional semantics**: the idea that a word's meaning can be inferred from the words it tends to appear alongside. It's the principle behind embeddings: two passages end up close together because they use similar words in similar ways, whether or not they make the same claim. [Wikipedia](https://en.wikipedia.org/wiki/Distributional_semantics)
[^structural-semantics]: **Structural semantics**: here, meaning carried by explicitly stated relationships between concepts, as in a semantic network, where 'assessed by' or 'prerequisite for' is written into the structure instead of inferred from word patterns. [Wikipedia: semantic network](https://en.wikipedia.org/wiki/Semantic_network)

---

## Sources

- Firth, J. R. (1957). A synopsis of linguistic theory, 1930–1955. In *Studies in linguistic analysis* (pp. 1–32). Blackwell.
- Teki, S. (2025). *Context engineering: The 2025 guide to advanced AI strategy and RAG*. https://www.sundeepteki.org/blog/context-engineering-a-framework-for-robust-generative-ai-systems

---

## Notes

Most [[Notes/context engineering|context engineering]] uses both representations, with [[Notes/retrieval augmented generation|retrieval]] over embeddings to find material and a graph to reason about how it connects.
