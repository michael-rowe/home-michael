---
type: essay
title: >-
  Beyond document management: Graph infrastructure for professional education
  curricula
slug: essays/curriculum-infrastructure
description: >-
  Professional curricula are extensively documented but not systematically
  queryable, creating artificial information scarcity that makes compliance
  reporting and quality assurance labour-intensive. This essay proposes an
  architecture where graph databases serve as the source of truth for curriculum
  structure, enabling compliance verification in hours rather than weeks.
meta-description: >-
  Proposing a graph-based infrastructure to transform professional education
  curricula into queryable operational architecture.
author:
  - '[[Michael Rowe]]'
  - '[[Wesley Lynch]]'
affiliation:
  - University of Lincoln
  - Snapplify
email:
  - mrowe@lincoln.ac.uk
  - wesley@snapplify.com
abstract: >-
  Professional education curricula—in medicine, nursing, allied health, and
  other regulated disciplines—are comprehensively documented across hundreds of
  module specifications, teaching plans, and assessments. Yet when curriculum
  teams must demonstrate competency coverage for regulatory audits, answer
  questions about prerequisite chains, or identify assessment gaps, current
  systems require manual document review consuming days or weeks of staff time.
  Quality assurance processes involve collating spreadsheets from multiple
  module leads, manually cross-referencing teaching content against regulatory
  frameworks, and compiling evidence that specific competencies have adequate
  coverage. The core issue: curricula have explicit structure—hierarchical
  organisation, prerequisite relationships, competency mappings—that exists in
  documents and staff knowledge but not as queryable data. Current systems make
  structural information inaccessible through technical limitations, forcing
  staff to manually extract information from documents they themselves created.
  We propose a three-layer architecture: a graph database layer for curriculum
  structure, a vector database layer for content retrieval, and a Model Context
  Protocol layer for accessible interfaces. This makes documented curriculum
  structure explicitly queryable—prerequisite chains, competency mappings, and
  assessment coverage—enabling compliance verification in hours rather than
  weeks. The architecture suits AI-forward institutions—those treating AI
  integration as ongoing strategic practice requiring active engagement with
  evolving technologies. Technology handles structural verification; educators
  retain essential authority over educational meaning-making. This proposal
  argues for removing technical barriers to interrogating curriculum complexity
  rather than eliminating that complexity through technological solutions. Graph
  databases make relationships first-class entities that can be traversed,
  filtered, and aggregated, enabling the structural queries that compliance and
  quality assurance processes require. As regulatory frameworks update,
  institutions can immediately query affected elements, identifying where
  curriculum updates are required. Ultimately, this transforms compliance from
  reactive documentation to transparent structural verification, supporting
  constructive alignment and ensuring that learning outcomes, teaching
  activities, and assessments genuinely cohere across the entire educational
  ecosystem.
version: 0.6
created: 2025-11-08T00:00:00.000Z
modified: 2026-02-10T00:00:00.000Z
tags:
  - AI-forward
  - context-engineering
  - context-sovereignty
  - curriculum-development
  - curriculum-infrastructure
  - educational-technology
  - graph-database
  - human-AI-collaboration
  - model-context-protocol
  - vector-database
doi: null
related:
  - '[[Essays/documentation-as-infrastructure]]'
  - '[[Essays/context-sovereignty]]'
  - '[[Notes/model-context-protocol]]'
