---
title: "Context engineering for educators: infrastructure, not just AI policy"
type: post
aliases:
  - Context engineering for HPE
  - Context engineering for clinical educators
  - Context engineering what health professions educators need to know
description: "Most universities have responded to AI by rewriting assessment policies and running prompt-writing workshops. Context engineering demands something different: infrastructure decisions that commit institutions to a direction. This post explains what context engineering involves, why it matters for health professions education, and why the gap between changing words and changing structures is where most institutions are stuck."
meta-description: "Context engineering for educators means infrastructure, not AI policies. What the technology stack shaping AI-supported learning demands."
keyphrase: "context engineering for educators"
author: "[[Michael Rowe]]"
date: 2026-02-14
updated: 2026-02-14
tags:
  - context engineering
  - health professions education
  - AI integration
  - educational technology
category:
  - AI and technology
related:
  - "[[context sovereignty]]"
  - "[[context engineering]]"
  - "[[Model Context Protocol]]"
  - "[[prompt engineering]]"
draft: false
slug: "posts/context-engineering-for-educators"
enableToc: true
---

> [!info] Policies are not infrastructure
> Universities are changing their language about AI — rewriting assessment briefs, drafting guidelines, running workshops. Context engineering is the structural layer most institutions haven't engaged with, and it's where the consequential decisions are being made — or being made for us by default.

Universities have not ignored AI. Assessment policies have been rewritten, [[AI literacy]] workshops commissioned, acceptable-use guidelines circulated. The pattern is broadly similar across institutions: change the language around AI, adjust what students are told about it, clarify the rules.

What's striking is how little any of this changes. Adding "AI-assisted submissions must include a reflective statement" to an assessment brief does not alter what is being assessed, how it's assessed, or what infrastructure supports the learning. It changes the words around an existing structure while leaving the structure intact. This is a discursive response — a change in language rather than a change in practice. Common in higher education. Not sufficient for what's coming.

Context engineering — building the information systems that shape how AI reasons about a task — demands a different kind of institutional response. Not policy adjustments but infrastructure decisions: choices about how knowledge is structured, how AI connects to institutional and personal data, how learners' evolving understanding is represented over time. These are architectural questions, not policy questions. And unlike policies, architectural choices create commitments that are difficult to reverse. Context engineering for educators is ultimately about recognising this distinction — and acting on it.

## What context engineering actually is

Context engineering is the process of building dynamic systems that provide language models with the information, structure, and connections they need to reason effectively (Rowe, 2026). The key word is *systems*. This is not about writing better prompts. It's about designing the entire information environment within which AI operates.

A prompt is a single instruction. Context is everything else: the background knowledge the model can access, the tools it can use, the persistent memory it draws on, the rules governing its behaviour, the structured data shaping its reasoning. [[Prompt engineering]] optimises the instruction. Context engineering optimises the environment.

The distinction matters for health professions education because clinical reasoning is not a series of isolated queries. It involves sustained engagement with complex, evolving situations where previous interactions, patient history, professional values, and multidisciplinary knowledge all shape what counts as an appropriate response. Teaching students to write good prompts is useful. Teaching them to build and maintain the contextual environments that make AI genuinely helpful for clinical learning is a different undertaking — and a more consequential one.

## The technology stack educators need to understand

Context engineering for educators does not mean becoming a software engineer. But understanding what each component does — and what choices it implies — matters for anyone involved in decisions about AI-supported learning.

### System prompts and persistent instructions

Every AI interaction is shaped by instructions the user never sees. These system prompts define the model's role, tone, constraints, and priorities. They are the difference between a generic chatbot and an AI tutor that behaves consistently, follows institutional guidelines, and responds appropriately to sensitive clinical content.

When an institution deploys AI for student learning, the design of these system prompts is an infrastructure decision with pedagogical consequences. A poorly designed system prompt produces an AI that gives misleading clinical advice, ignores professional boundaries, or defaults to superficial responses. The prompt itself is invisible to the learner. Its effects are not.

