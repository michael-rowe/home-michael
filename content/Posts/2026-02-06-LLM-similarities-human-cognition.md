---
title: 'Similarities between AI and human thinking: What if we''re the language models?'
type: post
description: >-
  Discussion of AI and human cognition usually dwells on the differences. Turn
  the question around and the terminology of language models describes human
  thinking surprisingly well: context windows, biased training data,
  tokenisation, temperature, hallucination, system prompts, and pattern
  matching all have human counterparts, some of which health professions
  education already has names for. The similarities say something about our own
  cognitive architecture, and the strength of our resistance to them says
  something about what our professional identities depend on.
meta-description: >-
  Context windows, hallucination, system prompts: the similarities between AI and human thinking run deeper than we admit, and so does our resistance.
keyphrase: similarities between AI and human thinking
author: '[[Michael Rowe]]'
date: 2026-02-06
updated: 2026-10-01
tags:
  - cognitive-science
  - cognition
  - professional-identity
  - ai-integration
  - language-model
category:
  - Technology
related:
  - '[[Notes/context engineering]]'
  - '[[Notes/large language models]]'
draft: false
aliases:
  - posts/ai-human-cognition-similarities
  - Notes/human cognition and LLM parallels
  - LLM human similarities
  - cognitive architecture parallels
enableToc: true
linkedin:
reviewed:
  - blog_writer
  - writing_style
  - SEO_optimiser
  - copy_editor
---
> [!info] Human cognition has the same limitations we criticise in LLMs
> The parallels between LLM cognition and human thinking are more extensive than we'd like to admit, and the strength of our denials might tell us more about human psychology than any technical specification ever could.

