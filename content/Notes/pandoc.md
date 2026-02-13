---
title: Pandoc
description: A powerful command-line tool that converts documents between dozens of different markup formats, enabling interoperability and workflow flexibility.
aliases:
  - Universal document converter
type: note
author: "[[Michael Rowe]]"
created: 2026-02-12
updated: 2026-02-12
status: draft
draft: false
tags:
  - tools
  - conversion
  - interoperability
category: Technology
related:
  - "[[Notes/markdown]]"
  - "[[Notes/latex]]"
  - "[[Notes/plain text]]"
keyphrase: "converting teaching materials between formats"
slug: notes/pandoc
---

> [!info] The universal translator for text
> Pandoc is the engine of a "single source of truth" workflow. It removes the friction of document conversion, allowing educators to write in simple formats like [[Notes/markdown|Markdown]] and output to professional formats like [[Notes/latex|LaTeX]], Word, or HTML without manually re-formatting.

## Pandoc

**One-sentence definition:** Pandoc is a "universal document converter" that parses a document in one format and renders it into another, maintaining the structural integrity of the content across dozens of different file types.

If you have ever tried to move a complex document from a PDF to a Word file and watched the tables and citations disappear, you have experienced the problem Pandoc solves. It doesn't just "copy and paste" text; it builds an internal model of the document's *meaning*—which parts are headings, lists, or citations—and then rebuilds that model in the target format. This makes it possible to convert between formats that are traditionally incompatible.

### Why it matters for educators
- **Workflow Flexibility:** You can write your teaching materials in the format that is most efficient for you (like Markdown) and use Pandoc to deliver them in the format your institution or students require (like a Word doc for a committee or an e-book for a student).
- **Automated Publishing:** Pandoc can be integrated into automated systems. For example, a university could have a system where a single Markdown file is automatically converted into a website, a PDF handbook, and a set of clinical "pocket guides" every time the source file is updated.
- **Reference Management:** Pandoc integrates with bibliographic tools like Zotero. It can take a document with simple citation keys and generate a perfectly formatted bibliography in any style (APA, Vancouver, Harvard) for any output format, ensuring academic rigour across all your digital materials.

### Enabling Interoperability
Pandoc is a critical tool for achieving **interoperability** in digital curricula. It ensures that our ideas are not "trapped" within the limitations of any single piece of software. By making it easy to move between [[Notes/plain text|plain text]] and proprietary formats, it allows educators to build a modern, flexible digital infrastructure that can adapt to new tools and technologies as they emerge.

---

## Sources

- MacFarlane, J. (2006). Pandoc: A universal document converter. https://pandoc.org/
- "Pandoc: The Swiss-Army Knife of Academic Writing." (The Programming Historian).
