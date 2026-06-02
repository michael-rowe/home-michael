---
title: Research harness
description: A research harness is a structured specification — negotiated between a doctoral researcher and their supervisor — of what an AI agent is for in a research project and how it is permitted to operate within it. It adapts the software engineering practice of harness engineering to doctoral inquiry, treating the characteristic problems of AI use in research as problems of an absent operating context rather than of policy or capability.
type: note
author: "[[Michael Rowe]]"
created: 2026-05-31
updated: 2026-05-31
status: draft
draft: false
tags:
  - agent
  - research-methods
  - supervision
  - doctoral-research
  - context-engineering
  - ai-literacy
category: Scholarship
related:
  - "[[Notes/harness-engineering]]"
  - "[[Notes/context-drift]]"
  - "[[Notes/ai-agents]]"
  - "[[Posts/2026-06-01-research-harness-doctoral-ai]]"
  - "[[Guides/research-harness-guide]]"
  - "[[Essays/research-harness-doctoral-ai]]"
keyphrase: research harness
slug: notes/research-harness
linkedin:
---

> [!info] A research harness specifies what an AI agent is doing in a doctoral project
> A research harness is a structured, supervisor-negotiated specification of what an AI agent is for in a research project and how it may operate. It treats the recognisable problems of AI use in doctoral work — drift, offloaded thinking, untraceable contributions — not as failures of policy or model quality, but as what happens when a capable agent works without a defined operating context.

## Research harness

**One-sentence definition:** A research harness is a structured specification of what an AI agent is for in a particular research project and how it is permitted to operate within it.

The term adapts the software engineering practice of [[harness-engineering|harness engineering]] to doctoral inquiry. The underlying claim is that the characteristic problems of AI use in research — work moving faster than the thinking it depends on, cognitive offloading, [[context drift|drift]] into directions nobody deliberately chose, sycophantic confirmation of the researcher's framing, irreproducible answers across prompts, and untraceable attribution — are not primarily problems of institutional policy or model capability. They are problems of working with a capable [[ai-agents|agent]] in the absence of a specified operating context. The response is to specify that context.

The harness has seven components:

- **Knowledge base**: the material the agent can see; if it isn't in the accessible context, it doesn't exist for the agent.
- **Interpretive permissions**: how the agent may reason: the named tradition plus project-specific rules about legitimate inference and overreach.
- **Tools**: what the agent can do, specified as capabilities rather than particular products.
- **Authority**: what the agent may do: *autonomous*, *supervised*, and *reserved* actions.
- **Scope register**: off-topic but potentially useful material, preserved rather than pursued or discarded.
- **Process record**: the agent's external memory across sessions, and the thing that makes contributions traceable.
- **Amendment protocol**: distinguishes one-off exceptions from deliberate changes to the harness itself.

Materially, a harness is a folder of plain markdown files alongside the project's other documents. It can begin as a single sentence under each component and mature as the work encounters cases the first version did not anticipate.

### Relevance to health professions education

For health professions doctorates (e.g. clinical PhDs, professional doctorates, candidates balancing research against practice and teaching) the harness gives supervision a concrete shared object that can be negotiated around. The supervisory conversation shifts from the unanswerable "should you be using AI for this?" to specific, inspectable claims: what the interpretive permissions allow, what falls into the reserved category, why a particular amendment was made. It is a governance instrument, but building and reviewing one also develops how supervisor and candidate think about AI in inquiry.

---

The concept is developed in full in the essay [[research-harness-doctoral-ai|The research harness: a framework for bounded AI use in doctoral work]], and also published as a practical [[research-harness-guide|quick-reference guide]].
