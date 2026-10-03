---
title: Building an AI workflow for academics with structured documentation
type: post
description: Most advice on building an AI workflow for academics concentrates on writing better prompts. After several weeks of restructuring years of scholarly output with Claude Code, I've found the leverage lies in the structured context around the model — documentation that works as external memory, a cycle of testing rules and locking in the ones that hold, and the discipline of making implicit connections explicit. The same applies to institutions, where AI tools are only as reliable as the information architecture they're given.
meta-description: What an AI workflow for academics looks like in practice — structured documentation that makes each working session more effective than the last.
keyphrase: AI workflow for academics
author: "[[Michael Rowe]]"
date: 2026-02-11
updated: 2026-10-01
tags:
  - documentation
  - emergent-scholarship
  - information-management
  - information-architecture
  - ai-integration
  - context-engineering
category:
  - Technology
related:
  - "[[Essays/documentation-as-infrastructure]]"
  - "[[Essays/taste-and-judgement]]"
  - "[[Posts/2026-02-14-context-engineering-for-educators]]"
  - "[[Notes/Claude Code]]"
draft: false
aliases:
  - posts/building-ai-collaboration-workflow
enableToc: true
linkedin:
reviewed:
  - blog_writer
  - writing_style
  - SEO_optimiser
  - copy_editor

---

> [!info] Context does more work than the prompt
> Working effectively with AI depends less on writing better prompts than on building the structured context — documentation, decision records, processing rules — that makes each working session more effective than the last. Some of the intelligence in the system sits in that architecture, alongside the model.

Most advice on building an AI workflow for academics concentrates on [[prompt engineering|writing better prompts]]. That's a useful skill, though in my experience the leverage lies elsewhere. For the past few weeks I've been using [[Notes/Claude Code|Claude Code]] to restructure years of scholarly output — presentations, conference notes, event records, project files — into something organised and useful. Claude Code is Anthropic's command-line[^command-line] tool. It gives Claude direct access to the files on my computer, so it can read, create, move, and edit them rather than generate text in a chat window cut off from my work.

