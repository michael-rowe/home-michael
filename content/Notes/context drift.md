---
title: Context rot
description: "Context rot, also called context drift, is the way a language model's output gets worse as its context fills with drafts, dead ends, and its own earlier mistakes. What causes it, why a larger context window does not fix it, and how to manage it in long pieces of work."
meta-description: "Context rot is why AI output gets worse over a long conversation. What causes it, and how to manage context in multi-step work with a language model."
aliases:
  - context rot
  - context drift
  - LLM context drift
type: note
author: "[[Michael Rowe]]"
created: 2026-02-14
updated: 2026-09-24
draft: false
tags:
  - context-engineering
  - reasoning
  - language-model
  - agent
category:
  - Technology
related:
  - "[[Notes/context window]]"
  - "[[Notes/context engineering]]"
  - "[[Notes/token budget]]"
  - "[[Notes/progressive disclosure]]"
  - "[[Notes/agentic workflows]]"
  - "[[Notes/ai-agents]]"
  - "[[Notes/context sovereignty]]"
keyphrase: context rot
reviewed:
  - note_writer
  - writing_style
  - SEO_optimiser
  - copy_editor
linkedin:
---

> [!info] Holding more context is not the same as using it well
> We often treat context capacity as if it were context competence. Context windows now run to millions of tokens and it's easy to assume that more information means better output, but a model's work degrades as its context fills with drafts, dead ends, and its own earlier mistakes. Any long, multi-step piece of work with a language model has to manage that deliberately.

## Context rot

**One-sentence definition:** Context rot, also called context drift, is the progressive degradation of a language model's output quality as its context window fills with a mix of relevant data, distractions, and discarded reasoning.

Being able to "read" a million tokens[^tokens] doesn't mean being able to reason across them; a [[Notes/context window|context window]] is attended to unevenly even when everything in it is relevant. Even the most capable frontier models[^frontier] lose coherence as their input grows. When Hong et al. (2025) tested 18 of them, performance fell as the input got longer, even on tasks as simple as copying out a list of repeated words. The name comes from a Hacker News commenter, workaccount2 (2025), who described models that "poison their own context" as it fills with distractions and dead ends.

### How context rot sets in

The risk is greatest in systems that use several [[Notes/ai-agents|agents]] and in loops where a model makes a series of decisions. When a model acts on the results of its own previous steps, a single error or distraction carries forward through the context. This is a form of compounding error: just as a one-degree deviation in a ship's heading leads to a large miss over a long voyage, a minor distraction in the early context amplifies with every subsequent generation of output.

Over time the model loses the thread of what it was originally asked to do, and follows the noise generated along the way instead. Everything that has passed through the conversation stays in it, so the context gets more cluttered and more contradictory the longer it runs, and the model has no reliable way to tell the original request apart from what has accumulated around it.

Anyone who has worked through a long piece of course design in one chat will have seen this. Say you spend an afternoon drafting a module handbook with a model: early on you try a portfolio assessment and drop it, paste in last year's external examiner comments, and rework the learning outcomes twice. By the time you ask for the assessment brief, the abandoned portfolio, the superseded outcomes, and the examiner's complaints are all still in the context, carrying the same weight as the decisions you actually made, and the brief comes back quietly mixing them.

### Managing context deliberately

We can't ask a model to "forget" parts of its history, so the context has to be managed by hand. Summarising works as pruning: every so often you condense the current state of the work into a short digest that replaces the raw history. When a conversation has grown too contaminated, starting a fresh one with that digest is usually more reliable than carrying on with the degraded thread, and it's the workaround workaccount2 (2025) described.

This is the discipline of clinical handover: the incoming team doesn't reread every note from the shift, but works from a structured summary of situation, background, assessment, and recommendation, because the full record holds everything, including what no longer matters. In the module handbook example, that means stopping, asking for a summary of the decisions that stand, and opening a new conversation with only that.

Running several models in parallel adds a further problem (Yan, 2025), because each builds up its own context history and, unless someone coordinates them, they feed conflicting signals back into the same piece of work. For anyone using these tools for sustained work, all of this makes context a finite resource that needs looking after.

---

## Sources

- Hong, K., Troynikov, A., & Huber, J. (2025, July 14). *Context rot: How increasing input tokens impacts LLM performance*. Chroma. https://www.trychroma.com/research/context-rot
- workaccount2. (2025, June 18). *Comment on "Is there a half-life for the success rates of AI agents?"* [Online forum comment]. Hacker News. https://news.ycombinator.com/item?id=44310054
- Yan, W. (2025, June 12). *Don't build multi-agents*. Cognition. https://cognition.com/blog/dont-build-multi-agents

[^tokens]: **Token.** The unit a language model reads and writes in: a word, part of a word, or a punctuation mark. A million tokens is roughly 750,000 words, enough to hold several long textbooks at once. See [Wikipedia: Large language model](https://en.wikipedia.org/wiki/Large_language_model#Tokenization).

[^frontier]: **Frontier model.** The most capable general-purpose models available at a given time, from companies such as Anthropic, OpenAI, and Google. See [Wikipedia: Foundation model](https://en.wikipedia.org/wiki/Foundation_model#Frontier_models).
