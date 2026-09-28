---
title: Vector database
description: >-
  A database that stores embeddings, so that it can find content by meaning
  instead of by matching words. It's the storage layer behind most RAG systems.
meta-description: "What is a vector database? How storing text as embeddings lets AI search by meaning, why RAG depends on it, and what it can't tell you."
aliases:
  - vector store
  - vector DB
type: note
author: '[[Michael Rowe]]'
created: 2026-02-10
updated: 2026-09-28
draft: false
tags:
  - generative-ai
  - information-retrieval
  - vector-database
category:
  - Technology
related:
  - '[[Notes/embeddings]]'
  - '[[Notes/retrieval augmented generation]]'
  - '[[Notes/graph database]]'
  - '[[Notes/knowledge graph]]'
  - '[[Notes/single-hop reasoning]]'
builds_on:
  - '[[embeddings]]'
leads_to:
  - '[[retrieval augmented generation]]'
contradicts: null
source: ''
source_url: ''
keyphrase: "what is a vector database"
linkedin:
reviewed:
  - note_writer
  - writing_style
  - SEO_optimiser
  - copy_editor

---

> [!info] A vector database organises knowledge by meaning
> We usually organise information in categories: folders, tags, subject headings. A vector database organises content by what it means, so documents about similar topics sit close together however they're labelled, and a search finds conceptually related material even when the words differ.

## Vector database

**One-sentence definition:** A vector database stores [[Notes/embeddings|embeddings]] — numerical representations of text that capture its meaning — so that content can be retrieved by conceptual similarity as well as by keyword.

In a vector database, every piece of content is converted into a list of numbers, an embedding, that represents its meaning. When you search, your query is converted in the same way, and the database returns the content whose numbers sit closest to it (Schwaber-Cohen, 2023). "Closest" here means similar in meaning: a query about "clinical teaching challenges" will surface a passage about "difficulties in bedside education" even though none of the words match. The same search across several years of module evaluations would gather every comment about feeling unprepared for placement, whether students wrote "thrown in at the deep end", "no induction", or "didn't know what was expected of me".

This is what makes [[Notes/retrieval augmented generation|retrieval augmented generation]] work. Your documents — clinical guidelines, research papers, course materials — are cut into passages, each passage is converted into an embedding and stored in the vector database, and at query time the system finds the passages closest to the question and gives them to the language model as context.

### What a vector database can't tell you

Vector databases capture implicit, statistical relationships and leave out explicit, logical ones. They can tell you that "diabetes" and "insulin" are related, because the words often appear together in text, but not *how* they're related: that insulin treats diabetes, and not the reverse.

That's the difference between vector databases and [[Notes/graph database|graph databases]]. A vector database answers "what is similar to this?", and a graph database answers "how are these things connected?" For straightforward retrieval, similarity is often enough. Reasoning that depends on relationships — causation, hierarchy, influence, critique — needs the explicit connections a [[Notes/knowledge graph|knowledge graph]] records.

Pinecone is a common example of a hosted vector database, and Chroma a widely used open source alternative (Chroma, n.d.).

---

## Sources

- Chroma. (n.d.). *Introduction*. Chroma Docs. https://docs.trychroma.com/docs/overview/introduction
- Schwaber-Cohen, R. (2023, May 3). *What is a vector database and how does it work?* Pinecone. https://www.pinecone.io/learn/vector-database/

---

## Notes

The storage layer shapes what AI can do with your information. A vector database supports similarity search, a knowledge graph supports relational reasoning, and [[Notes/context engineering|context engineering]] often draws on both.
