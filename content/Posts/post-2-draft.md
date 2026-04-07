---
title: "Getting your Zotero library in shape"
type: post
description: "Building the Zotero module for the commonplace MCP server, and what I found when I looked properly at what was actually in my reference library."
meta-description: ""
keyphrase: ""
author: "[[Michael Rowe]]"
tags:
  - mcp
  - zotero
  - personal-knowledge-management
  - vibe-coding
  - claude-code
category: []
related:
draft: true
slug: ""
series: commonplace
series_order: 2
subtype: ""
enableToc: true
linkedin:
---
<!--Remember that the series is about the PLE - and the principles of the PLE - which I'm trying to implement locally with my own context.-->

The [previous post](link) made the case for why a personal learning environment built on [MCP](link) and AI CLI agents, is worth building. This one is about building the first part of it: connecting Zotero to [Claude Code](link), and then confronting what I found when I actually looked at what my reference library contained.

## Why Zotero first

My Zotero library holds around 10,000 items, though that number is somewhat misleading. Roughly 4,500 of those are journal articles and books — the academic literature proper. The rest are personal notes attached to items, saved web pages, snapshots, grey literature, policy documents, and the various other things that accumulate in a reference manager used over many years across multiple institutions and projects. It's a mixed collection, and it grew without much discipline.

The library has a well-documented API, which made it a practical first module to build. But the more compelling reason was that it's where the most professionally significant material lives. If the system was ever going to do useful work — surfacing relevant papers while writing, connecting literature to current arguments — it needed access to this library. Everything else could come later.

The problem was that a lot of what was in the library was, in practice, invisible. A paper with no abstract, no tags, and no personal notes is findable only if you happen to search for a word that appears in its title. Years of saving things quickly, without always taking the time to add proper metadata, had left large portions of the library in that condition. Before the MCP server could be useful, the library needed to be understood.

## How this was actually built

Nothing in this post, or in any post in this series, involved writing code by hand. All of it was built by describing what I wanted to [Claude Code](link), directing the process as it went, and reviewing what it produced.

The workflow looks like this: I describe a goal. Claude Code proposes an approach — sometimes presenting a few options, explaining the trade-offs between them. I choose a direction. It builds. I run the result against real data, and problems surface — because problems always surface when you run anything against real data. Claude Code diagnoses each problem, explains what's happening, and proposes a fix. I approve. We continue.

This is [vibe coding](link): directing AI to build software by describing intent rather than writing implementation. I want to be clear about this upfront because it shapes everything that follows. I don't know Python in any meaningful sense. I can read the scripts Claude Code produced and follow roughly what they do, but I couldn't have written them, and I wouldn't know how to fix them if something broke. What I can do is describe a problem clearly, evaluate whether a proposed solution makes sense, and decide between options. That turns out to be enough.

The low-stakes nature of this project makes vibe coding appropriate. These are scripts that query a local database and optionally write metadata back to it. They don't handle sensitive data. Nothing irreversible happens without a dry run first. If something breaks, the consequence is a failed script and an unchanged library — and then a conversation with Claude Code about what went wrong. The risk profile is entirely different from production software, and treating it differently is the right call.

<!--I move very abruptly into "What got built: The Python files" but I'm still unclear about what we're building and why. The previous section and the next aren't immediately related.-->

## What got built: the Python files

Claude Code produced two categories of artefact.

The first is the MCP server itself — a Python program that runs persistently in the background when Claude Code is open, listening for requests and responding with data. When I ask Claude to search my Zotero library, it calls a tool exposed by this server; the server queries Zotero and returns results; Claude reads those results and responds. I don't interact with the server directly. It's infrastructure.

The second category is scripts: standalone Python programs that do a specific job and report what they did. A Python script is a set of instructions that runs automatically — it reads files, calls APIs, makes decisions, and writes results back. You don't need to read it or understand it to use it. You run it, read the output, and decide what to do next. Two scripts are relevant to this post: `library_health.py`, which audits and enriches library metadata, and `relevance_score.py`, which scores items for relevance to a defined research territory. The latter is covered in the next post.

## The six Zotero tools

The MCP server exposes six tools to Claude Code. All six are read-only — they can see everything in the library, but none of them can modify it. Write operations are a deliberate later step, implemented separately so there's no risk of accidental changes.

