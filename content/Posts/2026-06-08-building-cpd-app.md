---
title: Building a CPD app with Claude Code
type: post
description: Most CPD tools are built for compliance, not development. I wanted something that started from the gap; what am I missing, and what would close it? I couldn't find the tool I needed so I built one called Path instead. It describes what I think professional development should look like, and what two weekends with Claude Code produced.
meta-description: I used Claude Code to build a CPD portfolio app without being a developer. Here's what I built, how it works, and what comes next.
keyphrase: building a CPD app with Claude Code
author: "[[Michael Rowe]]"
date: 2026-06-08
updated: 2026-06-08
tags:
  - professional-development
  - continuing-professional-development
  - health-professions-education
  - ai-integration
  - generative-ai
  - claude-code
category:
  - Technology
  - Professional Development
related:
  - "[[Essays/ai-hpe-theoretical-framework]]"
draft: false
slug: posts/building-cpd-app-claude-code
enableToc: true
linkedin:
---

> [!info] CPD tools answer the wrong question
> Most professional development tools are built to satisfy regulators and to answer the question: "Have you completed the required activities?" What they leave unanswered is whether any of it made you better at your job. *[[Projects/path|Path]]* is built around the second question; not what you've done, but what you're missing, and what would help you to close the gap.

I recently began putting together documents for an [AdvanceHE](https://www.advance-he.ac.uk/fellowship/) D4 fellowship application, and it made me realise that most continuing professional development (CPD) tools are trying to solve the wrong problem. They help document what you've done; hours logged, activities completed, reflections filed, and produce a submission at the end of a cycle. They're built for the audit, not for your professional development.

I wanted a tool that started from the gaps I was identifying in my own portfolio: what am I missing against a specific framework, and what would close it?

After an unsuccessful search for an existing tool, I decided to build my own with Claude Code. It runs on [Docker](https://en.wikipedia.org/wiki/Docker_(software)), takes patience to install (I'd actually be shocked if you did get it to install), and reflects two weekends of work rather than two years of engineering. But even though it's brittle, un-pretty, and very idiosyncratic, I was nonetheless able to build a working prototype informed by my thinking around professional development and expertise.

## Where I started

I've been thinking about putting together an application for a Principal Fellowship of the Higher Education Academy (PFHEA D4). The [AdvanceHE](https://www.advance-he.ac.uk/fellowship/principal-fellowship) framework has four descriptors, each with multiple criteria that I wanted to build into template pages that would help me write evidence against each criterion. This would help me see where I'd done the work and where I hadn't.

So I asked Claude Code to turn the AdvanceHE framework into a set of linked templates, which then pushed me to think about how I could use the relationships between those templates; see which pieces of evidence mapped to which criteria, and which criteria were still thin. I've been using Obsidian for years and have come to really appreciate the value of backlinks and structured notes, so I started looking for open-source projects with permissive licences that I could extend without starting from scratch.

I found [SilverBullet](https://silverbullet.md), a markdown-based workspace with a plugin system. And a couple of hours later, I had something that was starting to feel like an app.

## The idea underneath

*Path* is built around one main observation, which is that every professional framework has the same underlying structure. [Health and Care Professions Council (HCPC)](https://www.hcpc-uk.org/cpd/carrying-out-and-recording-cpd/) CPD audits, AdvanceHE fellowship, and applications for promotion all use a conceptual framework that link criteria, claims, evidence, and gaps. You map your experience against the criteria, and the gaps become a development plan that show you where you need to develop.

And evidence quality is as important as evidence coverage. *Path* draws on [Miller's pyramid](https://en.wikipedia.org/wiki/Miller%27s_pyramid) to distinguish between evidence that describes experience ("knows"), explains how something works ("knows how"), demonstrates it in context ("shows how"), and documents practice-level change ("does"). Counting hours gives you a record. Weighting by level gives you evidence of development.

## What *Path* does

The core workflow: define a professional goal (a path), map it to a professional development framework, capture evidence and activity against the criteria, and see where the gaps are.

**Page types in Path**
- *Path*: a professional goal with status tracking and target dates
- *Framework and criteria*: HCPC revalidation and AdvanceHE fellowship criteria come pre-installed; others can be added from a Github repo
- *CPD activity*: logged continuing professional development entries
- *Reflection*: structured entries using Driscoll, ERA, Gibbs, or Rolfe
- *Claim*: an argument that a specific criterion is met, with evidence links and impact notes
- *Evidence*: artefacts and supporting documentation
- *Credential*: verifiable awards and certificates
- *Personal statement*: a narrative introduction for submission exports

**Optional background services** (each runs as a separate Docker container):
- Word document export via Pandoc
- Version history with 30-minute automatic snapshots and one-click restore
- Cloud backup via rclone (Google Drive, Dropbox, S3, and others)
- Grammar and style checking via LanguageTool
- Link validation via Lychee
- Full-text search via Meilisearch

## The interface

*Path* uses a three-panel layout: a Navigator on the left for browsing, an Editor in the centre, and an Inspector on the right for page metadata, version history, and editing tools (e.g. a grammar checker). Everything is stored as plain text markdown files with structured metadata headers. Claims, CPD activities, reflections, evidence, credentials are therefore all stored as text files in a local directory.

No database. No proprietary format. No cloud dependency by default. If *Path* ever stops working, or you switch to something else, the files remain accessible.

![[path-interface.png|The Path interface: Navigator (left), Editor (centre), Inspector (right). Quick Reference and a full manual are available.|580]]

## Coverage and gaps

One of the things I most enjoyed creating was the coverage dashboard: a heatmap showing how many claims, CPD activities, reflections, and evidence items you've mapped against each criterion in a framework. Darker cells mean more coverage and empty rows are the gaps.

![[path-heatmap.png|Coverage heatmap for UoL Professor promotion criteria. Darker cells mean more entries; empty rows auto-populate the gap list below.|580]]

This is a draft of an application for promotion. The "Auto-derived gaps" section below the heatmap lists the criteria with no mapped content, which is the starting point for the next development move.

## One piece of work, multiple frameworks

The same piece of experience often maps across multiple frameworks simultaneously. A reflection that supports a PFHEA D4 claim might also be relevant to HCPC revalidation and institutional promotion criteria. *Path* lets you tag a single page against every framework it's relevant to, removing a lot of duplication.

![[path-dark-mode.png|A Driscoll reflection mapped to four frameworks in the Inspector: PFHEA D4, SFHEA D3, HCPC CPD, and UoL Promotion.|580]]


## Low-friction capture

A single keyboard shortcut (`Ctrl-Alt-c`) opens a picker that lets you choose what kind of record to create; a CPD activity, a reflection (you can currently select from multiple approach, including [Driscoll](https://en.wikipedia.org/wiki/Reflective_practice), [ERA](https://en.wikipedia.org/wiki/Reflective_practice), [Gibbs](https://en.wikipedia.org/wiki/Gibbs%27_reflective_cycle), or [Rolfe](https://en.wikipedia.org/wiki/Reflective_practice)), a claim arguing that a criterion is met, a future-claim flagging planned work, or an evidence artefact. The picker routes to the right template with the right fields pre-populated, including the framework criteria for whichever path is currently active.

![[path-capture.png|The Capture picker: five record types, one keyboard shortcut.|400]]


## What building with Claude Code changed

Before Claude Code existed, this project would've been functionally impossible. I can't write [TypeScript](https://en.wikipedia.org/wiki/TypeScript), configure Docker sidecars, or build a plugin system for a markdown editor I've only just heard of. I'd have had to resort to drawing pictures of what I thought I wanted, but unable to actually test workflows, or whether the framework added value or just made things more complicated. But because I could describe what *Path* should do, how evidence should relate to criteria, and what the gap analysis should produce, Claude was able to build a working proof-of-concept.

To be honest, I actually don't understand much about how *Path* works at a technical level. I can't troubleshoot it when things break. But it runs. And when things break, Claude fixes them.

The distance between "I can describe what this should do" and "I can make it do it" has collapsed. And because prototypes are thinking made tangible, you can now build your ideas and give them enough form to find out whether they survive contact with reality.

## Why it's on GitHub

*Path* is [available on GitHub](https://github.com/michael-rowe/path), not because I think it might actually work for anyone else, but because the fact that the code is public is itself meaningful: this is a real thing, not a slide deck or a wireframe. You can clone the repo, read the framework structures, understand the model from the implementation, and form your own view of whether the idea is sound.

If you want to run it, your AI coding agent can almost certainly help you get it working. That's actually how I'd approach it if you wan to explore. Point Claude, Codex, or Antigravity to the codebase on Github and have it talk your through the process of setting things up.

## Feedback from the first demo

Last week, I demonstrated *Path* to two colleagues who know the CPD and portfolio market well. And even though the interface is rough, and there are still workflows I'm not 100% confident in, they immediately understood what the app was about, and how it could be used to support someone applying for promotion or preparing a submission for Advance HE Fellowship.

The prototype is now the digital manifestation of a specification i.e. it's evidence that the model works, a description of what an [MVP](https://en.wikipedia.org/wiki/Minimum_viable_product) needs to do, and a record of the design decisions behind it. Whether there's a viable product here — built by people who actually know how to design software — is what I'm exploring now.

What I built over two weekends is not software in any serious sense. But it is a way of thinking about professional development and expertise that happens to run in a browser.
