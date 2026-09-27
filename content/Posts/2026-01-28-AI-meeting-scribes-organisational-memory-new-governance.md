---
title: 'AI meeting scribes, organisational memory, and new governance structures'
type: post
aliases:
  - AI meeting scribes and organisational memory
description: >-
  Whoever takes the notes in a meeting controls its record, and AI meeting
  scribes have automated that role. Attendees who know what the scribe weights
  can shape the summary through high-signal phrases, repetition, and timing, a
  practice Bruce Schneier and Gadi Evron call AI summarisation optimisation. The
  dynamic is old, but it's now more technical, less visible, and more
  scalable. AI meeting notes governance has to work on the conditions that make gaming worthwhile,
  through social norms, policy, and technical safeguards, starting with who
  configures the scribe and who checks its summary.
meta-description: >-
  AI meeting notes governance: how AI scribes hand control of the record to
  whoever games them, and three layers of response for organisations.
keyphrase: AI meeting notes governance
author: '[[Michael Rowe]]'
date: 2026-01-28
updated: 2026-09-27
tags:
  - ai-integration
  - leadership
  - privacy
  - governance
  - organisational-change
category:
  - Technology
  - Professional development
related:
  - '[[Posts/2026-01-28-bitter-lesson-higher-education]]'
  - '[[Posts/2026-03-27-ai-assessment-scales-containment]]'
  - '[[Posts/2026-03-03-ai-agent-governance-higher-education]]'
draft: false
enableToc: true
linkedin:
reviewed:
  - blog_writer
  - writing_style
  - SEO_optimiser
  - copy_editor
---
> [!info] AI meeting scribes automate power dynamics that meetings have always had
> Scribes make those dynamics more technical, less visible, and more scalable. The work for organisations is to govern dynamics that have always existed, since trying to stop people gaming the record will fail the way banning AI in higher education did.

Years ago, I realised that when you take notes during meetings and share them with attendees, you control the narrative for that meeting. Your notes become the canonical reference for what was discussed, what was decided, and who's responsible for what happens next. That's how organisational memory works, and nobody has to intend it. AI meeting scribes have now automated the process, which makes the dynamic both more powerful and more subtle.

When the scribe takes the notes, the narrative belongs to whoever knows how to talk to it. Bruce Schneier and Gadi Evron (2025) call this "[AI summarization optimization](https://www.schneier.com/blog/archives/2025/11/ai-summarization-optimization.html)" (AISO): shaping what you say in a meeting to influence how the AI scribe captures and prioritises it. In their words, "clever meeting attendees can manipulate this system's record by speaking more to what the underlying AI weights for summarization and importance than to their colleagues." They use high-signal phrases like "key takeaway" and "action item", keep statements brief, repeat critical points, and speak at strategic moments.

## Why AI meeting scribes are vulnerable to exploitation

This gaming works because AI meeting scribes have predictable weaknesses. They over-rely on content at the start and end of a conversation and under-weight what comes in the middle (Ravaut et al., 2024). They also can't reliably tell embedded instructions from ordinary content, a weakness known as prompt injection[^prompt-injection], especially when the phrasing mimics the cues they treat as important or uses formulaic language (Yi et al., 2025). These weaknesses follow from how [[large language models]] process long sequences of text, so they're systematic and learnable, and once people understand them, some will use them.

Picture a programme board where the scribe writes the minutes. A colleague who closes the discussion of a struggling module with "so the key action is to review the assessment weighting" shapes the record more than the twenty minutes of disagreement before it, because the summary will lead with their sentence and compress the debate to a line, whether or not anyone else in the room notices.

## An old dynamic with a new mechanism

This feels new, but meeting dynamics have always been adversarial to some degree. People have always positioned agenda items strategically, controlled airtime, and used particular terminology to frame decisions. What's changed is that these dynamics are becoming:

- **More technical**: Success requires understanding algorithmic preferences, not just social dynamics
- **Less visible**: Gaming happens through subtle language choices rather than obvious dominance behaviours
- **More scalable**: Once you understand the patterns, you can deploy them consistently across every meeting

For me, the leadership question is how to govern power dynamics that have always existed and now have a new technological expression. Trying to stop AISO is the wrong target, and higher education shows why. Our first response to generative AI was to ban it, and when that didn't work we tried to [[Posts/2026-03-27-ai-assessment-scales-containment|control how students used it]], which hasn't worked either.

## Three layers of governance for AI meeting notes

Organisations will soon need governance across three domains:

1. **Social awareness**: helping people recognise these patterns and creating norms around authentic versus adversarial communication
2. **Policy**: acknowledging why this gaming happens and addressing the incentive structures underneath it
3. **Technical safeguards**: making AI meeting scribes more robust to manipulation while keeping them useful

The aim is organisations that stay healthy when adversarial dynamics gain new technological mechanisms, and that means working on the conditions that make gaming worthwhile as well as on the behaviour itself. The technology didn't create the problem, but it has made existing dynamics harder to ignore and more urgent to address.

The place to start is the lesson I learned from taking notes: ask who controls the record. If a scribe is running in your next meeting, find out who configured it, who reads the summary before it circulates, and whether anyone checks it against what was said.

## Sources

- Ravaut, M., et al. (2024). On context utilization in summarization with large language models. In *Proceedings of the 62nd Annual Meeting of the Association for Computational Linguistics (Volume 1: Long Papers)* (pp. 2764–2781). Association for Computational Linguistics. https://doi.org/10.18653/v1/2024.acl-long.153
- Schneier, B., & Evron, G. (2025, November 3). AI summarization optimization. *Schneier on Security*. https://www.schneier.com/blog/archives/2025/11/ai-summarization-optimization.html
- Yi, J., et al. (2025). Benchmarking and defending against indirect prompt injection attacks on large language models. In *Proceedings of the 31st ACM SIGKDD Conference on Knowledge Discovery and Data Mining* (pp. 1809–1820). Association for Computing Machinery. https://doi.org/10.1145/3690624.3709179

[^prompt-injection]: **Prompt injection**: text that a language model follows as an instruction when it was only meant to be content to process. In a meeting, "so the key action from today is…" works a little like one, because the scribe reads it as a signal about what the summary should say. [Wikipedia](https://en.wikipedia.org/wiki/Prompt_injection)

> [!note] Provenance
> This post is based on an earlier article, "[Gaming AI meeting scribes: Why organisational memory needs new governance](https://www.mrowe.co.za/blog/2025/12/gaming-ai-meeting-scribes-organisational-memory-governance/)", originally published on 8 December 2025.
