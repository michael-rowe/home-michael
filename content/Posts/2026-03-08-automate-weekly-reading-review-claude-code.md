---
title: I used Claude Code to automate my weekly reading review
type: post
description: Every week I accumulate notes from my reading and listening across Zotero, Reader, and Snipd. Getting value from that material requires more than access — it requires synthesis. I asked Claude Code to write a script that queries my Obsidian vault, collects the week's literature notes, and pipes them to a headless Gemini model for summarisation on a schedule. The result is a weekly digest that arrives automatically, without me touching it.
meta-description: How I used Claude Code to write a script that automatically summarises my weekly reading from Obsidian, piping notes to Gemini on a schedule.
keyphrase: "automate weekly reading review with Claude Code"
author: "[[Michael Rowe]]"
date: 2026-03-08
updated: 2026-03-08
tags:
  - agent
  - ai-integration
  - language-model
  - context-engineering
  - information-management
category: [Technology]
draft: true
slug: "posts/automate-weekly-reading-review-claude-code"
aliases:
  - posts/using-the-right-model-for-the-right-job
enableToc: false
subtype: field-note
linkedin:
---

Every week I read articles in Zotero and Reader, and listen to podcasts in Snipd, all of which include some form of annotation. All of this — notes, summaries, metadata, timestamps — syncs automatically to Obsidian. By Friday I have a week's worth of notes from my reading and listening sitting in my vault, tagged and structured, but unreviewed.

The problem isn't that I don't have ready access to this material. The problem is that there's a lot of it, and not all of it has equal value. I wanted to build something to gather the week's material, make sense of it through some kind of synthesis, and present it to me in a form I could actually engage with. Not a summary, but a structured brief designed for engagement.

I spent some time discussing the project with Claude, working through different conceptualisations until we had a good understanding of what I wanted. And then Claude wrote a script which does three things:

- Queries my Obsidian vault for literature notes created within the past seven days
- Collects the relevant content and metadata
- Pipes everything to a [[headless AI]] Gemini model for summarisation

Then the output lands in a weekly overview note that I can open and review.

The script itself is very simple. What's less obvious is the architecture it represents. Claude Code designed and wrote the script. A headless AI model handles the weekly summarisation runs. A systemd timer (a Linux scheduling tool) triggers the whole thing automatically. None of these components know about each other directly; they're connected by standard input, output, and scheduling tools that have existed for decades.

Building this made two things clearer.

The first is that scripts and scheduling tools like systemd live entirely outside the AI ecosystem. They don't know what a language model is. They just move data between processes on a schedule. That's enough. You don't need an AI-native orchestration framework to automate AI-assisted work. But you do need your data in a queryable format and a script that knows where to find it.

The second follows from the first. When your work lives in structured files with embedded metadata, it becomes available to scripts. That enables automation at scale, without the latency and cost of routing unstructured data through a language model. Scripts can be passed to AI. AI can call other AI. And the whole thing can run on a timer without you touching it. That's not yet a personal agent, but it's the first time I've seen a glimpse of what one might look like from the inside.
