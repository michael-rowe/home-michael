---
title: Hallucination
description: When a language model produces a fluent, confident statement that is false, why it happens, and why it is harder to catch than other AI errors.
aliases:
  - AI hallucination
  - Hallucinations
type: note
author: "[[Michael Rowe]]"
created: 2026-09-24
updated: 2026-09-24
draft: false
tags:
  - language-model
  - generative-ai
  - ai-literacy
category:
  - Technology
related:
  - "[[Notes/large language models]]"
  - "[[Notes/human cognition and LLM parallels]]"
  - "[[Notes/retrieval augmented generation]]"
  - "[[Notes/AI literacy]]"
  - "[[Posts/2026-03-21-not-all-ai-errors-are-hallucinations]]"
  - "[[Posts/2026-03-25-ai-fluency-is-noise]]"
  - "[[Essays/ai-tutor-accuracy-health-professions]]"
keyphrase: why AI hallucinates
meta-description: "Why AI hallucinates: how language models produce confident falsehoods, why references can be checked when most output can't, and what that means."
reviewed:
  - note_writer
  - writing_style
  - SEO_optimiser
  - copy_editor
linkedin:
---

> [!info] A hallucination sounds exactly like a true answer
> A language model hallucinates when it produces something false with the same fluency and confidence as something true: a reference that doesn't exist, a guideline that says something it doesn't, a drug interaction nobody has described. What makes it dangerous is that nothing in the output marks it as an error.

## Hallucination

**One-sentence definition:** A hallucination is output from a language model that is presented as fact, reads as plausible, and is false or unsupported by any source.

## Why AI hallucinates

A [[Notes/large language models|large language model]] doesn't look things up. It generates text one piece at a time by predicting what is likely to come next, given its training and whatever is in its [[Notes/context window|context]]. Most of the time the likely text is also the true text, because true statements are what the training data mostly contains. When the model reaches the edge of what it has seen, such as an obscure paper, a recent guideline, or a precise figure, it keeps producing likely-sounding text anyway, and the result can be a well-formed citation to an article that was never written.

Kalai et al. (2025) argue that training and evaluation make this worse. Most benchmarks[^benchmark] score an answer as right or wrong and give nothing for "I don't know", so a model that guesses outscores one that admits uncertainty, in the same way a student gains marks by guessing on a multiple-choice paper with no penalty for wrong answers. Rates have fallen as models have improved and as they've been connected to search and [[Notes/retrieval augmented generation|retrieval]], and for some kinds of output they're likely to fall to zero.

The difference is whether there's a ground truth to check against. A reference either exists or it doesn't, so a model that can search a database can verify a citation before it gives it to you. Much of what a model produces has nothing like that behind it: an explanation of why a treatment works, feedback on a student's reflective writing, a suggestion about what to prioritise in a care plan. For that kind of output, a process that generates likely text and rewards confident answers will keep producing confident guesses, and hallucination is something the architecture and the training encourage, and it's unlikely to disappear.

## Why the name is contested

"Hallucination" borrows a term for a perceptual disorder, and some prefer "fabrication" or "confabulation", the second of which is closer to what [[Notes/human cognition and LLM parallels|human memory]] does when it fills a gap with a plausible detail. Hicks et al. (2024) go further and argue that the output is *bullshit* in the philosopher Harry Frankfurt's sense: produced with indifference to whether it is true, not with an intention to deceive.

Whatever the name, it describes a specific failure. A misspelling or a formatting slip is also an error, but [[Posts/2026-03-21-not-all-ai-errors-are-hallucinations|not all AI errors are hallucinations]], and the difference matters because a misspelling announces itself while a hallucination doesn't.

## In clinical and educational settings

Kim et al. (2025) define a medical hallucination as any instance in which a model generates misleading medical content. Testing models against physician-annotated responses to real clinical cases, they found that asking a model to reason step by step, or connecting it to search, reduced hallucination rates, but that a non-trivial rate remained.

For students, the familiar case is the reference list: a nursing student asks for sources on falls prevention in older adults and gets five convincing citations, two of which don't exist. The student who checks each one in the library database catches it. The one who judges them by how plausible they look doesn't, because plausibility is exactly what the model is good at producing.

Spotting hallucinations appears in most [[Notes/AI literacy|AI literacy]] frameworks as part of critical evaluation, but checking only works where there's something to check against. Where there isn't, the student is left judging the output on how it reads, and [[Posts/2026-03-25-ai-fluency-is-noise|fluency is noise]] when it comes to judging accuracy. A human tutor gets things wrong too, which is the comparison [[Essays/ai-tutor-accuracy-health-professions|AI tutor accuracy in health professions education]] takes up.

[^benchmark]: **Benchmark**: a standard set of test questions used to compare AI models, much like a common exam paper sat by every candidate so their scores can be ranked. [Language model benchmark](https://en.wikipedia.org/wiki/Language_model_benchmark) on Wikipedia.

---

## Sources

- Hicks, M. T., Humphries, J., & Slater, J. (2024). ChatGPT is bullshit. *Ethics and Information Technology*, *26*(2), Article 38. https://doi.org/10.1007/s10676-024-09775-5
- Kalai, A. T., Nachum, O., Vempala, S. S., & Zhang, E. (2025). *Why language models hallucinate* (arXiv:2509.04664). arXiv. https://doi.org/10.48550/arXiv.2509.04664
- Kim, Y., Jeong, H., Chen, S., Li, S. S., Lu, M., Alhamoud, K., Mun, J., Grau, C., Jung, M., Gameiro, R., Fan, L., Park, E., Lin, T., Yoon, J., Yoon, W., Sap, M., Tsvetkov, Y., Liang, P., Xu, X., . . . Breazeal, C. (2025). *Medical hallucinations in foundation models and their impact on healthcare* (arXiv:2503.05777). arXiv. https://doi.org/10.48550/arXiv.2503.05777
