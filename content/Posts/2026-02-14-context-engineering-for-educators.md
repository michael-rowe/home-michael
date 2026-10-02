---
title: "Context engineering for educators: infrastructure, not just policy"
type: post
aliases:
  - Context engineering for HPE
  - Context engineering for clinical educators
  - Context engineering what health professions educators need to know
description: "Most universities have responded to AI by rewriting assessment policies and running prompt-writing workshops. Context engineering asks for something different: decisions about system prompts, memory, retrieval, and connectivity that commit an institution to a direction for years. This post sets out what context engineering involves, why integrative, longitudinal, and values-based clinical education needs it, and why the gap between changing words and changing structures is where most institutions are stuck. It ends with three questions a programme team can ask about the AI tool it already uses."
meta-description: "Context engineering for educators: the infrastructure decisions about memory, retrieval, and system prompts that shape AI-supported clinical learning."
keyphrase: context engineering for educators
author: "[[Michael Rowe]]"
date: 2026-02-14
updated: 2026-02-14
tags:
  - organisational-infrastructure
  - context-engineering
  - context-sovereignty
  - health-professions-education
  - agent
category:
  - Technology
related:
  - "[[Notes/context sovereignty]]"
  - "[[Notes/context engineering]]"
  - "[[Notes/prompt engineering]]"
  - "[[Notes/model context protocol]]"
draft: false
enableToc: true
linkedin:
reviewed:
  - blog_writer
  - writing_style
  - SEO_optimiser
  - copy_editor
---

> [!info] Policies are not infrastructure
> Universities are rewriting assessment briefs and drafting guidelines. Context engineering is the structural layer most haven't reached, and it's where the most consequential decisions get made.

Universities haven't ignored AI. Assessment policies have been rewritten, [[Notes/AI literacy|AI literacy]] workshops commissioned, and guidelines circulated. In the institutions I know, the pattern is much the same: change the language, adjust the instructions to students, and clarify the rules.

Very little changes as a result. Adding a reflective statement to an assessment brief doesn't alter what's assessed, how it's assessed, or the infrastructure that supports it. The words change and the structure stays as it was. That's a discursive response, and while it's common in higher education, I don't think it's enough for what's coming.

[[Notes/context engineering|Context engineering]] asks for something a policy adjustment doesn't: architectural decisions about how information is structured, how AI connects to data, and how a learner's progress is represented. Those choices commit an institution for years, in a way that a guideline, which can be rewritten next term, doesn't.

## What context engineering is

Context engineering builds dynamic systems that give [[Notes/large language models|language models]] the information and structure they need to reason well (Rowe, 2026). The work is in the system around the model more than in the wording of any single prompt.

A prompt is an instruction. Context is everything else: background knowledge, tools, persistent memory, and the data the model reasons from. [[Notes/prompt engineering|Prompt engineering]] concentrates on the instruction, and context engineering on the environment it lands in.

## Why clinical education needs it

Clinical reasoning is integrative. A pharmacology question often involves anatomy, pathophysiology, and ethics, and the ability to hold those together is a large part of what we mean by clinical competence. Whether AI can support that kind of integration depends on how its context is built, more than on how capable the model is.

Clinical education is also longitudinal: students develop over years of modules and placements. Without context engineering, AI starts from nothing in every interaction, so it can't offer the developmentally appropriate challenge that an experienced educator pitches almost without thinking.

Finally, clinical practice involves values. Decisions are shaped by evidence, patient preferences, and ethics, which together make up the learner's *[[Notes/context sovereignty|personal context]]* (Rowe & Lynch, 2026). An AI that knows the guidelines but not the learner's professional values can offer generic support at best, and context engineering is how it gets access to the rest.

## The educator's technology stack

Context engineering for educators doesn't mean becoming a software engineer. It does mean understanding what each component of the stack does, and what choices it implies, if you're involved in any decision about AI-supported learning.

### System prompts and instructions

[[Notes/system prompt|System prompts]] are instructions the learner never sees, and they define an AI's role, tone, and constraints. They're what separates a generic chatbot from a tutor that follows institutional guidelines and handles sensitive clinical content with care. Writing them is an infrastructure decision with large pedagogical consequences.

### Memory and state management

