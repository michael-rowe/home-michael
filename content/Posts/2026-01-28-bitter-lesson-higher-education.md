---
title: A bitter lesson for higher education
type: post
aliases:
  - The bitter lesson for education
description: >-
  Rich Sutton's "bitter lesson" from AI research is that general methods using
  computation beat decades of carefully encoded human expertise. Higher
  education faces a parallel lesson about AI and assessment validity. Essays,
  reflective accounts, and other artefacts worked as evidence of learning
  mainly because they were hard to produce, and detailed briefs and rubrics now
  read as ready-made prompts for a language model. Handwritten exams,
  proctoring, and AI use scales all try to make artefacts hard to produce
  again, when the question worth asking is how we recognise learning at all.
meta-description: >-
  AI and assessment validity: why essays and reflections were only ever proxies
  for learning, and why making them harder to produce won't restore validity.
keyphrase: AI and assessment validity
author: "[[Michael Rowe]]"
date: 2026-02-03
updated: 2026-09-27
tags:
  - generative-ai
  - ai-integration
  - academic-integrity
  - educational-technology
  - higher-education
  - health-professions-education
category:
  - Assessment
related:
  - "[[Essays/learning-alignment]]"
  - "[[Posts/2026-03-27-ai-assessment-scales-containment]]"
  - "[[Posts/2026-02-05-AI-detection-assessment-security-theatre]]"
draft: false
enableToc: true
linkedin:
reviewed:
  - blog_writer
  - writing_style
  - SEO_optimiser
  - copy_editor
---
> [!info] Our assessments measured how hard artefacts were to produce
> AI researchers encoded what they understood about human intelligence, which felt right but couldn't scale. We encoded what we understood about "assessing learning", which felt rigorous but rewarded surface features that AI can now reproduce easily.

