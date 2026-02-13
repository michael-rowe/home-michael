---
title: Documentation debt
description: The accumulated cost of outdated, ambiguous, or poorly structured institutional knowledge — manageable when humans compensate, operationally consequential when AI agents depend on it literally.
aliases:
  - documentation debt
type: note
author: "[[Michael Rowe]]"
created: 2026-02-12
updated: 2026-02-12
status: draft
draft: false
tags:
  - documentation
  - information-architecture
  - AI-integration
  - knowledge-management
category:
  - AI and technology
related:
  - "[[Essays/documentation-as-infrastructure]]"
  - "[[Essays/curriculum-infrastructure]]"
  - "[[Notes/higher-education-reference-model]]"
keyphrase: "documentation debt"
slug: notes/documentation-debt
---

> [!info] Why this matters
> Institutions have always tolerated outdated, ambiguous, and poorly structured documentation because human readers compensate — they infer, they ask colleagues, they work around gaps. When AI agents become consumers of the same documentation, that compensation disappears. Documentation debt stops being an inconvenience and becomes a source of operational failure.

## Documentation debt

**One-sentence definition:** Documentation debt is the accumulated cost of outdated, ambiguous, or poorly structured institutional knowledge that becomes operationally consequential when AI agents depend on it.

The concept extends the well-established idea of *technical debt* from software engineering (Cunningham, 1992). Technical debt describes how shortcuts in code — individually rational, collectively costly — compound over time, making systems progressively harder to maintain. Documentation debt applies the same logic to institutional knowledge: every policy that is updated without revising the procedures that reference it, every curriculum mapping spreadsheet that falls out of sync with module content, every process that depends on knowledge in someone's head rather than a maintained record. Each instance is unremarkable. The debt compounds silently.

### What makes it different from just "bad documentation"

The distinction is not about quality but about *consequence*. Institutions have always had imperfect documentation. What changes is the operational weight that documentation must bear. When documentation serves human readers, human flexibility provides a safety net — readers infer from context, recognise when something seems wrong, and seek clarification. When documentation serves AI agents, the safety net disappears. The agent operates on the information as given, literally and at scale.

This is the category shift described in *[[documentation-as-infrastructure|Documentation becomes infrastructure when AI agents are the readers]]*: documentation moves from reference material (where inaccuracies are tolerable) to operational architecture (where inaccuracies cause system failures). Documentation debt is what makes the infrastructure unreliable.

### How it manifests in institutions

At institutional scale, documentation debt manifests as *artificial information scarcity*. The information required for compliance verification, quality assurance, and curriculum coordination exists — it was designed by educators, documented in module specifications, recorded in assessment blueprints — but it exists across multiple systems in formats designed for human reading. Staff who created this structure cannot efficiently access it for verification or reporting because the infrastructure makes it inaccessible.

This is not a technology deficit. It is an architecture deficit. The information is present; the relationships between pieces of information are not.

### When it becomes critical

Documentation debt is tolerable as long as human readers remain the primary consumers of institutional knowledge. It becomes critical at the point where institutions begin integrating AI agents into operational workflows — advising students, processing compliance queries, generating reports, supporting curriculum design. At that threshold, every instance of accumulated debt becomes a potential failure point.

---

## Sources

- Cunningham, W. (1992). The WyCash portfolio management system. *OOPSLA '92 Experience Report*. http://c2.com/doc/oopsla92.html

---

## Notes

The concept is used across *[[documentation-as-infrastructure|Documentation becomes infrastructure]]* and *[[curriculum-infrastructure|Graph infrastructure for professional education curricula]]*, where it explains why current curriculum management systems fail to support the structural queries that compliance and quality assurance processes require.
