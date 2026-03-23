---
title: "Getting started: how to structure your working notes for AI"
type: post
aliases:
  - Operational notes getting started
description: A practical starting point for academics who want to structure their working notes so AI can reason across them. This post covers what to install, what a first meeting note template looks like, how to build the habit before adding any complexity, and when to bring AI into the process. No prior technical experience required.
meta-description: "A practical guide to structuring your academic working notes for AI: what to install, what your first template looks like, and where to start."
keyphrase: structured academic notes for AI
author: "[[Michael Rowe]]"
date: 0001-01-01
updated: 0001-01-01
tags:
  - documentation
  - information-architecture
  - information-management
  - ai-integration
  - academic-practice
category:
  - Information management
  - Scholarship
related:
  - "[[2026-03-00-structured-notes-academic-productivity]]"
  - "[[2026-02-24-ai-ready-knowledge-base]]"
draft: true
slug: posts/getting-started-operational-notes
enableToc: true
linkedin:
---

> [!info] Start with one template, not a system
> The mistake most people make when trying to build a structured note system is trying to build a system. Start with a single meeting note template. Use it consistently for four weeks. Everything else can follow from that.

A previous post made the case that your operational working notes — meetings, projects, outputs, relationships — can function as a database that AI can reason across. This post is the practical companion: what to actually do, in what order, starting from nothing.

No prior technical experience is assumed. You do not need to know what YAML is to follow this. You do not need to be able to write code. You need a willingness to change how you record your meetings, and about thirty minutes to get the tools in place.

## What you need to install

**A markdown editor.** Markdown is a plain text format — documents are stored as ordinary text files on your computer, not in a proprietary application or a cloud service that could disappear or change its pricing. This matters because plain text files can be read by any AI tool, now and in the future.

[Obsidian](https://obsidian.md/) is free, works on any device, and stores everything locally. It has become the most widely used markdown editor for knowledge work, which means there is a large community and extensive documentation if you get stuck. Download it, create a new vault (Obsidian's name for a folder of notes), and you are ready to start.

There are other markdown editors — Logseq, Notion (with caveats about proprietary storage), Bear, iA Writer — but Obsidian is the one I use and the one this guide is written for.

**Nothing else, yet.** Resist the urge to install plugins, set up templates, or configure anything beyond the basics until you have four weeks of consistent note-taking behind you. Complexity added before the habit is established is complexity that sits unused and eventually discourages the whole enterprise.

## Your first template: the meeting note

The single highest-value change you can make to your working documentation is to bring your meeting notes into a consistent structure. Meetings are where decisions happen, where projects move forward, where relationships develop. If any document in your working life deserves structure, it is the meeting note.

Here is a minimal template. In Obsidian, you can create this as a template file and apply it to any new note with two keystrokes.

```
---
date:
participants:
project:
---

## Purpose


## Decisions


## Actions


## Notes

```

That is it. Four metadata fields at the top, four sections in the body. Let me explain each briefly.

**The metadata block** (the section between the `---` lines) is structured information about the note — fields that a machine can read and query, as opposed to prose that requires interpretation. `date` is the meeting date. `participants` is a list of who was there. `project` links this meeting to whatever project it was serving. These three fields are what allow AI to later answer questions like "what meetings have we had about this project?" or "who have I worked with most this month?"

**Purpose** is one sentence: why did this meeting happen? This is harder than it sounds, which is part of the value. If you cannot state the purpose in a sentence, the meeting may not have had one.

**Decisions** is the most important section. Not a record of everything discussed — only what was decided. This section is what separates a useful meeting note from a transcript. If this section is empty after a meeting, that is information too.

**Actions** is a list of what happens next, with names attached. "Circulate draft by Friday — MR." Not "we agreed to look at this."

**Notes** is everything else: context, background, things that emerged that aren't decisions or actions but are worth having written down.

## Building the habit before adding complexity

Use this template for every meeting for four weeks. Nothing more. No additional note types, no project files, no elaborate folder structure. Just meeting notes, consistently structured.

At the end of four weeks you will have a small but coherent set of documents — probably fifteen to thirty meeting notes — with consistent fields, consistent sections, and a developing sense of what the structure makes visible that your previous notes did not.

You will also have encountered the first genuine friction point: the meetings where you sit down to write the Decisions section and find it empty, or where you cannot link the meeting to a project because you do not have a project file yet. That friction is productive. It surfaces gaps in your working practice that the structure makes legible for the first time.

## When to bring AI in

After four weeks of consistent meeting notes, bring in an AI tool and ask it to read across what you have written.

[Claude](https://claude.ai/) is what I use. You can paste the contents of several meeting notes directly into a conversation and ask it questions. At this stage, the questions to ask are simple:

- *What decisions have I made in the last month, and which projects did they advance?*
- *Which meetings had no recorded decisions? What does that suggest?*
- *Who are the people I've met with most, and what are we working on together?*

You do not need any technical setup to do this — just paste and ask. The value at this stage is not sophisticated analysis; it is the experience of having an AI reason across your own working record and return something useful. That experience is the motivation to continue.

More capable workflows — where AI reads directly from your vault without you pasting anything — are available once the habit is established and the note collection is large enough to be worth it. [Claude Code](https://claude.ai/code) can work directly with your Obsidian vault, reading files and synthesising across them without manual copying. But that is a later step, and it depends on having enough consistently structured notes to make it worthwhile.

## What comes after the meeting note

Once the meeting note habit is solid, the natural next step is a project file: a single note for each active project, with a status field, a purpose statement, and links to the meetings that have served it.

After that, an output record: a consistent way of noting what you have produced and when — publications, presentations, workshops, reports.

Each addition extends the system without requiring you to rebuild what came before. The meeting notes link to project files; the project files link to outputs; the whole becomes progressively more queryable without any single step feeling like a large investment.

But none of that is necessary yet. The meeting note template is the starting point. Use it consistently, and the rest will become obvious from the friction you encounter.
