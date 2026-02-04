---
title: Large language models
description: "Large language models are deep learning models with billions of parameters, trained on vast text corpora using self-supervised learning, capable of general-purpose language tasks."
aliases:
  - LLM
  - LLMs
type: note
author: "[[Michael Rowe]]"
created: 2026-02-04
updated: 2026-02-04
status: draft
needs_review: false
tags:
  - generative-ai
  - machine-learning
  - artificial-intelligence
category: "Technology"
related:
  - "[[natural language processing]]"
  - "[[deep learning]]"
  - "[[AI alignment]]"
builds_on:
  - "[[Transformer models]]"
  - "[[self-supervised learning]]"
leads_to:
  - "[[AI agents]]"
  - "[[retrieval augmented generation]]"
contradicts:
source: ""
source_url: ""
---

## Definition

**Large language model** (noun): A deep learning model with billions or more parameters, trained on large quantities of unlabelled text using self-supervised learning, capable of general-purpose language understanding and generation tasks.

The term has no formal definition but typically refers to models with parameter counts in the billions or trillions. Unlike earlier NLP approaches that required specialised models for specific tasks, LLMs are general-purpose systems whose capabilities emerge from scale—the amount of data, parameter size, and computing power devoted to training.

Key characteristics:
- Trained on vast text corpora using next-token prediction
- Billions to trillions of parameters
- General-purpose rather than task-specific
- Emergent capabilities not explicitly programmed
- Require significant computational infrastructure

## Context and background

LLMs emerged from the neural network renaissance of the 2010s, building on earlier statistical language modelling. The modern era began with Google's introduction of the Transformer architecture in 2017 ("Attention Is All You Need"), which enabled more efficient parallel processing of language data.

OpenAI's GPT series, beginning in 2018, demonstrated that scaling model size and training data could yield dramatic improvements. The 2020 release of GPT-3 marked a pivotal moment, revealing emergent abilities arising from scale rather than explicit programming. The field accelerated after 2020 with models like BERT, T5, PaLM, Claude, and GPT-4 pushing boundaries of size, training methods, and capabilities.

LLMs developed in response to limitations of earlier NLP approaches that struggled with context, nuance, and generative capabilities. The shift represented a move from supervised learning on task-specific datasets to self-supervised pretraining on general corpora, followed by fine-tuning or instruction-tuning.

## Distinctive characteristics

**Core architecture:**
- Transformer models (encoder, decoder, or encoder-decoder configurations)
- Attention mechanisms (self-attention, multi-head attention)
- Tokenisation approaches (BPE, WordPiece, SentencePiece)
- Massive parameter scales

**Training methodology:**
- Self-supervised learning through next-token prediction
- Reinforcement learning from human feedback (RLHF)
- Constitutional AI approaches
- Fine-tuning for specific tasks or alignment goals

**What distinguishes LLMs from earlier approaches:**
- Scale as the primary driver of capability
- Emergent abilities not present in smaller models
- General-purpose rather than task-specific design
- Ability to perform tasks through prompting rather than retraining

## Applications

**Operational processes:**
- Pretraining: learning language patterns from vast corpora
- Fine-tuning: adapting to specific tasks or alignment goals
- Inference: generating responses to prompts
- Context handling: processing and utilising context windows

**Interaction patterns:**
- Prompting techniques and prompt engineering
- Chain-of-thought reasoning
- Few-shot and zero-shot learning
- Tool use and function calling

**Capability spectrum:**
- Factual recall and question answering
- Reasoning and analysis
- Creative generation
- Instruction following
- Code generation and debugging
- Translation and summarisation

## Implications

**For knowledge work and education:**
- Transformation of writing, research, and analysis tasks
- New approaches to learning and assessment
- Questions about academic integrity and AI-assisted work
- Potential for personalised learning support

**For society:**
- Impact on labour markets and knowledge work
- Content creation and media landscape transformation
- Misinformation and synthetic content concerns
- Accessibility of expertise and information

**For technical development:**
- Hardware architecture co-evolution
- Significant energy and computational resource requirements
- New evaluation and red-teaming methodologies
- Data curation and quality control challenges

## Questions and tensions

**Known limitations:**
- Hallucinations: generating plausible but false information
- Context window constraints
- Temporal knowledge cutoffs
- Difficulty with precise reasoning and mathematics

**Open questions:**
- How do emergent capabilities arise from scale and architecture?
- How will LLMs evolve to balance capabilities with safety, transparency, and alignment?
- What are the parallels and differences with human cognition?
- How should governance frameworks develop alongside capabilities?

**Safety and alignment concerns:**
- Interpretability and transparency
- Value alignment techniques
- Bias mitigation
- Deployment safeguards

## My thinking

LLMs represent a significant shift in how we think about AI capabilities—from carefully engineered systems to emergent properties arising from scale. This has profound implications for education, where we've historically assumed that producing certain artifacts (essays, analyses, code) required and therefore demonstrated understanding.

The question isn't whether LLMs will transform knowledge work but how we adapt our practices—particularly in education—to a world where generation is computationally trivial. This connects to the bitter lesson: we may have been measuring artifact production rather than learning itself.

What remains unclear is how capabilities will continue to scale and whether current approaches have fundamental limits. The field moves faster than our ability to develop appropriate governance and educational responses.

---

## Sources

- Vaswani, A. et al. (2017). Attention Is All You Need. *NeurIPS*.
- Brown, T. et al. (2020). Language Models are Few-Shot Learners. *NeurIPS*.
- Wikipedia contributors. (2023). Large language model.

---

## Notes

This note synthesises foundational concepts about LLMs. As the field evolves rapidly, specific model capabilities and limitations may shift. The conceptual framework—scale driving emergent capabilities, self-supervised pretraining, alignment through RLHF—provides more durable understanding than specific model comparisons.
