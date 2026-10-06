---
type: essay
title: A theoretical framework for integrating AI into health professions education
title-highlight: theoretical framework
description: "Health professions education faces a fundamental challenge: graduates are simultaneously overwhelmed with information yet under-prepared for complex practice environments. This essay introduces a theoretically grounded framework for integrating AI into health professions education that shifts focus from assessing outputs to supporting learning processes. Drawing on social constructivism, critical pedagogy, complexity theory, and connectivism, six principles emerge — dialogic knowledge construction, critical consciousness, adaptive expertise, contextual authenticity, metacognitive development, and networked knowledge building — to guide AI integration in ways that prepare professionals for the complexity and uncertainty of contemporary healthcare practice."
meta-description: "A framework for AI in health professions education, built from four learning theories, that moves attention from outputs to learning processes."
author:
  - "[[Michael Rowe]]"
affiliation:
  - University of Lincoln
email:
  - mrowe@lincoln.ac.uk
keyphrase: "framework for AI in health professions education"
version: 1.1
created: 2025-03-29
modified: 2026-10-06
orcid: 0000-0002-1538-6052
doi: 10.31219/osf.io/c764f_v2
doclicense: Creative Commons Attribution 4.0 International
doclicenseurl: https://creativecommons.org/licenses/by/4.0/
tags:
  - complexity
  - connectivism
  - constructivism
  - critical-pedagogy
  - health-professions-education
  - learning-theory
  - emergent-scholarship
related:
  - "[[Posts/2026-09-08-six-principles-health-professions-education]]"
  - "[[Guides/ai-hpe-framework-guide]]"
  - "[[Essays/learning-alignment]]"
  - "[[Notes/AI literacy]]"
  - "[[Notes/wicked problems]]"
category:
  - Technology
  - Teaching
draft: false
reviewed:
  - essay_writer
  - writing_style
  - SEO_optimiser
  - copy_editor
