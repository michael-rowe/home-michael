---
title: Multi-hop reasoning
description: "Multi-hop reasoning with knowledge graphs: how AI answers questions that take several steps, and why recorded relationships make each step checkable."
aliases:
  - multi-step reasoning
  - chain reasoning
type: note
author: '[[Michael Rowe]]'
created: 2026-01-30
updated: 2026-09-24
draft: false
keyphrase: "multi-hop reasoning with knowledge graphs"
tags:
  - reasoning
  - knowledge-graphs
  - context-engineering
category:
  - Technology
related:
  - '[[Notes/context engineering]]'
  - '[[Notes/knowledge graph]]'
  - '[[Notes/graphRAG]]'
  - '[[Notes/prompt engineering]]'
  - '[[Notes/vector database]]'
  - '[[Notes/retrieval augmented generation]]'
  - '[[Notes/programmatic assessment]]'
builds_on:
  - '[[knowledge graph]]'
leads_to: null
contradicts: null
source: ''
source_url: ''
reviewed:
  - note_writer
  - writing_style
  - SEO_optimiser
  - copy_editor
linkedin:

---

> [!info] Some questions can only be answered in steps
> A retrieval system hands back passages that resemble the question. When the answer has to be assembled from several connected pieces of information, it leaves the assembly to you. Multi-hop reasoning follows the connections one step at a time, which is what makes it useful for work that depends on synthesis rather than lookup.

## Multi-hop reasoning

**One-sentence definition:** Answering a question by combining several pieces of information in sequence, where each step depends on the one before, instead of finding the answer in a single passage.

Ask a retrieval system "which methodological critiques of Theory A also apply to Theory B?" and it searches for text that is statistically similar to the query. It will find passages discussing Theory A and passages discussing Theory B, and it almost certainly won't answer the question, which requires understanding the critiques of Theory A, identifying their methodological foundations, and recognising when those same foundations turn up in critiques of Theory B. The work there is inference across connected concepts, and similarity matching[^similarity-matching] has no way to perform it.

Multi-hop reasoning does that work one step at a time, with each step starting from the result of the one before. A [[Notes/large language models|language model]] can attempt the chain on its own, or by searching again at each step, but every hop is a chance to go wrong, and the errors compound. Holding the knowledge as a [[Notes/knowledge graph|knowledge graph]] makes the hops explicit, so the system follows recorded relationships instead of inferring them. It's also where [[Notes/context engineering|context engineering]] parts company with [[Notes/prompt engineering|prompt engineering]]: what improves the answer is how the knowledge is structured, not how the question is phrased.

## Multi-hop reasoning with knowledge graphs

A single similarity search over a [[Notes/vector database|vector database]] finds passages that resemble the question, which is one hop at most (the [[Notes/knowledge graph|knowledge graph]] note sets out why). Chaining hops takes either a model running search after search and reasoning between them, or a structure where the connections are already recorded.

A graph with explicit, typed relationships between entities provides the second, so the system can traverse[^traverse] a path: Theory A → critiqued by → Critique X → based on → Methodological Assumption Y → also applies to → Theory B. Each step in that chain is a connection someone recorded. The capability depends entirely on how well those relationships are modelled, because you can't traverse a connection that was never represented.

[[Notes/programmatic assessment|Programmatic assessment]] asks a question of this kind about every student. A supervisor on a ward placement notes that a student's handovers leave out the patient's baseline. Whether that matters depends on whether the same gap appears elsewhere: in the communication competency it maps to, in the later assessments that test that competency, and in what the student's other supervisors wrote. The portfolio holds all of it, and a progress committee answers the question by following those links by hand. If the links between comments, competencies, and assessments are recorded, a system can follow them too, and show the committee each step it took.

## Academic work is relational

Scholarship is relational almost by definition. We build on predecessors, respond to critics, and look for structural parallels between domains that don't obviously share anything. Multi-hop reasoning lets a system take part in that kind of thinking.

Three further scholarly tasks show what this requires:

**Theoretical development**: "What concepts from complexity theory might address limitations in social constructivism?" requires understanding both frameworks, identifying specific limitations, finding structural parallels, and suggesting connections.

**Historiography**: "How did Scholar A's critique of Scholar B influence Scholar C's later work?" requires following chains of intellectual influence across time and citation networks.

**Interdisciplinary synthesis**: connecting concepts across fields where the relationships come from structural or functional parallels that keyword similarity won't surface.

Each of these tasks needs a chain of inference across relationships that somebody has modelled explicitly.

## The structure has to exist first

Multi-hop reasoning over a graph is only as good as the graph. A model working without one can still attempt the chain, but you can't see which hop failed; with one, each step is a relationship you can inspect. That's the case for the time spent linking ideas in your notes: it decides what can be inferred later, and whether anyone can check how.

[^similarity-matching]: **Similarity matching**: the way most AI search works. The question and every stored passage are turned into lists of numbers, and the passages whose numbers sit closest to the question's are returned. It finds text that resembles the question, which is different from text that answers it. [Wikipedia](https://en.wikipedia.org/wiki/Similarity_search)
[^traverse]: **Traverse**: move through a graph by following its links from one item to the next, the way a progress committee follows a supervisor's comment to the competency it concerns and then to the assessments that test that competency. [Wikipedia](https://en.wikipedia.org/wiki/Graph_traversal)

---

## Sources

- Teki, S. (2025). *Context engineering: A framework for robust generative AI systems*. Sundeep Teki. https://www.sundeepteki.org/blog/context-engineering-a-framework-for-robust-generative-ai-systems

---

## Notes

Multi-hop reasoning is what makes [[Notes/context engineering|context engineering]] valuable for scholarship, and for any work where the answer lives in the connections between records. In health professions education that includes most questions about a programme's design or a student's progress.
