---
title: Building AI personas for professional practice
type: post
description: Most advice on AI effectiveness focuses on prompt engineering. The real leverage comes from somewhere less obvious; knowing your professional commitments clearly enough to turn them into context an AI can work within. This post describes how to build AI personas for professional practice — structured documents that compress your values, frameworks, and evidence into a form an AI agent can actually use.
meta-description: "How to build AI personas for professional practice: a three-stage process for educators who want AI that reflects their actual professional values."
keyphrase: AI personas for professional practice
author: "[[Michael Rowe]]"
date: 2026-03-07
updated: 2026-03-07
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
linkedin-status: "—"

---

> [!info] The real leverage from AI isn't prompt engineering — it's professional self-knowledge
> Generic AI roles give generic outputs. The model has no way to distinguish between your understanding of good practice and anyone else's. The way to close that gap isn't to find better prompts — it's to articulate what you actually believe, grounded in evidence, clearly enough that an AI can work within that context.

Most advice on using AI effectively focuses on [[prompt engineering]]: how to phrase your request, what role to assign, or which magic words unlock better outputs. There's a place for that. But I've found that the real leverage comes from something less glamorous: knowing yourself and your field well enough to articulate what "good" actually means to you. That's what building effective AI personas for professional practice actually requires.

## The problem with "you are an expert"

When you assign a language model a generic expert role, you're relying on whatever the model absorbed during training about what that expertise looks like. That's a broad, undifferentiated average across everything ever written on the topic — the thoughtful and the terrible, the evidence-based and the anecdotal. Your professional judgement is invisible to it.

This matters because professional domains are full of contested ground. In teaching, there are genuine disagreements about what "good" looks like. Over the course of my career, I've made specific commitments — to cognitive load theory, to retrieval practice, to constructive alignment, to Freirean critical pedagogy — that shape how I plan sessions and evaluate my own practice. These aren't neutral positions. They're a professional identity, built over time.

If I want an AI to help me with my work, it needs to understand those commitments. And that means I need to be able to articulate them clearly — not just as vague preferences, but as a coherent set of values, beliefs, and assumptions that I can defend with evidence. And I shouldn't have to do it every time I interact with the model in certain contexts.

## Knowing yourself well enough to describe what you value

The real prerequisite for effective AI use isn't technical. It's reflective: being able to say which scholars and frameworks have shaped your thinking, what assumptions you're comfortable making, and where your professional judgement comes from.

For me, that means naming Willingham on memory, Bjork on desirable difficulties, Biggs on constructive alignment, and Freire on the purpose of education — and being clear about why each one matters to how I work.

Most educators hold positions like these, even if they haven't articulated them recently. The difference AI makes is that articulation becomes directly productive. The clearer you can be about what you value and why, the richer the context you can construct for an AI to work within.

## From self-knowledge to structured context

To make these commitments operational, I use a three-stage process. First, I commission deep research reports, seeded with my values, preferred scholars, and professional notes. The reports aren't neutral literature reviews — they're rigorous syntheses of the evidence as understood through my professional lens. Second, I layer the reports: the learning research becomes an input for a report on teaching, so that pedagogical recommendations are grounded in cognitive science rather than floating free. Third, I distil the applied research into structured personas that AI agents like [[Claude Code]] can use in practice.

The distillation stage is worth pausing on, because it's easy to misread as reductive, as if I'm stripping away nuance to produce a simplified checklist. It's closer to the opposite. The persona compresses thousands of words of evidence into an actionable framework, but the richness is preserved in the structure. Every element in the persona traces back to the research. When the `classroom-teacher` persona asks "is cognitive load managed?", that question carries the weight of Sweller's framework, Cowan's working memory research, and the practical implications I've worked through across both reports. The persona is compact, but it's dense.

The learning research report opens by establishing the evidence base:

> **Learning is the residue of thought.** This elegant formulation from cognitive scientist Daniel Willingham captures what decades of research have established: durable learning emerges not from exposure to information but from active mental engagement with it. If no change has occurred in long-term memory, nothing has truly been learned.

## What an AI persona looks like

The `classroom-teacher` persona that emerged from this process evaluates teaching through five interconnected lenses:

> - **Cognitive architecture**: is working memory load managed, and are students helped to build organised knowledge structures?
> - **Memory and retention**: are there opportunities for retrieval practice, spaced review, and interleaved problem types?
> - **Constructive alignment**: do learning outcomes, activities, and assessment all demand the same cognitive performance?
> - **Motivation and engagement**: do students have autonomy, appropriately calibrated challenge, and a sense of belonging?
> - **Metacognition and self-regulation**: are students helped to understand how learning works, and prompted to monitor their own understanding?

Each of those lenses traces directly back to the research reports. The persona is the operational surface; the evidence is the foundation. And because the evidence is filtered through my professional commitments, the persona doesn't just reflect "what research says" in the abstract — it reflects what *I believe* good teaching looks like, with the research to support it. Of course, this also means that your `classroom-teacher` persona will likely look different to mine, because your research reports, professional commitments, and preferences, will reflect different values and beliefs.

This isn't a one-off. The same pattern produces personas for other aspects of my work. The `accessibility reviewer` goes beyond automated WCAG checkers to include cognitive accessibility, plain language, and inclusive design.

> **Language and cognitive accessibility**
>
> - Reading level appropriate: aim for Flesch-Kincaid Grade 12 or below for a general audience
> - Jargon explained or avoided: technical terms defined on first use
> - Sentence length: average under 25 words
> - Heading quality: headings describe what follows; no clickbait
> - Inclusive language: avoid ableist, gendered, or exclusionary terms

And the `copy-editor` persona enforces British spelling conventions and sentence-case headings, but it also evaluates word economy and preserving the author's voice. Each persona represents a specific, defensible vision of what "good" looks like in that domain.

## Applying personas to real work

In practice, I ask Claude Code to apply persona to whatever I'm working on: planning a session, reviewing a set of slides, or preparing a blog post.

I also use personas in sequence. This post, for example, went through the `copy-editor` persona for sentence-level clarity, then through the `SEO-optimiser` for search visibility:

![[copy_editor_persona.png|Copy editor persona applied to this blog post, showing the summary and priority actions output]]

![[seo_optimiser_persona.png|SEO optimiser persona applied to this blog post, showing keyphrase analysis and priority actions]]

## Start with yourself, not the technology

If you're an educator thinking about how AI might support your practice, I'd encourage you to start not with the technology but with yourself. What do you actually believe about your domain? Which frameworks have shaped your thinking? What are your non-negotiables? Where does your professional judgement come from, and can you articulate it clearly enough that someone else — or something else — could act on it?

That articulation, even if you never build a formal persona, will make every AI interaction more productive. The quality of what you get out depends on the quality of the thinking you put in — not the cleverness of your prompt, but the depth of your professional self-knowledge.