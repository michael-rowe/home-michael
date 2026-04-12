# Context sovereignty: technical foundations for human-centred AI collaboration

## Outline v0.3

### Authors
Michael Rowe and Wesley Lynch

---

### Working abstract

The observation that context matters more than model capability has become widely shared among AI practitioners: context engineering is now a recognised discipline, and the practitioner consensus is that most AI failures are context failures rather than model failures. This essay starts where that consensus stops. Drawing on experience building a proof of concept for curriculum infrastructure in regulated health professions education, we argue that the most consequential context in any AI interaction is the one a human brings — values, commitments, frameworks, and ways of making meaning — and that this remains true regardless of how capable models become. We introduce **context sovereignty** as a name for the design commitment that follows: whoever the context belongs to should remain its author, including authoring the terms on which it changes through interaction with other contexts. Drawing the term deliberately from political theory, we use sovereignty in its self-governance sense — not independence from external pressures, but legitimate authority over how those pressures are received and integrated. We describe the technical infrastructure that enables this — knowledge graphs, the Model Context Protocol, agentic harnesses — and identify a design pattern observed in our proof of concept: multiple context layers with different ownership, authority, and change cadences must interact while retaining their integrity. The essay's central claim is simple and durable: the curation and cultivation of context is the work, whether you are an individual, an institution, or a regulatory body, and that work belongs to whoever the context belongs to.

---

### 1. The observation: context is the work

**What this section does:** Establishes the central observation in plain terms, acknowledges that the technical version of this observation is now widely shared, and pivots to the question that the practitioner discourse has not yet addressed.

- The plain claim: what makes AI interaction productive is the context you bring to it, and this remains true regardless of how capable models become. Curate the context well and the interaction is meaningful. Curate it poorly and the interaction is generic, regardless of which model you use
- This applies at every scale: an individual building a personal knowledge architecture, an institution structuring its curriculum as a queryable system, a regulatory body maintaining its standards framework. The verb is the same in each case — curation and cultivation of context. The beneficiary is the same: the quality of what comes out of the interaction
- The technical version of this observation has become common knowledge among AI practitioners. Context engineering is now a recognised discipline. The practitioner consensus is that most AI failures are context failures rather than model failures. The essay acknowledges this directly rather than pretending to originate it
- What the practitioner discourse has not yet addressed: the question of *whose* context, who authors it, and what it means for the context to belong to the person or institution it concerns. The engineering literature describes how to structure context. It does not ask who has the right to author it or what should happen when contexts with different owners come into contact
- The essay's contribution starts at that question. Its origin is not theoretical but practical: the authors were building a curriculum infrastructure for regulated health professions education and discovered that the architectural choices they were making were also taking positions on these questions, whether or not they intended to
- Positionality: the observations in this essay emerge from building a specific proof of concept. The authors have a stake in the infrastructure choices described. The framing offered here is a generalisation from that experience, not a universal theory

### 2. The diagnosis: why current approaches fall short

**What this section does:** Briefly explains why prompting and document-based RAG are insufficient, using the proof of concept as the diagnostic case. Kept brief because the essay's energy belongs in Sections 3, 4, and 5.

- Prompting as episodic burden: every interaction begins from scratch, placing the entire contextualisation load on the user
- The RAG failure in practice: early versions of the curriculum system used retrieval-augmented generation over curriculum documents. RAG treats knowledge as text chunks retrievable by semantic similarity. It cannot answer structural queries like "show me all learning outcomes in this programme not mapped to any NMC standard" because this requires traversal of typed relationships, not retrieval of similar passages. The document contains the information; RAG cannot surface the structure
- The general diagnosis: current approaches treat context as additive (something bolted onto an interaction) rather than foundational (the architecture within which reasoning occurs). This is what the context engineering discourse has begun to address at the technical level
- The next question — the one this essay takes up — concerns ownership rather than architecture. Who should author the context? What happens when contexts with different owners interact?

### 3. Naming the commitment: context sovereignty

**What this section does:** Introduces the concept and the name. Defines it precisely. Acknowledges the term's borrowing from political theory openly and uses that borrowing to clarify rather than obscure what the concept means.

