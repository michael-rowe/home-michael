---
title: Prompt engineering
description: >-
  Writing instructions for a language model in plain language, and refining
  them through conversation, until it produces what you need. The skill is
  closer to managing a colleague than to programming, which is why educators
  who supervise and give feedback already have most of it.
meta-description: "Prompt engineering for educators: why writing good AI prompts draws on the same skills as supervision, with techniques and where prompting stops."
aliases:
  - prompting
  - prompt design
type: note
author: '[[Michael Rowe]]'
created: 2026-01-09
updated: 2026-09-28
draft: false
tags:
  - prompt-engineering
  - language-model
  - ai-literacy
category:
  - Technology
related:
  - '[[Notes/context engineering]]'
  - '[[Notes/system prompt]]'
  - '[[Notes/large language models]]'
  - '[[Notes/qualifications for AI literacy]]'
  - '[[Notes/prompt injection]]'
builds_on: null
leads_to:
  - '[[context engineering]]'
contradicts: null
source: ''
source_url: ''
keyphrase: "prompt engineering for educators"
linkedin:
reviewed:
  - note_writer
  - writing_style
  - SEO_optimiser
  - copy_editor

---

> [!info] Prompting well is a management skill
> Ethan Mollick's observation is that most of what gets called prompt engineering is management: working out what you need, explaining it with the context it depends on, giving feedback, and iterating. Educators practise those skills every time they supervise a student or brief a colleague, so prompt engineering for educators is mostly a matter of applying what they already do.

## Prompt engineering

**One-sentence definition:** Prompt engineering is the practice of writing instructions for a [[Notes/large language models|large language model]] in natural language, and refining how the task is explained and structured, until the model produces the response you need.

When large language models became publicly available in 2022, some predicted that "prompt engineer" would become an occupation of its own. By 2023 it looked more like being good at Google in 2003: a useful skill, and not a career (Acar, 2023). The models keep improving, and what once took an elaborate prompt now takes a sentence.

What persists is the capability underneath: understanding the task clearly, explaining it well, giving useful feedback, and turning what you learn into patterns you can reuse. Mollick (2025) calls these management skills, and anyone who has supervised a dissertation or run a practice placement has been developing them for years.

### How to think about prompting

A prompt works best as the opening of a conversation with a knowledgeable colleague. Many people type a few words and expect "the answer", the way they would with a search engine, and are disappointed by what comes back. Generative AI does better with a question that is framed well, context it can use, and a response you then follow up on:

- "Social constructivism" → "What are the key methodological debates about social constructivism in educational research?"
- "Write abstract" → "Draft an abstract for a paper arguing that AI reveals fundamental flaws in output-based assessment. Emphasise the shift from creation to curation."
- "Fix this" → "This paragraph argues X, but the argument isn't clear. Help me strengthen the logical connection between the premise and the conclusion."

In each case the second version says what you're asking for and why.

### Common techniques

**Structured frameworks** such as CIDI (context, instruction, details, input), which Hardman (2023) adapted for educators, help organise a complex request:

- Context: "I'm writing a case for second-year dietetics students on a renal placement"
- Instruction: "Draft a patient scenario that..."
- Details: "Include one lab result that should prompt the student to query the prescribed diet"
- Input: [paste the relevant module learning outcomes]

**Few-shot prompting**[^few-shot] provides examples of the output you want: "Here are three feedback comments I wrote on last year's reflective essays. Write one for this essay in the same style."

**Chain-of-thought prompting** asks for step-by-step reasoning: "Explain your reasoning before giving the answer" or "Walk through how you reached that conclusion."

**Iterative refinement** treats prompting as conversation: start with a broad request, then clarify, redirect, or expand based on the response, much as you would with a research assistant (Mollick & Mollick, 2023). Mollick (2023) suggests keeping the prompts that work as a personal collection you can return to.

### Where prompting stops

Prompt engineering works well for isolated tasks: summarise this paper, draft a methods section, generate discussion questions for a seminar. It struggles with ongoing scholarly work, where the model needs to understand your intellectual position.

Each conversation starts fresh. The model doesn't remember your theoretical commitments, your methodological preferences, or the relationships between concepts you've developed over years, so asking about social constructivism today and again tomorrow gets you two responses that don't build on each other. Help from someone who knows nothing about your work is useful for a specific task, and collaborating with a colleague who understands your research programme is a different kind of help. [[Notes/context engineering|Context engineering]] is the response to that limit: building the context the model works from, so that it understands how your ideas connect.

### Learning to prompt

Competence in prompting comes from [[Notes/qualifications for AI literacy#Literacy develops through practice|practice]]. Reading about techniques helps, but using AI for your own writing, research, and teaching is what builds the tacit sense of when a technique works and when it doesn't. That sense develops through reflection on outcomes: when a prompt produces something useful, what made it work, and when it fails, what was missing? It's the same way management skills develop generally.

For many scholarly tasks, well-written individual prompts are enough. For AI that understands your work over time, they aren't, and the question becomes what context you give it.

---

## Sources

- Acar, O. A. (2023, June 6). AI prompt engineering isn't the future. *Harvard Business Review*. https://hbr.org/2023/06/ai-prompt-engineering-isnt-the-future
- Hardman, P. (2023, November 30). Structured prompting for educators. *Dr Phil's Newsletter*. https://drphilippahardman.substack.com/p/structured-prompting-for-educators
- Mollick, E. (2023, August 20). Now is the time for grimoires. *One Useful Thing*. https://www.oneusefulthing.org/p/now-is-the-time-for-grimoires
- Mollick, E. (2025, May 14). *Many of the most important "prompt engineering" skills are just management skills* [LinkedIn post]. https://www.linkedin.com/posts/emollick_many-of-the-most-important-prompt-engineering-activity-7328409150101622786-Y3Gy
- Mollick, E., & Mollick, L. (2023, August 2). *Practical AI for instructors and students part 3: Prompting AI* [Video]. Wharton Interactive. YouTube. https://www.youtube.com/watch?v=wbGKfAPlZVA

---

## Notes

The management framing matters because it treats prompting as an application of skills academics already have, and not as technical knowledge they have to acquire. That lowers the barrier for colleagues who feel intimidated by the technology but are highly competent at explaining complex ideas and giving constructive feedback.

[^few-shot]: **Few-shot examples** — a handful of worked examples included in the prompt, showing the model what a good answer looks like before it's asked for one. It's the same move as showing a student two marked scripts before they write their own. [Wikipedia](https://en.wikipedia.org/wiki/Prompt_engineering#In-context_learning)
