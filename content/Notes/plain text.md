---
title: Plain text
description: Files made only of readable characters, with no formatting locked inside them. The format every tool can open, and the one that will still open in thirty years.
aliases:
  - .txt
type: note
author: "[[Michael Rowe]]"
created: 2026-02-12
updated: 2026-09-17
draft: false
tags:
  - standards
category: Technology
related:
  - "[[Notes/markdown]]"
  - "[[Notes/documentation-debt]]"
  - "[[Notes/contextual-interoperability]]"
keyphrase: "future-proofing educational materials with plain text"
linkedin:

---

> [!info] Plain text is the format nothing can lock you out of
> A plain-text file contains only characters — no hidden styling, no proprietary structure, no dependence on the program that wrote it. Anything can read it, search it, version it, or pipe it into something else, which is why it sits underneath markdown, LaTeX, code, and most of the tooling that makes AI-assisted work possible.

## Plain text

**One-sentence definition:** Plain text is data made up only of readable characters (usually UTF-8), with no formatting or metadata hidden in the file beyond what you can see.

A Word document looks like text but isn't. Underneath it is a compressed bundle of XML, styles, revision history and embedded objects, readable only by software that understands that bundle. A plain-text file is what it appears to be. Open it in any editor on any operating system from any decade and the same characters come back.

That property is what makes plain text worth choosing deliberately rather than by accident. Three things follow from it:

- **Longevity.** A text file from 1990 opens today; a WordPerfect file from the same year mostly doesn't. For teaching materials, curriculum documents and research notes that need to outlast a software licence, this matters more than it sounds.
- **Composability.** Every command-line tool, every scripting language and every version-control system assumes text. Once your material is text, you can search across thousands of files in a second, track every change to a document with [[Notes/git|git]], and convert between formats with [[Notes/pandoc|pandoc]]. None of those tools has a Word plug-in worth using.
- **Legibility to machines.** Language models read text. They can be made to read a PDF or a .docx, but with loss and effort. A curriculum, a set of notes or a policy folder held as plain text is directly available to an AI agent; the same material in proprietary formats is, for practical purposes, invisible to it. See [[Notes/contextual interoperability|contextual interoperability]].

### What it looks like in practice

For most academics the shift is small: writing in [[Notes/markdown|markdown]] rather than Word, keeping notes in an editor like Obsidian, and treating the .docx as an export for a committee rather than the master copy. Tenen and Wythoff's *Sustainable authorship in plain text* (2014) is still the best short case for the workflow, and Healy's *Plain text, papers, pandoc* (2014) shows what it looks like across a working social scientist's writing.

### What it doesn't solve

Plain text is a format, not an organisation. A folder of five thousand text files is as hard to navigate as a folder of five thousand Word documents unless the structure — names, folders, frontmatter, links — is designed. And some things genuinely need richer formats: a slide deck for a lecture theatre, a form with signatures, a typeset PDF. The point isn't to refuse those; it's to generate them from a plain-text source rather than starting there.

---

## Sources

- Tenen, D., & Wythoff, G. (2014). Sustainable authorship in plain text using Pandoc and Markdown. *Programming Historian*. https://programminghistorian.org/en/lessons/sustainable-authorship-in-plain-text-using-pandoc-and-markdown
- Healy, K. (2014). Plain text, papers, pandoc. https://kieranhealy.org/blog/archives/2014/01/23/plain-text/
- Hunt, A., & Thomas, D. (1999). *The pragmatic programmer* (chapter on the power of plain text). Addison-Wesley.
