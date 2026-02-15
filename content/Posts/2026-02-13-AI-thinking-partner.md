---
title: "The quality of the challenge: AI as a thinking partner"
type: post
description: Most discussions of AI in writing focus on output. This post describes a different experience—using AI as a thinking partner to challenge my choices and claims during a writing session.
meta-description: What using AI as a thinking partner looks like when the collaboration is intellectual rather than operational; thinking through arguments, not just producing text.
keyphrase: AI thinking partner
author: "[[Michael Rowe]]"
date: 2026-02-13
updated: 2026-02-14
tags:
  - AI-integration
  - academic-writing
  - emergent-scholarship
  - evaluative-judgement
category:
  - AI and technology
related:
  - "[[taste-and-judgement]]"
  - "[[ai-hpe-theoretical-framework]]"
  - "[[2026-02-11-building-AI-collaboration-workflow]]"
draft: false
slug: posts/ai-thinking-partner
enableToc: true
---

> [!info] The most valuable AI contribution was the quality of the challenge
> The most valuable thing AI did during this writing process wasn't producing text. It was asking questions I hadn't thought to ask myself, and being wrong in ways that clarified what I actually meant. Using AI as a thinking partner isn't about getting it to agree with you; it's about exploring disagreement and tension in productive ways.

Most discussions of AI in writing focus on output. Can it draft a paragraph? Summarise a paper? Generate a first version? These are reasonable questions, but they leave a harder problem untouched.

The harder problem is the thinking that precedes writing — and particularly the blind spots that accumulate when you've worked on something long enough to stop seeing it clearly. Over the past year, I've been revising a [[ai-hpe-theoretical-framework|theoretical framework for integrating AI into health professions education]], drawing on four learning theories and a structured conceptual analysis. I had an [early preprint](https://osf.io/preprints/osf/c764f_v1) but knew it needed serious revision before journal submission. The problem was I could no longer see its weaknesses.

This post describes what happened when I used Claude to address that problem — not to produce text, but to challenge positions, surface contradictions, and push the argument further than I could reach alone. What followed wasn't a writing exercise. It was a thinking exercise, and it changed the paper in ways I hadn't anticipated.

## Why critique matters more than generation

I started by asking Claude for an honest assessment of the draft using a fairly basic prompt. It responded as a good colleague would: pinpointing what worked and what didn't with enough specificity to be useful.


> [!prompt] Prompt
> I've uploaded a draft article that I'd like to get ready for submitting for publication. I want you to analyse the draft and let me know your thoughts. We might want to split the analysis into two; 1) the paper itself and it's premise, and 2) the data analysis where the data are the learning theories.

Some of the feedback confirmed existing suspicions. The methodology section claimed to be "thematic synthesis" when it was actually a structured conceptual analysis (a distinction that would matter for peer review). The theoretical foundations were thorough but too long for the work they were doing; an academic audience doesn't need extended summaries of Vygotsky or Freire.

Other feedback surfaced problems I had missed. The paper was originally structured around an acronym—ACADEMIC—built from seven principles. Claude was surprisingly direct: two of the seven principles felt forced; in its words, "pulled into existence to complete the acronym" rather than emerging from the analysis. It identified five strong convergences across the theories and two that were merely implications.

> [!response] Claude
> I'll be direct: the acronym feels forced. The "IC" standing for "Interprofessional Communities" is a stretch, and readers will notice. More substantively, acronyms in frameworks tend to signal a certain kind of paper — the prescriptive, "here are your seven steps" genre — which sits awkwardly alongside the theoretical sophistication of the analysis.

This felt uncomfortable because it was obviously true. I had been talked into the acronym by the increasing tendency to "brand" academic output. Letting go of the acronym freed the principles to be what they actually were, rather than trying to fit them into an unnatural container.

## Prior knowledge as a methodological strength

The most productive exchange addressed a quiet concern: what I'd described to Claude as the problem of prior beliefs. The paper analyses four learning theories to identify themes, which then become design principles. But over my fifteen years of experience teaching and researching technology in professional education, I'd developed a strong sense of what "good" technology-enhanced education looks like. I was worried that I'd simply driven the results toward conclusions I had already reached.

When I raised this, Claude reframed it. What I was describing wasn't a methodological flaw but *[theoretical sensitivity](https://pubmed.ncbi.nlm.nih.gov/39262150/)*, a concept from grounded theory. Deep domain knowledge is what enables a researcher to recognise meaningful patterns rather than superficial ones and is a *[feature, not a bug](https://en.wikipedia.org/wiki/Bug_(engineering)#%22It's_not_a_bug,_it's_a_feature%22)*. It's only a problem if you pretend the analysis was purely inductive when it was actually shaped by informed judgement. The solution wasn't to hide my prior beliefs or pretend they didn't exist, but to own them through a positionality statement (excerpt below) that acknowledges my personal commitments, explains how they shaped the analysis, and lets the reader evaluate accordingly.

