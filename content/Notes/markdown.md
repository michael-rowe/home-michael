---
title: Markdown
description: A way of writing formatted documents in plain text — a hash for a heading, asterisks for emphasis — so the source stays readable and converts to anything.
aliases:
  - MD
type: note
author: "[[Michael Rowe]]"
created: 2026-02-12
updated: 2026-09-17
draft: false
tags:
  - academic-writing
  - documentation
  - standards
category: Technology
related:
  - "[[Notes/plain-text]]"
  - "[[Notes/pandoc]]"
  - "[[Notes/latex]]"
  - "[[Notes/documentation-debt]]"
keyphrase: "writing in markdown for portability"
linkedin:

---

> [!info] Markdown is formatting you can see
> In a word processor the formatting lives in the file, invisible. In markdown it lives in the text: `#` makes a heading, `*` makes a list, `[text](url)` makes a link. The document stays [[Notes/plain text|plain text]], which means it converts cleanly to HTML, Word or PDF, and every tool that reads text can read it.

## Markdown

**One-sentence definition:** Markdown is a lightweight markup language in which a small set of plain-text conventions describe the structure of a document, so that it can be read as written and converted into other formats.

John Gruber designed it in 2004 with a simple test: the source should be publishable as it is, without looking like it's been marked up. That constraint is why markdown looks like the way people already write email — a line of dashes for a rule, a blank line between paragraphs, an asterisk for a bullet. There's little to learn and little to get wrong.

For academic work the significance isn't the syntax but what the syntax makes possible:

- **One source, many outputs.** The same file becomes a web page, a Word document for a committee, a PDF handout, or a slide deck, depending on what [[Notes/pandoc|pandoc]] is asked for. You stop maintaining three versions of the same module guide.
- **The structure is explicit.** A heading is a heading because the file says so, not because it happens to be bold and 14pt. Tools can check that every module file has the same sections, list every learning outcome across a programme, or find every document that mentions a policy — the kind of check that is close to impossible across a folder of Word files.
- **It's what language models read best.** Markdown is the native format of most AI tooling: prompts, documentation and outputs are all written in it. Material kept in markdown is directly available to an AI agent without conversion.

### What it looks like in practice

This site is written in markdown, in Obsidian, and built to HTML by Quartz. The essays are exported to PDF from the same source. Meeting notes, project files and the planning system behind the site are all markdown too, which is what lets an agent read across them.

### Where it's weak

Markdown has no standard for tables beyond the basic grid, no native footnotes in the original spec, and no way to express layout. Extensions (GitHub-flavoured markdown, pandoc's dialect, Obsidian's wikilinks) fill the gaps and don't quite agree with each other, so a document written for one tool sometimes needs adjusting for another. For anything where visual layout is the point, [[Notes/latex|LaTeX]] or a design tool is the better choice; for prose with structure, markdown is hard to beat.

---

## Sources

- Gruber, J. (2004). Markdown. *Daring Fireball*. https://daringfireball.net/projects/markdown/
- Tenen, D., & Wythoff, G. (2014). Sustainable authorship in plain text using Pandoc and Markdown. *Programming Historian*. https://programminghistorian.org/en/lessons/sustainable-authorship-in-plain-text-using-pandoc-and-markdown
