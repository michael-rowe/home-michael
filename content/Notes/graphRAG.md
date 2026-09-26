---
title: GraphRAG
description: GraphRAG combines knowledge graphs with retrieval-augmented generation. Where ordinary RAG returns the passages most similar to a question, GraphRAG extracts the entities and relationships in a document collection and answers by following the connections between them, which is what questions about critiques, influences, or curriculum coverage need.
meta-description: "GraphRAG vs RAG: how GraphRAG builds a knowledge graph from your documents so AI can follow connections that ordinary retrieval misses."
aliases:
  - graph RAG
  - graph-based RAG
type: note
author: '[[Michael Rowe]]'
created: 2026-01-30
updated: 2026-09-26
draft: false
tags:
  - knowledge-graphs
  - retrieval-augmented-generation
  - context-engineering
  - curriculum-mapping
category:
  - Technology
related:
  - '[[Notes/context engineering]]'
  - '[[Notes/knowledge graph]]'
  - '[[Notes/retrieval augmented generation]]'
  - '[[Notes/multi-hop reasoning]]'
  - '[[Notes/vector database]]'
  - '[[Notes/graph database]]'
  - '[[Essays/curriculum-infrastructure]]'
builds_on:
  - '[[retrieval augmented generation]]'
  - '[[knowledge graph]]'
leads_to: null
contradicts: null
source: ''
source_url: ''
keyphrase: "graphrag vs rag"
linkedin:
reviewed:
  - note_writer
  - writing_style
  - SEO_optimiser
  - copy_editor
---

> [!info] GraphRAG builds the knowledge graph from your documents
> Scholars build up libraries of PDFs, notes, and annotations over years of reading and thinking, and most of what connects them stays locked inside the individual documents, where it's hard to synthesise and invisible to an AI system. GraphRAG extracts the entities and relationships in those documents and turns the collection into a structure you can query.

## GraphRAG

**One-sentence definition:** GraphRAG is a technique that automates [[Notes/knowledge graph|knowledge graph]] construction by extracting entities[^entity] and relationships from documents, enabling [[Notes/multi-hop reasoning|multi-hop reasoning]] over structured knowledge rather than similarity-based retrieval.

Traditional [[Notes/retrieval augmented generation|retrieval augmented generation]] can only return chunks[^chunk] of text. Ask "which methodological critiques of Theory A also apply to Theory B?" and RAG searches for passages that are statistically similar to the question. It might surface discussions of Theory A and discussions of Theory B, but it won't answer the question you asked, which means understanding the critiques of Theory A, identifying their methodological foundations, and recognising when those foundations appear in critiques of Theory B.

Answering it takes inference across connected concepts, and GraphRAG supports that by replacing flat text retrieval with a graph that keeps the relationships between concepts intact.

The name is used loosely for any retrieval that draws on a knowledge graph, and specifically for the method Microsoft Research published in 2024 (Edge et al., 2024). In that method a language model reads the documents in chunks, extracts entities and relationships, groups closely connected entities into communities, and writes a summary of each community. Questions about a whole collection, such as "what are the main themes across these documents?", are answered from those summaries. Ordinary RAG struggles with that kind of question because no single chunk holds the answer.

## How it works

GraphRAG turns unstructured documents into structured knowledge in five steps.

**Entity extraction** identifies the concepts, people, methods, and theories in your documents. When a paper mentions "social constructivism", the system records it as a theoretical framework in its own right, with attributes and instances.

**Relationship detection** determines how entities connect: that Paper A critiques Paper B's approach to validity, for instance, and that both draw on Methodology X, where a similarity search would only notice that both papers discuss validity.

**Graph construction** builds a [[Notes/knowledge graph|knowledge graph]] connecting entities through typed, directional relationships, usually held in a [[Notes/graph database|graph database]], and that structure is what makes it possible to query by following connections.

**Query processing** converts your questions into graph traversals[^traversal], in which the system follows relationship paths: Theory A → critiqued by → Critique X → based on → Methodological Assumption Y → also applies to → Theory B.

**Response synthesis** generates an answer by reasoning over the paths it found.

## Building a curriculum graph from the documents you already have

A programme already holds most of the relationships a curriculum graph needs, but they're written into prose. Module descriptors state which outcomes they address, assessment briefs say which outcomes they test, and the regulator's standards document lists what graduates must be able to do. Mapping these by hand is the work that lets curriculum maps fall out of date. GraphRAG's extraction step can draft the map from the documents themselves, proposing that this module addresses that outcome and this assessment tests it, for the programme team to confirm or correct. Once confirmed, the map can answer the coverage questions described in the [[Notes/graph database|graph database]] note and the [[Essays/curriculum-infrastructure|curriculum infrastructure]] essay. The same approach works across several years of external examiner reports or module evaluations, where a recurring concern is scattered across dozens of documents that nobody reads together.

## Why this matters for scholarship

Academic knowledge is inherently relational. Understanding a field means understanding how ideas connect — who built on whose work, which critiques challenge which assumptions, where conceptual parallels exist across apparently different domains. GraphRAG makes this relational structure explicit and computable, which supports questions that don't reduce to finding similar passages:

- **Comparison across frameworks:** "Which theoretical approaches share this assumption?"
- **Intellectual genealogy:** "How did Critic A's challenge to Scholar B influence Researcher C's later work?"
- **Structural parallels:** "What concepts from Field X address limitations in Approach Y?"
- **Contested relationships:** "Who disagrees with this characterisation and why?"

GraphRAG works with both curated knowledge (the links you've already built in an Obsidian vault) and automated extraction (your PDF or Zotero library). Automated extraction refined by scholarly judgement often works best: let GraphRAG draft a knowledge graph from your library, then refine the relationships as you use it.

## The quality question

Automated extraction inevitably makes errors. GraphRAG can identify that a relationship exists between Scholar A and Scholar B, but characterising it accurately, as "extends while challenging certain assumptions" rather than simply "cites", often requires scholarly judgement. The [[Notes/knowledge graph|knowledge graph]] note describes what that curation involves and when the investment pays off.

---

## Sources

- Edge, D., Trinh, H., Cheng, N., Bradley, J., Chao, A., Mody, A., Truitt, S., Metropolitansky, D., Ness, R. O., & Larson, J. (2024). *From local to global: A graph RAG approach to query-focused summarization* (arXiv:2404.16130). arXiv. https://doi.org/10.48550/arXiv.2404.16130
- Teki, S. (2025). *Context engineering: A framework for robust generative AI systems*. Sundeep Teki. https://www.sundeepteki.org/blog/context-engineering-a-framework-for-robust-generative-ai-systems

[^entity]: **Entity.** A distinct thing a system can recognise and name in text: a person, a theory, a method, a module, a learning outcome. In the sentence "Module 204 assesses outcome 3", the module and the outcome are both entities. See [Named entity](https://en.wikipedia.org/wiki/Named_entity).

[^chunk]: **Chunk.** A short passage, often a few hundred words, that a RAG system cuts a document into before storing it. A retrieval returns whole chunks, so an answer that depends on two passages in different documents is only found if both chunks happen to be retrieved. See [Retrieval-augmented generation: chunking](https://en.wikipedia.org/wiki/Retrieval-augmented_generation#Chunking).

[^traversal]: **Traversal.** Moving through a graph by following its edges from one node to the next, the way you'd trace a professional standard to the learning outcome that addresses it and then to the assessment that tests it. See [Graph traversal](https://en.wikipedia.org/wiki/Graph_traversal).
