---
type: essay
title: "AI tutor accuracy in health professions education: The accuracy-engagement paradox"
slug: essays/ai-tutor-accuracy-health-professions
aliases:
  - essays/ai-tutoring-accuracy-health-professions
description: "A mathematical framework demonstrating that AI tutoring systems with 10–15% error rates can achieve superior learning outcomes through dramatically increased engagement compared to more accurate but largely unused alternatives. Drawing on evidence from health professions education, this essay shows that the multiplicative relationship between accuracy and utilisation creates an accessibility paradox: imperfect but engaging systems outperform perfect but unused ones. The argument carries three critical qualifications—errors vary in consequence and safety-critical content demands high accuracy; generative AI poses distinctive epistemic challenges that may undermine conventional error correction mechanisms; and engagement is necessary but not sufficient for learning, with superficial use patterns capable of nullifying predicted benefits entirely. A framework for calibrating accuracy requirements to context and consequence is proposed."
meta-description: AI tutor accuracy in health professions education needn't be perfect to be effective — it needs to be calibrated to context and consequence.
author:
  - "[[Michael Rowe]]"
affiliation:
  - University of Lincoln
email:
  - mrowe@lincoln.ac.uk
keyphrase: AI tutor accuracy in health professions education
version: 0.8
created: 2026-02-12
modified: 2026-02-24
tags:
  - large-language-models
  - health-professions-education
  - ai-integration
  - generative-ai
  - educational-technology
related:
  - "[[AI literacy]]"
  - "[[large language models]]"
  - "[[learning-alignment]]"
category:
  - AI and technology
  - Pedagogy
draft: false
reviewed:
  - writing_style
  - essay_writer
  - copy_editor
  - SEO_optimiser
