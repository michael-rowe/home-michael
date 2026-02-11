---
title: Vector database
description: >-
  A database that stores embeddings for similarity-based retrieval, serving as
  the knowledge layer for RAG systems
aliases:
  - vector store
  - vector DB
type: note
author: '[[Michael Rowe]]'
created: 2026-02-10
updated: 2026-02-10
needs_review: false
tags:
  - generative-ai
  - information-retrieval
category: AI and technology
related:
  - '[[embeddings]]'
  - '[[retrieval augmented generation]]'
  - '[[graph database]]'
  - '[[knowledge graph]]'
  - '[[prompt engineering]]'
builds_on:
  - '[[embeddings]]'
leads_to:
  - '[[retrieval augmented generation]]'
contradicts: null
source: ''
source_url: ''
---

> [!info] Organising knowledge by similarity rather than category
> We typically organise information in categories -- folders, tags, subject headings. Vector databases take a fundamentally different approach, organising content by meaning. Documents about similar topics cluster together regardless of how they are labelled, enabling search that finds conceptually related content even when the exact words differ.

## Vector database

**One-sentence definition:** A database that stores [[embeddings]] -- numerical representations of text that capture semantic meaning -- enabling retrieval based on conceptual similarity rather than keyword matching.

In a vector database, every piece of content is converted into an array of numbers (an [[embeddings|embedding]]) that represents its meaning. When you search, your query is also converted into an embedding, and the database finds content whose numerical patterns are closest to yours. "Closest" here means semantically similar -- a query about "clinical teaching challenges" will surface content about "difficulties in bedside education" even though the words differ entirely.

This is what makes [[retrieval augmented generation]] work. Your documents -- clinical guidelines, research papers, course materials -- are chunked into passages, each converted into an embedding, and stored in the vector database. At query time, the system finds the passages most semantically similar to the question and feeds them to the language model as context.

## What this cannot do

The limitation matters: vector databases capture implicit, statistical relationships but not explicit, logical ones. They can tell you that "diabetes" and "insulin" are related (they frequently appear together in text) but not *how* they are related (insulin treats diabetes, not the reverse).

This is the fundamental distinction between vector databases and [[graph database]]s. Vector databases answer "what is similar to this?" Graph databases answer "how are these things connected?" For straightforward information retrieval, similarity is often sufficient. For reasoning that requires understanding relationships -- causation, hierarchy, influence, critique -- you need the explicit connections that [[knowledge graph]]s provide.

Pinecone is a common example of a hosted vector database; Chroma is a widely-used open-source alternative.

---

## Sources

- Gupta, M. (2024). What is GraphRAG? Data Science in Your Pocket. Medium. https://medium.com/data-science-in-your-pocket/what-is-graphrag-1ee1cc9027a4

---

## Notes

Vector databases are to [[prompt engineering]] what [[knowledge graph]]s are to [[context engineering]]. The choice of storage layer shapes what AI can do with your information -- similarity search or relational reasoning.