`search_zotero` is the main entry point: keyword search across title, abstract, authors, notes, and tags. It accepts filters — by item type, by tag, or restricted to title and author fields only when you want to cut down on noise from abstract matches.

`get_zotero_item` returns full details for a single item given its key — complete abstract, all tags, collection membership, any attached notes. Used when a search result looks promising and you want the full picture.

`list_zotero_collections` shows the folder structure of the library with item counts. Useful for understanding how the library is organised before deciding where to look.

`list_zotero_tags` lists tags, with optional substring filtering. The library has around 2,800 tags; the filter makes this navigable.

`get_items_by_tag` returns all items carrying a specific tag — useful for pulling a topic-focused reading list or auditing what's actually been tagged with a given term.

`get_zotero_pdf_path` returns the local filesystem path to a paper's PDF, if one is attached. Claude Code can then read that file directly. This tool is intentionally on-demand: a full paper in context can cost tens of thousands of tokens, roughly ten times the cost of a metadata search. You call it when you need to engage with a specific argument, not as a default.

## Getting the API key

Zotero has two APIs. The web API, at `api.zotero.org`, works from anywhere and requires authentication. The local API runs at `localhost:23119` and is only available when Zotero desktop is open.

The server uses the local API. The reason is latency: the web API took around twenty seconds per call during testing — unusable for interactive queries where you might run several in quick succession. The local API responds in under a second. The trade-off is that Zotero must be running, which for a workflow where Zotero is always open is no trade-off at all.

Both APIs use the same key. To get one: Edit → Settings → Advanced → Feeds/API → Create new private key. Give it library read access. The key and your user ID (visible on the same screen) are the two values the server needs, stored as environment variables.

## The bugs

Two bugs appeared during the initial build, both of the kind that only surfaces when you run something against real data rather than test it in isolation.

The first was a server that worked perfectly when tested manually but showed "failed" with no error message when Claude Code tried to start it automatically. No traceback, nothing actionable. Claude Code worked through the possibilities methodically — the configuration file, the dependencies, the MCP protocol handshake — ruling out each in turn. The problem turned out to be a single line in the configuration: the server was being launched with a relative path to the script file, and Claude Code starts servers from the home directory, not the project directory. The script was being looked for in the wrong place. Fix: use the absolute path. One line change.

The second was a tag filter that silently did nothing. The tool accepted a filter parameter and passed it to the local API, which accepted it without complaint and returned all 3,000-plus tags in the library regardless. No error, no warning — just the wrong result. Claude Code tested the API directly, confirmed the parameter was being ignored, and proposed fetching all tags in batches and filtering in Python instead. The fix worked cleanly, and from the user's perspective nothing changed about how the tool behaves.

Both bugs were integration failures at system boundaries — the kind of thing that's invisible until components that each work individually meet each other in a real environment. Claude Code is well-suited to this kind of diagnosis. The process in each case was collaborative: hypotheses formed, tested directly, eliminated or confirmed. The conclusion in both cases was "AI fixed it" — which is the point. That's not a gap in the process; it's the process.

## The library health audit

With the server working, the next question was what the server would actually find when it searched. The answer, it turned out, was less than it should.

An MCP server doesn't add intelligence to poor data. It makes well-structured data more accessible. A paper with a rich abstract, personal tags reflecting its significance, and a note explaining how it connects to current work can be found from multiple angles: by keyword, by tag, by author, by theme. A paper with only a title is nearly invisible. Given years of rapid saving without consistent metadata, a significant fraction of the library was in the second category.

Claude Code built `library_health.py` to audit the full library and identify what was fixable. The script pages through all items and checks each against six criteria, cross-referencing DOIs against Crossref and OpenAlex for items where automatic repair is possible.

The numbers that came back: 636 items missing abstracts where the DOI was present and the abstract could be retrieved automatically; 2,032 items missing abstracts with no DOI (mostly grey literature — nothing to do automatically); 1,692 items with no automatic tags despite having a DOI; 3,649 items with no manual tags at all.

That last number is the most significant. More than half the library had never been personally curated in any meaningful sense. From a retrieval perspective, those items don't really exist.

[*Images: before and after screenshots of a Zotero item, showing the empty abstract field and then the populated one, alongside the ACM source page the abstract was retrieved from.*]

## Two kinds of tags

Zotero stores two distinct types of tags, and the distinction matters.

