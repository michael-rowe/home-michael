---
title: An open, collaborative, and version-controlled academic writing workflow
type: post
aliases:
  - Open source scholarship
description: "Academic publishing treats scholarship as a finished, individually owned artefact. This post describes a writing and publishing workflow built on a different premise: that a scholarly corpus could work like an open source project — readable, contributable, forkable, and never permanently owned by anyone."
meta-description: "What would scholarship look like if it worked like an open source project? A workflow built on plain text, version control, and open licensing."
keyphrase: open source scholarship
author: "[[Michael Rowe]]"
date: 2026-04-04
updated: 2026-04-04
tags:
  - open-scholarship
  - publishing
  - academic-writing
  - academic-practice
  - information-architecture
category:
  - Scholarship
related:
draft: true
slug: essays/open-collaborative-version-controlled-workflow
subtype: ""
enableToc: true
linkedin:
---

> [!info] The infrastructure for open scholarship already exists
> Version control, plain text, and open licensing give knowledge work the same properties that open source software has always had: transparent provenance, evolving content, and a mechanism for community contribution. Academic publishing developed the values — rigour, attribution, peer review — but not the infrastructure to match. This post describes a workflow that borrows the infrastructure and applies it to a scholarly corpus.

## The problem this is trying to solve

A few years ago I started asking a question that seemed straightforward but turned out to be generative: what would scholarship look like if it worked more like an open source software project?

The open source movement solved a genuinely hard problem — how to build complex, evolving knowledge artefacts collaboratively, with transparent provenance, without centralised ownership. The Linux kernel is not owned by Linus Torvalds in any meaningful sense, even though he started it and still exercises curatorial control. It belongs to the community that built it, protected by a license that ensures it stays that way. Anyone can read it, fork it, extend it, propose changes, and build on it. The history of every change is permanently visible. Nothing is ever truly finished.

Academic publishing has not solved this problem. It has organised itself around the opposite assumptions. A paper is a finished object. It is owned, in practice if not always in law, by the combination of named authors and the journal that publishes it. Once published, it does not change — any update requires a new paper, a correction notice, or a retraction. The relationship between reader and work is passive: you consume it, you cite it, but you do not contribute to it or extend it in any traceable way. Open access widens who can read it, but the underlying model remains intact. The knowledge is still frozen, the provenance is still opaque between versions, and the community of readers has no formal mechanism for contributing back.

What I have been building, slowly and imperfectly, is a workflow that tries to apply the open source model to a scholarly corpus. The publishing infrastructure — plain text, version control, open licensing, structured metadata — is not the point. It is what makes the point possible.

## What the workflow actually looks like

The full pipeline is straightforward: writing happens in [[Obsidian]], is versioned in [[Git]] and published on [[GitHub]], built into a static site by [[Quartz]], and deployed automatically to GitHub Pages. Essays that need stable citation targets are deposited as snapshots to the [[Open Science Framework]] (OSF), which issues a DOI.

Everything starts in [[Markdown]], written in [[Obsidian]]. Markdown is plain text with minimal formatting syntax, which means the file itself is the authoritative source — not a rendered PDF, not a Word document with embedded formatting that will behave differently on someone else's machine. Plain text has been readable for decades and will remain so; it is tiny, portable, and works seamlessly with version control systems. When I need a different format — a PDF for a preprint submission, an HTML page for the web — I convert from that single source. The content and its presentation are kept separate by design.

The corpus lives in a public [[GitHub]] repository. Every change I make is a [[version control|commit]] — a recorded, timestamped edit with a message describing what changed and why. This means the entire revision history of every output is permanently visible. You can see not just what the current version says but how it got there: which arguments were added, which were cut, which were restructured. This is a more honest record of how knowledge develops than any published paper, which presents a finished argument as though it arrived fully formed.

