---
title: "An open scholarly workflow: What academic publishing can learn from open source"
type: post
aliases:
  - Open source scholarship
  - essays/open-collaborative-version-controlled-workflow
description: "Academic publishing treats scholarship as a finished, individually owned artefact. This post describes a writing and publishing workflow built on a different premise: that a scholarly corpus could work like an open source project — readable, contributable, forkable, and never permanently owned by anyone."
meta-description: An open scholarship workflow built on Markdown, Git, and open licensing — and what it reveals about the limits of traditional academic publishing.
keyphrase: open scholarship workflow
author: "[[Michael Rowe]]"
date: 2026-04-06
updated: 2026-04-06
tags:
  - open-scholarship
  - publishing
  - academic-writing
  - academic-practice
  - information-architecture
category:
  - Scholarship
related:
draft: false
slug: posts/open-scholarship-workflow
subtype: ""
enableToc: true
linkedin:
---

> [!info] The infrastructure for open scholarship already exists
> Version control, plain text, and open licensing give knowledge work the same properties that open source software has always had: transparent provenance, evolving content, and a mechanism for community contribution. Academic publishing developed the values — rigour, attribution, peer review — but not the infrastructure. This post describes a workflow that borrows the infrastructure from open source software projects and applies it to a scholarly corpus.

## The problem this is trying to solve

