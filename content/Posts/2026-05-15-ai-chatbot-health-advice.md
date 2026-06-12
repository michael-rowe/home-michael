---
type: post
title: We're comparing AI chatbot health advice to the wrong thing
description: One in seven people in the UK are using AI chatbots for health advice instead of seeing a GP. The institutional response has been to warn them off, but that response applies a standard it doesn't consistently apply to anything else in the system. This post argues that the risk comparison driving those warnings is systematically skewed, and that a more honest accounting points toward an entirely different kind of response.
meta-description: The 'AI might make mistakes' warning applies a standard to AI chatbot health advice we've never applied consistently to other technologies in health systems, and that asymmetry matters.
keyphrase: AI chatbot health advice
author: "[[Michael Rowe]]"
date: 2026-05-15
updated: 2026-05-22
tags:
  - language-model
  - ai-literacy
  - ai-integration
  - health-professions-education
  - clinical-education
category:
  - Technology
draft: false
aliases:
  - posts/ai-health-advice-wrong-comparison
subtype: ""
enableToc: true
linkedin:
---

> [!info] We hold AI health advice to a standard we've never applied to the healthcare system
> The warning that AI health advice is risky because "AI might make mistakes" applies the [precautionary principle](https://en.wikipedia.org/wiki/Precautionary_principle) to one system while exempting the other. Diagnostic error rates in primary care run at 10–15%. There is documented mortality associated with delayed care. If potential error disqualifies AI, it should disqualify the existing system too.

[One in seven](https://www.theguardian.com/society/2026/may/13/one-in-seven-prefer-ai-chatbots-to-seeing-doctor-uk-study) people in the UK are now turning to AI chatbot health advice rather than seeing their GP, and of those, one in four are making this choice because of NHS waiting times. This has prompted the kinds of warnings you'd expect: AI can't examine patients, can't understand medical history, can't pick up on subtle signs, and can't make safe clinical judgements.

That response isn't entirely wrong. But it applies a standard that no healthcare system would survive if applied consistently.

## AI chatbot health advice is being compared to the wrong standard

"Don't trust systems that might make mistakes" feels like a reasonable caution, but it's not applied symmetrically. We don't warn people away from GPs because doctors might misdiagnose them, even though diagnostic error rates in healthcare are [estimated at 10–15%](https://qualitysafety.bmj.com/content/22/Suppl_2/ii21), serious missed diagnoses are a documented patient safety problem, and there is measurable mortality associated with delayed care.

Most IT systems currently deployed in the health system have no documented safety assurances, yet this generates no comparable concern. This isn't an argument for adding more undocumented technology. AI systems are in fact under more scrutiny, and face more pressure to demonstrate safe operating frameworks, than the existing technology infrastructure in the NHS. These issues are treated as background while the *potential* errors of AI are treated as disqualifying factors.

![[NHS_IT_safety_assurance.jpeg|70% of NHS digital health technologies have no documented safety assurance.]]

This reflects a cultural default more than an honest risk assessment. The assumption is that "humans are better" and AI typically gets evaluated against either an idealised clinician or an expert panel, rather than against what we actually see in practice. For the one-in-four patients who chose to use AI because of NHS waiting times, the relevant comparison isn't AI versus a thorough, unhurried consultation. It's AI versus no access at all.

## What the evidence shows

Take the claim that AI cannot make safe clinical judgements. Early studies show that AI has matched or exceeded specialist diagnostic performance across multiple clinical domains (Tu et al., 2024), and patients rated AI responses as more helpful and more empathetic than physician responses to the same questions (Ayers et al., 2023). AI and humans also make different kinds of errors. Their profiles are complementary, which means the combination of human and AI judgement may outperform either alone (Lenskjold et al., 2023).

I described some of this in a recent [presentation to physiotherapy clinicians](https://michael-rowe.github.io/home-michael/Presentations/2026-05-13-macp-making-sense-of-ai), not to close the debate but to show how much ground the dismissive claims leave unexamined. "AI can't make safe clinical judgements" doesn't engage with this evidence; it merely asserts a limitation that feels comfortable because it keeps humans in the driving seat.

## We're asking the wrong question

Anthropic recently published a report showing [how people use Claude for personal guidance](https://www.anthropic.com/research/claude-personal-guidance). Of the conversations where people came to Claude asking what *they specifically* should do, health and wellness was the single largest category, more than one in four.

![[claude_guidance.png|Chart from Anthropic's research report showing health and wellness as the largest category of personal guidance requests to Claude, accounting for more than one in four conversations.]]

The report includes a sentence that should give us pause:

> "We also find people telling Claude they used AI precisely because they could not access or afford a professional."

This isn't a fringe case. Increasing numbers of people have decided that AI is their best *available* option. The debate about whether they should is already over. The question is what we should do given that they already are.

The current answer seems to be that we should warn them off, emphasise the risks, remind them it's no substitute for a real consultation. This is a form of abstinence messaging, which fails for the [same reason abstinence messaging always fails](https://www.thewhitehatter.ca/post/why-tech-abstinence-based-messaging-education-policies-and-laws-fail-lessons-from-the-past): the behaviour is already happening, and withholding good guidance just makes it more dangerous. The [Guardian study](https://www.theguardian.com/society/2026/may/13/one-in-seven-prefer-ai-chatbots-to-seeing-doctor-uk-study) found that one in five of those using AI for health advice decided against seeking a professional consultation because of what the chatbot told them. That's not evidence against AI health advice. It's evidence that better guidance — not more warnings — would make a difference.

## The burden of proof runs both ways

Risk doesn't only flow in one direction. The existing health system has documented failures at scale that cause real harm. And for many patients, the alternative to AI-generated health advice isn't the ideal clinician; it's a six-month waiting list.

The question we should be asking isn't "how do we warn people off using AI for health advice?" The better question is: "how do we make that use as good as it can be?"
