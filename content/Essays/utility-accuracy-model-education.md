---
type: essay
title: "AI tutoring in health professions education: the accuracy-engagement paradox"
slug: essays/ai-tutoring-accuracy-health-professions
description: "A mathematical framework demonstrating that AI tutoring systems with 10–15% error rates can achieve superior learning outcomes through dramatically increased engagement compared to more accurate but largely unused alternatives. Drawing on evidence from health professions education, this essay shows that the multiplicative relationship between accuracy and utilisation creates an accessibility paradox: imperfect but engaging systems outperform perfect but unused ones. The argument carries three critical qualifications—errors vary in consequence and safety-critical content demands high accuracy; generative AI poses distinctive epistemic challenges that may undermine conventional error correction mechanisms; and engagement is necessary but not sufficient for learning, with superficial use patterns capable of nullifying predicted benefits entirely. A framework for calibrating accuracy requirements to context and consequence is proposed."
meta-description: AI tutoring in health professions education needn't be perfect to be effective. Explore the accuracy-engagement paradox and what it means for educators.
author:
  - "[[Michael Rowe]]"
affiliation:
  - University of Lincoln
email:
  - mrowe@lincoln.ac.uk
keyphrase: AI tutoring in health professions education
version: 0.1
created: 2026-02-12
modified: 2026-02-12
tags:
  - generative AI
  - AI integration
  - health professions education
  - educational technology
  - learning theory
  - AI literacy
  - large language models
  - clinical education
related:
  - "[[AI literacy]]"
  - "[[large language models]]"
  - "[[learning alignment]]"
category:
  - AI and technology
  - Pedagogy
