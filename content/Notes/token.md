---
title: Token
description: A token is the unit a language model reads and writes in, usually a short word or a fragment of a longer one. Context windows, usage limits, and prices are all counted in tokens, so the size of a task in tokens decides what a model can take in at once and what it costs.
aliases:
  - tokens
  - tokenisation
  - tokenization
type: note
author: "[[Michael Rowe]]"
created: 2026-09-26
updated: 2026-09-26
draft: false
tags:
  - language-model
  - generative-ai
category:
  - Technology
related:
  - "[[Notes/large language models]]"
  - "[[Notes/context window]]"
  - "[[Notes/token budget]]"
  - "[[Notes/embeddings]]"
  - "[[Notes/context drift]]"
meta-description: "What is a token in AI? The unit language models read, write, and are priced in, and how to estimate whether your documents will fit."
keyphrase: "what is a token in AI"
linkedin:
reviewed:
  - note_writer
  - writing_style
  - SEO_optimiser
  - copy_editor
---

> [!info] Everything a language model does is counted in tokens
> A language model reads and writes in tokens: common words whole, and longer or rarer words in pieces. How much a model can read at once, how long it can reply, and what the work costs are all measured in tokens, so estimating whether a task will fit starts with estimating its length in tokens.

## Token

**One-sentence definition:** A token is the unit of text a [[Notes/large language models|language model]] reads and writes in, usually a whole short word, a fragment of a longer word, or a punctuation mark.

Before a model sees any text, a tokeniser splits it into pieces drawn from a fixed vocabulary, typically of tens of thousands to a few hundred thousand entries. The vocabulary is built from how often sequences of characters occur in the training text, so everyday words become single tokens and less common words are assembled from parts. Run through the tokeniser OpenAI introduced with GPT-4o, "The patient was discharged home." comes out as six tokens, one per word plus the full stop, while "thrombocytopenia" becomes four: *thromb*, *ocyt*, *open*, *ia*, pieces that bear no relation to the Greek roots a clinician would recognise.

In English, a token averages about three-quarters of a word, so 1,000 tokens is roughly 750 words and a 5,000-word assignment is about 6,700 tokens. Text dense with technical vocabulary takes more tokens per word, and many other languages take far more. The same passage translated into different languages can take up to fifteen times as many tokens (Petrov et al., 2023), which means a student writing in some languages gets less text into the same model, and reaches usage limits or spends paid credit faster.

## What gets counted in tokens

A model's [[Notes/context window|context window]] is measured in tokens, and so is the length of its reply. That makes it possible to estimate in advance whether a task will fit. A programme lead who wants a model to check the module descriptors for a three-year programme against a set of professional standards might have thirty descriptors of around 2,000 words each: 60,000 words, or about 80,000 tokens, plus the standards themselves. That fits comfortably in some models and not at all in others, and even where it fits, a model attends unevenly to a very full window (see [[Notes/context drift|context drift]]).

Paid access to models is priced per token, usually at a higher rate for what the model writes than for what it reads. Matching a task to a model with its cost in mind is the subject of [[Notes/token budget|token budget]].

Tokens also explain some errors that look strange. Because a model works with fragments, it doesn't see the individual letters in most words, which is why models have been poor at counting the letters in a word and why they occasionally produce a misspelling that no person would make (see *[[Posts/2026-03-21-not-all-ai-errors-are-hallucinations|Why AI makes spelling mistakes]]*).

---

## Sources

- Petrov, A., et al. (2023). Language model tokenizers introduce unfairness between languages. *Advances in Neural Information Processing Systems, 36*. https://arxiv.org/abs/2305.15425
