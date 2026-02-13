---
type: essay
title: Documentation becomes infrastructure when AI agents are the readers
slug: essays/documentation-as-infrastructure
description: "When AI agents consume documentation as operational input, it undergoes a category shift from reference material to operational architecture — inaccuracies no longer merely inconvenience readers, they cause system failures. This essay argues that the primary bottleneck for institutional AI integration is not AI capability but information architecture: how institutional knowledge is structured, maintained, and made available to AI systems. Documentation written for human readers cannot function as reliable AI input without deliberate restructuring around explicit relationships and rigorous maintenance workflows. Treating this transition as a governance imperative — rather than a technical afterthought — determines whether AI integration delivers on its institutional promise."
meta-description: Examining how documentation shifts from human reference material to machine-executable infrastructure when AI agents are the primary readers.
author:
  - "[[Michael Rowe]]"
affiliation:
  - University of Lincoln
email:
  - mrowe@lincoln.ac.uk
keyphrase: documentation as infrastructure
version: 0.9
created: 2026-02-09
modified: 2026-02-12
tags:
  - artificial-information-scarcity
  - continuous-governance
  - documentation-debt
  - information-architecture
  - infrastructure
  - operational-architecture
related:
  - "[[higher education reference model]]"
  - "[[documentation debt]]"
  - "[[curriculum-infrastructure]]"
category:
  - AI and technology
  - Knowledge management
