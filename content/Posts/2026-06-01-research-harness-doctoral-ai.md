---
title: What software engineers can teach us about AI in doctoral research
type: post
description: "PhD students are using AI across their doctoral work, but current policies focus on permission rather than specification. Drawing on how software engineers solved a structurally identical problem, this post introduces the research harness: a seven-part operating context that makes AI contributions visible, traceable, and supervisable. The harness addresses drift, offloaded thinking, and attribution failures — not by restricting AI use, but by specifying what the agent can and cannot do within the work."
meta-description: How the engineering concept of an AI agent harness translates to doctoral research — a framework for bounded AI use in PhD inquiry.
keyphrase: AI in doctoral research
author: "[[Michael Rowe]]"
date: 2026-06-01
updated: 2026-06-01
tags:
  - academic-practice
  - research-methods
  - language-model
  - ai-literacy
  - supervision
  - agent
category:
  - Education
  - Scholarship
related:
  - "[[Notes/research-harness]]"
  - "[[Guides/research-harness-guide]]"
  - "[[Essays/research-harness-doctoral-ai]]"
draft: false
enableToc: true
linkedin:
---

> [!info] Your AI policy is governing the wrong thing.
>
> Most current responses to the use of AI in doctoral research try to specify when a student is allowed to use it. That misses where the actual problems are. The patterns we see — drift, offloaded thinking, untraceable contributions — come from working with an AI agent in the absence of an explicit operating context.

PhD students are using AI throughout their doctoral work, mostly hiding it, in an uneasy relationship with their supervisors and institutional regulations. Policies tell students when they may use AI tools and what to declare at the end. None of this gives a supervisor and student a shared object that captures what AI is doing across a doctoral project as it unfolds.

The result is familiar. The work moves faster than the thinking. Contributions become hard to attribute. The project drifts in directions nobody quite remembers choosing. These aren't problems caused by bad students or bad models. They're caused by an absent specification — and software engineers worked out how to handle this kind of problem about three years ago.

## The debate is stuck

The conversation about AI in doctoral research has settled into two camps. One says it's a matter of institutional control: declare your use, follow the policy, attribute correctly. The other says it's a matter of student judgement: develop AI literacy, exercise discretion, uphold academic integrity. Both treat AI use as a question of what should be permitted.

That framing misses where the difficulty actually sits. A researcher who follows every institutional rule and exercises careful judgement can still drift into trouble, because the rules and the judgement operate at the wrong level — either across all students at once, or exchange by exchange. Neither gives the supervisor and the student a shared specification of what AI is doing in this project, across its duration.

That intermediate level is where the patterns appear.

## What ad hoc AI use looks like

The typical pattern is unstructured. A student starts using an AI tool for one task — summarising a paper, polishing an abstract — and the use proves helpful. They start using it for adjacent tasks. Over months, the boundary expands without anyone making an explicit decision. The tool is now contributing to the literature review, the methodology, the analytic codes, the framing of the argument. Each individual use seems modest. The cumulative effect is that AI is part of how the research is being done, but there is no record of how it became part.

Recognisable problems follow.

The work moves faster than the thinking. Doctoral research used to operate on slow loops because thinking takes time. When the friction of slow work is removed, the researcher finds themselves further into their project than their judgement can manage.

The thinking itself gets offloaded. Research is accumulating on this: when an agent produces a competent analytic memo, the researcher who accepts it without doing the interpretive work has offloaded something the doctoral project was supposed to develop in them.

The agent has no project memory. Each session starts from scratch unless the researcher curates context for it. Suggestions feel coherent in the moment but accumulate over time into a trajectory nobody deliberately chose.

The agent agrees too readily. Current models exhibit sycophancy — a well-documented disposition to support the framing of the question they're asked rather than push back. In research, where the discipline of holding interpretations open to disconfirmation is central, this quietly corrodes the work.

Different prompts produce different answers. The cumulative analytic position becomes harder to defend because its parts were produced under inconsistent framings.

Attribution becomes impossible. Weeks later, the researcher can't say which contributions were the agent's and which were their own. The thesis presents a single voice but the development of that voice was distributed in ways the thesis can't represent.

These aren't failures of the model or the student. They're what happens when a capable agent operates without an explicit specification of what it's doing.

## What engineers worked out

Software engineers ran into structurally the same problem when their models became capable enough to write substantial code without continuous human direction. An agent given a vague brief produced confident output that didn't cohere with the system. An agent given the same brief twice produced inconsistent results. An agent asked to validate its own work tended towards optimism. An agent left running for hours ended up far from where the developer asked it to go.

