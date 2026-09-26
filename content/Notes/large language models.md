---
title: Large language models
description: >-
  A plain explanation of large language models: what they are, how they are
  trained, where their limits come from, and what their ability to produce
  fluent text means for assessment in health professions education.
meta-description: "Large language models in health professions education: what LLMs are, how they work, and why fluent AI text exposes what assessment measures."
keyphrase: "large language models in health professions education"
aliases:
  - LLM
  - LLMs
type: note
author: '[[Michael Rowe]]'
created: 2026-02-04
updated: 2026-09-26
draft: false
tags:
  - language-model
  - generative-ai
  - machine-learning
  - health-professions-education
category:
  - Technology
related:
  - '[[Notes/context window]]'
  - '[[Notes/hallucination]]'
  - '[[Notes/prompt engineering]]'
  - '[[Notes/embeddings]]'
  - '[[Essays/taste-and-judgement]]'
builds_on:
leads_to:
  - '[[Notes/ai-agents]]'
  - '[[Notes/retrieval augmented generation]]'
contradicts: null
source: ''
source_url: ''
linkedin:
reviewed:
  - note_writer
  - writing_style
  - SEO_optimiser
  - copy_editor
---

> [!info] Large language models make fluent text cheap to produce
> A large language model is trained on a vast amount of text to predict what comes next, and at sufficient scale that one task gives it the general ability to summarise, translate, explain, and write on request. Because it can produce a fluent essay or case study in seconds, it exposes how often health professions education has taken a finished piece of work as evidence of the understanding behind it.

## Large language models

**One-sentence definition:** A large language model (LLM) is an AI system trained on a very large body of text to predict the next word in a sequence, which at sufficient scale lets it summarise, translate, answer questions, and write in almost any style when asked.

Earlier language software was built one task at a time, with one system for translation, another for summarising, and another for answering questions. An LLM is a single general system: you describe the task in plain language, perhaps with an example or two, and it does it without being retrained (Brown et al., 2020). That generality came mainly from scale, meaning more text, larger models, and more computing power, and some of what these models can do wasn't designed in by the people who built them. Early reports described particular abilities appearing suddenly once models passed a certain size. That picture is disputed, since some of the apparent jumps depend on how the abilities were measured (Schaeffer et al., 2023).

## How they work

LLMs are built on the transformer,[^transformer] an architecture published by researchers at Google in 2017 (Vaswani et al., 2017). Training happens in two stages. In pretraining, the model works through billions of passages of text, repeatedly guessing the next [[Notes/token|token]] and adjusting itself after each guess. Getting good at that guess requires it to pick up grammar, facts, styles of argument, and the ways ideas tend to follow one another, which is why a model trained only to predict text can go on to do much more with it.

In the second stage the model is tuned to follow instructions and to behave helpfully, using techniques such as reinforcement learning from human feedback, in which people rate its answers and the model learns from their preferences. The assistants people use in a chat window are models that have been through both stages.

## What large language models mean for health professions education

LLMs make producing text, code, and summaries cheap, and much of education has relied on the effort of producing a piece of work as evidence of the understanding behind it. A written case study from a dietetics placement, setting out a nutritional assessment of a client, a care plan, and the reasoning for it, was long accepted as evidence that the student could reason through a client's needs. An LLM can now produce a plausible one from a few lines of notes. The case study was always a proxy for the reasoning, and it no longer works as one on its own.

Two consequences follow for teaching. The judgement about whether a piece of text serves its purpose, for a particular client or reader in a particular context, stays with the person using the model, which makes [[Essays/taste-and-judgement|taste and judgement]] central to what education has to develop. And because LLMs make different kinds of mistakes from people, working with one can catch errors that each would miss working alone, provided someone checks what the model produces.

## Limits that come from how they work

LLMs [[Notes/hallucination|hallucinate]], producing false statements with the same fluency and confidence as true ones. They work within a [[Notes/context window|context window]] that limits how much they can take into account at once, and their knowledge stops at a training cutoff. Better engineering will ease some of these limits, but hallucination comes from the training itself: a model trained to produce plausible continuations isn't checking them against the world, so fluency is a poor guide to accuracy.

Because these limits shift as the models change, an institution has to keep evaluating LLMs, with someone responsible for deciding which uses are appropriate at any given time. The comparison with human cognition is explored in *[[Posts/2026-02-06-LLM-similarities-human-cognition|Similarities between AI and human thinking]]*.

[^transformer]: **Transformer**: the kind of neural network that most current language models use. Its key feature, called attention, lets the model weigh every word in a passage against every other when working out what comes next, which is how it keeps track of meaning across long stretches of text. [Wikipedia](https://en.wikipedia.org/wiki/Transformer_(deep_learning_architecture))


---

## Sources

- Brown, T. B., et al. (2020). Language models are few-shot learners. *Advances in Neural Information Processing Systems, 33*, 1877–1901. https://arxiv.org/abs/2005.14165
- Schaeffer, R., Miranda, B., & Koyejo, S. (2023). Are emergent abilities of large language models a mirage? *Advances in Neural Information Processing Systems, 36*. https://arxiv.org/abs/2304.15004
- Vaswani, A., Shazeer, N., Parmar, N., Uszkoreit, J., Jones, L., Gomez, A. N., Kaiser, Ł., & Polosukhin, I. (2017). Attention is all you need. *Advances in Neural Information Processing Systems, 30*. https://arxiv.org/abs/1706.03762
