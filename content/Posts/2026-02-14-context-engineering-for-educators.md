---
title: "Context engineering for educators: Infrastructure, not just policy"
type: post
aliases:
  - Context engineering for HPE
  - Context engineering for clinical educators
  - Context engineering what health professions educators need to know
description: "Most universities have responded to AI by rewriting assessment policies and running prompt-writing workshops. Context engineering demands something different: infrastructure decisions that commit institutions to a direction. This post explains what context engineering involves, why it matters for health professions education, and why the gap between changing words and changing structures is where most institutions are stuck."
meta-description: Context engineering for educators means infrastructure, not AI policies. This is what the technology stack shaping AI-supported learning demands.
keyphrase: context engineering for educators
author: "[[Michael Rowe]]"
date: 2026-02-14
updated: 2026-02-14
tags:
  - infrastructure
  - context-engineering
  - context-sovereignty
  - organisational-infrastructure
  - health-professions-education
  - ai-agents
category:
  - AI and technology
related:
  - "[[context sovereignty]]"
  - "[[context engineering]]"
  - "[[prompt engineering]]"
  - "[[model-context-protocol]]"
draft: false
slug: posts/context-engineering-for-educators
enableToc: true
---

> [!info] Policies are not infrastructure
> Universities are rewriting assessment briefs and drafting guidelines. Context engineering is the structural layer most haven't reached — where the most consequential decisions get made.

Universities have not ignored AI. Assessment policies have been rewritten, [[AI literacy]] workshops commissioned, and guidelines circulated. Across most institutions, the pattern is the same: change the language, adjust student instructions, and clarify rules.

Strikingly, little changes. Adding reflective statements to assessment briefs does not alter what is assessed, how it is assessed, or the supporting infrastructure. It changes the words while leaving the structure intact — a discursive response that is common in higher education but insufficient for what is coming.

[[context engineering|Context engineering]] builds the information systems that shape AI reasoning. Unlike policy adjustments, it demands architectural decisions: how information is structured, how AI connects to data, how a learner's progress is represented. These choices create long-term commitments rather than reversible guidelines.

## What context engineering is

Context engineering builds dynamic systems that provide language models with the information and structure needed for effective reasoning (Rowe, 2026). It is about systems, not better prompts.

A prompt is an instruction. Context is everything else: background knowledge, tools, persistent memory, and the data shaping reasoning. [[Prompt engineering]] prioritises the instruction; context engineering prioritises the environment.

This distinction matters because clinical reasoning is not a series of isolated queries. It requires sustained engagement with evolving situations where history, values, and multidisciplinary knowledge shape the response. Teaching students to write prompts is useful; teaching them to build the contextual environments that make AI genuinely helpful is far more consequential.

## The educator's technology stack

Context engineering for educators does not mean becoming a software engineer. But understanding what each component does — and what choices it implies — matters for anyone involved in decisions about AI-supported learning.

### System prompts and instructions

Invisible [[system prompt|system prompts]] define an AI's role, tone, and constraints. They differentiate a generic chatbot from a tutor that follows institutional guidelines and handles sensitive clinical content appropriately. Designing these prompts is an infrastructure decision with deep pedagogical consequences; they are invisible to learners, yet their effects are profound.

### Memory and state management

Standard language models do not remember past conversations. However, learning depends on building from what came before. While some platforms now offer basic memory, the architectural choice of what persists — and what is forgotten — shapes the possible learning relationship. In clinical education, an AI's "knowledge" of a learner's multi-year trajectory is a design choice, not a detail.

### Retrieval systems

[[Retrieval augmented generation|Retrieval systems]] allow AI to access external information like clinical guidelines or research literature at the point of need. How this retrieval is structured is more important than its existence. Simple keyword similarity often leads to fragmented lookups. In contrast, conceptual retrieval — linking biochemical pathways, contraindications, and risk factors — supports the integrated reasoning clinical practice demands.

