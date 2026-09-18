---
title: Claude code
description: Anthropic's command-line agent — a language model that reads, edits and runs commands across a folder of files on your own machine rather than answering in a chat window.
aliases:
  - Claude CLI
type: note
author: "[[Michael Rowe]]"
created: 2026-02-12
updated: 2026-09-17
draft: false
tags:
  - agent
category: Technology
related:
  - "[[Notes/large-language-models]]"
  - "[[Notes/model-context-protocol]]"
  - "[[Notes/system-prompt]]"
  - "[[Notes/mcp-server]]"
keyphrase: agentic AI tools for academic work
linkedin:

---

> [!info] Claude Code is a language model that works in your files, not in a chat box
> Claude Code runs in a terminal, with access to the folder you point it at. Given a task, it reads what's there, works out what to change, edits the files and runs the checks — then reports back. It was built for programmers and turns out to be just as useful on a folder of curriculum documents, meeting notes or a manuscript, because all of those are text.

## Claude Code

**One-sentence definition:** Claude Code is an agentic command-line tool from Anthropic in which a language model plans and carries out multi-step work across a local set of files — reading, writing, searching and executing commands — under a user's direction.

The difference from a chat interface is where the context comes from. In a chat window you paste in what the model needs to see. Claude Code is *in* the folder: it can list files, search across them, read the ones that matter and change them directly. That makes tasks possible that a chat can't sensibly do — apply a new frontmatter schema across four hundred notes, find every module specification that doesn't mention a standard, cross-check a reference list against a bibliography — because the tool does the reading rather than the person doing the pasting.

It's an [[Notes/ai-agents|agent]] in the specific sense: it runs a loop of plan, act, observe and adjust until the task is done or it needs a decision from you. It reads a `CLAUDE.md` file in the folder for standing instructions, which is where the conventions of a project live — what the files are, how they're named, what must never be changed — and that file is the difference between an agent that does what you meant and one that does what you said. See [[Notes/harness-engineering|harness engineering]] and [[Notes/context engineering|context engineering]].

### What it is doing behind this site

Everything behind this site is run this way: the planning vault, meeting summaries, the checks that catch broken metadata, the drafting and reviewing of posts. A typical instruction is a sentence — *find the meetings this month that still need a summary and write one for each from the transcript in the cache* — and the work is done in the files, visible in version control, reviewable line by line. O'Connor et al. (2026) ask whether nurses and midwives should be learning about agents like this; the answer implied by the tooling is that anyone whose work lives in documents already has a use for it.

### What it asks of you

An agent that can change hundreds of files in a minute needs a person who can tell whether it should have. That's evaluative judgement rather than technical skill: knowing what good looks like in your own domain, specifying it clearly, and reviewing what comes back rather than accepting it. The failure mode has a name — [[Notes/vibe-coding|vibe coding]] — and the safeguard is the same as with any delegation: a clear brief, plain-text material the agent can actually read ([[Notes/plain text|plain text]], [[Notes/markdown|markdown]]), and version control so that every change can be seen and undone.

---

## Sources

- Anthropic. (2025). Claude Code overview. https://docs.claude.com/en/docs/claude-code/overview
- O'Connor, S., Zhang, M., Hui, V., et al. (2026). The era of agentic AI: Should nurses and midwives learn about vibe coding and AI agents for better health and care? *Nurse Education in Practice*.
- Rowe, M. (2026). [[Essays/documentation-as-infrastructure|Documentation becomes infrastructure when AI agents are the readers]].
