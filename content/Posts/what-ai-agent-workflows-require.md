---
title: "Getting there from here: what AI agent workflows actually require"
type: post
author: "[[Michael Rowe]]"
date: 2026-03-01
updated: 2026-03-01
description: "What does it actually take to work with AI agents in a disciplined way, and how does someone get there from where they are now? This post draws on thinking from developers who've been working through this question longer than most academic knowledge workers have, and translates the hard-won lessons across. Three prerequisites emerge: planning before handoff, documentation treated as infrastructure rather than record, and domain expertise sufficient to evaluate what agents produce. The path in isn't a course or a tutorial — it's building something real with stakes attached."
meta-description: "What AI agent workflows actually require: planning before handoff, documentation as infrastructure, and domain expertise that can't be outsourced."
keyphrase: what AI agent workflows actually require
enableToc: true
draft: false
tags:
  - agent
  - ai-integration
  - context-engineering
  - academic-practice
category:
  - Technology
slug: posts/what-ai-agent-workflows-require
---

> [!info] The bottleneck in agent-first work is almost never the model
> Working with AI agents in a disciplined way requires three things that most people skip: a plan that doesn't get handed off half-formed, documentation built for agents rather than just for yourself, and domain expertise sufficient to evaluate what agents produce. The software world has been working this out for longer than most academic knowledge workers have — and the lessons translate.

The [previous post](posts/something-has-changed) described a shift in how I work: agents handling the execution layer, me operating at the direction layer, attentional bandwidth rather than model capability as the binding constraint. It ended by naming this as agent-first workflows and noting, briefly, that the conditions enabling it took years to accumulate — not as preparation for AI, but as a consequence of how I'd come to work.

That observation raises an obvious question: what do AI agent workflows actually require, and how does someone get there from where they are now?

The honest answer is that the software world reached this question before academic knowledge workers did, and has been working out answers worth paying attention to. Not because academic knowledge work is the same as software development — it isn't — but because the structural challenge is similar enough that the hard-won lessons translate.

---

