---
title: Inference
description: The process by which a trained language model generates outputs; the computational work that happens each time you send a prompt and receive a response.
aliases:
type: note
author: "[[Michael Rowe]]"
created: 2026-02-16
updated: 2026-02-16
status: draft
draft: false
tags:
  - large-language-models
  - ai-integration
category: AI and technology
related:
  - "[[large language models]]"
  - "[[token budget]]"
keyphrase: what is AI inference
meta-description: AI inference is the computational work behind every prompt response — understanding it explains why different models suit different tasks.
slug: notes/inference
reviewed:
  - writing_style
  - note_writer
  - copy_editor
  - SEO_optimiser
---

> [!info] Inference is where AI costs are actually incurred
> Training builds the model once; inference is the ongoing process of running it. Every time you send a prompt and receive a response, that process is inference — and not all inference costs the same. Complex reasoning requires more computational work than straightforward instruction-following, which is why different models suit different tasks.

## Inference

**One-sentence definition:** AI inference is the computational process of generating outputs from a trained language model, as distinct from training the model itself.

*Training* is how a model learns; the computationally intensive, one-time process of adjusting billions of parameters against a large dataset. *Inference* is everything after that: the process of running the trained model to generate a response to a given input. Every time you send a prompt and receive a response, that process is inference.

Inference in large language models works autoregressively: the model generates one token at a time, with each token predicted based on the full sequence of tokens that precede it. A short reply and a long reply both involve the same token-by-token process; the long one simply involves more steps. This is why output length affects cost, but it isn't the only factor — the *nature* of the generation matters too.

### Why task type affects inference cost

Not all token generation is equal. Producing a well-structured argument, resolving ambiguity in a prompt, or synthesising patterns across complex material requires the model to do more work at each step than copying a format, applying a template, or following an explicit procedure. Extended reasoning features, where a model visibly "thinks through" a problem before responding, are a direct expression of this: they increase inference cost in exchange for more careful output.

This is what makes the concept of [[token budget]] useful: it names the variation in inference cost across task types, rather than treating all generation as equivalent.

### The training/inference distinction for practitioners

For most people using AI tools, training is invisible and sunk. The relevant question is always about inference: how much computational work does this task require, and am I using the right model for it? A model chosen for its training-time capabilities may be mismatched to a task's inference-time requirements — capable of much more than the task demands, and potentially worse for it.

---

## Notes
See also: [[large language models]] for how LLMs are built and work more broadly; [[token budget]] for the practical implication that different tasks have different inference costs.
