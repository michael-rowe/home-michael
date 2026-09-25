---
title: Distributed version control
description: Distributed version control tracks changes to files so that every contributor holds a complete copy of the project and its full history, with no central server to depend on. It allows offline work, parallel development, and recovery from any copy, and it lets partners who share a document, such as a practice assessment document, each keep the whole record of how it changed.
meta-description: "What is distributed version control? Tracking changes so every copy holds the full history, and what that means for a document several partners share."
aliases:
  - DVCS
type: note
author: "[[Michael Rowe]]"
created: 2026-04-06
updated: 2026-09-25
draft: false
tags:
  - documentation
  - open-scholarship
  - information-management
  - collaboration
category:
  - Technology
related:
  - "[[Notes/git]]"
  - "[[Notes/open source software]]"
  - "[[Posts/2026-04-06-open-scholarship-workflow]]"
keyphrase: "what is distributed version control"
linkedin:
reviewed:
  - note_writer
  - writing_style
  - SEO_optimiser
  - copy_editor
---

> [!info] Every contributor holds the full history, not just the current files.
> In a distributed system there's no single server that everyone depends on, because each copy of a project carries its complete history with it. People can work offline and merge their contributions later, and losing one copy doesn't mean losing the project.

## Distributed version control

**One-sentence definition:** Distributed version control is a system for tracking changes to files in which every contributor's copy contains the complete history of the project.

The alternative is *centralised* version control, where a single server holds the history and contributors check files in and out of it, so that when the server fails, work stops.

**Why distribution matters:**

- **Resilience**: any copy can restore the project, so there's no single point of failure.
- **Offline work**: the full history is local, so you can commit[^commit], branch[^branch], and browse history without a network connection.
- **Parallel development**: contributors work in their own copies and merge when they're ready, so nobody waits for someone else to finish with a file.
- **Transparency**: the complete history travels with the project. Anyone with a copy can see how it evolved.

---

### Distinction from file syncing

Cloud storage such as Dropbox or Google Drive also gives everyone a copy, which is why the two get confused. What syncing copies is the current state of the files. It keeps automatic snapshots you can roll back to, but a snapshot records when a file was saved, not what the change was for, and when two people edit the same file offline Dropbox keeps both as a "conflicted copy" and leaves you to reconcile them by hand. Distributed version control copies the history: deliberate checkpoints, each with a description, that can be compared line by line and merged.

### What distribution changes for a shared document

Practice assessment documents in nursing and midwifery are often shared across several universities and their placement partners; the [Pan London Practice Assessment Document](https://plplg.uk/nursing/) is one (Pan London Practice Learning Group, 2021). Every partner has to agree a change, and in a central arrangement one of them hosts the master copy while the others depend on it. When that shared drive is reorganised, or the person who looked after it moves on, the reasons behind each change go with them. With distributed version control every partner holds the complete history. A university can draft an amendment in its own copy, the others can see exactly what it changes before agreeing to merge it, and if one partner withdraws the record stays with everyone else.

The same history makes any scholarly project legible: how an argument evolved, where sources came in, who contributed what. The [[Notes/git|git]] note covers that side, and [[Posts/2026-04-06-open-scholarship-workflow|an open scholarship workflow]] shows it in practice.

---

## Sources

- Chacon, S., & Straub, B. (2014). *Pro Git* (2nd ed.). Apress. https://git-scm.com/book/en/v2
- Pan London Practice Learning Group. (2021). *Nursing Pan London Practice Assessment Document 2.0*. PLPLG. https://plplg.uk/nursing/

---

## Notes

Git is by far the most widely used distributed version control system. Linus Torvalds wrote it in 2005 for developing the Linux kernel[^linux-kernel] (Chacon & Straub, 2014), which is why the distributed model grew up alongside [[Notes/open source software|open source software]]. Mercurial was a notable alternative but has largely ceded ground to git.

[^commit]: **Commit.** A saved checkpoint of a project, recorded with a short message saying what changed and why. A commit on a module handbook might read "Reword outcome 4 to match the revised assessment brief". See [Commit (version control)](https://en.wikipedia.org/wiki/Commit_(version_control)).

[^branch]: **Branch.** A separate line of work inside the same project, where changes can be drafted without touching the agreed version and merged back once they're accepted. See [Branching (version control)](https://en.wikipedia.org/wiki/Branching_(version_control)).

[^linux-kernel]: **Linux kernel.** The core of the Linux operating system, written and maintained by thousands of contributors around the world, which is why it needed a tool that didn't depend on one central server. See [Linux kernel](https://en.wikipedia.org/wiki/Linux_kernel).
