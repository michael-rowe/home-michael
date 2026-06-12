---
title: "Connecting your notes"
type: post
description: "Adding the Obsidian vault and Wikipedia modules to the commonplace MCP server — and what became possible when personal notes and reference library could be queried together."
meta-description: ""
keyphrase: ""
author: "[[Michael Rowe]]"
tags:
  - model-context-protocol
  - obsidian
  - information-management
  - context-engineering
  - serendipity
category: []
related:
draft: true
subtype: ""
enableToc: true
linkedin:
---

At this point, the Zotero library is connected, the metadata is substantially improved, and a relevance scoring run has flagged roughly half the library for review. The curation is ongoing — the list exists, the deletions are happening in batches — but the system is already useful before that work is complete. What it can't yet do is reach the other half of a personal knowledge base: the notes.

The Zotero library holds the literature I've read and saved. The thinking done with that literature lives somewhere else. It lives in Obsidian.

## What the vault is

Obsidian is a note-taking application built on a simple premise: everything is a plain text file on your own computer. No proprietary format, no cloud dependency, no platform to trust with your data. Notes link to other notes; structure emerges from use rather than being imposed by the application. I've used it for about ten years, accumulating reading responses, half-formed arguments, observations from practice, and ideas not yet ready to do anything with.

Earlier this year, I spent a week restructuring what had become 5,819 notes into something a language model could actually navigate — not just read, but reason across. That project involved building a 23-category taxonomy, migrating legacy notes to a consistent metadata structure, and generating descriptions for every note in the collection. The full account is in [Building an AI-ready knowledge base](link); the relevant outcome here is that the vault is now structured, consistently tagged, and efficiently searchable. It is also entirely local: plain text files on disk, readable by any tool that can open a file.

That last point matters for the MCP architecture. The vault tools don't require an API, authentication, or a running desktop application. They read files directly. Adding them to the server cost one new Python file and one line in `server.py`.

## One file, one line

The modular design behind the server was built precisely for this moment. The `server.py` file registers tool modules; each module is a self-contained Python file that exposes a `register_tools` function. Adding the Zotero module was one import and one function call. Adding the vault module is identical:

```python
from tools.vault import register_tools as register_vault
register_vault(mcp)
```

Nothing else changes. The Zotero tools continue working exactly as before. The new tools appear alongside them. This is the composability argument made concrete: the infrastructure grows without requiring anything already built to be touched.

## The vault tools

Four tools were added for the vault, each addressing a different kind of query.

`search_vault` is keyword search across the markdown files in the root of `~/writing/`. All keywords must be present — AND logic, case-insensitive — and the tool returns title, file path, tags, and a contextual snippet centred on the first match. It searches the root only, not subdirectories, which is a deliberate scope decision: the root contains concept notes, the notes most likely to be useful in the middle of a conversation. Literature notes, daily writing, and project files live in subdirectories and are handled by other tools.

`topic_primer` aggregates from both the vault and the Zotero library in a single call. Given a topic, it returns relevant concept notes and Zotero abstracts together, designed for preparing background before writing or exploring a question. Neither source alone gives the full picture: the vault holds personal thinking and argument; Zotero holds the literature those arguments engage with. The primer brings them into the same response.

`get_recent_learning` pulls from three sources simultaneously: daily writing notes modified in the past N days, literature notes modified in the same window, and Zotero items added recently that carry plain language summaries. It's the weekly review tool — the thing you run on a Monday morning to see what accumulated over the previous week. It feeds the `/lore` command.

`serendipity_search` is the most distinctive of the four, and the one worth examining in detail.

## What serendipity_search does

A standard keyword search returns what you asked for. Serendipity search returns what you asked for and something else entirely.

The tool takes a keyword query, finds vault notes that match, and then adds a random sample of notes from completely unrelated parts of the collection. The matched notes and the random picks are returned together, with the lateral picks clearly labelled. The logic is that useful connections are often not the ones you'd search for directly. A well-structured personal collection accumulated over years contains things you've forgotten you thought about — ideas that were set aside, half-formed arguments that were never developed, notes that connected to a question you were exploring at the time but which haven't been revisited since. A random sample from that collection surfaces them.

The screenshots below show what this looks like in practice.

![[serendipity-search-query.png|serendipity_search on "alternative approaches to education": direct matches alongside lateral picks from unrelated parts of the vault, including the Illich note]]

![[serendipity-illich-anchor.png|A follow-up query anchored on "Illich anarchy", with a vault search returning the four existing Illich notes]]

![[serendipity-synthesis.png|Claude Code synthesising the anarchist thread running through the four notes, and proposing threads worth pulling]]

The query was "alternative approaches to education." The direct matches were expected: notes on alternative assessment approaches in the context of AI, competency-based health professions education, AI-supported learning. All relevant, none surprising.

The lateral pick that mattered was a note titled *Illich's four ways to better facilitate learning* — a note on Ivan Illich's *Deschooling Society* that had been sitting in the vault without recent attention. Illich proposed replacing schools with four decentralised channels for learning: reference services for educational objects, skill exchanges, peer matching, and educators-at-large chosen by learners rather than assigned by institutions. The anarchist logic is structural: remove the institution as gatekeeper and let exchange happen laterally. This is directly relevant to alternative approaches to education — but the connection wasn't obvious in advance, and a standard keyword search on "alternative approaches" would not have surfaced it.