### Memory and state management

Language models do not, by default, remember anything between conversations. Each interaction starts fresh. For learning — which depends on continuity, on building from what came before — this matters.

Current AI platforms offer memory features that retain information across sessions, but they differ substantially in what they store. Some remember facts: a learner's name, their programme of study. Others maintain richer representations of previous interactions. The architectural choice about what persists and what is forgotten shapes the kind of learning relationship that is possible. In clinical education, where reasoning develops over months and years, what the AI "knows" about a learner's trajectory is a design decision, not a detail.

### Retrieval systems

AI models have a fixed knowledge base, frozen at the time of training. [[Retrieval augmented generation|Retrieval systems]] allow them to access external information at the point of need — institutional databases, clinical guidelines, research literature, a learner's own notes. The most common approach, retrieval-augmented generation (RAG), finds relevant text and inserts it into the model's working memory before generating a response.

How this retrieval is structured matters more than whether it exists. A system that retrieves text based on keyword similarity will find passages mentioning the same terms. A system that retrieves based on conceptual relationships — understanding that a question about drug interactions requires navigating biochemical pathways, contraindication patterns, and patient risk factors together — supports the kind of integrated reasoning that clinical practice demands. The retrieval architecture shapes whether AI reinforces fragmented information lookup or supports connected, multi-step reasoning.

### Tool use

Language models can do more than generate text. They can call external tools: run calculations, query databases, search the web, execute code, interact with institutional systems. This moves AI from conversational partner to active agent — one that takes structured actions rather than talks about them.

Here's what this looks like in clinical education: AI queries a drug interaction database, retrieves patient case data from a simulation system, calculates dosage adjustments, checks a clinical guideline — not by generating plausible-sounding text about these operations, but by actually performing them. AI-supported learning becomes genuine interaction with clinical data and tools, not text-based conversation about them.

### Connectivity protocols

The [[Model Context Protocol]] (MCP) is an open standard allowing AI systems to connect to external data sources through a consistent interface (Anthropic, 2024). Think of it as a universal adaptor: rather than building custom connections between every AI model and every data source, MCP provides a standardised way for AI to access personal knowledge systems, institutional databases, clinical tools, and learning management systems — with appropriate access controls for each.

A physiotherapy student's AI tutor could access their personal study notes, the department's clinical guidelines, and a patient simulation database, all through the same protocol, with permissions appropriate to each source. MCP matters for context engineering because it determines what information AI can reach, under what conditions, and with what boundaries. Governance decisions embedded in technical architecture.

### Agentic systems

AI is moving beyond single-prompt responses toward systems that plan multi-step tasks, reflect on their own outputs, use tools, and coordinate with other AI agents. An agentic system supporting clinical education might receive a complex patient scenario, break it into component reasoning tasks, retrieve relevant guidelines, generate a differential diagnosis, identify gaps in its own reasoning, and ask the learner targeted questions — all within a single coherent interaction.

These capabilities exist now. The question is not whether agentic AI is possible but how the infrastructure supporting it should be designed, governed, and woven into curricula.

## Why context engineering matters for clinical educators

Health professions education has characteristics that make context engineering for educators not just useful but necessary.

**Clinical reasoning is integrative.** A pharmacology question is also an anatomy question, a pathophysiology question, and an ethics question. The way clinical knowledge connects across disciplinary boundaries is not incidental to clinical competence — it *is* clinical competence. Context engineering determines whether AI-supported learning reinforces the siloed, modular structure of most curricula or supports integrated reasoning. Not the model's intelligence. The information architecture surrounding it.

**Clinical education is longitudinal.** Students develop over years, not sessions. Their understanding of a concept in year one should inform how AI supports them in year three. Without context engineering, AI in clinical education resets to baseline with every interaction — unable to provide the developmentally appropriate challenge that good clinical educators deliver intuitively.

