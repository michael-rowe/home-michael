---
title: Pandoc
description: A command-line converter that reads a document's structure in one format and writes it out in another — markdown to Word, Word to HTML, anything to PDF — with citations intact.
meta-description: "Converting teaching materials between formats with pandoc: one markdown source becomes Word, PDF, and web pages, with citations formatted for you."
aliases:
  - Universal document converter
type: note
author: "[[Michael Rowe]]"
created: 2026-02-12
updated: 2026-09-28
draft: false
tags:
  - standards
  - academic-writing
category:
  - Technology
related:
  - "[[Notes/markdown]]"
  - "[[Notes/latex]]"
  - "[[Notes/plain text]]"
  - "[[Notes/Zotero]]"
  - "[[Notes/YAML]]"
keyphrase: "converting teaching materials between formats"
linkedin:
reviewed:
  - note_writer
  - writing_style
  - SEO_optimiser
  - copy_editor

---

> [!info] Pandoc is why you only have to write a document once
> Pandoc reads a document into an internal model of its structure — headings, lists, emphasis, citations — and writes that model back out in whichever format you ask for. Write in [[Notes/markdown|markdown]]; hand the committee a .docx, the students a PDF, and the website its HTML, all from one file.

## Pandoc

**One-sentence definition:** Pandoc is a command-line[^command-line] tool, written by the philosopher John MacFarlane, that converts documents between dozens of markup formats[^markup] by reading them into a common structure and writing that structure out again.

Copying text from a PDF into Word and watching the headings, tables, and references fall apart is the problem pandoc solves. Pandoc works out what each part of the document *is* — a heading, a list item, a citation — and rebuilds it in the target format's own idiom. A second-level heading in markdown becomes a Heading 2 style in Word, a `\subsection` in [[Notes/latex|LaTeX]], and an `<h2>` in HTML, and the reverse conversions work too.

What makes it more than a convenience:

- **Citations.** Pandoc reads a bibliography file (BibTeX, or exported straight from [[Notes/Zotero|Zotero]]) and a citation style, and turns `[@vleuten2012]` in the source into a correctly formatted in-text citation and reference list in any of the thousands of CSL styles.[^csl] Switching a paper from APA to Vancouver for a different journal is a one-word change.
- **Templates.** A .docx reference document or a LaTeX template controls the output's appearance, so a plain markdown file can come out looking like the institution's house style without any of that style living in the source.
- **Scriptability.** Because it's a command-line tool, it sits inside automation. A module handbook can be rebuilt as Word, PDF, and web pages every time the source changes, without anyone opening a word processor.

### Converting teaching materials between formats

Teaching materials are where this pays off, because the same content has to reach several audiences in the formats each one expects. A speech and language therapy placement handbook might go to practice educators as a Word document they can annotate, to students as a PDF, and onto the virtual learning environment as a web page. Kept as three files, the versions drift apart within a term; kept as one markdown source, a change to the assessment criteria reaches all three the next time the command runs.

The PDFs of the essays on this site are built the same way, with pandoc, from the markdown the web pages come from. Tenen and Wythoff (2014) walk through the basic workflow for an academic — markdown, a bibliography file, one command — and Healy (2014) describes a social scientist's version of it; neither has changed much in a decade.

### What pandoc leaves behind

Pandoc carries structure across and leaves layout behind. A complex Word document with floating text boxes and manual spacing comes through as its underlying content, which is usually what you want and occasionally isn't. Conversions *from* PDF are poor, because a PDF records where marks sit on a page and says little about what they are, so it's best treated as an output and never as a source.

---

## Sources

- Healy, K. (2014, January 23). *Plain text, papers, pandoc*. Kieran Healy. https://kieranhealy.org/blog/archives/2014/01/23/plain-text/
- MacFarlane, J. (2006–). *Pandoc: A universal document converter* [Computer software]. https://pandoc.org/
- Tenen, D., & Wythoff, G. (2014). Sustainable authorship in plain text using Pandoc and Markdown. *Programming Historian*. https://doi.org/10.46430/phen0041

[^command-line]: **Command line** — a way of using a computer by typing instructions as text in a terminal window, instead of clicking through menus. It sounds old-fashioned, but it's what lets a task like "convert every handbook in this folder" be written down once and repeated. [Wikipedia](https://en.wikipedia.org/wiki/Command-line_interface)
[^markup]: **Markup format** — a way of adding marks to text that say what each part is (a heading, a list item, a link). HTML, markdown, and LaTeX are all markup formats; a Word file carries the same kind of information, hidden behind the formatting. [Wikipedia](https://en.wikipedia.org/wiki/Markup_language)
[^csl]: **CSL (Citation Style Language)** — a shared, open format for describing citation styles, so that APA, Vancouver, Harvard, and the house style of a particular journal are each a small file any compatible tool can use. Zotero uses the same styles. [Wikipedia](https://en.wikipedia.org/wiki/Citation_Style_Language)
