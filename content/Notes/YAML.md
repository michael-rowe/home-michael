---
title: YAML
description: YAML is a human-readable format for storing structured data as plain text. In knowledge management and publishing workflows, it appears most commonly as the frontmatter block at the top of markdown files, where it holds metadata — title, author, date, tags — that tools can read without parsing the document itself.
aliases:
  - YAML Ain't Markup Language
  - frontmatter
type: note
author: "[[Michael Rowe]]"
created: 2026-04-06
updated: 2026-04-06
status: draft
draft: false
tags:
  - documentation
  - information-management
  - note-taking
category:
  - Technology
related:
  - "[[git]]"
  - "[[plain text]]"
keyphrase: "what is YAML frontmatter"
slug: notes/yaml
linkedin:
---

> [!info] YAML is how metadata travels with a document as plain text.
> Rather than storing a file's title, author, and tags in a separate database, YAML embeds that information at the top of the file itself. Any tool that reads the file can extract the metadata — and because it's plain text, it remains readable and editable without specialist software.

## YAML

**One-sentence definition:** YAML (YAML Ain't Markup Language) is a plain-text format for representing structured data as human-readable key-value pairs, lists, and nested fields.

YAML uses a minimal syntax. A key and its value are separated by a colon:

```yaml
title: My essay
author: Michael Rowe
date: 2026-04-06
```

Lists use a hyphen for each item:

```yaml
tags:
  - publishing
  - open-scholarship
```

Indentation indicates nesting. There are no brackets or tags — structure comes from whitespace, which is why consistent indentation matters: a misplaced space can break a YAML block.

### YAML as frontmatter

In markdown-based workflows — Obsidian, Quartz, Jekyll, and similar tools — YAML appears as a frontmatter block: a section delimited by `---` at the very top of the file, before the document content begins:

```yaml
---
title: My essay
date: 2026-04-06
tags:
  - publishing
draft: false
---
```

The frontmatter is not rendered as content. Tools read it to populate indexes, generate site pages, filter notes by tag, and drive automated workflows — without touching the document body. This separation of metadata from content is what makes plain-text publishing pipelines possible.

### Common pitfalls

- **Indentation errors**: YAML uses spaces, not tabs. Mixed indentation causes parsing failures.
- **Unquoted special characters**: colons, hashes, and square brackets have meaning in YAML. Values containing them should be quoted: `title: "Context sovereignty: A human-centred approach"`.
- **Scalar vs list confusion**: a single-item list (`- value`) and a scalar (`value`) are different types. Tools that expect one will fail silently or error on the other.

---

## Notes

YAML is one of several data serialisation formats alongside JSON (more compact, less readable) and TOML (similar goals, different syntax). For frontmatter in documents intended to be read by humans as well as machines, YAML remains the dominant choice.
