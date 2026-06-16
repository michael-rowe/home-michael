---
type: project
title: Path
description: "A professional-development portfolio system built on one model: a progression framework against which you map claims, backed by evidence, producing a portfolio whose coverage and gaps drive the next move. Framework-agnostic — it serves CPD audits, fellowship and promotion applications, regulator validation, and student learning portfolios. A hosted prototype is live and running a pilot with University of Lincoln staff, heading toward a commercial build."
meta-description: A professional-development portfolio system that maps evidence to a framework and shows your coverage and gaps.
author: "[[Michael Rowe]]"
created: 2026-05-01
updated: 2026-06-16
status: Prototype
role: Conceived, designed, and built
tags:
  - competency-frameworks
  - ai-integration
  - workplace-learning
  - information-management
category:
  - Professional development
  - Education
related:
  - "[[Notes/context-sovereignty]]"
draft: false
linkedin:
---

> [!info] A professional-development portfolio system that turns scattered evidence into a clear view of your progress.
> Pick a framework — a set of criteria, outcomes, or standards — map your claims and evidence against it, and Path shows your coverage and your gaps, so the next step is obvious. One model that serves CPD, fellowship and promotion applications, regulator validation, and student learning portfolios alike.

## What it is

Professional development generates a lot of evidence and very little clarity. Activities, reflections, and credentials accumulate, but the question that matters — am I actually developing toward where I want to be? — stays hard to answer. Path is built on a single model that makes it answerable: a progression framework (criteria, outcomes, or standards) against which you map claims, each backed by supporting evidence, producing a portfolio whose coverage and gaps drive the next move.

The model is framework-agnostic. The same structure serves a CPD audit, an AdvanceHE or NTFS fellowship, HCPC or NMC revalidation, a job or promotion application, and student learning portfolios.

## What it does

Path treats professional development as a guided route from where you are to where you want to be: pick a destination framework, locate your starting point, and work on the biggest gap next. A theory of expertise development is built into the tool rather than bolted on, drawing on Dreyfus, Ericsson, Schön, Miller, and Wenger. It weighs evidence by strength rather than counting hours — demonstrated competence, not hours logged — and treats gaps prospectively, as a plan rather than a deficit.

![[Media/path-dashboard.png]]

Self-assessment against criterion-level descriptors shows where you are on the expertise ladder. Evidence carries a strength rating so the guidance you get is about quality of evidence, not just coverage. A posture engine reads your data — coverage, deadline, how far you've come — and surfaces what matters next, rather than leaving you to interpret a heatmap alone.

![[Media/path-coverage.png]]

When you're ready, a private share link gives a mentor, critical friend, or formal reviewer read access to your portfolio without needing an account. They can leave per-criterion feedback and endorse criteria; you see it all inline. Submission-ready Word export and a full Markdown data export (so you always own your portfolio) complete the individual workflow.

For institutions, the same coverage logic aggregates anonymously — how many staff are working towards each framework, and how far — while consent-gated named access and a managed review workflow (submit → allocate reviewer → feedback → approve) give coordinators the oversight they need without surveillance being the default.

![[Media/path-reviews.png]]

## Status

Path is a hosted prototype live at [path-poc.vercel.app](https://path-poc.vercel.app) — a multi-user web application supporting CPD audits, revalidation portfolios, fellowship applications, promotion cases, and institutional review. A pilot with University of Lincoln staff is underway.

Following a demo to senior academic-development colleagues, who judged the model "more sophisticated than the platforms they use or know of", Path is heading toward a commercial build with the University of Lincoln and is looking for partners to take it further. The likely shape is free for individuals, licensed for institutions. The conceptual layer — a theory of expertise development built into the tool — is the next major piece of work: the model needs to be written as a short essay before the higher-order features (adaptive scaffolding, curriculum generation) can be designed with any rigour.

## Find out more

- Demo: [path-poc.vercel.app](https://path-poc.vercel.app) — explore with the guest account or sign up with a @lincoln.ac.uk email
- Code: [github.com/michael-rowe/path](https://github.com/michael-rowe/path) — the original prototype
- Post: [[Posts/2026-06-08-building-cpd-app|Building a CPD app with Claude Code]] — how the prototype came together over two weekends, and the thinking behind it
