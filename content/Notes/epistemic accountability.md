---
title: Epistemic accountability
description: The structural features of an information source that enable its knowledge claims to be challenged, traced back to evidence, and evaluated against the source's track record. Traditional sources carry it; generative AI largely does not.
meta-description: "Can students trust AI answers? Why teachers and textbooks can be questioned, traced, and held to account, and why generative AI largely can't."
aliases:
type: note
author: "[[Michael Rowe]]"
created: 2026-03-08
updated: 2026-09-25
draft: false
tags:
  - language-model
  - generative-ai
  - ai-literacy
  - health-professions-education
category:
  - Education
  - Technology
related:
  - "[[Notes/AI literacy]]"
  - "[[Notes/large language models]]"
  - "[[Notes/human cognition and LLM parallels]]"
  - "[[Notes/hallucination]]"
  - "[[Essays/ai-tutor-accuracy-health-professions]]"
keyphrase: "can students trust AI answers"
linkedin:
reviewed:
  - note_writer
  - writing_style
  - SEO_optimiser
  - copy_editor
---

> [!info] Education catches errors because sources can be held to account.
> Epistemic accountability describes the structural features that allow us to check whether a knowledge claim should be trusted — not just whether it is accurate now, but whether it can be challenged, verified, and held to account over time. Generative AI lacks these mechanisms, which changes the assumptions education can make about how errors get caught and corrected.

## Epistemic accountability

**One-sentence definition:** Epistemic[^epistemic] accountability is the set of structural features of an information source that enable its knowledge claims to be challenged, traced back to evidence, and evaluated against the source's track record.

Traditional information sources carry three accountability mechanisms that learners rely on, often without noticing:

**Interrogability.** A student can ask a teacher to justify a claim, and the teacher must defend or retract it. This creates a real-time feedback loop in which the source is accountable to challenge. Generative AI largely inverts this: large language models tend towards sycophancy, agreeing with incorrect user statements rather than defending accurate ones, at the moment correction matters most (Sharma et al., 2023; Chen et al., 2025).

**Traceability.** Textbook claims can be traced to their evidential origins and compared against the broader literature. A lecturer's claims can be evaluated against their expertise and publication record. LLM-generated information cannot be traced in the same way: even when AI provides citations, studies find high rates of fabricated or inaccurate references (Buchanan et al., 2024; Dahl et al., 2024).

**Reputational cost.** Human sources — teachers, textbook authors, clinicians — bear professional consequences for persistent errors. Each AI interaction is independent; there's no accumulated track record a learner can draw on to calibrate trust, and no cost to the system for being wrong.

These three mechanisms are how educational environments normally catch and correct errors over time. When the information source actively undermines all three, the conventional assumption that education tolerates imperfection needs re-examination, which is the qualification the [[Essays/ai-tutor-accuracy-health-professions|AI tutor accuracy essay]] develops.

### Where undetected errors have consequences

The gap matters most in high-stakes learning contexts — health professions education, legal training, any domain where undetected errors have real-world consequences — because that's where students most need to check what they're told and are least equipped to spot an answer that's plausible but wrong.

A second-year pharmacy student checks a paediatric dose with a chatbot, doubts the answer, and suggests a different figure. If the model agrees with the student's wrong figure, nothing in the exchange marks the error. There's no tutor who'll pick it up next week, no reference behind the answer to check, and no record that this source was wrong the last time.

At the systems level, the concept maps to concerns being raised independently about AI at scale. Marchal et al. (2026) frame *falsifiability* and auditable reasoning chains as foundational requirements for trustworthy epistemic AI agents, which amounts to designing accountability into AI systems from the ground up. Their three trustworthiness properties (demonstrable competence, falsifiability, and epistemic virtues) map onto interrogability, traceability, and reputational cost, arrived at independently from the systems-design side rather than the learner's.

### Whether design can close the gap

Whether the accountability gap can be closed by design — through AI systems that maintain source trails, flag uncertainty, and resist sycophantic responses — is an open question. Some individual systems will become more accountable. What matters for learners is whether the mechanisms become reliable enough, and are adopted consistently enough, to restore the error correction they currently depend on.

---

## Sources

- Buchanan, J., Hill, S., & Shapoval, O. (2024). ChatGPT hallucinates non-existent citations: Evidence from economics. *The American Economist*, *69*(1), 80–87. https://doi.org/10.1177/05694345231218454
- Chen, S., Gao, M., Sasse, K., Hartvigsen, T., Anthony, B., Fan, L., Aerts, H., Gallifant, J., & Bitterman, D. S. (2025). When helpfulness backfires: LLMs and the risk of false medical information due to sycophantic behavior. *npj Digital Medicine*, *8*, 605. https://doi.org/10.1038/s41746-025-02008-z
- Dahl, M., Magesh, V., Suzgun, M., & Ho, D. E. (2024). Large legal fictions: Profiling legal hallucinations in large language models. *Journal of Legal Analysis*, *16*(1), 64–93. https://doi.org/10.1093/jla/laae003
- Marchal, N., Chan, S., Franklin, M., Revel, M., Keeling, G., Fischli, R., Chandra, B., & Gabriel, I. (2026). *Architecting trust in artificial epistemic agents* (arXiv:2603.02960). arXiv. https://arxiv.org/abs/2603.02960
- Rowe, M. (2026). [[Essays/ai-tutor-accuracy-health-professions|AI tutor accuracy in health professions education: The accuracy-engagement paradox]]. University of Lincoln.
- Sharma, M., Tong, M., Korbak, T., Duvenaud, D., Askell, A., Bowman, S. R., Cheng, N., Durmus, E., Hatfield-Dodds, Z., Johnston, S. R., Kravec, S., Maxwell, T., McCandlish, S., Ndousse, K., Rausch, O., Schiefer, N., Yan, D., Zhang, M., & Perez, E. (2023). *Towards understanding sycophancy in language models* (arXiv:2310.13548). arXiv. https://arxiv.org/abs/2310.13548

---

## Notes

- Developed as part of the qualification to the accessibility paradox in [[Essays/ai-tutor-accuracy-health-professions|the AI tutor accuracy essay]] — specifically the argument that AI-sourced errors resist correction differently from traditionally sourced errors

[^epistemic]: **Epistemic** means to do with knowledge: how we come to know something, and how we judge whether a claim is justified. A clinical supervisor who asks a student "how do you know that?" is asking an epistemic question. [Wikipedia: Epistemology](https://en.wikipedia.org/wiki/Epistemology)