Discussion of AI and human cognition has settled into a familiar pattern. Academics, technologists, and knowledge workers are quick to explain why [[large language models|LLMs]] are fundamentally different from human thinking. [They don't really learn](https://theconversation.com/ai-doesnt-really-learn-and-knowing-why-will-help-you-use-it-more-responsibly-250923), we insist (Riemer & Peter, 2025). Or they [don't understand the world](https://news.harvard.edu/gazette/story/2025/07/does-ai-understand/) (Boles, 2025). Or it's all statistical correlation without reasoning (Bender et al., 2021). The subtext is clear: whatever these systems are doing, it's categorically different from what happens in human minds.

I'm not trying to disprove those claims, or to deny that the differences matter. I want to turn the question around, and use the terminology of language models to look at the similarities between AI and human thinking. I don't think human brains literally work like language models, but the similarities are worth looking at for what they reveal about our own cognitive architecture, and for why we're so invested in denying that they exist.

## Context windows and the limits of working memory

LLMs have [[Notes/context window|context windows]]: a finite amount of text they can attend to when generating responses. If we extend the conversation for too long they lose track of earlier content, prioritising recent information over older context.

Humans do this constantly. We forget earlier parts of conversations, lose the thread in long discussions, and ask "wait, what were we talking about?" when someone circles back to a point from twenty minutes ago. Working memory is limited, so we run out of space to hold all the relevant context, and we compress, discard, and prioritise recent information. The experience of cognitive overload in a complex discussion maps closely onto context window limitations.

## Training data and the narrowness of experience

LLMs are also criticised for bias in their training data. They reflect the patterns, prejudices, and blind spots present in the text they learned from. And they generalise confidently from non-representative samples.

This also describes most human expertise. Each of us is trained on wildly non-representative samples of human experience: specific family structure, cultural context, historical moment, socioeconomic position, geographical location, and so on. From this narrow training set, we confidently generalise to make claims about "how people are" or "how the world works". The bias critique of LLMs is just a precise description of how humans have always come to know things. Objective training data doesn't exist, only whatever fragments of experience we happened to encounter.

## Tokenisation and the structure of expertise

LLMs process language by breaking it into [[Notes/token|tokens]], which are meaningful chunks rather than individual characters. What counts as a 'chunk' shapes how efficiently the model can process information.

Humans chunk too, and your level of expertise changes your tokeniser. A novice piano student sees individual notes on a page; an expert sees chord progressions and phrases as single perceptual units. Chess masters famously perceive board positions as meaningful configurations rather than individual piece placements (Chase & Simon, 1973). Clinical reasoning research describes the same shift: an experienced clinician recognises a presentation as an illness script, a whole pattern of onset, risk factors and findings, where a student is still working through the history one finding at a time (Schmidt et al., 1990).

Jargon works the same way: for domain experts, it's a more efficient tokenisation. Reading 'CEO' consumes less cognitive effort than processing 'Chief Executive Officer' because we've compressed it into a single retrievable unit. When you encounter unfamiliar technical terminology, you're forced to process it more granularly — letter by letter or syllable by syllable — which is why jargon is harder to process for outsiders. And different domains use different tokenisers, carving up conceptual space in distinct ways.

## Temperature and the pressure to play it safe

LLMs have a 'temperature' parameter that controls randomness in their outputs. *Low temperature* produces conservative, predictable responses, while *high temperature* introduces more variation and creativity, at the cost of occasional incoherence.

Human cognition exhibits the same dynamic. People in high-stakes settings, such as an OSCE station, a job interview, or a formal presentation, lower their cognitive 'temperature'. We become more conservative, more predictable, more risk-averse in our thinking, and we stick to safe, well-rehearsed responses.

And more creative work requires us to increase randomness. Brainstorming sessions, experimental art, and theoretical speculation all involve consciously loosening cognitive constraints, allowing more unusual combinations and associations. We even have techniques for this: free writing, lateral thinking exercises, and deliberately looking for strange analogies. We're just manually adjusting our temperature parameter.

## Hallucination is a feature of memory

LLMs '[[Notes/hallucination|hallucinate]]' by generating plausible-sounding information that isn't actually true, filling gaps in their knowledge with convincing fabrications.

Human memory works in much the same way. We're all notoriously unreliable witnesses, confidently recalling events that never happened, filling gaps with plausible details, all the while completely unaware we're [confabulating](https://en.wikipedia.org/wiki/Confabulation). We misremember who said what, when things happened, and what was in a scene, and we do it all the time. And the confidence with which we recall these fabricated details is indistinguishable from genuine memory.

## System prompts we can't access

LLMs operate under [[system prompt|system prompts]]: invisible instructions that shape their responses without appearing in the conversation. These hidden constraints determine what they consider appropriate to say.

Humans have these too: cultural norms, professional conditioning, childhood socialisation, unexamined assumptions about what's acceptable to express. When you think "I couldn't possibly say that" in response to a thought, you're often responding to hidden system-level constraints you didn't consciously choose and may not even be aware of.

Health professions education already has a name for this: the hidden curriculum, the lessons about what a good doctor or nurse says and does that students absorb from placement culture rather than from anything written in the programme handbook (Hafferty & Franks, 1994). These invisible instructions shape what we think is thinkable, sayable, and appropriate, and we can't view or modify them directly.

## Pattern matching first, reasons afterwards

A common critique: LLMs are 'just' pattern matchers. They identify statistical regularities without genuine causal understanding, confusing correlation with causation.

Most human reasoning works this way too. We arrive at conclusions through pattern matching and then construct causal stories to explain them afterwards. [Split-brain experiments](https://www.nature.com/articles/483260a)[^split-brain] show people confidently explaining decisions they didn't consciously make (Wolman, 2012). Superstition, conspiracy theories, spurious medical beliefs, and false historical narratives all emerge from the same pattern-matching capabilities that produce genuine insights.

## Why we resist the similarities between AI and human thinking

If the similarities are this extensive, why do we resist them so fiercely, and insist that LLMs are fundamentally, categorically different? I can think of three reasons, each more uncomfortable than the last.

**Maybe we don't 'really understand' either.** When we insist LLMs lack true understanding, we're assuming we possess it. But if you push someone to define what understanding actually is (beyond appeals to subjective feeling or consciousness), many will struggle. We can't clearly articulate the difference between our pattern matching and the pattern matching of language models. The understanding we claim to have might just be another pattern we've learned to recognise, rather than a categorically different phenomenon.

**Maybe our expertise is less special than we thought.** If LLMs can perform cognitive work previously reserved for trained professionals (e.g. writing, analysis, synthesis, or problem-solving), what unique value do knowledge workers provide? In my experience, the resistance to AI is strongest among those whose professional identity depends on cognitive uniqueness, so when someone tells me that "AI will never replace X", I tend to hear "my professional identity requires that AI not replace X".

**Maybe cognitive uniqueness was never a stable foundation for human moral status.** We've used our supposedly special intelligence to justify everything from environmental exploitation to our treatment of other species. If intelligence isn't the clean categorical boundary we thought, the entire edifice starts to wobble.

The dismissive framing gives some of this away. David Wiley (2025) [points out](https://opencontent.org/blog/ai-models-dont-understand-they-just-predict/) that saying models "just do prediction" ignores how closely prediction and understanding are tied: when a student predicts the outcome correctly, again and again, we accept that as evidence they understand, and we give them a diploma for it. For a while, people used the phrase "[stochastic parrot](https://en.wikipedia.org/wiki/Stochastic_parrot)" in the same dismissive way.

## A familiar deflation

This isn't the first time human exceptionalism has been challenged. Copernicus moved us away from the cosmic centre. Darwin revealed we weren't specially created. Freud argued we weren't even in conscious control of our own minds. Each of these deflations met fierce, emotional resistance, and the strength of it had more to do with the psychological stakes than with the evidence.

This LLM moment might be another step in that trajectory. The systems don't need to be conscious, or intelligent in some special sense, to show that many of the capabilities we thought required consciousness can emerge from 'mere' pattern matching and statistical correlation.

We're pattern-matching, probability-distributing, context-dependent generators of plausible outputs. We've just had millions of years to optimise the architecture and we're running on remarkably efficient biological hardware.

This doesn't diminish human value unless we predicated that value entirely on cognitive uniqueness. But it does suggest we might need better foundations for what makes humans morally considerable. Relationality, perhaps? Vulnerability or the capacity to suffer? Our embeddedness in communities and ecosystems? These might all be sturdier grounds than raw intelligence for the question of why we matter.

For anyone leading AI integration in a programme or an institution, this matters in practice. Those who can sit with the discomfort of similarity will better understand how to deploy these tools effectively, how to support people through transition, and where genuine [[taste-and-judgement|human judgement]] remains essential. Those who remain invested in proving fundamental differences between humans and large language models will miss strategic opportunities because they're defending professional identity rather than assessing capability.

The more useful question is whether we've been thinking like AI all along, and what becomes possible when we stop defending ourselves against that recognition.

## References

- Bender, E. M., et al. (2021). On the dangers of stochastic parrots: Can language models be too big? In *Proceedings of the 2021 ACM Conference on Fairness, Accountability, and Transparency* (pp. 610–623). Association for Computing Machinery. https://doi.org/10.1145/3442188.3445922 ([[Bender-et-al-2021-on-the-dangers-of-stochastic-parrots|Annotation]])
- Boles, S. (2025, July 16). *Does AI understand?* The Harvard Gazette. https://news.harvard.edu/gazette/story/2025/07/does-ai-understand/
- Chase, W. G., & Simon, H. A. (1973). Perception in chess. *Cognitive Psychology*, *4*(1), 55–81. https://doi.org/10.1016/0010-0285(73)90004-2
- Hafferty, F. W., & Franks, R. (1994). The hidden curriculum, ethics teaching, and the structure of medical education. *Academic Medicine*, *69*(11), 861–871. https://doi.org/10.1097/00001888-199411000-00001
- Riemer, K., & Peter, S. (2025, March 6). *AI doesn't really 'learn' – and knowing why will help you use it more responsibly*. The Conversation. https://doi.org/10.64628/aa.we96s45cj
- Schmidt, H. G., Norman, G. R., & Boshuizen, H. P. A. (1990). A cognitive perspective on medical expertise. *Academic Medicine*, *65*(10), 611–621. https://doi.org/10.1097/00001888-199010000-00001
- Wiley, D. (2025, July 9). *"AI models don't understand, they just predict"*. Improving Learning. https://opencontent.org/blog/ai-models-dont-understand-they-just-predict/
- Wolman, D. (2012). The split brain: A tale of two halves. *Nature*, *483*(7389), 260–263. https://doi.org/10.1038/483260a

[^split-brain]: **Split-brain** patients have had the corpus callosum, the band of fibres joining the brain's two hemispheres, cut to treat severe epilepsy. When the non-verbal right hemisphere is shown an instruction and acts on it, the verbal left hemisphere, which never saw the instruction, readily invents a reason for the action. [Wikipedia](https://en.wikipedia.org/wiki/Split-brain)
