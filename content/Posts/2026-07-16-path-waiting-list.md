---
title: Path is opening its waiting list
type: post
description: Path — the CPD portfolio tool I built to answer a question most tools ignore, not what you've done, but what you're missing — has grown from a two-weekend prototype into a real web app. It's still a closed, invite-only alpha, but I'm opening a public waiting list. Here's what it does now, what's changed since the first prototype, and what you should know before joining.
meta-description: Path, a CPD portfolio app built with AI coding tools, is opening its public waiting list. What it does, what's changed, and the alpha caveats.
keyphrase: CPD portfolio app waiting list
author: "[[Michael Rowe]]"
date: 2026-07-16
updated: 2026-07-16
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
> Most CPD tools log activity and produce a submission at the end of a cycle. *[[Projects/path|Path]]* starts from a different question: against the standard you're actually working towards, what haven't you covered yet, and what would close the gap fastest? That's still the whole idea. What's changed is that it's now a real, working app — and I'm opening the waiting list.

A little over a month ago I wrote about [building Path over two weekends](Posts/2026-06-08-building-cpd-app) with Claude Code — a rough, Docker-based prototype that ran on my laptop and that I fully expected nobody else would manage to install. Since then it's been rebuilt from scratch as a proper web app, tested with real users, and used daily for my own promotion evidence. It's still alpha, still invite-only, but it's no longer a demo. I want more people to try it — starting with a waiting list.

## What Path actually does

Every professional framework — a regulator's CPD standard, a fellowship scheme, a promotion criterion — has the same underlying shape: a set of things you need to demonstrate. Path maps your work against that shape directly.

You pick a framework (or use Path's own generic career framework if you don't have one yet), and start a **path** — your attempt at it. As you go, you write **claims**: arguments, in your own voice, that you meet a specific criterion. You back each claim with **evidence** — documents, certificates, photos — and **CPD entries** and **reflections** that support it. Path then shows you a **coverage map**: which criteria are well evidenced, which are thin, and what the single highest-value next move is.

Evidence quality matters as much as evidence volume. Path uses [Miller's pyramid](https://en.wikipedia.org/wiki/Miller%27s_pyramid) to distinguish evidence that merely describes something ("knows") from evidence that demonstrates it in context ("shows how") or documents it as everyday practice ("does"). A pile of certificates gives you a record. Evidence weighted by level gives you a case.

## What's changed since the prototype

The June version was markdown files in a folder, running through Docker, with no real multi-user support — a proof that the model held together, not something you'd actually rely on. The current version is a proper hosted app: real accounts, private data enforced at the database level, a phone-friendly capture flow (photograph a certificate or jot a reflection on the spot, file it properly later), assessor share-links for getting feedback before something counts, and an automated accessibility pass against WCAG 2.2 across the app.

It's also been used in earnest, not just demoed. I've been building my own PFHEA D4 promotion case in it for weeks, and a small group of testers has been putting real portfolios through it since June.

## Why I'm opening a waiting list now, not general access

Path is still alpha. It's an independent project — my own personal-capacity build, not something offered with any institutional backing — and it's staying a small, invite-only pilot for now while I keep working through the rough edges. What's changing is that I'm no longer limiting who can express interest: if you want in when there's room, the [waiting list](https://pathcpd.com/waitlist) is now open, and you can also just [explore a demo](https://pathcpd.com/explore) without an account.

## The caveats, plainly

- **It's alpha software.** Features are still being added and refined, and things occasionally change or break. If you get access, export your work periodically — a one-click Markdown export of everything is built in for exactly this reason, so nothing is ever locked in.
- **It's invitation-only, on purpose.** There's no public sign-up. Accounts are created directly, one at a time, off the waiting list — I want to stay close to how it's actually being used while it's this early.
- **Your data is private and yours.** Everything you create is scoped to your account at the database level, never sold, never used for anything beyond running the service for you. If you delete your account, everything — content, files, and account information — is permanently removed.
- **Redact before you upload.** If your evidence touches clinical or patient-related material, that's on you to anonymise first. Path is built to hold evidence of your own practice, not identifiable records about the people you work with.
- **No institution stands behind this.** Path isn't run by, or on behalf of, any university, regulator, or employer. It's mine, built and operated independently.

## Join the list

If any of that sounds like what you've been missing from your own CPD or portfolio process, [join the waiting list](https://pathcpd.com/waitlist) — it takes under a minute, and tells me a little about what you're solving for, which shapes who I invite next.