Automatic tags (internally, type 1) are assigned by publishers — journal keywords, subject headings, MeSH terms. They're capitalised by convention and represent the publisher's characterisation of what a paper is about. Manual tags (type 0) are added personally — lowercase by convention, representing your own judgement about what a paper means and how it connects to your work.

Over the years, I'd deleted most of the automatic tags from my library, under the impression that they were noise that didn't align with my personal taxonomy. This was a mistake. What I'd deleted wasn't noise — it was the publisher vocabulary: terms like "Assessment" and "Feedback" and "Clinical Education" that make items findable by keyword even when they haven't been personally tagged. Removing them hadn't made the manual tags more visible; it had just made the library harder to search.

The scripts needed to distinguish between the two types because the goal was specific: restore the automatic tags that had been deleted, without touching the manual tags that had been carefully accumulated. The automatic tags represent what a publisher said a paper is about. The manual tags represent what it means to me. They're complementary, not competing, and Zotero's search covers both — so there's no benefit to duplicating one as the other.

[*Images: before and after screenshots showing the missing tags and then the restored automatic tags.*]

## Fixing what's fixable

Crossref and OpenAlex are the two main academic metadata APIs, both free, both requiring no authentication for basic use. Crossref holds publisher-supplied metadata for most journal articles. OpenAlex is a broader index with machine-generated topic clusters that are more consistently structured than raw keywords. The enrichment script queries Crossref first for each item with a DOI; OpenAlex serves as a fallback and the primary source for automatic tags.

The script runs in three modes: `--audit` (read-only, generates a report), `--dry-run` (shows exactly what `--apply` would change without writing anything), and `--apply` (makes the changes). The workflow is always audit first, dry-run second, apply third.

Several bugs appeared during the apply runs. Crossref occasionally returns stub abstracts — placeholder text like "n/a" — that look like valid data. The script was writing these, replacing genuine absence with noise; the fix was to filter out anything shorter than twenty characters. A date field was being set to the literal string "None" when Crossref returned a null value for the year — a Python type coercion issue fixed with a single check. The more significant problem was a 428 Precondition Required error on every write: Zotero's API requires a version number in the write request header to prevent overwriting changes made elsewhere, and the script wasn't including it. Once understood, straightforward to fix; as an error message, entirely opaque. Claude Code explained what was happening, retrieved the required version number from each item before writing, and the writes went through cleanly.

A system crash mid-run during the keyword restore pass provided an unplanned test of the checkpoint mechanism: several hundred items had been processed before the session was lost. The script picked up from the last completed batch when restarted, losing only the work in progress at the moment of the crash.

[*Images: the first --apply run showing 433 fixed and 40 failures; the field-mapping bug screenshot; the full_run screenshot showing the final totals.*]

## What the library looks like after

Across all runs: 469 items updated with abstracts and/or year and journal metadata, sourced from Crossref and OpenAlex and written back to Zotero through the web API. Approximately 1,431 items with automatic tags restored. The library is materially better for retrieval — more items findable by keyword, more with the abstracts that search depends on.

What didn't change: the 2,032 items with no abstract and no DOI. These are mostly grey literature — blog posts, policy documents, institutional reports, things saved by URL rather than imported via DOI. There's no identifier to look up. For items you'd genuinely want to cite, the answer is a minute of manual effort to add a proper abstract. For items you saved speculatively and may not need, the answer is in the next post.

[*Image: the final keyword restore results table.*]

## The lesson

You don't need to be a developer to build useful software tools. You need to know what problem you're trying to solve, be able to describe it clearly, and be willing to direct a process rather than execute it yourself. The technical execution — the Python, the API calls, the error handling, the edge cases — Claude Code handles. What it can't do is decide what you're trying to accomplish or evaluate whether the results are right. That part is yours.

The library work is unglamorous, and it's not optional. The quality of what the system can surface is bounded by the quality of what's in it. A beautifully built MCP server connected to a library full of items with no abstracts and no tags will return mediocre results — not because the retrieval is broken, but because there's nothing useful to retrieve.

What the work in this post produced isn't just a cleaner library. It's a library that's been deliberately shaped for retrieval — one where the metadata has been examined, the gaps have been addressed where possible, and the structure has been made visible. That's a different thing from a library that happens to be tidy. The distinction matters for everything that comes next.

The next question — and it becomes obvious once you're looking at the library properly — is whether the right items are in it at all.