### Tool use

Models can also call external tools to run calculations, query databases, or execute code. This shifts AI from a conversational partner to an active agent. In clinical education, this means an AI can query a drug database or calculate dosage adjustments directly rather than just generating plausible-sounding text about these operations.

### Connectivity protocols

The [[Model Context Protocol]] (MCP) is an open standard for connecting AI to external data through a consistent interface (Anthropic, 2024). It acts as a universal adaptor, allowing AI to access personal notes, institutional databases, and clinical tools via a single protocol with appropriate access controls. These are governance decisions embedded in technical architecture.

### Agentic systems

AI is moving toward systems that plan multi-step tasks and coordinate with other agents. An agentic system might break a complex patient scenario into component tasks, retrieve guidelines, and identify reasoning gaps — all within one interaction. The challenge is not technical possibility, but how to design and govern the infrastructure supporting these systems.

## Why context engineering matters

Clinical reasoning is integrative. A pharmacology question often involves anatomy, pathophysiology, and ethics. This connectivity *is* clinical competence. Whether AI can support that integration is an architectural decision, not a matter of model capability.

Clinical education is also longitudinal. Students develop over years, not sessions. Without context engineering, AI resets to baseline with every interaction, unable to provide the developmentally appropriate challenges that human educators deliver intuitively.

Finally, clinical practice involves values. Decisions are shaped by evidence, patient preferences, and ethics — the learner's *[[context sovereignty|personal context]]* (Rowe & Lynch, 2025). An AI that knows guidelines but not a learner's professional values provides generic support at best. Context engineering builds the architecture for personalised cognitive partnership.

## What structural commitment looks like

The gap between discursive and structural responses is the difference between changing words and changing infrastructure. A discursive response adds a line to an [[assessment]] policy; a structural response redesigns the assessment so that reasoning and judgement cannot be produced by AI alone. In this model, AI collaboration becomes a feature of the task rather than a threat.

Similarly, a discursive response runs a workshop on prompt engineering. A structural response invests in the architecture that determines what AI can access and how learner context persists, then builds faculty capability to work within that system.

Creating a policy is easy. Making decisions about retrieval systems, memory, and protocols that embed institutional values into infrastructure is hard — but that is where the real influence on learning lies. Policies and guidelines are not substitutes for infrastructure.

## Why these decisions can't wait

Infrastructure decisions create path dependencies. Once an institution invests in a retrieval architecture or builds curricula around specific protocols, switching becomes expensive. The choice between investing in context engineering and continuing with policy-level responses cannot be deferred indefinitely.

The longer an institution waits, the more it depends on default configurations designed by technology companies rather than educators. This makes it harder to shape infrastructure around educational values. Most institutions don't need to build bespoke systems from scratch; the question is how to configure and govern what exists.

The challenge is organisational: the people best positioned to make pedagogically sound infrastructure decisions — those who understand clinical reasoning and professional values — are often excluded from technical choices. This gap is not a technical problem; it is an institutional one.

## The architecture is the pedagogy

Educators don't need to build this infrastructure themselves, but they must understand it well enough to participate in the decisions shaping it. The technology stack is where the real pedagogical choices are made. These choices determine whether AI reinforces fragmented learning or supports the integrated, longitudinal, and values-informed model clinical practice demands.

The risk is not making the wrong choices, but making no choices at all — defaulting to commercial configurations while focusing on easy, discursive responses. The architecture surrounding AI shapes learning as powerfully as the curriculum it supports.

## References

- Anthropic. (2024). *Introducing the Model Context Protocol*. https://www.anthropic.com/news/model-context-protocol
- Rowe, M. (2026). Context engineering. Concept note. https://www.mrowe.co.za/notes/context-engineering
- Rowe, M., & Lynch, W. (2025). Context sovereignty for AI-supported learning: A human-centred approach. Preprint. https://doi.org/10.31219/osf.io/8czva_v1
