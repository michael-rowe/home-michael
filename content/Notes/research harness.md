---
title: Research harness
description: A research harness is a structured specification, negotiated between a doctoral researcher and their supervisor, of what an AI agent is for in a research project and how it's permitted to operate within it. It adapts the software engineering practice of harness engineering to doctoral inquiry, and treats the characteristic problems of AI use in research as the result of an agent working without a defined operating context.
meta-description: "The research harness: a framework for AI use in PhD research that specifies what an AI agent may see, do, and decide, agreed with the supervisor."
type: note
author: "[[Michael Rowe]]"
created: 2026-05-31
updated: 2026-09-28
draft: false
tags:
  - agent
  - research-methods
  - supervision
  - doctoral-research
  - context-engineering
  - ai-literacy
category:
  - Scholarship
related:
  - "[[Notes/harness-engineering]]"
  - "[[Notes/context drift]]"
  - "[[Notes/ai-agents]]"
  - "[[Posts/2026-06-01-research-harness-doctoral-ai]]"
  - "[[Posts/2026-08-17-ai-and-doctoral-supervision]]"
  - "[[Guides/research-harness-guide]]"
  - "[[Essays/research-harness-doctoral-ai]]"
keyphrase: "framework for AI use in PhD research"
linkedin:
reviewed:
  - note_writer
  - writing_style
  - SEO_optimiser
  - copy_editor
---

> [!info] A research harness specifies what an AI agent is doing in a doctoral project
> A research harness is a structured, supervisor-negotiated specification of what an AI agent is for in a research project and how it may operate. The familiar problems of AI use in doctoral work — drift, offloaded thinking, untraceable contributions — are what happens when a capable agent works without a defined operating context, and the harness supplies one.

## Research harness

**One-sentence definition:** A research harness is a structured specification of what an AI agent is for in a particular research project and how it's permitted to operate within it.

The term adapts the software engineering practice of [[Notes/harness-engineering|harness engineering]] to doctoral inquiry, as a framework for AI use in PhD research. It starts from the characteristic problems of AI in research: work moving faster than the thinking it depends on, cognitive offloading, [[Notes/context drift|drift]] into directions nobody deliberately chose, [[Notes/sycophancy|sycophantic]] confirmation of the researcher's framing, answers that change from one prompt to the next, and contributions nobody can trace. Institutional policy and better models don't fix these, because they come from working with a capable [[Notes/ai-agents|agent]] without a specified operating context. The response is to specify that context.

The harness has seven components:

- **Knowledge base**: the material the agent can see; if it isn't in the accessible context, it doesn't exist for the agent.
- **Interpretive permissions**: how the agent may reason — the named methodological tradition, plus project-specific rules about what counts as legitimate inference and what counts as overreach.
- **Tools**: what the agent can do, specified as capabilities, so the harness survives a change of product.
- **Authority**: what the agent may do on its own, sorted into *autonomous*, *supervised*, and *reserved* actions.
- **Scope register**: off-topic but potentially useful material, kept for later instead of being pursued or discarded.
- **Process record**: the agent's external memory across sessions, and the thing that makes its contributions traceable.
- **Amendment protocol**: how one-off exceptions are told apart from deliberate changes to the harness itself.

Materially, a harness is a folder of [[Notes/markdown|markdown]] files alongside the project's other documents. It can begin as a single sentence under each component and mature as the work meets cases the first version didn't anticipate.

### What it gives a supervisory conversation

Health professions doctorates — clinical PhDs, professional doctorates, candidates balancing research against practice and teaching — gain a concrete shared object that supervisor and candidate can negotiate around. Take a nurse on a professional doctorate who is using an agent to help code interview transcripts about medication errors. The harness might let the agent propose initial codes, reserve the construction of themes to the candidate, and record every suggestion the candidate accepts. The supervisory conversation then moves from the unanswerable "should you be using AI for this?" to specific claims both people can inspect: what the interpretive permissions allow, what falls into the reserved category, and why a particular amendment was made. The harness is a governance instrument, and building and reviewing one also develops how supervisor and candidate think about AI in inquiry.

The concept is developed in full in the essay [[Essays/research-harness-doctoral-ai|The research harness: a framework for bounded AI use in doctoral work]], and is also published as a practical [[Guides/research-harness-guide|quick-reference guide]].

---

## Sources

- Rowe, M. (2026). *The research harness: A framework for bounded AI use in doctoral work* [Preprint]. EdArXiv. https://doi.org/10.35542/osf.io/mwhgz_v1
- Rowe, M. (2026). [[Guides/research-harness-guide|The research harness: A one-page guide for doctoral researchers]].
