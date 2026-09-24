---
title: Agentic workflows
description: "The human role in agentic workflows: agents handle execution while humans decide what should be made, define what good looks like, and judge the results."
aliases:
  - agentic
type: note
author: "[[Michael Rowe]]"
created: 2026-02-26
updated: 2026-09-24
draft: false
tags:
  - agent
  - ai-integration
  - academic-practice
category:
  - Technology
related:
  - "[[Notes/ai-agents]]"
  - "[[Notes/Claude Code]]"
  - "[[Notes/context engineering]]"
  - "[[Notes/documentation debt]]"
  - "[[Notes/plain text]]"
  - "[[Notes/markdown]]"
keyphrase: human role in agentic workflows
reviewed:
  - note_writer
  - writing_style
  - SEO_optimiser
  - copy_editor
linkedin:
---

> [!info] Agents take the execution and human work moves up a level
> Agentic workflows change the *kind* of work you do more than the amount of it. The human contribution shifts from producing outputs to defining what should be produced and judging whether it meets the bar.

## Agentic workflows

**One-sentence definition:** A mode of working in which AI agents handle the execution layer — drafting, searching, formatting, restructuring — while the human operates at the direction layer, deciding what *should* be made, defining what good looks like, and evaluating outputs against that standard.

"Agentic workflows" distinguishes this mode of working from AI-assisted work, where a human does the doing and AI helps at the margins. In agentic workflows, the relationship is inverted: agents do the doing, and the human directs, reviews, and redirects. The analogy is closer to editorial or managerial work than to writing or research in the traditional sense.

In AI engineering the term usually names the system side of this arrangement: a model working in loops of planning, tool use,[^tool-use] and checking its own output instead of answering in one pass (Ng, 2024). This note is about the human role in agentic workflows: what a person's work becomes once [[Notes/ai-agents|AI agents]] running those loops take on the execution.

Delegation is as old as knowledge work, and so are the management layers that come with it. What's new is that the direction layer is now available to an individual: one person can coordinate several agents working in parallel across different projects, which used to take a team.

## The two layers

**The execution layer** covers the tasks agents can increasingly handle: drafting text, searching and synthesising sources, reformatting documents, restructuring arguments, generating code, and running checks across large sets of files. None of them is trivial, and capable agents now do many of them well.

**The direction layer** covers what remains distinctly human. Beyond deciding what should exist and what good looks like, it includes specifying the constraints and values that shape the work. Taste and domain expertise matter most here, because the work at this layer is judging.

Annual programme monitoring shows the split. The execution layer is collating module evaluations, pulling out recurring student comments, checking that every learning outcome still maps to an assessment, and drafting the report. The direction layer is deciding what the review needs to show the external examiner,[^external-examiner] what would count as evidence that last year's changes worked, and whether the draft's reading of the student comments is fair to the students who wrote them. An agent can do most of the first list relatively quickly (compared to how long it would take a person). The second list is where the programme lead's judgement goes, and it doesn't necessarily get smaller because the agent did the preliminary work.

## What the shift requires

Adopting AI tools doesn't produce agentic workflows on its own. They depend on conditions that are easy to underestimate:

- **Structured context**: agents work well when they have documented frameworks, processing rules, and exemplars to work with. Context built up over time — in the form of organised notes, explicit frameworks, and articulated standards — is what allows a direction-layer instruction to produce a useful output rather than a generic one. See [[Notes/context engineering|context engineering]].
- **Plain text habits**: agents work most reliably with content that is machine-readable. Documents in proprietary formats have to be converted first, and whatever the conversion loses, the agent never sees (note that this is changing quickly, as connectors and tools allow agents to more easily use a wide range of documents). See [[Notes/plain text|plain text]] and [[Notes/markdown|Markdown]].
- **Domain expertise and taste**: the direction layer depends on evaluating outputs critically: knowing when something is wrong or merely plausible, and redirecting with precision. That judgement comes only from expertise in the domain.

## The attentional constraint

In agentic workflows the human constraint is attention more than knowledge or capability. Managing one agent running on a well-specified task is straightforward. Managing two or three in parallel on different projects, while keeping direction coherent across all of them, is cognitively demanding. In my own work, three is doable, but four or more is where I start to lose the thread.

This constraint has implications at every scale. At the individual level, it sets a practical ceiling on parallel workstreams. At the institutional level, it becomes a coherence problem: how do you keep direction consistent across many people managing many agents, each introducing variation at every step?

I think this is an important conversation that most organisations have not yet begun.

[^tool-use]: **Tool use**: an AI model calling other software to get something done, such as searching a library database, running a calculation, or opening and editing a file, and then reading the result before deciding what to do next. It's what lets an agent act instead of only replying. [Wikipedia: AI agent](https://en.wikipedia.org/wiki/AI_agent)
[^external-examiner]: **External examiner**: in higher education, an academic from another institution appointed to check that a programme's assessment is fair and its standards comparable with similar programmes elsewhere. Their annual report is one of the main things programme monitoring responds to. [Wikipedia](https://en.wikipedia.org/wiki/External_examiner)

## Related concepts

- [[Notes/ai-agents|AI agents]]: what an agent is, and how it differs from an assistant
- [[Notes/context engineering|Context engineering]]: building the structured knowledge systems that agentic workflows depend on
- [[Notes/documentation debt|Documentation debt]]: what accumulates when context is not maintained
- [[Notes/Claude Code|Claude Code]]: one example of an agentic tool operating through the command line
- [[Essays/documentation-as-infrastructure|Documentation as infrastructure]]: the institutional implications of agentic workflows at scale

---

## Sources

- Ng, A. (2024, March 20). *Four AI agent strategies that improve GPT-4 and GPT-3.5 performance*. The Batch. https://www.deeplearning.ai/the-batch/how-agents-can-improve-llm-performance/
