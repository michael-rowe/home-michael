---
title: Context sovereignty
description: "What is context sovereignty? The idea that people should own and author the context they bring to AI (their values, commitments, and ways of making sense of things) so that AI adapts to their thinking. How it differs from data sovereignty and model memory, its three principles, and what it means for students and educators."
meta-description: "What is context sovereignty? Owning the values and ways of thinking you bring to AI, so it adapts to you, and how it differs from data sovereignty."
keyphrase: what is context sovereignty
aliases:
  - contextual sovereignty
type: note
author: "[[Michael Rowe]]"
created: 2026-01-08
updated: 2026-09-24
draft: false
tags:
  - context-engineering
  - context-sovereignty
  - human-ai-collaboration
  - information-management
category:
  - Technology
related:
  - "[[Essays/context-sovereignty]]"
  - "[[Courses/AI literacy/04 Transformation/01 context sovereignty]]"
  - "[[Notes/context engineering]]"
  - "[[Notes/contextual interoperability]]"
  - "[[Notes/intelligence as a service]]"
  - "[[Notes/model context protocol]]"
  - "[[Notes/context window]]"
builds_on:
  - "[[context engineering]]"
leads_to:
  - "[[contextual interoperability]]"
  - "[[intelligence as a service]]"
contradicts:
reviewed:
  - note_writer
  - writing_style
  - SEO_optimiser
  - copy_editor
linkedin:
---

> [!info] The context that matters most is the one only you can supply
> The most valuable context anyone brings to an AI conversation is themselves: their values, commitments, professional identity, and ways of making sense of things. Context sovereignty is the claim that people should author and control that context, so that AI works within their thinking instead of asking them to reconstruct it every time. It's a human practice to cultivate more than a technical problem for better models to solve.

## What is context sovereignty?

**One-sentence definition:** Context sovereignty is a person's ownership of the meaning-making environment they bring to AI: the values, intellectual commitments, and frameworks that decide what information means to them.

Most AI use today asks the person to do the adapting. Each new conversation starts from nothing, so you explain who you are, what you're working on, and how you think, or you accept generic answers. Uploading documents helps a little, but it treats context as something added to a request when it's the ground the request stands on. Context sovereignty turns the relationship round: your context persists and you decide what the model sees.

### How it differs from data sovereignty and model memory

Data sovereignty asks who controls information: where it's stored, who can see it, and which jurisdiction applies. Context sovereignty asks who controls the environment that decides what that information means. A clinical record holds the same data whoever reads it, but what it means to a practitioner depends on their experience, their understanding of the patient, and what they care about in their practice.

Model memory is something else again. A model that remembers your topic preferences across sessions hasn't understood where your thinking is going, and a model with perfect recall and an unlimited [[Notes/context window|context window]] would still lack your values and commitments unless you had written them down and made them available. That's why Rowe and Lynch (2025) treat the main work of [[Notes/context engineering|context engineering]] as self-articulation: making visible the commitments that shape how you think.

### Three principles

Rowe and Lynch set out three principles that protect this personal context and put it to work. **Persistent understanding** means interactions build on each other; until models can learn continually,[^continual] that continuity lives in the person's own notes and knowledge structures, and keeping them up is itself the practice of context sovereignty. **Individual agency** means the person keeps control over their context and stays the author of their own development. **Cognitive extension** means AI amplifies the person's reasoning, which it can only do if it has access to how they reason.

Structuring that context so any model can read it while it stays yours is [[Notes/contextual interoperability|contextual interoperability]]; using models hosted elsewhere without handing the context over is [[Notes/intelligence as a service|intelligence as a service]].

### What it looks like in education

An occupational therapy student on placement who keeps their reflections, the feedback they've had from practice educators, and a short statement of the kind of practitioner they're trying to become has something no prompt library can supply. Asking for help with a case study from inside that context gets challenge aimed at their actual reasoning, including the assumptions they keep making, where a student starting from a blank chat gets the answer any student would get. The same goes for a programme lead whose teaching philosophy, curriculum structure, and knowledge of the cohort are written down, next to one who explains the module from scratch in every conversation.

That changes what's worth teaching and assessing. The capability that matters is curating one's own context and judging AI output against it, and building it develops metacognitive awareness whether or not AI is involved. The full argument, including what it means for assessment and collaborative learning, is in the essay [[Essays/context-sovereignty|Context sovereignty for AI-supported learning]].

---

## Sources

- Rowe, M., & Lynch, W. (2025). *Context sovereignty for AI-supported learning: A human-centred approach* (Version 0.9) [Preprint]. OSF. https://doi.org/10.31219/osf.io/8czva_v2

[^continual]: **Continual learning.** A model that goes on learning from new experience after it has been trained, instead of staying fixed until the next version is released. Today's models don't do this: memory features store facts alongside a model that itself stays the same, much as a student's portfolio grows while the marking rubric doesn't. See [Wikipedia: Incremental learning](https://en.wikipedia.org/wiki/Incremental_learning).
