---
title: Markdown
description: A way of writing formatted documents in plain text — a hash for a heading, asterisks for emphasis — so the source stays readable and converts to anything.
aliases:
  - MD
type: note
author: "[[Michael Rowe]]"
created: 2026-02-12
updated: 2026-09-27
draft: false
tags:
  - academic-writing
  - documentation
  - standards
category:
  - Technology
related:
  - "[[Notes/plain text]]"
  - "[[Notes/pandoc]]"
  - "[[Notes/latex]]"
  - "[[Notes/documentation debt]]"
  - "[[Notes/YAML]]"
  - "[[Notes/contextual interoperability]]"
meta-description: "Markdown for academic writing: one plain-text source for Word, PDF, and the web, readable by AI tools without conversion."
keyphrase: "markdown for academic writing"
linkedin:
reviewed:
  - note_writer
  - writing_style
  - SEO_optimiser
  - copy_editor
---

> [!info] Markdown is formatting you can see
> In a word processor the formatting lives in the file, invisible. In markdown it lives in the text: `#` makes a heading, `*` makes a list, `[text](url)` makes a link. The document stays [[Notes/plain text|plain text]], which means it converts cleanly to HTML, Word, or PDF, and every tool that reads text can read it.

## Markdown

**One-sentence definition:** Markdown is a lightweight markup language[^markup] in which a small set of plain-text conventions describe the structure of a document, so that it can be read as written and converted into other formats.

John Gruber (2004) designed it with a simple test: the source should be publishable as it is, without looking like it's been marked up. That constraint is why markdown looks like the way people already write email — a line of dashes for a rule, a blank line between paragraphs, an asterisk for a bullet. There's little to learn and little to get wrong.

For academic writing and teaching materials, what matters is what the syntax makes possible:

- **One source, many outputs.** The same file becomes a web page, a Word document for a committee, a PDF handout, or a slide deck, depending on what [[Notes/pandoc|pandoc]] is asked for.
- **The structure is explicit.** In a Word file a heading is often just a line that happens to be bold and 14pt; in markdown the file says it's a heading, and tools can rely on that. They can check that every module file has the same sections, list every learning outcome across a programme, or find every document that mentions a policy — the kind of check that is close to impossible across a folder of Word files.
- **It's the format AI tooling already uses.** Language models write their answers in markdown, and prompts, instructions, and documentation for AI tools are mostly written in it too. Material kept in markdown reaches an AI agent without conversion; see [[Notes/contextual interoperability|contextual interoperability]].

### One handbook, three audiences

A programme team meets this at the point where the same material has to exist in three places at once. The module handbook goes to students as a PDF, to the virtual learning environment as web pages, and to a validation panel as a Word document with the university's template applied. Written in markdown, it is one file that pandoc renders three ways, so a change to an assessment deadline is made once and cannot end up saying something different in each. The syntax takes an afternoon to learn, and the harder part is getting everyone to agree that the markdown file is the master copy and the Word document is only ever an export of it.

This site is written in markdown, in [[Notes/Obsidian|Obsidian]], and built to HTML by Quartz.[^quartz] The essays are exported to PDF from the same source, following the workflow Tenen and Wythoff (2014) set out for academic authors. Meeting notes, project files, and the planning system behind the site are all markdown too, which is what lets an agent read across them.

### Tables, layout, and disagreeing dialects

Gruber's original markdown has no tables, no footnotes, and no way to express layout. Extensions ([[Notes/GitHub|GitHub]]-flavoured markdown, pandoc's dialect, Obsidian's wikilinks) fill the gaps and don't quite agree with each other. CommonMark (MacFarlane, 2024), first published in 2014, pinned down the core syntax so that a heading or a list means the same thing everywhere, but it deliberately leaves the extensions out, so a document with tables or footnotes written for one tool sometimes needs adjusting for another. For anything where visual layout is the point, [[Notes/latex|LaTeX]] or a design tool is the better choice; for prose with structure, markdown is hard to beat.

---

## Sources

- Gruber, J. (2004). Markdown. *Daring Fireball*. https://daringfireball.net/projects/markdown/
- MacFarlane, J. (2024). *CommonMark spec* (Version 0.31.2). CommonMark. https://spec.commonmark.org/0.31.2/
- Tenen, D., & Wythoff, G. (2014). Sustainable authorship in plain text using Pandoc and Markdown. *Programming Historian*. https://programminghistorian.org/en/lessons/sustainable-authorship-in-plain-text-using-pandoc-and-markdown

[^markup]: **Markup language** — a set of marks added to text to say what each part is (a heading, a list item, a link) rather than how it should look. HTML, the language of web pages, is the best-known example; markdown is a deliberately minimal one. [Wikipedia](https://en.wikipedia.org/wiki/Markup_language)
[^quartz]: **Quartz** — an open-source static site generator, a program that turns a folder of markdown notes into a website. [Quartz documentation](https://quartz.jzhao.xyz/)