---
> [!info] **About this essay**
> - **Authors**: Michael Rowe 1 ([ORCID](https://orcid.org/my-orcid?orcid=0000-0002-1538-6052); mrowe@lincoln.ac.uk) and Wesley Lynch 2 ([LinkedIn](https://www.linkedin.com/in/wesleylynch/); wesley@snapplify.com)
> - **Affiliations**: 1) University of Lincoln; 2) [Snapplify](https://www.snapplify.com)
> - **Created**: Nov 08, 2025
> - **Version**: 0.6 (last updated: Nov 09, 2025)
> - **Modified**: See [Github record](https://github.com/michael-rowe/emergent-scholarship/tree/main/docs/essays)
> - **Keywords**: AI-forward, artificial intelligence, context engineering, curriculum development, curriculum infrastructure, education technology, graph database, human-AI collaboration, model context protocol, vector database
> - **License**: [Creative Commons Attribution 4.0 International](https://creativecommons.org/licenses/by/4.0/)

## Abstract

Professional curricula are comprehensively documented but not systematically queryable, creating artificial information scarcity. This creates significant problems for institutions: regulatory compliance reporting consumes weeks of staff time, quality assurance requires exhaustive manual verification, and curriculum office teams cannot efficiently answer structural questions. Current approaches—manual document review, VLE keyword search, curriculum mapping spreadsheets, and purpose-built curriculum management systems—fail to expose curriculum structure in queryable form. We propose an architecture where graph databases become the source of truth for curriculum structure, with vector databases for content retrieval and the Model Context Protocol providing accessible interfaces. This makes documented curriculum structure explicitly queryable—prerequisite chains, competency mappings, and assessment coverage—enabling compliance verification in hours rather than weeks. The architecture suits AI-forward institutions—those treating AI integration as ongoing strategic practice requiring active engagement with evolving technologies. Technology handles structural verification; educators retain essential authority over educational meaning-making. The proposal argues for removing technical barriers to interrogating curriculum complexity rather than eliminating that complexity through technological solution. By transforming documentation into operational architecture, institutions can build trust and auditability into AI-mediated processes, ensuring that curriculum design and improvement are driven by analytical insight rather than administrative necessity.

---

## 1. An artificial scarcity problem

Professional education curricula—in medicine, nursing, allied health, and other regulated disciplines—are comprehensively documented across hundreds of module specifications, teaching plans, and assessments. Yet when curriculum teams must demonstrate competency coverage for regulatory audits, answer questions about prerequisite chains, or identify assessment gaps, current systems require manual document review consuming days or weeks of staff time. Quality assurance processes involve collating spreadsheets from multiple module leads, manually cross-referencing teaching content against regulatory frameworks (GMC standards, NMC competencies, HCPC standards), and compiling evidence that specific competencies have adequate coverage.

The core issue: curricula have explicit structure—hierarchical organisation (programmes → modules → sessions → learning outcomes), prerequisite relationships, competency mappings, comprehensive content documentation. This structure exists in documents and staff knowledge, but not as queryable data. Staff who created this structure cannot efficiently access it for verification or compliance reporting.

**Why regulated professions**: Professional education in regulated disciplines must maintain explicit, auditable mappings to external competency frameworks that evolve over time. Regulatory bodies require institutions to demonstrate—with specific evidence—that every mandated competency receives adequate teaching and assessment coverage. The hierarchical structure, typed relationships (prerequisite dependencies, competency mappings, assessment coverage), and compliance requirements make professional curricula naturally suited to graph-based representation where relationships are first-class entities rather than implicit connections buried in prose. Knowledge graphs are increasingly recognised as tools for curriculum design, enabling institutions to map learning objectives to competencies and identify structural gaps (Abu-Salih & Alotaibi, 2024), and have been characterised as "pivotal tools for connecting knowledge points across courses" in higher education (Wang et al., 2025).

**Artificial scarcity through technical constraints**: Current systems make structural information inaccessible through technical limitations. Document-based approaches cannot expose relationships between curriculum elements. Even purpose-built curriculum management systems focus on documentation workflow rather than enabling structural queries. Staff cannot ask "show me all assessment touchpoints for prescribing safety competency across prerequisite chains" because infrastructure doesn't support relationship traversal. The structure exists—module specifications list prerequisites, learning outcomes map to competencies—but exists in prose requiring human interpretation rather than computational querying. Staff must manually extract information from documents they themselves created. A companion essay examines this pattern in detail, arguing that documentation undergoes a category shift — from reference material to operational architecture — when AI agents become consumers of institutional knowledge (Rowe, 2026).

### Supporting educators and quality assurance

The proposed architecture aims to support educators and administrative staff through infrastructure enabling efficient access to curriculum structure. Curriculum office teams could generate regulatory compliance reports directly from queryable structure rather than spending weeks manually compiling evidence. Quality assurance processes could systematically identify structural issues—missing prerequisite chains, competencies lacking adequate assessment—rather than relying on exhaustive manual review. Educators retain essential interpretive authority and pedagogical judgement; the technology provides infrastructure making the results of their expertise efficiently accessible for verification, compliance, and enhancement.

**AI-forward institutions**: This infrastructure particularly suits what we term "AI-forward" institutions—those treating AI integration as ongoing strategic practice requiring active engagement with evolving technologies, rather than fixed deployment of finished solutions. AI-forward institutions commit to evaluating emerging AI capabilities, making informed technology choices aligned with institutional values, and iterating infrastructure as tools develop. This contrasts with institutions preferring stable vendor solutions where technology decisions are outsourced. Neither approach is inherently superior; they represent different institutional strategies with different resource requirements and control trade-offs. The architecture proposed here enables AI-forward institutions to control their technological destiny while acknowledging the ongoing engagement this requires.

---

## 2. Current approaches and their limitations

Institutions employ various approaches to curriculum management, from commercial systems to ad hoc arrangements across general-purpose tools. These share a fundamental problem: they force staff to adapt working practices to technological constraints rather than supporting how educators naturally conceptualise curriculum relationships. When staff think about curricula, they think relationally—"this module builds on that one," "this learning outcome addresses that competency." Current systems require translating relational thinking into document locations, folder hierarchies, and keyword search strategies. Technology dictates workflow rather than enabling it.

### Purpose-built curriculum management systems

Commercial solutions (WorkTribe, Akari, Courseleaf) provide structured storage with defined fields for learning outcomes, assessment methods, prerequisites, and credit values. They support approval workflows, version control, and change management.

**Limitations**: Even purpose-built systems focus on documentation workflow rather than queryable relationships. They capture that a module _has_ prerequisites without enabling traversal queries like "show me all assessment touchpoints across prerequisite chains for competency X." Data exists in structured fields, but relationships between entities remain trapped within individual records rather than being queryable. Integration across curriculum management systems, VLEs, and student record systems remains limited, requiring manual cross-referencing.

### Institutional arrangements and workarounds

Many institutions rely on arrangements across multiple tools: SharePoint for document storage, VLEs for teaching delivery, Excel spreadsheets for competency mapping. These spawn shadow systems—unofficial workarounds created by staff adapting to technological inadequacy. Experienced module leads maintain personal spreadsheets tracking prerequisites. Quality assurance teams develop institution-specific search strategies for finding information across repositories. This tacit knowledge concentrates in long-serving staff, creating organisational risk when they leave.

Different programme teams often develop incompatible naming conventions—one calls it "clinical competency," another "professional capability"—making cross-programme quality assurance difficult. Staff adapt by creating translation documents, yet another layer of manual maintenance.

### Curriculum mapping spreadsheets

Many institutions maintain detailed Excel spreadsheets—"the Matrix"—mapping curriculum elements to regulatory competencies. Programme directors compile these for accreditation reviews, with rows representing learning outcomes and columns representing competencies.

**The maintenance burden**: These exist separately from actual curriculum documentation. When modules change or regulatory frameworks update, spreadsheets require manual updating—often by a single staff member who understands the complex cross-referencing. Accreditation reviews reveal outdated mappings, prompting emergency updates consuming weeks under deadline pressure. Spreadsheets cannot represent complex relationships—hierarchical structures, prerequisite chains, conditional dependencies—forcing staff to accept that some relationships simply cannot be represented.

### The fundamental problem

All these approaches share the limitation identified in Section 1: rich structural knowledge exists in human understanding and scattered across incompatible systems, but not in forms enabling systematic verification or efficient compliance reporting. Quality assurance staff know relationships exist between modules but that knowledge isn't encoded to support straightforward querying. Current systems force staff to become experts in navigating institutional technology rather than focusing on curriculum design and enhancement. Empirical research confirms this misalignment: Hilliger et al. (2024) found that institutional quality assurance processes are often structurally misaligned with continuous curriculum improvement, with existing tools failing to support the analytical capabilities that programme teams actually need.

---

## 3. Proposed architecture

Professional curricula require infrastructure supporting queries over typed relationships, not merely content search. When quality assurance staff need to verify that prescribing safety competency has adequate assessment coverage across all prerequisite chains, they need to traverse explicit REQUIRES relationships between modules, explicit ADDRESSES relationships between learning outcomes and competencies, and explicit ASSESSES relationships between assessments and outcomes. Semantic similarity cannot answer this—finding content "about prescribing" doesn't verify structural coverage. Graph databases make relationships first-class entities that can be traversed, filtered, and aggregated, enabling the structural queries that compliance and quality assurance processes require. As Xiao (2023) notes, graph databases "enable complex relationships between entities to be processed effectively" in educational contexts, offering substantial advantages over relational databases as the number and depth of relationship traversals increases.

### Three-layer infrastructure

**Graph database layer**: Stores curriculum structure as typed, bidirectional relationships between entities. Programmes CONTAIN modules, modules CONTAIN sessions, sessions ADDRESS learning outcomes, assessments TEST outcomes, outcomes MAP_TO regulatory competencies. Prerequisites are explicit REQUIRES relationships enabling traversal of dependency chains. Each entity and relationship is explicitly typed, making precise queries possible: "show all modules required to reach clinical prescribing competency" traverses REQUIRES relationships; "identify learning outcomes lacking assessment coverage" queries for outcomes without ASSESSES relationships.

Critically, the graph database becomes the source of truth where educators work directly on curriculum structure. When module leads modify prerequisites, add learning outcomes, or adjust competency mappings, they work in graph-native tools. Documents (module specifications, programme handbooks), VLE structures (course hierarchies, content organisation), and compliance reports (accreditation evidence, regulator submissions) are generated from the graph rather than existing as separate artifacts requiring manual synchronisation. This architectural decision inverts current systems where documents are primary and structure must be extracted. It addresses the maintenance burden identified in Section 2—changes happen once in the graph, with derived artifacts automatically updating.

**Vector database layer**: Stores curriculum content (lecture materials, reading lists, teaching notes, module specifications) as embeddings enabling semantic search. When staff need to find "all teaching materials related to prescribing errors," vector databases retrieve semantically similar content across the entire curriculum regardless of which programme or module contains it. This complements rather than replaces graph-based queries. Semantic similarity finds content about similar topics; typed relationships enable structural traversal. A quality assurance officer might use semantic search to find all prescribing-related content, then use graph queries to verify whether that content adequately maps to regulatory competencies and has sufficient assessment coverage.

**Model Context Protocol layer**: Provides the accessibility layer enabling natural language queries and stakeholder-specific interfaces. Staff can ask "show me competency coverage for Year 2" in plain language rather than learning database query syntax. System prompts provide appropriate context—curriculum office staff receive compliance-focused responses with audit trails, module leads receive pedagogical guidance about prerequisite assumptions, quality assurance teams receive gap analysis highlighting structural issues.

MCP is relatively new (Anthropic, 2024) but addresses a genuine standardisation need: providing consistent tool interfaces across different AI systems. Even as specific protocols evolve, the principle—standardised semantic interfaces between AI models and institutional data—remains architecturally valuable. Institutions adopting early should expect protocol refinements, but the core capability (enabling AI systems to query structured curriculum data) is stable even if implementation details change. This layer is crucial for adoption: without it, queryable infrastructure would only serve database administrators rather than the staff who actually need structural access.

### Ontology considerations

Representing curriculum structure requires an ontology defining entity types (Programme, Module, Session, Learning Outcome, Assessment, Competency) and relationship types (CONTAINS, REQUIRES, ADDRESSES, TESTS, MAP_TO). The Higher Education Reference Model (HERM) provides a pragmatic starting point with standardised vocabulary enabling interoperability across institutions and systems (CAUDIT, 2025; UCISA, 2025).

However, ontology choice involves epistemological commitments about knowledge categorisation. HERM embodies particular assumptions about how curricula should be structured—assumptions that may not adequately represent all institutional contexts or disciplinary approaches. A nursing curriculum's relationship between "clinical placement" and "practice competency" might not map cleanly to HERM's categories. An integrated medical curriculum where content doesn't organise neatly into discrete modules might struggle with HERM's hierarchical assumptions.

However, what matters is internal consistency rather than adherence to external standards. An institution could use HERM, develop institution-specific ontologies, or adopt programme-specific frameworks. The crucial requirement is that the chosen ontology enables consistent relationship encoding within the institution's context. Graph databases are schema-flexible—ontologies can evolve as curricula develop and new relationship types become important to represent. The key architectural principle is making relationships explicit and queryable, not imposing rigid structures.

### Inverting technological constraints

This architecture inverts the relationship between staff and technology identified in Section 2. Current systems force staff to adapt working practices to technological constraints—translating relational thinking into document management, folder hierarchies, and keyword strategies. Graph infrastructure supports how educators naturally conceptualize curricula: as entities in relationship. "This module builds on that one" becomes a queryable REQUIRES relationship. "This learning outcome addresses that competency" becomes a traversable MAP_TO relationship.

Staff can now interact with curriculum structure directly rather than through the mediation of document search and manual compilation. A module lead asking "what prerequisite knowledge can I assume?" receives a direct answer from traversing graph relationships rather than requiring them to manually examine multiple module specifications. Quality assurance processes asking "does every clinical module adequately assume pharmacology prerequisites?" become straightforward graph queries rather than days of manual verification. The technology enables staff work rather than dictating it.

This doesn't eliminate professional judgement—educators still decide what prerequisites should exist, which competencies learning outcomes should address, whether assessment coverage is adequate. The infrastructure makes those decisions explicit, queryable, and verifiable, supporting professional judgement rather than replacing it.

---

## 4. What this enables

### Regulatory compliance and quality assurance

The most immediate value proposition addresses the compliance burden identified in Section 1. Institutions can generate regulatory compliance reports in hours rather than weeks through straightforward graph queries. A query like "demonstrate that every GMC prescribing safety competency has adequate assessment coverage" traverses ADDRESSES relationships from competencies to learning outcomes, then ASSESSES relationships from outcomes to assessments, returning complete audit trails showing exactly which modules, sessions, and assessments address each competency. The graph structure provides the verifiable evidence regulators require—not semantic similarity suggesting coverage might exist, but explicit typed relationships proving it does.

Quality assurance processes benefit from systematic gap identification that current approaches cannot achieve. Knowledge graphs enable institutions to "identify gaps in their curriculum" and support "more informed decision-making" through surfacing connections and patterns not apparent through traditional methods (Abu-Salih & Alotaibi, 2024). Wang et al. (2025) demonstrate that graph-based curriculum representations can be evaluated for "accuracy, consistency, completeness and timeliness" — precisely the quality dimensions that manual review struggles to verify systematically. Missing prerequisite chains become visible when REQUIRES relationships show isolated modules with no inbound connections. Learning outcomes lacking assessments appear when querying for outcomes without ASSESSES relationships. Competencies with insufficient coverage emerge when aggregating assessments across MAP_TO relationships reveals imbalances. These structural issues remain invisible in document-based systems—staff might eventually discover them through exhaustive manual review, but systematic identification requires queryable relationships.

The maintenance advantage is substantial. When regulatory frameworks update—GMC adds new prescribing competencies, HCPC revises standards of proficiency—institutions can immediately query which learning outcomes and assessments map to affected competencies, identifying exactly where curriculum updates are required. Current approaches require staff to manually search documents hoping terminology matches, inevitably missing connections. Graph queries definitively answer "what curriculum elements are affected by this regulatory change?"

### Curriculum design support for educators

Educators gain comprehensive curriculum visibility enabling more effective design and collaboration. A module lead can query "where else is anticoagulation taught?" and receive definitive answers across all programmes and years, revealing integration opportunities or unnecessary duplication. They can ask "what prerequisite knowledge about cardiovascular physiology can I assume?" and see exactly which prior modules addressed relevant learning outcomes and whether assessments verified student attainment.

This supports constructive alignment—ensuring learning outcomes, teaching activities, and assessments genuinely cohere. An educator designing a clinical prescribing module can verify that learning outcomes align with regulatory competencies, that teaching sessions adequately address those outcomes, and that assessments appropriately test them. When alignment gaps appear—an outcome without corresponding teaching, an assessment testing content not in the learning outcomes—the graph makes them explicit rather than requiring retrospective discovery during curriculum reviews.

Just-in-time access to prerequisite information enables appropriately pitched teaching. Understanding what students have actually studied (and what they've been assessed on) helps educators calibrate expectations. The distinction matters: a topic appearing in Year 1 lectures but not assessed differs from a topic with multiple assessment touchpoints. Graph queries distinguish these, providing educators with actionable intelligence about prior knowledge they can genuinely assume versus content requiring review.

### Additional benefits: Student access and beyond

While the primary value proposition focuses on staff efficiency and compliance, the same infrastructure enables student-facing benefits. Students could query prerequisite chains directly ("what should I study before cardiology?"), understand competency coverage across their programme, and navigate learning pathways informed by explicit structure. This doesn't eliminate need for educator guidance—interpreting why sequences exist, when flexibility is appropriate—but removes artificial barriers to basic structural information that students currently reverse-engineer from scattered documents.

The infrastructure could potentially extend to direct regulator access, enabling bodies like the GMC or NMC to query institutional curriculum structure during accreditation reviews rather than requiring institutions to compile evidence. This would shift compliance from reactive documentation to transparent structural verification. However, such access raises questions about institutional autonomy and gaming behaviours that merit separate analysis—we mention it here as a logical extension of queryable infrastructure rather than a primary design goal.

### Distinguishing curriculum as designed from curriculum as enacted

The graph captures documented curriculum structure—official prerequisites, competency mappings, learning outcomes, assessment blueprints. This represents the curriculum as designed: the formal structure institutions create, document, and submit for regulatory approval. It doesn't capture the curriculum as enacted—informal connections emerging through teaching, real-time pedagogical adjustments based on cohort needs, interdisciplinary insights arising through educator-student dialogue, or the tacit knowledge about when documented rules prove flexible in practice.

This distinction clarifies what the infrastructure can and cannot do. The graph makes documented structure queryable, valuable for navigating official requirements, demonstrating compliance, and identifying structural gaps. The lived pedagogical experience remains in educator-student relationships, including professional judgement about when to deviate from documented sequences, how seemingly separate topics connect in practice, and why particular curricular structures support learning even when alternatives seem technically viable.

Graph infrastructure doesn't replace this pedagogical expertise—it makes the formal structure explicit and queryable so educators can focus professional judgement on interpretation, flexibility, and pedagogical reasoning rather than spending time manually extracting information that should be straightforward queries. The technology handles structural verification; educators handle educational meaning-making.

---

## 5. Implementation considerations

### Technical feasibility and institutional control

The proposed architecture combines technologies at different maturity levels. Graph databases (Neo4j, RDF triple stores) have decades of production use in relationship-intensive domains—this component is genuinely mature and proven. Vector databases and semantic search infrastructure are newer, mainstream only since the large language model surge of the past 2-3 years, with rapidly evolving implementations. The Model Context Protocol is very recent (released 2024), still developing, with protocol refinements expected. The underlying AI models—whether used for semantic search embeddings or natural language interfaces—are changing rapidly, with new capabilities and architectures emerging regularly.

This technological heterogeneity isn't a weakness—it's an opportunity for AI-forward institutions (as defined in Section 1) to control their own destiny by choosing technology stacks suited to their contexts and values. An institution could deploy:

- Small open-source models running locally on institutional infrastructure, maintaining complete data sovereignty
- Large frontier models via API for enhanced capabilities, trading some control for performance
- Hybrid approaches using local models for sensitive data and API models for general queries
- Different embedding models optimised for biomedical text versus general educational content

The graph database core remains stable regardless of these choices. When better embedding models emerge, institutions can re-embed content without restructuring the graph. When new AI providers offer improved capabilities, interfaces can switch providers without rebuilding curriculum structure. When MCP evolves or alternative protocols emerge, the abstraction layer can adapt while core infrastructure persists. This architectural separation—stable structure in graphs, evolving intelligence in models—provides genuine flexibility.

**The requirement for active engagement**: However, this flexibility carries responsibilities. Institutions adopting this architecture commit to the AI-forward posture described in Section 1: active engagement with evolving AI infrastructure, not implementing a finished solution. They'll need technical capability to evaluate new models, update embedding approaches, refine system prompts, and adapt interfaces as technologies develop. This isn't "deploy and forget" infrastructure—it requires ongoing attention, experimentation, and adaptation.

Being AI-forward means developing internal capability to assess AI developments, make informed technology choices, and iterate infrastructure as capabilities evolve. The reward is institutional control—making decisions aligned with institutional values about data sovereignty, model choice, and capability trade-offs. The cost is ongoing technical engagement requiring dedicated staff time, continuous learning, and willingness to experiment with emerging tools.

Some institutions embrace this approach—viewing technology choice as strategic capability worth investing in. Others prefer stable vendor solutions even with less flexibility, outsourcing technology decisions to established providers. Both positions are legitimate; institutions should assess their technical capacity, strategic orientation, and resource availability before committing to infrastructure requiring AI-forward stewardship.

### Transition pathway

Institutions don't start from nothing. They have existing curriculum management systems, documents in repositories, VLE structures, and spreadsheet-based mappings. The transition involves extracting structured data from current systems, transforming it to graph-compatible format, validating extracted relationships through faculty review, and gradually shifting workflows to graph-native tools.

This requires phased implementation over 18-24 months. Early phases focus on data extraction and populating the graph database while existing systems continue operating normally. Middle phases introduce query interfaces for staff to explore curriculum structure without changing their working practices. Later phases shift curriculum modification workflows to graph-native tools, making the graph the source of truth with documents generated from it. Parallel operation during transition is essential—staff won't abandon familiar systems until new infrastructure demonstrably improves their work.

*A high-level implementation pathway will be shared as an appendix, including specific phases, timelines, and critical success factors for institutions considering adoption.*

### Change management realities

The most significant implementation challenges are human, not technical. Faculty must see clear efficiency gains justifying workflow changes—"this makes my work easier" not "the institution requires this new system." Research on curriculum analytics adoption confirms this: successful implementation requires engaging stakeholders across different phases of design, with demonstrated value at each stage rather than top-down mandates (Hilliger et al., 2024). Curriculum office staff need demonstrated time savings for compliance reporting before committing to learning new tools. Quality assurance teams require confidence that graph queries actually identify issues more reliably than current manual processes.

Success requires strong executive sponsorship ensuring resource allocation, faculty involvement from the beginning (not just as end users), realistic timeline expectations (transformation takes years, not months), and clear communication about benefits at each phase. Pilot implementations demonstrating value to specific stakeholder groups—generating one compliance report in hours that previously took weeks—build momentum more effectively than comprehensive system rollouts.

The organisational change is substantial: shifting from document-centric to structure-centric curriculum management alters how staff conceptualise their work. This isn't merely learning new software; it's changing mental models about what curriculum management means.

### Maintenance and governance

A key architectural advantage: as the graph becomes the working system, maintenance integrates into normal curriculum development workflow rather than creating additional burden. When educators modify prerequisites, they're updating the graph directly—the source of truth. Derived artifacts (module specifications, programme handbooks, VLE course structures) regenerate automatically. This contrasts with current approaches where changes require updating multiple separate systems and documents, inevitably creating synchronisation failures.

Governance policies must define who can modify curriculum structure, establish approval workflows for significant changes, implement audit logging for all modifications, and ensure regular validation checks for data quality. Rather than creating parallel governance structures, this approach makes existing governance processes explicit and enforceable through technical infrastructure. The technology supports governance rather than circumventing it.

Data quality becomes an organisational concern rather than a technical one. If staff enter unclear prerequisite relationships or map learning outcomes to incorrect competencies, the graph faithfully represents those decisions—making errors more visible but not preventing them. Clear policies, training, and quality assurance processes ensure the queryable infrastructure contains accurate structural information.

---

## 6. Conclusion: Infrastructure critique, not technical solution

This proposal argues for removing technical barriers to interrogating curriculum complexity, not for eliminating that complexity through technology. Professional education curricula possess explicit structure—prerequisite chains, competency mappings, hierarchical organisation—that current systems make artificially inaccessible through technical constraints rather than pedagogical design. The problem isn't curriculum complexity; it's infrastructure inadequacy forcing staff to manually extract information from documents they themselves created.

The primary value proposition addresses institutional pain points: regulatory compliance reporting consuming weeks of staff time, quality assurance processes requiring exhaustive manual verification, and curriculum office teams unable to efficiently answer structural questions. These are symptoms of a deeper architectural problem: documentation designed for human readers cannot function as operational infrastructure for AI-mediated processes (Rowe, 2026). Graph databases make relationships first-class queryable entities, enabling straightforward traversal of typed connections that document-based systems cannot expose. This transforms compliance verification from weeks of manual compilation to hours of systematic querying with complete audit trails. The efficiency gains are substantial and measurable.

The architecture supports rather than replaces professional judgement. Making curriculum structure queryable—prerequisites, competency mappings, assessment coverage—provides infrastructure for verification tasks. Educators retain essential interpretive authority: deciding what prerequisites should exist, determining whether assessment coverage is adequate, exercising flexibility when documented rules prove pedagogically suboptimal. Technology handles structural verification; educators handle educational meaning-making. This distinction clarifies rather than confuses professional roles.

Implementation requires AI-forward institutional commitment: treating AI integration as ongoing strategic practice, developing capability to evaluate emerging technologies, making informed choices about models and infrastructure aligned with institutional values. This suits institutions viewing technology choice as strategic capability worth investing in. Other institutions may legitimately prefer stable vendor solutions with less flexibility but lower ongoing engagement requirements. Neither approach is universally superior; the choice depends on institutional capacity, strategic orientation, and resource allocation priorities.

Institutions adopting this architecture should view it as infrastructure investment enabling multiple concurrent uses—compliance reporting, quality assurance, curriculum design support, and potentially student access—rather than solving particular problems through technical means. The graph infrastructure doesn't solve curriculum complexity; it makes that complexity navigable by removing artificial technical barriers. Success depends on organisational commitment, realistic timelines acknowledging substantial change management requirements, and clear demonstration of efficiency gains justifying the AI-forward engagement this approach demands.

Professional education increasingly operates under scrutiny from regulatory bodies demanding explicit evidence of competency coverage and systematic quality assurance. Institutions need infrastructure supporting these requirements efficiently. The question isn't whether to make curriculum structure queryable, but whether institutions build capability to control their technological approaches or outsource these decisions to vendors. For AI-forward institutions, graph-based curriculum infrastructure offers a path to institutional agency in an increasingly AI-mediated educational landscape.

---

## References

Abu-Salih, B., & Alotaibi, S. (2024). A systematic literature review of knowledge graph construction and application in education. *Heliyon*, *10*(3), e25383. https://doi.org/10.1016/j.heliyon.2024.e25383

Anthropic. (2024, November 25). Introducing the Model Context Protocol. https://www.anthropic.com/news/model-context-protocol

CAUDIT. (2025). *Higher Education Reference Models (HERM), version 3.2.0*. https://www.caudit.edu.au/communities/caudit-higher-education-reference-models/

Hilliger, I., Miranda, C., Celis, S., & Perez-Sanagustin, M. (2024). Curriculum analytics adoption in higher education: A multiple case study engaging stakeholders in different phases of design. *British Journal of Educational Technology*, *55*(3), 785–801. https://doi.org/10.1111/bjet.13374

Rowe, M. (2026). Documentation becomes infrastructure when AI agents are the readers. https://michael-rowe.github.io/emergent-scholarship/Essays/documentation-as-infrastructure/

UCISA. (2025). *Higher Education Reference Models*. https://www.ucisa.ac.uk/groups/enterprise-architecture/herm

Wang, Q., Hou, S., Wan, S., Feng, X., & Feng, H. (2025). Applying Knowledge Graph to Interdisciplinary Higher Education. *European Journal of Education*, *60*(2), e70078. https://doi.org/10.1111/ejed.70078

Xiao, G. (2023). A Personalized Learning Path for French Study in Colleges Based on a Big Data Knowledge Map. *Scientific Programming*, *2023*(1), 4359133. https://doi.org/10.1155/2023/4359133
