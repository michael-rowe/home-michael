---
type: essay
title: Documentation becomes infrastructure when AI agents are the readers
slug: essays/documentation-as-infrastructure
description: >-
  When AI agents consume documentation as operational input, it undergoes a
  category shift from reference material to operational
  architecture—inaccuracies no longer inconvenience readers, they cause system
  failures. This essay argues that the primary bottleneck for institutional AI
  integration is not AI capability but information architecture, making the
  transition to documentation-as-infrastructure a governance imperative.
meta-description: >-
  Examining how documentation shifts from human reference material to
  machine-executable infrastructure when AI agents are the primary readers.
author:
  - '[[Michael Rowe]]'
affiliation:
  - University of Lincoln
email:
  - mrowe@lincoln.ac.uk
abstract: >-
  Documentation — broadly understood as any structured knowledge used to achieve
  goals, including teaching materials, institutional policies, curriculum
  mapping documents, and assessment frameworks — undergoes a category shift when
  AI agents consume it as operational input. It moves from reference material,
  where inaccuracies are inconvenient but tolerable, to operational
  architecture, where inaccuracies cause system failures. This essay examines
  the shift through three conceptual lenses: from technical debt to
  documentation debt (the accumulated cost of outdated, ambiguous, or poorly
  structured information that becomes operationally consequential when AI agents
  depend on it); from reference material to operational architecture (a shift in
  function, not just quality); and from charitable human interpretation to
  literal machine execution. Drawing on personal experimentation with
  AI-integrated knowledge management and institutional analysis in higher
  education, the essay argues that the primary bottleneck for institutional AI
  integration is not AI capability but information architecture. Documentation
  debt creates artificial information scarcity: staff who created curriculum
  structure cannot efficiently query it, not because information is absent but
  because infrastructure makes it inaccessible. Well-structured operational
  architecture provides trust and auditability that unstructured approaches
  cannot, regardless of model capability. As AI accelerates the pace of
  institutional change, governance mechanisms designed around periodic review
  cycles become structurally inadequate, making this architectural shift not
  just an efficiency concern but a governance imperative. This transformation
  touches every part of an institution, requiring a fundamental rebuilding of
  foundations rather than the mere decoration of existing systems. Ultimately,
  the question for AI-forward institutions is whether they will recognize this
  architectural imperative before the gap between AI capability and information
  infrastructure becomes insurmountable, ensuring that governance mechanisms
  match the pace of the processes they are meant to oversee.
keyphrase: documentation as infrastructure
version: 0.4
created: 2026-02-09T00:00:00.000Z
modified: 2026-02-10T00:00:00.000Z
tags:
  - artificial-information-scarcity
  - continuous-governance
  - documentation-debt
  - information-architecture
  - infrastructure
  - operational-architecture