Anil Dash, writing in February this year, made an observation about [coding agents that reframes what's happening](https://www.anildash.com/2026/02/11/coding-agents-as-the-new-compilers/) at a historical scale. He noted that we've been through this before: assembly language gave way to high-level programming languages, which gave way to interpreted languages, each transition abstracting away a lower layer of detail that practitioners had previously managed by hand. Most developers stopped reading assembly output from their compilers decades ago — not because they became careless, but because the abstraction layer became reliable enough to trust. We may be watching the same pattern play out again, with agents abstracting away the writing of code itself, and Markdown instructions to agents becoming the new source material.

The academic parallel is closer than it might appear. The work of a knowledge worker has always involved layers: gathering sources, synthesising them, drafting arguments, reformatting outputs for different audiences. What is changing is which of those layers require direct human attention and which can be reliably delegated. The abstraction is rising, and with it, the question of what disciplined practice at the direction layer actually looks like.

Simon Willison, a developer and writer who has thought carefully about this question for longer than most, drew a useful line. He distinguished between what he called [vibe coding](https://simonwillison.net/2025/Oct/7/vibe-engineering/) — building things with AI irresponsibly, accepting whatever is produced without scrutiny — and vibe engineering: what seasoned professionals do when they use the same tools while remaining genuinely accountable for every output. The distinction is not about which tools you use. It is about whether you maintain understanding and direction throughout, or whether you outsource judgment along with execution.

Academic knowledge work has its own version of this problem: fluent outputs accepted without scrutiny, produced quickly, that don't reflect genuine thinking. The interesting question isn't whether to avoid that trap. It is what the disciplined alternative actually requires.

---

Dr Philippa Hardman, writing about agent teams for instructional designers, offers a framing that's worth borrowing. She describes thinking about delegable work in two buckets: tasks so simple, structured, and repetitive that you'd confidently hand them to a capable apprentice; and tasks you simply couldn't do because of the volume involved — not because they're intellectually demanding, but because there aren't enough hours. [Her practical argument](https://drphilippahardman.substack.com/p/how-to-build-your-first-team-of-ai) is that agents are well suited to both: the routine and the voluminous. What they are not well suited to is work where the quality of the output depends on judgment that hasn't been made explicit.

That last point is the crux.

## Plan before you hand off

Willison is direct about this in the context of coding agents: "Sitting down to hack something together goes much better if you start with a high level plan. Working with an agent makes this even more important — you can iterate on the plan first, then hand it off to the agent." The plan is not a formality. It is the mechanism by which you stay accountable for what the agent produces.

In academic contexts, this is the hour — sometimes more — spent building context before running an agent on a substantial task. Articulating the goal precisely. Assembling exemplars of what good output looks like. Writing a brief that makes the constraints explicit. The output quality correlates almost entirely with the quality of that preparation. When the brief is clear and the constraints are specific, the agent produces something you can evaluate and use. When they're absent, the output is generic and the iterations that follow are frustrating — not because the model is inadequate, but because the direction was.

This puts the failure mode where it belongs: on the absence of human direction, not on the tool. If you hand off a loosely specified task and accept whatever comes back, you are [[vibe-coding|vibe coding]] regardless of how capable the model is.

## Documentation is infrastructure

The MIT Technology Review, in a review of the shift from vibe coding toward what it called [context engineering](https://www.technologyreview.com/2025/11/05/1127477/from-vibe-coding-to-context-engineering-2025-in-software-development/), described the key practice as "knowledge priming": providing agents with a contextual ground truth that makes outputs consistent and reliable. The shift it identified was from treating AI use as intuitive and prompt-driven toward treating context as something that must be deliberately built and maintained.

For academic knowledge workers, this reframes something most of us already do. Tagging references in a reference manager, organising notes thematically, annotating papers with brief explanations of why they matter and how they connect to other things you're reading — all of this is context-building. The difference is whether you think of it as filing or as infrastructure. Filing is for your future self. Infrastructure is for every agent you will ever work with on this body of material.

The accumulated effect of building it carefully over time is substantial, and it compounds — each tag, each annotation, each explicit connection adds to a body of structured material that agents can reason across, not just retrieve from. The [essay on documentation as infrastructure](posts/documentation-as-infrastructure) develops this point at length. The cost of not building it — scattered notes, inconsistent metadata, implicit connections that exist only in your head — is a form of [documentation debt](notes/documentation-debt) that becomes most visible precisely when you need the material most.

## Domain expertise can't be outsourced

Willison is emphatic: "Using these tools effectively doesn't replace deep expertise. It demands it." The common framing — that AI lowers the barrier to entry, that you no longer need to know something to produce something that looks like you know it — is precisely the vibe coding trap.

The direction layer runs on the ability to evaluate outputs critically. To recognise when something is wrong rather than merely plausible. To know the difference between a fluent approximation of your thinking and your actual thinking. To direct with enough precision that an agent can act on the direction rather than averaging across possibilities. An agent writing about a topic you don't know well will produce something you cannot evaluate. You can accept or reject it, but you cannot improve it, because improving it requires knowing what it should say.

There is a harder version of this point worth naming. The entry-level work — reading widely, writing poorly in the early stages, engaging with a domain at the level of a beginner — is historically how expertise gets built. If agents increasingly do that entry-level work for people, the question of how expertise develops in the next generation of practitioners is not a minor one. I don't have a clean answer to it. But it is the right question, and it belongs to institutions as much as individuals; I'll come back to it in the next post.

What the expertise point enables, once it's in place alongside the other two, is something Hardman describes well: a shift in professional identity from operator to architect. You are no longer the person doing all the analysis, the drafting, the quality checks. You are the person who designs the system that does it, reviews it, redirects it, and improves it over time.

One concrete consequence is the collapse of waiting points. Tasks that previously required briefing a specialist, waiting for the work to come back, and reconnecting around the output can now be initiated and iterated on immediately. The friction that accumulates across a series of handoffs — each one requiring a briefing, a wait, a reconnection — compresses.

---

## Where to start with AI agent workflows

Build something real. Not a demonstration, not an isolated experiment with no stakes attached — a project you actually need to complete, with outputs you will be accountable for. A piece of writing you've been deferring. A course redesign that's overdue. A literature review with a genuine deadline. The investment in context-building only makes sense when the project justifies it, and the learning that comes from real constraint is qualitatively different from what comes from tinkering.

When you try this, you'll find your existing context is probably not up to the standard the task requires. That discovery — the agent floundering because the brief was unclear, producing generic output because the exemplars were missing, drifting off-course because the constraints weren't explicit — makes the prerequisites concrete in a way no reading about them does.

From there, the most durable investment is in building context as a discipline applied to work you're already doing — not as a separate project, but as a shift in how you approach the activity. Your reference collection, your notes, your folder structure are already a form of context. Making the structure explicit and intentional, adding metadata that means something, writing brief annotations that capture why a source matters rather than just what it says — none of this requires new tools or significant time. [I've written more on this in the note on context engineering](notes/context-engineering).

And developing taste — the capacity to evaluate outputs critically and direct the next iteration more precisely — runs through all of this, not as a separate activity. Every careful evaluation of an agent's output, every identification of why it fell short, is the practice. There is no version that doesn't require doing the work.

---

Willison described working with multiple parallel agents as "surprisingly effective, if mentally exhausting." That description is accurate. This mode of working does not feel like automation replacing effort — it feels like effort redirected. The doing has shifted toward higher levels of abstraction, away from execution and toward direction. But the thinking — the planning, the evaluation, the precise articulation of what you actually want — has intensified rather than diminished.

That, I think, is what disciplined work with AI agents should feel like. If it feels effortless, you are probably [[vibe-coding|vibe coding]].