In 2019, AI researcher Rich Sutton published ["The Bitter Lesson"](http://www.incompleteideas.net/IncIdeas/BitterLesson.html), reflecting on 70 years of artificial intelligence research. He observed that researchers had repeatedly invested in encoding human knowledge into AI systems—chess strategies, speech recognition rules, computer vision features—only to find that general methods using computation, such as search and learning, eventually outperformed their carefully crafted expertise. What made the lesson bitter was that decades of intuitive, satisfying work had gone into approaches that couldn't scale. Higher education now faces a parallel lesson about AI and assessment validity.

## Assessment built on the difficulty of producing artefacts

We've built our assessment systems around a particular kind of scarcity: the cognitive difficulty of producing artefacts. Until recently, a 3,000-word essay with proper structure, academic voice, and citations required sustained engagement with relevant material, and this difficulty seemed to validate the essay as a reliable proxy for learning. The effort seemed to track depth of understanding, and the finished essay gave us something concrete to evaluate.

We encoded our intuitions about "what good work looks like" into elaborate assessment frameworks:

- Detailed rubrics specify grade boundaries: a first-class essay demonstrates "critical synthesis of diverse sources" while a 2:1[^degree-classification] shows "clear understanding with some synthesis".
- Marking schemes categorise assignments into weighted components.
- Academic integrity policies assume individual artefact production demonstrates individual learning. 

These frameworks have become codified across higher education institutions, embedded in quality assurance processes and professional standards. And we never paused to ask whether they measured what we claimed to measure.

We've taken things even further in our attempts to ensure fairness and reduce ambiguity, by creating highly prescribed assignments with explicit success criteria. "Section 1 should address the theoretical framework (500 words), Section 2 should apply this to your chosen case study (1,000 words), Section 3 should critically evaluate limitations (500 words)." We share detailed marking rubrics with students. We provide scaffolding to support those who might struggle with open-ended tasks. We standardise conditions to create comparable outputs. This equity-focused design—removing barriers, providing clarity, ensuring fairness—was assessment best practice.

## What we inadvertently optimised

Then [[large language models]] made content generation computationally trivial, revealing something uncomfortable about our assessment processes: in stripping away ambiguity to ensure fairness, we've written perfect prompts for AI. Our detailed instructions provide exactly the context LLMs need to complete tasks. The clearer our success criteria for students, the better AI performs when asked to. We have, with the best intentions, designed assessment tasks that remove precisely the elements—personal interpretation, contextual judgement, genuine synthesis—that we claim to be measuring.

Reflective writing on placement shows how far this has gone. A student nurse or paramedic writing up a clinical incident is often given Gibbs' reflective cycle as the structure: description, feelings, evaluation, analysis, conclusion, and action plan, each with its own heading and sometimes its own word count. Give a chatbot the incident and the six headings and it returns a competent reflection in seconds, because the scaffolding we built to help students reflect is also a complete specification of the output. What we wanted to know was whether the student now thinks differently about what happened, and the headings can't tell us that.

This creates what [Dawson et al. (2024)](https://www.tandfonline.com/doi/full/10.1080/02602938.2024.2386662) describe as a problem of validity more than of cheating. When measured behaviour can be outsourced, the measurement loses interpretive accuracy; the score no longer tells us what we think it tells us (in the past we mostly considered this in the context of essay mills, which are now [illegal in the UK](https://educationhub.blog.gov.uk/2022/04/essay-mills-are-now-illegal-skills-minister-calls-on-internet-service-providers-to-crack-down-on-advertising/)). This distinction matters because it shifts the conversation from morality to measurement validity. If we can't trust the outcome of the assessment, then we can't make inferences about the competence of the student.

Consider [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law): when a measure becomes a target, it ceases to be a good measure. We originally intended to measure learning through artefacts. But once artefacts became the target, students rationally optimised for artefact production and 'essay-writing skills' became distinguishable from 'disciplinary understanding'. Students learned to navigate rubrics, match assessor expectations, and produce academically acceptable work—capabilities that can be developed independently of deep learning.

When content generation was difficult, the effort it required masked this optimisation, and the link between producing artefacts and learning looked stronger than it was. Even before AI, essays didn't guarantee learning had occurred. Students could produce acceptable artefacts through surface learning (or essay mills, or copy/paste and editing), and the *form* of the activity could be mastered without understanding any of it. But the cognitive load required to generate these artefacts seemed to create valid products of learning because we couldn't easily separate artefact production from learning. The barrier to entry filtered for those with relevant capabilities, and outsourcing was expensive and risky enough to maintain the system's perceived integrity. We came to believe that the proxies of learning we'd optimised for said something meaningful about learning itself.

The artefact paradigm also rewards capabilities that correlate with social and cultural capital. Familiarity with academic discourse, exposure to formal writing conventions, understanding of institutional expectations; these all shape the quality of the work students submit as evidence of their competence. By measuring artefact production rather than learning, we're stratifying students based on navigation skills that, in most cases, have little to do with understanding the domain. As [Luckin (2025)](https://www.linkedin.com/posts/rose-luckin-5245003_educationreform-humanintelligence-aiineducation-activity-7376880730565672960-ghsr/) notes, we designed systems that reward precisely the capabilities that large language models excel at—pattern matching in text, structured argument construction, formal academic voice, and surface coherence without deep understanding. We've inadvertently optimised our entire assessment edifice for machine capabilities.

## Why this can't be fixed

What we're seeing now across the higher education sector is an attempt to make artefacts more difficult to generate: handwritten exams, proctored environments, or novel tasks that (we hope) AI handles poorly. It tries to fix the wrong thing. AI being able to do what we asked of students is only a problem because what we asked of them was never a valid proxy for their learning. Adding more complex authentication methods doesn't restore assessment validity when the premise underneath, that artefact quality indicates learning, has been exposed as unreliable.

Similarly, frameworks designed to regulate AI use in assessment—traffic light systems, permitted use policies, and tools like the [AI Assessment Scale](https://www.aiassessmentscale.com/)—still operate within the artefact paradigm, and elsewhere I describe them as [[Posts/2026-03-27-ai-assessment-scales-containment|taxonomies of containment]]. The original AIAS, for instance, specifies a level where "students are permitted to employ generative AI for refining, editing, and enhancing the language or content of their original work" (Perkins et al., 2024). This is more sophisticated output management, but it's still output management. We're specifying *which artefacts* count and *how they may be produced*, but we're not asking if those artefacts are valid and reliable assessments of learning in the first place. These frameworks assume the problem is controlling the conditions of production. But if artefact quality never reliably indicated learning, then controlling production conditions doesn't restore validity—it just makes the invalid measure feel more legitimate.

The frameworks we've developed over decades—external examining[^external-examining] based on artefact quality, programme validations that review assessment specifications, standardisation exercises ensuring marker reliability—all rest on the assumption that artefact difficulty correlates with learning validity. They're sophisticated implementations of a flawed premise.

## Accepting the bitter lesson

In machine learning, the bitter lesson was that researchers' approach wouldn't scale however well they implemented it. The lesson for higher education is similar: we can't salvage artefact-based assessment through better rubrics or stricter authentication.

This doesn't mean our previous work was worthless or that we were foolish. The systems we built reflected genuine efforts to ensure fairness, maintain standards, and support student learning. But we mistook a contingent barrier (difficulty of content generation) for a fundamental principle (validity of measurement). When the barrier disappeared, the principle collapsed.

Now we face a choice. We can continue spending energy trying to restore artificial scarcity by making artefact production difficult enough that the old system still appears to function. Or we can accept that computational abundance has revealed what was always true: artefacts were proxies for learning, and proxies are most convincing when they're difficult to fake. The question then becomes what [[learning-alignment|learning]] looks like when we stop confusing it with content production.

This acceptance is uncomfortable because it requires acknowledging that the frameworks we've refined over decades addressed the wrong question. They asked "how do we evaluate artefacts?" when we should have asked "how do we recognise learning?" The first is now trivial to game with a language model, and the second is still hard.

Which, for me, suggests it might be the right question to ask.

## Sources

- Dawson, P., Bearman, M., Dollinger, M., & Boud, D. (2024). Validity matters more than cheating. *Assessment & Evaluation in Higher Education, 49*(7), 1005–1016. https://doi.org/10.1080/02602938.2024.2386662
- Department for Education. (2022, April 28). Essay mills are now illegal: Skills Minister calls on internet service platforms to crack down on advertising. *The Education Hub*. https://educationhub.blog.gov.uk/2022/04/essay-mills-are-now-illegal-skills-minister-calls-on-internet-service-providers-to-crack-down-on-advertising/
- Luckin, R. (2025, September 25). *We are measuring intelligence wrong (and that's dangerous)* [Post]. LinkedIn. https://www.linkedin.com/posts/rose-luckin-5245003_educationreform-humanintelligence-aiineducation-activity-7376880730565672960-ghsr/
- Perkins, M., et al. (2024). The Artificial Intelligence Assessment Scale (AIAS): A framework for ethical integration of generative AI in educational assessment. *Journal of University Teaching and Learning Practice, 21*(6). https://doi.org/10.53761/q3azde36
- Sutton, R. (2019, March 13). *The bitter lesson*. Incomplete Ideas. http://www.incompleteideas.net/IncIdeas/BitterLesson.html

[^degree-classification]: **First-class and 2:1**: the top two bands of the UK undergraduate degree classification, which grades a whole degree as first, upper second (2:1), lower second (2:2), or third. Many health programmes publish rubrics with a band descriptor for each, and graduate employers and postgraduate courses often ask for a 2:1 or above. [Wikipedia](https://en.wikipedia.org/wiki/British_undergraduate_degree_classification)

[^external-examining]: **External examining**: the UK practice of appointing an academic from another university to review a sample of marked work and confirm that a programme's standards match those elsewhere. On a nursing or physiotherapy programme the external examiner usually sees essays, case studies, and portfolios, so the judgement rests on the artefacts students produced. [Wikipedia](https://en.wikipedia.org/wiki/External_examiner)
