---
type: post
title: "The database as context: what I learned when Claude Code read my Zotero library"
description: "What happens when you point an AI agent at your entire reference library rather than individual documents? This post documents an experiment using Claude Code to query a Zotero SQLite database directly, treating fifteen years of accumulated references as accessible context. The approach works—but surfaces three problems that aren't immediately obvious: noise filtering, query design complexity, and the privacy implications of local-file AI integration."
meta-description: "Using Claude Code to query Zotero's SQLite database as AI context: what works, what breaks, and what it means for your research practice."
keyphrase: Claude Code Zotero database
author: "[[Michael Rowe]]"
date: 2026-02-15
updated: 2026-02-15
tags:
  - ai-agents
  - AI-integration
  - personal-knowledge-management
  - academic-practice
  - context-engineering
category:
  - AI and technology
  - Knowledge management
draft: false
slug: posts/claude-code-zotero-database
---

> [!info] The database was always there
> The most valuable data for AI-assisted research isn't in the cloud—it's already on your filesystem, encoded in the databases you've been managing for years. Querying your Zotero library directly shifts the context available to an AI agent from individual documents to your entire research history. Access is the easy part; what breaks immediately reveals how much your metadata practices actually matter.

I've been using [[Claude code|Claude Code]] to read files on my computer for a couple of months now—mostly PDFs, markdown notes, and text files. Point it at a document, ask it to analyse, summarise, or cross-reference against something I'm writing. Useful, but not particularly remarkable.

Then I realised something that should have been obvious: it can read *any* file I have access to. Including databases.

Specifically, it can read my Zotero library. Not just the PDFs I've collected over the years, but the database file itself—zotero.sqlite. The entire structure: metadata, tags, collections, notes, reading dates. Fifteen years of research decisions encoded in queryable form.

It changes what's possible. It also creates problems I hadn't anticipated.

## The Zotero proof of concept

What this looks like in practice is deceptively simple. I'm working on a draft section about assessment design. Instead of manually searching my Zotero library, selecting relevant papers, and then asking Claude to read those specific PDFs, I can prompt: "Read this draft section. Query my Zotero database to identify the most likely supporting evidence aligned with the claims I'm making."

In Claude Code, that means referencing the database file directly alongside your draft:

```
The Zotero database is at ~/Zotero/zotero.sqlite — treat it as read-only.
Here is a draft paragraph: [paste text].
Query the database for the most relevant items and return titles, authors, and any notes I've added.
```

Claude constructs the SQL queries needed to navigate the schema; you don't write them yourself.

The agent queries the entire bibliography at once. It knows what I have, when I acquired it, how I tagged it, what collections I grouped it into. The [[context engineering|context window]] expands from individual documents to the entire research infrastructure.

There are technical requirements that make this more involved than it sounds. The access must be read-only—writing to databases carries real corruption risk, and there's no scenario where an AI agent should be modifying your reference library directly. You need some understanding of the database schema, which Zotero doesn't document for end users. The agent needs to construct valid SQL queries, which means [[prompt engineering|prompt design]] matters more than it does for simple file reading.

But the fundamental capability works. The database was always there on my filesystem. Now it's readable as context.

## What's already on your filesystem

Zotero is one database. An academic's computer typically contains several more, each recording a different dimension of intellectual work.

Browser history lives in places.sqlite if you use Firefox. Every search query, every reading sequence, every rabbit hole you've gone down. The messy, non-linear process of discovery that precedes the cleaned-up citations in your final paper.

Email archives, if you use Thunderbird, are stored locally in SQLite format. Institutional communications, collaboration threads, decision trails. The social and administrative infrastructure through which research actually gets done.

RSS readers are more complicated—Reader by Readwise runs in-browser and doesn't use a local SQLite database in the same way—but the principle holds. If you're systematically collecting and highlighting material before it becomes formal references, that data exists in some structured format.

These aren't hypothetical databases. They exist on my machine right now. What's hypothetical is whether querying them works as cleanly as Zotero does, and whether the effort required to make them readable is worth the return. The conceptual foundation is proven: if the data lives locally in a structured format, it's potentially accessible as context rather than requiring manual export and upload.

## Why access is only half the problem

Zotero revealed a problem I hadn't anticipated: AI agents can't filter noise the way humans do. When Claude queries my library, it treats a poorly tagged conference abstract from 2011 with the same evidential weight as my core research from last month. Low-quality context isn't just clutter in this system. It actively degrades the quality of responses.

This makes metadata hygiene—always aspirational for academics—functionally critical. The "I'll tag it properly later" habit becomes expensive. Every piece of cruft in your library isn't just something you scroll past when searching manually; it's potentially being retrieved and weighted by the agent as relevant evidence. What was [[documentation debt|invisible maintenance work]] becomes directly load-bearing for system performance.

Query design presents a different challenge. Having database access isn't the same as knowing what to ask. Conceptual queries like "find everything related to assessment design" require knowing how you've tagged things, what terminology you've used consistently across years, what collections you've created. Your organisational logic—which might be inconsistent, might have evolved over time, might use different frameworks for different research areas—becomes the infrastructure the agent navigates.

Temporal queries sound simple but aren't. "What was I reading about curriculum design last term?" requires joining access dates, file metadata, and collection membership. The SQL gets complex quickly. More importantly, it requires that you've actually been recording access dates, that your collections map to time periods in interpretable ways, that the metadata you've been casually maintaining actually supports this kind of temporal reconstruction.

Then there's the privacy dimension. Every database query sends retrieved data to Claude's servers for processing. My Zotero library contains my entire research history—what I've read, what I've considered worth keeping, what I've tagged as methodologically interesting versus theoretically important. Browser history would contain everything I've searched for, every sequence of reading, every abandoned line of inquiry. Email contains sensitive institutional communications. The databases stay local, but query results don't. This isn't hypothetical exposure; it's the actual architecture of how local file access works with cloud-based language models.

## Why this matters

The shift is from document-level to system-level context. "Summarise this paper" becomes "cross-reference this draft against my research history". The agent sees not just what I know, but when I encountered it, how I organised it, what I grouped it with. Temporal patterns become visible that wouldn't be apparent from reading individual papers in isolation.

Database access also reveals the actual state of your data practices rather than the aspirational version. The system you imagine—clean tags, regular reviews, consistent metadata—meets the system you actually have. Accumulated cruft, deferred decisions, inconsistent naming conventions. What was previously invisible becomes measurable when the agent starts using it as evidence retrieval infrastructure.

There's something valuable in maintaining local control over the data substrate even when the processing happens remotely. [[context sovereignty]], even if imperfect. The databases live on my filesystem. I control access, retention, structure, what gets tagged and how. The thinking might happen in Anthropic's infrastructure, but the evidence base remains under my control in ways that fully cloud-based systems don't offer.

## Where this leads

The current limitation is obvious enough: each database requires custom queries, schema knowledge, manual coordination. Querying Zotero works because I've invested time in understanding its structure. Querying browser history would require different schema knowledge. Email differently again. There's no [[contextual interoperability|unified interface]], no coherent way to construct queries that span multiple data sources simultaneously.

The architectural question isn't whether you can build coherent scholarly context from disconnected local databases—clearly you can—but what it takes to make that practical for people who need their tools to work together rather than requiring separate expertise for each silo.

If you're using Claude Code and you have a Zotero library, point it at the database file. See what queries become possible. Pay attention to what breaks, what requires more metadata work than you've been doing, what privacy limits you're comfortable with. The capability exists. What matters is what you build from it.
