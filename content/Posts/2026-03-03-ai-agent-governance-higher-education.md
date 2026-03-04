---
title: "AI agent governance in higher education: Building the institutional harness"
type: post
enableToc: true
description: "The previous posts described what makes agentic workflows coherent at the individual level: a plan, documentation as infrastructure, and domain expertise that can evaluate outputs. Together, these form an informal harness; the conditions within which delegation stays accountable. At institutional scale, a personal harness is not enough: multiple people directing agents without shared constraints produce compounding drift that no amount of human oversight can track. This post examines what AI agent governance in higher education actually requires, and why a harness, not better oversight, may be the right frame."
meta-description: AI agent governance in higher education requires a harness, not just oversight. What that means for institutions deploying agentic workflows.
keyphrase: AI agent governance in higher education
author: "[[Michael Rowe]]"
date: 2026-03-03
updated: 2026-03-03
draft: false
tags:
  - agent
  - generative-ai
  - context-engineering
  - information-management
  - academic-practice
category:
  - Technology
slug: posts/ai-agent-governance-higher-education
aliases:
  - posts/what-happens-when-agent-first-workflows-scale
---

> [!info] Scaling agentic workflows requires an institutional harness, not better oversight
> The previous posts described what makes agent-first workflows coherent for an individual: a plan, documentation treated as infrastructure, and domain expertise that can evaluate outputs. Together, these function as a personal harness — the conditions within which delegation stays accountable. At institutional scale, you can't rely on everyone building their own; the harness needs to be built deliberately, as architecture.

The [[2026-03-01-working-effectively-with-ai-agents|previous post]] laid out what [[agentic workflows]] actually require: a plan before handoff, documentation treated as infrastructure, and domain expertise that can evaluate what agents produce. Together, those conditions form an informal harness; the architecture within which delegation stays coherent and outputs remain accountable. This post asks what AI agent governance in higher education actually requires when it scales — when it isn't one person maintaining that harness carefully, but hundreds of people across an institution, each directing agents with different assumptions, different standards, different models, working from documentation that was never built with agents in mind.

The answer isn't that the individual problems simply multiply. New problems emerge.

## The coordination failure

At the individual level, a documentation gap produces a recoverable failure. You hand off a half-formed brief; you receive a generic output; you fix it by being more deliberate next time. Not a big problem because the failure is contained.

At institutional scale, the same gap produces [[context drift|compounding drift]]. Multiple people directing multiple agents with inconsistent source material don't just produce inconsistent outputs. They produce inconsistent outputs faster than any human oversight process can track, where each one is a small departure from the last that looked defensible in the moment. No individual made a bad decision; in specific cases, each person may even be making a locally optimal one. The problem is systemic: the property of the architecture, not of any individual's judgement.

The closest analogy I can think of is a financial markets flash crash. In algorithmic trading, individually rational decisions made by autonomous systems at speed can cascade into outcomes that no single actor intended and no human oversight can catch in time. The 2010 Flash Crash erased nearly a trillion dollars of market value in minutes; the cause was distributed autonomous decision-making without sufficient structural constraints to prevent cascading failure. [[Agentic workflows]] at institutional scale carry similar structural risks. The failure mode isn't one bad decision; it's the compounding of many defensible decisions in the absence of a coherent governing architecture.

A second problem sits alongside this one, and is less discussed: the speed mismatch. Institutional governance has always operated at human pace: committees, consultation periods, approval chains, validation panels. These processes exist for good reasons; they distribute judgement, catch errors, and build shared understanding. But agents operate at software pace. Decisions that previously took weeks to work through institutional processes can now be initiated, iterated, and acted upon in minutes. The governance infrastructure was not designed for this and I don't believe that many institutions are thinking about it.

## The limits of 'human in the loop'

The phrase has become a standard reassurance in conversations about AI risk; a way of signalling that automation won't simply replace human judgement. But it is almost always left undefined, and the image most people carry when they hear it is relatively straightforward: a human reviews each significant output before it is acted upon. That model makes sense when outputs are few, slow-moving, and within a single domain of expertise. It breaks down quickly when none of those conditions hold.

Consider what "human in the loop" actually means in a scaled agentic environment. The human may be coordinating with an orchestrator agent — itself managing a team of specialised sub-agents — where what the human contributes is direction at a high level of abstraction: goals, constraints, priorities, and judgement calls that agents escalate because they fall outside defined parameters. Not because the agent cannot make those decisions, but because we've deliberately constrained what decisions we allow it to make. The individual outputs of agents working beneath that layer may never be seen by a human directly. This is not a failure of oversight. It's what the architecture is designed to do.

