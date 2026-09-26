---
title: Git
description: Git is a distributed version control system that tracks changes to files over time. It records who changed what and when, allows you to move between earlier and later states of a project, and lets multiple people work on the same files without overwriting each other's contributions.
meta-description: "Git for non-programmers: how git records every change to your files, and why a programme team keeping module descriptors would want that history."
aliases:
type: note
author: "[[Michael Rowe]]"
created: 2026-04-06
updated: 2026-09-26
draft: false
tags:
  - documentation
  - open-scholarship
  - information-management
category:
  - Technology
related:
  - "[[Notes/distributed version control]]"
  - "[[Notes/plain text]]"
  - "[[Notes/open source software]]"
  - "[[Posts/2026-04-06-open-scholarship-workflow]]"
keyphrase: "git for non-programmers"
linkedin:
reviewed:
  - note_writer
  - writing_style
  - SEO_optimiser
  - copy_editor
---

> [!info] Git keeps the whole history of a project, with a reason for every change.
> Every change you make can be saved as a named checkpoint, with a description of what changed and why. You can review that history, restore earlier versions, and work on experimental changes without affecting the main version. That makes the development of a project visible and reversible in a way a folder of saved files isn't.

## Git

**One-sentence definition:** Git is a [[Notes/distributed version control|distributed version control]] system that tracks changes to files over time, recording who changed what, when, and why.

You don't need to write code to use git. Four ideas cover most of what a non-programmer needs:

**Commits** are saved snapshots of your project at a point in time. Each commit includes the changes made, a short description, and a timestamp. Commits accumulate into a history you can browse or rewind.

**Repositories** are the containers that hold a project and its full history. A repository (repo) lives on your machine and can be synchronised with a remote copy — typically hosted on a platform like GitHub — so that the history is backed up and shareable.

**Branches** allow parallel lines of development. You can create a branch to work on something experimental without disturbing the main version, then merge it back when it's ready. This is how large collaborative projects let many people work at once without treading on each other's changes.

**Staging** is the step between making a change and committing it. You explicitly choose which changes to include in a commit, which encourages deliberate, well-described checkpoints rather than saving everything at once.

A programme team that keeps its module descriptors this way gets an answer to a question that is otherwise surprisingly hard to settle. Learning outcomes drift over a few years of minor amendments, and when a periodic review or a professional-body revalidation asks when outcome 4 changed and on whose authority, the evidence is usually a shared drive holding `handbook_v3_FINAL.docx` alongside `handbook_v3_FINAL_amended.docx`. The version number in the filename is standing in for a provenance it can't actually carry, and the people who made the amendments have often moved on. A repository answers the question directly: the outcome was rewritten on this date, in this commit, with this explanation, as part of the same batch of changes that revised the assessment brief — which is also how you discover that the two were meant to move together and only one of them did.

---

### Revision history as part of the record

For scholarly work, git gives every essay, note, or dataset a complete revision history. You can see exactly what changed between drafts, recover content you deleted, and let other people see how the work developed as well as where it ended up. Open scholarship[^open-scholarship] counts that visible process as a contribution in its own right, and git is one of the more practical ways of making it visible.

When two contributors have changed the same lines, git stops at the merge and shows the conflict instead of letting one version silently overwrite the other. The [[Notes/distributed version control|distributed version control]] note covers why each contributor can work from a complete copy of the project.

---

## Sources

- Chacon, S., & Straub, B. (2014). *Pro Git* (2nd ed.). Apress. https://git-scm.com/book/en/v2
- Veletsianos, G., & Kimmons, R. (2012). Assumptions and challenges of open scholarship. *The International Review of Research in Open and Distributed Learning*, *13*(4), 166–189. https://doi.org/10.19173/irrodl.v13i4.1313

---

## Notes

Git is the underlying tool; GitHub, GitLab, and similar platforms are hosting services built on top of it. The distinction matters because git works entirely offline, and the remote platform is optional infrastructure for sharing and backup.

[^open-scholarship]: **Open scholarship.** Making the work of scholarship openly available so others can see, reuse, and build on it: publications, and also data, methods, drafts, and teaching materials (Veletsianos & Kimmons, 2012).