**Clinical practice involves values, not just knowledge.** A clinical decision is shaped by evidence, patient preferences, professional ethics, resource constraints, cultural context. The most important dimension of a health professional's reasoning is often the framework of values and commitments through which they interpret clinical information — what we have elsewhere called their *[[context sovereignty|personal context]]* (Rowe & Lynch, 2025). An AI that knows clinical guidelines but not the learner's professional values or approach to reasoning provides generic support at best. Context engineering builds the architecture that makes personalised cognitive partnership possible.

## What structural commitment looks like

The gap between discursive and structural responses to AI is the gap between changing words and changing infrastructure.

A discursive response adds a line to the [[assessment]] policy requiring students to declare AI use. A structural response redesigns the assessment so that what is assessed — reasoning, clinical judgement, the integration of evidence with values — cannot be produced by AI alone, and where AI collaboration is a feature of the task rather than a threat to its validity.

A discursive response runs a faculty workshop on prompt engineering. A structural response invests in the information architecture that determines what AI can access, how it connects to institutional knowledge, how learner context persists over time — and builds faculty capability to work within this architecture.

Here's the uncomfortable version: creating an AI acceptable-use policy is easy. Making decisions about retrieval systems, memory persistence, connectivity protocols, and tool access that embed institutional values into technical infrastructure — that's hard. It's also where the real influence on learning sits.

Policies, workshops, and guidelines serve important functions. But they are not substitutes for infrastructure. Treating them as sufficient is a way of appearing to respond while deferring the commitments that would constitute a genuine response.

## The question of commitment

Infrastructure decisions create path dependencies — situations where early choices constrain future options. Once an institution invests in a particular retrieval architecture, builds curricula around specific protocols, or develops faculty expertise in a given set of tools, switching becomes progressively more expensive. All institutional decisions create some path dependency. But the choice between investing in context engineering and continuing with policy-level responses cannot be deferred indefinitely. The longer an institution waits, the more it depends on default configurations designed by technology companies rather than educators, and the harder it becomes to shape infrastructure around educational values rather than commercial ones.

A note of restraint: not every institution needs to build bespoke AI infrastructure from scratch. Many components are available through existing platforms. The question for most institutions is not whether to build but how to configure, connect, and govern what already exists. Configuration decisions are consequential. They shape learning, and they are currently being made, or more often not being made, by default.

The organisational challenge is that the people best positioned to make pedagogically sound infrastructure decisions — those who understand clinical reasoning, longitudinal development, the role of values in professional practice — are rarely the people making the technical choices. And the people making the technical choices — IT departments, platform vendors, institutional leadership — often lack the pedagogical understanding to recognise what's at stake. This gap is not a technical problem. It's an organisational one.

## What this means

Context engineering for educators is not something most health professions educators need to build themselves. But it is something they need to understand well enough to participate in the decisions shaping it. The technology stack — system prompts, memory, retrieval, tool access, connectivity, agentic capabilities — is where the real pedagogical choices are being made. These choices determine whether AI-supported learning reinforces the episodic, fragmented, knowledge-transmission model that health professions education has been trying to move beyond for decades, or supports the integrated, longitudinal, values-informed learning that clinical practice demands.

The risk is not that institutions will make the wrong infrastructure choices. It is that they will make no infrastructure choices at all — defaulting to whatever the technology provides, while focusing institutional energy on discursive responses that are easier to produce and more comfortable to govern. Context engineering asks educators to engage with technical infrastructure as a pedagogical concern, and to recognise that the architecture surrounding AI shapes learning as powerfully as the curriculum it supports.

## References

- Anthropic. (2024). *Introducing the Model Context Protocol*. https://www.anthropic.com/news/model-context-protocol
- Rowe, M. (2026). Context engineering. Concept note. https://www.mrowe.co.za/notes/context-engineering
- Rowe, M., & Lynch, W. (2025). Context sovereignty for AI-supported learning: A human-centred approach. Preprint. https://doi.org/10.31219/osf.io/8czva_v1
