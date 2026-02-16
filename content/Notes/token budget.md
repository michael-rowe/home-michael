---
title: Token budget
description: The idea that different kinds of cognitive work have different computational costs in large language models, and that matching task complexity to model capability matters for both efficiency and output quality.
aliases:
type: note
author: "[[Michael Rowe]]"
created: 2026-02-16
updated: 2026-02-16
status: draft
draft: false
tags:
  - large-language-models
  - ai-integration
category: AI and technology
related:
  - "[[large language models]]"
  - "[[inference]]"
keyphrase: AI token budget
meta-description: The AI token budget explains why different tasks have different computational costs — and why matching model to task improves output quality.
slug: notes/token-budget
reviewed:
  - writing_style
  - note_writer
  - copy_editor
  - SEO_optimiser
---

> [!info] Not all AI tasks cost the same
> Drafting feedback on thirty student submissions is a different kind of task to synthesising patterns across a semester's work to revise a module — and they shouldn't use the same model. Token budget names why: different tasks have different computational costs at inference. Matching model capability to task complexity can improve both efficiency and output quality, because a model with more reasoning capacity than the task requires has more surface area for overthinking.

## Token budget

**One-sentence definition:** The AI token budget is the computational cost a task places on a language model at [[inference]], varying with reasoning complexity rather than output length.

Token budget is a useful frame for thinking about why different tasks should be routed to different models. When a model generates a response, it allocates computational effort across the tokens it produces. Complex reasoning — synthesising patterns across sources, developing a conceptual argument, resolving ambiguity — requires more of that effort than straightforward instruction-following: reformatting a list, collating notes, applying a template consistently. For an academic, this maps directly onto how work actually divides: drafting a literature synthesis is a different kind of task to formatting a reference list, and the model you reach for should reflect that.

This has a counterintuitive implication: more capable models aren't always better. A model like Claude Haiku, optimised for reliable instruction-following, may outperform Claude Opus on collation and formatting tasks, not because it can't, but because it has more capacity for overthinking. The simpler the task specification, the less reasoning it needs, and the more a powerful model's additional capability becomes noise rather than signal.

### What it enables

The token budget frame makes two things visible:

1. **Task-model matching**: Different phases of a workflow have different computational requirements. Consider a workflow for turning weekly reading notes into structured concept notes: collating annotations from multiple sources needs consistency more than insight; synthesising patterns across them needs reasoning depth; drafting the final notes to a template needs reliable execution. Each phase maps to a different model tier.
2. **Cost and quality alignment**: Routing high-reasoning-cost tasks to high-capability models and low-reasoning-cost tasks to lighter models isn't just economical; it may improve output quality by reducing the mismatch between model behaviour and task requirements.

### What remains unclear

Whether "token budget" accurately describes the underlying mechanism is an open question; it's a useful conceptual shorthand rather than a precise technical description of how inference works. The practical pattern it points to (match task complexity to model capability) is well-supported by experience, even if the metaphor is approximate.

---

## Sources

- Kwa, T., West, B., Becker, J., et al. (2025). *Measuring AI ability to complete long tasks*. METR. https://metr.org/blog/2025-03-19-measuring-ai-ability-to-complete-long-tasks/

---

## Notes
See also: [[large language models]] for broader context on how LLMs work; and [[2026-02-16-ai-models-for-different-tasks|The hidden inefficiency in how we work with AI]] for a practical application of this concept to academic workflows.
