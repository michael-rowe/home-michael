---
title: Colophon
description: How this site is built, designed, and maintained.
enableToc: false
---

## The name

`/home/michael` is a path in the Linux filesystem pointing to the home directory for a user named michael. It reflects an unashamed love of technology and the belief that the tools we use shape how we think. It's also deliberately personal, a location rather than a brand or a project name, and one that's now remote as well as local.

## How this site is made

This site is built with [Quartz](https://quartz.jzhao.xyz/), a static site generator created by [Jacky Zhao](https://jzhao.xyz/) for publishing digital gardens and interconnected notes.

Content is written in [Obsidian](https://obsidian.md/) as markdown files, then transformed by Quartz into the website you see. The source files are version-controlled with Git and hosted on [GitHub Pages](https://pages.github.com/).

## Design

The site uses the same design system as my slides and handouts, described in [[Posts/2026-09-29-personal-design-system|A personal design system for scholarly output]]. Its colours, type, and structure are read at build time from one token file, so the site and the other formats stay in step.

- **Typography** — IBM Plex Sans for headings and body text, IBM Plex Mono for code, labels, and the chips under each title
- **Colours** — a cool grey background with a single ink blue accent (`#2f5fa8`), and a dark mode that follows your system setting unless you choose otherwise
- **Structure** — square corners, no shadows, 2px lines between sections, and a contents rail beside longer pieces that marks the section you're in
- **Components** — a top bar with search, the site graph, reader mode, and the theme toggle; a row of chips under each title giving the page's type and date; and backlinks beside every page

The design is meant to make the writing easy to read and its connections easy to follow. The [[Posts/2026-09-29-quartz-graph-view|graph view]] shows how the writing connects, with each kind of page in its own colour, and the backlinks show which pages point to the one you're reading. The table of contents aids navigation in longer pieces.

## Philosophy

**Work in public** — The process is visible as well as the result. The source and the full history of changes to every page are public, and each essay carries a version number that shows how far it has come.

**Connection over collection** — Ideas are more useful linked to each other than stored separately, and the graph view and backlinks make those links visible.

**Plain text, open formats** — Everything is written in markdown, so nothing depends on a proprietary format and the whole site can be rebuilt from plain text files.

**Own your platform** — The site is published on GitHub Pages from files I keep myself, so it doesn't depend on a platform that could disappear or change its terms. The [source is public](https://github.com/michael-rowe/home-michael).

## Writing with AI

This site is built and largely written in collaboration with Claude, and that includes the content as well as the code. [[writing-with-ai|Writing with AI]] says what that means in practice, how it differs from the usual picture of writing with AI, and who answers for the result.

## Accessibility

The site uses semantic HTML, works from the keyboard, follows your system's dark mode setting, and keeps text readable with sufficient contrast. The [[accessibility|accessibility statement]] has the details and the known limitations. If you run into a problem, please [[contact|let me know]].

## Essay versioning

Essays carry a version number that indicates their publication stage:

- **0.1–0.6** — Working draft; ideas under development, subject to significant change
- **0.7–0.8** — Preprint deposited; sufficiently complete to share, awaiting formal review
- **0.9** — Submitted to a peer-reviewed journal
- **1.0+** — Published in a peer-reviewed venue; minor revisions increment the decimal (e.g. 1.1)

The version appears in the chips under each essay's title and in its "About this essay" section.

## Licence

Content on this site is shared under a [Creative Commons Attribution 4.0 licence](https://creativecommons.org/licenses/by/4.0/) (CC BY 4.0). You can copy, adapt, and reuse it for any purpose, including commercially, as long as you credit the source. To cite a page:

> Rowe, M. (2026). [Title]. */home/michael*. https://michael-rowe.github.io/home-michael/

If you'd like to discuss using something in a way the licence doesn't cover, [[contact|get in touch]].

---

*Last updated: October 2026*
