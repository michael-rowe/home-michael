---
title: Pandoc
description: A command-line converter that reads a document's structure in one format and writes it out in another — markdown to Word, Word to HTML, anything to PDF — with citations intact.
aliases:
  - Universal document converter
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
  - "[[Notes/latex]]"
  - "[[Notes/plain text]]"
keyphrase: "converting teaching materials between formats"
linkedin:

---

> [!info] Pandoc is why you only have to write a document once
> Pandoc reads a document into an internal model of its structure — headings, lists, emphasis, citations — and writes that model back out in whichever format you ask for. Write in [[Notes/markdown|markdown]]; hand the committee a .docx, the students a PDF and the website its HTML, all from one file.

## Pandoc

**One-sentence definition:** Pandoc is a command-line tool, written by the philosopher John MacFarlane, that converts documents between dozens of markup formats by parsing them into a common structure and re-rendering.

Copying text from a PDF into Word and watching the headings, tables and references fall apart is the problem pandoc solves. It doesn't move characters around; it works out what each part of the document *is* and rebuilds it in the target format's own idiom. A second-level heading in markdown becomes a Heading 2 style in Word, a `\subsection` in LaTeX and an `<h2>` in HTML, and the reverse conversions work too.

What makes it more than a convenience:

- **Citations.** Pandoc reads a bibliography file (BibTeX, or exported straight from Zotero) and a citation style, and turns `[@vleuten2012]` in the source into a correctly formatted in-text citation and reference list in any of the thousands of CSL styles. Switching a paper from APA to Vancouver for a different journal is a one-word change.
- **Templates.** A .docx reference document or a LaTeX template controls the output's appearance, so a plain markdown file can come out looking like the institution's house style without any of that style living in the source.
- **Scriptability.** Because it's a command-line tool, it sits inside automation. A module handbook can be rebuilt as Word, PDF and web every time the source changes, without anyone opening a word processor.

### The essay PDFs on this site

The PDFs of the essays on this site are built with pandoc from the same markdown the web pages come from. Tenen and Wythoff (2014) walk through the basic workflow for an academic — markdown, a bibliography file, one command — and it hasn't changed much in a decade.

### Structure converts; layout does not

Pandoc converts structure, not layout. A complex Word document with floating text boxes and manual spacing will come through as its underlying content, which is usually what you want and occasionally isn't. Conversions *from* PDF are poor, because a PDF is a picture of a page rather than a structured document; treat the PDF as an output, never as a source.

---

## Sources

- MacFarlane, J. (2006–). Pandoc: a universal document converter. https://pandoc.org/
- Tenen, D., & Wythoff, G. (2014). Sustainable authorship in plain text using Pandoc and Markdown. *Programming Historian*. https://programminghistorian.org/en/lessons/sustainable-authorship-in-plain-text-using-pandoc-and-markdown
- Healy, K. (2014). Plain text, papers, pandoc. https://kieranhealy.org/blog/archives/2014/01/23/plain-text/
