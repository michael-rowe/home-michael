---
title: Building AI personas for professional practice
type: post
description: Most advice on AI effectiveness focuses on prompt engineering. The real leverage comes from somewhere less obvious; knowing your professional commitments clearly enough to turn them into context an AI can work within. This post describes how to build AI personas for professional practice — structured documents that compress your values, frameworks, and evidence into a form an AI agent can actually use.
meta-description: "How to build AI personas for professional practice: a three-stage process for educators who want AI that reflects their actual professional values."
keyphrase: AI personas for professional practice
author: "[[Michael Rowe]]"
date: 2026-03-07
updated: 2026-03-21
tags:
  - agent
  - ai-integration
  - generative-ai
  - context-engineering
  - academic-practice
category:
  - Technology
  - Scholarship
related:
draft: false
slug: posts/ai-personas-for-professional-practice
enableToc: true
linkedin:
---

> [!info] The real leverage from AI isn't based on prompt engineering; it's professional self-knowledge
> Giving AI generic roles or personas leads to generic outputs because the model has no way of distinguishing between your understanding of professional context and anyone else's. The way to close that gap isn't to create better prompts; it's to articulate what you believe about practice, grounded in evidence, clearly enough that an AI can work within that context.

Most advice on using AI effectively focuses on [[prompt engineering]] i.e. how to phrase your request, what role to assign the model, or which magic words unlock better outputs. And there's definitely a place for that; writing more structured prompts does give you better outputs. But for me, the real leverage has come from something much less glamorous: knowing myself and my field well enough to articulate what "good" actually means to me. And I think that's what building effective AI personas for professional practice really requires.

## The problem with "you are an expert"

When you assign a language model a generic expert role, you're relying on whatever the model has absorbed during training about what that expertise looks like. That's going to be a broad, undifferentiated average across everything ever written on the topic, including the thoughtful and the terrible, the evidence-based and the anecdotal. And more importantly, your professional judgement doesn't exist for this undifferentiated average.

This is important because professional domains are full of contested ground. In teaching for example, there are real, intellectually honest disagreements about what "good" looks like. Over the course of my career, I've made specific commitments — to cognitive load theory, to retrieval practice, to constructive alignment, to Freirean critical pedagogy — that shape how I plan sessions and think about my own practice. These aren't neutral positions; they're my professional identity, built over time, that's specific to me. I think of this as basically the content of my Personal Statement. Others may have similar commitments to similar positions, but the exact way that I think about them is unique.

If I want an AI to help me with my work, then it needs to understand those commitments. And that means I need to be able to articulate them clearly, not just as vague preferences, but as a coherent set of values, beliefs, and assumptions I can defend with evidence and with experience. And I shouldn't have to do it every time I interact with the model.

## Knowing yourself well enough to describe what you value

Therefore, the real prerequisite for effective AI use isn't technical. It's reflective: being able to say which scholars and frameworks have shaped my thinking, what assumptions I'm comfortable making, and where my professional judgement comes from. For me, that means doing things like referencing Willingham on memory, Bjork on desirable difficulties, Biggs on constructive alignment, and Freire on the purpose of education. It's not just that I need to be able to associate canonical writers in those areas; I need to be clear about why they matter *to me*.

Most educators hold positions like these, even if they haven't articulated them recently. The difference when it comes to effective AI use is that this ability to articulate personally meaningful context is directly productive. The clearer you can be about what you value and why, the richer the context you can construct for an AI to work within.

## From self-knowledge to structured context

To make these commitments operational, I typically use a three-stage process. First, I ask Gemini for a deep research report on the topic, seeded with my values, preferred writers, and personal notes that I've accumulated over years. This means that the reports aren't neutral literature reviews; they're syntheses of the evidence as understood through my professional lens, my experience, and my preferences. Then, I might layer the reports. For example, a deep research report on the science of learning becomes an input for a second report on the practice of teaching, so that pedagogical recommendations are grounded in cognitive science rather than floating free. Finally, I synthesise the applied research into structured personas that AI agents like [[Claude Code]] can use in practice.

## What an AI persona looks like

The `classroom-teacher` persona that emerged from the process described above evaluates teaching through five interconnected lenses:

> - **Cognitive architecture**: is working memory load managed, and are students helped to build organised knowledge structures?
> - **Memory and retention**: are there opportunities for retrieval practice, spaced review, and interleaved problem types?
> - **Constructive alignment**: do learning outcomes, activities, and assessment all demand the same cognitive performance?
> - **Motivation and engagement**: do students have autonomy, appropriately calibrated challenge, and a sense of belonging?
> - **Metacognition and self-regulation**: are students helped to understand how learning works, and prompted to monitor their own understanding?

Each of those lenses can be traced directly back to the research reports. The persona is the operational surface and the evidence-based report is the foundation. And because the evidence is filtered through my professional commitments, personal values, beliefs, and preferences, the persona doesn't just reflect "what research says" in the abstract; it reflects what *I believe* good teaching looks like, with the research base to support it. This also means that *your* `classroom-teacher` persona will likely look different to mine, because your research reports, professional commitments, and preferences, will reflect different values and beliefs.

I use the same pattern to create personas for other aspects of my work. The `accessibility reviewer` goes beyond automated WCAG checkers to include cognitive accessibility, plain language, and inclusive design.

> **Language and cognitive accessibility**
>
> - Reading level appropriate: aim for Flesch-Kincaid Grade 12 or below for a general audience
> - Jargon explained or avoided: technical terms defined on first use
> - Sentence length: average under 25 words
> - Heading quality: headings describe what follows; no clickbait
> - Inclusive language: avoid ableist, gendered, or exclusionary terms

And the `copy-editor` persona enforces British spelling conventions and sentence-case headings, but it also evaluates word economy and preserving the author's voice. Each persona represents a specific, defensible vision of what "good" looks like in that domain, specified through my personal and professional context and experience.

## Applying personas to real work

In practice, I ask Claude Code to apply specific personas to whatever I'm working on: planning a teaching session, reviewing a set of slides, or preparing a blog post.

I also use the personas in sequence. This post, for example, went through the `copy-editor` persona for sentence-level clarity, then through the `SEO-optimiser` for search visibility:

![[copy_editor_persona.png|Copy editor persona applied to this blog post, showing the summary and priority actions output]]

![[seo_optimiser_persona.png|SEO optimiser persona applied to this blog post, showing keyphrase analysis and priority actions]]

## Start with yourself, not the technology

If you're an educator thinking about how AI might support your practice, don't start with the technology but with yourself. What do you actually believe about your domain? Which frameworks have shaped your thinking? What are your non-negotiables? Where does your professional judgement come from, and can you articulate it clearly enough that someone else (or in this case, some*thing* else) could act on it?

That articulation, even if you never build a persona of the kind I describe here, will make every AI interaction more productive.