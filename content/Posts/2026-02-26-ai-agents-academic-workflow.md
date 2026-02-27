---
type: post
title: AI agents for academic workflow
description: "For the last few months, my screen has been split between Obsidian and a terminal, with two or three AI agents running in parallel tabs. This post describes what that shift in academic workflow looks like and what made it possible. The change is not simply additive: the work has shifted from execution to direction. What that distinction means in practice — and why it matters for those of us working in knowledge-intensive academic roles — is what I try to work out here."
meta-description: How AI agents for academic workflow change what the work actually is — less executing, more directing — and what made that shift possible.
keyphrase: AI agents for academic workflow
author: "[[Michael Rowe]]"
date: 2026-02-26
updated: 2026-02-27
tags:
  - agent
  - ai-integration
  - academic-practice
category:
  - Technology
  - Scholarship
draft: false
enableToc: true
slug: posts/ai-agents-academic-workflow
---

> [!info] Working with AI agents changes what the work is, not just how fast it gets done
> Less executing, more directing. That sounds like a small distinction. It isn't. This post is about what that shift looks like in practice, what made it possible, and why the limiting factor isn't what the models can do.

For the last few months, my working environment has looked roughly like this: [Obsidian](https://obsidian.md), the note-taking application where most of my writing and thinking lives, takes up about two-thirds of my screen. The remaining third is a terminal; the space where [[ai-agents|AI agents]] handle a significant portion of my academic workflow.

![[terminal_window_split.png|Split-screen working environment: Obsidian notes on the left, a terminal running AI agents on the right]]
*Split-screen working environment: Obsidian on the left, a terminal running AI agents on the right.*

A terminal is a text-based interface where you type instructions directly to a computer, or in this case, an AI agent; no menus, no buttons, no clicking through options. This is actually how I first learned to use a computer (i.e. before Windows existed), and it's interesting to reflect that this is now where a significant portion of my academic work gets done.

In that terminal, on any given working session, I'll have two or three AI agents running simultaneously — each in a different tab, each working on a different project. One might be applying a stylesheet to a set of lecture slides. Another might be helping structure a piece of writing. A third might be running checks across a folder of literature notes, looking for inconsistencies in file metadata. A fourth might be writing code to batch process articles in a reference manager. I move between them: reading what they've produced, answering their questions or asking my own, redirecting when something's off, pulling what's useful into the main body of work in Obsidian.

None of this way of working was designed. When I notice new language model capabilities I try them out, keep useful patterns, and work on smoothing out points of friction. It's experimental, specific to my context, and still evolving.

## A frame for what's happening

A few days ago I came across a thread on X by [Andrej Karpathy](https://x.com/karpathy) — a researcher on the founding team at OpenAI — where he described something I recognised immediately, though I hadn't yet been able to articulate it. He was talking about coding specifically, but the structural observation he was making extends well beyond it:

> ...programming is becoming unrecognizable. You're not typing computer code into an editor like the way things were since computers were invented, that era is over. You're spinning up AI agents, giving them tasks *in English* and managing and reviewing their work in parallel. The biggest prize is in figuring out how you can keep ascending the layers of abstraction to set up long-running orchestrator agents with all of the right tools, memory and instructions that productively manage multiple parallel instances for you.
>
> [@karpathy](https://x.com/karpathy/status/2026731645169185220)

Reading it, I had the experience of something clicking into focus that had been sitting just out of view. The point about "ascending the layers of abstraction" — moving up from executing tasks directly, to directing agents, to eventually orchestrating agents that themselves coordinate other agents — maps precisely onto what has been happening in my own practice, in a domain that has nothing to do with code.

He made a another point that was equally useful: the bottleneck in this mode of working isn't model capability; it's attentional bandwidth i.e. your ability to maintain coherent direction across multiple parallel workstreams. Two agents running simultaneously feels natural. Three is manageable. Four starts to feel like I'm losing the thread. The constraint isn't what the models can do. It's how much I can hold in mind at once.

## The shift from doing to directing

What has changed in my academic workflow is not easy to summarise cleanly, because the change is not simply additive. I am doing more work, and work that is qualitatively different from what I was doing before. But the more useful observation is about *where* my contribution now sits.

There is a distinction (rough, but useful) between the execution of work and its direction. Execution is the doing: drafting, searching, reformatting, checking consistency across a document, converting a set of sources into a structured summary. Direction is what determines whether the doing produces anything worth having: deciding what should exist, setting the constraints that shape the work, defining what good output looks like, and evaluating whether a given result clears the bar (I've written about this in the context of [[taste-and-judgement|taste and judgement]]).

The relationship between these two is not unlike the relationship between a PhD supervisor and student — the supervisor is not writing the thesis, but their contribution to what gets written is substantial, and the quality of their direction determines a great deal about the quality of the outcome.

In practice, we've always done both. But I feel like the balance is shifting. A substantial portion of what I previously executed, I now direct. The execution layer has become increasingly delegable. The direction layer has not.

This shows up most concretely in what I do before running an agent on a significant task. I might spend an hour — sometimes more, spread across several days — building context before I start the agent working: articulating the goal clearly, assembling reference documents and exemplars of what good output looks like, writing a project brief that makes the constraints and non-negotiables explicit. That preparation is the work. When I've done it well, the agent produces something useful on the first or second pass. When I've skipped it and started too quickly, the outputs are generic and the subsequent iterations are frustrating. Not because the model is inadequate, but because my direction was.

The shift in where the work sits also changes its pace in ways that are still surprising. A question that would have taken several days to think through carefully — "should we approach this as A, B, or C, and what does the evidence suggest?" — can now be developed into a structured synthesis within an hour, with specific recommendations ready to inform a real discussion. Real-world decisions still move at institutional speed: committees meet when they meet, and implementation takes as long as it takes. But a large portion of the preparatory intellectual work — the thinking, the prototyping, the assembling of a case — now happens at a different pace entirely.

## Decisions that turned out to matter

Looking back, certain decisions I made over the years for reasons that had nothing to do with AI turned out to matter considerably for this way of working.

Five years ago I switched to writing almost everything in [markdown](notes/markdown); a lightweight plain-text format. The reasons were practical: portability, simplicity, the ability to write once and generate multiple output formats. The consequence I didn't anticipate is that virtually everything I've written since is now available to AI agents as working material that they can read, reason about, and cross-reference across a large body of accumulated work. Models can read Word documents too, and increasingly can edit them, but plain text held in a structured folder system, in a consistent format, with explicit metadata, is a qualitatively different kind of substrate.

It is queryable, portable, and composable in ways that a library of individual Word files is not. The five years of accumulated notes and drafts in markdown have become, without my having designed them for this purpose, a [[2026-02-24-ai-ready-knowledge-base|working knowledge base that AI can use]].

The second thing that turned out to matter was older and less deliberate. For years, I'd developed habits of making my thinking explicit: writing out frameworks, noting what good work looks like in a given context, recording how I approach particular kinds of problems. This was never preparation for AI, it was just how I had come to work, shaped by years of thinking about knowledge management and scholarly practice. These habits map well onto what agents need to work. They perform best when intellectual structure is documented and explicit. When the relevant context lives only in someone's head, the direction they can give is imprecise and the outputs reflect that imprecision.

The implication is worth stating directly: the same tools, brought to a different starting point, will produce different results. This is not a discouraging observation; it's an honest one. Most of what I'm describing was accumulated slowly, over years, as a form of scholarly practice that was useful long before AI made it operational in this new way. The point is not that you need to have done all of this already. It is that building these conditions now is worthwhile, because they compound.

## A different structure for academic workflow

I'm thinking of this shift as *[agent-first workflows](notes/agent-first-workflows)*; a mode of working where agents handle the execution layer and I provide the direction, rather than having AI assist at the margins of work I'm still doing myself.

This is not an entirely new structure. Delegation has always existed, and the distinction between directing work and doing it has been part of every management layer in every organisation. What feels new is that this structure is now available to anyone working alone — not as a team, not with administrative support, but as one person coordinating the functional equivalent of several capable collaborators working in parallel across different projects, all under coherent human direction.

That's what Karpathy's observations point toward: agents that can execute real, multi-step work in parallel, directed in plain English, while the human moves to a higher level of abstraction where the contribution is judgement, direction, and evaluation rather than execution. For those of us working in academic contexts, that is a significant shift in what the work is, and in what matters most about how we do it.
