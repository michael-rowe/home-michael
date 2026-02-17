---
title: Building an AI workflow for academics with structured documentation
type: post
description: Most conversations about AI focus on what it produces. This post describes what an AI workflow for academics actually looks like in practice — building structured context through documentation, iteration, and judgement that makes AI collaboration increasingly effective over time. Drawing on several weeks of restructuring scholarly output with Claude Code, I describe the iteration cycle, the role of documentation as external memory, and what the process reveals about the relationship between explicit information architecture and productive AI collaboration.
meta-description: What an AI workflow for academics actually looks like — building structured documentation that makes each working session more effective.
keyphrase: AI workflow for academics
author: "[[Michael Rowe]]"
date: 2026-02-11
updated: 2026-02-11
tags:
  - documentation
  - emergent-scholarship
  - personal-knowledge-management
  - information-architecture
  - ai-integration
category:
  - AI and technology
related:
  - "[[documentation-as-infrastructure]]"
  - "[[taste-and-judgement]]"
draft: false
slug: posts/ai-workflow-for-academics
aliases:
  - posts/building-ai-collaboration-workflow
enableToc: true
reviewed:
  - writing_style
  - blog_writer
  - copy_editor
  - SEO_optimiser
---

> [!info] Building context, not issuing commands
> Working effectively with AI isn't about writing better prompts. It's about building the structured context — documentation, decision records, processing rules — that makes each working session more effective than the last. The "intelligence" in the system isn't only in the model. It's also in the architecture that surrounds it.

Building an effective AI workflow for academics isn't about [[prompt engineering|writing better prompts]] (although this is obviously a useful skill to develop). Recently I started using [Claude Code](https://docs.anthropic.com/en/docs/claude-code) to help restructure years of scholarly output — presentations, conference notes, event records, project files — into something more organised and useful. This has been possible because I keep my working documents in [Obsidian](https://obsidian.md), a plain-text note-taking application that stores everything as [[markdown]] files (other tools are possible e.g. [Logseq](https://logseq.com) and [Roam Research](https://roamresearch.com)...the key is to keep your work in markdown). Claude Code is Anthropic's command-line tool that gives Claude direct access to my local filesystem where it can read, create, move, and edit files rather than just generating text in a chat window that's separated from my context.

What's been interesting for me during this exercise isn't the file management. It's what the process has revealed about what it means to *work with* AI, as opposed to asking it to generate things. If you're trying to build a reliable AI collaboration workflow, I've found that the bottleneck is rarely the model's capability. It's the quality of the context you give it to work within.

## Documentation as external memory

Claude Code reads a file called `CLAUDE.md` at the start of every session. It's a plain-text file I maintain that tells Claude about my project structure, naming conventions, and the rules I've established for how files should be processed. It isn't documentation *about* the work. It's the operational context *for* the work, closer to [[context engineering]] than to a user manual. When I resolve an edge case and update the file, I'm not recording what happened. I'm changing what will happen next time. This means I'm slowly ratcheting up Claude's ability to recognise what matters to me because it's updating a record of my preferences and values, making it more useful over time.

The `CLAUDE.md` file doesn't work alone. Over the course of the project I've also built a set of supporting files that function as external memory. A migration tracking file records which files have been processed, what decisions were made, and what's still outstanding. A processing instructions file captures the workflow Claude should follow: what metadata fields to populate, how to standardise structured values, what to do when a file doesn't fit the expected pattern, and how to handle edge cases that emerged from earlier sessions. And a range of persona files that describe different skills that Claude can make use of to fine-tune how it deals with specific issues e.g. 

Each session picks up where the last one left off because the documentation carries forward the accumulated understanding. This is what [[documentation-as-infrastructure|documentation as infrastructure]] looks like in practice.

## The AI workflow in practice

I didn't start with a detailed plan. I started by processing one file and seeing what broke.

The cycle works like this: I try something, then evaluate whether the output matches my expectations what the result should look like. It usually doesn't, at least not the first time. So I adjust the instructions, run the process again, and re-evaluate. Sometimes the adjustment is small, maybe a naming convention that needs tweaking. Sometimes it forces me to rethink a structural decision I thought was settled. When the output does match my vision, I test it on something different to see whether the process generalises. If it does, I lock the working approach into the `CLAUDE.md` and the processing files. If it doesn't, I refine further.

This cycle is ongoing and I don't have a sense that I'm approaching some kind of finish line. Each session extends the infrastructure and occasionally forces me to revisit earlier decisions. Some of the most productive changes have come from returning to files I processed weeks ago and realising the rules have since evolved.

And sometimes I hit a problem I can't yet articulate; a question emerges about how two types of work relate to each other, or a decision about what information belongs in which Obsidian vault. Those problems need to sit for a day or two before I can describe them clearly enough for Claude to act on. In those moments, the constraint isn't the model's capability. It's my own understanding of the problem.

## Making the fuzzy explicit

This is the part that has surprised me most. For years I've had a loose, intuitive sense of how my work connects e.g. how a presentation relates to a research project, how an event relates to my professional network, or how a piece of writing sits within a broader argument. Those connections existed as a fuzzy network of associated ideas. Real, but implicit.

Building the structured architecture for these vaults has forced me to make those relationships explicit. What *type* of relationship does this presentation have to that project? Is this person a co-presenter, an organiser, or someone I met at the event? Is this file a presentation, an event record, or both? None of these distinctions had ever needed to be precise before. They matter when you're building something a machine needs to act on consistently, and making them explicit has clarified my own thinking in ways I didn't anticipate.

I've written before about the idea that [[taste-and-judgement|taste and evaluative judgement]] are the core human contributions in AI collaboration, and this project has made that concrete. Claude is capable, but what it can't do is determine whether a particular output is right for the context; whether a specific output serves the larger vision, or whether a structural decision will hold when applied to a different category of work. That's my contribution: not generating content or moving files, but exercising judgement about whether each iteration moves closer to or further from what I'm trying to build.

This is a personal observation, not a general claim. But the discipline of making my thinking explicit enough for Claude to act on has sharpened it.

## Architecture over tools

A capable model and structured documentation are more productive in combination than either would be alone. The model brings processing speed, pattern consistency, and the ability to apply rules across hundreds of files without fatigue. The documentation brings persistent context, accumulated decisions, and a representation of the vision orienting the work.

Some of what gets described as AI "not being ready" for organisational use probably reflects the information environment it's being asked to operate in. Institutions that describe themselves as [[AI-forward]] tend to focus on deploying tools rather than on the information architecture those tools depend on. The pattern I've noticed in my own practice — that the bottleneck is more often in the clarity of the context than in the capability of the model — suggests the priority should be architecture first, tools second.

## Where this stands

This project isn't finished, and my Obsidian vaults remain only partially updated. I'm still refining the processing rules, and still discovering problems that need to sit for a while before I can articulate them. That's the point. An AI collaboration workflow built on structured documentation doesn't reach a fixed endpoint because it changes continuously as the context it works within becomes clearer and more complete. Not because the model has changed, but because the architecture surrounding it has.

If you're building your own AI collaboration workflow, the question worth asking isn't "which model should I use?" It's "what does the model need to know, and how clearly have I documented it?"