Language models don't remember past conversations by default, yet learning depends on building on what came before. Some platforms now offer basic memory, but the choice of what persists and what's forgotten shapes the kind of learning relationship that's possible. In clinical education, what an AI 'knows' about a learner's progress over several years is something someone has to design.

### Retrieval systems

[[Notes/retrieval augmented generation|Retrieval systems]] let AI draw on external information, such as clinical guidelines or research literature, at the point of need. How retrieval is structured matters more than whether it exists. Retrieval by keyword similarity often returns fragments: a passage on a drug here, a paragraph on a condition there. Retrieval that follows conceptual links, between a biochemical pathway, its contraindications, and the risk factors that go with them, supports the integrated reasoning that clinical practice depends on.

### Tool use

Models can also call external tools to run calculations, query databases, or execute code, which turns AI from a conversational partner into something that acts. In clinical education, that means an AI can query a drug database or calculate a dosage adjustment directly, where before it could only generate plausible-sounding text about doing so.

### Connectivity protocols

The [[Notes/model context protocol|Model Context Protocol]] (MCP) is an open standard for connecting AI to external data through a consistent interface (Anthropic, 2024). It works like a universal adaptor, letting AI reach personal notes, institutional databases, and clinical tools through one protocol, with access controls for each. Deciding who and what gets access is a governance decision, even when it's made in a technical settings panel.

### Agentic systems

AI is moving towards systems that plan multi-step tasks and coordinate with other [[Notes/ai-agents|AI agents]]. An [[Notes/agentic workflows|agentic system]] might break a complex patient scenario into component tasks, retrieve the relevant guidelines, and identify gaps in a student's reasoning, all in one interaction. The technology for this already exists. The harder question is how to design and govern the infrastructure it runs on.

## What structural commitment looks like

A discursive response adds a line to an assessment policy. A structural response redesigns the assessment so that AI alone can't produce the reasoning and judgement it asks for, and working with AI becomes part of the task.

In the same way, a discursive response runs a workshop on prompt engineering. A structural response invests in the architecture that decides what AI can access and how learner context persists, then builds staff capability to work within it.

Writing a policy is easy. Deciding on retrieval systems, memory, and protocols in a way that builds institutional values into the infrastructure is hard, and it's where most of the influence on learning sits.

## Why these decisions can't wait

Infrastructure decisions create path dependencies.[^path-dependence] Once an institution has invested in a retrieval architecture, or built curricula around a particular protocol, switching becomes expensive. So the choice between investing in context engineering and staying with policy-level responses can't be put off indefinitely.

The longer an institution waits, the more it relies on default configurations designed by technology companies, and the harder it becomes to shape the infrastructure around educational values. Most institutions don't need to build bespoke systems from scratch. What they need is to decide how to configure and govern the systems they already have.

The difficulty is organisational. The people best placed to make pedagogically sound infrastructure decisions, those who understand clinical reasoning and professional values, are often left out of the technical choices. As I see it, that's an institutional gap, and better technology won't close it.

## The architecture is the pedagogy

We don't need to build this infrastructure ourselves, but we do need to understand it well enough to take part in the decisions that shape it, because that's where many of the pedagogical choices are now made. Those choices decide whether AI reinforces fragmented learning or supports the integrated, longitudinal, values-informed learning that clinical practice needs.

A practical place to start is the AI tool your programme already uses. Find out who wrote its system prompt, what it remembers about a student from one session to the next, and which sources it can retrieve from. If nobody on the programme team knows, those decisions are being made without educators in the room.

## References

- Anthropic. (2024). *Introducing the Model Context Protocol*. https://www.anthropic.com/news/model-context-protocol
- Rowe, M. (2026). *Context engineering* [Concept note]. /home/michael. https://michael-rowe.github.io/home-michael/Notes/context-engineering
- Rowe, M., & Lynch, W. (2026). *Context sovereignty for AI-supported learning: A human-centred approach* [Preprint]. OSF Preprints. https://doi.org/10.31219/osf.io/8czva_v2

[^path-dependence]: **Path dependence** is the way early choices narrow later ones, because each investment makes the alternatives more expensive to switch to. A programme that has built its assessment around one e-portfolio platform knows the feeling. See [Wikipedia](https://en.wikipedia.org/wiki/Path_dependence).