That only works because I keep my working documents in [[Notes/Obsidian|Obsidian]], a note-taking application that stores everything as plain [[markdown]] files. Other tools, such as [Logseq](https://logseq.com), work the same way; what matters is that the work lives in markdown files you control.

The file management has turned out to be the least interesting part. What's interested me more is what the process has revealed about *working with* AI, as opposed to asking it to generate things. When I've tried to make the workflow reliable, the limit has usually been the quality of the context I gave the model to work within, and only rarely the model's capability.

## Documentation as external memory

Claude Code reads a file called `CLAUDE.md` at the start of every session. It's a [[Notes/plain text|plain-text]] file I maintain that tells Claude about my project structure, naming conventions, and the rules I've established for how files should be processed. It works as operational context for the work, closer to [[context engineering]] than to a user manual. When I resolve an edge case[^edge-case] and update the file, I'm changing what Claude will do next time, and each update makes it a little better at recognising what matters to me, because the file holds a growing record of my preferences and values.

The `CLAUDE.md` file doesn't work alone. Over the course of the project I've also built a set of supporting files that function as external memory. A migration tracking file records which files have been processed, what decisions were made, and what's still outstanding. A processing instructions file captures the workflow Claude should follow: what metadata fields to populate, how to standardise structured values, what to do when a file doesn't fit the expected pattern, and how to handle edge cases that emerged from earlier sessions. And a set of persona files describes specialised roles Claude can take on for particular tasks, such as a copy editor or a reviewer that checks the structure of a post.

Each session picks up where the last one left off because the documentation carries forward the accumulated understanding. This is what [[documentation-as-infrastructure|documentation as infrastructure]] looks like in practice.

## Try, evaluate, adjust, lock in

I didn't start with a detailed plan. I started by processing one file and seeing what broke.

I try something, then evaluate whether the output matches what I expected. It usually doesn't, at least not the first time. So I adjust the instructions, run the process again, and re-evaluate. Sometimes the adjustment is small, such as a naming convention that needs tweaking. Sometimes it forces me to rethink a structural decision I thought was settled. When the output does match my vision, I test it on something different to see whether the process generalises. If it does, I lock the working approach into `CLAUDE.md` and the processing files. If it doesn't, I refine further.

This cycle is ongoing, and I don't have a sense that I'm approaching some kind of finish line. Each session extends the infrastructure and occasionally forces me to revisit earlier decisions. Some of the most productive changes have come from returning to files I processed weeks ago and realising the rules have since evolved.

And sometimes I hit a problem I can't yet articulate: a question about how two types of work relate to each other, or about what information belongs in which Obsidian vault.[^vault] Those problems need to sit for a day or two before I can describe them clearly enough for Claude to act on, and in those moments the limit is my own understanding of the problem.

## Making the fuzzy explicit

What has surprised me most is what the project has done to my own thinking. For years I've had a loose, intuitive sense of how my work connects, such as how a presentation relates to a research project, how an event relates to my professional network, or how a piece of writing sits within a broader argument. Those connections existed as a fuzzy network of associated ideas. Real, but implicit.

Building the structured architecture for these vaults has forced me to make those relationships explicit. What *type* of relationship does this presentation have to that project? Is this person a co-presenter, an organiser, or someone I met at the event? Is this file a presentation, an event record, or both? None of these distinctions had ever needed to be precise before. They matter when you're building something a machine needs to act on consistently, and making them explicit has clarified my own thinking in ways I didn't anticipate.

I've written before about the idea that [[taste-and-judgement|taste and evaluative judgement]] are the core human contributions in AI collaboration, and this project has made that concrete. Claude is capable, but it can't determine whether a particular output is right for the context, whether it serves the larger vision, or whether a structural decision will hold when applied to a different category of work. That judgement is my contribution: deciding whether each iteration moves closer to what I'm trying to build or further from it.

## Architecture over tools

A capable model and structured documentation are more productive in combination than either would be alone. The model brings processing speed, pattern consistency, and the ability to apply rules across hundreds of files without fatigue. The documentation brings persistent context, accumulated decisions, and a record of what the work is meant to achieve.

Some of what gets described as AI "not being ready" for organisational use probably reflects the information environment it's being asked to operate in. Institutions that describe themselves as [[AI-forward]] tend to focus on deploying tools rather than on the information architecture those tools depend on.

Picture a school of health professions rolling out an AI assistant over its shared drive. Module handbooks are named three different ways, placement records sit in spreadsheets whose columns nobody has defined, and the current assessment policy is whichever version was emailed last. The assistant will answer questions about that material fluently, and its answers will be exactly as reliable as the drive. The fix is to document what each file is, which version counts, and how the pieces relate, and that's slow work no prompt or model upgrade does on the school's behalf. My own practice points the same way: architecture first, tools second.

## Where this stands

This project isn't finished, and my Obsidian vaults remain only partially updated. I'm still refining the processing rules, and still discovering problems that need to sit for a while before I can articulate them. A workflow built on structured documentation doesn't reach a fixed endpoint. It keeps improving as the context it works within becomes clearer and more complete, even while the model stays the same.

If you're building your own AI workflow, a useful question to start with is what the model needs to know, and how clearly you've documented it.

[^command-line]: **Command line** — a way of using a computer by typing instructions as text in a terminal window, instead of clicking through menus. A command-line AI tool can work directly on the files in a folder, such as a year's module handbooks, rather than on whatever you paste into a chat. [Wikipedia](https://en.wikipedia.org/wiki/Command-line_interface)

[^edge-case]: **Edge case** — a situation at the margins of what a rule was written for, where applying the rule as written gives the wrong answer. A placement record for a student who switched sites halfway through is an edge case for a form that assumes one site per placement. [Wikipedia](https://en.wikipedia.org/wiki/Edge_case)

[^vault]: **Vault** — Obsidian's name for a folder of notes that it treats as one collection, with its own links and settings. I keep separate vaults for planning and for writing. [Obsidian help](https://obsidian.md/help/vault)
