---
title: Embeddings
description: >-
  Learned numerical representations of text that capture semantic meaning,
  enabling similarity-based search and retrieval
aliases:
  - embedding
  - vector embeddings
  - semantic vectors
type: note
author: '[[Michael Rowe]]'
created: 2026-02-10T00:00:00.000Z
updated: 2026-02-10T00:00:00.000Z
needs_review: false
tags:
  - generative-ai
  - language-model
  - information-retrieval
category: AI and technology
related:
  - '[[vector database]]'
  - '[[retrieval augmented generation]]'
  - '[[knowledge graph]]'
  - '[[single-hop reasoning]]'
builds_on: null
leads_to:
  - '[[vector database]]'
  - '[[retrieval augmented generation]]'
contradicts: null
source: ''
source_url: ''
---

> [!tip] Teaching computers what words mean
> Humans understand that "doctor" and "physician" mean roughly the same thing. Computers see them as entirely different strings of characters. Embeddings bridge this gap by converting text into arrays of numbers where similar meanings produce similar patterns -- giving machines a workable approximation of semantic understanding.

## Embeddings

**One-sentence definition:** Numerical representations of text, learned through training, where the mathematical relationships between numbers reflect the semantic relationships between concepts.

An embedding converts a word, sentence, or passage into a vector -- an array of hundreds or thousands of numbers. The key insight is that these numbers are not arbitrary. During training, AI models process millions of texts and learn which words appear in similar contexts. Words used similarly end up with similar numerical patterns. This is distributional semantics in practice -- "you know a word by the company it keeps."

Because similar meanings produce similar numerical patterns, you can find related content by measuring the mathematical distance between embeddings -- which is what powers [[retrieval augmented generation]] and [[vector database]]s.

## What embeddings capture -- and what they miss

Embeddings capture statistical patterns of co-occurrence. They represent which concepts appear in similar contexts, not how concepts are actually related. "Diabetes" and "insulin" will have related embeddings because they frequently appear together in medical text. But the embedding cannot tell you that insulin *treats* diabetes -- only that they are associated.

This matters because much scholarly reasoning depends on understanding *how* things relate, not just *that* they relate. Causation versus correlation. Critique versus extension. Influence versus opposition. These distinctions require the explicit, typed relationships that [[knowledge graph]]s provide rather than the implicit, statistical associations that embeddings capture.

The often-cited example -- `"king" - "man" + "woman" ≈ "queen"` -- demonstrates that embeddings capture *something* meaningful. But for complex reasoning across connected concepts, that "something" is not enough. This is why [[context engineering]] moves beyond embeddings to knowledge graphs: from implicit statistical meaning to explicit relational meaning.

---

## Sources

- Dickson, B. (2023). How to customize LLMs like ChatGPT with your own data and documents. TechTalks. https://bdtechtalks.com/2023/05/01/customize-chatgpt-llm-embeddings/

---

## Notes

All embeddings are vectors but not all vectors are embeddings. A vector is just a format -- an array of numbers. An embedding is a vector where the numbers have learned semantic meaning. The distinction matters: GPS coordinates are vectors but not embeddings.