Here's a concrete illustration. Imagine you're on a five-hour road trip and someone asks you to evaluate every decision the navigation algorithm makes; the live traffic data, the historical patterns, the incident reports it is drawing on. It would be functionally impossible to do this. By the time you'd evaluated one decision, the conditions it was based on would have changed. We've already reached a point where we simply trust that the algorithm has produced a good enough route, and act on it. The same transition is coming for agent outputs in knowledge work, and in some contexts is already here.

But it raises questions that current thinking about AI governance in education has not seriously engaged with.

- At what level of abstraction should a human be in the loop, and how does that level shift as the scale and complexity of agent activity increase?
- What does a human meaningfully contribute when the volume of agent outputs exceeds what any individual can read, let alone evaluate?
- What happens when agents are making decisions across such a range of domains that no single person has the expertise to assess even a representative sample?
- Who is responsible when the cumulative drift from a series of individually approved decisions produces an outcome nobody intended?

These are not hypothetical concerns for a distant future. They are design questions for institutions deploying agentic workflows now, and the assumption that a human reviewing outputs is a sufficient answer to them is wrong for a wide range of real-world contexts.

## The institutional harness

The previous post named the failure mode at the individual level as the equivalent of [[vibe-coding]]: generating fluent outputs without genuine direction or accountability for what they contain. An institution that deploys agentic workflows without a harness is running the same failure at scale.

The software development world has started working out what a structural response looks like. OpenAI published a detailed account in their "[Harness Engineering](https://openai.com/index/harness-engineering/)" piece last month: a harness is the full architecture that wraps around agent activity to keep it coherent, constrained, and recoverable. It encompasses structured documentation that agents can reason with, architectural constraints that define what agents are permitted to do, feedback loops that surface failures before they compound, and what they call "garbage collection"; agents that run periodically to identify inconsistencies and correct them before they propagate.

The key move is treating the harness as the primary engineering problem, not the model. The model is the engine. The harness is everything that makes the engine usable at scale.

Institutions need an equivalent and it amounts to more than better documentation, though that is part of it. Computable governance is the institutional version of a harness: the full architecture that keeps agent-directed work coherent, values-aligned, and recoverable across an organisation. A distinction: *computational* governance would describe governance *performed* by computation; computable governance describes governance *structured so that it can be computed against*; it's a property of the architecture, not a description of who does the governing.

Translating the individual prerequisites into institutional architecture means three things:

1. Institutional documentation (e.g. module specifications, curriculum frameworks, quality standards) is structured so that agents can query it for internal consistency, cross-reference it against other documents, and use it as reliable working context rather than reference material designed to be read once and interpreted by a professional.
2. Constraints on what agent-directed workflows are permitted to do without human escalation, defined in advance rather than discovered through failure.
3. Governance processes that operate at something closer to agent speed, not by removing deliberation, but by doing the deliberative work upstream, in the architecture, rather than requiring it to happen at every decision-point downstream.

The same argument extends to the regulatory layer. The NMC, HCPC, and GMC produce standards documents that shape curriculum design, assessment, and professional practice across entire sectors of health professions education. All of them are currently static PDFs, designed to be read by professionals and interpreted through validation panels and committee processes.

A curriculum team that could validate a draft module against the NMC Standards of Proficiency as a working check, built into the workflow rather than conducted manually before a panel, would be operating in a genuinely different environment. The institutional equivalent of a harness for professional education would need to encode regulatory standards in a form that agents can reason against, not merely retrieve. That is a provocation rather than a proposal; the governance challenges are real. But it illustrates what computable governance could mean at the scale of an entire professional sector.

---

The institutions that navigate agentic workflows well will not be those that adopt AI most extensively. They will be the ones that invest in building the architectural conditions that make agent-directed work coherent, values-aligned, and recoverable when it goes wrong. That means treating governance as infrastructure rather than oversight, and building institutional direction that is specific enough to constrain outputs rather than merely describe intentions.

That work is not glamorous. It means auditing documentation that's been allowed to drift, making implicit institutional knowledge explicit, structuring information so that it actively shapes downstream work, and designing escalation paths for decisions that agents should not make alone. It is governance work, not technology work, and it should not be delegated to a technology team — not because technologists lack the capability, but because the domain knowledge required to make these judgements explicit is held by the people who do the work: curriculum teams, quality assurance leads, and programme directors.

The question for institutional leaders is not "what AI tools should we adopt?" It is "do we have an architecture capable of directing what we're asking agents to do?" Most institutions, if they are honest about it, do not. Building one is the work.