linkedin:
---
> [!info] **About this essay**
> - **Author**: Michael Rowe ([ORCID](https://orcid.org/0000-0002-1538-6052))
> - **Affiliation**: University of Lincoln (mrowe@lincoln.ac.uk)
> - **Created**: 29 March 2025
> - **Version**: 1.1 (last updated: 6 October 2026)
> - **Keywords**: artificial intelligence, complexity, connectivism, critical pedagogy, health professions education, learning theory, social constructivism
> - **License**: [Creative Commons Attribution 4.0 International](https://creativecommons.org/licenses/by/4.0/)
> - **Preprint DOI**:
> 	- Open Science Framework (preferred): [10.31219/osf.io/c764f_v2](https://doi.org/10.31219/osf.io/c764f_v2)
> 	- Zenodo (legacy): [10.5281/zenodo.15106214](https://zenodo.org/records/15106214)
> - **Peer reviewed**: No

### Abstract

Health professions education has a problem that predates AI but that AI has made impossible to ignore: our educational approaches have tended to prioritise content transmission and artefact production over the conditions under which professional learning actually occurs. Graduates emerge simultaneously overwhelmed with information and underprepared for complex practice. Students are already using AI extensively; their motivations for doing so are inevitably mixed, but the pattern itself suggests that existing educational structures leave needs unmet that these tools address. I develop a theoretically grounded set of design principles for integrating AI into health professions education (HPE). Drawing on social constructivism, critical pedagogy, complexity theory, and connectivism, I conducted a structured conceptual analysis of learning interactions across six dimensions: power dynamics, knowledge representation, agency, contextual influence, identity formation, and temporality. Six convergences emerged — dialogic knowledge construction, critical consciousness, adaptive expertise, contextual authenticity, metacognitive development, and networked knowledge building — each identifying conditions under which learning is effective according to multiple theoretical perspectives. These convergences were translated into design principles grounded in how learning works rather than in current AI capabilities, which means the principles support effective education with or without AI. They shift attention from policing assessment outputs to creating the conditions under which students develop the reasoning, judgement, and adaptive capacity that healthcare demands.

> [!summary] Key takeaways
> 1. **AI exposes existing problems.** Health professions education has prioritised content transmission and artefact production over the conditions under which professional learning occurs, and AI makes that harder to ignore.
> 2. **Four theories, six dimensions.** Social constructivism, critical pedagogy, complexity theory, and connectivism are compared across power, knowledge representation, agency, context, identity, and time.
> 3. **Six convergences become six principles.** Dialogic knowledge construction, critical consciousness, adaptive expertise, contextual authenticity, metacognitive development, and networked knowledge building.
> 4. **Grounded in learning, so stable as AI changes.** The principles describe effective learning with or without AI, and don't need revising when model capabilities change.
> 5. **Access to AI is different from learning with it.** Students need epistemological access, and institutions need structural change in assessment, curriculum, and quality assurance, for AI to support learning.

## Introduction

Health professions education produces a troubling tension: graduates who are simultaneously overwhelmed with information and underprepared for the complexity of modern practice (Frenk et al., 2010; Irby et al., 2010). Content overload, decontextualised knowledge, and assessment practices that reward recall over reasoning are old problems: well-documented features of educational approaches increasingly at odds with what healthcare delivery requires (Frenk et al., 2010; Van der Vleuten, 2016).

And these challenges are entrenched. Students struggle to integrate theoretical knowledge with clinical practice. Educators labour under curricular structures that fragment learning into discrete subjects and skills. Assessment practices measure what is easy to evaluate rather than what is important to learn, and evaluating proxies for learning takes the place of observing learning itself. The gap between how we educate and how health and care professionals actually work continues to widen, despite sustained efforts to bridge it.

Artificial intelligence has entered this landscape as something more disruptive than another technology to integrate: a catalyst that exposes assumptions we had stopped examining. Students are already using AI tools extensively — surveys report adoption rates of 86–92% (Digital Education Council, 2024; Freeman, 2025) — to explore concepts, practise reasoning, and prepare for assessments, regardless of whether educators have sanctioned or acknowledged this use. Some of this use is straightforwardly instrumental, with students looking for the path of least resistance through the curriculum. But the scale and consistency of adoption suggest something beyond convenience-seeking, and the more interesting question is what students' rapid embrace of AI reveals about the limitations of what we were already doing.

AI makes the existing problems of health professions education harder to ignore. When students use AI to generate assignment text, this reveals that our assessments were measuring the difficulty of producing artefacts rather than the depth of learning behind them (Dawson et al., 2024). When AI can summarise a lecture more efficiently than attending it, this exposes the poverty of transmission-based teaching. When AI support improves students' short-term task performance while simultaneously reducing their metacognitive engagement — a pattern Fan et al. (2024) describe as "metacognitive laziness" — this illustrates how AI can produce the appearance of learning while undermining its substance. The challenge is to recognise what AI's disruptive presence tells us about those practices, and to respond with approaches grounded in how learning works.

Several frameworks have already been developed that aim to address different aspects of AI in education. TPACK (Mishra & Koehler, 2006) examines the intersection of technological, pedagogical, and content knowledge. UNESCO's AI competency frameworks (UNESCO, 2024a, 2024b) outline capabilities for students and teachers. Ng et al.'s (2021) AI literacy framework identifies competencies for understanding and using AI, extended by Chee et al. (2025) into a comprehensive competency framework mapping AI literacy across different learner groups and educational stages. These are useful, but they share a common orientation: they focus on what people need to know *about* AI. The question left open is how established learning theory should shape the integration of AI into educational practice in ways that support student learning.

Recent work has begun to address this gap. Wegerif and Casebourne (2025) propose a "double dialogic pedagogy" grounded in dialogic theory, arguing that AI should be positioned as a partner in expanding the space of dialogue rather than as a replacement for cognition. This contribution articulates how AI might support both immediate dialogic exchange and longer-term induction into cultural conversations. But their framework draws on a single theoretical tradition, dialogic theory, and focuses on general education rather than the specific demands of professional formation in complex, high-stakes practice environments. I complement and extend this work by integrating multiple theoretical perspectives and grounding the analysis in the particular challenges of health professions education, a context characterised by the combination of high-stakes clinical practice, rapidly evolving knowledge, acute tension between standardised assessment and adaptive expertise, and the formative challenge of developing professional identity under conditions of uncertainty. HPE concentrates general educational challenges in ways that make the stakes of getting AI integration right (or wrong) especially visible.

I start from theoretical foundations about the nature of learning and work forward to design principles for AI integration, examining four interrelated dimensions of learning through complementary theoretical lenses: the *how* of learning (social constructivism), the *why* (critical pedagogy), the *where* (complexity theory), and the *what* (connectivism). The aim is to move past the framing of AI as either threat or panacea and toward a more productive question: under what conditions does professional learning occur, and how can AI be integrated in ways that support rather than undermine those conditions?

## Theoretical foundations

The analysis draws on four theoretical perspectives, each addressing a dimension of learning the others do not fully capture. Other theories could have been included. Self-determination theory (Deci & Ryan, 2000) would foreground motivation and autonomy. Activity theory (Engeström, 2001) would emphasise mediated action within systems. Phenomenological approaches (Dall'Alba & Barnacle, 2007) would centre embodied experience. I chose these four because their complementarity across the how, why, where, and what of learning provides analytical breadth without redundancy, though they don't exhaust the landscape. My positionality, set out below, also shaped the selection.

### Social constructivism

Social constructivism addresses the *how* of learning. Knowledge, in this view, is actively constructed through social interaction and can't simply be passed from teacher to student (Vygotsky, 1978). This is a familiar claim, but its implications are routinely ignored in HPE, where content delivery and procedural training remain dominant. Vygotsky's zone of proximal development — the space between independent capability and what becomes possible with guidance — describes something clinical educators recognise intuitively: students develop competence through scaffolded interaction with experienced practitioners far more than through information transfer (Jonassen, 1995). If knowledge is constructed through social processes, AI should serve as a dialogical partner that supports meaning-making; used as a content generator whose outputs students passively consume, it works against the way knowledge is built.

### Critical pedagogy

Critical pedagogy addresses the *why* of learning by asking what education is for. Freire's (2000) critique of "banking education," where educators deposit knowledge into passive students, describes something still pervasive in educational contexts: curricula that prioritise standardised content delivery over student agency, reinforcing the authority of institutions while positioning students as recipients of established knowledge (hooks, 1994). The alternative Freire proposed, conscientisation (the development of critical awareness of the systems shaping one's experience), is directly relevant to AI integration. The question goes beyond whether students can use AI effectively, to whether they can evaluate whose interests are served by the knowledge AI produces, what assumptions are embedded in its outputs, and what is rendered invisible by its design. AI interactions that develop this critical consciousness are educationally valuable, and interactions that bypass it are not.

### Complexity theory

Complexity theory addresses the *where* of learning: the systems in which education and healthcare practice occur. HPE has generally been structured around linear, reductionist models: modular curricula, sequential skill development, standardised procedures, and predictable outcomes (Fraser & Greenhalgh, 2001). Contemporary healthcare operates differently. It is a complex adaptive system characterised by nonlinearity, emergence, and unpredictability (Plsek & Greenhalgh, 2001; Bleakley, 2010). The misalignment is fundamental. Educational approaches that emphasise memorisation of information and discrete skill development produce practitioners who are underprepared for environments where they must constantly adapt knowledge to unique presentations and evolving conditions. AI's contribution here lies in creating dynamic learning experiences that mirror the complexity of actual practice, more than in delivering content efficiently.

### Connectivism

Connectivism addresses the *what* of learning: the nature and organisation of knowledge. It starts from the observation that knowledge is now distributed across networks more than it resides in individuals or static repositories (Siemens, 2005; Goldie, 2016). What students need to learn shifts accordingly: from static content to the connections between knowledge domains, the patterns linking disparate areas, and the capacity to navigate evolving knowledge networks. This reframing matters because healthcare specialisation continues to deepen while the problems practitioners face increasingly require knowledge that crosses disciplinary boundaries. AI can make visible connections between knowledge domains that might otherwise remain obscure, but only if it is used to support network navigation rather than content delivery.

## Analytical approach

### Methodology

Moving from theoretical foundations to design principles requires an approach that maintains theoretical integrity while producing something practically useful. I adopted a structured conceptual analysis (Jabareen, 2009) involving three phases: constructing an analytical lens through which to compare the theories, mapping each theory's propositions across that lens, and identifying convergences: points where multiple theories arrive at similar insights despite different conceptual starting points. Identifying a convergence was an interpretive judgement, made by reading across the matrix for conditions the theories reach from their different directions, and I applied no counting rule to it.

### Constructing the analytical lens

To compare the four theories systematically, I needed a consistent frame. I identified six dimensions of learning interactions, which can be thought of as the points of engagement between learners and other elements of the educational ecosystem (Chi, 2009; Stahl et al., 2006). These dimensions emerged from close reading of the four theories, representing the fundamental concerns that each addresses, albeit differently: power dynamics (how authority is distributed), knowledge representation (how knowledge is structured and engaged with), agency (how learner autonomy is supported or constrained), contextual influence (how broader contexts shape learning), identity formation (how professional identity develops), and temporality (how learning unfolds over time).

The categories are consistent with established analytical frameworks in learning theory. Biggs's (1993) 3P model addresses factors overlapping several of these dimensions. Illeris (2003) identifies content, incentive, and interaction as the three dimensions of learning. Biesta (2015) distinguishes qualification, socialisation, and subjectification as functions of education, mapping onto the knowledge, identity, and agency dimensions. Barnett (2000) emphasises uncertainty and complexity as conditions of higher education, captured across the contextual and temporality dimensions. I could have included additional dimensions, for example embodiment (Dall'Alba & Barnacle, 2007) and affect, but these are less consistently theorised across all four perspectives, making systematic comparison more difficult. Their omission is a limitation I return to later.

### Positionality

Fifteen years of teaching and researching the use of technology in professional education has left me with commitments about what effective technology-enhanced learning looks like. This theoretical sensitivity (Glaser & Strauss, 1967) means that I recognise personally meaningful patterns because of deep domain knowledge. My selection of these four theories reflects not only their complementary coverage but a longstanding intellectual engagement with constructivist, critical, and complexity-informed approaches to education. The convergences I identified were shaped by this engagement too. I have tried to maintain rigour by grounding claims in the theory and making the comparative process transparent. But I am not claiming to have discovered the objective structure of learning theory. The resulting principles represent the intersection of theoretical convergence and informed professional judgement, representing only one map through a diverse problem space. Other scholars with different commitments would construct different maps. This is a feature of conceptual analysis rather than a limitation to be overcome.

## Comparative analysis

I analysed each theory's propositions across the six dimensions, creating a comparative matrix (Table 1) to make convergences and tensions visible (Suthers & Rosen, 2011; Wong et al., 2013).

**Table 1. Comparative matrix: four theories across six dimensions of learning interactions**

| Dimension | Social constructivism | Critical pedagogy | Complexity theory | Connectivism |
|---|---|---|---|---|
| **Power dynamics** | Gradual transfer of authority from expert to learner through fading scaffolding | Explicit critique of power hierarchies; redistribution through dialogue | Challenges hierarchical control; emphasises self-organisation and distributed decision-making | Authority distributed across networks; fluid and context-dependent |
| **Knowledge representation** | Personally meaningful constructions; provisional, evolving through collaborative meaning-making | Never neutral; reflects interests and power structures; values experiential knowledge | Emergent patterns rather than fixed facts; provisional, contextual, evolving | Exists in connections between sources; distributed, accessed not possessed |
| **Agency** | Learners as active constructors; autonomous exploration within scaffolded boundaries | Conscientisation; learners as subjects who act upon their world | Distributed across the system; adaptive responses rather than predetermined actions | Capacity to build, navigate, and reconfigure networks; decision-making about what to learn |
| **Contextual influence** | Inseparable from social and cultural context; authentic contexts essential | Embedded in sociopolitical contexts; addresses real-world problems | Context constitutive of learning; interdependent systems | Networks extend beyond formal contexts; quality depends on diversity |
| **Identity formation** | Becoming a community member through legitimate peripheral participation | Recognising one's position within social systems; developing capacity to transform them | Emerges from participation in complex adaptive systems; comfort with uncertainty | Develops through participation in knowledge networks; practitioners as nodes |
| **Temporality** | Developmental trajectories; progressive participation; timing of support crucial | Cycles of action and reflection (praxis); ongoing conscientisation | Non-linear progression; stability punctuated by rapid change | Real-time engagement with evolving networks; compressed learning cycles |

### Six convergences

What matters about this matrix is where the theories converge despite their different starting points. Six convergences emerged, identifying conditions under which learning is effective according to multiple theoretical perspectives.

**1. Dialogic knowledge construction.** None of these theories treats knowledge as information that can be transmitted. The mechanisms differ — scaffolded meaning-making in constructivism, liberatory exchange in critical pedagogy, emergent understanding from system interactions in complexity theory, knowledge created through network connections in connectivism — but the convergence is clear: learning that bypasses dialogue produces shallow understanding regardless of the quality of the output. This has clear implications for AI integration, where the temptation is to use AI precisely to bypass dialogue in favour of efficient content generation.

**2. Critical consciousness.** Conscientisation is critical pedagogy's term, but the imperative to evaluate the conditions shaping knowledge runs through all four perspectives. Constructivism demands critical reflection on community assumptions. Complexity theory requires awareness of how systemic dynamics constrain and enable action. Connectivism requires evaluation of information sources, network quality, and — increasingly — algorithmic mediation. The convergence: effective learning requires awareness of the forces that shape what counts as knowledge. Without this, students consume AI outputs the same way they consume textbooks in banking education, which is to say, uncritically.

**3. Adaptive expertise.** The question is whether students can act effectively when known procedures do not apply. All four theories challenge reproductive expertise: constructivism through progressive scaffolding toward independence, critical pedagogy through the capacity to transform the world rather than merely respond to it, complexity theory through adaptive responses to nonlinear conditions, connectivism through navigation of evolving knowledge networks. This distinction — adaptive versus reproductive expertise — becomes especially salient when reproductive outputs are computationally trivial to generate.

**4. Contextual authenticity.** Each theory insists that separating learning from context impoverishes it. Constructivism stresses situated learning. Critical pedagogy demands engagement with real-world conditions. Complexity theory treats context as constitutive of learning. Connectivism locates learning in diverse network contexts. Decontextualised information, of the kind that can be delivered efficiently through lectures and assessed through standardised examinations, misses what matters most about professional practice: that it happens in conditions of complexity, uncertainty, and human particularity. This convergence also carries implications for curriculum design: if contexts are dynamic, curricula that respond to evolving conditions serve learners better than rigid, predetermined structures.

**5. Metacognitive development.** Each theory emphasises awareness of one's own thinking, framed differently: self-regulation in constructivism, praxis in critical pedagogy, pattern recognition in complexity theory, meta-learning in connectivism. The convergence matters because without metacognitive awareness, students cannot distinguish between recognising a correct output and understanding the reasoning behind it. The risk is observable as well as theoretical: students using AI improve their short-term task performance while engaging in fewer metacognitive processes (Fan et al., 2024). The distinction between using AI to produce an answer and using AI to develop judgement is the one that typical institutional responses to AI have not yet adequately addressed.

**6. Networked knowledge building.** Learning that stays within disciplinary silos impoverishes what kinds of knowledge can be developed by practitioners. Constructivism's communities of practice can extend beyond professional boundaries. Critical pedagogy challenges disciplinary silos as power structures constraining whose knowledge counts. Complexity theory emphasises emergent knowledge from interconnections across system components. Connectivism explicitly positions learning as the creation and navigation of diverse networks. The convergence: knowledge building is strengthened by connections across boundaries of discipline, institution, and epistemology, a condition that AI is well-positioned to support through its capacity to surface connections across distributed information sources.

These convergences describe one set of conditions for effective learning. They don't depend on current AI capabilities or failure modes, so they would support effective learning with or without AI. But the introduction of AI into the educational context makes them newly urgent, because AI can either support these conditions or undermine them depending on how it is integrated.

## Design principles for AI integration

The move from descriptive convergence to prescriptive principle involves an interpretive step that must be made explicit. The logic is straightforward: if multiple learning theories converge on a condition under which learning is effective, then AI integration that supports this condition is likely to enhance learning, while integration that contradicts it is likely to undermine learning. The six principles below apply this reasoning to each convergence. Table 2 illustrates what each looks like in practice — both with and without AI — where the principles describe effective learning environments, and not merely "good AI use".

**The six principles:**

1. **Dialogic knowledge construction.** Position AI as a participant in dialogic learning rather than an authoritative source, augmenting the social processes through which knowledge is constructed.
2. **Critical consciousness.** Use AI to develop critical evaluation — of AI outputs, of the systems producing them, and of the power dynamics embedded in both — rather than uncritical consumption of AI-generated content.
3. **Adaptive expertise.** Use AI to develop flexible knowledge application in novel situations, rather than efficient reproduction of standardised responses.
4. **Contextual authenticity.** Use AI to enhance the authentic complexity of learning contexts by incorporating social, systemic, and relational factors, rather than removing that complexity.
5. **Metacognitive development.** Use AI to help make thinking visible, surface cognitive patterns, and develop students' capacity to monitor their own reasoning and biases.
6. **Networked knowledge building.** Use AI to facilitate knowledge building across disciplinary, institutional, and epistemological boundaries, supporting diverse knowledge networks rather than reinforcing silos.

**Table 2. Principles in practice: with and without AI**

| Principle | Without AI | With AI |
|---|---|---|
| Dialogic knowledge construction | Case-based group discussion with structured peer challenge | AI generates alternative clinical interpretations for students to evaluate and debate |
| Critical consciousness | Students analyse how clinical guidelines reflect particular populations and values | Students compare AI diagnostic reasoning with clinician reasoning, examining assumptions in both |
| Adaptive expertise | Progressive case sequences with increasing complexity and ambiguity | AI generates adaptive scenarios responding to demonstrated competence, introducing context-specific complications |
| Contextual authenticity | Placement learning in diverse clinical settings | AI creates simulations incorporating social determinants, resource constraints, and communication challenges |
| Metacognitive development | Reflective journals analysing clinical reasoning over time | AI tracks reasoning patterns across cases, surfacing tendencies and prompting targeted reflection |
| Networked knowledge building | Interprofessional education with shared case analysis | AI surfaces connections across disciplinary knowledge bases, translating between professional perspectives |

These principles constitute a framework in the sense that the theoretical foundations, analytical method, and resulting principles form an integrated whole. Because they rest on what several learning theories identify as the conditions under which professional learning is effective, and not on what AI can currently do, they don't need revising each time AI capabilities change or new frontier models reach students. They are positioned neither defensively (protecting education from AI) nor opportunistically (exploiting AI for its efficiency). They describe what effective learning contexts look like, and offer guidance for making sure AI serves that vision instead of replacing it with something more convenient and less educationally sound.

## Discussion

### Relationship to existing frameworks

The difference between this framework and existing ones is one of level. TPACK (Mishra & Koehler, 2006) asks whether an educator has the knowledge to use a technology effectively. The principles developed here ask whether the *way* a technology is being used supports the conditions under which learning occurs. An educator can have excellent TPACK and still deploy AI in ways that undermine dialogic knowledge construction, by treating AI-generated content as authoritative rather than dialogic, for instance. Ng et al.'s (2021) AI literacy framework identifies competencies for using AI effectively, but competency in using AI is not the same as using it in ways that develop adaptive expertise or critical consciousness. Chee et al.'s (2025) extension of AI literacy into a developmental pathway across educational stages provides useful granularity about what learners should know at different levels, but it remains oriented toward individual capability rather than the conditions that shape whether those capabilities lead to genuine learning. The existing frameworks address individual capabilities; the framework developed here addresses the pedagogical conditions in which those capabilities are exercised.

Wegerif and Casebourne's (2025) double dialogic pedagogy operates closer to the level of the present framework, grounding AI integration in a theory of learning rather than a theory of technology use. Their emphasis on dialogue as the mechanism through which AI becomes educationally productive aligns with the dialogic knowledge construction principle developed here. The present framework extends their contribution in two directions. First, by drawing on multiple theoretical traditions rather than one, it identifies conditions for effective learning — critical consciousness, adaptive expertise, contextual authenticity, metacognitive development, networked knowledge building — that dialogic theory alone does not fully capture. Second, by grounding the analysis in health professions education, it engages with the particular demands of professional formation in complex, high-stakes environments where the relationship between what students learn and what practitioners do carries consequences for patient safety and wellbeing.

### Physical access and epistemological access

Core to the framework is a claim that most students are not natural autodidacts. The widespread availability of AI has been accompanied by an assumption — in policy, popular discourse, and sometimes educational research — that access to powerful tools naturally enhances learning. This assumption recapitulates a pattern well-documented in educational technology research. Mitra's (2003) "hole in the wall" experiments are often cited as evidence that children teach themselves with technology: Mitra reported that children with unsupervised access to a public computer taught one another basic computer skills. Critics who looked at the same kiosks found them used mostly for games and drawing, with little engagement with educational content, and some sites falling into disuse once the novelty wore off (Arora, 2010; Warschauer, 2004). Much of the dispute turns on what counts as learning: acquiring the skill to operate the machine, or using the machine to learn something else. Warschauer's (2004) research on technology and social inclusion demonstrated that providing physical access to technology without epistemological access — the knowledge, practices, and dispositions needed to learn with it (Morrow, 2009) — consistently failed to produce anticipated outcomes.

The distinction is sharper still for the integration of AI into HPE. A student who uses AI to generate a well-structured essay has physical access to the technology and a skillset that enables them to use it effectively, but may nonetheless lack the epistemological access to learn through the process. AI can create a compelling illusion of learning: reviewing an AI-generated output and recognising it as correct produces a subjective sense of understanding while involving none of the constructive cognitive effort that learning depends on. This is the fluency illusion (Bjork & Bjork, 2011), in which re-reading material feels like learning because it produces familiarity without comprehension. Emerging empirical evidence supports this concern: Fan et al. (2024) found that students using AI exhibited significantly fewer self-regulated learning processes such as evaluation, monitoring, and orientation compared to those receiving human support, even as their immediate task outputs improved. Xu et al. (2025) further demonstrated that metacognitive support is critical for maintaining effective self-regulation in AI environments and that without it, students' self-regulated learning declined. The principles address this gap by specifying conditions, such as dialogue, critical evaluation, adaptation, and reflection, under which AI interaction produces genuine learning rather than the comfortable feeling that learning has occurred.

### Networked knowledge building and wicked problems

The principle of networked knowledge building deserves particular attention because the problems it addresses are not going away. The most pressing challenges in healthcare, including health inequities, the management of complex multimorbidity, service integration across institutional boundaries, and the health consequences of climate change, are what Rittel and Webber (1973) called [[Notes/wicked problems|wicked problems]]. These are challenges defined by incomplete knowledge, stakeholder disagreement, and interconnection with other problems such that any intervention in one area produces unanticipated consequences in others. Wicked problems cannot be addressed within disciplinary silos or through standardised procedures. They require the capacity to connect knowledge across boundaries and synthesise perspectives that may appear contradictory (Head & Alford, 2015).

AI systems are increasingly positioned as agents within knowledge networks: autonomous or semi-autonomous participants, as well as tools for individual use, that surface connections across distributed knowledge sources, translate between disciplinary frameworks, and identify patterns invisible to any single human perspective. Future healthcare practitioners will work with AI tools, and also within networks where AI agents actively participate in knowledge construction. The principle of networked knowledge building prepares students for this reality: developing the capacity to build, navigate, and critically evaluate knowledge networks in which both human and artificial intelligence contribute.

### AI integration as an organisational challenge

The implications extend beyond what individual educators do in their classrooms. The principles challenge assessment systems that measure artefact production rather than learning processes, curriculum structures that privilege content delivery over adaptive learning, and quality assurance frameworks that reward standardisation over emergence. Institutions that treat AI integration as a matter of updating individual teaching and assessment practices, while leaving these structures untouched, may struggle to realise the potential these principles describe. Integrating AI into HPE is an organisational challenge as much as a pedagogical one for individual teachers, with real costs and requirements for structural change.

### Tensions

The six principles are complementary but not frictionless. Critical consciousness requires scepticism toward AI outputs that could inhibit the exploratory openness that dialogic knowledge construction encourages. Adaptive expertise implies comfort with uncertainty, while metacognitive development requires structured reflection that may slow the adaptive process. Contextual authenticity demands engagement with messy practice realities that can be in tension with the scaffolding effective learning requires. These tensions belong to learning itself, which involves navigating between structure and freedom, critique and engagement, and individual development and collective practice. The principles are considerations to be balanced in context, requiring the same adaptive expertise and professional judgement they aim to develop in students.

## Limitations

This is a conceptual analysis. The principles are derived from theoretical convergences and have not been tested against observed effects on student learning, so they require empirical validation in diverse HPE contexts. The analysis was conducted by a single author without inter-rater reliability or formal peer debriefing. I have been transparent about the role of prior commitments, but independent validation would strengthen the claims made here. The four theoretical perspectives do not exhaust the relevant landscape. Other selections, including theories that foreground motivation, embodiment, or the affective and values-based dimensions of learning, would likely yield different insights. The six analytical dimensions are my own construction; while they are consistent with established categories in learning theory, they would benefit from independent validation. Additional dimensions like embodiment, affect, and the role of values and beliefs in shaping how learners engage with knowledge, would also extend the analysis in important directions. The HPE framing may also limit perceived transferability. The theoretical foundations are not healthcare-specific, and the principles likely apply to other forms of professional education where practitioners navigate complexity and uncertainty, but I don't make that broader claim here.

## Conclusion

Health professions education faces a challenge that AI has made visible but did not create: we have prioritised content transmission and artefact production over the conditions under which professional learning actually occurs. The six principles presented here — dialogic knowledge construction, critical consciousness, adaptive expertise, contextual authenticity, metacognitive development, and networked knowledge building — offer a theoretically grounded response. They describe what effective learning environments look like according to multiple established theoretical perspectives, and they provide guidance for making sure AI integration supports these conditions.

This framework is one map through a complex problem space, shaped by particular theoretical commitments and a particular analyst's professional experience. But it is grounded in how learning works rather than in what AI can currently do, and that grounding gives it a stability that capability-dependent frameworks cannot offer. Empirical validation is the necessary next step, through design-based research that uses the principles to structure AI-integrated learning activities, comparative studies examining whether principled integration produces different outcomes than ad hoc adoption, and longitudinal work tracking whether the conditions these principles describe translate into the adaptive expertise that complex healthcare practice demands. The pedagogical question remains constant even as AI evolves: are we creating the conditions under which students develop the reasoning, judgement, and adaptive capacity that healthcare demands? These principles are a step toward answering that question, and toward building educational environments worthy of it.

## References

Arora, P. (2010). Hope-in-the-wall? A digital promise for free learning. *British Journal of Educational Technology*, *41*(5), 689–702. https://doi.org/10.1111/j.1467-8535.2010.01078.x

Barnett, R. (2000). *Realising the university in an age of supercomplexity*. Society for Research into Higher Education & Open University Press.

Biesta, G. (2015). What is education for? On good education, teacher judgement, and educational professionalism. *European Journal of Education*, *50*(1), 75–87. https://doi.org/10.1111/ejed.12109

Biggs, J. (1993). From theory to practice: A cognitive systems approach. *Higher Education Research & Development*, *12*(1), 73–85. https://doi.org/10.1080/0729436930120107

Bjork, E. L., & Bjork, R. A. (2011). Making things hard on yourself, but in a good way: Creating desirable difficulties to enhance learning. In M. A. Gernsbacher et al. (Eds.), *Psychology and the real world* (pp. 56–64). Worth Publishers. https://bjorklab.psych.ucla.edu/wp-content/uploads/sites/13/2016/04/EBjork_RBjork_2011.pdf

Bleakley, A. (2010). Blunting Occam's razor: Aligning medical education with studies of complexity. *Journal of Evaluation in Clinical Practice*, *16*(4), 849–855. https://doi.org/10.1111/j.1365-2753.2010.01498.x

Chee, H., Ahn, S., & Lee, J. (2025). A competency framework for AI literacy: Variations by different learner groups and an implied learning pathway. *British Journal of Educational Technology*, *56*(5), 2146–2182. https://doi.org/10.1111/bjet.13556

Chi, M. T. H. (2009). Active-constructive-interactive: A conceptual framework for differentiating learning activities. *Topics in Cognitive Science*, *1*(1), 73–105. https://doi.org/10.1111/j.1756-8765.2008.01005.x

Dall'Alba, G., & Barnacle, R. (2007). An ontological turn for higher education. *Studies in Higher Education*, *32*(6), 679–691. https://doi.org/10.1080/03075070701685130

Dawson, P., Bearman, M., Dollinger, M., & Boud, D. (2024). Validity matters more than cheating. *Assessment & Evaluation in Higher Education*, *49*(7), 1005–1016. https://doi.org/10.1080/02602938.2024.2386662

Deci, E. L., & Ryan, R. M. (2000). The "what" and "why" of goal pursuits: Human needs and the self-determination of behavior. *Psychological Inquiry*, *11*(4), 227–268. https://doi.org/10.1207/S15327965PLI1104_01

Digital Education Council. (2024). *Digital Education Council global AI student survey 2024: AI or not AI, what students want*. https://www.digitaleducationcouncil.com/post/digital-education-council-global-ai-student-survey-2024

Engeström, Y. (2001). Expansive learning at work: Toward an activity theoretical reconceptualization. *Journal of Education and Work*, *14*(1), 133–156. https://doi.org/10.1080/13639080020028747

Fan, Y., Tang, L., Le, H., et al. (2024). Beware of metacognitive laziness: Effects of generative artificial intelligence on learning motivation, processes, and performance. *British Journal of Educational Technology*, *56*(2), 489–530. https://doi.org/10.1111/bjet.13544

Fraser, S. W., & Greenhalgh, T. (2001). Coping with complexity: Educating for capability. *BMJ*, *323*(7316), 799–803. https://doi.org/10.1136/bmj.323.7316.799

Freeman, J. (2025). *Student generative AI survey 2025* (HEPI Policy Note 61). Higher Education Policy Institute. https://www.hepi.ac.uk/reports/student-generative-ai-survey-2025/

Freire, P. (2000). *Pedagogy of the oppressed* (30th anniversary ed.). Continuum.

Frenk, J., Chen, L., Bhutta, Z. A., et al. (2010). Health professionals for a new century: Transforming education to strengthen health systems in an interdependent world. *The Lancet*, *376*(9756), 1923–1958. https://doi.org/10.1016/S0140-6736(10)61854-5

Glaser, B. G., & Strauss, A. L. (1967). *The discovery of grounded theory: Strategies for qualitative research*. Aldine.

Goldie, J. G. S. (2016). Connectivism: A knowledge learning theory for the digital age? *Medical Teacher*, *38*(10), 1064–1069. https://doi.org/10.3109/0142159X.2016.1173661

Head, B. W., & Alford, J. (2015). Wicked problems: Implications for public policy and management. *Administration & Society*, *47*(6), 711–739. https://doi.org/10.1177/0095399713481601

hooks, b. (1994). *Teaching to transgress: Education as the practice of freedom*. Routledge.

Illeris, K. (2003). Towards a contemporary and comprehensive theory of learning. *International Journal of Lifelong Education*, *22*(4), 396–406. https://doi.org/10.1080/02601370304837

Irby, D. M., Cooke, M., & O'Brien, B. C. (2010). Calls for reform of medical education by the Carnegie Foundation for the Advancement of Teaching: 1910 and 2010. *Academic Medicine*, *85*(2), 220–227. https://doi.org/10.1097/ACM.0b013e3181c88449

Jabareen, Y. (2009). Building a conceptual framework: Philosophy, definitions, and procedure. *International Journal of Qualitative Methods*, *8*(4), 49–62. https://doi.org/10.1177/160940690900800406

Jonassen, D. H. (1995). Computers as cognitive tools: Learning with technology, not from technology. *Journal of Computing in Higher Education*, *6*(2), 40–73. https://doi.org/10.1007/BF02941038

Mishra, P., & Koehler, M. J. (2006). Technological pedagogical content knowledge: A framework for teacher knowledge. *Teachers College Record*, *108*(6), 1017–1054. https://doi.org/10.1111/j.1467-9620.2006.00684.x

Mitra, S. (2003). Minimally invasive education: A progress report on the "hole-in-the-wall" experiments. *British Journal of Educational Technology*, *34*(3), 367–371. https://doi.org/10.1111/1467-8535.00333

Morrow, W. (2009). *Bounds of democracy: Epistemological access in higher education*. HSRC Press.

Ng, D. T. K., Leung, J. K. L., Chu, S. K. W., & Qiao, M. S. (2021). Conceptualizing AI literacy: An exploratory review. *Computers and Education: Artificial Intelligence*, *2*, 100041. https://doi.org/10.1016/j.caeai.2021.100041

Plsek, P. E., & Greenhalgh, T. (2001). The challenge of complexity in health care. *BMJ*, *323*(7313), 625–628. https://doi.org/10.1136/bmj.323.7313.625

Rittel, H. W. J., & Webber, M. M. (1973). Dilemmas in a general theory of planning. *Policy Sciences*, *4*(2), 155–169. https://doi.org/10.1007/BF01405730

Siemens, G. (2005). Connectivism: A learning theory for the digital age. *International Journal of Instructional Technology and Distance Learning*, *2*(1), 3–10. http://www.itdl.org/Journal/Jan_05/article01.htm

Stahl, G., Koschmann, T., & Suthers, D. (2006). Computer-supported collaborative learning: An historical perspective. In R. K. Sawyer (Ed.), *The Cambridge handbook of the learning sciences* (pp. 409–426). Cambridge University Press.

Suthers, D., & Rosen, D. (2011). A unified framework for multi-level analysis of distributed learning. In *Proceedings of the 1st International Conference on Learning Analytics and Knowledge* (pp. 64–74). ACM. https://doi.org/10.1145/2090116.2090124

UNESCO. (2024a). *AI competency framework for students*. https://www.unesco.org/en/articles/ai-competency-framework-students

UNESCO. (2024b). *AI competency framework for teachers*. https://www.unesco.org/en/articles/ai-competency-framework-teachers

Van der Vleuten, C. P. M. (2016). Revisiting 'Assessing professional competence: From methods to programmes'. *Medical Education*, *50*(9), 885–888. https://doi.org/10.1111/medu.12632

Vygotsky, L. S. (1978). *Mind in society: The development of higher psychological processes*. Harvard University Press. https://doi.org/10.2307/j.ctvjf9vz4

Warschauer, M. (2004). *Technology and social inclusion: Rethinking the digital divide*. MIT Press. https://doi.org/10.7551/mitpress/6699.001.0001

Wegerif, R., & Casebourne, I. (2025). A dialogic theoretical foundation for integrating generative AI into pedagogical design. *British Journal of Educational Technology*, *57*(3), 639–654. https://doi.org/10.1111/bjet.70026

Wong, G., Greenhalgh, T., Westhorp, G., Buckingham, J., & Pawson, R. (2013). RAMESES publication standards: Meta-narrative reviews. *BMC Medicine*, *11*, 20. https://doi.org/10.1186/1741-7015-11-20

Xu, X., Qiao, L., Cheng, N., Liu, H., & Zhao, W. (2025). Enhancing self-regulated learning and learning experience in generative AI environments: The critical role of metacognitive support. *British Journal of Educational Technology*, *56*(5), 1842–1863. https://doi.org/10.1111/bjet.13599
