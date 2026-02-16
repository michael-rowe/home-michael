---
title: LLM context drift
description: Learn about LLM context drift (or context rot) and how the reduction in output quality as tokens increase affects complex AI workflows.
aliases:
  - context rot
  - context drift
type: note
author: "[[Michael Rowe]]"
created: 2026-02-14
updated: 2026-02-14
status: published
tags:
  - context
  - reasoning
  - large-language-models
  - ai-agents
category:
  - AI and technology
related:
  - "[[context compression and filtering are essential for large context windows]]"
  - "[[tokens are a type of text compression used in LLMs]]"
  - "[[context engineering]]"
  - "[[context sovereignty]]"
  - "[[model context protocol]]"
keyphrase: LLM context drift
slug: notes/llm-context-drift
---

> [!info] Why this matters
> We often conflate context capacity with context competence. As LLM windows expand into the millions of tokens, we assume more information leads to better performance, but the reality is more fragile. Understanding LLM context drift is essential for building complex, multi-step workflows where "more data" can actually poison the well.

## LLM context drift

**One-sentence definition:** LLM context drift (or "context rot") is the progressive degradation of a language model's output quality as its context window fills with a mix of relevant data, distractions, and discarded reasoning.

The technical ability to "read" a million tokens does not guarantee the ability to reason across them effectively. Even with sophisticated frontier models, there is a noticeable fall-off in coherence as the conversation grows longer. This is not simply a matter of forgetting important detail; the context is actually being "poisoned" by the model's own prior outputs, dead ends, and irrelevant information.

### How context becomes contaminated

In multi-agent systems or complex decision-making loops, the risk is especially acute. When models are tasked with taking actions based on previous steps, a single error or distraction can propagate through the context. This is a form of compounding error: just as a one-degree deviation in a ship's heading leads to a large miss over a long voyage, a minor distraction in the early context amplifies with every subsequent generation of output.

The model begins to lose the thread of the original intent in favour of the noise generated during the process. Context is not a neutral container — it is an active environment that becomes increasingly cluttered and contradictory over time. The problem is not the size of the window, but the model's inability to distinguish between the signal of the original prompt and the noise of the subsequent interaction.

### Managing context deliberately

Since we cannot ask models to "forget" specific parts of their history, context must be managed manually. Summarisation works as pruning: regularly condensing current state into a high-density digest that replaces the raw history. When a conversation has grown too contaminated, spinning up a fresh instance seeded with that digest is often more reliable than continuing the degraded thread. Parallel LLM instances need particular attention — without careful orchestration, they can each develop different context histories that introduce conflicting signals into the workflow.

The implication for knowledge work is clear: treat LLM context as a finite resource requiring active maintenance. If you do not prune the rot, the model eventually loses the ability to think straight.

---

## Sources

- Mager, L. (2025). *context loss from multi-agent, decision-making and action-taking systems*. Via LinkedIn.
- workaccount2 (2025). Comment on Hacker News. https://news.ycombinator.com/item?id=44308711#44310054