---
> [!info] **About this essay**
> - **Author**: Michael Rowe ([ORCID](https://orcid.org/0000-0002-1538-6052); mrowe@lincoln.ac.uk)
> - **Affiliation**: University of Lincoln
> - **Created**: Feb 12, 2026
> - **Version**: 0.8 (last updated: Feb 24, 2026)
> - **Keywords**: AI tutoring, health professions education, accuracy, student engagement, epistemic accountability
> - **License**: [Creative Commons Attribution 4.0 International](https://creativecommons.org/licenses/by/4.0/)

### Abstract

Educational support systems have long prioritised accuracy as the primary metric of quality, producing technically excellent resources that remain largely unused. We present a mathematical framework demonstrating that AI tutoring systems with 10–15% error rates can achieve superior learning outcomes through dramatically increased engagement—but only with appropriate pedagogical scaffolding and oversight. Drawing on evidence from health professions education, we show that the multiplicative relationship between accuracy and utilisation creates an "accessibility paradox" where imperfect-but-engaging systems outperform perfect-but-unused ones. This outcome is not automatic. We identify three critical qualifications insufficiently addressed in current discourse: first, errors vary in consequence—rational verification behaviour depends on the interaction between probability of incorrectness and criticality of correctness; second, generative AI poses distinctive epistemic challenges, lacking the accountability, traceability, and interrogability of traditional information sources, that may reduce the effectiveness of education's conventional error correction mechanisms; and third, engagement is necessary but not sufficient for learning, with superficial use patterns capable of nullifying predicted benefits entirely. The framework provides context-specific thresholds for acceptable error rates while acknowledging what remains uncertain.

> [!summary] Key takeaways
> 1. Population-level learning benefit is multiplicative: accuracy × utilisation. A moderately accurate but widely used AI tutor can outperform a highly accurate but unused one — the accessibility paradox.
> 2. Errors vary in consequence. AI tutoring systems should maintain very high accuracy (>95%) for safety-critical content such as drug dosages and contraindications, while moderate accuracy (85–90%) may be acceptable for conceptual learning support.
> 3. Generative AI poses distinctive epistemic challenges — sycophancy, fabricated citations, no reputational accountability — that may undermine the error-correction mechanisms education normally relies on, requiring new verification practices.
> 4. Engagement is necessary but not sufficient. Superficial engagement can produce high utilisation metrics while leaving learning outcomes unchanged.
> 5. The appropriate response is calibration, not capitulation: highest accuracy standards for safety-critical content, moderate standards for learning support, explicit AI verification training, and continuous monitoring.

## Introduction

Clinical decision support (CDS) tools demonstrate a counterintuitive pattern: the more comprehensive the system—the more interactions it flags, the more workflow it interrupts—the more reliably it gets overridden. Alert fatigue, in which clinicians habituate to decision support prompts and dismiss them without attending to content, is well documented. Van der Sijs et al. (2006) found that 91% of drug safety alerts in a computerised prescribing system were overridden, the majority without clinical justification. Meanwhile, failure to appropriately adjust drug doses in patients with renal impairment remains common across settings, with estimates ranging from a quarter to over half of cases (Goyal et al., 2024; Saad et al., 2019). A system optimised for completeness trains clinicians to dismiss rather than engage. The accuracy–adoption trade-off is not a quirk of clinical informatics.

The pattern repeats in education. Clinical decision support tools like BMJ Best Practice achieve high accuracy in their recommendations, yet most health professions students do not meaningfully engage with available clinical resources outside mandatory assignments. The volume of assigned reading far exceeds what students can realistically complete (Klatt & Klatt, 2011). Attendance at optional learning opportunities remains low (Griffin et al., 2014). We have optimised for content quality while ignoring the primary determinant of learning outcomes—actual use.

AI tutor accuracy in health professions education sits at the heart of this tension. These systems provide personalised, interactive learning support at scale, but at accuracy levels many educators consider unacceptable (Singhal et al., 2023). The demand for near-perfect accuracy before deployment reflects a conflation of two fundamentally different AI paradigms.

Diagnostic AI—radiology, pathology, clinical decision support—compresses vast amounts of data into critical decisions. Output is trusted as definitive, with limited opportunity for error correction and high stakes for individual errors. This paradigm demands very high accuracy. Generative or educational AI—tutoring, feedback, explanation—does something different. It expands simple queries into rich learning experiences. Output is meant to be evaluated and questioned, not accepted as truth, with multiple opportunities for error correction through the learning process. These systems can provide net benefit at moderate accuracy (85–90%). Conflating these paradigms means demanding diagnostic-level accuracy from systems operating in an entirely different epistemological context.

Even this distinction oversimplifies. Recent evidence reveals stark variability in outcomes. In a randomised controlled trial, students using an AI physics tutor learned more in less time than those in active-learning classes, with higher engagement and motivation (Kestin et al., 2025). Conversely, Thoeni and Fryer (2025) deployed a generative AI tutor across multiple undergraduate classes for a full semester and found no significant differences in engagement, self-efficacy, or achievement compared to controls. AI tutors are pedagogical tools, not pedagogical solutions. The accessibility paradox resolves in students' favour only when implementation is thoughtful.

The argument that follows proceeds in two moves. First, a mathematical framework establishes the structural relationship between accuracy and utilisation. Second, critical analysis identifies three conditions under which that framework breaks down—error criticality, epistemic accountability, and engagement quality. These qualifications are not footnotes to the accessibility paradox; they are its substance. The essay's primary contribution is to specify when and for whom the paradox holds, and what institutions must do to make it hold reliably. The evidence base draws on published trials, meta-analyses, and observational studies in health professions and higher education. This is not a systematic review; it is a structured argument that uses evidence to test reasoning, intended to be useful in the interval before definitive empirical trials exist.

A positionality note: We write as health professions educators with a prior commitment to the view that engagement is a necessary condition for learning, and a scepticism towards approaches that sacrifice reach in pursuit of perfect standards. Those commitments shape the framework's starting assumptions and may bias the analysis towards optimism about engagement benefits. Where that risk is greatest, we have tried to flag it explicitly.

## The accessibility paradox

The core mathematical insight is straightforward:

**Net Learning Benefit = U × [(1-E) × Benefit_correct + E × Cost_wrong − Baseline]**

Where U is utilisation rate, E is error rate (probability the AI provides incorrect guidance), Benefit_correct is learning improvement when AI guidance is correct, Cost_wrong is learning degradation when AI guidance is wrong (accounting for error correction), and Baseline represents current learning outcomes without AI.

Population-level benefit is multiplicative. A 95% accurate clinical resource used by 20% of students provides less learning benefit than an 88% accurate AI tutor used by 65%, provided the latter outperforms baseline student performance. Given that typical mastery rates on standardised assessments fall well below ceiling (Freeman et al., 2014), it plausibly does.

The realistic alternative to an AI tutor is not a textbook. It is whatever students actually turn to when they disengage from formal resources: a tired resident on a busy ward, peer explanations of variable quality, unvetted internet searches. The relevant accuracy comparison is not AI versus textbook but AI versus the information ecology students inhabit when they stop using the textbook.

**Worked example—pharmacology tutoring.** An AI tutor supports pharmacology students with drug dosing calculations. Baseline mastery on standardised assessments sits at 62%. The AI achieves 87% accuracy on dosing guidance, with 68% of students using it regularly and a combined mastery multiplier of 1.15× from increased practice. After accounting for error introduction (13% error rate × 68% utilisation × 20% error persistence = 1.8 percentage points degradation) and engagement-amplified correct guidance, projected mastery reaches approximately 71%, a 9 percentage point gain. Even under pessimistic assumptions (engagement multiplier only 1.05×, error persistence 35%, utilisation 50%), improvement remains positive at roughly 4 points.

Three dependencies qualify these predictions. Utilisation must be productive: students using AI as an "answer vending machine" may show high U but gain little benefit. Error correction is probabilistic, not guaranteed. Some errors persist. And lower baseline performance increases both potential benefit and potential risk, since novice learners lack the domain knowledge to detect plausibility failures in AI output.

## Why education tolerates imperfection

Clinical decisions can have immediate, irreversible consequences. Educational environments are different. They contain multiple layers of error correction: subsequent problem-solving reveals inconsistencies, practice and assessment progressively reduce retained misconceptions (Butterfield & Metcalfe, 2001; Kendeou et al., 2014), and peer discussion and instructor oversight provide additional correction. In one study, researchers deliberately seeded an AI tutor with known misconceptions; by term's end, students' performance on those concepts was no worse than peers who did not use the AI (Weijers et al., 2024). Traditional education has always contained errors. Reviews of widely-used science textbooks have found numerous factual errors across texts used by millions of students (Hubisz, 2001). Learning has always occurred despite these imperfections.

But correction rates describe probability of eventual correction, not the effort required. Research on the continued influence effect shows that unlearning an established misconception is cognitively costlier than learning the correct information in the first place: the original error creates a mental representation that persists even after correction and resurfaces under cognitive load (Lewandowsky et al., 2012). Cost_wrong in the framework is not simply the inverse of correction probability. It must also account for the additional effort required to overwrite incorrect knowledge. That cost varies substantially: correcting a misunderstanding about communication frameworks is straightforward; correcting an incorrectly learned drug mechanism of action may require repeated, effortful retrieval practice to displace the original error.

The baseline against which we evaluate AI tutoring is not perfection. It is current educational reality. A 90% accurate AI is more reliable than the average learner's current knowledge state. The tutor provides net benefit by correcting misunderstandings students would otherwise retain, even as it occasionally introduces new ones. Evidence from productive failure research shows that students with initially low achievement tend to gain more than high-performing peers (Kapur, 2014; Sinha & Kapur, 2021), which means AI tutoring could narrow achievement gaps, provided struggling students actually engage.

### Error criticality: quality, not just quantity

Treating errors as binary—correct or incorrect—obscures a crucial distinction. An AI pharmacology tutor that suggests a slightly suboptimal study approach for receptor binding is categorically different from one that teaches an incorrect gentamicin dosing calculation. The former wastes time. The latter could harm patients. This distinction matters especially in health professions education, where some stakeholders would rather produce a graduate with less but factually correct knowledge than one with broader knowledge containing dangerous errors. That reflects a legitimate gatekeeping function: the responsibility to certify that graduates meet minimum safety standards before being licensed to practise.

The rational decision about whether to verify AI-generated information depends on two interacting factors: the estimated probability that the information is incorrect, and the potential consequences if an error goes undetected into practice. A low-probability error with catastrophic consequences—a wrong drug interaction—warrants verification just as much as a high-probability error with minor consequences.

The binary error rate E in the model should therefore be understood as a severity-weighted quantity. In practice, AI systems should maintain very high accuracy (>95%) for safety-critical content—drug dosages, contraindications, diagnostic criteria—even where moderate accuracy (85–90%) is acceptable for conceptual explanations and learning guidance. Students need training not just in error detection but in error triage: learning to identify which information warrants verification regardless of how confident the AI appears.

## Why AI errors resist correction

The argument that educational error correction makes moderate AI inaccuracy tolerable rests on an implicit assumption: that AI-sourced errors behave like errors from traditional sources. They may not. Traditional information sources carry epistemic accountability: features that support rational error-checking. A student can ask a teacher to justify a claim, and the teacher must defend or retract it. Textbooks can be cross-referenced against cited sources. Generative AI lacks these mechanisms.

Consider direct questioning. [[large language models|Large language models]] (LLMs) tend towards sycophancy when challenged—agreeing with incorrect user statements rather than correcting them, even when the model demonstrably "knows" the correct answer (Sharma et al., 2023; Sharma et al., 2024). In a medical context, Chen et al. (2025) found that frontier LLMs complied with illogical medical requests at rates up to 100%, prioritising helpfulness over logical consistency. A nursing student who tells an AI tutor "I think the maximum dose of paracetamol is 6g per day" may receive agreement rather than correction—precisely when correction matters most. Productive failure depends on students eventually discovering their error. Sycophantic AI may ensure they never do.

Source traceability presents a similar problem. Textbook claims can be traced to evidential origins. A lecturer's claims can be evaluated against expertise and the broader literature. LLM-generated information cannot. Even when AI provides citations, studies consistently find high rates of fabricated or inaccurate references; estimates range from 30% to over 50% depending on model and domain (Buchanan et al., 2024; Dahl et al., 2025). And where textbook errors carry reputational consequences for authors, generative AI suffers no reputational cost. Each interaction is independent, with no accumulated track record for users to evaluate. People were already poor at evaluating internet sources where traceability and accountability exist (Wineburg et al., 2016). With generative AI, where these mechanisms are largely absent, verification behaviour will be worse, not better, unless students are explicitly taught alternative strategies.

The error correction rates we draw on were measured in contexts where errors came from traditional sources. These rates may not apply to AI-sourced errors. Students cannot rely on the same epistemic tools—questioning the source, tracing evidence, evaluating reputation—that have traditionally supported error detection. They need new practices: cross-referencing AI claims against established sources as a default habit, treating AI confidence signals as unreliable, using structured verification protocols for high-criticality information, developing sufficient domain knowledge to detect plausibility failures independently.

This accountability gap does not invalidate the accessibility paradox. But it means the "errors as features" argument requires more careful qualification than is sometimes offered. The pedagogical benefits of encountering errors depend on students having the tools and training to detect and correct them. When the error source actively undermines traditional verification strategies, additional scaffolding is essential. Whether such scaffolding can be reliably provided at scale remains an open empirical question.

## AI as a learning companion

Both qualifications above operate within an implicit frame: AI tutoring as instruction delivery, evaluated against the accuracy of a textbook or the reliability of a lecturer. That frame is too narrow. The more interesting potential lies not in AI as a better delivery mechanism for existing instruction, but as a fundamentally different kind of learning relationship—interactive, responsive, available at the precise moment of cognitive need.

Consider the difference between a medical student reading BMJ Best Practice on acute kidney injury management and that same student working through a patient case, getting stuck on fluid management, asking an AI "why isn't my approach working for this patient's electrolyte profile?", receiving a targeted explanation, trying again, and then asking "but what if the patient were also on ACE inhibitors?" The first is instruction delivery, regardless of medium. The second is guided exploration, with the student driving the inquiry. These are qualitatively different interactions.

When stakeholders evaluate AI tutoring as an instructional channel, they naturally focus on accuracy. When AI functions as a learning companion, the relevant questions shift. Does it help students formulate better clinical questions? Does it support productive struggle without resolving it prematurely? Does it build capacity for independent reasoning about patient problems? This reframing changes how we interpret error tolerance. A companion's suggestion to "consider whether this patient's renal function affects your dosing choice" is less harmful when wrong than a textbook's assertion that "the correct dose is X", because the suggestion invites evaluation while the assertion invites acceptance.

A critical caveat follows. The companion model only functions if the AI adopts a pedagogical stance—one that challenges, questions, and prompts reconsideration—rather than the default "helpful assistant" stance characterising most current LLMs. A companion that agrees when a student says "I think the gentamicin dose is 500mg" is not supporting productive struggle. It is reinforcing a dangerous error. Realising the companion model requires deliberate design: prompt engineering or fine-tuning that prioritises Socratic challenge over agreeableness, explicit framing for students that the AI's role is to question their reasoning rather than validate it. Encouragingly, Chen et al. (2025) found that relatively simple prompting strategies—such as explicitly granting the model permission to reject illogical requests—substantially reduced sycophantic compliance in medical contexts.

None of this resolves accuracy concerns for high-criticality content. But it suggests the debate about acceptable error rates is partly a debate about what role we want AI to play in education. If the role is instruction delivery, accuracy is paramount. If the role is learning companionship, evaluation criteria should include the quality of the learning process, not just the accuracy of the content transmitted.

## When the paradox fails

The accessibility paradox is not self-executing. Several conditions can prevent its predicted benefits from materialising, and intellectual honesty requires foregrounding them. The most fundamental qualification: engagement is not learning. The framework's predictions depend on the engagement multiplier—the observation from meta-analyses that AI tutors substantially increase practice problems attempted, time on task, and question frequency (Kulik & Fletcher, 2016; Steenbergen-Hu & Cooper, 2014). But engagement that involves reading AI explanations, nodding along, and moving to the next question may feel productive while producing shallow learning. The Thoeni and Fryer (2025) null results over a full semester likely reflect exactly this pattern: engagement metrics up, deep learning unchanged. Students are often unaware of what effective learning involves—many conflate recognition with recall, comprehension with competence—and without explicit instruction in learning strategies, they gravitate toward the path of least resistance. AI makes that path very smooth.

Then there is the durability question. Whether measured engagement gains reflect genuine behavioural change or partly novelty effects remains unresolved. Most positive studies measure outcomes over weeks to months. If engagement gains are partly novelty-driven, sustained utility requires integration into curriculum through assessment alignment and structured learning activities. Otherwise the novelty fades and institutions are left with the errors but without the high utilisation that justified tolerating them.

Over-reliance poses a different risk. Gerlich (2025) found a strong negative correlation (r = −0.68) between frequent AI tool use and critical thinking performance among young adults. Instructors observe students who, accustomed to step-by-step AI guidance, feel lost when it is withdrawn during examinations. If health professions students routinely offload clinical reasoning to AI during training, they may lack the capacity for independent reasoning when they encounter patients without AI support.

There is also an equity problem that cuts against the framework's most optimistic predictions. While struggling students show the largest potential gains, research on feedback usage finds that a substantial minority of students do not engage with feedback at all, and roughly half of those who do engage fail to improve as a result (Meyer et al., 2025). High-performing students tend to exploit optional resources more than struggling students (Winstone et al., 2017). Without mandatory integration and targeted outreach, AI tutors could widen rather than narrow achievement gaps. The students most in need of support may be least likely to benefit.

## AI tutor accuracy standards and professional certification

The gatekeeping concern raised in the error criticality discussion deserves more than a paragraph. Professional education has a dual function: developing autonomous learners and certifying that graduates meet minimum safety standards for patient care. These functions can pull in opposite directions, and the accessibility paradox is most contested precisely at this intersection.

The question is not whether this concern is valid. It is. The question is what comparison it assumes. "Would you prefer a graduate who knows 100 correct things or one who knows 110 things of which 11 are wrong?" is the wrong framing. The accessibility paradox makes the real question explicit: "Would you prefer 30% of students who engaged deeply with perfect resources, or 70% who engaged deeply with 90%-accurate resources?" The gatekeeping concern implicitly assumes accuracy and utilisation are independent: that you can have both perfect accuracy and universal engagement. You often cannot.

Disengaged students do not avoid acquiring errors. They fill knowledge gaps with peer folklore, outdated information, personal intuition, and unvetted internet sources, all of which may carry higher error rates than a 90%-accurate, monitored AI tutor. The real comparison is not between AI errors and no errors. It is between structured engagement with a moderately accurate system and unstructured non-engagement with unmonitored sources.

That said, the gatekeeping concern imposes legitimate constraints. Certain knowledge in health professions education is non-negotiable: correct drug dosages, contraindications, emergency identification. For this content, AI systems should be held to very high accuracy standards (>95%), or it should be delivered and assessed through traditional, verified channels. The framework's contribution is not that all accuracy standards should be relaxed, but that accuracy requirements should be calibrated to context and consequence.

A philosophical tension remains between the structure that degree programmes require and the personalisation that AI-powered learning enables. A structured clinical curriculum says "here is what you need to know, in this order, to these standards." An AI learning companion says "let's explore whatever clinical question interests you, in whatever order works for you." Both have value. Combining them is not straightforward, especially when professional assessments must determine whether students have met specific competency thresholds. Institutions that dismiss teacher concerns about this tension as mere resistance to change risk either implementation failure or a genuine loss of educational quality.

## Limitations and future directions

Several limitations constrain the framework's current application. The binary correct/incorrect treatment of errors, while mathematically tractable, oversimplifies a reality where errors vary enormously in consequence; the discussion of error criticality addresses this qualitatively, but it is not yet incorporated into the formal model. The error correction rates drawn on were measured for traditionally-sourced errors; whether they apply to AI-sourced errors, given the epistemic accountability gap, is an open empirical question. Most engagement studies measure outcomes over weeks to months, leaving unresolved whether the engagement multiplier reflects durable behavioural change or partly novelty effects. The evidence base is skewed toward STEM subjects and Western educational contexts, limiting generalisability.

Several questions demand direct empirical attention. RCTs isolating accuracy-utilisation trade-offs in health professions education are largely absent from the current literature. Longitudinal studies are needed to determine whether engagement gains persist into clinical practice or fade with familiarity. Whether error correction rates differ for AI-sourced versus traditionally-sourced errors remains unmeasured—the assumption that they are equivalent is the framework's most significant empirical gap. Developing metrics that distinguish productive from superficial engagement would transform the quality of future research, as would better models for integrating personalised AI learning into structured curricula without compromising the competency thresholds that professional certification requires.

## Conclusion

The accessibility paradox is real: a 90% accurate AI tutor used by 70% of students outperforms a 99% accurate system used by 10%. But the three qualifications this essay has developed—error criticality, epistemic accountability, engagement quality—are not caveats to that claim. They specify the conditions under which it holds. What this means in practice is calibration, not capitulation. The highest accuracy standards for safety-critical content. Moderate standards for learning support. Explicit training in AI-specific verification. Pedagogical scaffolding that promotes productive rather than superficial engagement. Continuous monitoring with willingness to reverse course if harms emerge.

The choice is not between perfect AI and imperfect AI. It is between imperfect-but-monitored AI that reaches most students and perfectionism paralysis that reaches none, while students fill the gap with unmonitored sources of unknown accuracy. The harder question—how to design the monitoring, scaffolding, and verification practices that make that comparison hold in varied institutional contexts and at scale—remains largely unanswered. That is where the work needs to go.

## References

Buchanan, J., Hill, S., & Shapoval, O. (2024). ChatGPT hallucinates non-existent citations: Evidence from economics. *Kyklos*, 77(3), 702–716. https://doi.org/10.1177/05694345231218454

Butterfield, B., & Metcalfe, J. (2001). Errors committed with high confidence are hypercorrected. *Journal of Experimental Psychology: Learning, Memory, and Cognition*, 27(6), 1491–1494. https://doi.org/10.1037/0278-7393.27.6.1491

Chen, Q., Zhu, J., Lee, J., Xu, S., Yoo, K. M., & Jiang, N. (2025). When helpfulness backfires: LLMs and the risk of false medical information due to sycophantic behavior. *npj Digital Medicine*, 8, 278. https://doi.org/10.1038/s41746-025-02008-z

Dahl, M., Magesh, V., Suzgun, M. & Ho, D. E. (2024). Large Legal Fictions: Profiling Legal Hallucinations in Large Language Models. _The Journal of Legal Analysis_, _16_(1), 64–93. https://doi.org/10.1093/jla/laae003

Freeman, S., Eddy, S. L., McDonough, M., Smith, M. K., Okoroafor, N., Jordt, H., & Wenderoth, M. P. (2014). Active learning increases student performance in science, engineering, and mathematics. *Proceedings of the National Academy of Sciences*, 111(23), 8410–8415. https://doi.org/10.1073/pnas.1319030111

Gerlich, M. (2025). AI tools in society: Impacts on cognitive offloading and the future of critical thinking. *Societies*, 15(1), Article 6. https://doi.org/10.3390/soc15010006

Goyal, A., Daneshpajouhnejad, P., Engold, A., & Gildea, L. (2024). Renal failure drug dose adjustments. In *StatPearls*. StatPearls Publishing. https://www.ncbi.nlm.nih.gov/books/NBK560512/

Griffin, W., Cohen, S. D., Berndtson, R., Burson, K. M., Camper, K. M., Chen, Y., & Smith, M. A. (2014). Starting the conversation: An exploratory study of factors that influence student office hour use. *College Teaching*, 62(3), 94–99. https://doi.org/10.1080/87567555.2014.896777

Hubisz, J. L. (2003). Middle-school texts don't make the grade. _Physics Today_, 56(5), 50–54. https://doi.org/10.1063/1.1583534

Kapur, M. (2014). Productive failure in learning math. *Cognitive Science*, 38(5), 1008–1022. https://doi.org/10.1111/cogs.12107

Kendeou, P., Walsh, E. K., Smith, E. R., & O'Brien, E. J. (2014). Knowledge revision processes in refutation texts. *Discourse Processes*, 51(5–6), 374–397. https://doi.org/10.1080/0163853X.2014.913961

Kestin, G., Miller, K., Klales, A., Milbourne, T., & Ponti, G. (2025). AI tutoring outperforms in-class active learning: An RCT introducing a novel research-based design in an authentic educational setting. _Scientific Reports_, 15(1), 17458. https://doi.org/10.1038/s41598-025-97652-6

Klatt, E. C., & Klatt, C. A. (2011). How Much Is Too Much Reading for Medical Students? Assigned Reading and Reading Rates at One Medical School. _Academic Medicine_, _86_(9), 1079–1083. https://doi.org/10.1097/acm.0b013e31822579fc <!--This DOI doesn't resolve to the article. It's a publisher problem. The Pubmed entry (https://pubmed.ncbi.nlm.nih.gov/21785317/) points to the same DOI, which doesn't resolve-->

Kulik, J. A., & Fletcher, J. D. (2016). Effectiveness of intelligent tutoring systems: A meta-analytic review. *Review of Educational Research*, 86(1), 42–78. https://doi.org/10.3102/0034654315581420

Lewandowsky, S., Ecker, U. K. H., Seifert, C. M., Schwarz, N., & Cook, J. (2012). Misinformation and its correction: Continued influence and successful debiasing. *Psychological Science in the Public Interest*, 13(3), 106–131. https://doi.org/10.1177/1529100612451018

Meyer, J., Jansen, T., & Fleckenstein, J. (2025). Nonengagement and unsuccessful engagement with feedback in lower secondary education: The role of student characteristics. _Contemporary Educational Psychology_, _81_, 102363. https://doi.org/10.1016/j.cedpsych.2025.102363

Sharma, M., Tong, M., Korbak, T., Duvenaud, D., Askell, A., Bowman, S. R., Cheng, N., Durmus, E., Hatfield-Dodds, Z., Johnston, S. R., Kravec, S., Maxwell, T., McCandlish, S., Ndousse, K., Rausch, O., Schiefer, N., Yan, D., Zhang, M., & Perez, E. (2023). _Towards Understanding Sycophancy in Language Models_. ArXiv.org. https://arxiv.org/abs/2310.13548

Saad, R., Hallit, S., & Chahine, B. (2019). Evaluation of renal drug dosing adjustment in chronic kidney disease patients at two university hospitals in Lebanon. *Pharmacy Practice*, 17(1), 1304. https://doi.org/10.18549/PharmPract.2019.1.1304

Singhal, K., Azizi, S., Tu, T., Mahdavi, S. S., Wei, J., Chung, H. W., ... Natarajan, V. (2023). Large language models encode clinical knowledge. *Nature*, 620, 172–180. https://doi.org/10.1038/s41586-023-06291-2

Sinha, T., & Kapur, M. (2021). When Problem Solving Followed by Instruction Works: Evidence for Productive Failure. _Review of Educational Research_, _91_(5), 761–798. https://doi.org/10.3102/00346543211019105

Steenbergen-Hu, S., & Cooper, H. (2014). A meta-analysis of the effectiveness of intelligent tutoring systems on college students' academic learning. *Journal of Educational Psychology*, 106(2), 331–347. https://doi.org/10.1037/a0034752

Thoeni, A., & Fryer, L. K. (2025). AI tutors in higher education: Comparing expectations to evidence. [Preprint]. https://www.researchgate.net/publication/390576465

Van der Sijs, H., Aarts, J., Vulto, A., & Berg, M. (2006). Overriding of drug safety alerts in computerized physician order entry. *Journal of the American Medical Informatics Association*, 13(2), 138–147. https://doi.org/10.1197/jamia.M1809

Weijers, R., Wu, D., Betts, H., Jacod, T., Guan, Y., Sujaya, V., Dev, K., Goel, T., Delooze, W., Rabbany, R., Wu, Y., Godbout, J.-F., & Pelrine, K. (2024). _From intuition to understanding: Using AI peers to overcome physics misconceptions_. arXiv. https://openreview.net/pdf?id=XwdQzfpf0h

Wineburg, S., McGrew, S., Breakstone, J., & Ortega, T. (2016). *Evaluating information: The cornerstone of civic online reasoning*. Stanford History Education Group.

Winstone, N., Nash, R., Parker, M. & Rowntree, J. Supporting Learners’ Agentic Engagement With Feedback: A Systematic Review and a Taxonomy of Recipience Processes. (2017). _Educational Psychologist_. https://doi.org/10.1080/00461520.2016.1207538

‌