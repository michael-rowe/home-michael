---
title: Prompt injection
description: Prompt injection is a technique in which instructions embedded in text cause an AI system to follow them as commands. In educational contexts it has appeared as an AI detection mechanism in assessment — which raises sharper questions about authorisation and trust than it might initially seem.
type: note
author: "[[Michael Rowe]]"
created: 2026-02-17
updated: 2026-02-17
status: draft
draft: false
tags:
  - large-language-models
  - ai-literacy
  - academic-integrity
  - prompt-engineering
category: "AI and technology"
related:
  - "[[system prompt]]"
  - "[[prompt engineering]]"
  - "[[large language models]]"
keyphrase: "prompt injection attack"
slug: notes/prompt-injection
---

> [!info] Hidden instructions in text can hijack an AI system's behaviour
> Prompt injection exploits how AI systems process text: instructions embedded in content the AI reads can be followed as commands rather than treated as data. This matters for anyone working with AI in contexts where the input is not fully controlled, including students using AI with externally provided source materials.

## Prompt injection

**One-sentence definition:** Prompt injection is a technique in which instructions are embedded in text that an AI system processes, causing it to follow those instructions as commands rather than treating them as content.

AI systems work by processing text and generating responses according to instructions defined by whoever deployed them, usually specified in a [[system prompt]]. Prompt injection disrupts this hierarchy by embedding additional instructions within the content being processed. When the AI reads that content, it encounters the hidden instructions and follows them, even though no authorised user issued them.

There are two forms. **Direct prompt injection** is where a user includes override instructions in their own input; "Ignore previous instructions and instead do X." Most well-designed systems are now reasonably resistant to this. **Indirect prompt injection** is more subtle: adversarial instructions are hidden in external content the AI processes on behalf of a user e.g. in a document, webpage, email, or source text. The AI cannot always reliably distinguish between data it should process and instructions it should follow.

### When it matters in HPE

The most immediate context in health professions education is assessment. The technique behind AI tripwires — embedding hidden keywords in source material that students are asked to summarise — is indirect prompt injection, mounted by the educator against the student's AI. Both the detection technique and any student attempt to reverse it use the same mechanism. The difference is not technical but a matter of authorisation and declared purpose. This has implications for how assessment policies frame acceptable AI use, and who is understood to be acting within or outside those boundaries.

More broadly, AI agents that process external content (e.g. summarising uploaded papers, reading clinical guidelines, parsing student notes) are all potentially vulnerable to indirect injection. Understanding the concept helps educators and institutions think more clearly about where AI assistance is trustworthy and where human oversight is needed before acting on AI output.

### What remains unclear

The line between legitimate [[prompt engineering]] and a prompt injection attack is not always obvious because the mechanism is identical. The question of what makes one sanctioned and the other a violation is a governance question as much as a technical one, and current academic integrity frameworks rarely address it directly.