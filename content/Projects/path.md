---
type: project
title: Path
description: "Career progression, by design. Path treats professional development as a direction you choose, not a filing cabinet for what you've already done. Pick a standard to aim at — a promotion, a fellowship, a regulator's CPD requirement — gather evidence as you go, and watch a substantiated case for your next step build itself. One model serves CPD audits, fellowship and promotion applications, regulator validation, and student portfolios alike. A hosted prototype is live at pathcpd.com, in closed pilot and heading toward a commercial build."
meta-description: Path turns everyday professional work into deliberate career progression — aim at a standard, gather evidence, build the case for your next step.
author: "[[Michael Rowe]]"
created: 2026-05-01
updated: 2026-07-18
status: Prototype
role: Conceived, designed, and built
tags:
  - career-development
  - competency-frameworks
  - ai-integration
  - workplace-learning
category:
  - Professional development
  - Education
related:
  - "[[Notes/context-sovereignty]]"
draft: false
linkedin:
---

> [!info] Career progression, by design.
> Most tools are a filing cabinet for what you've already done. Path is for the practitioner who treats their development as a direction they choose: aim at a standard, gather evidence as you go, and build a substantiated case for your next step. One model serves CPD, fellowship and promotion applications, regulator validation, and student portfolios alike.

## What it is

Professional development generates a lot of evidence and very little clarity. Activities, reflections, and credentials accumulate, but the question that matters — *am I actually moving toward where I want to be?* — remains difficult to answer. And most portfolio tools make this worse: they're a filing cabinet for work already done, a place to assemble documentation in a scramble before a renewal deadline.

Path starts from the other end. It treats your career as a direction you choose and your development as the deliberate work of getting there. The everyday activity — a course attended, a project led, a patient encounter reflected on — becomes career capital you are banking on purpose, against a standard you are aiming at. The portfolio is a by-product of your progression, not the point of it.

Underneath sits a single model that makes the question answerable: a progression framework (a set of criteria, outcomes, or standards) against which you map claims, each backed by supporting evidence, producing a view of your coverage and your gaps. The model is framework-agnostic. The same structure serves a CPD audit, HCPC or NMC revalidation, a teaching-fellowship or promotion case, a job application, and student learning portfolios, and because it's agnostic, an institution or professional body loads the frameworks it holds the rights to rather than relying on any bundled by Path. Completing any one of them is a means, not an end.

## What it does

Path treats professional development as a guided route from where you are to where you want to be. Three moves carry it:

**Aim at a standard.** Pick a destination: a promotion, a fellowship, a move into a new domain, or a regulator's CPD requirement. Its criteria become the waypoints. Self-assessment against criterion-level descriptors shows where you currently sit on the expertise ladder, so the framework reads as "you are here", not a blank form.

![[Media/path_home.png|Path's home screen: active paths, tasks drawn from them, and recent activity|580]]

**Gather as you go.** Capture claims, CPD, reflections, and evidence and map them to criteria as the work happens.

![[Media/path_claim.png|A claim in progress, tagged to the criterion it argues|580]]

A mobile-first capture flow — take a photo, start a note, file it later — means the evidence you'd otherwise forget gets caught in the moment rather than reconstructed afterwards.

![[Media/path_quick_capture.png|Quick capture on a phone: a photo or a note, filed properly later|580]]

A theory of expertise development is built into the tool rather than bolted on, drawing on Dreyfus, Ericsson, Schön, Miller, and Wenger. Path weighs evidence by strength rather than counting hours — demonstrated competence, not time logged — using Miller's pyramid (knows → knows how → shows how → does), so the guidance you get is about the quality of your evidence, not just its presence.

![[Media/path_evidence.png|A piece of evidence rated against Miller's pyramid — "Shows how" — and linked to the claim it supports|580]]

**Prove it — then aim higher.** A live coverage map shows your strengths criterion by criterion and surfaces the highest-value next move. Gaps are treated prospectively, as a plan rather than a deficit. A posture engine reads your data — coverage, deadline, how far you've come — and tells you what matters next, rather than leaving you to interpret a heatmap alone.

![[Media/path_hpe_framework.png|A framework page: coverage across claims, CPD, reflections, and evidence per criterion, with an auto-generated "here's where to start" prompt|580]]

Behind the day-to-day work, Path reframes the whole portfolio as a **career-capital ledger**; the transferable assets that put you in a stronger position later: knowledge, skills, track record, credentials and recognition, network and relationships, and professional identity. A forward layer holds your longer-horizon goals; a journey layer records the moments that shaped the route. Specific frameworks (e.g. a fellowship, a revalidation cycle, a job spec) are campaigns that hang off that spine and share one pool of evidence, so a single piece of work can count toward several at once.

When you're ready, a private share link gives a mentor, critical friend, or formal reviewer read access to your portfolio without needing an account. They can leave per-criterion feedback and endorse criteria, and you see it all inline.

Privacy and security are built in, not bolted on. You can blur faces, names, and identifiers in the browser before anything is uploaded, so nothing un-redacted leaves your device — important when CPD touches clinical reflection. Two-factor authentication keeps the account itself secure. Submission-ready Word export and a full Markdown data export (so you always own your portfolio) complete the individual workflow.

![[Media/path_redaction.png|Redacting a name in the browser before evidence is uploaded|400]]
![[Media/path_security.png|Two-factor authentication, set up in account settings|400]]

For institutions and professional bodies, the same coverage logic aggregates anonymously — how many people are working towards each framework, and how far — while consent-gated named access and a managed review workflow (submit → allocate reviewer → feedback → approve) give coordinators the oversight they need. The principle is visibility without surveillance: individuals stay unnamed until they choose to submit.

![[Media/path_institution.png|An institution dashboard: aggregate member and framework stats, with reporting and review tabs|580]]

![[Media/path_institution_2.png|Aggregate progress by cohort tenure and by framework — patterns across members, never individuals|580]]

## Status

Path is a hosted prototype live at [pathcpd.com](https://pathcpd.com); a multi-user, multi-institution web application supporting CPD audits, revalidation portfolios, fellowship applications, promotion cases, and institutional review. A closed pilot is currently underway.

Following a demo to senior academic-development colleagues, Path is heading toward a commercial build and is looking for partners to take it further. The likely shape is free for individuals, licensed for institutions — the aggregation and review layer is what an organisation buys. The next major piece of work is conceptual rather than technical: the theory of expertise development that the tool already leans on needs to be written down as a short, practical essay before the higher-order features (adaptive scaffolding, AI-assisted planning, curriculum generation) can be designed with any rigour.

The reframe matters more than any single feature. Path keeps "CPD" at the front door, because regulated professionals search for it and must have it, but the career path is the spine that CPD activities feed.

## Find out more

- Demo: [pathcpd.com](https://pathcpd.com) — explore the live app, or join the waiting list for early access
- Post: [[Posts/2026-06-08-building-cpd-app|Building a CPD app with Claude Code]] — how the prototype came together over two weekends, and the thinking behind it
