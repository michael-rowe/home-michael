---
title: "Building a personal learning environment with MCP"
type: post
description: "Why I built a bespoke AI knowledge infrastructure from scratch, what MCP makes possible that nothing else did, and why the investment is worth it."
meta-description: ""
keyphrase: ""
author: "[[Michael Rowe]]"
tags:
  - model-context-protocol
  - information-management
  - context-engineering
  - obsidian
  - zotero
category: []
related:
draft: true
subtype: ""
enableToc: true
linkedin:
---

There is a version of this problem that sounds trivial: I have too many tabs open. I'm switching between Zotero and Obsidian and a browser window, copying and pasting, re-explaining context to an AI assistant that has no memory of what I told it ten minutes ago. Annoying, but manageable.

That's not the problem I was trying to solve.

The actual problem is this: I've been collecting information as part of my approach to scholarship for about fifteen years. Papers, books, articles, blog posts, podcasts — saved into Zotero, annotated in Readwise, turned into notes in Obsidian. The collection is large. Zotero holds around 10,000 items, of which roughly 4,500 are papers and books; Readwise holds nearly 19,000 documents; Obsidian contains thousands of personal notes accumulated across more than a decade of thinking about health professions education, AI, assessment, knowledge infrastructure. Some of those notes are developed arguments. Others are half-formed observations I knew I'd want to return to.

The problem is that I can't see inside this collection anymore. Not because the material is bad — but because there's too much of it, and the connections between things live in my head rather than in any system. When I'm working on a piece about evaluative judgement and AI, I know somewhere in that collection there are relevant things I've read and thought about that I'm not currently drawing on. I just can't find them. The speculative question — *what did I X years ago, that's kind-of related to this idea, and how does it help support and guide what I'm thinking now?* — doesn't get answered because the cost of trying is too high.

This is a problem of surfacing, synthesising, and connecting. Not of switching between tabs.

## Personal learning environments: an old aspiration

The idea that learners should own and assemble their own knowledge infrastructure has been circulating in educational technology - and in my head - since the mid-2000s. Stephen Downes, George Siemens, and others in the connectivism tradition sketched out a vision of personal learning environments — learner-assembled collections of tools, connected as the learner wanted, owned by the learner rather than the institution. The alternative to the monolithic VLE; the networked, self-directed learner in contrast to the managed student.

The vision was compelling. What actually existed was web 2.0 infrastructure: RSS readers, social bookmarking tools, wikis, e-portfolios, blog aggregators. Loosely connected, largely browser-based, hosted on other people's servers. It worked. I used it, and it was interesting in ways the institutional VLE never was. But it was never quite what the vision described, because you never owned any of it. The environment lived on other people's servers, subject to other people's decisions about what to build, what to keep, and when to shut it all down. Over the years I watched that happen repeatedly: tools I'd invested real time in were sunset without much notice — Google Reader is the one everyone remembers, but it was far from the only one — and the loose, generous network of academic Twitter, which for a while genuinely functioned as a personal learning environment, decayed into something I no longer wanted to rely on. Each loss took a piece of the infrastructure with it. The lesson accumulated slowly: anything hosted on someone else's terms is borrowed, not owned.

