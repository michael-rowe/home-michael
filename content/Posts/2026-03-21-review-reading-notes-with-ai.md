---
title: How I review a week of reading notes with AI
type: post
description: Every week I annotate articles in Zotero, highlights in Reader, and podcasts in Snipd, all of which is synced to Obsidian. By Friday I have a week's worth of material, tagged and structured, but unreviewed. This post describes the weekly review command I built to surface what matters and create a reason to engage with it.
meta-description: How I built a weekly AI-assisted review to surface and engage with reading notes across Zotero, Reader, and Snipd.
keyphrase: review reading notes with AI
author: "[[Michael Rowe]]"
date: 2026-03-21
updated: 2026-03-21
tags:
  - agent
  - ai-integration
  - language-model
  - context-engineering
  - information-management
category:
  - Technology
draft: false
enableToc: false
subtype: field-note
slug: posts/review-reading-notes-ai
linkedin:
---

Every week I annotate articles in [Zotero](https://www.zotero.org/), save highlights in [Reader](https://readwise.io/read), and capture podcast moments in [Snipd](https://www.snipd.com/). All of it — notes, highlights, summaries, metadata — syncs automatically to [Obsidian](https://obsidian.md/). By Friday I have a week's worth of reading and listening sitting in my vault, tagged and structured, but unreviewed.

The problem isn't limited access to the material. It's that there's no natural moment to engage with it, and not everything has equal value. I wanted a way to surface what matters from the week and create a reason to go deeper — not a digest to consume, but a prompt based on my reading and listening, that I could respond to.

## A weekly review

I built a command in [[Claude Code]] that I can run at any point (I call it `/lore`), which does five things in sequence:

1. Queries the Zotero web API for items added in the last seven days, reads the local PDFs, generates plain language summaries, and posts them back to Zotero as notes attached to each source
2. Reads literature notes that came in via Reader and Snipd and are synced to Obsidian
3. Reads my daily writing notes where I develop ideas informally
4. Synthesises across all of the above, looking for threads and convergences with my existing work
5. Asks a question: which of these threads is worth exploring further?

That last step is the point. It doesn't just produce a document of summaries to consume; it surfaces the week's material and asks me to make a choice about what I want to do with it based on connections it finds to my active workstreams.

There's a secondary effect worth noting. When the command writes summaries back to Zotero, the next time I return to any of those sources, the context is already there. The corpus becomes self-annotating not through a separate archiving effort, but as a side effect of the review process itself.

All of this activity keeps building context that's automatically integrated into future sessions, and it's all local to my machine.
