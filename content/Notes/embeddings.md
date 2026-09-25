---
title: Embeddings
description: "An embedding is a list of numbers, learned during training, that represents a piece of text so that similar meanings get similar numbers. Embeddings let AI find material by meaning rather than by matching words, but they record that ideas are associated, not how they are related."
meta-description: "What are embeddings in AI? How text becomes numbers that capture meaning, why that powers search by meaning, and what it can't tell you."
aliases:
  - embedding
  - vector embeddings
  - semantic vectors
type: note
author: "[[Michael Rowe]]"
created: 2026-02-10
updated: 2026-09-25
draft: false
keyphrase: "what are embeddings in AI"
tags:
  - generative-ai
  - information-retrieval
  - vector-database
category:
  - Technology
related:
  - "[[Notes/vector database]]"
  - "[[Notes/retrieval augmented generation]]"
  - "[[Notes/knowledge graph]]"
  - "[[Notes/single-hop reasoning]]"
  - "[[Notes/multi-hop reasoning]]"
  - "[[Notes/context engineering]]"
builds_on:
leads_to:
  - "[[vector database]]"
  - "[[retrieval augmented generation]]"
contradicts:
source: ""
source_url: ""
linkedin:
reviewed:
  - note_writer
  - writing_style
  - SEO_optimiser
  - copy_editor
---

> [!info] Embeddings turn similarity of meaning into distance between numbers.
> A person reading "doctor" and "physician" knows they mean nearly the same thing, while to a computer they're two unrelated strings of characters. Embeddings turn text into lists of numbers in which similar meanings produce similar numbers, and that gives a machine a workable approximation of meaning.

## Embeddings

**One-sentence definition:** An embedding is a list of numbers, learned during training, that represents a piece of text so that texts with similar meanings end up with similar numbers.

An embedding converts a word, sentence, or passage into a vector, an array of hundreds or thousands of numbers. The numbers come from training: a model processes millions of texts, learns which words appear in similar contexts, and gives words that are used in similar ways similar numbers. This is distributional semantics[^distributional-semantics] in practice, summed up in Firth's line "you shall know a word by the company it keeps" (Firth, 1957, p. 11).

Measuring the distance between embeddings finds related content, and that's what powers [[Notes/retrieval augmented generation|retrieval augmented generation]] and [[Notes/vector database|vector databases]].

Picture a year of module evaluation comments and a search for everything students said about feedback. A keyword search finds the comments that contain the word. A search over embeddings also finds "I never knew how I was doing until the grades came out", because that comment sits close to feedback in meaning even though it shares no words with the query.

### What embeddings capture and what they miss

Embeddings capture statistical patterns of co-occurrence. They represent which concepts appear in similar contexts, not how concepts are actually related. "Diabetes" and "insulin" will have related embeddings because they frequently appear together in medical text. But the embedding can't tell you that insulin *treats* diabetes, only that the two are associated.

This matters whenever a question depends on *how* things relate: whether one finding causes another, or whether a paper extends an argument or critiques it. Those distinctions need the explicit, typed relationships that a [[Notes/knowledge graph|knowledge graph]] stores. The often-cited example, `"king" - "man" + "woman" ≈ "queen"` (Mikolov et al., 2013), shows that embeddings capture something real about meaning. The knowledge graph note sets out where that stops being enough, and [[Notes/context engineering|context engineering]] covers how the two are used together.

---

## Sources

- Dickson, B. (2023, May 1). How to customize LLMs like ChatGPT with your own data and documents. *TechTalks*. https://bdtechtalks.com/2023/05/01/customize-chatgpt-llm-embeddings/
- Firth, J. R. (1957). A synopsis of linguistic theory, 1930–1955. In *Studies in linguistic analysis* (pp. 1–32). Blackwell.
- Mikolov, T., Yih, W., & Zweig, G. (2013). Linguistic regularities in continuous space word representations. In *Proceedings of the 2013 Conference of the North American Chapter of the Association for Computational Linguistics: Human Language Technologies* (pp. 746–751). Association for Computational Linguistics. https://aclanthology.org/N13-1090/

---

## Notes

Every embedding is a vector, but a vector is only a format, an array of numbers, and GPS coordinates are vectors too. What makes a vector an embedding is that its numbers were learned from text and carry meaning.

[^distributional-semantics]: **Distributional semantics** is the idea, from linguistics, that words used in similar contexts tend to have similar meanings, so meaning can be estimated by counting which words appear together. It's why a model that has never been told what "preceptor" means can still place it near "mentor" and "clinical supervisor". [Wikipedia: Distributional semantics](https://en.wikipedia.org/wiki/Distributional_semantics)
