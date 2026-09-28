---
title: System prompt
description: Instructions placed in front of every conversation with an AI model, setting how it behaves, what it knows, and what it won't do, usually without the user seeing them.
meta-description: "What is a system prompt? The hidden instructions that shape every AI conversation, who writes them, what they cost, and how to write your own."
aliases:
  - system message
  - persistent context
type: note
author: "[[Michael Rowe]]"
created: 2026-02-05
updated: 2026-09-28
draft: false
tags:
  - generative-ai
  - prompt-engineering
  - context-engineering
category:
  - Technology
related:
  - "[[Notes/prompt engineering]]"
  - "[[Notes/context engineering]]"
  - "[[Notes/model context protocol]]"
  - "[[Notes/prompt injection]]"
  - "[[Notes/token budget]]"
builds_on:
  - "[[prompt engineering]]"
leads_to:
contradicts:
source: ""
source_url: ""
keyphrase: "what is a system prompt"
linkedin:
reviewed:
  - note_writer
  - writing_style
  - SEO_optimiser
  - copy_editor

---

> [!info] Every AI conversation starts inside instructions you didn't write
> Before you type anything, an AI model has already been told how to behave, what to prioritise, and what to refuse. The system prompt holds those instructions, and knowing it's there explains much of what the model does and won't do, before your conversation even begins.

## System prompt

**One-sentence definition:** A system prompt is a set of instructions sent to an AI model ahead of every conversation, establishing consistent behaviour, knowledge, or constraints without the user having to specify them each time.

When you use ChatGPT, Claude, or another AI assistant, you aren't starting from a blank slate. Before your message reaches the model, the system places instructions in front of it, sometimes thousands of words long, defining who the assistant is, how it should behave, what it should prioritise, and what it should refuse. You type "help me write an essay", and the model receives the full set of instructions followed by your request. Anthropic publishes the system prompts used in its Claude apps (Anthropic, n.d.-b), and reading one is the quickest way to see how much is decided before the user arrives.

### How the layers stack

System prompts are usually written at several levels, and they stack in this order:

- **Platform instructions**, set by the AI provider, establish baseline behaviour: safety guardrails, refusal policies, and general personality. Users can't change them.
- **Application instructions** are set by any tool built on top of a model. An AI writing assistant, a university's chatbot, or a marking-support tool will each carry their own instructions for their specific job.
- **User instructions**, where a platform supports them, persist across your own conversations. Claude calls these *instructions for Claude* and supports separate *project instructions* (Anthropic, n.d.-a); ChatGPT calls them *custom instructions*.

Then comes your actual message. The stack explains why a model sometimes behaves in ways that seem arbitrary: instructions you can't see are shaping its responses.

### What system prompts decide

**Consistency.** Without a system prompt, every conversation would have to re-establish basic expectations. The system prompt keeps a model's personality, safety guardrails, and quality standards the same across conversations and users.

**Hidden constraints.** When a model refuses a request or answers in a particular pattern, that's often the system prompt at work and not a limit of the model itself. Knowing this helps separate what is policy from what is capability.

**Cost.** The system prompt is sent with every message, so its [[Notes/token|tokens]] are paid for on every turn of a conversation, whatever the question. Providers reduce this with prompt caching (Anthropic, n.d.-c), but a long system prompt still takes up room in the [[Notes/context window|context window]] that could hold something more useful.

**Power.** Whoever writes the system prompt determines the model's behaviour. Users see the interface and not the instructions, so providers and tool builders control behaviour through text the user can't see or change. That same gap is what [[Notes/prompt injection|prompt injection]] exploits.

### Writing your own

A personal system prompt shapes every later conversation without you repeating your preferences. For an educator it might read:

"I teach clinical pharmacology to nursing and pharmacy students. Assume familiarity with pharmacology and with teaching in higher education. Give direct, technical answers. When you suggest a teaching activity, say which learning outcome it serves."

What earns a place is specific: your professional context and level of expertise, the frameworks or methodological commitments you work within, and constraints on what outputs should look like. Generic preferences ("be concise") probably don't earn their tokens, and highly specific ones can get in the way when you use the same assistant for something else. Personal instructions also usually live on the provider's servers, so whatever you put in them becomes part of your record with that provider.

### System prompts and context engineering

A system prompt is one way of giving a model persistent context, and a limited one. It tells the model how to behave; [[Notes/context engineering|context engineering]] gives it structured access to your actual material — documents, knowledge bases, research history. A system prompt says "I'm a researcher", and context engineering lets the model read the research. A system prompt is also fixed for the conversation and included in full every time, while context engineering, often through tools such as the [[Notes/model context protocol|Model Context Protocol]], retrieves only what a particular question needs. System prompts work for general behaviour and small amounts of standing context, and context engineering for knowledge that would be impractical to include in every message.

### What remains open

Personal system prompts let people tailor AI to their own needs, but some constraints — safety, accuracy, appropriate behaviour — shouldn't be configurable by the user at all, and where that boundary sits is unsettled. So is transparency: some providers publish their system prompts and others keep them entirely hidden, which makes it hard for users to understand why a model responds the way it does.

---

## Sources

- Anthropic. (n.d.-a). *Understanding Claude's personalization features*. Claude Help Center. https://support.claude.com/en/articles/10185728-understanding-claude-s-personalization-features
- Anthropic. (n.d.-b). *System prompts*. Claude Platform Docs. https://platform.claude.com/docs/en/release-notes/system-prompts/overview
- Anthropic. (n.d.-c). *Prompt caching*. Claude Platform Docs. https://platform.claude.com/docs/en/build-with-claude/prompt-caching

