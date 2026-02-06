---
title: A bitter lesson for higher education
type: post
aliases:
  - The Bitter Lesson for Education
description: "Rich Sutton's 'Bitter Lesson' applies to education: AI reveals that artifact-based assessment never truly measured learning."
keyphrase: bitter lesson higher education
author: "[[Michael Rowe]]"
date: 2026-02-03
updated: 2026-02-04
tags:
  - artificial-intelligence
  - higher-education
  - assessment
  - learning
category: Assessment
related:
  - "[[learning-alignment]]"
draft: false
slug: bitter-lesson-higher-education
enableToc: true
cssclasses:
  - ""
---
> [!tip] The bitter lesson in education
> AI researchers encoded what they understood about human intelligence, which felt right but couldn't scale. We encoded what we understood about "assessing learning," which felt rigorous but was actually optimising for surface features that AI can replicate easily.

In 2019, AI researcher Rich Sutton published ["The Bitter Lesson"](http://www.incompleteideas.net/IncIdeas/BitterLesson.html), reflecting on 70 years of artificial intelligence research. His observation was that researchers had repeatedly invested in encoding human knowledge into AI systems—chess strategies, speech recognition rules, computer vision features—only to find that simpler computational approaches eventually outperformed their carefully crafted expertise. The "bitter" lesson wasn't just that computation won; it was that decades of intuitive, satisfying work had been directed toward approaches that couldn't scale. Higher education now faces a parallel lesson about how we assess learning.

## The challenge of assessment validity

We've built our assessment systems around a particular kind of scarcity: the cognitive difficulty of producing artifacts. Until recently, a 3000-word essay with proper structure, academic voice, and appropriate citations required sustained engagement with appropriate learning materials, and this difficulty seemed to validate the essay as an appropriate proxy for learning. The effort you needed to put in seemed to correlate with depth of understanding; the visible output provided something concrete we could evaluate.

We encoded our intuitions about "what good work looks like" into elaborate assessment frameworks:

- Detailed rubrics specify grade boundaries: a first-class essay demonstrates "critical synthesis of diverse sources" while a 2:1 shows "clear understanding with some synthesis."
- Marking schemes categorise assignments into weighted components.
- Academic integrity policies assume individual artifact production demonstrates individual learning. 

These frameworks have become codified across higher education institutions, embedded in quality assurance processes and professional standards. And we don't seem to have paused and asked if they really measured what we claimed to measure.

We've taken things even further in our attempts to ensure fairness and reduce ambiguity, by creating highly prescribed assignments with explicit success criteria. "Section 1 should address the theoretical framework (500 words), Section 2 should apply this to your chosen case study (1000 words), Section 3 should critically evaluate limitations (500 words)." We share detailed marking rubrics with students. We provide scaffolding to support those who might struggle with open-ended tasks. We standardise conditions to create comparable outputs. This equity-focused design—removing barriers, providing clarity, ensuring fairness—represented assessment best practice.

## What we inadvertently optimised

Then [[large language models]] made content generation computationally trivial, revealing something uncomfortable about our assessment processes: in stripping away ambiguity to ensure fairness, we've written perfect prompts for AI. Our detailed instructions provide exactly the context LLMs need to complete tasks. The clearer our success criteria for students, the better AI performs when asked to. The more we scaffold, the more we optimise for computational reproduction. We have, with the best intentions, designed assessment tasks that remove precisely the elements—personal interpretation, contextual judgement, genuine synthesis—we claim to be measuring in the tasks we ask students to complete.

This creates what [Dawson et al. (2024)](https://www.tandfonline.com/doi/full/10.1080/02602938.2024.2386662) describe as a psychometric problem, not merely an integrity crisis. When measured behaviour can be outsourced, the measurement loses interpretive accuracy; the score no longer tells us what we think it tells us (In the past we mostly considered this in the context of essay mills, which are now [illegal in the UK](https://educationhub.blog.gov.uk/2022/04/essay-mills-are-now-illegal-skills-minister-calls-on-internet-service-providers-to-crack-down-on-advertising/)). I think this distinction is important because it moves the conversation from being about morality and makes it about measurement validity. If we can't trust the outcome of the assessment then we can't make inferences about the competence of the student.

Consider [Goodhart's Law](https://en.wikipedia.org/wiki/Goodhart%27s_law): when a measure becomes a target, it ceases to be a good measure. We originally intended to measure learning through artifacts. But once artifacts became the target, students rationally optimised for artifact production and "essay-writing skills" became distinguishable from "disciplinary understanding". Students learned to navigate rubrics, match assessor expectations, and produce academically acceptable work; capabilities that can be developed independently of deep learning.

When content generation was difficult, this optimisation was masked by the effort required. The correlation between production capability and learning appeared stronger than it really is.

We must acknowledge that the difficulty of artifact generation never actually validated the measure. Even before AI, essays didn't guarantee learning had occurred. Students could produce acceptable artifacts through surface learning (or essay mills, or copy/paste and editing). The *form* of the activity could be mastered without understanding any of it. But the cognitive load required to generate these artifacts seemed to create valid products of learning because we couldn't easily separate artifact production from learning. The barrier to entry filtered for those with relevant capabilities, and outsourcing was expensive and risky enough to maintain the system's perceived integrity. We came to believe that the proxies of learning we'd optimised for, said something meaningful about learning itself.

## Why this can't be fixed

What we're seeing now across the higher education sector is an attempt to make artifacts more difficult to generate; handwritten exams, proctored environments, or novel tasks that (we hope) AI handles poorly. But I think this is a misguided attempt to fix the wrong thing. The problem isn't that AI can now do things that students used to do; the problem is that the things we asked students to do weren't valid proxies for their learning. Adding more complex authentication methods doesn't restore assessment validity when the fundamental premise (i.e. that artifact quality is an indicator of learning) has been exposed as unreliable.

Similarly, frameworks designed to regulate AI use in assessment—traffic light systems, permitted use policies, and tools like the [AI Assessment Scale](https://www.aiassessmentscale.com/)—still operate within the artifact paradigm. The AIAS, for instance, specifies levels where "students are permitted to employ generative AI for refining, editing, and enhancing the language or content of their original work." This is more sophisticated output management, but it's still output management. We're specifying *which artifacts* count and *how they may be produced*, but we're not asking if those artifacts are valid and reliable assessments of learning in the first place. These frameworks assume the problem is controlling the conditions of production. But if artifact quality never reliably indicated learning, then controlling production conditions doesn't restore validity—it just makes the invalid measure feel more legitimate.

Circling back to the bitter lesson in the title, all this activity parallels Sutton's observation about AI progress. Researchers didn't just need better methods for encoding human knowledge; they had to accept that encoding human knowledge was the wrong strategy all along. Similarly, we can't retrofit artifact-based assessment by making those artifacts harder to produce. The entire structure assumes that artifact scarcity provides evidential value of valid learning.

The frameworks we've developed over decades—external examining based on artifact quality, programme validations that review assessment specifications, standardisation exercises ensuring marker reliability—all rest on the assumption that artifact difficulty correlates with learning validity. These aren't poor implementations of a sound principle; they're sophisticated implementations of a flawed premise.

And it's particularly challenging because the system rewards specific capabilities that correlate with social and cultural capital. Familiarity with academic discourse, exposure to formal writing conventions, understanding of institutional expectations; these are all factors that influence the quality of what students create as indicators of their competence. By measuring artifact production rather than learning, we're really stratifying students based on navigation skills that, in most cases, have little to do with understanding the domain. As [Rose Luckin notes (2025)](https://www.linkedin.com/posts/rose-luckin-5245003_educationreform-humanintelligence-aiineducation-activity-7376880730565672960-ghsr/), we designed systems that reward precisely the capabilities that large language models excel at—pattern matching in text, structured argument construction, formal academic voice, and surface coherence without deep understanding. We've inadvertently optimised our entire assessment edifice for machine capabilities.

## Accepting the bitter lesson

The bitter lesson in machine learning wasn't that researchers failed to implement good ideas; it was that their fundamental approach wouldn't scale regardless of implementation quality. The bitter lesson in higher education is similar: we can't salvage artifact-based assessment through better rubrics or stricter authentication. The foundation itself—measuring learning as a function of the difficulty of artifact creation—was contingent on technological constraints that no longer apply.

This doesn't mean our previous work was worthless or that we were foolish. The systems we built reflected genuine efforts to ensure fairness, maintain standards, and support student learning. But we mistook a contingent barrier (difficulty of content generation) for a fundamental principle (validity of measurement). When the barrier disappeared, the principle collapsed.

Now we face a choice. We can continue spending energy trying to restore artificial scarcity by making artifact production difficult enough that the old system still appears to function. Or we can accept that computational abundance has revealed what was always true: artifacts were proxies for learning, and proxies are most convincing when they're difficult to fake. The question isn't how to continue making artifacts difficult to generate. It's what learning actually looks like when we're not confusing it with content production.

This acceptance is uncomfortable because it requires acknowledging that the frameworks we've refined over decades addressed the wrong question. They asked "how do we evaluate artifacts?" when we should have asked "how do we recognise learning?" These are fundamentally different questions. The former is now computationally trivial to game; the latter remains genuinely difficult.

Which, for me, suggests it might be the right question to ask.