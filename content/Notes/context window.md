---
title: Context window
description: The context window is the amount of text a language model can take into account at once, covering its instructions, the conversation so far, and any documents it has been given. It's the model's only working memory, and how full it is, and what sits where in it, shapes the quality of the answer.
aliases:
  - context windows
type: note
author: "[[Michael Rowe]]"
created: 2026-09-24
updated: 2026-09-24
draft: false
tags:
  - language-model
  - context-engineering
category:
  - Technology
related:
  - "[[Notes/context drift]]"
  - "[[Notes/token budget]]"
  - "[[Notes/context engineering]]"
  - "[[Notes/progressive disclosure]]"
  - "[[Notes/human cognition and LLM parallels]]"
  - "[[Notes/large language models]]"
keyphrase: what is a context window
meta-description: What is a context window? The limit on how much text an AI model can consider at once, and why what you put in it, and where, shapes the answer.
reviewed:
  - note_writer
  - writing_style
  - SEO_optimiser
  - copy_editor
linkedin:
---

> [!info] The context window is everything the model can see
> A language model has no memory of your conversation beyond what fits in its context window, the fixed amount of text it can consider when it writes a reply. Instructions, chat history, uploaded documents, and its own earlier answers all compete for that space, and the model uses what's in it unevenly, so what you put in and where you put it both matter.

## Context window

**One-sentence definition:** A context window is the maximum amount of text, measured in tokens,[^token] that a [[Notes/large language models|language model]] can take into account when generating a response.

Everything the model works from on a given turn has to fit inside it: the system prompt[^system-prompt] set by whoever built the tool, the conversation so far, any files you've attached, the results of searches or other tools it has run, and the reply it's writing. The model itself keeps nothing between turns. The application around it sends the whole conversation back each time you press enter, which is why the window works as the model's only working memory and why Mollick (2024) calls it the model's short-term memory. The comparison with human working memory is developed further in [[Notes/human cognition and LLM parallels|human cognition and LLM parallels]].

### How models use a large window

Windows have grown from a few thousand tokens to more than a million in some models, enough to hold several textbooks at once, and it's easy to read that as meaning the model now attends to all of it equally. Liu et al. (2024) found that models answering questions from a long context retrieve information most reliably from the beginning and end of that context and noticeably less well from the middle. Output quality also degrades as the window fills with earlier drafts, dead ends, and irrelevant material, which is the subject of [[Notes/context drift|context drift]].

A midwifery module lead who pastes forty students' placement reflections into a chat and asks for recurring themes shows why this matters. All forty may fit, and the tool will return a confident summary, but the reflections in the middle of the pile are the ones the model is least likely to draw on. The themes it reports can over-represent a handful of students, and nothing in the output says so. Working in smaller batches, or asking the model to go through the reflections one at a time and record what each contains before synthesising, gives every student's account a fairer hearing.

### When the window fills

Tools handle a full window differently. Some refuse to accept more, some quietly drop the oldest part of the conversation, and some summarise it to make room; most don't tell you which they've done. The practical responses are the same across tools: start a fresh conversation seeded with a short summary when a long one starts to wander, put the material that matters most at the start or the end, and give the model less but better-chosen text. Deciding what goes into the window is what [[Notes/context engineering|context engineering]] is about, and progressive disclosure is one way of loading it only when it's needed.

[^token]: **Token**: the unit a language model reads and writes in, usually a whole short word or a fragment of a longer one. In English a token averages about three-quarters of a word, so a 5,000-word assignment is roughly 6,700 tokens. [Wikipedia](https://en.wikipedia.org/wiki/Large_language_model#Tokenization)
[^system-prompt]: **System prompt**: the instructions a tool's developer places in front of every conversation, telling the model how to behave before you've typed anything. See [[Notes/system prompt|system prompt]].

---

## Sources

- Liu, N. F., Lin, K., Hewitt, J., Paranjape, A., Bevilacqua, M., Petroni, F., & Liang, P. (2024). Lost in the middle: How language models use long contexts. *Transactions of the Association for Computational Linguistics*, *12*, 157–173. https://doi.org/10.1162/tacl_a_00638
- Mollick, E. (2024, March 18). Which AI should I use? Superpowers and the state of play. *One Useful Thing*. https://www.oneusefulthing.org/p/which-ai-should-i-use-superpowers

---

## Notes

The comparison with working memory is worked through for teaching and learning in [[Posts/2026-02-06-LLM-similarities-human-cognition|What if we're the language models?]], and window size as one reason to choose one model over another in [[Posts/2026-02-16-ai-models-for-different-tasks|The hidden inefficiency in how we work with AI]].