---
> [!info] **About this essay**
> - **Author**: Michael Rowe ([ORCID](https://orcid.org/0000-0002-1538-6052); mrowe@lincoln.ac.uk)
> - **Affiliation**: University of Lincoln
> - **Created**: Feb 09, 2026
> - **Version**: 0.9 (last updated: Feb 12, 2026)
> - **Keywords**: artificial intelligence, documentation debt, information architecture, infrastructure, knowledge management, operational architecture
> - **License**: [Creative Commons Attribution 4.0 International](https://creativecommons.org/licenses/by/4.0/)

### Abstract

Documentation — the recorded context that enables action — undergoes a category shift when AI agents consume it as operational input. This essay defines documentation broadly: any structured or semi-structured representation of knowledge that people create and maintain to support goal-directed activity, from curriculum specifications and institutional policies to project plans and professional workflows. When AI agents interpret such documentation as operational instructions, it moves from reference material, where inaccuracies are inconvenient but tolerable, to operational architecture, where inaccuracies cause system failures. This essay examines the shift through three conceptual lenses: from technical debt to the accumulated cost of outdated, ambiguous, or poorly structured information that becomes operationally consequential when AI agents depend on it; from reference material to operational architecture (a shift in function, not just quality); and from charitable human interpretation to literal machine execution. Drawing on personal experimentation with AI-integrated knowledge management and institutional analysis in higher education, the essay argues that the primary bottleneck for institutional AI integration is not AI capability but information architecture. Well-structured operational architecture shifts the critical demand from a model's reasoning capacity to its ability to follow instructions reliably — inverting the common assumption that useful AI integration requires the most powerful available model. As AI accelerates the pace of institutional change, governance mechanisms designed around periodic review cycles become structurally inadequate, making this architectural shift not just an efficiency concern but a governance imperative.

> [!summary] Key takeaways
> 1. **Documentation undergoes a category shift**. When AI agents consume documentation as operational input, it moves from reference material (where inaccuracies are tolerable) to operational architecture (where inaccuracies cause system failures). Documentation, defined here as any structured representation of knowledge maintained to support goal-directed activity, is not limited to technical materials.
> 2. **Outdated documentation becomes operationally consequential**. The accumulated cost of ambiguous, poorly structured, or stale institutional knowledge compounds silently until AI agents depend on it literally, without the charitable interpretation human readers provide.
> 3. **Information architecture is the primary bottleneck**. Most institutions already have access to models sophisticated enough to do useful work. What they lack is documentation structured in ways that allow those models to function reliably.
> 4. **Instruction following matters more than model intelligence**. Well-structured documentation shifts the critical demand from the model's reasoning capacity to its ability to follow specifications faithfully — meaning effective AI integration depends more on architectural investment than on purchasing access to the most powerful models.
> 5. **Governance must become continuous**. As AI accelerates the pace of institutional change, quality assurance mechanisms built for periodic review cycles become structurally inadequate. Continuous governance requires continuously verifiable documentation.


## Introduction

"Documentation" conventionally evokes technical materials; API references, user manuals, system specifications. This essay uses the term more broadly. Documentation, as I use it here, means any structured or semi-structured representation of knowledge that people create and maintain to support goal-directed activity. This includes teaching and learning materials, institutional policies, professional regulations, curriculum mapping documents, procedural guidelines, assessment frameworks, and personal knowledge systems. In addition, it also includes the less obvious artefacts that accumulate across institutional life: committee minutes that record decisions, email threads that establish precedent, and the informal notes that experienced staff rely on to navigate processes that were never formally specified. Documentation, in this expansive sense, represents the recorded context that enables action, whether that action involves learning, decision-making, compliance, or collaboration.

This definition matters because it reframes what is at stake. The shift this essay describes is not confined to the software documentation platforms where it was first articulated. It applies wherever people have created records to help themselves or others achieve goals, which is to say, it applies to virtually every knowledge-intensive institution.

Something fundamental is changing about this recorded context. When AI agents consume documentation as operational instructions, interpreting curriculum documents to advise students, processing policies to guide administrators, reading learning materials to support teaching, documentation undergoes a category shift. It moves from reference material, where inaccuracies are inconvenient but tolerable, to operational architecture, where inaccuracies cause system failures. This is not a feature upgrade to existing documentation practices. It is a change in what documentation *is*.

Most institutional knowledge currently exists in human-readable but machine-opaque formats; narrative documents, PDF submissions, committee minutes, email chains. This is not an accident. When institutions moved from paper to digital in the 1990s and 2000s, they adopted formats that simulated paper: Word documents and PDFs that replicated the experience of printed pages. These were skeuomorphs — digital objects that preserved the conventions of the physical medium they replaced. The format made sense at the time, but it embedded a design assumption that has persisted long past its usefulness: that documentation exists to be read by humans, laid out on something resembling a page. What should have been structured data — curriculum specifications, programme regulations, module descriptors — was instead captured in narrative documents optimised for printing and reading, not for computation and traversal. Decades later, institutions are living with the consequences: information that is rich in content but impoverished in structure, readable by people but opaque to machines.

The shift is already visible at organisational scale. Mintlify, a documentation platform serving developer teams, has articulated it directly: documentation is "no longer just explanatory, but also operational input" (Li et al., 2026). But the pattern they have identified in developer documentation manifests wherever AI agents consume structured knowledge; in institutional policies, learning materials, regulatory frameworks, and personal workflows. The architectural implications are the same regardless of domain: what was designed for human interpretation must now function as machine-executable infrastructure.

This essay's contribution is to show that this pattern, first recognised in software development, applies with equal force to institutional knowledge work, and that recognising it changes how institutions should think about AI readiness. Developers have tooling, testing frameworks, and cultural norms around documentation quality. Higher education institutions, largely, do not. For educators and institutional leaders, the implication is that AI integration is fundamentally an information architecture problem, not a technology procurement problem, and that addressing it requires the domain expertise that only educators and institutional staff can provide.

Three conceptual shifts frame what follows. The first is from technical debt (a concept familiar in software engineering) to the accumulated cost of shortcuts and neglect in maintaining institutional knowledge. The second is from reference material to operational architecture: a shift in function, not just in quality. The third is from charitable human interpretation to literal machine execution: the recognition that AI agents will not work around what a human reader would forgive.


## Documentation debt and the removal of a safety net

In software development, "technical debt" describes the accumulated cost of shortcuts — quick fixes and workarounds that solve immediate problems but create compounding maintenance burdens over time (Cunningham, 1992). A developer might hardcode a value rather than building a proper configuration system, knowing it will need to be fixed later. Each shortcut is individually rational but collectively costly: the longer debt accumulates, the harder the system becomes to maintain and the more fragile it becomes under stress.

[[documentation debt|Documentation debt]] operates by the same logic, applied to institutional knowledge rather than code. A policy is updated but the procedure document referencing it is not. A curriculum mapping spreadsheet falls out of sync with actual module content. An institutional process depends on knowledge that lives in one person's head rather than in a maintained record. The individual instances are unremarkable — no single outdated document causes a crisis. But the debt compounds, and like financial debt, the interest accrues silently until the moment of reckoning.

When documentation serves human readers, this debt is manageable. Humans compensate for documentation shortcomings with remarkable flexibility — we infer meaning from context, recognise when something seems wrong, and seek clarification. A programme leader reading an outdated module specification will notice that the assessment description does not match current practice and ask a colleague. A new staff member encountering an ambiguous policy will interpret it charitably or check with someone more experienced. Human readers provide a safety net that absorbs the impact of this accumulated neglect.

When documentation serves AI agents, that safety net disappears. An AI agent consuming an outdated curriculum document will not notice that the assessment weighting was changed last semester. It will not flag that a prerequisite relationship was removed but the documentation was never updated. It will operate on the information as given, literally and at scale. In developer ecosystems, this means broken software — when a coding agent reads an API reference to generate code, an outdated parameter description does not just confuse a developer; it causes the agent to produce broken code. Mintlify recognised this early, building infrastructure that serves both human and AI consumers simultaneously because the two audiences have fundamentally different architectural requirements but must draw from the same source of truth (Andreessen Horowitz, 2025). In institutional contexts, the mechanism is identical: outdated curriculum documents misleading student-advising AI, ambiguous policy language creating inconsistent AI-mediated interpretations, stale learning materials feeding AI tutoring systems with inaccurate information.

The common thread is the removal of that safety net. The documentation must now bear the full weight of operational accuracy, which is precisely what makes it infrastructure rather than reference material.


## The fundamental mismatch: associative versus typed knowledge

This infrastructure shift reflects a deeper mismatch in how humans and machines construct meaning. Human cognition is fundamentally associative — we navigate knowledge through fuzzy connections, implied relationships, and contextual interpretation. We tolerate ambiguity because we can usually resolve it through inference. Computational systems construct meaning differently, operating through typed relationships: explicit structure, literal interpretation, and specified connections between entities. Where a human reader works with implication and inference, a machine works with specification and execution.

This is not a limitation of current AI that will be resolved with better models. It is a fundamental difference in how meaning is constructed, rooted in the distinction between statistical pattern-matching and the embodied, contextual understanding that characterises human cognition.

The mismatch creates a specific problem for documentation. Institutions already possess formal ontologies for some of their information architecture — the [[higher education reference model|Higher Education Reference Model (HERM)]], for instance, provides standardised business, data, and application architectures for the sector (CAUDIT, 2025; UCISA, 2025). HERM makes relationships between entities explicit and typed: courses relate to programmes, programmes lead to degrees, degrees map to competencies. These are precisely the kinds of typed, directional relationships that AI agents require. A companion essay explores how these relationships can be encoded in graph databases, making curriculum structure queryable and compliance verification computationally tractable rather than dependent on exhaustive manual review (see *[[curriculum-infrastructure|Beyond document management: Graph infrastructure for professional education curricula]]*).

But HERM operates at institutional scale. It does not address how individuals or teams structure the knowledge that sits beneath and between institutional systems — the project documentation, meeting records, and professional workflows that constitute the operational fabric of institutional life. Not all knowledge should be formalised into typed relationships, and deciding what to formalise, when, and for what purpose, is itself a substantive intellectual challenge. The section that follows explores that challenge through personal experimentation.


## Personal experimentation: building operational architecture

The pattern I am describing did not emerge from institutional analysis. It became visible through trying to get AI to work reliably within my own professional workflow. I have written separately about what this [[2026-02-11-building-AI-collaboration-workflow|AI collaboration workflow]] looks like in practice — the iterative cycle of trying approaches, evaluating outputs, and refining the structured documentation that accumulates as external memory between sessions. What follows focuses on what that process reveals about the relationship between documentation structure and AI reliability.

I maintain a knowledge base in Obsidian that serves as operational infrastructure for my work as a Director of Teaching and Learning — meeting notes, project plans, workstream trackers, and the various documents that accumulate across a role spanning twelve areas of responsibility. For most of its life, this system was designed entirely for me. Documents linked to other documents through associations I could navigate intuitively. The trouble started when I began working with AI agents that needed to navigate the same material.

The most revealing experiment involved adding machine-readable metadata to every operational document — meetings, projects, workstreams, events — using YAML frontmatter that makes explicit the relationships between entities. A meeting note carries metadata connecting it to its parent project, relevant workstream, and participants. A project note declares its status, phase, timeline, and relationships to other projects. These are not conceptual associations between ideas. They are operational plumbing — typed relationships that connect meetings to projects, projects to workstreams, workstreams to areas of responsibility, and areas of responsibility to strategic priorities.

> [!example]- How typed relationships work in practice: YAML frontmatter examples
> A meeting note carries metadata that connects it to its parent project, relevant workstream, associated process cycle, and the people who attended:
>
> ```yaml
> note_type: meeting
> start_date: 2026-01-24
> participants:
>   - "[[Sarah Johnson]]"
>   - "[[Tom Chen]]"
> project: "[[Project - Collaborative Professional Learning]]"
> workstream: "[[Teaching Quality]]"
> process: "[[Process - Validation (2025-2026)]]"
> needs_review: true
> ```
>
> A project note, in turn, declares its domain, areas of responsibility, status, phase, timeline, and relationships to other projects:
>
> ```yaml
> note_type: Project
> status: Active
> phase: Planning
> domain: Work
> area:
>   - Programme Development
>   - AI Integration
> project_start: 2026-01
> project_due: 2026-09
> related:
>   - "[[Project - AI Assessment Design]]"
>   - "[[Project - Institutional AI Governance]]"
> ```
>
> The system also includes context files — what Anthropic calls CLAUDE.md files (Anthropic, 2024) — that sit at the root of a project and provide an AI agent with the operational information it needs to work within that environment. These are not documentation *about* a project. They specify principles, constraints, file structures, naming conventions, and working methods. Traditional documentation explains; operational context enables.

When an AI agent can traverse these typed connections, it stops being a sophisticated search tool and starts functioning as something closer to a cognitive partner that understands the *structure* of the work, not just the *content* of individual documents. The practical consequences are visible in routine tasks. When I need a progress report across areas of responsibility — the kind of document that might be required for a board meeting or periodic review — an AI agent can traverse the entire system and produce a comprehensive, structured report in minutes. Not a summary of documents, but a synthesis drawn from the typed relationships between them. That is what operational architecture enables — not because the AI is particularly clever, but because the information was structured in a way that made the work legible to a machine.

> [!example]- Persona files as executable specifications
> A meeting summariser persona does not just describe what a good meeting summary looks like. It specifies the analysis process (extract actions first, then decisions, then relevant context), the output structure (actions, decisions, summary, notes), the metadata fields to populate, and the conventions to follow (British spelling, sentence case, link to parent project and workstream). A negotiation coach persona encodes an entire strategic framework — stakeholder analysis, tradeable variables, signal recognition — that an AI agent consumes as operational instructions.
>
> These are not documentation *about* how to do things. They are executable specifications. The AI agent reads them and operates accordingly. This is the category change in miniature: the same information that might appear in a training manual or procedural guide, restructured so that it functions as infrastructure rather than reference material.

As the operational architecture has matured, the proportion of professional work that can be reliably delegated has expanded substantially. Evidence-based persona files specify how an AI agent should behave in particular contexts — meeting summarisation, stakeholder analysis, lecture development — and function as executable specifications rather than reference documentation. The nature of the work shifts: less execution, more architecture, design, and verification. The value moves upstream.

### Instruction following matters more than intelligence

This experimentation revealed something counterintuitive about what makes AI integration effective. The conventional assumption is that useful AI requires the most capable available model — that the bottleneck is the model's intelligence. In practice, when documentation functions as operational architecture, the bottleneck shifts. Traversing typed relationships, compiling structured reports, following explicit workflow specifications — these tasks require reliable instruction-following, not frontier-model reasoning. The architecture does the intellectual heavy lifting; the model executes against it.

This inverts a common assumption. A modest model operating against well-structured documentation can outperform a more capable model working with poorly structured information, because the critical variable is not how well the model reasons but how faithfully it follows the specification it has been given. For institutional contexts, this has significant practical implications: it means that effective AI integration depends less on purchasing access to the most expensive models and more on investing in the information architecture that allows any competent model to function reliably.

### Trust, auditability, and the spectrum of verifiability

A language model working with unstructured prose will still infer relationships — models are remarkably capable of drawing plausible connections from context. The output might look fine. But "looks fine" is not the same as "can be verified." When I generate a progress report from this system, I can trace exactly what the AI was working with: which meetings it drew from, which project status fields it referenced, which workstream connections it followed. The typed relationships create a verification layer.

This distinction — between plausible output and verifiable output — matters more than it might initially appear, and it maps onto a spectrum that varies by domain. In software engineering, the quality of AI-generated code can be checked through automated testing: the code either passes the tests or it does not. In mathematics, proofs can be verified computationally. These domains sit at one end of a verifiability spectrum — their outputs are amenable to automated evaluation against clear criteria. Much of institutional knowledge work sits at the other end. Whether an AI-generated policy summary captures the right nuances, whether a student-facing communication strikes the appropriate tone, whether a strategic analysis weights the relevant considerations correctly — these are judgement calls that resist automated verification.

Operational architecture moves institutional knowledge work along this spectrum. When workflows are defined through explicit documentation — when the process specifies which inputs to draw from, which structure the output should follow, which conventions to observe — then at least *some* dimensions of the output become checkable against that specification. Did the report draw from the correct project notes? Did the summary follow the specified output structure? Did the communication use the documented institutional terminology? These are not subjective judgements; they are verifiable facts. The more precisely the documentation specifies the workflow, the more the outputs can be evaluated against it. This is the same try-evaluate-adjust cycle I have described in the context of [[2026-02-11-building-AI-collaboration-workflow|building an AI collaboration workflow]] — but applied at institutional scale, where the "vision" becomes documented specifications and the "evaluation" becomes checkable against those specifications.

Operational architecture does not make all outputs verifiable. Professional judgement about tone, emphasis, strategic framing, and contextual appropriateness remains irreducibly human. But it makes *significantly more* outputs verifiable than unstructured approaches allow, and that shift — from "I think this looks right" to "I can check whether this followed the specification" — is the difference between an AI tool you use and an AI system you can govern.

Retrieval-augmented generation on its own gives an AI access to your knowledge; operational architecture gives you reason to trust what it does with that knowledge. For personal workflows, this distinction is a convenience. For institutional documentation — where decisions affect students, regulatory compliance, and resource allocation — it becomes a governance requirement.

> [!example]- Data governance and the architecture paradox
> Operational architecture of this kind inevitably contains personal data — not just the user's own information, but the names, roles, meeting attendance, and project involvement of colleagues and stakeholders. The better the architecture, the more useful this structured data becomes for AI agents, and the more sensitive it becomes from a governance perspective. This creates an architecture paradox: the same typed relationships that make AI trustworthy and auditable also make the system a more potent repository of personal information. At personal scale, this is managed through responsible practice and local storage decisions. At institutional scale, it intersects directly with data protection regulation and information governance frameworks. Infrastructure requires governance in a way that reference material never did.
>
> This governance concern points toward a practical architectural response. Well-structured operational architecture reduces the reasoning burden on the model itself, making local deployment of open-source models more viable than it would be for tasks requiring frontier-level reasoning. When the architecture does the intellectual heavy lifting, the model's job is to follow instructions faithfully — a task within reach of increasingly capable local models. Architecture and privacy become complementary design considerations rather than competing ones, and institutions considering this approach should treat data governance as a first-order architectural decision rather than a retrospective accommodation.

### The pattern revealed

What this experimentation surfaces is a set of shifts in emphasis when documentation transitions from human reference material to operational architecture: from prose to structure, from explanatory to executable, from comprehensive to current, from implicit to explicit. These are not absolute transitions — prose, explanation, comprehensiveness, and implication all retain value for human readers. But when AI agents become consumers of the same material, the balance shifts, and the direction of travel is consistent regardless of scale.

Not all knowledge should be formalised in this way, and premature formalisation can actively damage the associative thinking that generates insight in the first place. Early-stage ideas, emerging connections, half-formed arguments — these thrive precisely because their relationships are fuzzy and provisional. Forcing them into typed structures too early can crystallise thinking that needs to remain fluid. The question is not whether to formalise but *when*, and for what purpose. Knowledge that AI agents will consume as operational input benefits enormously from structure. Knowledge that is still being developed may be harmed by it.


## Institutional implications

The pattern that emerges from personal experimentation manifests at every scale where structured knowledge enables action. In higher education, its full complexity becomes visible.

At institutional scale, documentation debt manifests as artificial information scarcity. The information required for compliance verification, quality assurance, and curriculum coordination exists — it was designed by educators, documented in module specifications, recorded in assessment blueprints — but it exists across multiple systems in formats designed for human reading. The structure is present; the infrastructure makes it inaccessible.

Programme revalidation in regulated professions illustrates the problem concretely. When a nursing programme undergoes revalidation across multiple specialisms, the process can consume months of staff time. Documents are scattered across curriculum management systems, institutional SharePoint sites, and individual drives. Competency mapping is maintained manually in spreadsheets. Communication about the process happens via email — outside the systems it concerns. Implicit knowledge holds the process together: experienced staff who remember which documents contain which mappings, which module leads to contact, which regulatory frameworks have been updated since the last review. Every document is Word, PDF, PowerPoint, or Excel. There are no queryable relationships between them. The information exists; accessing it systematically is the problem. A companion essay proposes specific architecture for addressing this: graph databases encoding curriculum structure as typed, queryable relationships, with vector databases for semantic retrieval and a Model Context Protocol layer for stakeholder access (see *[[curriculum-infrastructure|Beyond document management: Graph infrastructure for professional education curricula]]*).

### Process automation versus workflow automation

For most institutions, being AI-forward currently means deploying AI tools — chatbots for student queries, writing assistants for staff, automated marking for routine assessments. This is process automation: taking existing workflows and making individual steps faster. It asks: which existing step can we make faster? Institutions have attempted process automation for decades, with mixed results, because the approach is inherently brittle — and because it inherits whatever documentation debt exists in the processes it accelerates.

What is emerging now is qualitatively different. Rather than automating individual steps within predetermined workflows, AI agents are beginning to execute complex, multi-step tasks with increasing autonomy — what might more accurately be called workflow automation. Workflow automation asks: given a goal and access to structured information, can an agent determine and execute the steps required to reach it? The first is bounded by the imagination of whoever designed the process. The second is bounded by the quality of the information architecture the agent has access to.

The distinction matters for verifiability. Process automation produces outputs that are difficult to verify systematically because each automated step operates against whatever ad hoc documentation exists. Workflow automation against well-structured operational architecture produces outputs that are *more* verifiable — because the specification exists, because the inputs are traceable, and because the agent's reasoning path can be checked against the documented relationships it traversed. The same architectural investment that enables workflow automation also enables its governance.

Research from METR suggests that the length of tasks AI agents can complete autonomously has been doubling approximately every seven months over the past six years (Kwa et al., 2025). This is a striking trajectory — but capability growth is only meaningful if institutions can actually leverage it. An AI agent that can work autonomously for longer periods still requires structured context and explicit workflows to execute against. Without these, extended autonomy simply means more time to produce unreliable outputs from poorly structured inputs.

### When change becomes continuous

The temporal assumptions embedded in current quality assurance processes presuppose a curriculum that changes slowly and predictably. Programme revalidation cycles run every three to five years. Annual monitoring reviews examine the previous year's data. Committee approval processes for curriculum changes can take months to propagate into institutional systems — and sometimes fail to propagate at all.

These assumptions are becoming untenable. As AI becomes embedded in teaching, learning, and assessment — enabling adaptive learning pathways, AI-mediated assessment design, and rapid pedagogical adjustment — the pace of curriculum change will accelerate beyond what periodic human review can assure. A revalidation cycle that assumes curricula change between review points cannot govern a curriculum that changes continuously.

This is not merely an efficiency argument. It is a governance argument: when documentation becomes operational infrastructure, consumed by AI agents and acted upon in real time, governance must become equally responsive. Continuous verification — automated structural checks triggered by curriculum changes, real-time compliance monitoring, immediate identification of gaps introduced by modifications — becomes a governance requirement, not a technological luxury.

### Where this argument does not apply

Not all institutional documentation should be restructured as operational architecture, and it is worth being explicit about where this argument reaches its limits.

Some documentation is deliberately ambiguous. Institutional policies are sometimes carefully worded to preserve interpretive flexibility — allowing different contexts to apply the same policy in ways appropriate to their circumstances. A policy on "reasonable adjustments" for disabled students, for instance, works precisely because it leaves room for professional judgement about what counts as reasonable in a given case. Formalising such policies into typed, machine-executable specifications would not improve them; it would strip them of the flexibility that makes them functional.

Similarly, much of what makes experienced professionals valuable is tacit knowledge that resists explicit documentation — the clinical educator who can read a student's confidence level during a placement, the programme leader who knows which committee members need to be consulted informally before a proposal reaches formal approval. This knowledge is real and consequential, but it is not the kind of knowledge that benefits from being structured for machine consumption.

There is also a practical limitation. Maintaining operational architecture requires sustained investment — not a one-off migration project but ongoing governance of the documentation itself. Institutions already struggle to keep existing documentation current. Adding architectural requirements increases the maintenance burden, and without clear incentive structures and dedicated resourcing, the architecture will accumulate its own debt over time, potentially worse than what it replaced.

The argument of this essay applies most strongly to documentation that is already structured in principle but poorly structured in practice — curriculum specifications, competency mappings, regulatory compliance evidence, programme regulations — where the information exists but the infrastructure makes it inaccessible. It applies least to the genuinely unstructured, contextual, and deliberately ambiguous knowledge that institutions also depend on.

### Constraints

Transforming legacy documentation into operational architecture is not a technology project; it is a governance challenge that touches every part of an institution. Distributed ownership means no single team can mandate architectural standards. And there is an uncomfortable cultural dimension: making implicit institutional knowledge explicit threatens the gatekeeping functions that some individuals and units have built their influence around. The colleague whose value derives from knowing how things *really* work has a rational interest in that knowledge remaining undocumented.

It is also worth acknowledging that the claim about information architecture as the primary bottleneck is bound to a particular moment in AI development. Future models may become substantially better at handling unstructured information. If that happens, the threshold at which poor architecture becomes the binding constraint will shift upward. But it will not disappear. Well-structured operational architecture will remain an advantage even if it ceases to be a strict requirement, because the trust, auditability, and verifiability arguments hold regardless of model capability. An AI agent that can work with messy data is not the same as an AI agent whose reasoning you can verify.

These challenges explain why institutional AI integration so often stalls at the level of individual tools bolted onto existing systems. The problem is not that institutions lack AI capability or even AI strategy. It is that they have not recognised the architectural precondition: when documentation becomes operational infrastructure, the foundations need to be rebuilt, not decorated.


## Conclusion

This essay has argued that documentation undergoes a category shift when AI agents become its primary consumers — from reference material that tolerates imprecision to operational architecture that demands it. That shift is not coming; for institutions beginning to integrate AI into their operations, it is already here.

The institutional choice this presents is not whether to adopt AI. That question is largely settled. The choice is whether to recognise that AI integration is fundamentally an information architecture problem — one that cannot be solved by deploying tools onto unrestructured foundations. An institution that invests in the most capable AI models while leaving its curriculum in narrative PDFs, its policies in committee minutes, and its institutional knowledge in the heads of long-serving staff has the relationship between capability and infrastructure precisely backwards.

The argument carries an uncomfortable implication for institutional leadership. The work that matters most for AI readiness is not glamorous: auditing documentation, making implicit knowledge explicit, building maintenance workflows, restructuring information for machine consumption. It is governance work, not technology work, and it requires the domain expertise that only educators, administrators, and professional staff can provide. Technologists cannot do this alone because the relationships that need to be made explicit are domain-specific — they live in the understanding of how curricula connect to competencies, how policies relate to practices, and how institutional processes actually function as opposed to how they are documented.

The question is not whether AI capability will continue to advance. It will. The question is whether institutions will build the architectural foundations that allow that capability to be leveraged — reliably, verifiably, and at the pace that institutional governance demands.


## References

Andreessen Horowitz. (2025, May 15). *Emerging developer patterns for the AI era*. https://a16z.com/nine-emerging-developer-patterns-for-the-ai-era/

Anthropic. (2024). *Model Context Protocol specification*. https://modelcontextprotocol.io/

CAUDIT. (2025). *Higher Education Reference Models (HERM), version 3.2.0*. https://www.caudit.edu.au/communities/caudit-higher-education-reference-models/

Cunningham, W. (1992). The WyCash portfolio management system. *OOPSLA '92 Experience Report*. http://c2.com/doc/oopsla92.html

Forte, T. (2022). *Building a second brain: A proven method to organise your digital life and unlock your creative potential*. Profile Books.

Kwa, T., West, M., et al. (2025). *Measuring AI ability to complete long tasks*. METR. https://metr.org/blog/2025-03-19-measuring-ai-ability-to-complete-long-tasks/

Li, J., Li, Y., Wang, H., & Lee, H. (Hosts). (2026, January 23). How Mintlify is rebuilding documentation for coding agents [Audio podcast episode]. In *The a16z Show*. Andreessen Horowitz.

UCISA. (2025). *Higher Education Reference Models*. https://www.ucisa.ac.uk/groups/enterprise-architecture/herm
