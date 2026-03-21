---
title: How I automated my reading notes with AI
type: post
description: Every week I accumulate reading notes across Zotero, Reader, and Snipd — all synced to Obsidian, but unreviewed. My first attempt to process them automatically produced summaries I mostly didn't read. The problem was the interaction model, not the architecture. This is a field note on replacing a fire-and-forget script with something that opens a conversation instead.
meta-description: "How I automated my reading notes with AI: why fire-and-forget synthesis didn't work, and what replacing it with an interactive Claude Code command changed."
keyphrase: automate reading notes with AI
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
linkedin:
---

Every week I read articles in [Zotero](https://www.zotero.org/) and [Reader](https://readwise.io/read), and listen to podcasts in [Snipd](https://www.snipd.com/), all annotated as I go. All of this — notes, summaries, metadata, timestamps — syncs automatically to [Obsidian](https://obsidian.md/). By Friday I have a week's worth of notes from my reading and listening sitting in my vault, tagged and structured, but unreviewed.

The problem isn't access. The problem is volume, and not everything has equal value. I wanted to automate my reading notes with AI: gather the week's material, synthesise it, and present something worth engaging with rather than just consuming.

My first attempt was a Python script triggered by a systemd timer — query the vault, pipe everything to a [[headless AI]] Gemini model, write a digest to a weekly note. It worked. And I mostly didn't read it. Fire-and-forget synthesis solves the wrong problem. A summary that arrives automatically is still something that needs to be engaged with; what I actually needed was less friction in going deeper, not less friction in arriving.

I replaced the script with a Claude Code command (`/lore`) that does something structurally different. It queries the Zotero API directly for items added in the last seven days, reads the local PDFs, and generates plain language summaries — posting them back to Zotero as notes attached to the source. It also reads vault literature notes and daily writing notes from the same period, synthesises across everything, and opens a conversation: which of these threads is worth exploring further?

Two things became clear from making this change.

The first is that the interaction model matters more than the architecture. A pipeline and an interactive command can process the same data; what changes is what happens after. Fire-and-forget produces a document. An interactive session produces a conversation — and the conversation is where the thinking happens.

The second is about closure. When the command writes summaries back to Zotero, the knowledge system annotates itself. The next time I return to a source, the summary is already there. The corpus becomes self-documenting not through a separate archiving effort, but as a side effect of the review process itself.
