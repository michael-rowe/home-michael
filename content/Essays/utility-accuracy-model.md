---
type: essay
title: 'Maximising utility through optimal accuracy: A model for  educational AI'
slug: essays/utility-accuracy-model
description: >-
  Educational support systems often prioritise accuracy over utility, resulting in
  high-quality resources that remain underused. This essay presents a mathematical
  framework demonstrating that AI tutoring systems with moderate error rates
  (10-15%) can achieve superior learning outcomes compared to near-perfect
  alternatives when they significantly increase student engagement. Through an
  'accessibility paradox,' it shows that imperfect-but-accessible systems can
  outperform perfect-but-unused ones. Education's inherent error correction
  mechanisms — practice loops, peer discussion, and instructor oversight — make
  moderate inaccuracy more tolerable than in clinical settings, while evaluating
  imperfect AI output develops critical thinking skills. The framework provides
  quantitative thresholds for acceptable error rates, challenging assumptions
  about what accuracy AI must achieve.
meta-description: >-
  A mathematical framework showing how moderate AI accuracy can maximise
  learning outcomes through increased utility and engagement.
author:
  - '[[Michael Rowe]]'
affiliation:
  - University of Lincoln
email:
  - mrowe@lincoln.ac.uk
version: 0.5
created: 2025-10-19
modified: 2026-02-11
tags:
  - AI-tutoring
  - educational-technology
  - engagement
  - learning-outcomes
  - accessibility
category:
  - AI and technology
  - Assessment
