---
title: Obsidian
description: Obsidian is a note-taking application that keeps every note as a plain markdown file in an ordinary folder on your own computer, and lets you link notes to one another. Because the notes are just files, they outlast the application, and any AI agent that can read files can read them without an export or a special connection.
meta-description: "Obsidian notes with AI: why a vault of plain markdown files is something an AI agent can read, follow links through, and work across directly."
aliases:
type: note
author: "[[Michael Rowe]]"
created: 2026-09-27
updated: 2026-09-27
draft: false
tags:
  - note-taking
  - information-management
  - knowledge-graphs
category:
  - Information management
  - Technology
related:
  - "[[Notes/markdown]]"
  - "[[Notes/plain text]]"
  - "[[Notes/YAML]]"
  - "[[Notes/headless AI]]"
  - "[[Notes/context engineering]]"
keyphrase: "Obsidian notes with AI"
linkedin:
reviewed:
  - note_writer
  - writing_style
  - SEO_optimiser
  - copy_editor
---

> [!info] Obsidian's notes are ordinary files, and that's what makes them usable by AI.
> Obsidian keeps each note as a markdown file in a folder you control, and adds links between notes so you can see how ideas connect. The application is optional in a way most note-taking tools aren't: close it and the notes are still there, readable by any text editor, and by any AI agent you point at the folder.

## Obsidian

**One-sentence definition:** Obsidian is a note-taking application that stores every note as a [[Notes/markdown|markdown]] file in an ordinary folder on your own computer, and lets you link notes to one another.

Obsidian calls that folder a *vault*. The notes aren't held in a database, or on a company's server unless you pay for its optional sync service, so the notes are as portable as any other file: you can back them up, open them in another program, or put the folder under [[Notes/git|git]] to keep a history of every change. The application is free, including for use at work since February 2025, though its own code isn't open source. The files are the open part, because they're [[Notes/plain text|plain text]].

What Obsidian adds to a folder of files is mostly about connection. Typing `[[` and the name of another note creates a link, and every note shows its *backlinks*, the other notes that link to it. A graph view draws the whole vault as a network. Each note can carry *properties*, fields of [[Notes/YAML|YAML]] at the top of the file, recording things like a note's type, status, or tags. A large community has written plugins for most other needs, from slide decks to task lists.

Backlinks are what make the linking worth the effort. A midwifery lecturer who keeps one note for each national guideline, and links to it from every teaching session that relies on it, gets a record that needs no separate upkeep. When NICE[^nice] revises its intrapartum care guidance, the lecturer opens the guideline's note and the backlinks list every session, handout, and assessment brief that now needs checking. In a folder of Word documents the same question means opening each file and searching it.

---

### Why Obsidian notes suit AI

Most note-taking tools keep your notes in a format only they can read, so getting an AI to work with them means exporting, copying and pasting, or waiting for the company to build an integration. An Obsidian vault needs none of that. An agent like [[Notes/Claude Code|Claude Code]] reads the files directly, can follow the links from one note to the next, and can use the properties to filter what it reads. This is the arrangement the [[Notes/headless AI|headless AI]] note describes: the agent works on the material where it already lives. I've had an agent [[Posts/2026-02-18-switching-to-claude-sonnet-4-6|work through my own vault]] of nearly 6,000 notes, analysing their types, structure, and status and surfacing problems I hadn't noticed.

Two limits come with this. A link in Obsidian says that two notes are connected, but not how: whether one extends the other, contradicts it, or replaced it. The structure the agent sees is only as good as the conventions you've kept, and a vault built over years without them gives an agent little to work with. And an agent reading your vault through a cloud-based model sends what it reads to that provider, so the folder you point it at should hold only what you're content to share.

---

## Sources

- Obsidian. (n.d.). *How Obsidian stores data*. Obsidian Help. https://obsidian.md/help/data-storage
- Obsidian. (n.d.). *Backlinks*. Obsidian Help. https://obsidian.md/help/plugins/backlinks
- Obsidian. (2025, February 20). *Obsidian is now free for work*. Obsidian Blog. https://obsidian.md/blog/free-for-work/

[^nice]: **NICE (National Institute for Health and Care Excellence)**: the body that publishes clinical guidelines for the NHS in England, which programmes in health and care draw on for what they teach and assess. [Wikipedia](https://en.wikipedia.org/wiki/National_Institute_for_Health_and_Care_Excellence)