- The commitment, stated plainly: whoever the context belongs to should remain its author, including authoring the terms on which it changes through interaction with other contexts
- Why this needs a name: the practitioner discourse has a vocabulary for *how* to engineer context but not for *who* should author it. Without a name, the ownership question gets folded into data governance, privacy, or platform control debates that do not quite address it
- The name: context sovereignty. The word is borrowed deliberately from political theory, where sovereignty does not mean isolation or independence from external pressures. It means legitimate self-governance within a network of relationships with other sovereign entities. A sovereign nation interacts, enters treaties, accepts constraints. What it retains is authority over how those interactions change its internal arrangements. This is precisely the sense relevant to context
- Distinguished from data sovereignty: data sovereignty asks who controls information; context sovereignty asks who authors the structured environment that determines what information means
- Distinguished from AI sovereignty / sovereign AI: these concepts operate at the infrastructure level — who controls the compute, the models, the data centres. Context sovereignty operates at the meaning-making level — who authors the structured knowledge, relationships, and constraints within which AI reasons
- Context sovereignty is not a theoretical principle derived from first premises. It is a name for an observation: the curation of context is the work, and the work belongs to whoever the context belongs to. The essay names this so that it can be discussed, not because it has the status of a discovered law

### 4. The infrastructure: what we built and what it enabled

**What this section does:** Walks through the technical components of the proof of concept, explaining each in lay terms with concrete examples. Each component is presented as evidence for the central observation: better context produced dramatically better AI reasoning, without changing the underlying models.

#### 4a. Knowledge graphs for structured representation

- What a knowledge graph is (lay explanation): a way of storing information not as documents or tables but as entities (things) connected by typed relationships. A module "belongs to" a programme; a learning outcome "is assessed by" an assessment task; a programme "must satisfy" a set of NMC standards
- What the transition from RAG to graph-based architecture changed: the system could answer structural queries across the curriculum — multi-hop reasoning that follows chains of relationships rather than retrieving similar text. Same models, radically different capability
- The general lesson: knowledge graphs preserve the structure of a domain rather than flattening it into retrievable chunks. The architectural choice is also an epistemic one — a decision about what knowledge is and how it should be represented

#### 4b. Contextual interoperability via the Model Context Protocol

- What MCP is (lay explanation): a standardised protocol that allows AI systems to connect to external data sources through consistent interfaces while maintaining access control. Like a universal adaptor that lets different AI systems plug into your data without requiring you to hand over control of that data
- What MCP enabled in the proof of concept: the system could connect to the Neo4j graph database and return evidence-based responses through a standardised interface that separates the AI's reasoning capability from the data it reasons over
- Why this matters for the central observation: reasoning and data are architecturally separated. Context remains locally controlled; intelligence is accessed as a service. The user benefits from AI capability without surrendering control over their knowledge architecture

#### 4c. Agentic harnesses and context constraints

- What an agentic harness is (lay explanation): the orchestration layer that manages what an AI agent can see, what tools it can use, what constraints govern its behaviour, and what goals it pursues
- What the proof of concept demonstrated: multiple agents working on different tasks, each with context constraints appropriate to their task. A standards mapping agent sees learning outcomes and NMC standards; it doesn't see staffing data. A gap analysis agent sees programme-level summaries; it doesn't see individual module content
- The counterintuitive observation: constraining context improves reasoning. An agent with access to everything performs worse than an agent attending to the right things for a specific task. Relevance is a function of constraint, not access
- Why this matters: context curation is not just about providing more information but about structuring attention. The act of deciding what an agent should attend to is itself an act of authorship

### 5. Multiple contexts in interaction: a design pattern

**What this section does:** Describes the design pattern that emerged from the proof of concept. Combines what was the static-pattern section (the layers themselves) with the dynamic-pattern section (how they interact) into a single, more proportionate treatment. Honest about what was observed versus what the architecture points toward.

#### 5a. Three context layers, observed in practice

- The proof of concept handles three context layers, each with different ownership, authority, and change cadence:
  - **External regulatory context** (NMC/HCPC standards): externally authored, relatively stable, non-negotiable. Imported, versioned, treated as read-only constraints
  - **Institutional context** (curriculum structure): collaboratively authored by programme teams, changes on revalidation cycles, represents local interpretation of external requirements
  - **Personal context** (where the project originated conceptually): individually authored, locally controlled, sovereign to the individual
- The design observation: these layers cannot be flattened into a single context. They have different owners, different rules for editability, different update rhythms. The system architecture has to maintain the distinct provenance and integrity of each layer while enabling reasoning across all of them
- Honest acknowledgement: the proof of concept has developed the institutional and regulatory layers most fully. The personal context layer is less developed in the current implementation. The pattern is real but the evidence is asymmetric
- The general pattern: in any domain where AI needs to reason across contexts with different owners, the system must maintain the sovereignty of each layer while enabling productive interaction between them. The number of layers will vary by domain — three in our case, four or more in others — but the pattern of multiple contexts with different authority structures is general

#### 5b. Contexts exert pressure on each other