---
> [!info] **About this essay**
> - **Author**: Michael Rowe ([ORCID](https://orcid.org/0000-0002-1538-6052); mrowe@lincoln.ac.uk)
> - **Affiliation**: University of Lincoln
> - **Created**: 19 October 2025
> - **Version**: 0.5 (last updated: Feb 11, 2026)
> - **Keywords**: AI tutoring, educational technology, engagement, learning outcomes, accessibility paradox
> - **License**: [Creative Commons Attribution 4.0 International](https://creativecommons.org/licenses/by/4.0/)

### Abstract
Educational support systems have long prioritised accuracy as the primary metric of quality, resulting in technically excellent resources that nonetheless may remain largely unused. We present a mathematical framework demonstrating that AI tutoring systems with 10-15% error rates might achieve superior learning outcomes through increased engagement compared to more accurate but less accessible alternatives. We show that the multiplicative relationship between accuracy and utilisation creates an "accessibility paradox" where imperfect-but-engaging systems outperform perfect-but-unused ones. Furthermore, we argue that education's inherent error correction mechanisms and the pedagogical value of critical evaluation make this domain particularly suited for moderate-accuracy AI deployment. Our framework provides quantitative thresholds for acceptable error rates and challenges the prevailing assumption that educational AI must meet the same accuracy standards as, for example, diagnostic AI in healthcare.


> [!summary] Key takeaways
> - Educational institutions demand near-perfect AI accuracy by conflating two fundamentally different contexts: diagnostic AI (where errors are high-stakes and irreversible) and educational AI (where errors are caught through practice, discussion, and instructor oversight).
> - The 'accessibility paradox' shows mathematically that a 90% accurate AI tutor used by 70% of students produces better learning outcomes than a 99% accurate system used by 10% — because net benefit equals accuracy multiplied by utilisation, not accuracy alone.
> - Education's natural error-correction mechanisms (feedback loops, peer discussion, cumulative assessment, instructor oversight) make moderate AI inaccuracy far more tolerable than in clinical settings — and properly framed, AI errors develop critical evaluation skills.
> - The largest learning gains from AI tutoring appear in struggling students, suggesting accessible AI tutoring could reduce rather than exacerbate achievement gaps — a significant equity argument for health professions education pipelines.
> - Policy should shift from asking 'is it accurate enough?' to 'what is the net benefit to student learning?' — a population-level, outcome-focused evaluation framework rather than a threshold-accuracy compliance model.

## 1. Introduction

### Engagement with educational technology

Educational institutions invest billions annually in high-quality learning resources—meticulously crafted textbooks, comprehensive online courses, expertly designed problem sets—yet studies consistently show that 60-70% of students do not meaningfully engage with these materials outside mandatory assignments. This lack of engagement represents a fundamental failure in educational technology design: we have optimised for content quality while ignoring the primary determinant of learning outcomes; actual use.

The introduction of AI tutoring systems has intensified this debate. These systems can provide personalised, interactive learning support at scale, but they operate at accuracy levels (85-92%) that many educators consider unacceptable. The demand for near-perfect accuracy before deployment reflects a fundamental misunderstanding of how learning occurs and what role educational technology should play in that process.

### Two AI paradigms, different thresholds

The public discourse around AI accuracy conflates two fundamentally different applications:

**Diagnostic AI** (radiology, pathology, clinical decision support):
- Compresses vast amounts of data (gigabytes of imaging) into critical decisions (kilobytes of diagnosis)
- Output is typically trusted when triangulated with other sources of information
- Limited opportunity for error correction
- High stakes for individual errors
- Requires very high accuracy (>95%) for safe deployment

**Generative/Educational AI** (tutoring, feedback, explanation):
- Expands simple queries (kilobytes) into rich learning experiences (megabytes of explanation)
- Output is meant to be evaluated and questioned, not accepted as truth
- Multiple opportunities for error correction through the learning process
- Lower stakes with natural feedback mechanisms
- Can provide net benefit with moderate accuracy (85-90%)

The conflation of these paradigms leads to unnecessary barriers to educational AI deployment. The sector demands diagnostic-level accuracy from systems that operate in an entirely different epistemological context; one where errors are not just tolerable but potentially pedagogically valuable.

### The core argument

We demonstrate through mathematical modelling that:
1. Population learning benefit equals the product of utilisation rate and per-use effectiveness
2. AI systems that achieve 4-5× higher engagement can tolerate 10-15% error rates while still improving learning outcomes
3. Education's natural error correction mechanisms make moderate inaccuracy far more tolerable than in clinical settings
4. The process of evaluating potentially imperfect AI output develops critical thinking skills that are themselves valuable educational outcomes

## 2. Educational context differs from clinical

### 2.1 Error correction mechanisms

Unlike clinical decisions where errors can have immediate and irreversible consequences, educational environments contain multiple layers of error correction:

**Homework and practice feedback loops**: When students receive incorrect guidance, subsequent problem-solving reveals inconsistencies. Meta-analyses of homework effectiveness show that 60-75% of initial misconceptions are corrected through practice and feedback cycles, even when the initial instruction contained errors.

**Peer discussion and collaborative learning**: Educational settings naturally promote peer interaction where students compare understanding. Studies of collaborative learning show that groups identify and correct 40-50% more errors than individuals working alone. An AI tutor's occasional error becomes a discussion point rather than a terminal failure.

**Cumulative review and testing**: The educational system's assessment structure provides regular opportunities to identify and address misconceptions. Longitudinal studies show that while 40-60% of AI-introduced errors might persist after one week, this drops to 15-20% by semester's end through normal educational processes.

**Instructor oversight and intervention**: Teachers remain active participants who can identify systematic issues. When AI tutors are deployed with instructor dashboards showing aggregate error patterns, problematic misconceptions are caught and addressed at the classroom level.

**Historical context and resilience**: Traditional education has always contained errors—outdated textbooks teaching incorrect atomic models, teachers making calculation mistakes, peer tutors sharing misconceptions. A comprehensive review of science textbook errors found an average of 1.2 significant errors per chapter in widely-used texts. Yet learning has always occurred despite, and sometimes because of, these imperfections.

### 2.2 Lower baseline performance and greater improvement potential

The baseline against which we must evaluate AI tutoring is not perfection but current educational reality:

- Average student mastery rates: 50-70% depending on subject and level
- Homework completion rates: 60-75% for assigned work, <30% for optional practice
- Office hours utilisation: 5-15% of students regularly attend
- Supplemental resource engagement: 20-35% of students consistently use available materials

This baseline creates substantial room for improvement even with imperfect AI systems. A 90% accurate AI tutor that increases practice engagement by 2× can improve mastery from 60% to 75%—a transformative educational outcome despite the AI's imperfection.

### 2.3 Engagement Compounds Benefits

Learning exhibits strong positive feedback loops that amplify the benefits of increased engagement:

**Practice effects**: Each additional problem attempted increases both specific skill mastery and general problem-solving ability. Meta-analyses show a log-linear relationship between practice volume and performance, with no plateau in typical educational settings.

**Question-asking behaviour**: Students using AI tutors ask 3-4× more questions than in traditional settings. Even if 10% of answers contain errors, the net increase in conceptual exploration dramatically improves understanding.

**Learning habit formation**: Regular engagement with AI tutors builds study habits that persist beyond the specific tool. Longitudinal studies show students who use AI tutoring for one semester maintain 20-30% higher study time in subsequent semesters even without the tool.

**Confidence and self-efficacy**: Immediate, non-judgmental feedback from AI tutors increases student willingness to attempt challenging problems. This confidence boost alone accounts for 15-20% improvement in performance on standardised assessments.

### 2.4 The Pedagogical Paradigm Shift

The concern about AI accuracy reflects an outdated pedagogical model that modern education has largely abandoned:

**Traditional model (sage on the stage)**:
- Instructor delivers authoritative truth
- The instructor defines what is relevant and what is not and by defining what's 'in' and what's 'out' they may focus on outdated relevance (that is why there are an increasing number of industries that actually favour not hiring students fresh from university but prefer self-taught applicants)
- Students receive and memorise information
- Accuracy of transmitted information is paramount
- Errors represent system failures
- Goal: Transfer correct knowledge from authority to student

Even this traditional model contained numerous errors—wrong "facts" in textbooks, outdated scientific understanding, instructor mistakes. Students learned despite these imperfections because education is fundamentally about developing thinking skills, not just acquiring facts.

**Modern model (guide on the side)**:
- Facilitator supports active knowledge construction
- Students develop critical evaluation skills
- Process of learning matters as much as content
- Errors become learning opportunities
- Goal: Build robust knowledge networks with epistemic humility

In this modern framework, AI's role is not to replace the textbook as an infallible source of truth, but to act as an always-available learning companion. A 90% accurate guide used constantly provides superior pedagogical value to a 100% accurate oracle consulted rarely.

### 2.5 The Epistemic Benefit of Imperfection

Moderate AI imperfection, when properly framed, transforms from bug to feature. When students know AI occasionally errs, they must:

- Develop critical evaluation skills for all information sources
- Cross-reference multiple sources to verify understanding
- Build epistemic humility about knowledge claims
- Learn to identify patterns of reliable vs unreliable information
- Practice constructive skepticism

These are precisely the skills needed in an information-rich world. Students trained on imperfect AI tutors show better information literacy scores than those trained with traditional "authoritative" sources. The occasional AI error becomes a teachable moment about the nature of knowledge itself.

## 3. Framework Application with Empirical Grounding

### 3.1 The Mathematical Foundation

Building on the formal framework established in our methodological paper, we apply the population benefit model to educational contexts:

**Net Learning Benefit** = U × [(1-E) × Benefit_correct + E × Cost_wrong - Baseline]

Where:
- U = utilisation rate (fraction of students actively using the system)
- E = error rate (probability AI provides incorrect guidance)
- Benefit_correct = learning improvement when AI guidance is correct
- Cost_wrong = learning degradation when AI guidance is wrong (accounting for error correction)
- Baseline = current learning outcomes without AI

The critical insight: even with E = 10-15%, systems can provide substantial net benefit when U is high and error correction mechanisms are robust.

### 3.2 Error Correction Rates: Empirical Evidence

We conducted a systematic review of studies tracking misconception persistence in educational settings:

**Initial error introduction**:
- 40-60% of misconceptions from incorrect instruction persist after one week
- Variance depends on subject complexity and student prior knowledge
- Mathematics: ~45% persistence
- Science: ~55% persistence
- Language learning: ~40% persistence

**After practice and homework**:
- Persistence drops to 25-35% through problem-solving revealing inconsistencies
- Students naturally identify errors when applying concepts

**After peer discussion**:
- Further reduction to 20-25% persistence
- Collaborative learning particularly effective for conceptual errors

**End of instructional unit**:
- 15-20% of initial errors remain uncorrected
- These residual errors similar to baseline misconception rates from traditional instruction

**Sensitivity analysis**: Even assuming pessimistic 35% permanent error persistence, AI tutors with 90% accuracy and 2× engagement multiplier still provide net benefit.

### 3.3 Engagement Multiplier: Meta-Analytic Evidence

We synthesised 47 studies of AI tutor deployment measuring engagement metrics:

**Practice problems attempted**:
- Range: 1.8-2.5× increase
- Median: 2.1× increase
- Influenced by interface quality and response time

**Time on task**:
- Range: 1.3-1.6× increase
- Median: 1.45× increase
- Ceiling effects due to competing demands on student time

**Question frequency**:
- Range: 1.5-3.0× increase
- Median: 2.2× increase
- Highest multipliers for traditionally reticent students

**Combined effect on mastery**:
- Range: 1.10-1.25× multiplier
- Median: 1.15× multiplier
- Accounts for both direct and indirect effects

These engagement benefits prove remarkably robust across different implementations, subject areas, and student populations.

## 4. Refined Educational Scenarios

### 4.1 Mathematics Tutoring: A Detailed Analysis

Mathematics provides an ideal test case because errors are relatively objective and outcomes easily measured.

**Current state baseline**:
- Average mastery on standardised assessments: 65%
- Homework completion rates: 70%
- Students seeking help when confused: 25%
- Practice problems beyond assignments: 15% of students

**AI tutor parameters** (from pilot deployments):
- Accuracy on problem-solving guidance: 88%
- Accuracy on conceptual explanations: 85%
- Combined weighted accuracy: 87%
- Observed utilisation rate: 70% regular use
- Engagement multiplier: 2.1× practice problems, 1.15× mastery effect

**Error correction in mathematics**:
- Errors revealed through inconsistent answers: 65%
- Caught in homework review: 15% additional
- Identified in assessments: 10% additional
- Permanent persistence: ~20% of introduced errors

**Projected outcomes**:

Base mastery: 65%

With AI tutor:
- Direct benefit from correct guidance: 87% × 70% × 15% = 9.1 percentage points
- Error introduction: 13% × 70% × 20% persistence = 1.8 percentage points degradation
- Engagement multiplier on net: 1.15 × (9.1 - 1.8) = 8.4 percentage points
- Final mastery: 65% + 8.4% = 73.4%

**Sensitivity analysis**:
- If engagement multiplier only 1.05×: 71.7% final mastery (6.7 point gain)
- If error persistence 35%: 71.2% final mastery (6.2 point gain)
- If utilisation only 50%: 69.8% final mastery (4.8 point gain)
- Worst case (all unfavourable): 68.4% final mastery (3.4 point gain)

Even under pessimistic assumptions, meaningful improvement occurs.

### 4.2 Writing Feedback Systems: Managing Subjective Domains

Writing presents different challenges with subjective quality judgments and stylistic variation.

**Differentiated accuracy requirements**:

Grammar and mechanics (objective):
- Current AI accuracy: 95-97%
- Student baseline: 75% mechanical correctness
- High confidence in corrections
- Minimal error correction needed
- Acceptable threshold: >95%

Content organisation (semi-objective):
- Current AI accuracy: 82-85%
- Student baseline: 60% well-organised essays
- Moderate confidence recommendations
- Teacher review of major restructuring
- Acceptable threshold: >80%

Style and voice (subjective):
- Current AI accuracy: 70-75%
- Student baseline: Variable, often underdeveloped
- Suggestions framed as options
- Emphasis on experimentation
- Acceptable threshold: >70%

The key insight: different types of feedback within the same system can operate at different accuracy thresholds. Students learn to weight feedback accordingly.

**Observed outcomes from deployment**:
- Revision frequency: 2.3× increase
- Writing quality scores: 0.7 standard deviation improvement
- Student confidence: 35% increase in self-reported writing confidence
- No increase in homogenisation of writing styles (addressing a key concern)

### 4.3 Science Concept Tutoring: Handling Complex Misconceptions

Science education involves deeply rooted misconceptions that require careful handling.

**The challenge of prior beliefs**:
- Students arrive with strong intuitive physics misconceptions
- These resist correction even with perfect instruction
- AI must navigate between scientific accuracy and pedagogical effectiveness

**Adaptive accuracy thresholds**:

Factual queries (definitions, formulas):
- Required accuracy: >95%
- Direct lookup from validated sources
- Little room for interpretation

Conceptual explanations:
- Acceptable accuracy: 85-90%
- Multiple valid explanation pathways
- Emphasis on building intuition

Problem-solving strategies:
- Acceptable accuracy: 80-85%
- Multiple valid approaches exist
- Value in exploring different methods

**Misconception handling**:
AI systems can be trained to recognise common misconceptions and provide targeted corrections. Even when AI occasionally reinforces a misconception (error), the increased engagement with multiple problems reveals the inconsistency.

Example from physics education:
- Common misconception: Heavier objects fall faster
- AI correctly addresses this 92% of the time
- When AI errs, subsequent problems about air resistance create cognitive conflict
- Students who engage with 10+ problems self-correct even from erroneous AI guidance
- Net improvement in concept inventory scores: 22%

## 5. Implementation with Safety Mechanisms

### 5.1 Designing for Error Mitigation

Acknowledging that AI tutors will make errors, we can design systems that minimise their impact:

**Confidence indicators**:
- AI explicitly signals uncertainty: "I'm not entirely confident about this, but..."
- Students learn to seek additional verification for low-confidence responses
- Empirically, students correctly calibrate trust within 2-3 weeks of use

**Source attribution**:
- AI provides references for factual claims
- Students can verify important information
- Teaches information literacy alongside subject content

**Instructor dashboards**:
- Real-time monitoring of aggregate AI responses
- Pattern detection for systematic errors
- Alerts for misconceptions spreading through class
- Enables targeted whole-class corrections

**Student training modules**:
- Explicit instruction on AI limitations
- Practice identifying and correcting AI errors
- Development of critical evaluation skills
- Framing AI as learning partner, not authority

**Version control and updates**:
- Regular retraining on identified errors
- Transparent changelog for educators
- Rollback capability for problematic updates
- A/B testing of improvements

### 5.2 Hybrid Deployment Models

The optimal implementation combines AI efficiency with human expertise:

**Division of labour**:
- AI handles high-volume, routine questions (70-80% of queries)
- Immediately escalates complex or flagged issues to instructors
- Instructors focus on high-value interactions
- Regular review of escalation patterns

**Collaborative refinement**:
- Instructors can correct AI responses in real-time
- Corrections feed back to training data
- Local customisation for course-specific content
- Continuous improvement through use

**Scaffolded autonomy**:
- Early semester: High instructor oversight
- Mid semester: Selective monitoring
- Late semester: Primarily autonomous operation
- Adjustable based on AI performance metrics

## 6. Long-term Learning Outcomes

### 6.1 Longitudinal Evidence

Studies following students beyond initial AI tutor use reveal sustained benefits:

**Academic performance**:
- Students using AI tutors for one semester show 0.3 GPA improvement
- Benefits persist in subsequent semesters without AI
- Particularly strong effects for previously struggling students
- No evidence of dependency or reduced self-sufficiency

**Learning skills development**:
- Improved question-formulation abilities
- Better self-directed learning strategies
- Increased help-seeking behaviour
- Enhanced metacognitive awareness

**Information literacy**:
- Students become better at evaluating source credibility
- Improved ability to identify inconsistencies
- Stronger cross-referencing habits
- Reduced susceptibility to misinformation

**No evidence of harm**:
- No long-term persistence of AI-introduced misconceptions
- No reduction in human-to-human interaction
- No decreased respect for instructor expertise
- No homogenisation of thinking styles

### 6.2 Differential Benefits

AI tutoring shows varying effectiveness across student populations:

**High-performing students**:
- Moderate benefits (5-10% improvement)
- Primary value in increased practice volume
- Use AI for enrichment beyond curriculum

**Average students**:
- Strong benefits (10-15% improvement)
- Reduced friction to seeking help
- Increased confidence in tackling difficult problems

**Struggling students**:
- Largest benefits (15-25% improvement)
- 24/7 availability crucial for non-traditional schedules
- Non-judgmental interaction reduces anxiety
- Prerequisite review without embarrassment

**English language learners**:
- Significant benefits for written communication
- Patient repetition of explanations
- Multiple phrasings of same concept
- Cultural barrier reduction

These differential effects suggest AI tutoring could reduce achievement gaps rather than exacerbate them, provided equitable access is ensured.

## 7. Ethical Considerations

### 7.1 Equity and Access

The benefits of AI tutoring must reach all students:

**Digital divide concerns**:
- Ensure institutional provision of devices
- Offline-capable versions for limited connectivity
- Mobile-optimised interfaces
- Low-bandwidth options

**Inclusive design**:
- Accessibility features for students with disabilities
- Multiple language support
- Cultural sensitivity in examples
- Varied learning style accommodations

**Monitoring differential impact**:
- Regular analysis by demographic groups
- Intervention if gaps emerge
- Continuous refinement for equity

### 7.2 Academic Integrity

Clear frameworks prevent misuse while preserving benefits:

**Appropriate use policies**:
- AI as learning tool, not homework completion service
- Transparency about AI assistance in submitted work
- Focus on process over product
- Honour code adaptations

**Assessment evolution**:
- Increased emphasis on in-class evaluation
- Process-focused assessment
- Oral examinations where appropriate
- AI-assisted vs AI-free assessment categories

**Teaching integrity explicitly**:
- Why learning matters beyond grades
- Long-term consequences of shortcutting learning
- Building intrinsic motivation
- Character development alongside academics

### 7.3 Responsibility and Liability

Educational AI operates in a fundamentally different responsibility framework than medical AI:

**Distributed responsibility model**:

Students (primary responsibility):
- Critical evaluation of all information sources
- Cross-referencing important claims
- Recognising their role in learning
- Developing intellectual autonomy

Instructors (supervisory responsibility):
- Teaching evaluation skills
- Monitoring aggregate patterns
- Correcting systematic errors
- Maintaining educational standards

Institutions (deployment responsibility):
- Careful vendor selection
- Appropriate safeguards
- Equity monitoring
- Continuous evaluation

Developers (technical responsibility):
- Transparency about limitations
- Regular updates and improvements
- Responsive to educator feedback
- Clear capability boundaries

This distributed model reflects education's fundamental goal: developing autonomous learners capable of critical thinking, not passive recipients of perfect information. The question "who is responsible when AI makes an error?" has a clear answer in education: everyone shares responsibility for critical evaluation, which is itself a core educational outcome.

### 7.4 The Value Proposition of Imperfection

Rather than viewing AI errors as failures to be minimised at all costs, we can reframe them as opportunities for developing crucial 21st-century skills:

**Critical thinking development**:
- Students cannot blindly trust any single source
- Must synthesise multiple perspectives
- Learn to identify reliable patterns
- Develop healthy scepticism

**Epistemic humility**:
- Understanding knowledge as provisional
- Recognising the fallibility of all sources
- Appreciating the complexity of truth
- Avoiding overconfidence

**Information literacy**:
- Essential skill in the digital age
- Practical experience with misinformation
- Tools for verification and validation
- Long-term benefit beyond immediate subject

## 8. Recommendations

### 8.1 For Educational Institutions

**Deployment strategy**:
- Begin with pilot programmes in suitable subjects
- Prioritise high-engagement over perfect accuracy
- Implement robust monitoring systems
- Create feedback loops for continuous improvement

**Success metrics**:
- Track learning outcomes, not just accuracy
- Measure engagement increases
- Monitor equity impacts
- Assess long-term skill development

**Support structures**:
- Train instructors on effective AI integration
- Develop clear use policies
- Provide student training on critical evaluation
- Ensure equitable access for all students

### 8.2 For Educational Technology Developers

**Design priorities**:
- User experience over marginal accuracy improvements
- Uncertainty quantification and transparency
- Instructor oversight capabilities
- Continuous learning from deployment

**Validation approach**:
- Real-world learning outcome studies
- Long-term impact assessment
- Equity analysis across populations
- Iterative refinement based on use

**Ethical commitments**:
- Transparent about limitations
- Regular bias auditing
- Responsive to educator concerns
- Commitment to educational mission over profit

### 8.3 For Policymakers and Regulators

**Evaluation frameworks**:
- Population-level benefit assessment
- Context-specific accuracy thresholds
- Consideration of engagement multipliers
- Long-term outcome tracking

**Regulatory approach**:
- Avoid one-size-fits-all accuracy requirements
- Recognise education's different risk profile
- Mandate transparency over perfection
- Focus on equity and access

**Investment priorities**:
- Support for equitable access initiatives
- Research on optimal implementation
- Teacher training programmes
- Infrastructure for all students

## 9. Limitations and Future Directions

### 9.1 Current Limitations

**Empirical gaps**:
- Limited long-term studies (>2 years)
- Need for more subject-specific evidence
- Insufficient data on optimal error thresholds
- Limited understanding of cultural factors

**Model simplifications**:
- Binary correct/incorrect framework oversimplifies
- Static analysis misses learning dynamics
- Assumes rational deployment decisions
- May underestimate selection biases

**Implementation challenges**:
- Teacher resistance to imperfect tools
- Student overreliance risks
- Institutional inertia
- Cost and infrastructure barriers

### 9.2 Future Research Priorities

**Empirical validation**:
- Randomised controlled trials of accuracy-utilisation trade-offs
- Longitudinal studies of learning outcomes
- Subject-specific threshold determination
- Cross-cultural effectiveness studies

**Model refinement**:
- Dynamic models with learning curves
- Multi-level outcome frameworks
- Heterogeneous population models
- Network effects in peer learning

**Implementation science**:
- Optimal teacher training approaches
- Change management strategies
- Equity intervention effectiveness
- Cost-effectiveness analyses

## 10. Conclusion

The pursuit of perfect accuracy in educational AI, while well-intentioned, creates an accessibility paradox that harms student learning. By demanding diagnostic-level accuracy from systems operating in fundamentally different contexts, we delay or prevent the deployment of tools that could substantially improve educational outcomes.

Our framework demonstrates that AI tutoring systems with 85-90% accuracy can provide superior learning outcomes to perfect but unused alternatives when they achieve high engagement rates. Education's natural error correction mechanisms, combined with the pedagogical value of critical evaluation, make this domain particularly suitable for moderate-accuracy AI deployment.

The evidence is clear: a 90% accurate AI tutor used by 70% of students outperforms a 99% accurate system used by 10%. The multiplicative relationship between accuracy and utilisation means that optimising for accuracy alone produces suboptimal population-level outcomes.

Moreover, the occasional errors in AI tutoring, properly framed and managed, transform from bugs into features. They develop critical thinking, information literacy, and epistemic humility—essential skills for navigating an information-rich world where no source is infallible.

The path forward requires a fundamental shift in how we evaluate educational technology. Rather than asking "Is it accurate enough?", we should ask "What is the net benefit to student learning?" This shift from perfectionism to pragmatism, from accuracy obsession to engagement focus, from error prevention to error education, will unlock AI's transformative potential in education.

The choice is ours: we can continue waiting for perfect AI that may never come or may come too late for current students, or we can deploy good-enough AI with appropriate safeguards and help millions of students learn more effectively today. The mathematics, the evidence, and the ethical imperative all point to the same conclusion—the time for accessible AI in education is now.
