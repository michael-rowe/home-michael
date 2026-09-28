---
title: YAML
meta-description: "What is YAML frontmatter? The plain-text block at the top of a markdown file that holds title, date, and tags, and how programmes can use it."
description: YAML is a human-readable format for storing structured data as plain text. In knowledge management and publishing workflows, it appears most commonly as the frontmatter block at the top of markdown files, where it holds metadata — title, author, date, tags — that tools can read without parsing the document itself.
aliases:
  - YAML Ain't Markup Language
  - frontmatter
type: note
author: "[[Michael Rowe]]"
created: 2026-04-06
updated: 2026-09-28
draft: false
tags:
  - documentation
  - information-management
  - note-taking
category:
  - Technology
related:
  - "[[Notes/git]]"
  - "[[Notes/plain text]]"
  - "[[Notes/markdown]]"
  - "[[Notes/Obsidian]]"
  - "[[Notes/pandoc]]"
keyphrase: "what is YAML frontmatter"
linkedin:
reviewed:
  - note_writer
  - writing_style
  - SEO_optimiser
  - copy_editor
---

> [!info] YAML is how metadata travels with a document as plain text
> YAML keeps a file's title, author, and tags at the top of the file itself, where a separate database would otherwise hold them. Any tool that reads the file can extract the metadata — and because it's plain text, it remains readable and editable without specialist software.

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

Indentation indicates nesting. There are no brackets or closing tags; the structure comes from whitespace, which is why consistent indentation matters, and a misplaced space can break a YAML block.

### YAML as frontmatter

In [[Notes/markdown|markdown]]-based workflows — [[Notes/Obsidian|Obsidian]], Quartz,[^ssg] Jekyll, [[Notes/pandoc|pandoc]], and similar tools — YAML appears as a frontmatter block: a section delimited by `---` at the very top of the file, before the document content begins:

```yaml
---
title: My essay
date: 2026-04-06
tags:
  - publishing
draft: false
---
```

The frontmatter isn't rendered as content. Tools read it to populate indexes, generate site pages, filter notes by tag, and drive automated workflows — without touching the document body. This separation of metadata from content is what makes plain-text publishing pipelines possible.

The same block does fairly ordinary work in a programme. Give every module descriptor a frontmatter block naming its level, its credit value, the professional standards it maps to, and the member of staff who owns it, and a set of questions that normally take a week of email become a query over the folder: which level 6 modules claim HCPC[^hcpc] standard 9, which modules a change to placement hours would touch, which haven't been looked at since 2024. The descriptors remain documents a course leader can open and edit, because the metadata rides along in the same file. The alternative most programmes actually run — the descriptors in one place and a mapping spreadsheet in another — goes stale the first time someone revises a module without remembering the spreadsheet exists, and there's no way to tell from either document that it has happened.

### Common YAML frontmatter mistakes

- **Indentation errors**: YAML uses spaces, not tabs. Mixed indentation causes parsing failures.
- **Unquoted special characters**: colons, hashes, and square brackets have meaning in YAML. Values containing them should be quoted: `title: "Context sovereignty: A human-centred approach"`.
- **Scalar vs list confusion**: a single-item list (`- value`) and a scalar (`value`) are different types. Tools that expect one will fail silently or error on the other.

---

## Notes

YAML is one of several data serialisation formats, alongside JSON[^json] (more compact, less readable) and TOML (similar goals, different syntax). For frontmatter in documents intended to be read by humans as well as machines, YAML remains the dominant choice.

---

## Sources

- Ben-Kiki, O., Evans, C., & döt Net, I. (2021). *YAML Ain't Markup Language (YAML) revision 1.2.2*. YAML Language Development Team. https://yaml.org/spec/1.2.2/
- Obsidian. (n.d.). *Properties*. Obsidian Help. https://obsidian.md/help/properties

[^ssg]: **Quartz** — a static site generator, a program that turns a folder of markdown notes into a website of ordinary web pages. This site is built with it, and every page's title, date, and tags come from its YAML frontmatter. [Quartz documentation](https://quartz.jzhao.xyz/)
[^hcpc]: **HCPC** is the Health and Care Professions Council, the UK regulator for fifteen professions including occupational therapy, physiotherapy, paramedicine, and radiography. It approves the education programmes that lead to registration, and its standards of proficiency set out what a graduate must be able to do on the day they register. [Wikipedia](https://en.wikipedia.org/wiki/Health_and_Care_Professions_Council)
[^json]: **JSON** — a format for structured data that uses braces and quotation marks where YAML uses indentation. Programs exchange data in it constantly; people find it harder to read and edit by hand. [Wikipedia](https://en.wikipedia.org/wiki/JSON)
