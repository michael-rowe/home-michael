---
type: post
title: We're comparing AI health advice to the wrong thing
description: One in seven people in the UK are using AI chatbots for health advice instead of seeing a GP. The institutional response has been to warn them off — but that response applies a standard it doesn't apply to anything else. This post argues that the risk comparison driving those warnings is systematically skewed, and that a more honest accounting points toward a different kind of response entirely.
meta-description: The 'AI might make mistakes' warning applies a standard to AI health advice that we don't apply to the existing healthcare system — and that asymmetry matters.
keyphrase: using AI for health advice
author: "[[Michael Rowe]]"
date: 2026-05-15
updated: 2026-05-15
tags:
  - language-model
  - ai-literacy
  - ai-integration
  - health-professions-education
  - clinical-education
category:
  - Technology
draft: false
slug: posts/ai-health-advice-wrong-comparison
subtype: ""
enableToc: true
linkedin:
---

> [!info] We hold AI health advice to a standard we've never applied to the healthcare system
> The warning that AI health advice is risky because "AI might make mistakes" applies the [precautionary principle](https://en.wikipedia.org/wiki/Precautionary_principle) to one system while exempting the other. Diagnostic error rates in primary care run at 5–15%. There is documented mortality associated with delayed care. If potential error disqualifies AI, it should disqualify the existing system too.

[One in seven](https://www.theguardian.com/society/2026/may/13/one-in-seven-prefer-ai-chatbots-to-seeing-doctor-uk-study) people in the UK are now using AI chatbots for health advice rather than seeing their GP, and of those, one in four are making this choice because of NHS waiting times. This has prompted the kinds of warnings you'd expect: AI can't examine patients, can't understand medical history, can't pick up on subtle signs, and can't make safe clinical judgements.

And that response isn't entirely wrong. But I think it's applying a standard that no healthcare system would survive if it was applied consistently.

## The comparison that doesn't get made

"Don't trust systems that might make mistakes" feels like a reasonable caution but it's not applied symmetrically. We don't warn people away from GPs because doctors might misdiagnose them, even though diagnostic error rates in healthcare are [estimated at 10–15%](https://qualitysafety.bmj.com/content/22/Suppl_2/ii21), serious missed diagnoses are a documented patient safety problem, and there is measurable mortality associated with delayed care. In addition, *most* IT systems currently deployed in the health system have no documented safety assurances. I'm not suggesting that adding more undocumented technology is the solution. But the reality is that AI systems are under more scrutiny, and face more pressure to demonstrate safe operating frameworks, than the existing technology infrastructure in the NHS. But rather than triggering any kind of warnings about risk and trust, these issues are treated as background while the *potential* errors of AI are treated as disqualifying factors.



This seems to reflect a cultural default more than an honest risk assessment. The assumption is human=better, and not only that, AI typically gets evaluated against either an idealised clinician or an expert panel, rather than against what we actually see in practice. For the one-in-four patients who chose to use AI because of NHS waiting times, the relevant comparison isn't AI versus a thorough, unhurried consultation. It's AI versus no access at all, which is a different calculation entirely.

## What the evidence shows

It's also worth looking at some of the typical claims about AI performance in clinical contexts. For example, that AI cannot make safe clinical judgements, even when early studies show that AI has matched or exceeded specialist diagnostic performance across multiple clinical domains (Tu et al., 2024). Or that patients rated AI responses as more helpful and more empathetic than physician responses when asked the same questions (Ayers et al., 2023). AI and humans also make different kinds of errors — they have complementary profiles — which means we should at least consider that the combination of human and AI judgement may outperform either alone (Lenskjold et al., 2023).

I described some of this in a recent [presentation to physiotherapy clinicians](https://michael-rowe.github.io/home-michael/Presentations/2026-05-13-macp-making-sense-of-ai), not because I'm trying to argue that the debate is settled, but because it complicates the picture considerably. "AI can't make safe clinical judgements" is not a statement that engages with this evidence and instead merely asserts a limitation that feels comfortable because it keeps humans in the driving seat.

## We're asking the wrong question

Anthropic recently published a report showing [how people use Claude for personal guidance](https://www.anthropic.com/research/claude-personal-guidance). Of the conversations where people came to Claude asking what *they specifically* should do, health and wellness was the single largest category; more than one in four.




And in the report is this sentence that should give us pause:

> "We also find people telling Claude they used AI precisely because they could not access or afford a professional."

This isn't a fringe case. We're seeing increasing numbers of people who've decided that AI is their best *available* option. The debate about whether they should be doing this is already over. The only real question that's worth asking is what we should do given that they already are.

The current answer seems to be that we should warn them off, emphasise the risks, remind them it's no substitute for a real consultation. This is a form of abstinence messaging, which fails for the [same reason it always fails](https://www.thewhitehatter.ca/post/why-tech-abstinence-based-messaging-education-policies-and-laws-fail-lessons-from-the-past): the behaviour is already happening, and withholding good guidance just makes it more dangerous. The [Guardian study](https://www.theguardian.com/society/2026/may/13/one-in-seven-prefer-ai-chatbots-to-seeing-doctor-uk-study) found that one in five of those using AI for health advice decided against seeking a professional consultation because of what the chatbot told them. You can read that as a warning about AI's influence, or as an argument for better guidance around AI use in these contexts.

## The burden of proof runs both ways

I'm not arguing that AI-generated health advice is risk-free, or that there are no concerns about it. My point is that risk doesn't only flow in one direction. The existing health system has documented failures at scale that cause real harm for real people. And for many patients, the alternative to AI-generated health advice isn't the ideal clinician, it's a 6-month waiting list.

The question we should be asking isn't "how do we warn people off using AI for health advice?" A better question might be "how do we make that use as good as it can be?"
