---
title: I couldn't explain the difference between skills and commands
type: post
description: A conversation exposed a gap — I have built a stable of AI commands without being able to say what distinguishes them from skills. Working it out produced something more useful than the answer — four questions that place every feature of every AI tool, whatever the vendor decides to call it this year. A worked example from my own system, and what it looks like mapped onto a professional programme.
meta-description: Skills, commands, gems, GPTs, projects — four questions that place every AI tool feature, whatever the vendor calls it.
keyphrase: AI skills vs commands
author: "[[Michael Rowe]]"
date: 2026-09-18
updated: 2026-09-18
tags:
  - context-engineering
  - agent
  - ai-integration
  - operational-architecture
  - ai-literacy
category:
  - Technology
related:
  - "[[Notes/agent skills]]"
  - "[[Notes/progressive disclosure]]"
  - "[[Notes/harness-engineering]]"
  - "[[Posts/2026-02-14-context-engineering-for-educators]]"
  - "[[Posts/2026-03-01-working-effectively-with-ai-agents]]"
draft: true
subtype: field-note
enableToc: false
linkedin:
---

Yesterday someone asked me about Claude's skills and I realised I couldn't tell them how a skill differs from a command. This is mildly embarrassing, because I have built about twenty commands and use several every week. I knew how to make the thing work. I did not know what the thing was.

So I went and found out, and the answer turned out to be smaller and more useful than I expected.

## The difference is one sentence long

A command and a skill are both a [[Notes/markdown|Markdown]] file: some configuration at the top, then instructions written in ordinary prose. When either one runs, the file's contents drop into the conversation and the model does what they say. Nothing compiles. Nothing executes.

The difference is who decides to invoke it.

A command fires when I type its name. `/scribe` takes a meeting transcript, matches it to the right note, and writes the summary in. It never runs unless I ask, and it always runs when I do.

A skill fires when the *agent* thinks it is relevant. Its configuration includes a description of when it applies, the agent keeps that one line in mind, and loads the full instructions when the task looks like a match. I get the procedure without having to remember it exists — and I sometimes get it when I didn't want it, or don't get it when I did.

That's the whole distinction. Anthropic has since merged the two formats: the same file now produces both behaviours, with a setting that decides who holds the trigger. They were never two kinds of thing.

## Why the small answer is the useful one

Once the difference is stated that plainly, it stops being about Claude. Every AI system has to answer the same questions, and the names are just branding. Four questions place everything:

**What does it always know?** The instructions loaded on every single exchange — identity, conventions, constraints. `CLAUDE.md` in my setup; `AGENTS.md` in OpenAI's Codex; custom instructions in the ChatGPT and Gemini apps. This layer is expensive: you pay for it on every turn, so it should hold only what's true of all the work. Most people's first instinct is to put everything here, and it's the most common way these systems go wrong.

**What can it look up, and who decides?** Procedures held in an index and fetched when relevant. This is what a [[Notes/agent skills|skill]] is, and the mechanism is worth understanding: at startup the agent loads only each skill's name and one-line description, then reads the full instructions only when a task matches. The library can be enormous because the catalogue is tiny — [[Notes/progressive disclosure|progressive disclosure]], and the reason a large library stays affordable. Which means the description does the work — a brilliant procedure with a vague description is a book with no catalogue entry.

**What can I fire deliberately?** The procedures where I am the one who knows when they're needed. `/recall` builds my weekly review. `/oracle` lays out next week. I don't want these to be a judgement call.

**What can it reach?** A separate axis, and the one people think about least. The first three are all *knowledge* — what the agent knows to do. Reach is *capability*: my reference library, my calendar, my files, the web — usually wired up through [[Notes/model context protocol|MCP]]. An instruction to do something the agent can't touch is a well-written instruction to do nothing.

## What I found when I asked the questions of my own system

I'd been running the first three layers for a year without names for them, which is why I couldn't explain any of it.

The surprise was the middle layer. I have about two dozen files I call personas — one holds my writing voice, one turns transcripts into minutes, one reviews a draft for structure — and I retrieve them with a two-letter command when the work calls for one. I built a skills library by hand before the format existed. The only thing mine lacks is the agent noticing for itself. That's not a gap I'm in a hurry to close: for writing in my own voice, I'd rather hold the trigger.

That's the payoff of having the model. It converts *which feature should I use?* into *do I know when this is needed, or does the system?* — which is a question about the work, not about the software.

## The same shape, in a programme

Map the four questions onto something you already run.

A physiotherapy programme has standing context: the handbook every student and educator carries, the professional standards, the things that are true across all of it. It has retrievable procedure: the placement protocol you look up when a specific situation arises, indexed by when it applies rather than read cover to cover. It has invoked workflow: the fitness-to-practise process, which somebody starts, deliberately, at a moment they can point to. And it has reach: who can actually see the student record, contact the placement provider, sign the form.

You already know what goes wrong when these blur. Procedure stuffed into the handbook, where nobody finds it. A process that runs differently depending on who's running it. Someone with the responsibility but not the system access. Configuring an AI system badly produces exactly the same failures, for the same reasons, and the layers are the diagnosis.

## The bit that will date

Almost everything specific here has a short shelf life. In the eight months to September 2026, the skill format went from one vendor's feature to an open specification supported by Codex, Gemini CLI, Copilot, Cursor and a few dozen others; ChatGPT shipped its own Skills to business accounts in July; the merge of commands and skills in Claude Code happened somewhere in the middle. Some of that will be wrong by the time you read it.

The four questions won't be. They're a property of the problem — an agent needs to know some things always, look up others, be told when to act, and be able to reach the world — not of anyone's product. When the next tool arrives with a new vocabulary, the questions are how you work out what you're looking at in about five minutes.

I just wish I'd been able to say that yesterday.

