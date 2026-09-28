---
title: Plain text
description: Files made only of readable characters, with no formatting locked inside them. The format every tool can open, and the one that will still open in thirty years.
meta-description: "Plain text vs Word for teaching materials: why files of readable characters outlast software, work with every tool, and are open to AI."
aliases:
  - .txt
type: note
author: "[[Michael Rowe]]"
created: 2026-02-12
updated: 2026-09-28
draft: false
tags:
  - standards
  - information-management
category:
  - Technology
related:
  - "[[Notes/markdown]]"
  - "[[Notes/pandoc]]"
  - "[[Notes/documentation debt]]"
  - "[[Notes/contextual interoperability]]"
  - "[[Notes/distributed version control]]"
keyphrase: "plain text vs Word"
linkedin:
reviewed:
  - note_writer
  - writing_style
  - SEO_optimiser
  - copy_editor

---

> [!info] Plain text is the format nothing can lock you out of
> A plain-text file contains only characters — no hidden styling, no proprietary structure, no dependence on the program that wrote it. Anything can read it, search it, version it, or hand it on to another program, which is why it sits underneath markdown, LaTeX, code, and most of the tooling that makes AI-assisted work possible.

## Plain text

**One-sentence definition:** Plain text is data made up only of readable characters (usually encoded as UTF-8[^utf8]), with no formatting or metadata hidden in the file beyond what you can see.

The difference between plain text and Word is easy to miss, because a Word document looks like text too. Underneath, it's a compressed bundle of XML, styles, revision history, and embedded objects, readable only by software that understands that bundle. A plain-text file is what it appears to be. Open it in any editor on any operating system from any decade and the same characters come back.

That property is what makes plain text worth choosing deliberately. Three things follow from it:

- **Longevity.** A text file from 1990 opens today; a WordPerfect file from the same year mostly doesn't. The programme documents from a revalidation ten years ago, saved in whatever format and template the university used then, are often the ones nobody can open cleanly when the next revalidation asks what changed. For curriculum documents, teaching materials, and research notes that need to outlast a software licence, this matters more than it sounds.
- **Composability.** Every command-line[^command-line] tool, every scripting language, and every [[Notes/distributed version control|version-control system]] assumes text. Once your material is text, you can search across thousands of files in a second, track every change to a document with [[Notes/git|git]], and convert between formats with [[Notes/pandoc|pandoc]]. None of those tools has a Word plug-in worth using.
- **Legibility to machines.** Language models read text. They can be made to read a PDF or a .docx, but with loss and effort. A curriculum, a set of notes, or a policy folder held as plain text is directly available to an AI agent; the same material in proprietary formats is, for practical purposes, invisible to it. See [[Notes/contextual interoperability|contextual interoperability]].

Hunt and Thomas (1999) made the case to programmers a quarter of a century ago, and nothing about AI has weakened it.

### Moving from Word to plain text

For most academics the change is small: writing in [[Notes/markdown|markdown]] where they used to open Word, keeping notes in an editor like [[Notes/Obsidian|Obsidian]], and treating the .docx as an export for a committee, with the plain-text file as the master copy. Tenen and Wythoff's *Sustainable authorship in plain text* (2014) is still the best short case for the workflow, and Healy's *Plain text, papers, pandoc* (2014) shows what it looks like across a working social scientist's writing.

### What plain text doesn't solve

A folder of five thousand text files is as hard to navigate as a folder of five thousand Word documents unless someone designs the structure: names, folders, [[Notes/YAML|frontmatter]], and links. Some things also need richer formats — a slide deck for a lecture theatre, a form with signatures, a typeset PDF. Plain text doesn't replace those; it's the source they're generated from.

---

## Sources

- Healy, K. (2014, January 23). *Plain text, papers, pandoc*. Kieran Healy. https://kieranhealy.org/blog/archives/2014/01/23/plain-text/
- Hunt, A., & Thomas, D. (1999). *The pragmatic programmer: From journeyman to master*. Addison-Wesley. https://openlibrary.org/works/OL5748544W
- Tenen, D., & Wythoff, G. (2014). Sustainable authorship in plain text using Pandoc and Markdown. *Programming Historian*. https://doi.org/10.46430/phen0041

[^utf8]: **UTF-8** — the standard way of storing text as bytes, covering every alphabet and symbol from English to Arabic to emoji. Almost every web page and text file now uses it, which is why a plain-text file written on one computer reads the same on another. [Wikipedia](https://en.wikipedia.org/wiki/UTF-8)
[^command-line]: **Command line** — a way of using a computer by typing instructions as text in a terminal window, instead of clicking through menus. It's what lets a task like "find every module descriptor that mentions prescribing" be written once and run across a whole folder. [Wikipedia](https://en.wikipedia.org/wiki/Command-line_interface)
