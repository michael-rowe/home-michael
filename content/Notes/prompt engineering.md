---
title: Prompt engineering
description: >-
  Using natural language to produce desired responses from large language models
  through iterative refinement
aliases:
  - prompting
  - prompt design
type: note
author: '[[Michael Rowe]]'
created: 2026-01-09
updated: 2026-01-30
needs_review: false
tags:
  - prompt-engineering
category:
  - AI and technology
related:
  - '[[context engineering]]'
builds_on: null
leads_to:
  - '[[context engineering]]'
contradicts: null
source: ''
source_url: ''
---

> [!info] Management, not magic
> The most significant insight about prompt engineering is Ethan Mollick's observation that it's essentially management. You're articulating what you need, providing context, giving feedback, iterating toward better outputs. For academics, these are skills already developed through supervising research students and collaborating with colleagues—now applied to AI.

## Prompt engineering

**One-sentence definition:** The process of using natural language to produce desired responses from large language models through iterative refinement of how tasks are articulated and structured.

When large language models became publicly available in 2022, early enthusiasm led to predictions that "prompt engineer" would become a distinct occupation. By 2023, the reality became clearer: being good at prompt engineering is like being good at Google in 2003—a useful skill, but not a career in itself. The models keep improving, auto-prompting capabilities develop, and what once required elaborate prompting becomes trivial.

What persists is the underlying capability: clearly understanding tasks, explaining them effectively, providing useful feedback, and generalising lessons into reusable patterns. These are fundamentally management skills—which is why academics who've supervised students or collaborated on research already have the foundation for effective prompting.

## How to think about prompting

Approach AI prompting as skilful conversation with a knowledgeable colleague, not as typing search keywords. Many people provide a few words and expect "the answer"—but generative AI is not search. Your role is to extract valuable insight through dialogue, which requires framing questions well, providing context, and iterating based on responses.

This means shifting from:
- "Social constructivism" → "What are the key methodological debates about social constructivism in educational research?"
- "Write abstract" → "Draft an abstract for a paper arguing that AI reveals fundamental flaws in output-based assessment. Emphasise the shift from creation to curation."
- "Fix this" → "This paragraph argues X, but it's not clear. Help me strengthen the logical connection between the premise and conclusion."

The difference is clarity about what you're asking for and why.

## Common approaches

Prompting techniques that work well:

**Structured frameworks** like CIDI (Context, Instruction, Details, Input) help organise complex requests:
- Context: "I'm writing for academics familiar with assessment theory"
- Instruction: "Draft an argument that..."
- Details: "Focus on implications for validity rather than just reliability"
- Input: [paste relevant excerpt]

**Few-shot prompting** provides examples of desired outputs: "Here are three abstracts I've written previously. Write one for this new paper in the same style."

**Chain-of-thought prompting** requests step-by-step reasoning: "Explain your reasoning before providing the answer" or "Walk through how you reached that conclusion."

**Iterative refinement** treats prompting as conversation: start with a broad request, then clarify, redirect, or expand based on the response. This mirrors how you'd work with a research assistant.

## The limitations for scholarship

Prompt engineering works well for isolated tasks—summarise this paper, draft a methods section, generate discussion questions. It struggles with ongoing scholarly work where understanding your intellectual position matters.

Each conversation starts fresh. AI doesn't remember your theoretical commitments, your methodological preferences, the relationships between concepts you've developed over years. Ask about social constructivism today and tomorrow, and you'll get disconnected responses that don't build on previous dialogue.

This is why prompt engineering, while useful, represents only the entry point for serious AI-supported scholarship. It's the difference between asking someone who knows nothing about your work to help with a specific task versus collaborating with a colleague who understands your research program. Both have value. They're not equivalent.

This limitation is precisely what [[context engineering]] addresses—moving beyond optimising individual prompts to building systems where AI understands how your ideas connect.

## What matters most

The [[qualifications for AI literacy#1. Literacy requires practice, not just instruction|practice-based nature]] of prompt engineering means you develop competence through use, not instruction. Reading about prompting techniques helps. Actually using AI for your work—writing, research, teaching—develops the tacit knowledge of when techniques work and when they don't.

This development happens through reflection on outcomes. When a prompt produces useful output, what made it work? When it fails, what was missing? This iterative learning process is how management skills develop generally—and why academics who supervise and collaborate already have the foundation.

The question isn't whether to develop prompting skills but whether optimising individual interactions is sufficient for your needs. For many scholarly tasks, it is. For building AI that genuinely understands your work, it's not.

---

## Sources

- Acar, O.A. (2023). AI Prompt Engineering Isn't the Future. Harvard Business Review. https://hbr.org/2023/06/ai-prompt-engineering-isnt-the-future
- Hardman, D. P. (2023). Structured Prompting for Educators. Dr Phil's Newsletter.
- Mollick, E. (2023). Now is the time for grimoires. One Useful Thing.
- Mollick, E. (2025). LinkedIn post on prompt engineering as management. https://www.linkedin.com/posts/emollick_many-of-the-most-important-prompt-engineering-activity-7328409150101622786-Y3Gy
- Mollick, E. and Mollick, L. (2023). Practical AI for Instructors and Students Part 3: Prompting AI.

---

## Notes

The management framing matters because it positions prompting as application of existing skills rather than acquisition of technical knowledge. This lowers the barrier for academics who may feel technologically intimidated but are highly competent at articulating complex ideas and providing constructive feedback.