Ever since I [read this article](https://hybridpedagogy.org/push-pull-fork-github-for-academics/) in *Hybrid Pedagogy* (more than 10 years ago), I've been asking what scholarship might look like if it worked more like an open source software project?

The [open source](https://en.wikipedia.org/wiki/Open_source) movement solved a genuinely hard problem; how to build complex, evolving knowledge artefacts collaboratively, with transparent provenance, without centralised ownership. The [Linux kernel](https://en.wikipedia.org/wiki/Linux_kernel) is not owned by [Linus Torvalds](https://en.wikipedia.org/wiki/Linus_Torvalds) in any meaningful sense, even though he started it and still exercises curatorial control. It belongs to the community that built it, protected by a license that ensures it stays that way. Anyone can read it, fork it, extend it, propose changes, and build on it. The [[Git|history of every change]] is permanently visible. Nothing is ever truly finished.

Academic publishing has not solved this problem and in fact, has organised itself around the opposite assumptions. A peer-reviewed paper is a finished object. It is owned, in practice if not always in law, by the combination of named authors and the journal that publishes it. Once published, it does not change; any update requires a new paper, a correction notice, or a retraction. The relationship between reader and work is passive: you consume it, you cite it, but you do not contribute to it or extend it in any traceable way. [[open access licensing|Open access]] widens who can read it, but the underlying model remains intact. The knowledge is still frozen, the provenance is still opaque between versions, and the community of readers has no formal mechanism for contributing back.

Underneath this structural problem sits a deeper issue related to trust. For centuries, academics have outsourced trust to publishers and journals, relying on them to ensure that what we read and build on is trustworthy. Publication in a prestigious journal signals that work has passed certain quality thresholds, reducing the cognitive load on individual scholars. This proxy system emerged from practical necessity; in pre-digital academia, individual scholars lacked the resources to manage reproduction, distribution, and preservation of their work. Publishers solved real problems, and the trust infrastructure they built enabled remarkable progress.

But outsourcing trust to commercial intermediaries also created misaligned incentives. The system that was supposed to serve scholarly progress developed its own self-reinforcing logic: publishers benefit from a steady stream of submissions, universities evaluate faculty on publication counts and impact factors, and researchers need publications for career advancement. Each actor responds rationally to their incentives, but the collective result is a publishing culture that can privilege volume over value. It is worth acknowledging that commercial incentives also *produced* much of the infrastructure scholars now rely on — persistent identifiers, structured metadata, global distribution networks. The problem is not that publishers are villains but that outsourced trust eventually serves the interests of the proxy as much as the interests of the community it was meant to represent. I've been thinking of this ecosystem as the '[[research industrial complex]]'.

The question this workflow tries to answer is whether the valuable elements of that trust infrastructure (i.e. persistent identification, version control, peer feedback, and contextual placement of work within broader conversations) can be preserved and enhanced while bringing them under more direct scholarly control.

What I have been building since I first asked the question, albeit slowly and imperfectly, is an open scholarship workflow: an attempt to apply the open source model to a scholarly corpus. The publishing infrastructure of [[plain text]], [[distributed version control|version control]], [[open access licensing|open licensing]], and [[YAML|structured metadata]], is not the point. It is what makes the point possible.

## What an open scholarship workflow actually looks like

The full pipeline is straightforward: writing happens in [Obsidian](https://obsidian.md/), is versioned in [[Git]] and published on [GitHub](https://github.com/michael-rowe/home-michael), built into a static site by [Quartz](https://quartz.jzhao.xyz/), and deployed automatically to [GitHub Pages](https://docs.github.com/en/pages). Essays that need stable citation targets are deposited as snapshots to the [Open Science Framework](https://osf.io/preprints/discover) (OSF) preprint server, which issues a DOI.

Everything starts in [[Markdown]], written in Obsidian. Markdown is plain text with minimal formatting syntax, which means the file itself is the authoritative source; not a rendered PDF, not a Word document with embedded formatting that will behave differently on someone else's machine. Plain text has been readable for decades and will remain so; it is tiny, portable, and works seamlessly with version control systems. When I need a different format — a PDF for a preprint submission, an HTML page for the web — I convert from that single source using [[pandoc]]. The content and its presentation are kept separate by design.

The corpus lives in a public GitHub repository and every change I make to a file is a [[distributed version control|commit]]; a recorded, timestamped edit with a message describing what changed and why. This means the entire revision history of every output is permanently visible. You can see not just what the current version says but how it got there: which arguments were added, which were cut, which were restructured. This is a more honest record of how knowledge develops than any published paper, which presents a finished argument as though it arrived fully formed.

The repository is public, which means anyone can clone it (i.e. download a full local copy) right now. You can read it, search it, build tools on top of it. If you wanted to fork it (take the whole thing and develop it in a different direction) the license permits that. *Note: I'll return to what forking actually means in practice, and why that is more aspirational than real at this stage.*

From the repository, a GitHub Action automatically builds and publishes the site using Quartz, a static site generator designed for Obsidian-compatible markdown. Editing an essay, committing the change, and seeing it live on the website takes seconds. The manual overhead that journal submission requires — formatting to house style, navigating submission portals, waiting months for decisions — is replaced by a process that is almost entirely automated.

For essays I want to make citable in the traditional academic sense, I submit them as snapshots to OSF, which issues a DOI. This solves a real tension in living documents: I want essays to evolve as my thinking develops, but citations need to point to something stable. The DOI points to a fixed version at a moment in time; the repository contains the current, evolving version.

Each essay carries structured metadata in its [[YAML]] frontmatter; a block at the top of each file that declares what the content is and how it relates to everything else:

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

| Version | Stage                                        |
| ------- | -------------------------------------------- |
| 0.5     | First shareable draft                        |
| 0.7     | Polished: 1–2 rounds of editing              |
| 0.9     | Final draft: preprint with DOI               |
| 1.0     | Version of record: peer-reviewed publication |
| 1.1+    | Minor updates and clarifications             |

The `related:` field is a gesture toward something important that remains unsolved and I'll come back to it shortly.

One addition since I last wrote about this workflow is a `CLAUDE.md` file in the repository: a structured document written explicitly for AI systems, describing the corpus, its conventions, and how to navigate it. This sits alongside content written for human readers, not instead of it. It's an example of building machine-readable infrastructure around human-readable writing, something that will matter more as AI systems become a more significant part of how research is discovered and synthesised.

## From reading to contributing

Cloning the repository is possible now, but that alone does not constitute a collaborative ecosystem. Someone could clone this entire website, read every essay, and find it interesting. There would still be no simple mechanism to contribute anything back in a traceable, structured way. That gap is the difference between open access and open source.

The open source equivalent of scholarly contribution is the *pull request*: a formal proposal to change the project. A contributor to an open source software project identifies a gap, an error, or an extension, makes a change and submits it for review. The project maintainer decides whether to incorporate it. The history of that decision — the proposal, any discussion, the acceptance or rejection — is permanently visible. Credit is attributed not through an acknowledgements section but through the commit history itself.

This is not as foreign to scholarship as it might initially seem. Peer review is already a version of code review: an expert evaluation of whether a proposed contribution meets the standards of the project. What is currently missing is the infrastructure that makes that process open, traceable, and attached to the living document rather than to a separate publication event. Scholarly publishing has the norms; what it lacks is the mechanism.

What would make this real rather than aspirational is a contribution framework — the equivalent of a project's `CONTRIBUTING.md` file — that sets out what kinds of additions are welcome, what standards they should meet, and how decisions about incorporation get made. That framework does not yet exist for this corpus, and building it is the next necessary piece of the infrastructure. For now, the closest equivalent is the project's [GitHub issue tracker](https://github.com/michael-rowe/home-michael/issues): an open forum where anyone can flag errors, propose extensions, or offer critical responses, with the discussion permanently attached to the project.

The curatorial control remains with me as the maintainer, but the license means the project does not belong to me in any final sense. Under [CC-BY 4.0](https://creativecommons.org/licenses/by/4.0/deed.en), anyone can share, adapt, and build on this work — including commercially — provided they maintain attribution. The license does not prevent someone from creating something closed on top of it, but it ensures the source material itself remains permanently open and attributed.

There is a harder question sitting underneath this, which is not resolved here: what does peer review look like when contributions can come from anywhere, when the document is living rather than finished, and when the distinction between author and reviewer is deliberately blurred? That deserves its own post. What I will say is that we are not starting from scratch; the norms of scholarly evaluation exist, even if the infrastructure for applying them in this context does not yet.

## What this offers that traditional publishing does not

The most significant difference is the shift from paper to corpus as the unit of scholarly output. A paper is a snapshot. But this entire website is an evolving body of work, and the version control infrastructure means that evolution is transparent rather than hidden between published versions. When I change my mind about something, that change is visible. When an argument develops over multiple essays, the relationships between them are declared in the metadata rather than reconstructed by the reader.

Living documents with stable references are not in tension when the infrastructure supports both. The commit history provides granular provenance; the DOI provides a fixed citation target. These serve different needs simultaneously in a way that traditional publishing cannot; a journal article is frozen at publication, and updating it requires either a correction notice or a new paper that cites the original.

This maps directly onto the trust mechanisms that traditional publishing developed and that remain worth preserving. Persistent identification is handled by DOIs through OSF. Version control — which journals accomplished through the blunt instrument of discrete published editions — is handled with far greater granularity by Git. Contextual placement, which journals achieve through editorial curation and literature reviews, is partially addressed through metadata and the structure of the corpus itself, though this remains the weakest link. And peer feedback, traditionally managed through closed pre-publication review, is replaced by open, traceable dialogue through issues and pull requests (though, as I noted above, the contribution framework that would make this robust does not yet exist in this corpus).

The shift these mechanisms represent is fundamentally about where trust lives. Traditional publishing asks readers to trust that appropriate assessment happened behind closed doors: the journal's reputation stands as proxy. This workflow invites readers to inspect the developmental process directly; the revision history, the conversations that shaped the work, the decisions about what to include and what to cut. This transparency does not eliminate the need for expertise; if anything, it makes expert contribution more visible and more valuable. But it relocates trust from institutional proxy to visible process.

The `related:` field in each essay's [[YAML]] frontmatter gestures toward something more important than it currently delivers. Declaring that two essays are related is weaker than declaring how they are related — whether one extends the other, contradicts it, applies its argument to a different context, or was superseded by it. The [*paper-spec* project](https://github.com/spectralbranding/paper-spec), discussed in a [recent LinkedIn thread](https://www.linkedin.com/posts/emollick_the-fact-that-every-scientific-paper-in-2026-activity-7444602548654718976-MX1S/?rcm=ACoAAADikz4BPhGUicf7Lvnpdh7y2FfRJD2dINY) that prompted this post, formalises exactly this kind of typed citation relationship for empirical research. For argumentative, essay-form scholarship (of the kind I tend to write on this site), the equivalent problem is less well addressed, and I have not solved it here. The relationships exist in the prose; making them machine-readable in the metadata is an open problem worth naming.

Plain text with structured metadata is also more useful to AI systems than PDF. This is not the reason I built the workflow this way, but it is a confirmation of the underlying logic. A PDF locks knowledge inside a rendered format; the structural relationships between claims, sections, and documents are lost in the rendering. A markdown corpus with typed metadata preserves those relationships. As AI systems become more deeply integrated into how research is discovered, synthesised, and connected, the difference between knowledge that is architecturally accessible and knowledge that is locked in formatted documents will compound. The organisations and scholars [[documentation-as-infrastructure|building accessible infrastructure]] now will have an advantage that is difficult to close later.

## What this does not yet solve

The aspiration gap is real and worth being explicit about. The corpus can be cloned now, but why would anyone do so? There is no contribution framework, no clear mechanism for proposing additions, no community that has formed around the project. The open source analogy holds at the level of infrastructure but not yet at the level of practice. Building toward a genuinely contributory ecosystem is a longer project than building the publishing workflow, and I'm only at the beginning of it.

The typed relationship problem remains unsolved. Related essays are declared but the nature of the relationship is not. This matters more as the corpus grows and the intellectual genealogy becomes harder to navigate by reading alone.

There is also an honest labour question. Traditional publishing outsources not only trust but work; the management of peer review, copyediting, formatting, distribution. Bringing these processes under scholarly control does not eliminate that labour; it redistributes it (although Claude Code does almost all of this editorial work for me now, through [[2026-03-07-ai-personas-for-professional-practice|multiple personas]]). This workflow only makes sense if you're already writing regularly and want more control over how that writing lives in the world. For someone managing a clinical load alongside teaching and research responsibilities, maintaining a version-controlled public corpus is additional overhead that needs to earn its place. I think the trade-off is worth it, but I won't pretend it's free.

And institutional recognition has not caught up. This workflow sits alongside traditional journal publication rather than replacing it, because the incentive structures of academic careers (i.e. promotion criteria, funding decisions, and hiring panels) have not shifted far enough to treat a well-maintained public corpus as equivalent to a list of journal articles. That may change but probably not in the near-future.

## Why this matters beyond personal workflow

The LinkedIn thread that prompted me to return to this post included the observation that scientific knowledge is still primarily distributed as static PDFs to systems built around print conventions, and that this is a bottleneck for AI-assisted science. That is true, but I think the more interesting version of the problem is not about AI. It's about what kind of relationship scholars can have with their own work and how that work sits within a wider ecosystem of knowledge creation.

Traditional publishing offers one model: a finished artefact, individually owned by the publisher, frozen at publication, consumed passively. The open source model offers a different one: an evolving project, collaboratively maintained, permanently open, with traceable provenance and a mechanism for community contribution. Academic publishing developed the norms and values — rigour, attribution, peer evaluation — that a scholarly open source model needs. What it did not develop is the infrastructure.

That infrastructure exists now, built by the software development community for their own purposes and available for anyone to repurpose. The question is whether scholars will use it; not to replace the values of careful, rigorous inquiry, but to build a more honest and more collaborative infrastructure for the knowledge those values produce.


> [!note] Provenance
> This post is based on an earlier piece, "[An open, collaborative, and version-controlled academic writing workflow](https://www.mrowe.co.za/blog/2025/04/an-open-collaborative-and-version-controlled-academic-writing-workflow/)", originally published on 02 April 2025. It has been updated to reflect changes in my writing and publishing workflow, as well as situating the piece in the context of the broader scholarship landscape.