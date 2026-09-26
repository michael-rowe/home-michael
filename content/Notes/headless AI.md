---
title: Headless AI
description: A headless AI model runs non-interactively, with no chat interface and no turn-based conversation. You pass it text, it returns output, and it exits. That means it can be one step in an ordinary script or run on a timer, so tasks like grouping module evaluation comments by theme can happen every week without anyone opening a chat window.
meta-description: "Automate AI tasks on a schedule: how a headless AI model runs from a script or timer, with no chat window, to sort module comments or draft a review."
aliases:
  - headless model
  - headless mode
type: note
author: "[[Michael Rowe]]"
created: 2026-03-08
updated: 2026-09-26
draft: false
tags:
  - language-model
  - ai-integration
  - agent
category:
  - Technology
related:
  - "[[Notes/Claude Code]]"
  - "[[Notes/agentic workflows]]"
  - "[[Notes/harness-engineering]]"
  - "[[Notes/ai-agents]]"
keyphrase: "automate AI tasks on a schedule"
linkedin:
reviewed:
  - note_writer
  - writing_style
  - SEO_optimiser
  - copy_editor
---

> [!info] Headless AI tools behave like command-line programs
> A headless AI model runs non-interactively: no chat interface, no back and forth. You pass it text, it returns output, and it exits. That makes it composable with any script or scheduler that already knows how to move data between programs.

## Headless AI

**One-sentence definition:** A headless AI model runs non-interactively, accepting input via standard input and returning output to standard output,[^stdio] with no persistent session or chat interface.

The term borrows from software architecture, where "headless" describes any system that runs without a user-facing interface. A headless model is a language model with the chat window taken away.

Most AI command-line tools, [[Notes/Claude Code|Claude Code]] among them, support this mode. You pipe text in,[^pipe] the model processes it, output comes back. From the operating system's perspective, this is indistinguishable from `cat`, `grep`, or `awk`[^tools] — a program that accepts input, does something with it, and returns output.

**What it enables:** composability. When AI behaves like a Unix tool,[^unix] it inherits decades of infrastructure built on that assumption — pipes, redirects, cron jobs, systemd timers,[^schedulers] shell scripts.[^shell] None of that infrastructure needs to know it's talking to a language model; it sees a program with defined inputs and outputs.

A script can query a knowledge base, pipe the results to a headless model for summarisation, and write the output to a file, on a schedule and without a human in the loop. The AI is doing one job, with clear inputs and predictable outputs.

### A Friday timer, and a spreadsheet of module comments

Every Friday at 13:00 a timer on my machine runs one line: it calls the AI tool with the instruction "review week 38". The tool gathers what changed in my notes that week, the papers I added to my library and the highlights from my reading, and writes a draft weekly review into my planning vault. I'm usually in a meeting. When I open the file later, I edit a draft rather than start from a blank page. The model wasn't running as a chat; it ran once, wrote one file, and stopped.

The same shape fits an educator's week. Module evaluation comments arrive as a spreadsheet export. A short script could take that file, pass the comments to a headless model with the instruction "group these by theme and quote one representative comment per theme", and save the result as a document next to the export — every Friday, for every module, without anyone opening a chat window. The judgement about what the themes mean and what to do about them is still yours; the model has only done the sorting.

The rest of the pipeline is ordinary, deterministic software: a timer fires, a script reads a file, a file is written. Nothing there is new or uncertain, and none of it needs the model to explain itself. The model is one step in the chain, and the only one whose output isn't fully predictable, which is a good reason to keep that step small and its instruction precise. [[Notes/harness-engineering|Harness engineering]] is the same idea at a larger scale: build the checks around the model so its output doesn't have to be trusted on its own.

### The model cannot ask for clarification

Headless mode gives up the back-and-forth that makes interactive AI useful for complex or ambiguous tasks. The model can't ask for clarification. It's the right approach when the task is well-defined, the input is structured, and the output format is predictable. For anything that requires iteration, an interactive session is the better tool.

---

## Notes

- Related to the [Unix philosophy](https://en.wikipedia.org/wiki/Unix_philosophy): do one thing well, accept input from pipes, write output to pipes
- Because it fits into ordinary scripts, AI-assisted automation doesn't need specialised software for coordinating AI agents

[^stdio]: **Standard input and standard output** — the two default channels every command-line program has: one it reads from, one it writes to. Because every program uses the same two channels, the output of one can become the input of the next. [Wikipedia](https://en.wikipedia.org/wiki/Standard_streams)
[^pipe]: **Pipe** — the `|` character, which connects the output of one program to the input of another, so `a | b` sends whatever `a` produces straight into `b`. [Wikipedia](https://en.wikipedia.org/wiki/Pipeline_(Unix))
[^tools]: **`cat`, `grep`, `awk`** — three standard command-line programs, each doing one small job: `cat` prints a file's contents, `grep` finds lines matching a pattern, `awk` reshapes text one line at a time. They are the canonical examples of programs that read input, do one thing and write output. [Wikipedia: cat](https://en.wikipedia.org/wiki/Cat_(Unix)), [grep](https://en.wikipedia.org/wiki/Grep), [AWK](https://en.wikipedia.org/wiki/AWK)
[^unix]: **Unix** — the family of operating systems, dating from 1969, that established the convention of small programs that read text in and write text out. Linux and macOS descend from it; the design is why the command line works the way it does. [Wikipedia](https://en.wikipedia.org/wiki/Unix)
[^schedulers]: **cron and systemd timers** — the two common ways to have a computer run a command on a schedule ("every Friday at 13:00") without anyone at the keyboard. [Wikipedia: cron](https://en.wikipedia.org/wiki/Cron), [systemd](https://en.wikipedia.org/wiki/Systemd)
[^shell]: **Shell script** — a plain-text file listing commands for the computer to run in order, so a sequence you would otherwise type by hand can be run with one instruction, or on a timer. [Wikipedia](https://en.wikipedia.org/wiki/Shell_script)
