---
title: Retrieval augmented generation
description: >-
  A technique that improves LLM responses by retrieving relevant information
  from external sources and including it in the prompt
aliases:
  - RAG
  - baseline RAG
type: note
author: '[[Michael Rowe]]'
created: 2026-02-10T00:00:00.000Z
updated: 2026-02-10T00:00:00.000Z
needs_review: false
tags:
  - generative-ai
  - large language models
  - information-retrieval
category: AI and technology
related:
  - '[[prompt engineering]]'
  - '[[context engineering]]'
  - '[[vector database]]'
  - '[[embeddings]]'
  - '[[graphRAG]]'
  - '[[single-hop reasoning]]'
builds_on:
  - '[[embeddings]]'
  - '[[vector database]]'
leads_to:
  - '[[graphRAG]]'
contradicts: null
source: ''
source_url: ''
---

> [!tip] Letting AI look things up before answering
> Language models generate responses from patterns learned during training, which means they can be confidently wrong about specific facts. RAG addresses this by retrieving relevant information from external sources and including it in the prompt -- essentially letting AI consult reference material before responding, much as a student might consult their notes before answering a question.

## Retrieval augmented generation

**One-sentence definition:** A technique that improves language model responses by automatically retrieving relevant information from external data sources and incorporating it into the prompt as additional context.

The fundamental problem RAG addresses is that language models have incomplete knowledge. They were trained on a snapshot of public data and know nothing about your organisation, your research, or anything that has changed since their training. Rather than retraining models (expensive and potentially damaging to general capabilities), RAG supplements them with relevant information at query time.

This is powerful for straightforward question-answering. Ask about a specific clinical guideline, and RAG retrieves the relevant passages. Ask about your institution's assessment policy, and it pulls the right document. The model generates responses grounded in actual sources rather than probabilistic guesses.

## Where it falls short

RAG relies on [[single-hop reasoning]] -- finding text chunks that are statistically similar to the query. This works well when the answer exists in a single passage. It struggles when answering requires connecting information across multiple sources, understanding relationships between concepts, or synthesising across domains.

Ask "what are the symptoms of diabetes?" and RAG performs well. Ask "which methodological critiques of one assessment approach also apply to another?" and RAG returns passages about each approach separately -- it cannot traverse the conceptual connections needed to answer the actual question.

This limitation is precisely what [[graphRAG]] addresses, moving from similarity-based retrieval to relationship-aware reasoning through [[knowledge graph]]s. RAG finds relevant passages. GraphRAG reasons across connected concepts.

RAG remains the right choice for many applications -- it is simpler to implement, well-understood, and effective for direct question-answering. The question is whether your use case requires retrieval or reasoning. For isolated factual queries, RAG suffices. For complex synthesis across interconnected knowledge, [[context engineering]] offers a more capable alternative.

---

## Sources

- Lewis, P. et al. (2020). Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks. https://arxiv.org/abs/2005.11401v4
- Gupta, M. (2024). What is GraphRAG? Data Science in Your Pocket. Medium. https://medium.com/data-science-in-your-pocket/what-is-graphrag-1ee1cc9027a4

---

## Notes

RAG is to [[prompt engineering]] what [[graphRAG]] is to [[context engineering]]. The choice between them isn't about which is better but about what kind of reasoning your application requires -- retrieval or inference.
