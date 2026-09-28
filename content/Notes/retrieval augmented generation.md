---
title: Retrieval augmented generation
description: A technique that improves a language model's answers by retrieving relevant passages from your own documents and adding them to the prompt, so the model answers from sources instead of from memory alone.
meta-description: "What is retrieval augmented generation? How RAG lets AI look up your documents before answering, where it works well, and where it falls short."
aliases:
  - RAG
  - baseline RAG
type: note
author: "[[Michael Rowe]]"
created: 2026-02-10
updated: 2026-09-28
draft: false
tags:
  - generative-ai
  - information-retrieval
  - retrieval-augmented-generation
category:
  - Technology
related:
  - "[[Notes/context engineering]]"
  - "[[Notes/vector database]]"
  - "[[Notes/embeddings]]"
  - "[[Notes/graphRAG]]"
  - "[[Notes/single-hop reasoning]]"
  - "[[Notes/hallucination]]"
builds_on:
  - "[[embeddings]]"
  - "[[vector database]]"
leads_to:
  - "[[graphRAG]]"
contradicts:
source: ""
source_url: ""
keyphrase: "what is retrieval augmented generation"
linkedin:
reviewed:
  - note_writer
  - writing_style
  - SEO_optimiser
  - copy_editor

---

> [!info] RAG lets AI look things up before it answers
> Language models generate responses from patterns learned during training, which means they can be confidently wrong about specific facts. Retrieval augmented generation retrieves relevant information from external sources and includes it in the prompt, letting the model consult reference material before responding, much as a student might check their notes before answering a question.

## Retrieval augmented generation

**One-sentence definition:** Retrieval augmented generation (RAG) is a technique that improves a language model's responses by automatically retrieving relevant information from external sources and adding it to the prompt as extra context (Lewis et al., 2020).

The problem RAG addresses is that language models have incomplete knowledge. They were trained on a snapshot of public data and know nothing about your organisation, your research, or anything that has changed since training. Retraining a model is expensive and can damage its general capabilities, so RAG supplements it with relevant information at the moment a question is asked. In most systems the documents are split into short passages, stored as [[Notes/embeddings|embeddings]] in a [[Notes/vector database|vector database]], and the passages closest in meaning to the question are passed to the model along with it.

That works well for straightforward question-answering. Ask about a specific clinical guideline, and RAG retrieves the relevant passages; ask about your institution's assessment policy, and it pulls the right document. A paramedic science programme could put its placement handbook behind a RAG assistant, so that a student asking at 11pm how many shifts they can miss before a placement is at risk gets an answer drawn from the handbook's own wording. The model's answer is grounded in actual sources, which reduces, though doesn't remove, the risk of [[Notes/hallucination|hallucination]].

### Where it falls short

RAG relies on [[Notes/single-hop reasoning|single-hop reasoning]]: finding passages that are statistically similar to the query. That works when the answer sits in a single passage. It struggles when the answer depends on connecting information across several sources or on the relationships between concepts. Ask what the handbook says about missed shifts and RAG performs well; ask which methodological critiques of one assessment approach also apply to another, and it returns passages about each approach separately, without the connections the question turns on.

[[Notes/graphRAG|GraphRAG]] addresses that limit by retrieving from a [[Notes/knowledge graph|knowledge graph]], so the relationships between concepts are kept and can be followed. Ordinary RAG remains the right choice for many applications: it's simpler to build, well understood, and effective for direct questions. The deciding question is whether your use case needs retrieval of a passage or reasoning across connected ones.

---

## Sources

- Gupta, M. (2024). What is GraphRAG? *Data Science in Your Pocket*. Medium. https://medium.com/data-science-in-your-pocket/what-is-graphrag-1ee1cc9027a4
- Lewis, P., Perez, E., Piktus, A., et al. (2020). Retrieval-augmented generation for knowledge-intensive NLP tasks. In *Advances in Neural Information Processing Systems 33* (pp. 9459–9474). https://arxiv.org/abs/2005.11401

---

## Notes

RAG is one of the retrieval techniques [[Notes/context engineering|context engineering]] draws on, and GraphRAG another. The choice between them depends on what kind of reasoning an application requires: retrieving what a document says, or inferring across what several documents say together.
