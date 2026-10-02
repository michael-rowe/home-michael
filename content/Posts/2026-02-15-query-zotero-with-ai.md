---
type: post
subtype: field-note
title: Querying the Zotero database with AI
description: What happens when you query Zotero with AI and treat your whole reference library as context, instead of searching it one document at a time? This field note describes a proof of concept in which Claude Code reads the Zotero database file directly. The approach works, and what breaks shows how much your metadata practices matter. It also sets out the privacy trade-off of sending query results to a cloud-based model.
meta-description: Can you query Zotero with AI? I pointed Claude Code at my Zotero database. The approach works, and it showed me how much my metadata matters.
keyphrase: query Zotero with AI
author: "[[Michael Rowe]]"
date: 2026-02-15
updated: 2026-04-01
enableToc: true
tags:
  - agent
  - ai-integration
  - information-management
  - academic-practice
  - context-engineering
category:
  - Technology
  - Information management
draft: false
aliases:
  - posts/claude-code-zotero-database
linkedin:
reviewed:
  - blog_writer
  - writing_style
---

> [!info] Your research database is already AI-ready context
> Some of the most useful data for AI-assisted research is sitting in databases you've been building for years. Pointing an AI agent at your Zotero library shifts the available context from individual documents to your entire research history. The capability works, and the first thing it exposes is the state of your metadata.

I've been using [[Claude Code]] to read files on my computer for a couple of months now, mostly PDFs, [[markdown|markdown notes]], and text files. I point it at a document and ask it to analyse or summarise it, or to cross-reference it against something I'm writing, which is useful but not particularly remarkable.

Then I realised something that should have been obvious, which is that it can read *any* file I have local access to, and that includes databases.

Specifically, it can read my [[Notes/Zotero|Zotero]] library, and I mean the database file itself (`zotero.sqlite`) as well as the PDFs I've collected over the years. That file holds the whole structure of the library: metadata, tags, collections, notes, and reading dates. Fifteen years of research decisions are sitting there in a form an agent can query.

## What querying Zotero with AI looks like

Say I'm working on a draft about AI and assessment design. Instead of searching my Zotero library by hand, picking out the relevant papers, and then asking Claude to read those PDFs, I can give it the draft and ask it to find the evidence:

> [!prompt] Prompt
> The Zotero database is at ~/Zotero/zotero.sqlite — treat it as read-only.
> Here is a draft paragraph: [paste text].
> Query the database for the most relevant items and return titles, authors, and any notes I've added.

Claude works out the structure of the database and writes the SQL queries itself, without any input from me, and it searches the entire library at once. It knows what I have, when I saved it, how I tagged it, and which collections I've grouped it into, so the [[context engineering|context available to the agent]] grows from a single document to everything I've collected.

![[zotero-query-results.png|Claude Code output showing five ranked references from an AI query of a Zotero library, each with author, title, and a reason for relevance to the draft paragraph|450]]

*Claude Code querying a Zotero database and returning ranked references aligned with a draft paragraph about assessment design.*

A caveat: direct database access isn't the best way to do this. Zotero offers [access through its API](https://www.zotero.org/support/dev/web_api/v3/basics) (a structured interface designed for external tools), which is cleaner and safer; the [[Notes/Zotero|note on Zotero]] describes what an agent can do through it. What I'm describing here is a proof of concept, and I wouldn't recommend it as a working setup.

## What breaks

Access turns out to be the easy part. What I hadn't anticipated is that an [[Notes/ai-agents|AI agent]] can't filter noise the way a person does. When Claude queries my library, it gives a poorly tagged conference abstract from 2011 the same evidential weight as my core research from last month, and that low-quality context makes its answers worse.

So metadata matters far more than it used to. The "I'll tag it properly later" habit, which I'm especially prone to, becomes expensive, because the maintenance work I'd been putting off now decides how good the agent's answers are.

The privacy trade-off is just as concrete. Every database query sends what it retrieves to Anthropic's servers for processing, and my Zotero library holds my entire research history: what I've read, what I thought worth keeping, and what I tagged as methodologically interesting or theoretically important. The database stays local but the query results don't, because that's how local file access works with a cloud-based language model.

Even so, the database lives on my filesystem. I control access, retention, structure, and what gets tagged and how. The processing happens in Anthropic's infrastructure, but the evidence base stays under my control in a way that fully cloud-based systems don't offer, and that matters even if direct database access isn't the long-term approach.

## What this means

An agent querying the database shows you the state your data practices are actually in. The system you imagine—clean tags, regular reviews, consistent metadata—meets the one you have, which in my case means accumulated cruft, deferred decisions, and inconsistent naming.

The same holds for any collection an educator might point an agent at, whether that's a programme's module evaluations or a team's shared reading list. The agent's answers can only be as good as the way that collection has been kept.

If you use a reference manager and an AI coding agent, the proof of concept is straightforward: point one at the other. What you learn about the state of your metadata will be more valuable than the queries themselves.
