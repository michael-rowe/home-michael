---
title: Human cognition and LLM parallels
description: LLM terminology provides unexpectedly precise language for human cognitive constraints we've struggled to describe—revealing that the similarities might be more extensive than professional identity allows us to admit
aliases:
  - LLM human similarities
  - cognitive architecture parallels
type: note
author: "[[Michael Rowe]]"
created: 2025-02-06
updated: 2025-02-06
tags:
  - cognitive-science
  - artificial-intelligence
  - learning-theory
  - human-cognition
category: frameworks
related:
  - "[[2026-02-06-LLM-similarities-human-cognition]]"
---

> [!tip] Why this matters
> Most AI discourse focuses on proving categorical differences between large language models and human cognition. But LLM terminology offers diagnostic precision for learning challenges we've observed in people but often describe in vague terms. A student who "loses track" during long explanations hasn't failed—they've exceeded their context window. A novice struggling with expert discourse isn't unintelligent—they're using different tokenisation. This conceptual framework reveals that many "learning problems" are actually architecture constraints, not student deficits. It also exposes why knowledge workers resist acknowledging AI capabilities so vehemently: these parallels threaten a professional identity that's built on cognitive uniqueness.

## Human cognition and LLM parallels

**One-sentence definition:** A diagnostic framework mapping [[large language models|LLM]] technical concepts (e.g. context windows, tokenisation, temperature, training data, and hallucination) onto corresponding features of human cognitive architecture to reveal structural similarities in how both systems process information and exhibit limitations.

This note isn't trying to argue that humans are literally language models or that AI is truly intelligent. It's using the unfamiliar technical terminology of LLMs to think differently about familiar human cognitive phenomena. The parallels aren't just metaphorical; they describe architectural constraints and processing patterns that educators have always been aware of but may have lacked a precise vocabulary to articulate.

## The cognitive architecture parallels

### Information capacity and processing

**Context windows → Working memory:** Humans have severely limited working memory (4-7 chunks). Like LLMs with finite context windows, we lose track of earlier content, compress information to fit constraints, prioritise recent input. The experience of "wait, what were we talking about?" maps precisely to the idea of exceeding capacity. This explains why lectures that work perfectly on paper overwhelm students; we're exceeding their context window while assuming unlimited capacity.

**Tokenisation → Expertise chunking:** Experts and novices parse identical information differently. Novice piano students process individual notes; experts process chord progressions as single units. Chess masters see meaningful configurations, not individual pieces. This is tokenisation: what counts as a meaningful "chunk" shapes processing efficiency. Jargon isn't decoration; reading "CEO" takes less cognitive effort than "Chief Executive Officer" because we've compressed it into a single unit. When students struggle with technical terminology, they're forced into character-by-character processing rather than efficient chunking.

**The "um" phenomenon → Sequential processing:** "Um" and "uh" expose that we're assembling discrete units sequentially, not thinking in smooth streams. We've run out of cached tokens and need time to generate the next chunk.

**Lossy compression → Memory:** When we summarise or remember, we're re-tokenising; converting details into compressed chunks. "The French Revolution" becomes a single retrievable concept rather than thousands of facts. Memory is lossy token compression, which explains why students struggle to recall specifics while grasping overall concepts.

### Learning and knowledge formation

**Training data → Experiential bias:** Every human being trains on non-representative samples of data: specific cultural context, socioeconomic position, historical moment, geographical location, and so on. We confidently generalise from this narrow training set. The bias critique of LLMs describes exactly how human expertise develops. Educators often mistake universal claims for culturally-specific patterns because our training data feels comprehensive when it's really fragmentary.

**Overfitting → Misapplied expertise:** Humans struggle with novel situations outside our experience, and so we apply familiar patterns inappropriately. We're most confident when we shouldn't be; when we've seen something superficially similar before. Experts can be particularly susceptible: the pattern that worked 100 times gets forced onto case 101 even when key conditions differ. This is why transfer of learning is so difficult; we've overfit to specific contexts.

**Fine-tuning → Professional training:** Medical school doesn't change fundamental reasoning capacity; it fine-tunes application to medical contexts. Trauma doesn't rewire cognition; it fine-tunes response patterns to specific triggers. This explains why professional expertise doesn't easily transfer across domains; fine-tuning is context-specific.

**Emergence → Unexpected capabilities:** Children learning language develop grammar understanding no one explicitly taught them. We solve novel problems by combining knowledge in ways we can't fully explain. LLMs exhibit emergent capabilities too, which challenges educational approaches assuming all learning must be directly instructed.

### Response generation and variation

**Temperature → Cognitive risk modulation:** High-stakes environments (exams, interviews) reduce cognitive randomness, leading to more conservative, predictable, and risk-averse thinking. Creative work requires deliberately increasing temperature: brainstorming, free writing, lateral thinking. We manually adjust our randomness parameter (i.e. temperature) based on context. This reveals why assessment conditions often suppress the very creativity we claim to value; we're forcing students into low temperature contexts when complex thinking requires higher temperature.

