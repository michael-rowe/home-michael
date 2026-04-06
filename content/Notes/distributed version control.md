---
title: Distributed version control
description: Distributed version control is an approach to tracking file changes where every contributor holds a complete copy of the repository and its full history, rather than depending on a central server. It enables offline work, parallel development, and resilience against data loss.
aliases:
  - DVCS
type: note
author: "[[Michael Rowe]]"
created: 2026-04-06
updated: 2026-04-06
status: draft
draft: false
tags:
  - documentation
  - open-scholarship
  - information-management
category:
  - Technology
related:
  - "[[git]]"
  - "[[open scholarship]]"
keyphrase: "distributed version control"
slug: notes/distributed-version-control
linkedin:
---

> [!info] Every contributor holds the full history, not just the current files.
> In a distributed system, there is no single authoritative server that everyone depends on. Each copy of a repository is complete and independent. Work can happen offline, contributions can be merged from multiple sources, and losing one copy does not mean losing the project.

## Distributed version control

**One-sentence definition:** Distributed version control is a system for tracking changes to files in which every contributor's copy contains the complete history of the project, rather than connecting to a central store of that history.

The alternative is *centralised* version control, where a single server holds the history and contributors check files in and out. If that server fails, work stops. In a distributed system, every clone is a full backup — contributors can work independently and synchronise later.

**Why distribution matters:**

- **Resilience**: no single point of failure. Any copy can restore the project.
- **Offline work**: the full history is local, so you can commit, branch, and browse history without a network connection.
- **Parallel development**: contributors work independently in their own copies and merge when ready, rather than serialising access to shared files.
- **Transparency**: the complete history travels with the project. Anyone with a copy can see how it evolved.

---

### Distinction from file syncing

Cloud storage (Dropbox, Google Drive) syncs current file states but does not record a meaningful history of changes. You can recover a recent version, but you cannot see what changed between versions, who changed it, or why. Version control tracks *intentional* checkpoints with descriptions, not automatic saves.

### Relevance to open scholarship

Distributed version control makes the development of a scholarly project legible. Essays, datasets, and teaching materials can have auditable histories — showing how arguments evolved, where sources were added, and how collaborators contributed. Platforms like GitHub surface this history publicly, supporting the [[open scholarship]] principle that process, not just output, carries scholarly value. [[Git]] is the dominant implementation.

---

## Sources

- Chacon, S., & Straub, B. (2014). *Pro Git* (2nd ed.). Apress. https://git-scm.com/book

---

## Notes

Git is by far the most widely used distributed version control system. Mercurial was a notable alternative but has largely ceded ground to git.
