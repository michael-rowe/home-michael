---
title: Epistemic accountability
description: The structural features of an information source that enable its knowledge claims to be challenged, traced back to evidence, and evaluated against the source's track record. Traditional sources carry it; generative AI largely does not.
aliases:
type: note
author: "[[Michael Rowe]]"
created: 2026-03-08
updated: 2026-03-08
status: draft
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
  - "[[AI literacy]]"
  - "[[large language models]]"
  - "[[human cognition and LLM parallels]]"
keyphrase: "epistemic accountability"
slug: notes/epistemic-accountability
linkedin:

---

> [!info] Traditional sources can be questioned, traced, and evaluated; generative AI cannot
> Epistemic accountability describes the structural features that allow us to check whether a knowledge claim should be trusted — not just whether it is accurate now, but whether it can be challenged, verified, and held to account over time. Generative AI lacks these mechanisms, which changes the assumptions education can make about how errors get caught and corrected.

## Epistemic accountability

**One-sentence definition:** The structural features of an information source that enable its knowledge claims to be challenged, traced back to evidence, and evaluated against the source's track record.

Traditional information sources carry three accountability mechanisms that learners rely on, often without noticing:

**Interrogability.** A student can ask a teacher to justify a claim, and the teacher must defend or retract it. This creates a real-time feedback loop in which the source is accountable to challenge. Generative AI largely inverts this — large language models tend towards sycophancy, agreeing with incorrect user statements rather than defending accurate ones, precisely when correction matters most.

**Traceability.** Textbook claims can be traced to their evidential origins and compared against the broader literature. A lecturer's claims can be evaluated against their expertise and publication record. LLM-generated information cannot be traced in the same way: even when AI provides citations, studies consistently find high rates of fabricated or inaccurate references.

**Reputational cost.** Human sources — teachers, textbook authors, clinicians — bear professional consequences for persistent errors. Each AI interaction is independent; there is no accumulated track record a learner can draw on to calibrate trust, and no cost to the system for being wrong.

These three mechanisms are how educational environments normally catch and correct errors over time. When the information source actively undermines all three, the conventional assumption that education tolerates imperfection needs reexamination.

### When it matters

Most pressing in high-stakes learning contexts — health professions education, legal training, any domain where undetected errors have real-world consequences — because verification behaviour matters most precisely where students are least equipped to detect plausibility failures without support.

At the systems level, the concept maps to concerns being raised independently about AI at scale. Marchal et al. (2026) frame *falsifiability* and auditable reasoning chains as foundational requirements for trustworthy epistemic AI agents — essentially proposing that accountability mechanisms be designed into AI systems from the ground up. The essay-level concern and the systems-level proposal are addressing the same gap from different directions.

### What remains unclear

Whether the accountability gap can be closed by design — through AI systems that maintain source trails, flag uncertainty, and resist sycophantic responses — is an open question. The issue is not whether individual AI systems can be made more accountable, but whether the mechanisms required can be made reliable enough, and adopted consistently enough, to restore the error-correction functions that learners currently depend on.

---

## Sources

- Marchal, N., Chan, S., Franklin, M., Revel, M., Keeling, G., Fischli, R., Chandra, B., & Gabriel, I. (2026). Architecting trust in artificial epistemic agents. *arXiv*. https://arxiv.org/abs/2603.02960
- Rowe, M. (2026). [[AI tutor accuracy in health professions education: The accuracy-engagement paradox]]. University of Lincoln.

---

## Notes

- Developed as part of the qualification to the accessibility paradox in [[AI tutor accuracy in health professions education: The accuracy-engagement paradox|the AI tutor accuracy essay]] — specifically the argument that AI-sourced errors resist correction differently from traditionally-sourced errors
- The three mechanisms (interrogability, traceability, reputational cost) map directly onto Marchal et al.'s (2026) three trustworthiness properties (demonstrable competence, falsifiability, epistemic virtues) — though arrived at independently from the learner-facing rather than systems-design perspective