**Sampling → Stochastic responses:** We lack single predetermined responses. Ask someone's opinion on different days and you'll get different answers; same question, different sample from possible responses. Mood, context, questioner, and recent experiences all affect which response gets sampled. This challenges assessment practices assuming that consistent performance indicates genuine capability.

**Prompting → Self-directed questioning:** Internal questions shape generated thoughts. "Why is this person annoying?" yields different cognition than "What might they be struggling with?" Same input with a different prompt leading to a different output. Metacognitive strategies are essentially [[prompt engineering]] for human cognition.

### Reliability and accuracy

**Hallucination → Memory construction:** Human memory is unreliable confabulation. We confidently recall events that never occurred, fill in gaps with plausible fabrications, and misremember details with complete certainty. Confidence is indistinguishable from genuine recall. We're storytelling engines constructing coherent narratives from mere fragments where construction feels like *retrieval*, but is really *generation*. This challenges assessment practices that penalise "hallucination" (memory construction) while calling it dishonesty, when it's actually just how human memory functions.

**Pattern matching → Causal reasoning gaps:** Humans excel at finding patterns but struggle to identify which are meaningful. Superstitions, conspiracy theories, and spurious medical beliefs emerge from the same pattern-matching producing genuine insights. Most reasoning is post-hoc rationalisation: we arrive at conclusions through pattern matching, then construct causal stories. Split-brain experiments show confident explanations of unconsciously-made decisions where the "reasoning" might be constructed narrative, not actual decision mechanism.

### Constraints and alignment

**[[system prompt|System prompts]] → Cultural conditioning:** Invisible constraints shape what we consider thinkable or expressible e.g. cultural norms, professional socialisation, and unexamined assumptions. When you feel "I couldn't possibly say that," you're responding to hidden system-level instructions you didn't choose and may not even be able to consciously access. In the context of a critical pedagogy, this even reveals something about how education systems encode particular worldviews as natural constraints on thought.

**The alignment problem → Intention-action gaps:** The AI alignment problem—difficulty getting systems to do what we want rather than what we specified—is a fundamental human problem. We struggle to specify our own objectives. We say we value health but eat poorly. We claim to want long-term outcomes but optimise for short-term rewards. This gap between our stated and revealed preferences is what we mean when we talk about a failire of alignment

*Note: See [[learning-alignment|my essay on learning alignment]] for a deeper exploration of this idea*.

## Where this framework applies

**Learning design:** Reveals why some pedagogical approaches might fail. Overloaded content exceeds context windows. Decontextualised facts don't tokenise efficiently. High-stakes assessment suppresses cognitive temperature. Narrow training data (limited examples) causes overfitting. This reframes remediation from fixing students to redesigning learning environments around actual cognitive architecture rather than idealised assumptions.

**Assessment critique:** Exposes fundamental flaws. Memory-based assessment rewards low hallucination rates, not understanding. Time pressure forces low temperature. Isolated testing ignores system prompts shaping real-world performance. Single-sample assessment doesn't account for stochastic variation. We're testing ideal cognitive architecture we don't actually possess.

**Professional development:** Understanding these parallels helps practitioners recognise cognitive limitations without shame. "I can't remember all the details" isn't a personal failing; it's a context window constraint. "I struggled with that new framework" might be tokenisation mismatch, not inadequacy.

**Organisational AI integration:** In organisations resisting AI adoption, examining which parallels provoke the strongest resistance might reveal what professional identities and power structures are being protected. The nature of the resistance may suggest professional anxiety rather than technical assessment.

## What remains unresolved

The causal direction: do these parallels reveal that LLMs are impressively human-like, or that human cognition is disappointingly machine-like? The answer matters for how we position AI in educational settings; as qualitatively different tool or as a collaborator with similar architecture to human cognition.

Whether "understanding" is categorically different or just another pattern we've learned to recognise remains contested. Which has implications for what counts as genuine learning versus performed competence.

The resistance is revealing. I sometimes wonder if the strongest pushback against these parallels comes from those whose professional identity depends on cognitive uniqueness; knowledge workers, academics, or consultants. The emotional intensity suggests this idea touching on something beyond mere technical disagreement. This might actually be the real story here: not whether the parallels hold technically, but what our defensiveness reveals about how we've constructed professional value and human meaning.

---

## Sources

- Kahneman, D. (2011). *Thinking, fast and slow*
- Wiley, D. (2023). [Stochastic parrots and the humans who love them](https://opencontent.org/blog/archives/7046)
- Gazzaniga, M. S. (2005). Forty-five years of split-brain research and still going strong
- Miller, G. A. (1956). The magical number seven, plus or minus two
