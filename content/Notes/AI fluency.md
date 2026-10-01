---
title: AI fluency
type: note
aliases:
  - AI fluency framework
  - 4D framework
description: "AI fluency is the ability to work with AI systems in ways that are effective, efficient, ethical, and safe. The AI Fluency Framework describes it as four connected competencies: delegation, description, discernment, and diligence. It builds on AI literacy and goes further, into the practice of working with AI on real tasks."
author: "[[Michael Rowe]]"
created: 2026-10-01
updated: 2026-10-01
draft: false
keyphrase: what is AI fluency
meta-description: "What is AI fluency? The 4D framework of delegation, description, discernment, and diligence, and how AI fluency goes beyond AI literacy."
category:
  - Technology
tags:
  - ai-literacy
  - generative-ai
  - ai-integration
related:
  - "[[Notes/AI literacy]]"
  - "[[Notes/processing fluency]]"
  - "[[Notes/prompt engineering]]"
  - "[[Notes/hallucination]]"
  - "[[Notes/sycophancy]]"
  - "[[Notes/AI-forward]]"
  - "[[Posts/2026-03-25-ai-fluency-is-noise]]"
linkedin:
reviewed:
  - note_writer
  - writing_style
  - SEO_optimiser
  - copy_editor
---

> [!info] AI fluency is what AI literacy looks like in practice
> AI literacy is knowing what AI systems are, how they work, and how to judge what they produce. AI fluency is the ability to work with them well: deciding what to hand over, saying what you need, judging what comes back, and taking responsibility for what you do with it. You can be literate without being fluent, in the same way that you can read a language you can't yet speak.

## What is AI fluency?

**One-sentence definition:** AI fluency is the ability to interact with AI systems in ways that are effective, efficient, ethical, and safe (Dakan et al., 2025).

The definition comes from the AI Fluency Framework, which Rick Dakan and Joseph Feller developed with Anthropic and released under an open licence. It describes four competencies, each a mix of knowledge, skills, and values, and treats them as connected, so that strength in one can't make up for weakness in another:

1. **Delegation** — setting goals and deciding whether, when, and how to engage with AI at all
2. **Description** — describing those goals well enough to get useful behaviour and output from the system, which is where [[Notes/prompt engineering|prompt engineering]] belongs
3. **Discernment** — accurately assessing whether what the system produced, and the way it went about producing it, is any use, which includes catching [[Notes/hallucination|hallucinations]] and noticing when a model is simply agreeing with you ([[Notes/sycophancy|sycophancy]])
4. **Diligence** — taking responsibility for what you do with AI and how you do it

The framework also separates three modes of working with AI: automation, where the system carries out a task you've specified; augmentation, where you and the system think a problem through together; and agency, where you set the system up to carry out future tasks on your behalf. The competencies carry different weight in each. Asking a chatbot to summarise a paper needs a little description and some discernment, while configuring an [[Notes/ai-agents|AI agent]] that will act without you watching puts most of the weight on delegation and diligence.

## How AI fluency differs from AI literacy

The two terms are often used interchangeably, and some courses with "fluency" in the title teach what most frameworks would call [[Notes/AI literacy|AI literacy]]. The distinction I find most useful comes from language learning. Literacy is understanding: knowing what language models are, where they fail, and what ethical questions they raise. Fluency is use: working with AI as part of how you get things done, without stopping to translate each step. Fluency depends on literacy, since you can't delegate well to a system whose limits you don't understand, but understanding doesn't turn into fluency by itself. That comes from repeated use on real work.

## An example from simulation

A paramedic science lecturer uses a language model to write variations on a simulation scenario for second-year students. Delegation is deciding that the model can draft the patient histories and the changing observations, while the learning outcomes and the decision points stay hers. Description is giving the model those outcomes, the students' stage, and the local guideline they're expected to follow, so that what comes back is pitched at her students. Discernment is noticing that in one variation the vital signs don't fit the story, with a patient described as deteriorating whose observations are steadily improving. Diligence is checking every scenario against the guideline before it reaches the simulation suite, and telling the students how the scenarios were made.

A lecturer who understands why a language model might get the observations wrong is AI literate. Doing all four of these things as a matter of course, under the ordinary pressure of preparing a teaching session, is what makes her fluent.

## Two meanings of "AI fluency"

The same phrase is also used for the smoothness of AI-generated text, which is a different thing altogether. That property is better called [[Notes/processing fluency|processing fluency]]: the ease with which a reader takes in text, which people tend to read as a sign that it's true. It works against discernment, because the more fluent the output, the more it reads as right whatever its quality. That's the argument of [[Posts/2026-03-25-ai-fluency-is-noise|AI fluency is noise to be filtered out]], and it means part of being fluent with AI is learning to discount the fluency of what it produces.

---

## Sources

- Dakan, R., Feller, J., & Anthropic. (2025). *The AI fluency framework*. Anthropic. https://www-cdn.anthropic.com/b383cf6baddbfc72fdf8b0ed533a518e2872d531.pdf
