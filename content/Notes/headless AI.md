---
title: Headless AI
description: A headless AI model runs non-interactively — no chat interface, no conversation. You pass it text, it returns output, and it exits. This makes AI tools composable with the same scripts and schedulers that have coordinated Unix processes for decades.
aliases:
  - headless model
  - headless mode
type: note
author: "[[Michael Rowe]]"
created: 2026-03-08
updated: 2026-03-08
status: draft
draft: false
tags:
  - language-model
  - ai-integration
  - agent
category: Technology
related:
keyphrase: "headless AI model"
slug: notes/headless-ai
linkedin-status: "—"
---

> [!info] Headless AI tools behave like Unix commands — composable by design
> A headless AI model runs non-interactively: no chat interface, no back and forth. You pass it text, it returns output, and it exits. That makes it composable with any script or scheduler that already knows how to move data between processes.

## Headless AI

**One-sentence definition:** A headless AI model runs non-interactively, accepting input via standard input and returning output to standard output, with no persistent session or chat interface.

The term borrows from software architecture, where "headless" describes any system that runs without a user-facing interface. Applied to language models, it means the same thing: the model processes a request and exits rather than maintaining a conversation.

Most AI command-line tools support this mode. You pipe text in, the model processes it, output comes back. From the operating system's perspective, this is indistinguishable from `cat`, `grep`, or `awk` — a process that accepts input, does something with it, and returns output. That's it.

**What it enables:** composability. When AI behaves like a Unix tool, it inherits decades of infrastructure built on that assumption — pipes, redirects, cron jobs, systemd timers, shell scripts. None of that infrastructure needs to know it's talking to a language model. It just sees a process with defined inputs and outputs.

A script can query a knowledge base, pipe the results to a headless model for summarisation, and write the output to a file — all without a human in the loop, all on a schedule. The AI is doing one job, with clear inputs and predictable outputs.

### What it doesn't do

Headless mode gives up the back-and-forth that makes interactive AI useful for complex or ambiguous tasks. The model can't ask for clarification. It's the right approach when the task is well-defined, the input is structured, and the output format is predictable. For anything that requires iteration, an interactive session is the better tool.

---

## Sources

-

---

## Notes

- Related to the Unix philosophy: do one thing well, accept input from pipes, write output to pipes
- The composability this enables is what makes AI-assisted automation practical without AI-native orchestration frameworks