draft: false
---
> [!info] **About this essay**
> - **Author**: Michael Rowe ([ORCID](https://orcid.org/0000-0002-1538-6052); mrowe@lincoln.ac.uk)
> - **Affiliation**: University of Lincoln
> - **Created**: Feb 12, 2026
> - **Version**: 0.1 (last updated: Feb 12, 2026)
> - **Keywords**: AI tutoring, health professions education, accuracy, student engagement, epistemic accountability
> - **License**: [Creative Commons Attribution 4.0 International](https://creativecommons.org/licenses/by/4.0/)

### Abstract

Educational support systems have long prioritised accuracy as the primary metric of quality, resulting in technically excellent resources that remain largely unused. We present a mathematical framework demonstrating that AI tutoring systems with 10-15% error rates can achieve superior learning outcomes through dramatically increased engagement compared to more accurate but less accessible alternatives—but only when implemented with appropriate pedagogical scaffolding and oversight. Drawing on evidence from health professions education, we show that the multiplicative relationship between accuracy and utilisation creates an "accessibility paradox" where imperfect-but-engaging systems outperform perfect-but-unused ones. However, we argue this outcome is not automatic, and identify three critical qualifications insufficiently addressed in current discourse: first, that errors vary in consequence and that rational verification behaviour depends on the interaction between probability of incorrectness and criticality of correctness; second, that generative AI poses distinctive epistemic challenges—lacking the accountability, traceability, and questionability of traditional information sources—that may reduce the effectiveness of education's conventional error correction mechanisms; and third, that engagement is a necessary but not sufficient condition for learning, with superficial use patterns capable of nullifying predicted benefits entirely. Our framework provides context-specific thresholds for acceptable error rates while honestly acknowledging what remains uncertain.

> [!summary] Key takeaways
> 1. **The accessibility paradox.** A 90% accurate AI tutor used by 70% of students outperforms a 99% accurate system used by 10%—population-level benefit is multiplicative, so utilisation matters as much as accuracy.
> 2. **Errors are not equal.** Safety-critical content in health professions education demands very high accuracy regardless of utilisation benefits; accuracy requirements should be calibrated to context and consequence, not held to a uniform standard.
> 3. **Generative AI undermines traditional error correction.** Unlike textbooks or teachers, AI systems lack epistemic accountability—they cannot be effectively questioned, traced to sources, or held to reputational account—requiring new verification strategies that education has not yet validated at scale.
> 4. **Engagement is necessary but not sufficient.** Superficial use patterns can nullify predicted benefits entirely; how students engage with AI matters as much as whether they do.
> 5. **Deployment without scaffolding risks harm.** Over-reliance, cognitive offloading, and equity paradoxes can all reverse predicted benefits; the accessibility paradox requires deliberate implementation, not passive rollout.

## 1. Introduction: the engagement crisis and the perfectionism response

A clinical decision support system achieves 92% accuracy in identifying drug interactions for patients with renal impairment. After six months, an audit reveals it has been consulted in only 18% of eligible cases. The primary reason cited by prescribers: concern about the 8% error rate. Meanwhile, the hospital's baseline rate of appropriate renal dose adjustment sits at 47-75%, meaning clinicians currently fail to make necessary modifications in a quarter to half of cases. The AI system, despite its imperfections, would have improved outcomes for thousands of patients had it been widely adopted.

This scenario has a direct parallel in education. Clinical decision support tools like BMJ Best Practice achieve high accuracy in their recommendations, yet utilisation studies consistently show that 60-70% of health professions students do not meaningfully engage with available clinical resources outside mandatory assignments. Up to 85% fail to complete assigned readings, and around 66% never attend optional office hours or skills sessions. We have optimised for content quality while ignoring the primary determinant of learning outcomes—actual use.

The introduction of AI tutoring systems has intensified this debate. These systems can provide personalised, interactive learning support at scale, but they operate at accuracy levels (85-92%) that many educators consider unacceptable. The demand for near-perfect accuracy before deployment reflects a widespread but problematic conflation of two fundamentally different AI paradigms.

**Diagnostic AI** (radiology, pathology, clinical decision support) compresses vast amounts of data into critical decisions. Output is typically trusted as definitive, with limited opportunity for error correction and high stakes for individual errors. This paradigm requires very high accuracy for safe deployment.

**Generative/educational AI** (tutoring, feedback, explanation) expands simple queries into rich learning experiences. Output is meant to be evaluated and questioned, not accepted as truth, with multiple opportunities for error correction through the learning process. These systems can provide net benefit with moderate accuracy (85-90%).

The conflation of these paradigms leads to unnecessary barriers to educational AI deployment—demanding diagnostic-level accuracy from systems that operate in an entirely different epistemological context.

Yet even this framing oversimplifies. Recent empirical evidence reveals stark variability in outcomes. In a randomised controlled trial, students using an AI physics tutor learned significantly more in less time than those in active-learning classes, with higher reported engagement and motivation. Conversely, Thoeni & Fryer (2025) deployed a generative AI tutor across multiple undergraduate classes for an entire semester and found no statistically significant differences in student engagement, self-efficacy, or academic achievement compared to control groups. AI tutors are pedagogical tools, not pedagogical solutions. The accessibility paradox resolves in students' favour only when implementation is thoughtful.

## 2. The accessibility paradox: a framework

The core mathematical insight is straightforward:

**Net Learning Benefit = U × [(1-E) × Benefit_correct + E × Cost_wrong − Baseline]**

Where U is utilisation rate (fraction of students actively using the system), E is error rate (probability AI provides incorrect guidance), Benefit_correct is learning improvement when AI guidance is correct, Cost_wrong is learning degradation when AI guidance is wrong (accounting for error correction), and Baseline represents current learning outcomes without AI.

Population-level benefit is multiplicative. A 95% accurate clinical resource used by 20% of students provides less learning benefit than an 88% accurate AI tutor used by 65% of students, provided the latter outperforms baseline student performance—which, at typical mastery rates of 50-70%, it does comfortably.

**Worked example—pharmacology tutoring**: Consider an AI tutor supporting pharmacology students with drug dosing calculations. Baseline mastery on standardised assessments sits at 62%. The AI achieves 87% accuracy on dosing guidance, with 68% of students using it regularly and a combined mastery multiplier of 1.15× from increased practice. After accounting for error introduction (13% error rate × 68% utilisation × 20% error persistence = 1.8 percentage points degradation) and engagement-amplified correct guidance, projected mastery reaches approximately 71%—a 9 percentage point gain. Even under pessimistic assumptions (engagement multiplier only 1.05×, error persistence 35%, utilisation 50%), improvement remains positive at roughly 4 points.

Three critical dependencies qualify these predictions. First, utilisation must be productive—students using AI as an "answer vending machine" may show high U but gain little benefit. Second, error correction is probabilistic, not guaranteed—some errors persist. Third, lower baseline performance increases both potential benefit and potential risk, since novice learners lack the domain knowledge needed to detect plausibility failures in AI output. Each of these dependencies warrants careful examination.

## 3. Why education tolerates imperfection

Unlike clinical decisions where errors can have immediate and irreversible consequences, educational environments contain multiple layers of error correction. When students receive incorrect guidance, subsequent problem-solving reveals inconsistencies. Meta-analyses of misconception persistence show that 40-60% of initial errors persist after one week, dropping to 25-35% after practice and homework, with further reduction to 15-20% by the end of an instructional unit. In one study, researchers deliberately seeded an AI tutor with known misconceptions; by term's end, students' performance on those concepts was no worse than peers who didn't use the AI. Peer discussion, assessment structures, and instructor oversight provide additional correction layers. Traditional education has always contained errors—a comprehensive review of science textbook errors found an average of 1.2 significant errors per chapter in widely-used texts—yet learning has always occurred despite these imperfections.

The baseline against which we evaluate AI tutoring is not perfection but current educational reality. An AI that is 90% accurate is more reliable than the average learner's current knowledge state (50-70% mastery). The tutor provides net benefit by correcting many misunderstandings students would otherwise retain, even if it occasionally introduces a new error. Evidence from productive failure interventions shows students with initially low achievement gain approximately 8 percentage points, while high-performing students gain approximately 3—suggesting AI tutoring could narrow achievement gaps, provided struggling students actually engage with the tool.

### 3.1 Error criticality: quality, not just quantity

However, treating errors as a binary phenomenon—correct or incorrect—obscures a crucial distinction. An AI pharmacology tutor that suggests a slightly suboptimal study approach for understanding receptor binding is categorically different from one that teaches an incorrect dosing calculation for gentamicin. The former wastes some time; the latter could eventually harm patients.

This distinction is particularly important in health professions education, where some stakeholders would rather produce a graduate with less but factually correct knowledge than one with broader knowledge that may contain harmful errors. This reflects the legitimate gatekeeping function of professional education—the responsibility to certify that graduates meet minimum safety standards before being licensed to practise.

The rational decision about whether to verify a piece of AI-generated information depends on two interacting factors: the estimated probability that the information is incorrect, and the potential consequences if an error goes undetected and is carried into practice. A low-probability error with catastrophic consequences (a wrong drug interaction) warrants verification just as much as a high-probability error with minor consequences (an awkward explanation of a physiological mechanism).

This means the binary error rate E in our mathematical model should be understood as a severity-weighted quantity. In practice, AI systems should maintain very high accuracy (>95%) for safety-critical content—drug dosages, contraindications, diagnostic criteria—even if moderate accuracy (85-90%) is acceptable for conceptual explanations and learning guidance. Students need training not just in error detection but in error triage: learning to identify which information is critical enough to warrant verification regardless of how confident the AI appears.

## 4. The epistemic accountability gap

The argument that educational error correction mechanisms make moderate AI inaccuracy tolerable rests on an implicit assumption: that AI-sourced errors behave like errors from traditional sources. They may not. Traditional information sources carry what might be called epistemic accountability—a set of features that support rational error-checking—and generative AI largely lacks these features.

**Direct questioning**: A student can ask a teacher to justify a claim, and the teacher must either defend it or retract it. Textbooks can be cross-referenced against their cited sources. Generative AI, by contrast, tends toward sycophancy when challenged—it will often agree with whatever the questioner suggests, making it unreliable as its own error-correction mechanism. A nursing student who tells an AI tutor "I think the maximum dose of paracetamol is 6g per day" may receive agreement rather than correction, precisely when correction matters most.

**Source traceability**: Textbook claims can be traced to their evidential origins. A lecturer's claims can be evaluated against the lecturer's expertise and the broader literature. [[large language models|LLM]]-generated information cannot be traced to original sources. Even when AI provides citations, studies find chatbots incorrectly cite their sources 60% of the time in certain situations—fabricating references that appear authoritative but do not exist.

**Reputational accountability**: If a textbook contains errors, the authors suffer reputational damage. If a teacher consistently provides wrong information, there are consequences. Generative AI suffers no reputational cost for errors—each interaction is independent, with no accumulated track record that users can evaluate.

People were already notoriously poor at evaluating internet sources where traceability and accountability are possible. With generative AI, where these mechanisms are largely absent, we should expect verification behaviour to be worse, not better—unless students are explicitly taught alternative strategies.

This means the error correction rates reported in Section 3 (measured in contexts where errors came from traditional sources) may not straightforwardly apply to AI-sourced errors. Students cannot rely on the same epistemic tools—questioning the source, tracing evidence, evaluating reputation—that have traditionally supported error detection. They need new [[AI literacy|verification practices]]: cross-referencing AI claims against established sources as a default habit, treating AI confidence signals as unreliable, using structured verification protocols for high-criticality information, and developing sufficient domain knowledge to detect plausibility failures independently.

The epistemic accountability gap does not invalidate the accessibility paradox, but it means the "errors as features" argument requires more careful qualification than is sometimes offered. The pedagogical benefits of encountering errors depend on students having the tools and training to detect and correct them. When the error source actively undermines traditional verification strategies, additional scaffolding is essential—and whether such scaffolding can be reliably provided at scale is an empirical question that has not been adequately studied.

## 5. Beyond instruction replacement: AI tutoring as learning companion

A limitation of much of the preceding analysis—including our own mathematical framework—is that it implicitly frames AI tutoring as a replacement for traditional instruction. Within this frame, the relevant question is whether AI delivers content more or less accurately than a textbook or lecturer, and whether increased engagement compensates for reduced accuracy.

This framing may undersell what AI can actually do for learning. The more transformative potential lies not in AI as a better delivery mechanism for existing instruction, but as a fundamentally different kind of learning relationship—one that is interactive, responsive, and available at the precise moment of cognitive need.

Consider the difference between a medical student reading BMJ Best Practice on the management of acute kidney injury (instruction delivery, regardless of medium) and that same student working through a patient case, getting stuck on fluid management, asking an AI "why isn't my approach working for this patient's electrolyte profile?", receiving a targeted explanation, trying again, and then asking "but what if the patient were also on ACE inhibitors?" (a learning conversation). The second interaction is qualitatively different from instruction—it is guided exploration, with the student driving the inquiry.

When stakeholders evaluate AI tutoring purely as an instructional channel, they naturally focus on accuracy. But when AI functions as a learning companion, the relevant questions shift: Does it help students formulate better clinical questions? Does it support productive struggle without resolving it prematurely? Does it build the student's capacity to reason independently about patient problems?

This reframing matters for how we interpret both engagement metrics and error tolerance. A companion's suggestion to "consider whether this patient's renal function affects your dosing choice" is less harmful when wrong than a textbook's assertion that "the correct dose is X"—because the suggestion invites evaluation while the assertion invites acceptance. This does not resolve all accuracy concerns, especially for high-criticality content. But it suggests that the debate about acceptable error rates is partly a debate about what role we want AI to play in education. If the role is instruction delivery, accuracy is paramount. If the role is learning companionship, the evaluation criteria should include the quality of the learning process, not just the accuracy of the content transmitted.

## 6. When the paradox fails

The accessibility paradox is not self-executing. Several conditions can prevent its predicted benefits from materialising, and intellectual honesty requires foregrounding these rather than treating them as footnotes.

**Engagement is not learning.** Our framework's predictions depend on the engagement multiplier—the observation that AI tutors increase practice problems attempted (median 2.1×), time on task (median 1.45×), and question frequency (median 2.2×) across meta-analyses of 47 studies. But engagement that involves reading AI explanations, nodding along, and moving to the next question may feel productive while producing shallow learning. The Thoeni & Fryer null results over a full semester may reflect exactly this pattern: students used the AI (engagement metrics up) but didn't use it in ways that produced deep learning (outcomes unchanged). Students are often genuinely unaware of what effective learning involves—many conflate recognition with recall, comprehension with competence—and without explicit instruction in effective learning strategies, they will naturally gravitate toward the path of least resistance, which AI makes very smooth indeed.

**The Hawthorne effect question.** Whether measured engagement gains reflect genuine, sustained behavioural change or partly novelty effects remains unresolved. Most positive studies measure outcomes over weeks to months. The framework's predictions are sensitive to this assumption, and longer-term studies across multiple cohorts are urgently needed.

**Over-reliance and cognitive offloading.** Gerlich (2025) found a high negative correlation (r = −0.68) between frequent AI tool use and critical thinking performance among young adults. Instructors observe students who, when accustomed to step-by-step AI guidance, feel lost when it is withdrawn during examinations. If health professions students routinely offload clinical reasoning to AI during training, they may lack the capacity for independent reasoning when they encounter patients without AI support.

**Equity paradoxes.** While struggling students show the largest potential gains, research on feedback usage finds 20% of students do not engage with feedback at all and 47% engage only superficially. High-performing students tend to exploit optional resources more than struggling students. Without mandatory integration and targeted outreach, AI tutors could widen rather than narrow achievement gaps—the very students most in need of support may be least likely to benefit.

## 7. The gatekeeping tension

Some stakeholders in health professions education hold a position worth engaging with seriously rather than dismissing: they would rather produce a graduate with less but factually correct knowledge than one with broader knowledge that may contain harmful errors. This reflects the legitimate dual function of professional education—developing autonomous learners while simultaneously certifying that graduates meet minimum safety standards for patient care.

The response to this concern is not to deny its validity but to reframe the comparison. The relevant question is not "would you prefer a graduate who knows 100 correct things or one who knows 110 things of which 11 are wrong?" Our framework makes the relevant question explicit: "would you prefer 30% of students who engaged deeply with perfect resources, or 70% of students who engaged deeply with 90%-accurate resources?" The gatekeeping concern implicitly assumes accuracy and utilisation are independent—that you can have both perfect accuracy and universal engagement. The accessibility paradox demonstrates that you often cannot.

Disengaged students do not avoid acquiring errors. They fill knowledge gaps with peer folklore, outdated information, personal intuition, and unvetted internet sources—all of which may carry higher error rates than a 90%-accurate, monitored AI tutor. The real comparison is between structured engagement with a moderately accurate system and unstructured non-engagement with unmonitored information sources.

That said, the gatekeeping concern imposes legitimate constraints. In health professions education, certain knowledge is non-negotiable—students must know correct drug dosages, must understand contraindications, must be able to identify emergencies. For this category of knowledge, AI systems should be held to very high accuracy standards (>95%), or such content should be delivered and assessed through traditional, verified channels. Our framework's contribution is not to argue that all accuracy standards should be relaxed, but that accuracy requirements should be calibrated to context and consequence.

There is also a genuine philosophical tension between the structure and standardisation that degree programmes require and the personalisation that AI-powered learning enables. A structured clinical curriculum says "here is what you need to know, in this order, to these standards." An AI learning companion says "let's explore whatever clinical question you have, in whatever order works for you." Both have value, but combining them is not straightforward—especially when [[programmatic assessment|professional assessments]] must determine whether students have met specific competency thresholds. Institutions that dismiss teacher concerns about this tension as mere resistance to change risk either implementation failure or a genuine loss of educational quality.

## 8. Limitations and future directions

Several important limitations constrain the framework's current application. The binary correct/incorrect treatment of errors, while mathematically tractable, oversimplifies a reality in which errors vary enormously in consequence—a limitation our discussion of error criticality addresses qualitatively but which the formal model does not yet incorporate. The error correction rates we draw on were measured for traditionally-sourced errors, and whether they apply equally to AI-sourced errors (given the epistemic accountability gap) remains an open empirical question. Most engagement studies measure outcomes over weeks to months; whether the engagement multiplier that drives our predictions reflects durable behavioural change or partly novelty effects is unresolved. The evidence base is skewed toward STEM subjects and Western educational contexts, limiting generalisability.

Future research should prioritise randomised controlled trials specifically testing accuracy-utilisation trade-offs in health professions education, longitudinal studies following students across clinical training and into practice, studies examining whether error correction rates differ for AI-sourced versus traditionally-sourced errors, development of metrics distinguishing productive from superficial engagement, and models for navigating the tension between structured professional curricula and personalised AI learning.

## 9. Conclusion

The pursuit of perfect accuracy in educational AI, while well-intentioned, creates an accessibility paradox that can harm student learning. The mathematics is clear: a 90% accurate AI tutor used by 70% of students outperforms a 99% accurate system used by 10%, provided it exceeds baseline student performance.

But the argument requires honest qualification. Errors are not equal—safety-critical content in health professions education demands very high accuracy regardless of utilisation benefits. Generative AI poses distinctive epistemic challenges that may reduce the effectiveness of traditional error correction mechanisms, requiring new verification strategies we have not yet validated at scale. Engagement is necessary but not sufficient—superficial use patterns can nullify predicted benefits entirely. And the gatekeeping function of professional education imposes legitimate constraints that the framework should accommodate, not dismiss.

The path forward requires calibrated accuracy requirements (highest for safety-critical content, moderate for learning support), explicit training in AI-specific verification strategies, pedagogical scaffolding that promotes productive rather than superficial engagement, honest acknowledgment of what remains uncertain, and continuous monitoring with willingness to reverse course if harms emerge.

The choice before us is not between perfect AI and imperfect AI, but between imperfect-but-monitored AI that reaches most students and perfectionism paralysis that reaches none—while students fill the gap with unmonitored sources of unknown accuracy. With the right conditions met, educational AI can meaningfully improve learning in health professions education. Without them, it risks becoming another expensive disappointment.
