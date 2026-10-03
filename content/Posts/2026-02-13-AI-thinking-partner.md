---
title: "The quality of the challenge: AI as a thinking partner"
type: post
description: Most discussions of AI in writing focus on output. This post describes using AI as a thinking partner while revising a theoretical framework paper for journal submission, asking it for critique, arguing back where it was wrong, and testing the draft against my own voice. The exchange changed the paper's structure and how it describes its methodology, and showed that the value lay in the quality of the challenge.
meta-description: "Using AI as a thinking partner to revise a journal article: asking for critique, arguing back, and what changed in the paper as a result."
keyphrase: AI as a thinking partner
author: "[[Michael Rowe]]"
date: 2026-02-13
updated: 2026-10-02
tags:
  - ai-integration
  - academic-writing
  - emergent-scholarship
  - judgement
category:
  - Scholarship
  - Technology
related:
  - "[[Essays/taste-and-judgement]]"
  - "[[Essays/ai-hpe-theoretical-framework]]"
  - "[[Posts/2026-02-11-building-AI-workflow-academics]]"
draft: false
enableToc: true
linkedin:
reviewed:
  - blog_writer
  - writing_style
  - SEO_optimiser
  - copy_editor

---

> [!info] The most valuable AI contribution is the quality of the challenge
> The most valuable thing AI did during this writing process was ask questions I hadn't thought to ask myself, and be wrong in ways that forced me to clarify what I actually meant. Using it as a thinking partner means exploring disagreement and tension, which is lost if it simply agrees with you or you simply agree with it.

In my experience, most discussions about using AI to support writing focus on output: whether it can write a paragraph, summarise a paper, or generate a first draft. These are reasonable questions, but they leave out the harder problem.

The harder problem is the thinking that precedes the writing, especially the blind spots that accumulate when you've worked on something long enough to stop seeing it clearly. Over the past year, I've been revising a [[Essays/ai-hpe-theoretical-framework|theoretical framework for integrating AI into health professions education]], drawing on four learning theories and a structured conceptual analysis. I had an [early preprint](https://doi.org/10.31219/osf.io/c764f_v1) (Rowe, 2025) but knew it needed serious revision before journal submission. The problem was that, after so long, I could no longer see the weaknesses of the paper.

So I tried using AI as a thinking partner, in this case Claude, to challenge positions, surface contradictions, and push the argument further than I was getting by working alone. It changed the paper in ways I hadn't anticipated.

## Asking for critique first

I started by asking Claude for an honest assessment of the draft using a fairly basic prompt.

> [!prompt] Prompt
> I've uploaded a draft article that I'd like to get ready for submitting for publication. I want you to analyse the draft and let me know your thoughts. We might want to split the analysis into two; 1) the paper itself and its premise, and 2) the data analysis where the data are the learning theories.

It responded as a good colleague would: pinpointing what worked and what didn't with enough specificity to be useful. Some of the feedback confirmed existing suspicions. The methodology section claimed to be 'thematic synthesis' when it was actually a structured conceptual analysis (a distinction that matters, especially for peer review). The theoretical foundations presented early on were thorough but too long for the work they were doing.

Other feedback surfaced problems I had missed. The paper was originally structured around an acronym—ACADEMIC—built from seven principles. Claude was surprisingly direct: two of the seven principles felt forced; in its words, "pulled into existence to complete the acronym" rather than emerging from the analysis. It identified five strong convergences across the theories and two that were merely implications.

> [!response] Claude
> I'll be direct: the acronym feels forced. The "IC" standing for "Interprofessional Communities" is a stretch, and readers will notice. More substantively, acronyms in frameworks tend to signal a certain kind of paper — the prescriptive, "here are your seven steps" genre — which sits awkwardly alongside the theoretical sophistication of the analysis.

This felt uncomfortable because it was obviously true. I had been talked into the acronym by the increasing tendency to 'brand' academic output. Letting go of the acronym freed the principles to be what they actually were, rather than trying to fit them into an unnatural container. This initial exchange led to several rounds in which each of us took turns defending positions and holding ground, or conceding and adapting. It was less about "who is right?" and more "what do I want to say?"

## Prior knowledge as a methodological strength

The most productive exchange addressed a quiet concern: what I'd described to Claude as the "problem of prior beliefs". The paper analyses four learning theories to identify themes, which then become design principles. But over my fifteen years of experience teaching and researching technology in professional education, I'd developed a strong sense of what 'good' technology-enhanced education looks like. I was worried that I'd simply driven the results towards conclusions I had already reached.