The first glimpse of something structurally different (at least, for me) arrived when I discovered [Obsidian](https://obsidian.md/). Local files. Your structure. Plain text, no proprietary format, no platform dependency. Everything running on your machine, owned by you in the most literal sense. Obsidian didn't solve the PLE problem, but it moved the fundamental architecture in the right direction.

What was still missing was a way to bring that local knowledge infrastructure into genuine conversation with an AI assistant — not by copying and pasting fragments into a chat window, but by giving the AI direct access to the sources, with enough structure to navigate them intelligently.

For a long time that stayed hypothetical. I'd toyed with the idea of building this kind of personal learning support, and the protocol for it — [MCP](link) — already existed. But the thing that actually made it real wasn't the protocol; it was the arrival of AI coding agents that run locally on my own machine, with direct access to my own files. That's the enabling shift, and it's worth being clear that the protocol described below sits on top of it rather than the other way round. Once an agent could see my context without my having to upload any of it, the rest became a question of giving it the right tools.

## What MCP is

[MCP](link) — Model Context Protocol — is a standard for extending what an AI assistant can access. The core idea is simple: a small program called a *server* exposes named tools (search my Zotero library, read a note, look up a tag); the AI assistant acts as a *client*, connecting to one or more servers and deciding which tools to call based on the task; a shared *protocol* handles the communication between them.

The structural property that makes this interesting is that servers don't know about each other. The AI orchestrates. If you have a Zotero server and an Obsidian vault server, neither is aware of the other's existence — Claude connects to both and decides which to call. Adding a new source means writing a new server, or adding a new module to an existing one — a module being a single self-contained file that teaches the server about one more source. Nothing else needs to change.

This is what I've called the `commonplace` server — after the [commonplace book](link), the personal knowledge repository that scholars kept for centuries before digital tools existed. The name isn't decoration. For most of the time I've used Obsidian I've called my vault my commonplace vault, because that's literally how I think of those notes — and the habit goes back further than that, to the physical notebooks I've kept since I was a teenager. A commonplace book was a place to collect, connect, and return to things that mattered. That's exactly what this system is for.

Two properties of MCP are worth naming because they're not obvious from most writing about it, which comes almost entirely from developers thinking about enterprise workflows.

The first is that MCP is a *container* as much as a protocol. The server doesn't just expose data — it exposes tools and, separately, instruction files (called personas or CLAUDE.md files) that tell the AI *how* to use those tools. A Claude Command — a saved instruction file in [Claude Code](link) that bundles a task with the tools it may use and guidance on how to use them — can specify which tools are available, in what order to call them, and what kind of reasoning to apply to the results. This is the layer that turns a collection of tools into a working environment.

The second is model agnosticism. The server doesn't care which AI client is calling it. Right now this runs through [Claude Code](link). It could run through a different model tomorrow, or eventually through a local model running on my own machine. The infrastructure is not tied to any particular AI service. The investment persists regardless of which model is in the loop.

There's also the idea that I want to be in control. I want this to live on my machine so that I can extend it as I come across new ideas. I don't want to be beholden to someone else deciding that a feature needs to be supported; if I want the feature, I can add it.

## Why build rather than adopt

The honest answer is that I'm not aware of anyone doing exactly this — building a bespoke MCP server around a personal research and note-taking stack, with the specific goal of surfacing and synthesising accumulated thinking. There are commercial tools that connect AI to reference managers, and there are generic MCP servers for various services. None of them are built for the specific combination of sources I use, structured around my intellectual territory, and tuned to the kinds of queries I actually want to run.

Could something similar be done with scripts? Probably, partially. A script could query Zotero and return results. What it can't do is participate in a conversation — receiving a result, evaluating it, deciding the query needs refinement, calling the tool again with different parameters, and synthesising across multiple sources in a single response. MCP gives you a standard protocol that any compatible AI client can use; scripts give you a one-off solution tied to a particular tool and workflow.

The other reason for building is incremental tractability. You don't need a finished system before you start. The Zotero module was useful on the day it was completed, before any vault tools existed. Each addition builds on what's already working. You commit to a direction, not a destination.

## What makes this a personal learning environment

It's worth being precise about why this counts as a *personal learning environment* and not just a pile of scripts. A PLE, in the sense the term has long carried, is a learner-centred system that configures tools and processes — informed by how learning actually works — to help form associations between things that didn't obviously connect. Its purpose isn't storage or recall; it's creativity and idea generation. I've found it useful to think about a PLE at three levels: *why* (the purpose), *how* (the processes that move the right material through the system), and *what* (the platforms, kept as few as possible). A handful of properties of this architecture are what let it work at all three levels:

**Incremental.** One source at a time, each working immediately. The first module took a week of intermittent work. The second took less.

**Composable.** Once multiple sources are connected, queries span them. "What have I written about evaluative judgement, and what papers in my Zotero library does that connect to?" is now a single turn in a conversation, drawing on both my vault notes and my reference library simultaneously.

**Persistent.** Configured once, available in every conversation. The AI doesn't need to be re-introduced to the library; the context is always there. A standing instruction file — a `CLAUDE.md` the agent reads at the start of every session — carries the conventions and priorities that don't change from one conversation to the next, so they never have to be restated.

**Model-agnostic.** The server doesn't know or care which client is calling it. This matters more than it might seem — it means the infrastructure built here doesn't become obsolete if I change which AI tool I'm working with. It also means I could plausibly replace a frontier commercial model with a local open source one.

**Extensible.** Anything with an API or readable files can become a tool. Browser history, calendar, published writing — any of these could be added as a new module without touching anything that already exists.

## Context sovereignty

There's a deeper motivation running through all of this that I want to name directly, because it shapes every decision that follows.

When you work with an AI assistant in the default way — a chat interface — the context it has is whatever you paste in, plus its training data. That picture has softened a little: the major platforms now offer "memory" that persists across chats, and connectors that reach into your email, files, and calendar. But that context lives in someone else's account, on someone else's terms, and it draws you into exactly the kind of walled garden the personal learning environment was meant to avoid. You gain convenience and give up ownership — and you have to trust the platform with a widening view of your work. The model still knows a great deal in general; what it now knows specifically about you is held somewhere you don't control.

[Context sovereignty](link) — a framework I've developed at length elsewhere — is the principle that you, not the platform, should control the meaning-making environment an AI works within. It's a deliberate step beyond *data* sovereignty: data sovereignty asks who controls your information; context sovereignty asks who controls the frameworks, values, and priorities that decide what that information *means*. The most valuable context you bring to any AI interaction is irreducibly personal — your intellectual commitments, your professional identity, your sense of what matters and why. No one else can supply it, and no model can generate it from the outside, however large its context window or however good its memory. That last point matters: this isn't a problem better model memory solves. A model that perfectly remembered everything you'd ever said to it would still not possess the frameworks through which you make sense of things — unless you had deliberately built and handed it that context yourself. Which is exactly what building this system is.

This has practical implications that run through all of this work. The work of building the server, curating the library, writing personal tags, scoring items for relevance — all of it is an act of defining context. Every decision about what to keep or discard, how to tag something, what counts as in-scope for your research territory — these are decisions about what the system should attend to on your behalf. The AI amplifies those decisions. If they're good, the amplification is useful. If the library is full of irrelevant items with no metadata, the amplification is noise.

## What this covers

This post is the conceptual entry point. The work that follows is more technical and specific — building the Zotero connection, auditing and improving library metadata, scoring 4,460 items for relevance, connecting the Obsidian vault, and showing what the completed infrastructure actually enables in practice — written up across a set of related posts.

A few things to know before continuing. None of the code in this work was written by hand — all of it was built through [Claude Code](link) by describing what I wanted and directing the process. You don't need a development background to follow along or to build something similar. The total financial cost across all the AI processing was a few pounds. The time cost was more significant — several weeks of intermittent work, much of it on the library itself rather than the infrastructure. And the most important work wasn't the building at all; it was conceptual — working out how the pieces should relate, what the system was actually for, and what "useful" should mean for my particular territory, before any code was written. The code was the easy part to delegate. The design was not.

What you end up with isn't a polished product. It's a bespoke knowledge infrastructure shaped by your specific intellectual territory, which gets more useful the more you invest in it. That's a different kind of thing from a plugin you install — and in my view, a more interesting one.
