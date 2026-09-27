---
title: Zotero
description: Zotero is a free, open source reference manager that stores the sources you collect with their citation details, PDFs, and notes. It also offers programming interfaces that let an AI agent search the library, read from it, and add to it, which turns a reference library into something an agent can check a draft against.
meta-description: "Zotero and AI: how an agent can use Zotero's APIs to add sources, check the citations in a draft, and read the papers behind them."
aliases:
type: note
author: "[[Michael Rowe]]"
created: 2026-09-27
updated: 2026-09-27
draft: false
tags:
  - citation
  - information-management
  - agent
  - model-context-protocol
category:
  - Technology
  - Information management
related:
  - "[[Notes/mcp server]]"
  - "[[Notes/hallucination]]"
  - "[[Notes/context engineering]]"
  - "[[Posts/2026-02-15-query-zotero-with-ai]]"
  - "[[Posts/2026-03-21-review-reading-notes-with-ai]]"
keyphrase: "Zotero and AI"
linkedin:
reviewed:
  - note_writer
  - writing_style
  - SEO_optimiser
  - copy_editor
---

> [!info] A Zotero library gives an AI agent something to check citations against.
> Zotero stores the articles, books, and PDFs you've collected, with their citation details and your notes. Its programming interfaces let an agent search that library, read the sources, and add new ones. Connected that way, the agent can check whether a draft's references exist and whether they say what the draft claims, working from sources you chose instead of from its training.

## Zotero

**One-sentence definition:** Zotero is a free, [[Notes/open source software|open source]] reference manager that stores the sources you collect, with their citation details, attached PDFs, and your notes on them.

Most people meet Zotero as a way to build a reference list. A browser extension saves an article's details from the journal page, a word processor plugin inserts citations as you write, and the reference list is formatted in APA, Vancouver, or any of thousands of other styles. Group libraries let a team share one collection, which suits a programme team maintaining module reading lists or a supervisor and students working on related projects.

What matters for AI is that Zotero can be reached by programs as well as people, through an API.[^api] There are two. The web API reads and writes the copy of your library held on zotero.org, using a key you create in your account settings. The local API is served by the Zotero desktop application on your own computer once you've switched it on in the settings. It reads without a key, and since Zotero 10 it accepts changes too, once you've approved the program asking for them. Behind both sits the database file itself, which an agent can also query directly; the [[Posts/2026-02-15-query-zotero-with-ai|post on querying the Zotero database]] tried that, and found it works but is the less safe route.

---

### What an agent can do with a Zotero library

With access to Zotero, an agent like [[Notes/Claude Code|Claude Code]] can do real editorial work on a draft. It can take a DOI[^doi] and add the item to the library with its metadata filled in from Crossref, the agency that registers most journal DOIs. It can read a draft, find each citation, and check that the item exists in the library and that the author and year match. Where the PDF is attached, it can read the source and say whether the paper supports the sentence citing it. It can write a summary back to the item as a note, so the context is there the next time anyone opens it; the [[Posts/2026-03-21-review-reading-notes-with-ai|weekly reading review]] does that for everything I've added in the past seven days.

The tidiest way to give an agent this access is an [[Notes/mcp server|MCP server]], a small program that offers the agent a fixed list of things it can do with the library. Mine reads through the local API, offering searches, fetching an item with its notes, and extracting the text of a PDF, and has two tools that write: one adds an item by DOI and one attaches a note. The agent can't delete anything, because no tool for deleting exists.

A dietetics lecturer finishing a literature review for a journal shows what this is for. Asked to check the draft against the shared group library, the agent reports that one in-text citation has no matching item, that another gives 2019 where the library has 2021, and that a sentence attributing a finding about malnutrition screening to a particular trial describes a different outcome from the one the paper measured. The first two are the kind of error a reviewer notices and a reader forgives. The third is the kind that survives peer review. It's also the error a language model makes when it writes from memory, because a [[Notes/hallucination|hallucinated]] citation reads exactly like a real one.

Two limits carry over from the database experiment. The agent weighs whatever is in the library, so a poorly tagged conference abstract counts as much as a core paper, and the quality of the check depends on the quality of the collection. And every item the agent reads through a cloud-based model is sent to that model's provider, so a library holding unpublished or confidential material needs thought before it's connected.

---

## Sources

- Zotero. (n.d.). *Zotero local API*. Zotero Documentation. https://www.zotero.org/support/dev/web_api/v3/local_api
- Zotero. (n.d.). *Zotero Web API documentation*. Zotero Documentation. https://www.zotero.org/support/dev/web_api/v3/basics
- Zotero. (n.d.). *Zotero groups*. Zotero Documentation. https://www.zotero.org/support/groups

---

## Notes

The [[Notes/mcp server|MCP server]] note explains how servers work in general; this note covers what one does with a reference library in particular.

[^api]: **API (application programming interface)**: a set of rules that lets one program ask another for information or ask it to do something, without a person clicking through the interface. [Wikipedia](https://en.wikipedia.org/wiki/API)
[^doi]: **DOI (digital object identifier)**: a permanent identifier given to a published article, report, or dataset, which keeps pointing to it even when the publisher's web address changes. It's the string beginning `10.` at the end of most journal references. [Wikipedia](https://en.wikipedia.org/wiki/Digital_object_identifier)