- These layers do not just sit alongside each other. Agentic processes operating across layers create directional pressure between them
- The dominant flow in the proof of concept is downward: regulatory context constrains institutional context; institutional context informs personal context. When an agent identifies that a student's understanding is inconsistent with the curriculum, the student's context updates. This is how the system supports learning — institutional context exerts legitimate pressure on personal context
- The architecturally interesting question — and the one the essay raises rather than fully resolves — is whether the flow can reverse. When many learners interact with an institutional context over time, patterns of divergence might constitute a signal that the institutional context should examine itself. The design infrastructure for this — aggregation that detects patterns without exposing individual data, threshold logic, provenance tracking, governance-aware permissions — is what the architecture points toward but has not yet been implemented in our system
- Distinction between observation and proposal: the downward pressure is observed in our proof of concept. The upward pressure is a design implication of the architecture, not a tested feature. The essay is honest about which is which

#### 5c. Sovereignty as process, not outcome

- The bidirectional flow forces a more precise account of what context sovereignty actually means
- It cannot mean that whoever controls their context gets to decide what is true. If a student's knowledge graph says ibuprofen is a beta-blocker, sovereignty does not protect that claim from correction
- It also cannot mean that the institutional context is always right and personal context must conform. That would reduce learning to compliance
- The resolution: sovereignty governs the process by which context changes, not the outcome. You see why your context has been flagged. You understand the relationship between your representation and the institutional one. You decide how to integrate the correction. Your contextual experience is captured as meaningful data, not discarded as error
- The full formulation: context sovereignty is control over the terms on which one's context changes, coupled with the obligation to treat contextual experience as meaningful signal regardless of the direction of authority
- An honest note: this formulation converges on existing pedagogical principles — transparent feedback, learner agency, formative assessment. The contribution is not the principle itself but the recognition that it can be enacted as system architecture, and that the architecture *requires* it once you have multiple context layers in interaction

### 6. The work is the curation: a design principle and what it asks of us

**What this section does:** Pulls the essay back to its central observation and states the design principle that follows. Brief — the evidence has been presented and the conceptual work has been done.

- The central observation, restated: the curation and cultivation of context is the work, regardless of how capable models become. This is true at every scale and for every kind of context owner
- The design principle that follows: systems should be built so that the people and institutions whose context they handle remain the authors of that context. Context sovereignty is the name for this commitment
- Where this principle has the most purchase: any domain where AI needs to reason over structured relationships with multiple stakeholders — clinical decision support, legal compliance, research synthesis, personal knowledge management, and the curriculum infrastructure case described here
- The specific contributions of this essay, named honestly:
  - The framing: that the context engineering discourse needs an ownership question alongside its architecture question, and that this question deserves a name
  - The pattern: multiple context layers with different authority and ownership, interacting through governed processes, observed in a working proof of concept
  - The refinement: sovereignty as process, not outcome — a way of understanding what control over context can and cannot mean once contexts are in contact
- What this essay has not addressed: the pedagogical implications of context sovereignty for learning, assessment, professional formation, and institutional design. These are developed in a companion essay
- A closing claim, simply stated: the temptation in AI discourse is to focus on what models can do. The more durable question is what humans bring. The answer remains the same regardless of model capability — we bring ourselves, our knowledge, our values, our ways of making meaning — and the work of building useful AI systems is, more than anything else, the work of making that contribution structured, available, and ours

---

### Notes on register, audience, and what changed in v0.3

- Primary audience: people designing or building AI-supported systems, with secondary audience of technically interested educators and institutional leaders
- Register: technical but accessible. Every component explained in lay terms with concrete examples. No assumption of prior knowledge of graph databases, MCP, or agentic architectures
- The proof of concept is presented as evidence for a principle, not as a product. No commercial framing
- British spelling, sentence case headings, prose over lists, classic style throughout
- **What changed from v0.2:**
  - The directional pressure material has been compressed from a standalone Section 6 with three subsections into Section 5b, restoring the essay's centre of gravity to the central observation about context curation
  - The opening section has been rewritten to acknowledge openly that the technical observation about context engineering is now common knowledge, and to position the essay's contribution as starting where that consensus stops
  - The sovereignty term is introduced more directly and the borrowing from political theory is acknowledged openly rather than hedged. The political analogy is presented as a feature, not a liability
  - The downward/upward pressure distinction is preserved but the essay is now honest that downward pressure is observed in the proof of concept and upward pressure is a design implication, not a tested feature
  - The sovereignty-as-process refinement is preserved but explicitly acknowledged as converging on existing pedagogical principles, with the contribution located in the architectural implementation rather than the principle itself
  - Several places where the essay had drifted into "principle" framing have been rewritten as "observation" or "design pattern" framing, to keep the altitude honest about what the evidence supports
  - The closing section names the contributions explicitly and modestly: a framing, a pattern, a refinement. Not a theory
