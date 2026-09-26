---
title: Harness engineering
description: Harness engineering is the practice of building the full architectural scaffolding within which AI agents operate — structured documentation they can reason with, constraints that enforce invariants, and feedback loops that let them know when they've succeeded. It is distinct from prompt engineering, which shapes individual tasks, and from oversight, which monitors outputs after the fact. The harness is the infrastructure that makes delegation coherent at scale.
meta-description: "Harness engineering vs prompt engineering: why AI agents need documentation, constraints, and automatic checks as well as well-written instructions."
type: note
author: "[[Michael Rowe]]"
created: 2026-03-03
updated: 2026-09-26
draft: false
tags:
  - agent
  - context-engineering
  - prompt-engineering
  - information-management
  - academic-practice
category:
  - Technology
related:
  - "[[Notes/ai-agents]]"
  - "[[Notes/agentic workflows]]"
  - "[[Notes/vibe-coding]]"
  - "[[Notes/research harness]]"
  - "[[Notes/context engineering]]"
  - "[[Notes/documentation debt]]"
  - "[[Posts/2026-02-26-ai-agents-academic-workflow]]"
  - "[[Posts/2026-03-03-ai-agent-governance-higher-education]]"
keyphrase: "harness engineering vs prompt engineering"
linkedin:
reviewed:
  - note_writer
  - writing_style
  - SEO_optimiser
  - copy_editor
---

> [!info] A harness sets the conditions agents work within
> Harness engineering is the work of building what an AI agent operates inside: documentation it can find its way through, constraints that hold whatever it's asked to do, and checks that tell it when it has succeeded. It sits between prompt engineering, which shapes a single task, and oversight, which reviews the results afterwards, and it's what makes it possible to hand agents a steady stream of work and trust what comes back.

## Harness engineering

**One-sentence definition:** Harness engineering is the practice of building the architecture — structured documentation, enforced constraints, and feedback mechanisms — within which AI agents operate reliably without requiring continuous human supervision of individual decisions.

The term comes from software engineering. Ryan Lopopolo, writing about building a product with coding agents at OpenAI, described the harness as the difference between handing an agent a task and building the conditions under which the agent can work productively over time. As he put it, "building software still demands discipline, but the discipline shows up more in the scaffolding rather than the code" (Lopopolo, 2026).

The harness has four components:

**Agent-legible documentation** — structured material that agents can navigate as well as search. An agent can only work with what it can see, so anything outside its reach might as well not exist. The analogy is a table of contents, which tells the agent where to look so that it reads only what the task in front of it needs.

**Architectural constraints** — rules the system enforces on every task, so they don't have to be renegotiated each time. These are invariants[^invariant]: boundaries that hold however the agent interprets a given instruction. They narrow the range of decisions the agent can make, which makes it more reliable and its outputs easier to evaluate.

**Feedback loops** — mechanisms that tell the agent whether its output met the goal. Human review is one of them. Computable success criteria, such as tests, validators, and checks that run automatically, close the loop without a person having to evaluate every output.

**Garbage collection**[^garbage-collection] — recurring clean-up that clears away accumulated semantic and structural debt. Without it, quality degrades silently as edge cases pile up, the agent-era version of [[Notes/documentation debt|documentation debt]].

---

### How harness engineering differs from prompt engineering and oversight

[[Notes/prompt engineering|Prompt engineering]] works at the level of individual instructions, and the harness is the environment those instructions are given in. A well-crafted prompt inside a weak harness will still produce inconsistent results across parallel workstreams.

Oversight, in the conventional sense, is retrospective: it catches problems after they occur. A harness works in advance, setting up conditions so that the range of possible outputs is bounded before work begins. Governance built only on oversight scales poorly with the number of agents running in parallel, while governance built on a harness scales with the architecture.

### What it requires in higher education

At the individual level, the [[Posts/2026-03-01-working-effectively-with-ai-agents|three prerequisites for effective agent-first workflows]] — a plan before handoff, documentation treated as infrastructure, and domain expertise sufficient to evaluate outputs — constitute an informal harness. They work because one person holds the architectural constraints in their head. The [[Notes/research harness|research harness]] makes the same thing explicit for a single doctoral project, as a specification negotiated between candidate and supervisor.

That arrangement breaks down at institutional scale, because multiple people directing agents without shared constraints produce compounding drift that no individual reviewer can track. The institutional equivalent requires the harness to be externalised: shared documentation structured for agent consumption, quality criteria written as computable rules, and feedback mechanisms that close the loop across parallel workstreams rather than within a single working session.

This is what [[Posts/2026-03-03-ai-agent-governance-higher-education|computable governance]] points towards: rules written so that a system can check work against them, where today they depend on committees interpreting them. That makes governance a question about architecture as much as about policy.

A midwifery programme team that asks an agent to redraft its module descriptors after the regulator revises its standards shows what the externalised version looks like. The documentation is the revised standards, the programme's descriptor template, and the current curriculum map, held where the agent can read them. The constraints are rules the team already works to — every outcome maps to at least one standard, every outcome is assessed somewhere, outcomes use the agreed verbs and stay within the word limit — written down as checks instead of carried in the programme lead's head. The feedback loop is a validator that runs those checks on every draft, so the team can spend its review time on whether the outcomes are right for the profession.

---

## Sources

- Lopopolo, R. (2026, February 11). *Harness engineering: Leveraging Codex in an agent-first world*. OpenAI. https://openai.com/index/harness-engineering/

---

## Notes

- See [[Notes/agentic workflows|agentic workflows]] for the broader context on agent-first working patterns.
- [[Notes/vibe-coding|Vibe coding]] is the failure mode a harness is designed to prevent, and an institution whose staff direct agents without a shared harness risks the same failure across every workstream at once.

[^invariant]: **Invariant.** A condition that must stay true whatever else changes. In a programme, "every learning outcome is assessed at least once" is an invariant: modules can be rewritten and assessments swapped, but a change that leaves an outcome unassessed is rejected. See [Invariant (mathematics)](https://en.wikipedia.org/wiki/Invariant_(mathematics)).

[^garbage-collection]: **Garbage collection.** In programming, the automatic clearing away of data a program no longer uses. Lopopolo borrows the term for background tasks that run on a schedule, look for places where agents have drifted from the project's agreed rules, and propose fixes. See [Garbage collection (computer science)](https://en.wikipedia.org/wiki/Garbage_collection_(computer_science)).
