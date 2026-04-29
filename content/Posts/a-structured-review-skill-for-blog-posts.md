---
title: "A structured review skill for blog posts"
type: post
description: "Most writing tools help you produce content. This one helps you evaluate it. The blog-post-reviewer is a Claude Code skill that applies a seven-point structural framework to any blog post draft — checking macro-structure, narrative velocity, signal-to-noise ratio, and more — and returns a prioritised list of changes, not a rewrite."
meta-description: "A Claude Code skill that reviews blog post drafts against a seven-point structural framework and returns a prioritised list of changes."
keyphrase: "blog post review Claude Code skill"
author: "[[Michael Rowe]]"
date: 2026-04-28
updated: 2026-04-28
tags:
  - academic-writing
  - ai-integration
  - prompt-engineering
  - open-scholarship
category: [Scholarship]
related:
draft: true
slug: "blog-post-review-skill"
subtype: ""
enableToc: true
linkedin:
---

> [!info] A review pass is not a rewrite pass
> Structural problems in blog posts are predictable and catch­able — but only if you know what to look for. This skill applies a consistent framework to your drafts so you don't have to hold the whole checklist in your head while also trying to evaluate your own writing.

Writing a post is one problem. Knowing whether it works is a different problem entirely.

Most of us conflate them. We finish a draft, read it back, and ask: "does this seem right?" That question is too vague to be useful, and we're too close to the material to answer it honestly. We know what we meant to say, which makes it easy to read what isn't there. The structural problems — a buried lead, a transition that skips a logical step, a conclusion that summarises instead of resolves — are invisible to the person who wrote the piece precisely because they already know the argument.

A structured review changes the question. Instead of "does this seem right?", it asks eight specific questions in order: Is the architecture matched to the content type? Does the opening create a curiosity gap? Has everything redundant been cut? Are transitions balanced across logical move types? Does the post pass the Layer Cake scan test? Are ideas repeated across sections? Does the conclusion resolve or repeat? Does the reader have a clear foothold?

That's what the blog-post-reviewer skill does.

## The problem with self-review

Blog posts fail in predictable ways. The structure doesn't match the content type — a persuasion piece written as if it were a how-to, or an analysis piece that buries its central claim. The opening spends three paragraphs establishing context before earning the reader's attention. The transitions rely on a single logical move (usually cause-and-effect) repeated throughout, creating monotonous flow. The conclusion summarises the post rather than resolving the argument.

These are structural problems, not stylistic ones. They're not fixed by better sentences. They're fixed by changing what the post does at each stage.

The difficulty is that identifying them requires you to hold a mental framework while simultaneously evaluating your own material. Most writers don't have the framework internalised — and even those who do tend to apply it inconsistently when reviewing their own work. Familiarity with the material interferes with the ability to see the structure clearly.

A consistent, external review framework removes that interference. You don't need to internalise the checklist — you just need to run the post through it.

## What the skill checks

The skill evaluates each draft against eight criteria, in order:

**Macro-structure**: Is the overall architecture matched to the content type? A post arguing for a change in practice should follow a different structure than a post explaining how a tool works. The skill recognises seven common frameworks (Inverted Pyramid, PAS, SCQA, STARR, BAB, Monroe's Motivated Sequence, Hero's Journey) and flags mismatches between the framework in use and the post's apparent intent.

**Narrative velocity**: Does the opening create a curiosity gap? Does every element pull the reader to the next? A post can be well-structured and still lose momentum — usually because sections are complete in themselves rather than building on what came before.

**Signal-to-noise ratio**: Has everything irrelevant or redundant been removed? First drafts are typically around 25% longer than they need to be. The skill looks for padding, redundancy, and prose that restates rather than advances.

**Signposting and cohesion**: Are transitions smooth? The skill checks for balance across six types of logical signpost — sequencing, cause-and-effect, comparison, illustration, reformulation, and forward/back referral. Overreliance on a single type creates monotonous flow even when the underlying argument is sound.

**Visual ergonomics**: Does the post pass the Layer Cake test — can you read only the subheadings and still follow the argument? Does it pass the F-Pattern test — are the most important words at the start of sentences and paragraphs? Both reflect how readers actually behave with long-form web content.

**Cross-section coherence**: Has the same idea been stated in different words across multiple sections? Duplication that isn't deliberate dilutes the signal and suggests the argument hasn't been fully resolved.

**Resolution**: Does the conclusion give the reader a transformed perspective or a clear next step — or does it repeat what's already been said?

**Audience utility**: Would the intended reader find this useful — something to learn from, think with, or apply? If the post is mostly the author processing their own experience with no foothold for the reader, the skill flags it and suggests how to open it outward.

The output is an overall assessment followed by findings on each criterion, ending with a prioritised list of the three to five most important changes in order of impact.

## How it was built

The framework draws on cognitive load theory, Joseph Sugarman's Slippery Slide principle — the idea that every sentence's only job is to compel the reader into the next — and the craft practices of writers like Paul Graham and Tim Urban. These principles have been distilled into a checklist that can be applied consistently across different types of post, from short field notes to longer argued pieces.

The skill is implemented as a Claude Code skill: a plain markdown file that defines the framework, the criteria, and the output structure, and that Claude Code reads and applies when invoked. The underlying framework is visible and editable — if you disagree with any of the criteria, you can change them.

> [!prompt] Prompt
> /blog-reviewer path/to/your-draft.md

That's the entire invocation. The skill reads your draft, applies the framework, and returns structured feedback.

## Installing and using the skill

The skill is available as a Claude Code plugin:

```bash
claude plugin marketplace add https://github.com/michael-rowe/blog-post-reviewer
claude plugin install blog-post-reviewer@michael-rowe-blog-post-reviewer
```

Once installed, invoke it with the path to your draft:

```bash
/blog-reviewer content/Posts/your-draft.md
```

A `config.md` file is included for personalisation. You can specify your audience (the skill checks whether content serves them), your dialect (British or American English), serial comma preference, your publishing platform, and any voice or register preferences. Leave any field blank to use the defaults.

## A note on opinions

This skill reflects one practitioner's view of what makes a blog post work. The seven macro-structural frameworks are a curated selection, not an exhaustive taxonomy. The ~25% reduction heuristic is a working rule of thumb. The Layer Cake and F-Pattern are treated as the two dominant web reading patterns, because they are — but other patterns exist.

The skill also makes assumptions about how you work: that your draft is a markdown file, that you're running Claude Code, that you're writing in English, that you're writing long-form prose posts rather than newsletters or social threads.

If those assumptions don't hold, the skill files are plain markdown. Fork the repository, adjust the criteria, and make it yours. The framework is a starting point, not a prescription.

The goal is not to make your posts sound like mine. It's to give you a consistent set of questions to ask before you publish — so you're not asking "does this seem right?" and hoping for the best.
