---
title: LaTeX
description: A typesetting system in which you write the structure of a document in plain text and the system lays it out — the standard for theses, mathematics and anything with hundreds of cross-references.
aliases:
  - TeX
type: note
author: "[[Michael Rowe]]"
created: 2026-02-12
updated: 2026-09-17
draft: false
tags:
  - academic-writing
category: Technology
related:
  - "[[Notes/markdown]]"
  - "[[Notes/pandoc]]"
keyphrase: "professional document design for educators"
linkedin:

---

> [!info] LaTeX separates what a document says from how it looks
> In LaTeX you write `\section{Methods}` and `\cite{vleuten2012}` in a [[Notes/plain text|plain-text]] file, and a compiler turns that into a typeset PDF with the numbering, references and layout handled for you. It's demanding to learn and unmatched for long, heavily cross-referenced documents.

## LaTeX

**One-sentence definition:** LaTeX is a document preparation system, built on Donald Knuth's TeX, in which the author marks up the logical structure of a document in plain text and a compiler produces the typeset output.

Leslie Lamport built LaTeX in the 1980s as a set of higher-level commands over TeX, so that a writer could say "this is a section", "this is a figure", "cite this" and leave the typography to the system. Four decades on it's still the standard for mathematics, physics and computer science, and for doctoral theses in many other fields, because nothing else handles a 300-page document with a thousand references and a hundred figures without complaint.

What it's good at:

- **Cross-referencing that never breaks.** Move a chapter and every figure number, equation number, citation and page reference updates on the next compile. Word can do some of this; it does it reluctantly.
- **Mathematics.** Equations in LaTeX are written as text (`\frac{a}{b}`) and set beautifully. Anything with statistics beyond a t-test is easier here.
- **Consistency at scale.** Because appearance is defined once, in a class or template, every heading, caption and table across a thesis looks the same without the author policing it.

### The output without the syntax

Most people in health professions education will never write LaTeX directly, and don't need to. The useful thing to know is that [[Notes/pandoc|pandoc]] can produce LaTeX — and therefore a typeset PDF — from [[Notes/markdown|markdown]], so a document written in the simpler format inherits LaTeX's output quality without its syntax. The essay PDFs on this site are made that way. Learning LaTeX properly is worth it if you're writing a thesis with heavy mathematics, or supervising someone who is.

### The learning curve, and what Overleaf removes

The learning curve is real, error messages are famously unhelpful, and collaborating with colleagues who use Word means converting at every exchange. Overleaf, a browser-based editor, removes most of the installation pain and adds track-changes-style collaboration, which is how many supervisors first meet it.

---

## Sources

- Lamport, L. (1994). *LaTeX: A document preparation system* (2nd ed.). Addison-Wesley.
- Knuth, D. E. (1984). *The TeXbook*. Addison-Wesley.
- Tenen, D., & Wythoff, G. (2014). Sustainable authorship in plain text using Pandoc and Markdown. *Programming Historian*. https://programminghistorian.org/en/lessons/sustainable-authorship-in-plain-text-using-pandoc-and-markdown
