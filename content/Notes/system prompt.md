---
title: System prompt
description: >-
  Persistent context included in every message to an AI model, establishing
  consistent behaviour, knowledge, or constraints across interactions.
aliases:
  - system message
  - persistent context
type: note
author: '[[Michael Rowe]]'
created: 2026-02-05
updated: 2026-02-05
needs_review: false
tags:
  - generative-ai
  - prompt-engineering
  - context
category: AI and technology
related:
  - '[[prompt engineering]]'
  - '[[context engineering]]'
  - '[[model-context-protocol]]'
builds_on:
  - '[[prompt engineering]]'
leads_to: null
contradicts: null
source: ''
source_url: ''
---

> [!tip] The invisible context
> Every AI interaction happens within an invisible frame—instructions about how to behave, what to prioritise, how to respond. System prompts define this frame, shaping interaction without users seeing the instructions. Understanding system prompts means understanding how AI responses are constrained and enabled before you even begin your conversation.

## System prompt

**One-sentence definition:** Persistent context included in every message to an AI model, establishing consistent behaviour, knowledge, or constraints across interactions without requiring users to specify them repeatedly.

When you interact with ChatGPT, Claude, or other AI assistants, you're not starting from a blank slate. Before your message reaches the model, the system prepends instructions—sometimes thousands of words—defining who the AI is, how it should behave, what it should prioritise, what it should refuse. These invisible instructions constitute the system prompt.

You type "help me write an essay." The model receives something like: "[thousands of words of system instructions about being helpful, harmless, honest, specific formatting preferences, refusal policies, tone guidelines] User message: help me write an essay." Your interaction happens within the frame those instructions establish.

## Why this matters

System prompts shape AI behaviour in ways users often don't recognise:

**Consistency across conversations:** Without system prompts, every interaction would require re-establishing basic expectations. System prompts ensure AI maintains consistent personality, safety guardrails, and quality standards across all conversations with all users.

**Hidden constraints:** When AI refuses certain requests or responds in particular patterns, that's often system prompt instructions rather than fundamental model limitations. Understanding this reveals what's policy versus capability.

**Cost implications:** System prompts consume tokens in every interaction. A 2,000-word system prompt means paying for those 2,000 words with every message, regardless of your actual query. For providers, this represents significant computational cost. For users understanding pricing, it explains why some platforms cost more than others.

**Power dynamics:** Who writes system prompts determines AI behaviour. Users see the interface but not the instructions shaping responses. This creates information asymmetry—providers control behaviour through instructions users cannot see or modify.

## Personal system prompts

The concept extends to user-defined persistent context. Some platforms enable you to establish personal system prompts—instructions specific to your usage that persist across conversations:

"I'm a clinical researcher working on rehabilitation outcomes. Assume familiarity with research methods and clinical terminology. Provide direct, technical responses rather than simplified explanations. When discussing statistics, show your working."

This personal system prompt shapes every subsequent interaction without requiring you to repeat preferences each time. The trade-off: increased token consumption (these instructions come with every message) versus reduced friction (not repeatedly explaining your context).

For knowledge workers, personal system prompts can establish:
- Professional context and expertise level
- Preferred communication style and formatting
- Theoretical frameworks or methodological commitments
- Specific constraints or requirements for outputs

The challenge is knowing what instructions provide sufficient value to warrant the token cost. Generic preferences ("be concise") probably don't. Specific domain knowledge ("I'm conducting research on X using methodology Y") might.

## System prompts versus [[context engineering]]

System prompts provide one mechanism for persistent context, but limited compared to [[context engineering]] approaches:

**System prompts are text-based instructions** that tell AI how to behave. [[Context engineering]] provides structured access to actual data—your documents, knowledge bases, research history. System prompts say "I'm a researcher"; context engineering gives AI access to your research.

**System prompts are static** within a conversation. [[Context engineering]] enables dynamic context retrieval based on what's relevant to specific queries. System prompts include everything upfront; context engineering surfaces what's needed when it's needed.

**System prompts consume tokens constantly.** Every message includes the full system prompt, regardless of relevance. [[Context engineering]] using tools like [[Model Context Protocol]] enables selective context access—only retrieving and including what's pertinent to current interaction.

The relationship: system prompts work for establishing general behaviour and small amounts of persistent context. Context engineering works for providing AI with access to substantial personal or domain knowledge that would be impractical to include in every message.

## Technical implementation

System prompts operate at different architectural levels:

**Platform system prompts** are set by AI providers and invisible to users. These establish baseline behaviour—safety guardrails, refusal policies, general personality. Users cannot modify platform system prompts.

**Application system prompts** are set by applications built on AI platforms. If you're using an AI-powered writing tool, research assistant, or specialised application, it likely includes its own system prompt shaping behaviour for that specific use case.

**User system prompts** (where supported) are set by individual users through platform features. Claude.ai supports "Custom Instructions," ChatGPT has "Custom instructions," allowing persistent user-defined context.

**Message-level system prompts** in API use enable developers to define behaviour programmatically for each request. This provides maximum flexibility but requires understanding how system prompts interact with user messages and prior conversation history.

These layers stack—platform instructions, then application instructions, then user instructions, then your actual message. Understanding this stack explains why AI sometimes behaves in seemingly arbitrary ways: instructions you cannot see are shaping responses.

## Strategic considerations

For individuals, decisions about personal system prompts involve trade-offs:

**Specificity versus flexibility:** Highly specific instructions work well for narrow use cases but constrain AI in other contexts. General instructions maintain flexibility but provide less value. The question is whether your AI usage is consistent enough to warrant specific persistent instructions.

**Token cost versus friction reduction:** Personal system prompts consume tokens in every interaction. For heavy usage, this cost accumulates. For light usage, repeatedly providing context might be more economical than persistent system prompts.

**Privacy and control:** Personal system prompts often live on providers' systems rather than under your control. What you include in system prompts becomes part of your interaction record with that provider.

For developers, system prompt design shapes user experience profoundly. Poor system prompts create inconsistent behaviour, unexpected refusals, or responses that don't match user expectations. Thoughtful system prompts enable reliable, appropriate AI behaviour aligned with application purposes.

## What remains unresolved

How much context is appropriate in system prompts before they become unwieldy? When do personal system prompts provide genuine value versus just consuming tokens? How do we balance user customisation with maintaining guardrails that serve broader social interests?

The tension: personal system prompts enable tailoring AI to individual needs. But some constraints (safety, accuracy, appropriate behaviour) shouldn't be user-configurable. Where's the boundary between legitimate customisation and undermining important safeguards?

System prompts represent one approach to persistent context—valuable for establishing general behaviour but insufficient for deep contextual understanding. The question isn't whether to use them but what role they play in broader context management strategies.

---

## Sources

None specifically cited—system prompts are a widespread practice across AI platforms with varying implementation details.

---

## Notes

System prompts often remain invisible to users, creating information asymmetry about what instructions shape AI behaviour. Some platforms expose portions of system prompts; others keep them entirely hidden. This obscurity makes it difficult to understand why AI responds in particular ways or to debug unexpected behaviour. Transparency about system prompt content remains an open question in AI interface design.
