---
title: Progressive disclosure
description: A design principle where detail is revealed as it becomes relevant rather than presented all at once. In AI systems it is what lets an agent hold a large library of procedures while carrying only an index of them, and it moves the skilled work from writing the instructions to writing the descriptions.
aliases:
  - progressive disclosure of context
type: note
author: "[[Michael Rowe]]"
created: 2026-09-18
updated: 2026-09-18
draft: true
tags:
  - context-engineering
  - agent
  - information-retrieval
  - information-architecture
  - documentation
category:
  - Technology
  - Information management
related:
  - "[[Notes/agent skills]]"
  - "[[Notes/context engineering]]"
  - "[[Notes/harness-engineering]]"
  - "[[Notes/token budget]]"
  - "[[Notes/context drift]]"
  - "[[Notes/context window]]"
keyphrase: progressive disclosure AI context
linkedin:
---

> [!info] Hold the catalogue, fetch the book
> An AI agent can only keep so much in mind at once, and anything permanently loaded crowds out the work. Progressive disclosure splits the cost: a one-line description of each available procedure stays resident, and the full instructions load only when a task matches. The library can grow without limit because the index stays small.

## Progressive disclosure

**One-sentence definition:** A design principle in which information is revealed in stages as it becomes relevant, rather than presented in full at the outset — applied to AI agents, the practice of keeping only an index of available procedures in context and loading each one's detail on demand.

The term comes from interface design, where it describes hiding advanced options until someone needs them. Applied to AI systems it solves a harder constraint: everything an agent knows in a session competes for the same finite space, the [[Notes/context window|context window]], and anything you load permanently is paid for on every single exchange whether that exchange needed it or not. That sets a ceiling on how much a system can know how to do.

## The three stages

**Discovery.** At startup the agent loads only the name and description of each available [[Notes/agent skills|skill]] — a sentence or two apiece. Enough to know what exists and roughly when it applies; nothing more.

**Activation.** When a task matches a description, the agent reads that skill's full instructions into context. One item, at the moment it is needed.

**Execution.** The instructions may point further — to a reference document, a template, a script to run. Those open only if the work reaches them.

A skill on my own machine is a folder of seven files covering desktop configuration. None of it is in context until I ask about my desktop. What sits there permanently is one sentence. Multiply that across fifty skills and the arithmetic is the point: fifty sentences resident, one procedure loaded, forty-nine sets of instructions available and costing nothing.

## The skilled work moves to the index

This is the consequence people miss. If the agent decides what to fetch by reading descriptions, then the descriptions do the retrieval, and the quality of the whole system rests on them rather than on the instructions.

Which inverts the usual effort. Writing good instructions is the familiar craft — clear steps, worked examples, edge cases. Writing a good description is a different and less practised skill: it has to state the *conditions under which this applies*, in the words someone would actually use when the situation arises, without overclaiming so broadly that it fires on everything. A procedure with excellent contents and a vague description exists and is never found.

## The same shape, without the AI

The structure is not new and the reason it works has nothing to do with language models. A clinical protocol library has exactly this form: a one-page trigger list you can hold in your head, the protocol itself one step away, the evidence behind it one step further. So does a well-made programme handbook — the things that are always true up front, everything conditional held in documents you go to when the condition arises.

Most institutional documentation fails at the first stage rather than the third. The protocols exist and are good; what is missing is an honest index saying what exists and when each thing applies. That failure has the same effect on a person as on an agent: the material is present and never reached. Writing documentation for agents tends to expose it, which is a reasonable argument for doing so even where no agent is involved. See [[Notes/harness-engineering|harness engineering]].

## The failure is silent

Staged loading trades certainty for economy. An agent that holds everything always will never miss a relevant procedure; an agent that fetches on match will sometimes fail to recognise the match. The failure is silent — nothing announces that a skill did not fire — which makes it harder to notice than an agent doing the wrong thing loudly.

Where that matters, the answer is to remove the judgement rather than improve it: invoke the procedure yourself, explicitly, at the moment you know it is needed.

---

## Sources

- [Agent Skills overview](https://agentskills.io/)
- [Skills — Claude Code documentation](https://code.claude.com/docs/en/skills)
- Nielsen, J. (2006). Progressive disclosure. Nielsen Norman Group.