The repository is public, which means anyone can clone it — download a full local copy — right now. You can read it, search it, build tools on top of it. If you wanted to fork it — take the whole thing and develop it in a different direction — the license permits that. I will return to what forking actually means in practice, and why that is more aspirational than real at this stage.

From the repository, a GitHub Action automatically builds and publishes the site using [[Quartz]], a static site generator designed for Obsidian-compatible markdown. Editing an essay, committing the change, and seeing it live on the website takes seconds. The manual overhead that journal submission requires — formatting to house style, navigating submission portals, waiting months for decisions — is replaced by a process that is almost entirely automated.

For essays I want to make citable in the traditional academic sense, I submit them as snapshots to OSF, which issues a DOI. This solves a real tension in living documents: I want essays to evolve as my thinking develops, but citations need to point to something stable. The DOI points to a fixed version at a moment in time; the repository contains the current, evolving version. These are not in conflict — they serve different purposes.

Each essay carries structured metadata in its [[YAML]] frontmatter — a block at the top of each file that declares what the content is and how it relates to everything else:

```yaml
type: essay
title: "Towards a framework for emergent scholarship"
slug: essays/emergent-scholarship
author:
  - "[[Michael Rowe]]"
version: 0.7
created: 2025-04-02
modified: 2026-04-04
keyphrase: emergent scholarship
tags:
  - open-scholarship
  - academic-practice
related:
  - "[[Open source scholarship]]"
draft: false
```

Essays follow a semantic versioning scheme that reflects their intellectual maturity rather than just tracking edits:

| Version | Stage |
|---------|-------|
| 0.5 | First shareable draft |
| 0.7 | Polished — 1–2 rounds of editing |
| 0.9 | Final draft — preprint with DOI |
| 1.0 | Version of record — peer-reviewed publication |
| 1.1+ | Minor updates and clarifications |

The `related:` field is a gesture toward something important that remains unsolved — I will come back to it.

One addition since I last wrote about this workflow is a `CLAUDE.md` file in the repository: a structured document written explicitly for AI systems, describing the corpus, its conventions, and how to navigate it. This sits alongside content written for human readers, not instead of it. It is an example of building machine-readable infrastructure around human-readable writing — something that will matter more as AI systems become a more significant part of how research is discovered and synthesised.

## From reading to contributing

Cloning the repository is possible now, but that alone does not constitute a collaborative ecosystem. Someone could clone this corpus, read every essay, and find it interesting. There would still be no mechanism to contribute anything back in a traceable, structured way. That gap is the difference between open access and open source.

The open source equivalent of scholarly contribution is the [[pull request]]: a formal proposal to change the project. A contributor identifies a gap, an error, or an extension and submits it for review. The maintainer decides whether to incorporate it. The history of that decision — the proposal, any discussion, the acceptance or rejection — is permanently visible. Credit is attributed not through an acknowledgements section but through the commit history itself.

This is not as foreign to scholarship as it might initially seem. Peer review is already a version of code review: an expert evaluation of whether a proposed contribution meets the standards of the project. What is currently missing is the infrastructure that makes that process open, traceable, and attached to the living document rather than to a separate publication event. Scholarly publishing has the norms; what it lacks is the mechanism.

What would make this real rather than aspirational is a contribution framework — the equivalent of a project's `CONTRIBUTING.md` file — that sets out what kinds of additions are welcome, what standards they should meet, and how decisions about incorporation get made. That framework does not yet exist for this corpus, and building it is the next necessary piece of the infrastructure. For now, the closest equivalent is the project's GitHub issue tracker: an open forum where anyone can flag errors, propose extensions, or offer critical responses, with the discussion permanently attached to the project.

The curatorial control remains with me as the maintainer, but the license means the project does not belong to me in any final sense. Under CC-BY 4.0, anyone can share, adapt, and build on this work — including commercially — provided they maintain attribution. The license does not prevent someone from creating something closed on top of it, but it ensures the source material itself remains permanently open and attributed.

