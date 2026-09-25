---
title: Documentation debt
description: The accumulated cost of outdated, ambiguous, or poorly structured institutional knowledge — long paid invisibly by readers who work around the gaps, and exposed when AI agents read the same documents literally.
meta-description: "What is documentation debt? The hidden cost of outdated institutional documents, which staff read around and AI agents take literally."
aliases:
  - documentation debt
type: note
author: "[[Michael Rowe]]"
created: 2026-02-12
updated: 2026-09-25
draft: false
tags:
  - documentation
  - information-architecture
  - ai-integration
  - information-management
category:
  - Technology
related:
  - "[[Essays/documentation-as-infrastructure]]"
  - "[[Essays/curriculum-infrastructure]]"
  - "[[Notes/higher education reference model]]"
  - "[[Notes/agentic workflows]]"
keyphrase: "what is documentation debt"
linkedin:
reviewed:
  - note_writer
  - writing_style
  - SEO_optimiser
  - copy_editor
---

> [!info] Documentation debt comes due when the reader stops compensating.
> Institutions have always tolerated outdated, ambiguous, and poorly structured documentation because human readers compensate — they infer, they ask colleagues, they work around gaps. When AI agents read the same documentation, that compensation disappears. Documentation debt stops being an inconvenience and becomes a source of operational failure.

## Documentation debt

**One-sentence definition:** Documentation debt is the accumulated cost of outdated, ambiguous, or poorly structured institutional knowledge, a cost people have always paid without noticing by reading around the gaps.

[[Notes/ai-agents|AI agents]] didn't create the debt, but they call it in, because an agent can't read around a gap the way a colleague can.

The concept extends the idea of *technical debt* from software engineering (Cunningham, 1992). Technical debt describes how shortcuts in code — individually rational, collectively costly — compound over time, making systems progressively harder to maintain. Documentation debt applies the same logic to institutional knowledge: every policy that is updated without revising the procedures that reference it, every curriculum mapping spreadsheet that falls out of sync with module content, every process that depends on knowledge in someone's head rather than a maintained record. No single instance is remarkable, and the debt compounds without anyone noticing.

### How it differs from bad documentation

Institutions have always had imperfect documentation. What changes is the weight that documentation has to bear once an agent is reading it and acting on what it says, literally and at scale.

Take a module specification that still gives the exam a 60 per cent weighting a year after the programme team moved it to 50 per cent. A programme leader reading it notices the mismatch and checks with the module lead. A student-advising agent reading the same document tells a student the exam is worth 60 per cent, and gives the same answer to every student who asks.

This is the category shift described in *[[Essays/documentation-as-infrastructure|Documentation becomes infrastructure when AI agents are the readers]]*: documentation moves from reference material (where inaccuracies are tolerable) to operational architecture (where inaccuracies cause system failures). Documentation debt is what makes the infrastructure unreliable. The debt becomes critical when an institution puts agents into operational workflows — advising students, answering compliance queries, generating reports, supporting curriculum design — because at that point every stale or ambiguous document is a place the workflow can fail.

### How it shows up in institutions

At institutional scale, documentation debt manifests as *artificial information scarcity*. The information required for compliance verification, quality assurance, and curriculum coordination exists — it was designed by educators, documented in module specifications, recorded in assessment blueprints — but it's spread across multiple systems in formats designed for human reading. The staff who built that structure can't pull it together for verification or reporting, because what's missing is a record of how the pieces relate, and that record usually lives in the heads of experienced colleagues.

---

## Sources

- Cunningham, W. (1992). The WyCash portfolio management system. In *Addendum to the proceedings on object-oriented programming systems, languages, and applications (OOPSLA '92)* (pp. 29–30). ACM. https://doi.org/10.1145/157709.157715

---

## Notes

The concept is used across *[[Essays/documentation-as-infrastructure|Documentation becomes infrastructure]]* and *[[Essays/curriculum-infrastructure|Graph infrastructure for professional education curricula]]*, where it explains why current curriculum management systems fail to support the structural queries that compliance and quality assurance processes require.
