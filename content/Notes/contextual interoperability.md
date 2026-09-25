---
title: Contextual interoperability
description: "Contextual interoperability is what lets you use your own notes, frameworks, and commitments with any AI model, local or hosted. It has two halves: the context has to be legible, with relationships a model can follow, and portable, held by you instead of inside one provider's system. With a curriculum mapping example from a pharmacy programme."
meta-description: "How to use your own notes with any AI model: make the relationships in your thinking legible to a machine, and keep the context under your control."
aliases:
  - context interoperability
  - cognitive interface
type: note
author: "[[Michael Rowe]]"
created: 2026-02-05
updated: 2026-09-25
draft: false
tags:
  - context-sovereignty
  - knowledge-representation
  - information-management
category:
  - Information management
  - Technology
related:
  - "[[Notes/context sovereignty]]"
  - "[[Notes/knowledge graph]]"
  - "[[Notes/context engineering]]"
  - "[[Notes/intelligence as a service]]"
  - "[[Notes/model context protocol]]"
  - "[[Notes/plain text]]"
  - "[[Posts/2026-02-12-organising-notes-for-ai]]"
  - "[[Essays/context-sovereignty]]"
keyphrase: use your own notes with any AI model
reviewed:
  - note_writer
  - writing_style
  - SEO_optimiser
  - copy_editor
linkedin:
---

> [!info] Context is only yours if any model can use it
> Contextual interoperability is what lets you use your own notes, frameworks, and commitments with any AI model a task calls for. It has two halves: the context has to be legible, with its relationships explicit enough for a model to follow, and it has to be portable, held by you and lent to a model for a task instead of living inside one provider's system. Each half is of little use without the other.

## Contextual interoperability

**One-sentence definition:** Contextual interoperability is the property of personal or institutional context that lets any AI model, local or hosted, read it and reason within it, without the context losing its meaning or leaving your control.

Interoperability usually describes systems that can work together, such as a hospital's records system exchanging data with a GP's. Here the thing that has to work across systems is your thinking. Most people's context falls short in one of two ways: it's either a pile of documents a model can only skim, or it's built up inside one product's memory and can't be taken anywhere else.

### Legible: relationships a model can follow

A model given a folder of notes sees disconnected text. It can find passages that match a question, but it can't see that one framework extends another, or that a study you read last year undermines an approach you still use. Those relationships usually sit in your head. Making them explicit, as typed links in a [[Notes/knowledge graph|knowledge graph]] or clear structure in [[Notes/plain text|plain text]] files, turns a store of notes into something a model can reason across. The post [[Posts/2026-02-12-organising-notes-for-ai|Organising your notes for AI]] works through how.

### Portable: context that stays yours

Context can be well structured and still sit inside one vendor's system, where only that vendor's model can use it. Portability means the context lives where you control it and a model is applied to it for a particular task: a local model[^local] for sensitive material, a more capable hosted one for demanding work, and a different one next year without rebuilding anything (Rowe & Lynch, 2025). [[Notes/model context protocol|Model Context Protocol]] is one open standard for connecting models to context in this way, and [[Notes/intelligence as a service|intelligence as a service]] describes the arrangement that makes it safe, in which you use the model without the provider keeping your context.

### In a programme team

Take a pharmacy programme whose curriculum map records, in plain text, which learning outcomes each module assesses, which simulation sessions prepare students for which OSCE[^osce] stations, and where the programme has decided to accept a gap. A model reading that map can answer "what breaks if we move this module to year three?" by following the relationships, where a model given the module handbooks as PDFs can only summarise them. Because the map belongs to the programme team, the same file can go to the university's approved model when student data is involved and to another tool for drafting, and it outlasts any one contract.

This is what makes [[Notes/context sovereignty|context sovereignty]] practical, since owning your context doesn't help much if no model can read it, or if only one provider's can.

---

## Sources

- Rowe, M., & Lynch, W. (2025). *Context sovereignty for AI-supported learning: A human-centred approach* (Version 0.9) [Preprint]. OSF. https://doi.org/10.31219/osf.io/8czva_v2

[^osce]: **OSCE.** Objective structured clinical examination: a circuit of timed stations at which students carry out a clinical task, such as a medication history or a counselling conversation, while an examiner scores them against a checklist. See [Wikipedia: Objective structured clinical examination](https://en.wikipedia.org/wiki/Objective_structured_clinical_examination).

[^local]: **Local and hosted models.** A hosted model runs on the provider's servers, so whatever you give it leaves your machine; a local model runs on your own computer or your university's servers, so it doesn't. Local models are usually open-weight versions that are smaller and less capable, which is why a mixed arrangement makes sense: supervision notes stay local, a draft reading list can go to a hosted model. See [Wikipedia: Open weights](https://en.wikipedia.org/wiki/Open_weights).
