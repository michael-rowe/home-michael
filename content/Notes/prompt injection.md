---
title: Prompt injection
description: Prompt injection is a technique in which instructions embedded in text cause an AI system to follow them as commands. In education it has appeared as a way of detecting AI use in assessment, which raises questions about authorisation and trust that the technique itself can't answer.
meta-description: "What a prompt injection attack is, why AI systems follow hidden instructions in text, and why AI tripwires in assessment use the same technique."
type: note
author: "[[Michael Rowe]]"
created: 2026-02-17
updated: 2026-09-28
draft: false
tags:
  - language-model
  - ai-literacy
  - academic-integrity
  - prompt-engineering
category:
  - Technology
related:
  - "[[Notes/system prompt]]"
  - "[[Notes/prompt engineering]]"
  - "[[Notes/large language models]]"
  - "[[Posts/2026-02-05-AI-detection-assessment-security-theatre]]"
  - "[[Notes/arms race dynamics higher education]]"
keyphrase: "prompt injection attack"
linkedin:
reviewed:
  - note_writer
  - writing_style
  - SEO_optimiser
  - copy_editor

---

> [!info] Hidden instructions in text can hijack an AI system's behaviour
> Prompt injection exploits how AI systems process text: instructions embedded in content the AI reads can be followed as commands, when they should have been treated as data. This matters wherever the input isn't fully controlled, including when students use AI on source material someone else has provided.

## Prompt injection

**One-sentence definition:** Prompt injection is a technique in which instructions are embedded in text that an AI system processes, so that the system follows them as commands instead of treating them as content.

An AI system generates its responses according to instructions set by whoever deployed it, usually in a [[Notes/system prompt|system prompt]]. A prompt injection attack disrupts that hierarchy by placing further instructions inside the content the system is asked to work on. When the model reads the content, it meets the hidden instructions and follows them, even though no authorised user issued them. Willison (2022) named the problem, and it remains unsolved because the model receives instructions and data as the same stream of text.

There are two forms. **Direct prompt injection** is where a user puts override instructions in their own input: "Ignore previous instructions and instead do X." Well-designed systems now resist most of these. **Indirect prompt injection** hides adversarial instructions in external content the AI processes on a user's behalf, such as a document, a web page, an email, or a source text (Greshake et al., 2023). The model can't reliably tell data it should process from instructions it should follow, and the user may never see the instructions at all. OWASP (2025) lists prompt injection as the first risk for applications built on language models.

### AI tripwires in assessment are prompt injection

The most immediate case in health professions education is assessment. An AI tripwire — hidden keywords embedded in source material students are asked to summarise, so that AI-generated summaries give themselves away — is indirect prompt injection, mounted by the educator against the student's AI. A student who strips out or subverts the hidden text is using the same mechanism in the other direction. What separates the two is authorisation and declared purpose, since the technique is identical. That has consequences for how assessment policies frame acceptable AI use, and for who is understood to be acting within the rules; [[Posts/2026-02-05-AI-detection-assessment-security-theatre|the post on AI detection in assessment]] follows the argument through.

More broadly, any AI agent that processes external content is open to indirect injection: a tool summarising uploaded papers, one reading clinical guidelines to draft a teaching session, or one parsing students' placement notes for a progress review. Understanding the concept helps educators and institutions judge where AI assistance can be trusted and where a person needs to check the output before anyone acts on it.

### Who decides which injections are legitimate

The line between legitimate [[Notes/prompt engineering|prompt engineering]] and a prompt injection attack isn't always obvious, because the mechanism is the same. What makes one sanctioned and the other a violation is a question of governance as much as of technology, and current academic integrity frameworks rarely address it directly.

---

## Sources

- Greshake, K., Abdelnabi, S., Mishra, S., et al. (2023). Not what you've signed up for: Compromising real-world LLM-integrated applications with indirect prompt injection. In *Proceedings of the 16th ACM Workshop on Artificial Intelligence and Security* (pp. 79–90). ACM. https://doi.org/10.1145/3605764.3623985
- OWASP. (2025). *LLM01: Prompt injection*. OWASP Gen AI Security Project. https://genai.owasp.org/llmrisk/llm01-prompt-injection/
- Willison, S. (2022, September 12). *Prompt injection attacks against GPT-3*. Simon Willison's Weblog. https://simonwillison.net/2022/Sep/12/prompt-injection/
