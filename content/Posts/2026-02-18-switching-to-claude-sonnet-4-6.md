---
title: Is a smaller AI model good enough?
type: post
description: A field note on switching my default in Claude Code from Opus 4.6 to the smaller Sonnet 4.6, testing it on a task I'd normally give the larger model, and finding it good enough so far.
meta-description: Is a smaller AI model good enough? What I found when I made Sonnet 4.6 my default over Opus 4.6, and how to run the same test on your own work.
keyphrase: is a smaller AI model good enough
author: "[[Michael Rowe]]"
date: 2026-02-18
updated: 2026-10-08
tags:
  - language-model
  - ai-integration
  - generative-ai
category: [Technology]
related:
  - "[[Posts/2026-02-16-ai-models-for-different-tasks]]"
draft: false
subtype: field-note
enableToc: false
reviewed:
  - blog_writer
  - writing_style
  - SEO_optimiser
  - copy_editor
linkedin:

---

Anthropic released [Claude Sonnet 4.6](https://www.anthropic.com/news/claude-sonnet-4-6) yesterday and I switched this morning, moving from Opus 4.6 as my default in [[Notes/Claude Code|Claude Code]]. I'd been using Opus because it handled complex, multi-step tasks better, but I've always preferred Sonnet's writing register. More direct, less padded. What I wanted to know was whether the smaller model was now good enough for the work I'd been giving the larger one.

After about an hour with Sonnet 4.6 the interaction feels more efficient; it seems to know when to stop. Opus 4.6 came out first, so the announcement compares Sonnet 4.6 with the previous Opus: users preferred it to Opus 4.5 in 59% of cases and rated it "significantly less prone to overengineering and 'laziness,' and meaningfully better at instruction following." That matches what I'm feeling.

The task that would usually make me reach for Opus: I asked Sonnet 4.6 to work through my [[Notes/Obsidian|Obsidian]] vault of nearly 6,000 notes — analyse its file types, structure, and status; surface issues I'd raised; and identify ones I hadn't. It produced a multi-stage plan and is working through it methodically. No obvious problems so far, and it flagged things I genuinely hadn't considered. Previously that kind of sustained, multi-pass analysis across a large corpus was Opus territory, and I'm no longer sure it is.

I'm not quite ready to tell it to implement each stage independently without me in the loop — but I'm closer to that than I expected to be after a single session.

If you use these tools in your own work, a new release is a good moment to rerun a task you know well, one you'd normally give to the larger model, because you can judge the result against what you already know about the material. The two things I found most useful to watch were whether it raised anything I hadn't considered, and how far I'd be willing to let it carry on without checking in with me. The smaller models are faster and cheaper to run, and if one of them now handles the work you were using the larger one for, you can make it your default and [[Posts/2026-02-16-ai-models-for-different-tasks|keep the larger model for the tasks that still need it]].
