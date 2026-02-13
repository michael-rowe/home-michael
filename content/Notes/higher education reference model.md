---
title: Higher Education Reference Model (HERM)
description: A standardised ontology providing business, data, and application architectures for the higher education sector — and a practical starting point for making institutional knowledge machine-readable.
aliases:
  - HERM
  - Higher Education Reference Model
type: note
author: "[[Michael Rowe]]"
created: 2026-02-12
updated: 2026-02-12
status: draft
draft: false
tags:
  - information-architecture
  - higher-education
  - ontology
  - curriculum-infrastructure
category:
  - AI and technology
  - Curriculum
related:
  - "[[Essays/documentation-as-infrastructure]]"
  - "[[Essays/curriculum-infrastructure]]"
  - "[[Notes/documentation-debt]]"
keyphrase: "higher education reference model"
slug: notes/higher-education-reference-model
---

> [!info] Why this matters
> When AI agents consume institutional documentation as operational input, they need typed, explicit relationships between entities — not narrative prose. HERM provides a standardised vocabulary for those relationships across the higher education sector: courses relate to programmes, programmes lead to degrees, degrees map to competencies. It is not the only possible ontology, but it is a pragmatic and widely adopted starting point for making institutional knowledge machine-readable.

## Higher Education Reference Model (HERM)

**One-sentence definition:** HERM is a standardised set of reference architectures — business, data, and application — that provides a common vocabulary for describing how higher education institutions are structured and how their processes, systems, and data relate to each other.

HERM is maintained collaboratively by CAUDIT (Council of Australasian University Directors of Information Technology) and UCISA (Universities and Colleges Information Systems Association) and is currently at version 3.2.0 (CAUDIT, 2025; UCISA, 2025). It is used by institutions internationally as a foundation for enterprise architecture, systems integration, and — increasingly — for structuring institutional data in ways that support AI-mediated processes.

### What it provides

HERM defines entity types (programmes, modules, assessments, competencies, students, staff) and the typed relationships between them. A programme *contains* modules. A module *has* learning outcomes. An assessment *tests* outcomes. Outcomes *map to* competencies. These relationships are explicit and directional — precisely the kind of structure that AI agents require for reliable operation.

The model operates at institutional scale, addressing how major functional areas (curriculum, research, student administration, finance) relate to one another and to the data and systems that support them. It does not prescribe how individual teams or educators should organise their working knowledge, but it provides the overarching vocabulary within which more granular structures can sit.

### Where it fits in the infrastructure argument

In the context of *[[documentation-as-infrastructure|documentation as infrastructure]]*, HERM represents what institutions already have — or could have — at the structural level. The problem is that HERM-level relationships are typically documented in narrative prose (module specifications, programme handbooks) rather than encoded as queryable data. The *[[curriculum-infrastructure|graph infrastructure]]* proposal argues for making these relationships computationally traversable rather than leaving them embedded in documents that require human interpretation.

HERM provides a pragmatic starting point for ontology design, but it is not the only option. Institutions may need to extend or adapt it to represent relationships that HERM does not capture well — for instance, the distinction between a clinical placement and a practice competency in nursing education, or the cross-disciplinary connections in an integrated medical curriculum. What matters is internal consistency rather than strict adherence to an external standard. Graph databases are schema-flexible, and ontologies can evolve as institutional needs develop.

### What it does not address

HERM operates at the level of institutional architecture. It does not address how individuals or teams structure the operational knowledge that sits beneath and between institutional systems — the project documentation, meeting records, and professional workflows that constitute the day-to-day fabric of institutional life. That gap is where the [[documentation-debt|documentation debt]] problem is most acute and where the argument for structured operational architecture is most pressing.

---

## Sources

- CAUDIT. (2025). *Higher Education Reference Models (HERM), version 3.2.0*. https://www.caudit.edu.au/communities/caudit-higher-education-reference-models/
- UCISA. (2025). *Higher Education Reference Models*. https://www.ucisa.ac.uk/groups/enterprise-architecture/herm

---

## Notes

Referenced in both *[[documentation-as-infrastructure]]* and *[[curriculum-infrastructure]]*, where it provides the ontological foundation for the three-layer architecture proposal (graph database + vector database + Model Context Protocol).