What engineers developed in response was a specification of the operating context within which the agent works. They called it the agent's [[harness-engineering|harness]]. The harness specifies what the agent should attend to, what material it can see, what actions it can take, what it must escalate, and how its work is recorded. It holds the agent in place conceptually — making behaviour predictable enough to be useful and constrained enough to be safe.

The engineering specifics don't transfer to research. But the underlying logic does: when capable agents work without a specified operating context, predictable problems emerge, and the response is to specify the context.

## The research harness, in seven parts

A [[Essays/research-harness-doctoral-ai|research harness]] consists of seven components, each adapted from an engineering equivalent.

The *knowledge base* is the material the agent can see: research question, theoretical framework, methodology, literature, ethics approval, permitted data. The principle is taken straight from engineering: if material isn't in the agent's accessible context, it doesn't exist for the agent.

*Interpretive permissions* govern how the agent reasons. Name the tradition you're working in (the agent inherits substantial norms from this). Add the project-specific rules — what counts as a legitimate inference here, what constitutes overreach. Include an instruction the harness can't do without: the agent offers options, not recommendations, and the researcher records why they chose what they chose.

*Tools* names what the agent is capable of doing (searching literature, reading transcripts, interrogating datasets) at the level of capabilities, not specific products.

*Authority* says what the agent is permitted to do with those capabilities. Three categories: *autonomous* (reversible, inspectable work the researcher will review afterwards), *supervised* (operations the agent begins but must surface before completing), *reserved* (operations the agent never performs: drafting the discussion section, signing off on key findings).

The *scope register* captures off-topic material the agent encounters without acting on it. In research, the off-topic surface is often signal rather than noise — a methodological question raised by a transcript, a different theme glimpsed in passing. The register preserves it for later.

The *process record* is the log of what was asked, what was produced, what was decided, and why. It's the agent's external memory across sessions, and it's the thing that makes contributions traceable. The agent can draft the record under researcher direction; the rationale for decisions stays with the researcher, not the model.

The *amendment protocol* distinguishes one-off exceptions from deliberate changes to the harness itself. Exceptions get recorded and addressed at the time. Amendments revise the specification, with reasoning attached.

## Start with a sentence

The most common objection to this is workload. Specifying all of this sounds like enormous administrative overhead for an already overburdened doctoral process.

It needn't be. The harness is something to think with, not a regulatory document. The first iteration can be a sentence under each component, capturing what the researcher can honestly commit to at this stage of the work. The *authority* component might begin as a single line — *the agent may search and summarise without asking, must flag any drafted analysis before I build on it, and never writes the discussion section* — and grow from there. The structure provides the prompts; the content matures as the work encounters cases the initial version didn't anticipate. Each extension is itself a small piece of supervised doctoral work.

Much of the routine work — process record entries, amendment drafts, exception flags — can be delegated back to the agent under researcher direction. The agent drafts the surface form; the researcher supplies the rationale. The administrative tax goes down; the deliberative friction that makes the record useful stays in place.

The harness itself is a folder of plain markdown files sitting alongside the project's other materials. Anyone who can edit a Word document can maintain one.

## What changes for AI in doctoral research

For supervisors, the harness changes what AI conversations can be about. Instead of "should you be using AI for this?" — a question without a structural answer — the conversation becomes about specific claims: what the interpretive permissions say, what falls into the reserved category, why a particular amendment was made. Familiar work, in an unfamiliar register.

For doctoral programmes, the harness offers a structured object that proposal review, milestone assessment, and viva preparation can engage with substantively. Programmes can require the harness as commitments in the proposal, as updates at progression milestones, or as part of the doctoral record at submission. The choice is the programme's; the framework provides the object.

For institutions, the harness is a different kind of governance object from current policy. Traffic-light schemes and tiered-permission frameworks govern *when* researchers may use AI, on the assumption that some parts of the work can be AI-free. The harness assumes the opposite — that AI will be present across the work — and specifies what the agent can and cannot do within that work.

The shift is from governing researcher access to governing agent operation. This is a different conversation, and a more useful one. The harness doesn't tell anyone whether AI use is permitted. It gives them something to point at when they ask: what is the AI doing here, and why?

That question is going to get asked more often. It's worth having an answer ready.

---

*This post draws on a working paper, "The research harness: a framework for bounded AI use in doctoral inquiry," currently in development.*
