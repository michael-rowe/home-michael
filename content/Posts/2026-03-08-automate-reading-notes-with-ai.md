---
title: How I automated my reading notes with AI
type: post
description: Every week I accumulate reading notes across Zotero, Reader, and Snipd — all synced to Obsidian, but unreviewed. The problem isn't access; it's volume. I automated my reading notes with AI — a script queries the vault, pipes everything to Gemini on a schedule, and delivers a structured brief without me touching it. Building this made two things clear about what AI automation actually requires.
meta-description: "How I automated my reading notes with AI: a script that queries Obsidian, pipes everything to Gemini, and delivers a weekly brief without me touching it."
keyphrase: automate reading notes with AI
author: "[[Michael Rowe]]"
date: 2026-03-08
updated: 2026-03-21
tags:
  - agent
  - ai-integration
  - language-model
  - context-engineering
  - information-management
category:
  - Technology
draft: true
enableToc: false
subtype: field-note
linkedin:
---

Every week I read articles in Zotero and Reader, and listen to podcasts in Snipd, all annotated as I go. All of this — notes, summaries, metadata, timestamps — syncs automatically to Obsidian. By Friday I have a week's worth of notes from my reading and listening sitting in my vault, tagged and structured, but unreviewed.

The problem isn't access. The problem is volume, and not everything has equal value. I wanted to automate my reading notes with AI: gather the week's material, synthesise it, and present something worth engaging with rather than just consuming.

I spent some time discussing the project with Claude, working through different approaches until I knew what to build. Then Claude wrote a script that does three things:

- Queries my Obsidian vault for literature notes created within the past seven days
- Collects the relevant content and metadata
- Pipes everything to a [[headless AI]] Gemini model, which runs the summarisation and writes the output into a weekly overview note

What's less obvious than the script itself is the architecture it represents. Claude Code designed and wrote the script. A systemd timer (a standard Linux scheduling tool) triggers the whole thing automatically. A separate headless model handles the summarisation. None of these components know about each other directly; they're coordinated by stdin/stdout and a scheduler that has existed for decades.

Two things became clear.

The first is that automation infrastructure lives entirely outside the AI ecosystem. A systemd timer doesn't know what a [[language model]] is — it just runs a process on a schedule. That's enough. You don't need an AI-native orchestration framework to automate AI-assisted work, but you do need your data in a queryable format and a script that knows where to find it.

The second follows from the first. When your work lives in structured files with embedded metadata, it becomes available to scripts. Scripts can call AI. AI can call other AI. The whole thing can run unattended. That's not yet a [[personal agent]] — but it's the first time I've seen what one might look like from the inside.