There is a harder question sitting underneath this, which I will not resolve here: what does peer review look like when contributions can come from anywhere, when the document is living rather than finished, and when the distinction between author and reviewer is deliberately blurred? That deserves its own post. What I will say is that we are not starting from scratch — the norms of scholarly evaluation exist, even if the infrastructure for applying them in this context does not yet.

## What this offers that traditional publishing does not

The most significant difference is the shift from paper to corpus as the unit of scholarly output. A paper is a snapshot. A corpus is an evolving body of work, and the version control infrastructure means that evolution is transparent rather than hidden between published versions. When I change my mind about something, that change is visible. When an argument develops over multiple essays, the relationships between them are declared in the metadata rather than reconstructed by the reader.

Living documents with stable references are not in tension when the infrastructure supports both. The commit history provides granular provenance; the DOI provides a fixed citation target. These serve different needs simultaneously in a way that traditional publishing cannot — a journal article is frozen at publication, and updating it requires either a correction notice or a new paper that cites the original.

The `related:` field in each essay's [[YAML]] frontmatter gestures toward something more important than it currently delivers. Declaring that two essays are related is weaker than declaring how they are related — whether one extends the other, contradicts it, applies its argument to a different context, or was superseded by it. The paper-spec project, discussed in a recent LinkedIn thread that prompted this post, formalises exactly this kind of typed citation relationship for empirical research. For argumentative, essay-form scholarship, the equivalent problem is less well addressed, and I have not solved it here. The relationships exist in the prose; making them machine-readable in the metadata is an open problem worth naming.

Plain text with structured metadata is also more useful to AI systems than PDF. This is not the reason I built the workflow this way, but it is a confirmation of the underlying logic. A PDF locks knowledge inside a rendered format; the structural relationships between claims, sections, and documents are lost in the rendering. A markdown corpus with typed metadata preserves those relationships. As AI systems become more deeply integrated into how research is discovered, synthesised, and connected, the difference between knowledge that is architecturally accessible and knowledge that is locked in formatted documents will compound. The organisations and scholars building accessible infrastructure now will have an advantage that is difficult to close later.

## What this does not yet solve

The aspiration gap is real and worth being explicit about. The corpus can be cloned now, but why would anyone do so? There is no contribution framework, no clear mechanism for proposing additions, no community that has formed around the project. The open source analogy holds at the level of infrastructure but not yet at the level of practice. Building toward a genuinely contributory ecosystem is a longer project than building the publishing workflow, and I am at the beginning of it.

The typed relationship problem remains unsolved. Related essays are declared but the nature of the relationship is not. This matters more as the corpus grows and the intellectual genealogy becomes harder to navigate by reading alone.

Institutional recognition has not caught up. This workflow sits alongside traditional journal publication rather than replacing it, because the incentive structures of academic careers — promotion criteria, funding decisions, hiring panels — have not shifted far enough to treat a well-maintained public corpus as equivalent to a list of journal articles. That may change. It has not changed yet.

## Why this matters beyond personal workflow

The LinkedIn thread that prompted me to return to this post included the observation that scientific knowledge is still primarily distributed as static PDFs to systems built around print conventions, and that this is a bottleneck for AI-assisted science. That is true, but the more interesting version of the problem is not about AI. It is about what kind of relationship scholars can have with their own work and with each other's work.

Traditional publishing offers one model: a finished artefact, individually owned, frozen at publication, consumed passively. The open source model offers a different one: an evolving project, collaboratively maintained, permanently open, with traceable provenance and a mechanism for community contribution. Academic publishing developed the norms and values — rigour, attribution, peer evaluation — that a scholarly open source model needs. What it did not develop is the infrastructure.

That infrastructure exists now, built by the software development community for their own purposes and available for anyone to repurpose. The question is whether scholars will use it — not to replace the values of careful, rigorous inquiry, but to build a more honest and more collaborative infrastructure for the knowledge those values produce.

I do not own this corpus in any final sense, and that is the point.
