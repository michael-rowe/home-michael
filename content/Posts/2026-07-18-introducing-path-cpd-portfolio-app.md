---
title: Introducing Path, a CPD portfolio app
type: post
description: Path is a CPD portfolio app that starts from a different question than most - not what you've done, but what you're missing against the standard you're actually working towards. What began as a two-weekend prototype has grown into a real, hosted web app that maps your claims and evidence against any framework — a promotion, a fellowship, a regulator's CPD standard — and shows you the single highest-value thing to do next. It's still a closed, invite-only alpha, and the waiting list is now open.
meta-description: Path is a CPD portfolio app that maps your evidence against a standard and shows what's missing, not just what you've logged.
keyphrase: CPD portfolio app
author: "[[Michael Rowe]]"
date: 2026-07-18
updated: 2026-07-18
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
draft: true
enableToc: true
linkedin:
---

> [!info] Not what you've done — what's missing
> Most CPD portfolio apps log activity and produce a submission at the end of a cycle. *[[Projects/path|Path]]* starts from a different question: against the standard you're actually working towards, what haven't you covered yet, and what would close the gap fastest? That's still the whole idea. What's changed is that it's now a real, working app, with a waiting list open for anyone who wants in.

Path is a CPD portfolio app that treats professional development as a case you build, not a record you keep. Pick a framework — a promotion, a fellowship, a regulator's CPD standard — and it maps your claims and evidence against it directly, showing you what's covered, what's thin, and the single highest-value thing to do next.

I built the first prototype [over two weekends in June](Posts/2026-06-08-building-cpd-app) with Claude Code. Since then I've rebuilt it from scratch as a real, hosted web app, tested it with a couple of real users, and I use it regularly for my own development. It's still alpha and still invite-only, but it's no longer a demo.

![[path_home.png|Path's CPD portfolio app home screen: active paths, a to-do list drawn from tasks across those paths, and recent activity.|580]]

## How it works

Every professional framework — a regulator's CPD standard, a fellowship scheme, a promotion criterion — has the same underlying shape: a set of things you need to demonstrate. Path maps your work against that shape directly.

You pick a framework (or use Path's own generic career framework if you don't have one yet), and start a **path** — your attempt at it. As you go, you write **claims**: arguments, in your own voice, that you meet a specific criterion. You back each claim with **evidence** — documents, certificates, photos — plus **CPD entries** and **reflections** that support it. Path then shows you a **coverage map**: which criteria are well evidenced, which are thin, and what the single highest-value next move is.

![[path_ntf_framework.png|A framework page showing criteria, an auto-generated "here's where to start" prompt, and a coverage table across claims, CPD, reflections, and evidence.|580]]

Evidence quality matters as much as evidence volume. Path uses [Miller's pyramid](https://en.wikipedia.org/wiki/Miller%27s_pyramid) to distinguish evidence that merely describes something ("knows") from evidence that demonstrates it in context ("shows how") or documents it as everyday practice ("does"). A pile of certificates gives you a record. Evidence weighted by level gives you a case.

![[path_evidence.png|A piece of evidence rated against Miller's pyramid — "Shows how" — and linked to the claim it supports.|580]]

## What's changed since the prototype

The June version was markdown files in a folder, running through Docker, with no real multi-user support — a proof that the model held together, not something you'd actually rely on. The current version is a proper hosted app: real accounts, private data enforced at the database level, a phone-friendly capture flow (photograph a certificate or jot a reflection on the spot, file it properly later), assessor share-links for getting feedback before something counts, and an automated accessibility pass against WCAG 2.2 — the technical standard for accessible web design — across the app.

![[path_quick_capture.png|Quick capture: take a photo or jot a note on the spot, then file it properly later.|580]]

## A few caveats

- **It's alpha software.** Features are still being added and refined, and things occasionally change or break. If you get access, export your work periodically — a one-click Markdown export of everything is built in for exactly this reason, so nothing is ever locked in.
- **It's invitation-only, on purpose.** There's no public sign-up. Accounts are created directly, one at a time, off the waiting list — I want to stay close to how it's actually being used while it's this early.
- **Your data is private and yours.** Everything you create is locked to your account, encrypted, and held on EU infrastructure — no one else can see it, and you can turn on two-factor authentication for extra protection. Never sold, never used for anything beyond running the service for you. If you delete your account, everything — content, files, and account information — is permanently removed.
- **Redact before you upload.** If your evidence touches clinical or patient-related material, that's on you to anonymise first. Path is built to hold evidence of your own practice, not identifiable records about the people you work with. A built-in blur tool handles it in the browser, before anything is uploaded — the unredacted original never leaves your device.
- **Accessibility is engineered in, not yet independently verified.** Path is built to WCAG 2.2 AA. Contrast, keyboard operation, and screen-reader semantics are checked automatically on every change, across both the public pages and the app itself. What hasn't happened yet is the part automation can't do: a full screen-reader walkthrough and a published accessibility statement. If you use assistive technology, that's exactly the feedback that closes the gap fastest.
- **Security is solid, but not yet independently checked.** This is a one-person build, so it hasn't been through a formal, external security audit yet. What's honestly still missing is a tested disaster-recovery process and an independent security check — both on the roadmap, not done.
- **No institution stands behind this.** Path isn't run by, or on behalf of, any university, regulator, or employer. It's mine, built and operated independently.

## Join the waiting list

If any of that sounds like what you've been missing from your own CPD or portfolio process, [join the waiting list](https://pathcpd.com/waitlist). It's now open to anyone, takes under a minute, and tells me a little about what you're solving for, which shapes who I invite next. Prefer to look before you leap? [Explore a demo](https://pathcpd.com/explore) first, no account needed.
