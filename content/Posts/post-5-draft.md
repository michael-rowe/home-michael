---
title: "What the system actually does"
description: "Closing the infrastructure series: what fourteen tools across three modules enable in practice, the Claude commands that invoke them, and what's still missing."
date: 2026-04-03
tags:
  - mcp
  - personal-knowledge-management
  - context-engineering
  - claude-commands
  - context-sovereignty
series: commonplace
series_order: 5
---

The [first post in this series](link) opened with a problem that isn't really about tools: years of accumulated reading and thinking that had outgrown any system's ability to make it visible. The goal was a learning-support mechanism — something that could surface what had been read and thought, synthesise across it, and connect it to whatever was being worked on now. MCP was the architecture; the posts that followed were about building the foundation.

This post is about whether that foundation holds weight.

## Where things stand

Fourteen tools across three modules. Six for Zotero: keyword search, full item retrieval, collection browsing, tag lookup, items-by-tag, and PDF access on demand. Four for the Obsidian vault: keyword search, topic primer across both sources, serendipity search with lateral picks, and recent learning aggregated from notes and library. One for Wikipedia. Three write tools for adding summaries and new items back to Zotero.

The Zotero library has been substantially enriched — 469 items with restored metadata, approximately 1,431 with automatic tags recovered. A relevance scoring run has flagged around half the library for review; the deletions are happening in batches. The vault is structured, tagged, and searchable. The server runs locally, configured once, available in every Claude Code session without re-introduction.

The first post couldn't answer the question that matters most: does reducing the friction of retrieval actually change what questions get asked? From several months of use, the answer is yes. The speculative query — *what did I save on this three years ago, and does it connect to what I'm thinking now?* — now gets asked because the cost of asking it is low. The serendipity layer surfaces things that weren't being looked for. The Illich example in the [previous post](link) is the clearest illustration: a connection that had been latent across four existing notes was made explicit because the infrastructure made it cheap to explore.

## How retrieval actually works

It's worth being precise about what happens when you search through this system, because the mechanics shape what it can and can't do.

When you ask Claude to find papers about evaluative judgement, it calls `search_zotero` with that query. The tool sends the query to Zotero's local search engine, which returns keyword matches. Claude receives those results and only those results — it has no influence over Zotero's ranking, no ability to reason about what isn't returned, no access to the library except through what the tool surfaces. What it can do is evaluate the results, decide whether they're adequate, refine the query, and call the tool again. That costs tokens but requires no code changes — it's just another conversational turn.

The practical limits follow directly from this. Items with no abstract are findable only if a keyword appears in their title. Items with no manual tags can't be reached by tag-based queries. Broad keyword searches return anything that mentions the relevant word anywhere in its metadata, including in passing. The MCP doesn't add intelligence to poor data; it makes the shape of the data visible — including where it's weak.

This is why the work in Posts 2 and 3 wasn't optional. A cleaner, better-tagged, more focused library returns better results from the same tools. The infrastructure and the data quality are not separable problems.

## The commands: infrastructure in use

The MCP server exposes tools. Claude commands are the layer that tells Claude how to use them — which tools to call, in what order, with what reasoning applied to the results. Together they form the learning-support mechanism this series set out to build.

Three commands currently invoke the commonplace server, each with a distinct pattern of use: `/lore` for surfacing and synthesising recent reading; `/forge` for developing capability in a declared practice area; `/conclave` for live exploratory thinking. Each deserves a full post of its own — that's the next series. But `/conclave` is the most illustrative of what the infrastructure enables, so it's worth showing briefly how it works.

`/conclave` opens a brainstorm session written to a daily note in Obsidian, with the AI as an interlocutor rather than an oracle. The allowed tools in the command file show what it has access to:

```
allowed-tools: mcp__commonplace__get_recent_learning,
               mcp__commonplace__serendipity_search,
               mcp__commonplace__search_zotero,
               mcp__commonplace__topic_primer,
               mcp__commonplace__search_vault
```

Everything the server provides is available. Two instructions in the command file shape how the session runs:

> Before every response, re-read the full note file. This ensures any annotations, comments, or additions made in Obsidian between turns are taken into account.

> After every response, immediately append your response to the note file.

The conversation and the note are the same document. When you open Obsidian between turns and add something under a previous exchange — a qualification, a counterexample, a connection that came to mind while reading — that annotation is present when Claude responds next, without any re-introduction. The boundary between writing and conversation becomes permeable in both directions. `serendipity_search` is available throughout, pulling lateral connections from the vault mid-conversation in the same way it produced the Illich note in the previous post.

## What's still missing

The Zotero curation is ongoing. The system is useful now, with the library in its current state, but the flagged items haven't all been reviewed. Well-tagged, well-abstracted areas of the library return tight results; areas that were never carefully curated still return noise. That's a data problem rather than a tool problem, and it resolves only through continued review.

The most significant gap is an output index. The system knows what has been read, through Zotero. It knows what has been thought, through the vault. It doesn't know what has been written — published posts, draft essays, works in progress. A tool that searches across finished and draft writing would close the loop between reading and writing: the system could surface not just relevant papers and notes but relevant arguments already made, connections already drawn, positions already committed to in print. That would change the character of `/conclave` sessions in particular.

Browser history is the other obvious gap: what's been read recently but not yet saved to Zotero — the space between encountering something and deciding to keep it. A browser history tool would make that material temporarily available without requiring a curation decision before retrieval.

## Context sovereignty, in practice

The first post introduced context sovereignty as a motivation: the idea that you should be in control of what context an AI assistant has access to, rather than working within a generic context optimised for some aggregate of other users. This is what it looks like once built.

When the system returns results, they're filtered through every prior decision: what was saved and what wasn't, how things were tagged, which items were scored as core and which as peripheral, what notes were written and how they were structured. The AI didn't make those decisions. It's drawing on a context that was shaped over years of reading and accumulated thinking, and then refined deliberately in the months of work described in this series.

The Illich note that emerged from the serendipity session in Post 4 illustrates the point precisely. That synthesis didn't come from the model's training data — or rather, it didn't come from training data alone. It came from four notes written over years, connected by an infrastructure built to surface exactly that kind of latent relationship. The confidence in the output is grounded in being able to see its sources. The value of the output is grounded in the quality of what went into it.

This is the point at which the investment in upstream work — the tagging, the curation, the scoring, the vault restructure, the metadata enrichment — starts to pay dividends in a way that compounds. The better the data, the more precise the retrieval. The richer the notes, the more the system can say about how they connect. The more clearly the intellectual territory has been defined, the more accurately the system can navigate within it.

Working with a generic AI assistant, you're working with something optimised for an average query from an average user. Working with a system built on your library, your notes, and your intellectual priorities, you're working with something that reflects the accumulated decisions of years of reading and thinking — and that gets more useful the more deliberately those decisions are made.

The infrastructure is in place. What comes next is using it well.
