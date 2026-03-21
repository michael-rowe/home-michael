---
title: The session that produced an argument
type: post
author: "[[Michael Rowe]]"
date: 2026-03-22
updated: 2026-03-22
description: "Sometimes reading produces a direction rather than an argument — a thread worth following but not yet a claim. This is a field note on a brainstorming session with AI that turns half-formed ideas into arguments, with access to your vault and the ability to push back."
meta-description: "How an AI-assisted brainstorming session connected half-formed reading threads into a fully developed argument — and what made it work."
keyphrase: developing ideas with AI
draft: true
enableToc: false
subtype: field-note
tags:
  - ai-integration
  - academic-writing
  - academic-practice
  - context-engineering
category:
  - Scholarship
slug: posts/the-session-that-produced-an-argument
linkedin:
---

Sometimes reading produces a direction rather than an argument. Several items converge, a thread becomes visible, but you haven't worked out what you actually think. You have a territory, not a claim.

I have a brainstorming command for this — I call it `/conclave`, and it runs inside [Claude Code](https://claude.ai/code). It creates or opens a daily note in my writing vault, loads context from recent work, and begins a conversation. Through a local MCP server it can search notes, surface connections, and query my Zotero library directly. Everything is saved to the note as a running transcript.

The format is simple: you write, Claude responds. But the quality of the interaction depends on how the session is designed. The instruction behind it tells Claude to push back rather than validate, to steelman positions before testing them, to ask one sharp question rather than a battery of gentle ones. If your argument is weak, it says so and explains why.

A typical session starts with something half-formed. In a recent note, I opened with: *"What is 'the work'?"* — the thing colleagues mean when they say they don't want students using AI to do it. Claude's first response identified the load-bearing assumption: before AI, the artifact was a reasonable proxy for the cognitive process that produced it. Now the proxy has collapsed. The question isn't *what is the work* — it's *did we ever make the work explicit?* From there I asked what my notes said about it. The command searched the vault and surfaced three notes I'd written separately and never connected: one on *becoming* versus *explaining*, one on identity change preceding behaviour change, and one on how subjective norms carry professional identity more than assessed tasks do. The thread running through all of them: education has consistently conflated *producing* with *becoming* because producing is measurable and becoming is not.

That's the move this kind of session makes — not generating ideas, but finding the connections between things you already know that you haven't yet put in the same room. The conversation makes the implicit explicit.

When the session reaches a natural conclusion, you type `wrap up`. The command restructures the transcript into a coherent outline ordered by argument rather than chronology, adds a conclusion callout summarising the key insight, and writes YAML frontmatter with tags, thread summary, and source links. The wrapped note is then ready to hand to `/herald` for drafting a post, or `/distil` for extracting permanent concept notes into the vault.

The session that produced the next post worked the same way. The thread was about AI and writing — what it means to produce knowledge when AI can generate the words. The vault surfaced Feynman on writing-as-thinking, Graham on essays as attempts, research on professional identity under AI pressure. An hour in, I had a distinction that had been eluding me for months: the words were never the distinctive part. The compulsion to write was always about something upstream of them.

The session produced an argument I'd been circling for months without quite landing on: that the writing was never the distinctive part of what I do as a scholar, and that AI made this visible by being able to do the part I'd been over-valuing. That argument is written up separately. This note is about where it came from.