A second query followed, using the Illich note as an anchor: "Illich anarchy." No direct matches — the vault doesn't have notes explicitly linking those terms. But a vault search for "Illich" returned four notes: the four-channel system, a note on Illich's proposal to replace schools with decentralised learning exchanges, a broader note on Illich's three major polemics (*Deschooling Society*, *Tools for Conviviality*, *Medical Nemesis*), and a 1970 quote about the need for new learning networks available to the public.

Claude Code synthesised the anarchist thread running through all four: Illich's critique is not about chaos but about the abolition of hierarchical authority that people haven't consented to and that actively harms their autonomy. His target is institutional monopoly over learning. Schools don't just teach — they package instruction, certify compliance, and manufacture dependence. Students come to distrust learning that hasn't been institutionally validated.

![[illich-note-properties.png|The new note "Illich, anarchy, and education" in Obsidian — the properties panel showing its tags and a status of seedling, with the synthesised content below]]

The session produced a new note that hadn't existed before: "Illich, anarchy, and education," structured, tagged with illich, anarchy, deschooling, education, institutions, health-professions-education, and filed with a status of seedling. Connections that had been latent across four existing notes were made explicit and saved. The vault grew in a direction it hadn't grown before.

Two things are worth naming about this. The first is confidence. Because the synthesis is grounded entirely in personal notes that are identified and referenced, there is no hallucination problem of the kind that arises when asking an AI to reason about something it may or may not know. The model is drawing out connections that were latent in notes I wrote — not generating plausible-sounding connections from training data. The output can be checked against its sources because its sources are visible.

The second is that this is generative in a meaningful sense. The new note is not a summary of existing notes. It is a synthesis — an argument assembled from materials that hadn't previously been assembled in this way. The tools made it possible; the thinking that produced the underlying notes made it valuable.

## What vault tools enable that Zotero tools don't

The Zotero tools surface literature — papers saved, annotated, and tagged over years. The vault tools surface thinking — the arguments, observations, and connections accumulated in response to that literature. Neither alone is sufficient.

A query that spans both becomes possible once the vault is connected: "What have I written about evaluative judgement, and what papers in my Zotero library does that connect to?" The `topic_primer` tool handles exactly this — a single call that returns relevant concept notes alongside Zotero abstracts, without requiring two separate searches or any manual bridging between results.

More broadly: the vault holds the intellectual history that the Zotero library doesn't. It contains the arguments that were developed, the ideas that didn't work out, the connections noticed in passing and set aside. A personal knowledge system that can access both is qualitatively different from one that can access either.

## Wikipedia: a lightweight complement

The third module added to the server is a single tool: `search_wikipedia`, which finds the best-matching article for a query and returns its introduction as plain text.

It earns its place not by depth but by speed and coverage. When a concept comes up in conversation that personal sources don't cover — a term from a field I've only read lightly, a background fact needed to orient a discussion — Wikipedia provides a quick, reliable starting point without requiring a separate browser search. It's a complement to personal sources, not a replacement for them, and it's explicit about that role.

The Illich session is a good illustration, precisely because it shows the limits. Having built the note, I asked the system to check Illich against Wikipedia. The honest result was that Wikipedia added almost nothing: it covered *Deschooling Society* and *Medical Nemesis* briefly, didn't mention *Tools for Conviviality* at all, and confirmed what the vault notes already said. This is worth dwelling on, because it's the opposite of the usual demonstration. The point here isn't that an external source rescued a thin set of notes — the notes were already rich, and Wikipedia barely added to them.

![[wikipedia-illich-complement.png|search_wikipedia looking up Illich — confirming what the vault already held, then surfacing one genuinely new angle: the theological reading of his anarchism]]

What it did surface was one detail the notes had underplayed: Wikipedia describes Illich as an "Austrian Catholic priest, theologian, philosopher, and social critic", and notes that he called himself "an errant pilgrim". That theological root gives the counterproductivity argument a different flavour — institutions aren't merely inefficient, they become a kind of *idolatry*, mistaking the institution for the thing it was meant to serve. From there the system pushed a new angle I hadn't reached on my own: the journal-and-peer-review system as a form of scholarly idolatry. That idea isn't finished, and it isn't in any of my notes. It's a prompt to pick up later.

That's the real value, and it's worth being clear about what kind of value it is. The system is not an archive of perfect notes that an external source occasionally patches. It's a set of tools for thought — and the test of a tool for thought is whether it pushes you toward ideas you wouldn't otherwise have picked up. A single sentence in a Wikipedia summary did that here, not because the summary was rich, but because the system put it next to everything else I'd already thought, and let the friction between them produce something new.

Adding the tool followed the same pattern as the vault module: one new file, one line in `server.py`. At this point the pattern is familiar enough that adding a new source is genuinely low-friction work.

## The server now

The `commonplace` server currently exposes sixteen tools across three modules: eleven for Zotero, four for the vault, and one for Wikipedia. Nine of the Zotero tools are read-only; two are writes, for adding a note to an item and adding a new item by DOI. A full reference is available [here](link).

The distinction between tools that require Zotero desktop to be running and those that don't is worth keeping in mind. The local Zotero API — used by the read tools for its speed — is only available when the desktop application is open. The web API, used for writes and for fetching recent items, works without it. The vault tools and Wikipedia tool work entirely independently of Zotero.

What's possible now that wasn't possible with Zotero alone: queries that span personal thinking and published literature; a serendipity layer that surfaces forgotten connections; synthesis grounded in personal sources with enough structure to be trusted; new notes produced from conversations with existing ones.

What turns this infrastructure into something used day to day is the layer above it: the Claude commands that invoke these tools, what they do, and the difference between having a set of tools and having a working environment. That's a subject of its own.