> I should be direct about what I brought to this analysis. Fifteen years of teaching and researching the use of technology in professional education has left me with commitments about what effective technology-enhanced learning looks like. In qualitative research terms, this is theoretical sensitivity (Glaser & Strauss, 1967) — the capacity to recognise meaningful patterns because you have deep domain knowledge.

This reframing changed how I understood the work. I went from seeing my experience as something to apologise for, to recognising it as the reason the analysis had any credibility. That shift came from the exchange with Claude, rather than from something I would have reached alone.

## Sharpening arguments through pushback

Not every suggestion was right, and the moments where I pushed back were as productive as the moments where I agreed.

For example, Claude recommended reducing the principles from seven to five for the sake of parsimony. On two principles—emergent curriculum design and interprofessional community knowledge building—I agreed. The first was downstream of other principles; the second was forced to fit "interprofessional" when the analysis pointed to something broader.

But I wanted to keep a principle around *networked knowledge building* — the idea that the most important problems we face are wicked problems requiring collaboration across disciplinary and epistemological boundaries, and that AI agents are now part of those networks.

> [!prompt] Prompt
> I would like to see if we can work networked knowledge building into the final output and the reason is that I think the most important problems of today (and of the future) are "wicked problems", and that those kinds of problems will require networked knowledge building - where AI agents are part of the network. However, I recognise that "what I believe the future needs" is not the same thing as "this emerged from the analysis of the theories". what do you think?

Claude's response was useful: while the theoretical support was genuine, the *wicked problems* framing worked better as a discussion-level argument than as an emergent finding. I kept the principle but repositioned the justification, and the paper is stronger for the distinction.

Throughout these exchanges, I had to articulate *why* I disagreed, which sharpened the argument more than simply accepting the original suggestion would have. The discipline of explaining my reasoning to something that would engage substantively, rather than just nodding, was genuinely productive.

## Voice as a test of meaning

After the structural revisions, I asked Claude to apply my writing style persona to the draft — a description of my analytical patterns and stylistic habits — to see what the paper sounded like in my register rather than in generic academic prose.

Reading the output, I wasn't asking "is this correct?" but "does this sound like me?" — and, more precisely, "does this say what I mean?" Some transformations landed immediately. The abstract's opening, reframed to lead with the problem AI has exposed rather than a methodological summary, felt right. And the positionality statement's directness captured what I had been trying to say, only more clearly.

Other moves required adjustment. The voice persona emphasises analytical commitment — my tendency to locate general patterns in specific instances. In places, Claude had pushed that commitment too far, taking positions more starkly than the evidence warranted. These moments were informative and showed me the line between confident directness and the overreach I needed to avoid. The back-and-forth also refined the various personas and other [[documentation-as-infrastructure|structured documentation]] I'm building. That Claude could overreach without embarrassment points to something important about why this kind of collaboration works at all.

## Why the asymmetry matters

This was not a conversation between equals. Claude has no stakes in the paper's argument. It has no career, no reputation, and no discomfort when a structural decision is challenged. Claude will not feel any shame in [[2026-01-29-AI-and-evaluative-judgement|creating low-value slop]]. The asymmetry is real.

But collaboration in this context didn't require symmetry. It required that the exchange change the thinking. The paper that emerged is substantially different from what I would have produced alone, not because Claude wrote better prose, but because the iterative exchange of analysis, challenge, and refinement pushed my thinking into territory I had not explored.

The prior beliefs reframing, the decision to drop the acronym, and the distinction between analysis and discussion were not ideas I brought to the process. They emerged from it.

## From architecture to argument

My [[2026-02-11-building-AI-collaboration-workflow|earlier post]] described the architecture layer of AI collaboration — building structured documentation to make AI-supported workflows more effective. That work follows a try-evaluate-lock cycle where the human contribution is taste and [[taste-and-judgement|evaluative judgement]] about whether the output matches a vision.

The experience I'm describing here operates at a different level. The question isn't "does this output match my vision?" but "is my vision sound?" When your analytical positions are challenged—when a partner points out that your methodology cannot survive the scrutiny you are claiming for it—the judgement required isn't whether the output is right. It is whether *you* are right.

That is what makes this a genuine collaboration: not the quality of the text, but the quality of the challenge.