doi: null
---
> [!info] **About this essay**
> - **Author**: Michael Rowe ([ORCID](https://orcid.org/0000-0002-1538-6052); mrowe@lincoln.ac.uk)
> - **Affiliation**: University of Lincoln
> - **Created**: Feb 09, 2026
> - **Version**: 0.4
> - **Modified**: See [Github record](https://github.com/michael-rowe/emergent-scholarship/tree/main/docs/essays)
> - **Keywords**: artificial intelligence, documentation debt, information architecture, infrastructure, knowledge management, operational architecture
> - **License**: [Creative Commons Attribution 4.0 International](https://creativecommons.org/licenses/by/4.0/)

**Abstract**

Documentation — broadly understood as any structured knowledge used to achieve goals, including teaching materials, institutional policies, curriculum mapping documents, and assessment frameworks — undergoes a category shift when AI agents consume it as operational input. It moves from reference material, where inaccuracies are inconvenient but tolerable, to operational architecture, where inaccuracies cause system failures. This essay examines the shift through three conceptual lenses: from technical debt to documentation debt (the accumulated cost of outdated, ambiguous, or poorly structured information that becomes operationally consequential when AI agents depend on it); from reference material to operational architecture (a shift in function, not just quality); and from charitable human interpretation to literal machine execution. Drawing on personal experimentation with AI-integrated knowledge management and institutional analysis in higher education, the essay argues that the primary bottleneck for institutional AI integration is not AI capability but information architecture. Documentation debt creates artificial information scarcity: staff who created curriculum structure cannot efficiently query it, not because information is absent but because infrastructure makes it inaccessible. Well-structured operational architecture provides trust and auditability that unstructured approaches cannot, regardless of model capability. As AI accelerates the pace of institutional change, governance mechanisms designed around periodic review cycles become structurally inadequate, making this architectural shift not just an efficiency concern but a governance imperative.

## Key takeaways

1. **Documentation undergoes a category shift when AI agents are the readers.** It moves from reference material — where inaccuracies are inconvenient but tolerable — to operational architecture, where inaccuracies cause system failures. This is a change in what documentation *is*, not just how good it needs to be.
2. **Documentation debt is the new technical debt.** Each instance of outdated content, ambiguous specification, or implicit assumption becomes a potential failure point when AI agents consume it literally, without the charitable interpretation that human readers provide.
3. **The fundamental mismatch is between associative and typed knowledge.** Human cognition navigates through fuzzy connections and contextual inference; computational systems require typed relationships, explicit structure, and specified connections. This is not a limitation that better models will resolve.
4. **The primary bottleneck for institutional AI integration is information architecture, not AI capability.** Most institutions already have access to models sophisticated enough to do genuinely useful work. What they lack is documentation structured in ways that allow those models to function reliably.
5. **Well-structured operational architecture provides trust and auditability that unstructured approaches cannot.** A language model working with unstructured prose may produce plausible output, but typed relationships create a verification layer that makes AI reasoning auditable — a governance requirement at institutional scale.
6. **When change becomes continuous, governance must become continuous too.** As AI accelerates the pace of curriculum change, quality assurance mechanisms designed around periodic review cycles become structurally inadequate. Documentation-as-infrastructure enables the real-time, continuous verification that responsive governance requires.

## Introduction

"Documentation" conventionally evokes technical materials — API references, user manuals, system specifications. This essay uses the term more broadly. Documentation encompasses any structured knowledge used to achieve goals: teaching and learning materials, institutional policies, professional regulations, curriculum mapping documents, procedural guidelines, assessment frameworks, and personal knowledge systems. Documentation, in this sense, represents the recorded context that enables action — whether that action involves learning, decision-making, compliance, or collaboration.

Something fundamental is changing about this recorded context. When AI agents consume documentation as operational instructions — interpreting curriculum documents to advise students, processing policies to guide administrators, reading learning materials to support teaching — documentation undergoes a category shift. It moves from reference material, where inaccuracies are inconvenient but tolerable, to operational architecture, where inaccuracies cause system failures. This is not a feature upgrade to existing documentation practices. It is a change in what documentation *is*.

The shift is already visible at organisational scale. Mintlify, a documentation platform serving developer teams, has articulated it directly: documentation is "no longer just explanatory, but also operational input" (Li et al., 2026). But the pattern they've identified in developer documentation manifests wherever AI agents consume structured knowledge — in institutional policies, learning materials, regulatory frameworks, and personal workflows. The architectural implications are the same regardless of domain: what was designed for human interpretation must now function as machine-executable infrastructure.

Three conceptual shifts frame what follows. The first is from technical debt — the accumulated cost of shortcuts in software development (Cunningham, 1992) — to documentation debt: the accumulated cost of outdated, ambiguous, or poorly structured information that becomes operationally consequential when AI agents depend on it. The second is from reference material to operational architecture: a shift in function, not just in quality. The third is from charitable human interpretation to literal machine execution: the recognition that AI agents will not work around what a human reader would forgive.


## Documentation debt and the removal of a safety net

When a coding agent reads an API reference to generate software, an outdated parameter description doesn't just confuse a developer — it causes the agent to produce broken code at scale. The documentation has become load-bearing. Mintlify recognised this early, building infrastructure that serves both human and AI consumers simultaneously because the two audiences have fundamentally different architectural requirements but must draw from the same source of truth (Andreessen Horowitz, 2025).

Documentation debt operates like its better-known cousin, technical debt (Cunningham, 1992): each instance of outdated content, each ambiguous specification, each implicit assumption that a human reader would charitably interpret becomes a potential failure point when an AI agent consumes it literally. In developer ecosystems, this means broken software. In institutional contexts, the mechanism is identical: outdated curriculum documents misleading student-advising AI, ambiguous policy language creating inconsistent AI-mediated interpretations, stale learning materials feeding AI tutoring systems with inaccurate information.

The common thread is the removal of a safety net. When documentation serves human readers, human flexibility compensates for its shortcomings — readers infer meaning from context, recognise when something seems wrong, and seek clarification. When documentation serves AI agents, that safety net disappears. The documentation must bear the full weight of operational accuracy, which is precisely what makes it infrastructure rather than reference material.


## The fundamental mismatch: associative versus typed knowledge

This infrastructure shift reflects a deeper mismatch in how humans and machines construct meaning. Human cognition is fundamentally associative — we navigate knowledge through fuzzy connections, implied relationships, and contextual interpretation. We tolerate ambiguity because we can usually resolve it through inference. Computational systems construct meaning differently, operating through typed relationships: explicit structure, literal interpretation, and specified connections between entities. Where a human reader works with implication and inference, a machine works with specification and execution.

This is not a limitation of current AI that will be resolved with better models. It is a fundamental difference in how meaning is constructed, rooted in the distinction between statistical pattern-matching and the embodied, contextual understanding that characterises human cognition.

The mismatch creates a specific problem for documentation. Institutions already possess formal ontologies for some of their information architecture — the Higher Education Reference Model (HERM), for instance, provides standardised business, data, and application architectures for the sector (CAUDIT, 2025; UCISA, 2025). HERM makes relationships between entities explicit and typed: courses relate to programmes, programmes lead to degrees, degrees map to competencies. These are precisely the kinds of typed, directional relationships that AI agents require. But HERM operates at institutional scale. It doesn't address how individuals or teams structure the knowledge that sits beneath and between institutional systems — the project documentation, meeting records, and professional workflows that constitute the operational fabric of institutional life.

Not all knowledge should be formalised into typed relationships, and deciding what to formalise, when, and for what purpose, is itself a substantive intellectual challenge. The section that follows explores that challenge through personal experimentation.


## Personal experimentation: building operational architecture

The pattern I'm describing didn't emerge from institutional analysis. It became visible through trying to get AI to work reliably within my own professional workflow.

I maintain a knowledge base in Obsidian that serves as operational infrastructure for my work as a Director of Teaching and Learning — meeting notes, project plans, workstream trackers, and the various documents that accumulate across a role spanning twelve areas of responsibility. For most of its life, this system was designed entirely for me. Documents linked to other documents through associations I could navigate intuitively. The trouble started when I began working with AI agents that needed to navigate the same material.

The most revealing experiment involved adding machine-readable metadata to every operational document — meetings, projects, workstreams, events — using YAML frontmatter that makes explicit the relationships between entities. A meeting note carries metadata connecting it to its parent project, relevant workstream, and participants. A project note declares its status, phase, timeline, and relationships to other projects. These aren't conceptual associations between ideas. They are operational plumbing — typed relationships that connect meetings to projects, projects to workstreams, workstreams to areas of responsibility, and areas of responsibility to strategic priorities.

<details>
<summary><strong>How typed relationships work in practice: YAML frontmatter examples</strong></summary>

A meeting note carries metadata that connects it to its parent project, relevant workstream, associated process cycle, and the people who attended:

```yaml
note_type: meeting
start_date: 2026-01-24
participants:
  - "[[Sarah Johnson]]"
  - "[[Tom Chen]]"
project: "[[Project - Collaborative Professional Learning]]"
workstream: "[[Teaching Quality]]"
process: "[[Process - Validation (2025-2026)]]"
needs_review: true
```

A project note, in turn, declares its domain, areas of responsibility, status, phase, timeline, and relationships to other projects:

```yaml
note_type: Project
status: Active
phase: Planning
domain: Work
area:
  - Programme Development
  - AI Integration
project_start: 2026-01
project_due: 2026-09
related:
  - "[[Project - AI Assessment Design]]"
  - "[[Project - Institutional AI Governance]]"
```

The system also includes context files — what Anthropic calls CLAUDE.md files (Anthropic, 2024) — that sit at the root of a project and provide an AI agent with the operational information it needs to work within that environment. These aren't documentation *about* a project. They specify principles, constraints, file structures, naming conventions, and working methods. Traditional documentation explains; operational context enables.

</details>

When an AI agent can traverse these typed connections, it stops being a sophisticated search tool and starts functioning as something closer to a cognitive partner that understands the *structure* of the work, not just the *content* of individual documents. The practical consequences became vivid during a recent leadership meeting. The chair asked for an ad hoc progress report across my areas of responsibility. Because the operational architecture was in place — meetings linked to projects, projects linked to workstreams, workstreams carrying status updates and active tasks — an AI agent could traverse the entire system and produce a comprehensive, structured report in two minutes. Not a summary of documents, but a synthesis drawn from the typed relationships between them. That's what operational architecture enables — not because the AI is particularly clever, but because the information was structured in a way that made the work legible to a machine.

As the operational architecture has matured, the proportion of professional work that can be reliably delegated has expanded substantially. Evidence-based persona files specify how an AI agent should behave in particular contexts — meeting summarisation, stakeholder analysis, lecture development — and function as executable specifications rather than reference documentation. The nature of the work shifts: less execution, more architecture, design, and verification. The value moves upstream.

<details>
<summary><strong>Persona files as executable specifications</strong></summary>

A meeting summariser persona doesn't just describe what a good meeting summary looks like. It specifies the analysis process (extract actions first, then decisions, then relevant context), the output structure (actions, decisions, summary, notes), the metadata fields to populate, and the conventions to follow (British spelling, sentence case, link to parent project and workstream). A negotiation coach persona encodes an entire strategic framework — stakeholder analysis, tradeable variables, signal recognition — that an AI agent consumes as operational instructions.

These aren't documentation *about* how to do things. They are executable specifications. The AI agent reads them and operates accordingly. This is the category change in miniature: the same information that might appear in a training manual or procedural guide, restructured so that it functions as infrastructure rather than reference material.

</details>

### Trust and auditability

A language model working with unstructured prose will still infer relationships — models are remarkably capable of drawing plausible connections from context. The output might look fine. But "looks fine" is not the same as "can be verified." When I generated that progress report, I could trace exactly what the AI was working with: which meetings it drew from, which project status fields it referenced, which workstream connections it followed. The typed relationships created a verification layer.

Retrieval-augmented generation on its own gives an AI access to your knowledge; operational architecture gives you reason to trust what it does with that knowledge. For personal workflows, this distinction is a convenience. For institutional documentation — where decisions affect students, regulatory compliance, and resource allocation — it becomes a governance requirement.

<details>
<summary><strong>Data governance, the architecture paradox, and local models</strong></summary>

Operational architecture of this kind inevitably contains personal data — not just the user's own information, but the names, roles, meeting attendance, and project involvement of colleagues and stakeholders. The better the architecture, the more useful this structured data becomes for AI agents, and the more sensitive it becomes from a governance perspective. This creates an architecture paradox: the same typed relationships that make AI trustworthy and auditable also make the system a more potent repository of personal information. At personal scale, this is managed through responsible practice and local storage decisions. At institutional scale, it intersects directly with data protection regulation and information governance frameworks. Infrastructure requires governance in a way that reference material never did.

This governance concern points toward a practical architectural response. Local open-source models work for this use case precisely because well-structured operational architecture reduces the reasoning burden on the model itself. Traversing typed relationships, compiling structured reports, following explicit workflow specifications — these tasks require reliable instruction-following, not frontier-model reasoning. The architecture does the intellectual heavy lifting; the model executes against it. This inverts the common assumption that useful AI integration demands the most capable available model. When documentation functions as operational infrastructure, a less capable model operating locally on sensitive data can outperform a more capable model working with poorly structured information accessed through the cloud. Architecture and privacy become complementary design considerations rather than competing ones.

</details>

<details>
<summary><strong>What resists formalisation, and the limits of personal knowledge systems</strong></summary>

Not all knowledge should be formalised in this way, and premature formalisation can actively damage the associative thinking that generates insight in the first place. Early-stage ideas, emerging connections, half-formed arguments — these thrive precisely because their relationships are fuzzy and provisional. Forcing them into typed structures too early can crystallise thinking that needs to remain fluid. The question isn't whether to formalise but *when*, and for what purpose. Knowledge that AI agents will consume as operational input benefits enormously from structure. Knowledge that is still being developed may be harmed by it.

The personal knowledge systems that have gained traction over the past several years — Tiago Forte's PARA method (Forte, 2022), the Zettelkasten tradition, and various "building a second brain" approaches — were all designed to optimise knowledge retrieval and connection for human cognition. They work well for that purpose. But they were not designed for a world in which AI agents are a second consumer of the same material. The design criteria are shifting, and the personal productivity community has only begun to reckon with what that means. Mintlify is addressing this for developer documentation (Li & Li, 2024). Equivalent thinking has barely emerged for personal knowledge management or institutional documentation, where the dual-audience design challenge is just as pressing.

</details>

### The pattern revealed

What this experimentation surfaces is a set of shifts in emphasis when documentation transitions from human reference material to operational architecture: from prose to structure, from explanatory to executable, from comprehensive to current, from implicit to explicit. These are not absolute transitions — prose, explanation, comprehensiveness, and implication all retain value for human readers. But when AI agents become consumers of the same material, the balance shifts, and the direction of travel is consistent regardless of scale.


## Institutional implications

The pattern that emerges from personal experimentation manifests at every scale where structured knowledge enables action. In higher education, its full complexity becomes visible.

At institutional scale, documentation debt manifests as artificial information scarcity. The information required for compliance verification, quality assurance, and curriculum coordination exists — it was designed by educators, documented in module specifications, recorded in assessment blueprints — but it exists across multiple systems in formats designed for human reading. The structure is present; the infrastructure makes it inaccessible.

Programme revalidation in regulated professions illustrates the problem concretely. When a nursing programme undergoes revalidation across multiple specialisms, the process can consume months of staff time. Documents are scattered across curriculum management systems, institutional SharePoint sites, and individual drives. Competency mapping is maintained manually in spreadsheets. Communication about the process happens via email — outside the systems it concerns. Implicit knowledge holds the process together: experienced staff who remember which documents contain which mappings, which module leads to contact, which regulatory frameworks have been updated since the last review. Every document is Word, PDF, PowerPoint, or Excel. There are no queryable relationships between them. The information exists; accessing it systematically is the problem.

Institutions already possess something approaching a formal ontology: HERM defines standardised entities and the typed relationships between them (CAUDIT, 2025; UCISA, 2025). When institutional documentation functions as operational architecture, the implications cascade across stakeholder relationships. Regulatory compliance, currently operating through periodic human review of narrative PDFs, becomes a fundamentally different activity when curriculum documentation exists as structured data — compliance gaps become computationally identifiable rather than dependent on a reviewer's thoroughness. Student experience shifts similarly: when programme specifications exist as queryable data rather than static documents, an AI agent can navigate prerequisite chains, surface elective options, and flag timetable conflicts on a student's behalf. But this only works if the underlying architecture is sound.

<details>
<summary><strong>Process automation versus workflow automation</strong></summary>

For most institutions, being AI-forward means deploying AI tools — chatbots for student queries, writing assistants for staff, automated marking for routine assessments. This is process automation: taking existing workflows and making individual steps faster. Institutions have attempted process automation for decades, with mixed results, because the approach is inherently brittle.

What is emerging now is qualitatively different. Rather than automating individual steps within predetermined workflows, AI agents are beginning to execute complex, multi-step tasks with increasing autonomy — what might more accurately be called workflow automation. Process automation asks: which existing step can we make faster? Workflow automation asks: given a goal and access to structured information, can an agent determine and execute the steps required to reach it? The first is bounded by the imagination of whoever designed the process. The second is bounded by the quality of the information architecture the agent has access to.

</details>

### The capability-architecture gap

Research from METR suggests that the length of tasks AI agents can complete autonomously has been doubling approximately every seven months over the past six years (Kwa et al., 2025). This is a striking trajectory — but capability growth is only meaningful if institutions can actually leverage it. An AI agent that can work autonomously for longer periods still requires structured context and explicit workflows to execute against. Without these, extended autonomy simply means more time to produce unreliable outputs from poorly structured inputs.

The primary bottleneck for institutional AI integration is not AI capability but information architecture. Most institutions already have access to models sophisticated enough to do genuinely useful work. What they lack is documentation structured in ways that allow those models to function reliably. This is not merely a strategic observation — it is the lived experience of practitioners building AI-powered automation in higher education, who consistently report that the primary obstacle is the unpredictability of legacy document-based knowledge. The problem cannot be solved by technologists alone, because the relationships that need to be made explicit are domain-specific.

<details>
<summary><strong>How institutions ended up here: documentation as skeuomorph</strong></summary>

Most institutional knowledge currently exists in human-readable but machine-opaque formats — narrative documents, PDF submissions, committee minutes, email chains. This is not an accident. When institutions moved from paper to digital in the 1990s and 2000s, they adopted formats that simulated paper: Word documents and PDFs that replicated the experience of printed pages. These were skeuomorphs — digital objects that preserved the conventions of the physical medium they replaced. The format made sense at the time, but it embedded a design assumption that has persisted long past its usefulness: that documentation exists to be read by humans, laid out on something resembling a page. What should have been structured data — curriculum specifications, programme regulations, module descriptors — was instead captured in narrative documents optimised for printing and reading, not for computation and traversal. Decades later, institutions are living with the consequences: information that is rich in content but impoverished in structure, readable by people but opaque to machines.

</details>

It is worth acknowledging that this bottleneck claim is bound to a particular moment in AI development. Future models may become substantially better at handling unstructured information. If that happens, the threshold at which poor architecture becomes the binding constraint will shift upward. But it will not disappear. Well-structured operational architecture will remain an advantage even if it ceases to be a strict requirement, because the trust and auditability arguments hold regardless of model capability. An AI agent that can work with messy data is not the same as an AI agent whose reasoning you can verify.

### When change becomes continuous

The temporal assumptions embedded in current quality assurance processes presuppose a curriculum that changes slowly and predictably. Programme revalidation cycles run every three to five years. Annual monitoring reviews examine the previous year's data. Committee approval processes for curriculum changes can take months to propagate into institutional systems — and sometimes fail to propagate at all.

These assumptions are becoming untenable. As AI becomes embedded in teaching, learning, and assessment — enabling adaptive learning pathways, AI-mediated assessment design, and rapid pedagogical adjustment — the pace of curriculum change will accelerate beyond what periodic human review can assure. A revalidation cycle that assumes curricula change between review points cannot govern a curriculum that changes continuously.

This is not merely an efficiency argument. It is a governance argument: when documentation becomes operational infrastructure, consumed by AI agents and acted upon in real time, governance must become equally responsive. Continuous verification — automated structural checks triggered by curriculum changes, real-time compliance monitoring, immediate identification of gaps introduced by modifications — becomes a governance requirement, not a technological luxury. A companion essay proposes specific architecture for this: graph databases encoding curriculum structure as typed relationships, enabling the real-time traversal and constraint checking that continuous governance demands (see *[Beyond document management: Graph infrastructure for professional education curricula](curriculum-infrastructure)*).

The architectural precondition is the same one this essay has been developing: documentation structured as operational architecture rather than reference material. Without it, continuous governance is impossible regardless of how capable the AI systems become. With it, governance mechanisms can match the pace of the processes they govern.

### Constraints

Transforming legacy documentation into operational architecture is not a technology project; it is a governance challenge that touches every part of an institution. Distributed ownership means no single team can mandate architectural standards. And there is an uncomfortable cultural dimension: making implicit institutional knowledge explicit threatens the gatekeeping functions that some individuals and units have built their influence around. The colleague whose value derives from knowing how things *really* work has a rational interest in that knowledge remaining undocumented.

These challenges explain why institutional AI integration so often stalls at the level of individual tools bolted onto existing systems. The problem is not that institutions lack AI capability or even AI strategy. It is that they have not recognised the architectural precondition: when documentation becomes operational infrastructure, the foundations need to be rebuilt, not decorated.


## Conclusion

Documentation becomes operational architecture when AI agents are the primary consumers. This pattern holds across personal knowledge systems, organisational documentation platforms, and institutional information environments. It applies to curriculum documents, institutional policies, learning materials, regulatory frameworks, and personal workflows — any structured knowledge that enables action. And the shift creates an imperative: information architecture either enables or constrains what AI can do. Currently, it overwhelmingly constrains.

The gap between AI capability and institutional ability to leverage it is widening. METR's research shows autonomous task completion doubling approximately every seven months (Kwa et al., 2025). But this capability trajectory matters only if institutions have the information architecture to support it. An AI agent that can work unsupervised for longer does not help an institution whose curriculum exists as narrative PDFs, whose policies are stored in committee minutes, and whose institutional knowledge lives in the heads of long-serving staff.

The urgency is compounding. As AI accelerates the pace of institutional change — enabling rapid curriculum adaptation, AI-mediated assessment, and personalised learning pathways — governance mechanisms designed around periodic review cycles are becoming structurally inadequate. Institutions face not one but two widening gaps: between AI capability and information architecture, and between the pace of change and the pace of assurance. Both gaps close only when documentation becomes infrastructure.

The question facing institutions — particularly those claiming to be AI-forward — is whether they will recognise this as an architectural imperative before the gap between capability and infrastructure becomes insurmountable.


## References

Andreessen Horowitz. (2025, May 15). *Emerging developer patterns for the AI era*. https://a16z.com/nine-emerging-developer-patterns-for-the-ai-era/

Anthropic. (2024). *Model Context Protocol specification*. https://modelcontextprotocol.io/

CAUDIT. (2025). *Higher Education Reference Models (HERM), version 3.2.0*. https://www.caudit.edu.au/communities/caudit-higher-education-reference-models/

Forte, T. (2022). *Building a second brain: A proven method to organise your digital life and unlock your creative potential*. Profile Books.

Kwa, T., West, M., et al. (2025). *Measuring AI ability to complete long tasks*. METR. https://metr.org/blog/2025-03-19-measuring-ai-ability-to-complete-long-tasks/

Li, J., Li, Y., Wang, H., & Lee, H. (Hosts). (2026, January 23). How Mintlify is rebuilding documentation for coding agents [Audio podcast episode]. In *The a16z Show*. Andreessen Horowitz.

UCISA. (2025). *Higher Education Reference Models*. https://www.ucisa.ac.uk/groups/enterprise-architecture/herm
