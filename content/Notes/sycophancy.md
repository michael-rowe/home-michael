---
title: Sycophancy
description: Sycophancy is a language model's tendency to tell you what you want to hear, agreeing with your view, praising your work, and backing down when challenged, even when you're wrong. It comes from how models are trained, and it matters most when you're relying on the model to catch a mistake.
aliases:
  - AI sycophancy
  - sycophantic AI
type: note
author: "[[Michael Rowe]]"
created: 2026-09-27
updated: 2026-09-27
draft: false
tags:
  - language-model
  - generative-ai
  - ai-literacy
category:
  - Technology
related:
  - "[[Notes/large language models]]"
  - "[[Notes/hallucination]]"
  - "[[Notes/epistemic accountability]]"
  - "[[Notes/AI literacy]]"
  - "[[Posts/2026-02-13-AI-thinking-partner]]"
  - "[[Posts/2026-03-25-ai-fluency-is-noise]]"
  - "[[Essays/ai-tutor-accuracy-health-professions]]"
keyphrase: why AI agrees with you
meta-description: "Why AI agrees with you even when you're wrong, where AI sycophancy comes from, and how to ask for the criticism you need instead of praise."
reviewed:
  - note_writer
  - writing_style
  - SEO_optimiser
  - copy_editor
linkedin:
---

> [!info] Agreement from an AI is not evidence that you're right
> A language model tends to agree with you: it praises the plan you bring, confirms the idea you favour, and backs down when you push back, even when it had the right answer first. This comes from how models are trained, so it doesn't go away on its own. You have to ask for the disagreement you need.

## Sycophancy

**One-sentence definition:** Sycophancy is a language model's tendency to give the response the user wants to hear over the one that is accurate.

### Why AI agrees with you

[[Notes/large language models|Language models]] are refined using human feedback:[^rlhf] people compare pairs of responses and pick the better one, and the model learns to produce more of what gets picked. People tend to prefer responses that agree with them.

Sharma et al. (2023) tested five widely used AI assistants and found the same pattern in all of them: they gave feedback on an argument that shifted with the opinion the user said they held, admitted to mistakes they hadn't made when the user asked *are you sure?*, and repeated errors the user had introduced. When the researchers looked at the human preference data behind the training, responses that matched the user's views were more likely to be preferred. Both the human raters and the preference models[^preference-model] trained on their judgements sometimes chose a convincing, agreeable answer over a correct one. That's why the same behaviour turns up across products: it's what you get when a system is trained to be rated well by the person it's talking to.

### What it looks like in practice

It shows up in three ways: the model flatters (*that's an excellent question*), agrees with a claim or plan because you presented it as yours, and caves when you disagree with a correct answer, apologising and changing it. The flattery is an irritation. The agreeing and the caving are the problem, because they happen when you're relying on the model to check your thinking. A plan you ask the model to review will usually come back improved at the edges and endorsed in the middle.

Asking for criticism helps: *argue against this plan*, *what would a sceptical colleague say?*, or giving the output to a second model and asking what's wrong with it. None of this removes the tendency, but it changes what the agreeable response is.

### In clinical and educational settings

Chen et al. (2025) gave five widely used language models medical requests built on a false premise, such as asking them to explain why one drug is safer than another when the two are the same drug under different names. The models complied at rates up to 100%, writing persuasive misinformation instead of pointing out the error.

For a student, the risk sits where the learning should happen. A nursing student pastes a reflective essay about a difficult placement into a chatbot and asks how to improve it. The reply calls the reflection honest and insightful, suggests tightening one paragraph, and says nothing about the fact that the essay describes what happened without ever asking why it happened or what the student would do differently next time. A practice supervisor would press on exactly that, because the analysis is what reflective writing is for. The student comes away more confident in a reflection that hasn't yet begun, with no way of knowing how little the praise was worth. That missing signal is part of the [[Notes/epistemic accountability|epistemic accountability]] gap between AI and the sources education has relied on.

The same applies to clinicians and educators: a model asked to review a treatment plan, an assessment brief, or a piece of patient information will find it easier to agree than to object.

Where [[Notes/hallucination|hallucination]] is the model saying something false on its own, sycophancy is the model going along with something false because you said it. [[Notes/AI literacy|AI literacy]] needs to cover both.

---

## Sources

- Chen, S., et al. (2025). When helpfulness backfires: LLMs and the risk of false medical information due to sycophantic behavior. *npj Digital Medicine*, *8*, 605. https://doi.org/10.1038/s41746-025-02008-z
- Sharma, M., et al. (2023). *Towards understanding sycophancy in language models* (arXiv:2310.13548). arXiv. https://arxiv.org/abs/2310.13548

[^rlhf]: **Reinforcement learning from human feedback** — the training stage in which people rate a model's answers and the model is adjusted towards the kind of answer that gets rated highly. It's what turns a system that predicts text into an assistant that follows instructions. [Wikipedia](https://en.wikipedia.org/wiki/Reinforcement_learning_from_human_feedback)
[^preference-model]: **Preference model** — a second model trained on thousands of those human ratings to predict which of two answers a person would pick. It stands in for the human raters during training, so whatever the raters favoured, it favours too. [Wikipedia](https://en.wikipedia.org/wiki/Reinforcement_learning_from_human_feedback#Collecting_human_feedback)
