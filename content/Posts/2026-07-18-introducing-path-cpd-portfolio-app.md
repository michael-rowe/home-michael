---
title: Introducing Path, a CPD portfolio app
type: post
description: Path is a CPD portfolio app that shows you what you're missing against the standard you're working towards, rather than only showing you what you've done. It began as a two-weekend prototype and has grown into a real, hosted web app that maps your claims and evidence against any framework — a promotion, a fellowship, a regulator's CPD standard — and shows you the single highest-value thing to do next. It's still a closed, invite-only alpha, and the waiting list is now open.
meta-description: Path is a CPD portfolio app that maps your evidence against a standard and shows what's missing, not just what you've logged.
keyphrase: CPD portfolio app
author: "[[Michael Rowe]]"
date: 2026-07-19
updated: 2026-07-19
tags:
  - professional-development
  - health-professions-education
  - ai-integration
  - generative-ai
category:
  - Technology
  - Professional development
related:
  - "[[Posts/2026-06-08-building-cpd-app]]"
draft: false
enableToc: true
linkedin:
---

> [!info] *Path* is a CPD portfolio and professional development app
> Most CPD portfolio apps allow you to log activity and produce a submission at the end of a cycle. *[Path](https://pathcpd.com/)* starts from a different question: looking at the standard you're working towards, what haven't you covered yet, and what would close the gap fastest? While it's still aimed at being the best backward-looking organiser for activity you've already engaged in, it's also an attempt to build a forward-looking planner for what comes next in your career development.

*Path* is a CPD portfolio app that treats professional development as a case you build towards, not a record you keep. Pick a framework — a promotion, a fellowship, a regulator's CPD standard — and it maps your claims and evidence against it directly, showing you what's covered, what's thin, and the single highest-value thing to do next.

I built the first prototype [over two weekends in June](Posts/2026-06-08-building-cpd-app) with Claude Code. Since then I've rebuilt it from scratch as a real, hosted web app, tested it with a couple of users, and use it regularly for my own development. It's still an alpha build but I've had a few people say it'd be useful more widely, so even though it's still early days, I've created a waiting list to see if there's any interest.

![[path_home.png|Path's CPD portfolio app home screen: active paths, a to-do list drawn from tasks across those paths, and recent activity.|580]]

## How it works

Every professional framework — a regulator's CPD standard, a fellowship scheme, a promotion criterion — has the same underlying shape: a set of things you need to demonstrate. Path maps your work against that shape directly.

You pick a framework (or use *Path*'s own generic career framework if you don't have one yet), and start a **path**, which is your attempt at working towards the endpoint of the framework. As you go, you write **claims**: arguments that you meet a specific criterion within the framework. You back each claim with **evidence** — documents, certificates, photos — plus **CPD entries** and **reflections** that support it. Path then shows you a **coverage map**: which criteria are well evidenced, which are thin, and what the single highest-value next move is. *Note: This is a deterministic algorithm, which means it's Path's best guess as to what you could be working on, rather than an oracle telling you what's true.* 

![[path_hpe_framework.png|A framework page showing criteria, an auto-generated "here's where to start" prompt, and a coverage table across claims, CPD, reflections, and evidence.|580]]

Evidence quality matters as much as evidence volume. So *Path* uses [Miller's pyramid](https://www.sciencedirect.com/science/article/pii/S1521693410000519) to distinguish evidence that merely describes something ("knows") from evidence that demonstrates it in context ("shows how") or documents it as everyday practice ("does"). A pile of certificates gives you a record. Evidence weighted by level gives you a stronger, more defensible case for your actual competence in any specific domain.

![[path_evidence.png|A piece of evidence rated against Miller's pyramid — "Shows how" — and linked to the claim it supports.|580]]

## What's changed since the prototype

The first version of *Path* was a collection of markdown files in a folder, running through Docker, with no multi-user support. It was evidence that the conceptual model of how I think about professional development held together, but not something you could actually rely on. The current version is a proper hosted app: real multi-user accounts, private data enforced at the database level, a phone-friendly capture flow (photograph a certificate or jot a reflection on the spot, file it properly later), assessor share-links for getting feedback before something counts, and alignment with WCAG 2.2 — the technical standard for accessible web design — across the app.

![[path_quick_capture.png|Quick capture: take a photo or jot a note on the spot, then file it properly later.|580]]

## A few caveats

- **It's alpha software.** Features are still being added and refined, and things occasionally change or break. If you get access, export your work periodically through a one-click Markdown export of everything. It also means that nothing is ever locked in and you can move any time.
- **It's invitation-only** There's no public sign-up. Accounts are created manually, one at a time, off the waiting list. This is a personal, side project and I can't support it full-time. At this early stage I want ensure a good experience for anyone interested in trying it out.
- **Your data is private and yours.** Everything you create is locked to your account, encrypted, and held on EU infrastructure. No one else can see it, and you can turn on two-factor authentication for extra protection. Data will never be sold, or used for anything other than running the service for you. If you delete your account, everything — content, files, and account information — is permanently removed.
- **Redact before you upload.** If your evidence touches clinical or patient-related material, that's on you to anonymise first. *Path* is built to hold evidence of your own practice, not identifiable records about the people you work with. A built-in blur tool handles it in the browser, before anything is uploaded so the unredacted original never leaves your device.
- **Accessibility is a priority but not yet independently verified.** *Path* is built to WCAG 2.2 AA. Contrast, keyboard operation, and screen-reader semantics are checked automatically on every change, across both the public pages and the app itself. I still haven't completed a full screen-reader walkthrough though. If you use assistive technology and are interested in testing, that's exactly the real-world use-case that's most valuable to hear about.
- **Security is solid, but not yet independently checked.** This is a one-person build, so it hasn't been through a formal, external security audit yet. *Path* is still missing a tested disaster-recovery process and an independent security check, which I'll get around to if there's broad interest.
- **There is no institution supporting this.** *Path* isn't run by, or on behalf of, any university, regulator, or employer. It's built and operated independently.

## Join the waiting list

If any of that sounds like what you've been missing from your own CPD or portfolio process, and you're not put off by the caveats, please consider [joining the waiting list](https://pathcpd.com/waitlist). It's now open to anyone, takes under a minute, and tells me a little about what you're looking for, which informs who I invite next. If you'd prefer to have a look around before then, [explore a demo](https://pathcpd.com/explore) first, no account needed. Or head over to [[path|the project page]] for more detail.

I'm really proud of *Path* and would love to hear what you think.
