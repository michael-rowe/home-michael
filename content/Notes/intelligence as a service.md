---
title: Intelligence as a service
description: A way of using AI in which you draw on a model for a particular task while your notes, documents, and working knowledge stay private and under your control.
meta-description: "How to use AI without sharing your data: keep your notes and documents under your control, and draw on a model only for the task in hand."
keyphrase: "use AI without sharing your data"
aliases:
  - AI as utility
type: note
author: "[[Michael Rowe]]"
created: 2026-02-05
updated: 2026-09-26
draft: false
tags:
  - context-sovereignty
  - privacy
category:
  - Technology
related:
  - "[[Notes/context sovereignty]]"
  - "[[Notes/contextual interoperability]]"
  - "[[Notes/model context protocol]]"
  - "[[Essays/context-sovereignty]]"
builds_on:
leads_to:
  - "[[context sovereignty]]"
contradicts:
source: "Rowe, M., & Lynch, W. (2025). Context sovereignty for AI-supported learning: A human-centred approach."
source_url: "https://doi.org/10.31219/osf.io/8czva_v2"
linkedin:
reviewed:
  - note_writer
  - writing_style
  - SEO_optimiser
  - copy_editor
---

> [!info] Intelligence as a service keeps your context where you control it
> Electricity companies sell you power without owning the house it runs through. Intelligence as a service applies the same idea to AI: you draw on a model's capability for a task while your notes, documents, and working knowledge stay in systems you control. The provider supplies the reasoning, and your context is lent to it for the task instead of being handed over for good.

## Intelligence as a service

**One-sentence definition:** Intelligence as a service is a way of using AI in which the model is accessed as a utility for a particular task, while the personal context it works on stays private and under the individual's control.

With most AI tools today, getting the capability means handing over the material. To get help with your research, you upload your library; to get help with your writing, you give the tool your drafts and notes, and they stay in the provider's system, shaping what the tool does next and sometimes what the provider trains on. Intelligence as a service separates the two, so that access to a capable model no longer depends on handing your context over to whoever runs it.

## How the separation works

The model and the context live in different places. The model runs either on the provider's servers or locally, on your own device or your institution's servers. The context, meaning your notes, documents, and the structure you've built over years, lives in a knowledge base you control. For a given task you send the model the part of your context it needs, it reasons over that, and the connection ends.

The separation holds differently depending on where the model runs. A local model[^local] never sends your text to an outside provider, which makes it the one way to use AI without sharing your data at all. A hosted model has to receive the text to work on it, so what keeps your context yours is an agreement that the provider won't retain or train on it. Many institutional licences for AI tools include those terms and free consumer accounts often don't, which is why the same task can be acceptable on one account and not on another.

Take a student paramedic writing a reflection on a difficult call-out, who wants help structuring it against the reflective model the programme uses. Pasted into a free chatbot, the reflection and the patient details in it go to a provider whose retention terms the student hasn't read. With intelligence as a service, the reflection stays in the student's own notes, and either a local model reads it on their laptop or a hosted model under an institutional agreement sees only the passage sent for that task and keeps nothing afterwards.

## What it changes

Keeping context separate from any one model means you can change models without rebuilding anything. You can use a local model for sensitive material and a more capable hosted one for demanding work, and switch providers next year while your knowledge base stays where it is. It also changes the relationship with providers: you're buying a capability, as you would buy electricity, and your working knowledge isn't the price of access.

The comparison with utilities goes further, because utilities tend to be regulated, standardised, and treated as essential services. Whether AI develops that way or stays organised as platforms that hold their users' data depends on technical, regulatory, and commercial decisions that are still being made.

What makes the arrangement practical is already available. [[Notes/contextual interoperability|Contextual interoperability]] is the property of context that lets any model read it while it stays yours, and the [[Notes/model context protocol|Model Context Protocol]] is one open standard for connecting a model to that context with control over what it can see. Together with the principle that people should own the context they bring to AI, set out in [[Notes/context sovereignty|context sovereignty]], they make up the approach in *[[Essays/context-sovereignty|Context sovereignty for AI-supported learning]]* (Rowe & Lynch, 2025).

[^local]: **Local and hosted models.** A hosted model runs on the provider's servers, so whatever you give it leaves your machine; a local model runs on your own computer or your university's servers, so it doesn't. Local models are usually open-weight versions that are smaller and less capable, which is why a mixed arrangement makes sense: supervision notes stay local, a draft reading list can go to a hosted model. See [Wikipedia: Open weights](https://en.wikipedia.org/wiki/Open_weights).

---

## Sources

- Rowe, M., & Lynch, W. (2025). *Context sovereignty for AI-supported learning: A human-centred approach* (Version 0.9) [Preprint]. OSF. https://doi.org/10.31219/osf.io/8czva_v2
