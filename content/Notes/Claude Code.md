---
title: Claude Code
description: Anthropic's AI agent that works in a folder of files on your own machine, reading, editing, and checking them under your direction instead of answering in a chat window.
aliases:
  - Claude CLI
type: note
author: "[[Michael Rowe]]"
created: 2026-02-12
updated: 2026-09-17
draft: false
tags:
  - agent
  - educational-technology
category: Technology
related:
  - "[[Notes/ai-agents]]"
  - "[[Notes/agentic workflows]]"
  - "[[Notes/harness-engineering]]"
  - "[[Notes/context engineering]]"
  - "[[Notes/large language models]]"
  - "[[Notes/model context protocol]]"
  - "[[Notes/system prompt]]"
  - "[[Notes/mcp server]]"
  - "[[Notes/headless AI]]"
keyphrase: Claude Code for educators
meta-description: "Claude Code for educators: an AI agent that reads, edits, and checks a folder of files on your own machine, from module handbooks to reference lists."
reviewed:
  - note_writer
  - writing_style
  - SEO_optimiser
  - copy_editor
linkedin:

---

> [!info] Claude Code brings the model into your files
> Claude Code runs in a terminal,[^terminal] with access to the folder you point it at. Given a task, it reads what's there, works out what to change, edits the files, runs the checks, and reports back. It was built for programmers and turns out to be just as useful for educators, on a folder of curriculum documents, meeting notes, or a manuscript, because all of those are text.

## Claude Code

**One-sentence definition:** Claude Code is an agentic command-line tool from Anthropic in which a language model plans and carries out multi-step work across a local set of files — reading, writing, searching, and executing commands under a user's direction.

The difference from a chat interface is where the context comes from. In a chat window you paste in what the model needs to see. Claude Code is *in* the folder: it can list files, search across them, read the ones that matter, and change them directly. That makes possible tasks a chat can't sensibly do, such as applying a revised template to forty module handbooks, finding every module specification that doesn't mention a standard, or cross-checking a reference list against a bibliography, because the tool does the reading and nobody has to paste anything in.

It's an [[Notes/ai-agents|agent]] in the specific sense: it runs a loop of plan, act, observe, and adjust until the task is done or it needs a decision from you. It reads a `CLAUDE.md` file in the folder for standing instructions, which is where the conventions of a project live: what the files are, how they're named, and what must never be changed. That file is the difference between an agent that does what you meant and one that does what you said. See [[Notes/harness-engineering|harness engineering]] and [[Notes/context engineering|context engineering]].

### How this site is built

This site was built with Claude Code. Quartz[^quartz] supplies the foundation, and everything on top of it was written by Claude Code working under my direction: the page layouts, the scripts that catch broken metadata and links, and the review pipeline every note and post goes through, this one included. The same tool runs the planning and meeting notes behind the site, some of it on a timer with nobody at the keyboard, in [[Notes/headless AI|headless mode]]. A typical instruction is a sentence, such as *find the meetings this month that still need a summary and write one for each from the transcript in the cache*, and the work is done in the files, where [[Notes/distributed version control|version control]] shows every change line by line.

O'Connor et al. (2026) ask whether nurses and midwives should be learning about agents like this. Anyone whose work lives in documents — handbooks, portfolios, assessment briefs, placement records — already has a use for one.

### What Claude Code asks of educators

An agent that can change hundreds of files in a minute needs a person who can tell whether it should have. It takes evaluative judgement more than technical skill: knowing what good looks like in your own domain, specifying it clearly, and reviewing what comes back before accepting it. Skipping that review is [[Notes/vibe-coding|vibe coding]], and the safeguard is the same as with any delegation: a clear brief, material in [[Notes/plain text|plain text]] or [[Notes/markdown|markdown]] that the agent can actually read, and version control so that every change can be seen and undone.

[^terminal]: **Terminal**: a window where you give the computer instructions by typing them as text, instead of clicking on icons; also called the command line. [Command-line interface](https://en.wikipedia.org/wiki/Command-line_interface) on Wikipedia.

[^quartz]: **Quartz**: an open-source static site generator, a program that turns a folder of plain-text notes into a website. [Quartz documentation](https://quartz.jzhao.xyz/).

---

## Sources

- Anthropic. (n.d.). *Claude Code overview*. Claude Code Docs. Retrieved September 24, 2026, from https://code.claude.com/docs/en/overview
- O'Connor, S., Zhang, M., Hui, V., Chen, L.-Y. A., Delgado, J., Chu, C. H., Ronquillo, C. E., Gosak, L., Wicks, D., White, P., Caton-Peters, H., & Blake, N. (2026). The era of agentic AI: Should nurses and midwives learn about vibe coding and AI agents for better health and care? *Nurse Education in Practice*, *93*, Article 104837. https://doi.org/10.1016/j.nepr.2026.104837
- Rowe, M. (2026). [[Essays/documentation-as-infrastructure|Documentation becomes infrastructure when AI agents are the readers]]. /home/michael.
