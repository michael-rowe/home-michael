---
title: GitHub
description: GitHub is a website that hosts git repositories online and adds the tools people need to work on them together, including issues for discussion, pull requests for proposing and reviewing changes, and automation that can publish a project as a website. It was built for software developers, but anything kept as text files can live there, including teaching materials and scholarship.
meta-description: "GitHub for academics: what GitHub adds to git, from issues to pull requests, and why reviewing changes matters for shared teaching materials."
aliases:
type: note
author: "[[Michael Rowe]]"
created: 2026-09-27
updated: 2026-09-27
draft: false
tags:
  - collaboration
  - open-scholarship
  - publishing
category:
  - Technology
related:
  - "[[Notes/git]]"
  - "[[Notes/distributed version control]]"
  - "[[Notes/open source software]]"
  - "[[Posts/2026-04-06-open-scholarship-workflow]]"
keyphrase: "GitHub for academics"
linkedin:
reviewed:
  - note_writer
  - writing_style
  - SEO_optimiser
  - copy_editor
---

> [!info] GitHub is where a git project meets the people working on it.
> Git records the history of a project on your own computer. GitHub keeps a copy of that history online and adds a place to discuss the work, propose changes, review them line by line, and publish the result. The review step is what makes it useful beyond software, because every change arrives with a record of who suggested it and who agreed.

## GitHub

**One-sentence definition:** GitHub is a website that hosts [[Notes/git|git]] repositories online and adds tools for people to work on them together: issues, pull requests, review, and automated publishing.

The distinction from git matters because the two are often treated as one thing. Git is free software that runs on your own machine and works without an internet connection; GitHub is a commercial service, owned by Microsoft since 2018, that stores a copy of a git repository and builds collaboration around it. GitLab and Codeberg offer much the same, and a repository can move between them because the history belongs to git, not to the host. A repository on GitHub can be public, so that anyone can read it, or private to the people you invite.

Most of what GitHub adds comes down to four features. An **issue** is a discussion thread attached to the project, used to report a problem or suggest an improvement, and it stays with the project after it's closed. A **pull request** is a proposed change: someone makes an edit in their own copy and asks for it to be merged, and the people responsible for the project can see exactly which lines would change, comment on them, ask for revisions, and then accept or decline it. **Actions** run automated tasks whenever something changes, such as checking the links in a document or rebuilding a website. **Pages** serves a repository as a website for free.

This site runs on all four. The writing is kept in a public repository, every change I make is a commit pushed to GitHub, an Action rebuilds the site with Quartz,[^quartz] and Pages publishes it. The [[Posts/2026-04-06-open-scholarship-workflow|open scholarship workflow]] post describes the pipeline, and the site's issue tracker is where anyone can point out an error.

The pull request is the feature I'd most want an educator to see. Picture a bank of simulation scenarios shared between a nursing programme and a paramedic science programme at two universities. A paramedic lecturer wants to change the observations in the deteriorating-patient scenario to match a revised early warning score. Emailed as a Word document with tracked changes, the edit tends to arrive alongside two other versions of the same file, and the reasoning behind it ends up in someone's inbox. As a pull request, the nursing lead sees the three changed lines next to the lecturer's explanation, can ask a question on a single line, and merges the change when both are satisfied. The scenario's history then shows who changed the observations, when, why, and who approved it, which is the record a simulation governance group would want if the scenario were ever questioned.

The same mechanism has taken on a new job with AI. Coding agents, including GitHub's own Copilot and tools like [[Notes/Claude Code|Claude Code]], can make changes to a repository and open a pull request for them, which puts a person back at the point where the change is accepted. Nothing an agent proposes reaches the main version until someone has read the difference and merged it.

GitHub was designed by and for software developers, and it shows. The vocabulary (fork, clone, branch, merge) is unfamiliar, the interface assumes you already know git, and the first few weeks are slower than using a shared drive. Kris Shaffer (2013) made the case for GitHub for academics more than a decade ago, and the case still rests on the same thing: once the team has learned it, every change to shared material becomes visible, attributable, and reversible.

---

## Sources

- GitHub. (n.d.). *About pull requests*. GitHub Docs. https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests
- GitHub. (n.d.). *GitHub Pages documentation*. GitHub Docs. https://docs.github.com/en/pages
- Shaffer, K. (2013, May 26). Push, pull, fork: GitHub for academics. *Hybrid Pedagogy*. https://hybridpedagogy.org/push-pull-fork-github-for-academics/

---

## Notes

The [[Notes/git|git]] note covers commits, branches, and staging; this note covers only what GitHub adds on top.

[^quartz]: **Quartz**: a static site generator, a program that turns a folder of markdown notes into a website of ordinary web pages. [Quartz documentation](https://quartz.jzhao.xyz/)
