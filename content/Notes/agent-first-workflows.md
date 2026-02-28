---
title: Agent-first workflows
description: A mode of working in which AI agents handle execution-level tasks while the human operates at the direction layer — deciding what should be made, defining what good looks like, and evaluating outputs.
aliases:
  - agent-first
  - agentic workflows
type: note
author: "[[Michael Rowe]]"
created: 2026-02-26
updated: 2026-02-26
status: draft
draft: false
tags:
  - AI
  - agents
  - workflows
  - knowledge-work
category:
  - AI and technology
related:
  - "[[Notes/claude-code]]"
  - "[[Notes/context-engineering]]"
  - "[[Notes/documentation-debt]]"
  - "[[Notes/plain-text]]"
  - "[[Notes/markdown]]"
keyphrase: "agent-first workflows in academic practice"
slug: notes/agent-first-workflows
---

> [!info] Direction, not execution
> Agent-first workflows don't mean doing less work. They mean doing different work — at a higher level of abstraction. The human contribution shifts from producing outputs to defining what should be produced, and evaluating whether it meets the bar.

## Agent-first workflows

**One-sentence definition:** A mode of working in which AI agents handle the execution layer — drafting, searching, formatting, restructuring — while the human operates at the direction layer, deciding what should be made, defining what good looks like, and evaluating outputs against that standard.

The phrase distinguishes this mode of working from AI-assisted work, where a human does the doing and AI helps at the margins. In agent-first workflows, the relationship is inverted: agents do the doing, and the human directs, reviews, and redirects. The analogy is closer to editorial or managerial work than to writing or research in the traditional sense.

This is not an entirely new structure. Management layers and delegation have always existed in knowledge work. What is new is that the direction layer is now available to individuals, not just organisations. One person can coordinate multiple agents working in parallel across different projects — something that previously required a team.

## The two layers

**The execution layer** encompasses the tasks that agents can increasingly handle: drafting text, searching and synthesising sources, reformatting documents, restructuring arguments, generating code, running checks across large sets of files. These tasks are not trivial, but they are increasingly delegable to capable AI agents.

**The direction layer** encompasses what remains distinctly human: deciding what should exist, specifying the constraints and values that shape the work, defining what good output looks like, and evaluating whether a given output meets that standard. Taste and domain expertise are the primary currencies at this layer — not the ability to execute, but the ability to judge.

## What the shift requires

Agent-first workflows do not emerge from simply adopting AI tools. They depend on prior conditions that are easy to underestimate:

- **Structured context**: agents work well when they have documented frameworks, processing rules, and exemplars to work with. Context built up over time — in the form of organised notes, explicit frameworks, and articulated standards — is what allows a direction-layer instruction to produce a useful output rather than a generic one. See [[Notes/context-engineering|context engineering]].
- **Plain text habits**: agents can work with content that is machine-readable. Documents locked in proprietary formats are effectively invisible. See [[Notes/plain-text|plain text]] and [[Notes/markdown|markdown]].
- **Domain expertise and taste**: the direction layer requires the ability to evaluate outputs critically — to know when something is wrong or merely plausible, and to redirect with precision. This cannot be shortcut.

## The attentional constraint

The human constraint in agent-first workflows is not knowledge or capability — it is attentional bandwidth. Managing one agent running on a well-specified task is straightforward. Managing two or three in parallel, across different projects, while maintaining coherent direction across all of them, is cognitively demanding. Managing four or more begins to exceed what most people can sustain without losing the thread.

This constraint has implications at every scale. At the individual level, it sets a practical ceiling on parallel workstreams. At the institutional level, it becomes a coherence problem: how do you maintain consistent direction across many people managing many agents, each introducing variation at every step? See [[Essays/documentation-as-infrastructure|documentation as infrastructure]].

## Related concepts

- [[Notes/context-engineering|Context engineering]] — building the structured knowledge systems that agent-first workflows depend on
- [[Notes/documentation-debt|Documentation debt]] — what accumulates when context is not maintained
- [[Notes/claude-code|Claude Code]] — one example of an agent-first tool operating through the command line
- [[Essays/documentation-as-infrastructure|Documentation as infrastructure]] — the institutional implications of agent-first workflows at scale
