---
title: Large language models
description: >-
  Large language models are deep learning models with billions of parameters,
  trained on vast text corpora using self-supervised learning, capable of
  general-purpose language tasks.
aliases:
  - LLM
  - LLMs
type: note
author: '[[Michael Rowe]]'
created: 2026-02-04T00:00:00.000Z
updated: 2026-02-04T00:00:00.000Z
needs_review: false
tags:
  - generative-ai
  - machine-learning
category: AI and technology
related:
  - '[[natural language processing]]'
  - '[[deep learning]]'
  - '[[AI alignment]]'
builds_on:
  - '[[Transformer models]]'
  - '[[self-supervised learning]]'
leads_to:
  - '[[AI agents]]'
  - '[[retrieval augmented generation]]'
contradicts: null
source: ''
source_url: ''
---

> [!tip] Scale driving emergence
> LLMs represent a fundamental shift in how AI capabilities develop—not through careful engineering of specific skills but through emergent properties arising from scale. This has profound implications for education, where we've historically assumed that producing certain artifacts (essays, analyses, code) required and therefore demonstrated understanding.

## Large language models

**One-sentence definition:** Deep learning models with billions of parameters, trained on vast text corpora using self-supervised learning, capable of general-purpose language understanding and generation tasks.

The defining characteristic of LLMs isn't what they can do but how their capabilities emerge. Earlier NLP approaches required building specialised models for specific tasks—one system for translation, another for summarisation, another for question-answering. LLMs are general-purpose systems whose capabilities arise from scale rather than explicit programming. Feed them enough data, give them enough parameters, provide enough computing power, and they develop abilities their creators didn't specifically design.

This emergence makes them simultaneously powerful and difficult to fully understand. We know they work. We're less certain about why specific capabilities appear at specific scales or how to predict what new abilities might emerge as models grow larger.

## How they actually work

LLMs build on transformer architecture introduced by Google in 2017 ("Attention Is All You Need"), which enabled efficient parallel processing of language data through attention mechanisms—systems that weight the importance of different parts of input when generating output.

The training process involves self-supervised learning through next-token prediction. Show the model billions of text sequences and teach it to predict what comes next. This sounds trivial but requires developing sophisticated internal representations of language structure, meaning, and context. The model learns patterns, relationships, and statistical regularities that enable it to generate coherent, contextually appropriate responses.

After pretraining on general corpora, models undergo fine-tuning or instruction-tuning to follow directions, maintain helpful behaviour, and align with human values. Techniques like reinforcement learning from human feedback (RLHF) and constitutional AI help shape model behaviour without retraining from scratch.

The result: systems that can perform tasks through prompting rather than requiring task-specific retraining. Want it to summarise? Ask it to summarise. Want it to translate? Ask it to translate. Want it to write code? Ask it to write code. This general-purpose capability represents a qualitative shift from earlier approaches.

## What this means for knowledge work

LLMs make artifact production computationally trivial. Essays, analyses, code, summaries—tasks that previously required substantial human effort—can now be generated in seconds. This reveals an uncomfortable truth: many of our assessment practices were measuring artifact production rather than the understanding we claimed they demonstrated.

The question isn't whether LLMs will transform knowledge work but how we adapt our practices—particularly in education—to a world where generation is easy. Traditional approaches assumed difficulty of production served as a reliable proxy for learning. That assumption no longer holds.

Three implications matter most:

**First**, we need to distinguish between what can be computationally generated and what requires human judgement. LLMs can produce fluent text, but they cannot determine whether that text serves a particular purpose in a particular context. They lack understanding of goals, values, constraints, and consequences.

**Second**, the shift from creation to curation to taste represents a fundamental change in where human value lies. When AI can generate multiple options quickly, the valuable human skill becomes evaluating which option best serves the purpose. This is why developing [[taste-and-judgement|taste and judgement]] becomes essential rather than peripheral.

**Third**, LLMs exhibit complementary errors to humans—they make different kinds of mistakes. This creates opportunities for productive human-AI collaboration where each compensates for the other's limitations. But it also means we cannot simply delegate tasks to AI without oversight.

## Known limitations

LLMs hallucinate—generating plausible but false information with confidence. They have context window constraints limiting how much information they can process at once. Their knowledge has temporal cutoffs beyond which they cannot reliably answer questions. They struggle with precise reasoning and mathematics despite appearing fluent in these domains.

These aren't merely technical limitations to be overcome with better engineering. Some reflect fundamental characteristics of how LLMs work. They're trained to predict plausible continuations, not to verify factual accuracy. This means fluency and accuracy don't correlate as strongly as we might intuitively expect.

## What remains uncertain

How do emergent capabilities arise from scale and architecture? We observe that certain abilities appear at certain model sizes, but we don't fully understand the mechanisms. How will LLMs evolve to balance capabilities with safety, transparency, and alignment? The field moves faster than our ability to develop appropriate governance frameworks.

What are the parallels and differences with human cognition? LLMs process language in ways that differ fundamentally from human understanding, yet they produce results that can be indistinguishable from human output. What does this tell us about language, thought, and intelligence?

The practical implication for organisations: LLMs are not a finished technology to deploy but an evolving capability requiring continuous evaluation and adaptation. The question isn't "should we use LLMs?" but "how do we develop organisational capacity to make informed choices about LLM use as capabilities evolve?"

---

## Sources

- Vaswani, A. et al. (2017). Attention Is All You Need. *NeurIPS*.
- Brown, T. et al. (2020). Language Models are Few-Shot Learners. *NeurIPS*.

---

## Notes

This note focuses on what scholars and knowledge workers need to understand about LLMs rather than providing comprehensive technical coverage. The conceptual framework—scale driving emergent capabilities, self-supervised pretraining, alignment through RLHF—provides more durable understanding than specific model comparisons, which date quickly as the field evolves.
