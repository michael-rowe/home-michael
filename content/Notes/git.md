---
title: Git
description: Git is a distributed version control system that tracks changes to files over time. It records who changed what and when, allows you to move between earlier and later states of a project, and lets multiple people work on the same files without overwriting each other's contributions.
aliases:
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
  - "[[distributed version control]]"
  - "[[open scholarship]]"
keyphrase: "what is git version control"
slug: notes/git
linkedin:
---

> [!info] Git records the full history of a project, not just its current state.
> Every change you make can be saved as a named checkpoint, with a description of what changed and why. You can review that history, restore earlier versions, and work on experimental changes without affecting the main version. This makes the development of a project visible and reversible in ways that saving files to a folder does not.

## Git

**One-sentence definition:** Git is a [[distributed version control]] system that tracks changes to files over time, recording who changed what, when, and why.

Git operates through a few core ideas:

**Commits** are saved snapshots of your project at a point in time. Each commit includes the changes made, a short description, and a timestamp. Commits accumulate into a history you can browse or rewind.

**Repositories** are the containers that hold a project and its full history. A repository (repo) lives on your machine and can be synchronised with a remote copy — typically hosted on a platform like GitHub — so that the history is backed up and shareable.

**Branches** allow parallel lines of development. You can create a branch to work on something experimental without disturbing the main version, then merge it back when it is ready. This is how large collaborative projects avoid conflicts.

**Staging** is the step between making a change and committing it. You explicitly choose which changes to include in a commit, which encourages deliberate, well-described checkpoints rather than saving everything at once.

---

### What it looks like in practice

For scholarly work, git means that every essay, note, or dataset has a complete revision history. You can see exactly what changed between drafts, recover deleted content, and share the development process — not just the final output. This is one mechanism behind the [[open scholarship]] principle that making the process visible is itself a form of scholarly contribution.

For collaborative work, git allows contributors to work independently and merge their contributions, with conflicts surfaced explicitly rather than silently overwritten.

---

## Sources

- Chacon, S., & Straub, B. (2014). *Pro Git* (2nd ed.). Apress. https://git-scm.com/book

---

## Notes

Git is the underlying tool; GitHub, GitLab, and similar platforms are hosting services built on top of it. The distinction matters: git works entirely offline; the remote platform is optional infrastructure for sharing and backup.
