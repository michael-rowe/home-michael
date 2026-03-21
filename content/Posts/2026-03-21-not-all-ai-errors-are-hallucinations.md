---
title: Why AI makes spelling mistakes
type: post
description: Claude produced the word "contribuves" in a piece of writing, which is obviously not a real word. This is a different kind of error than hallucination, and the distinction matters.
meta-description: Why AI makes spelling mistakes is a different question from hallucination. A note on the mechanics of AI error and what it might mean for how we read AI output.
keyphrase: why AI makes spelling mistakes
aliases:
  - posts/not-all-ai-errors-are-hallucinations
author: "[[Michael Rowe]]"
date: 2026-03-21
updated: 2026-03-21
tags:
  - language-model
  - generative-ai
  - ai-literacy
category:
  - Technology
related:
  - "[[2026-03-06-claude-deleted-my-file]]"
draft: false
slug: posts/why-ai-makes-spelling-mistakes
subtype: field-note
enableToc: false
linkedin:
---
![[claude_spelling_error.png|Screenshot of AI-generated text with the word 'contribuves' highlighted — an example of why AI makes spelling mistakes through mechanical token errors rather than knowledge failures]]
*Claude produced the word 'contribuves' in a piece of writing. Not a real word. Clearly a mangled version of 'contributes'.*

This is the first time I've noticed Claude make a spelling mistake, which prompted me to ask if this is the same kind of failure as hallucination?

It isn't.

Hallucination is a semantic failure. The model generates content that doesn't correspond to reality and presents it with full confidence. Fabricated citations, wrong dates, and invented quotations are hallucinations. The problem is that hallucinated output is usually *plausible*. It looks like something that could be true, which is what makes it hard to catch.

A spelling error like 'contribuves' is something different: a mechanical failure at the token prediction level. LLMs operate on tokens, subword units sampled probabilistically at each step, and sometimes the wrong one wins. Claude 100% 'knows' how to spell 'contributes'; it just generated the wrong token sequence at that moment. It's closer to a transcription slip than a knowledge failure.

The practical difference is detection. Spelling errors are self-announcing: I caught this one immediately because the shape of the word is completely wrong. Hallucinations are a hard problem precisely because they don't announce themselves. The output is fluent, confident, and wrong in a way that requires additional verification to detect.

Not all AI errors are hallucinations and lumping them together obscures this, making it harder to know what kind of scrutiny to apply.