When I raised this, Claude reframed it: what I was describing was *theoretical sensitivity*, a concept from grounded theory[^grounded-theory] (Hughes & Lamb, 2025), and not a methodological flaw. Deep domain knowledge enables a researcher to recognise meaningful patterns rather than superficial ones and is a [feature, not a bug](https://en.wikipedia.org/wiki/Bug_(engineering)#%22It's_not_a_bug,_it's_a_feature%22).

It's only a problem if you pretend the analysis was purely inductive when it was actually shaped by informed judgement. The solution was to own my prior beliefs through a positionality statement[^positionality] (excerpt below) that acknowledges my personal commitments, explains how they shaped the analysis, and lets the reader evaluate accordingly.

> I should be direct about what I brought to this analysis. Fifteen years of teaching and researching the use of technology in professional education has left me with commitments about what effective technology-enhanced learning looks like. In qualitative research terms, this is theoretical sensitivity (Glaser & Strauss, 1967) — the capacity to recognise meaningful patterns because you have deep domain knowledge.

This reframing changed how I understood the work. I went from seeing my experience as something to apologise for to recognising it as the reason the analysis had any credibility. That shift came from the exchange with Claude, and I don't think I'd have reached it alone.

## Sharpening arguments through pushback

Not every suggestion was right, and the moments where I pushed back were as productive as the moments where I agreed.

For example, Claude recommended reducing the principles from seven to five for the sake of parsimony. On two principles—emergent curriculum design and interprofessional community knowledge building—I agreed. The first was downstream of other principles; the second was forced to fit "interprofessional" when the analysis pointed to something broader.

But I wanted to keep a principle around *networked knowledge building*: the idea that the most important problems we face are [[Notes/wicked problems|wicked problems]] requiring collaboration across disciplinary and epistemological boundaries, and that AI agents are now part of those networks.

> [!prompt] Prompt
> I would like to see if we can work networked knowledge building into the final output and the reason is that I think the most important problems of today (and of the future) are "wicked problems", and that those kinds of problems will require networked knowledge building - where AI agents are part of the network. However, I recognise that "what I believe the future needs" is not the same thing as "this emerged from the analysis of the theories". what do you think?

Claude's response was useful: while the theoretical support was genuine, the *wicked problems* framing worked better as a discussion-level argument than as an emergent finding. I kept the principle but repositioned the justification, and the paper is stronger for the distinction.

Throughout these exchanges, I constantly had to articulate *why* I disagreed with Claude, which sharpened the argument more than simply accepting the original suggestion would have. The discipline of explaining my reasoning to something that would engage substantively, rather than just [[Notes/sycophancy|nodding along]], was genuinely productive.

This is the part that transfers to other writing, whether it's a paper, a curriculum proposal, or an ethics application you've revised too often to see clearly. Ask for an honest assessment, then argue with it, and pay attention to the places where you can't say why you disagree, because those are usually where the argument needs work.

## Voice as a test of meaning

After the structural revisions, I asked Claude to apply my writing style persona to the draft—a description of my analytical patterns and stylistic habits—to see what the paper sounded like in my register rather than in generic academic prose.

Reading the output, I was asking less "is this correct?" than "does this sound like me?" and, more precisely, "does this say what I mean?" Some transformations landed immediately. The abstract's opening, reframed to lead with the problem AI has exposed rather than a methodological summary, felt right. And the positionality statement's directness captured what I had been trying to say, only more clearly.

Other moves required adjustment. The voice persona emphasises analytical commitment, my tendency to locate general patterns in specific instances. In places, Claude had pushed that commitment too far, taking positions more starkly than the evidence warranted. These moments showed me exactly where confident directness tips into overreach. The back-and-forth also refined the various personas and other [[Essays/documentation-as-infrastructure|structured documentation]] I'm building.

## Why the asymmetry matters

This wasn't a conversation between equals. Claude has no stake in the paper's argument: it has no career or reputation, feels no discomfort when a structural decision is challenged, and won't feel any shame in producing low-value slop.

But collaboration in this context didn't need symmetry, only an exchange that changed the thinking. The paper that emerged is substantially different from what I would have produced alone, and the difference came from the iterative exchange of analysis, challenge, and refinement, which pushed my thinking into territory I hadn't explored before.

The prior beliefs reframing, the decision to drop the acronym, and the distinction between analysis and discussion were not ideas I brought to the process (although I may have got to the same place eventually). The ideas emerged from exploring productive tension between what I wanted to say and what Claude was hearing.

## From architecture to argument

In an earlier post I described the [[Posts/2026-02-11-building-AI-workflow-academics|architecture layer of AI collaboration]]: building structured documentation to make AI-supported workflows more effective. That work follows a try-evaluate-lock cycle where the human contribution is taste and [[Essays/taste-and-judgement|evaluative judgement]] about whether the output matches a vision.

The experience I'm describing here works at a different level, where the question moves from "does this output match my vision?" to "is my vision sound?" When a partner points out that your methodology can't survive the scrutiny you're claiming for it, the judgement you have to make is about whether *you* are right, and the output becomes secondary.

That's what makes this a genuine collaboration, and why I think the quality of the challenge matters more than the quality of the text.

## References

- Glaser, B. G., & Strauss, A. L. (2017). _The discovery of grounded theory: Strategies for qualitative research_. Routledge. https://doi.org/10.4324/9780203793206 (Original work published 1967)
- Hughes, A., & Lamb, D. (2025). Theoretical sensitivity and reflexivity in grounded theory. _Nurse Researcher_, _33_(1), 25–31. https://doi.org/10.7748/nr.2025.e1967
- Rowe, M. (2025). _A theoretical framework for integrating AI into health professions education_. OSF Preprints. https://doi.org/10.31219/osf.io/c764f_v1

[^grounded-theory]: **Grounded theory** is a qualitative research method in which theory is built up from the data, through repeated coding and comparison, instead of being tested against it. It's common in health professions education research, for example in studies of how students learn to reason on placement. See [Wikipedia](https://en.wikipedia.org/wiki/Grounded_theory).

[^positionality]: **Positionality statement**: a short account in a research paper of who the researcher is, what they bring to the work, and how that may have shaped it, so readers can judge the analysis with that in mind. See [Wikipedia](https://en.wikipedia.org/wiki/Positionality_statement).
