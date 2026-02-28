---
title: Markdown
description: A lightweight markup language for creating formatted text using plain-text syntax, enabling portability and interoperability.
aliases:
  - MD
type: note
author: "[[Michael Rowe]]"
created: 2026-02-12
updated: 2026-02-12
status: draft
draft: false
tags:
  - writing
  - documentation
  - interoperability
category: Technology
related:
  - "[[Notes/plain text]]"
  - "[[Notes/pandoc]]"
  - "[[Notes/latex]]"
  - "[[Notes/documentation debt]]"
keyphrase: "writing in markdown for portability"
slug: notes/markdown
---

> [!info] Structure over styling
> Markdown represents a shift from "What You See Is What You Get" (WYSIWYG) to "What You See Is What You Mean." By using simple characters to define document structure rather than visual styling, it ensures that content remains portable across any device or publishing platform.

## Markdown

**One-sentence definition:** Markdown is a lightweight markup language that allows authors to format text using simple, plain-text syntax that can be easily converted into professional formats like HTML, PDF, or Word.

In traditional word processors, formatting is often "baked into" the file in complex, invisible ways. Markdown makes the structure of a document explicit and human-readable. For example, using a `#` for a heading or `*` for a list item means the "source code" of the document is as readable as the final output. This transparency is fundamental to reducing [[Notes/documentation debt|documentation debt]] because it ensures that materials can be easily maintained and updated without fighting with software-specific formatting quirks.

### What it enables for educators
- **Content portability:** Because Markdown is essentially [[Notes/plain text|plain text]], your teaching materials are not "locked" inside a specific application. You can move your notes between different editors, operating systems, and platforms without losing information.
- **Workflow efficiency:** Educators often need to provide the same content in multiple ways—a syllabus on the VLE, a PDF handout, and a set of slides. Markdown serves as a "single source of truth." Using tools like [[Notes/pandoc|Pandoc]], you can write once and generate all these formats automatically.
- **AI readiness:** Markdown is the preferred format for interacting with large language models. AI agents can easily parse and structure Markdown, making it the ideal format for building a modern, queryable curriculum infrastructure.

### From formatting to infrastructure
Markdown is more than a writing tool; it is a foundational layer for **interoperable** educational materials. When we write in Markdown, we are creating content that is "machine-readable" while remaining "human-understandable." This allows for the automation of quality assurance checks—such as verifying that all module files have the correct heading structure or that all learning outcomes are properly tagged—tasks that are significantly more difficult in proprietary formats.

---

## Sources

- Gruber, J. (2004). Markdown. https://daringfireball.net/projects/markdown/
- MacFarlane, J. (2006). Pandoc: A universal document converter. https://pandoc.org/
