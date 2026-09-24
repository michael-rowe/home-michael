---
type: note
title: AI agents
aliases:
  - AI agent
description: An AI agent is a system that autonomously executes multi-step tasks using language model reasoning — distinct from an AI assistant, which responds to individual prompts. Agents plan, act, observe results, and adapt, using tools such as file access, code execution, and web search. They perform best when given clear goals, explicit constraints, and well-prepared context.
author: "[[Michael Rowe]]"
created: 2026-02-27
updated: 2026-09-24
draft: false
keyphrase: AI agent vs AI assistant
meta-description: AI agent vs AI assistant: an assistant answers one prompt at a time; an agent plans, uses tools, and works toward a goal over many steps.
category:
  - Technology
tags:
  - agent
  - language-model
  - ai-integration
related:
  - "[[Notes/agentic workflows]]"
  - "[[Notes/context engineering]]"
  - "[[Notes/context window]]"
  - "[[Notes/context drift]]"
  - "[[Notes/harness-engineering]]"
  - "[[Notes/Claude Code]]"
  - "[[Posts/2026-02-26-ai-agents-academic-workflow]]"
reviewed:
  - note_writer
  - writing_style
  - SEO_optimiser
  - copy_editor
linkedin:
---

> [!info] An AI agent acts on the world; an AI assistant responds to prompts
> An AI agent takes a goal and works toward it autonomously — reading files, running code, querying data — without requiring human input at each step. That autonomy is what makes agents useful for knowledge work, and it's what makes the quality of the direction you give them so consequential.

## AI agents

**One-sentence definition:** An AI agent is a system that uses language model reasoning to autonomously plan and execute a sequence of actions toward a specified goal, using external tools to interact with files, code, and data.

The key distinction from an AI assistant (a chatbot, a writing co-pilot) is the unit of interaction. An assistant operates turn by turn: prompt in, response out. An agent operates over time: given a goal, it breaks the task into steps, executes each using available tools, observes the result, and adapts before continuing. The interaction is supervisory rather than conversational.

### How they work

Agents cycle through a loop:

1. **Perceive**: read the task, available context, and any prior results
2. **Plan**: identify the next action or sequence of actions
3. **Act**: use a tool to write a file, run code, query a database, or search the web
4. **Observe**: check the result and update understanding of the task state
5. **Repeat**: until the goal is reached or human intervention is needed

What an agent can do depends on the tools it's been given: one with file access, the ability to run code, and a browser can do far more than one that can only generate text.

A programme lead checking this year's placement handbooks against the regulator's revised standards of proficiency shows the loop at work. The agent reads the request and the standards, decides to work through the handbooks one at a time and keep a running table, opens the first and searches it for each standard, and notices when a handbook words a standard differently enough that a literal search misses it, so it widens the search and carries on. An assistant would have answered a question about one handbook; the agent comes back with the table. Whether a handbook that paraphrases a standard actually meets it is still the programme lead's call.

### Four limits, and which one binds

- **Direction quality**: output is bounded by how clearly the goal, constraints, and success criteria were specified at the outset; vague direction produces generic results
- **Context window**: long or complex tasks risk the agent losing coherence across earlier decisions (see [[Notes/context window|context window]] and [[Notes/context drift|context drift]])
- **Attentional bandwidth**: people can effectively supervise a limited number of agents simultaneously before oversight becomes fragile
- **Hallucination risk**:[^hallucination] agents can make plausible but incorrect decisions, particularly when operating in underspecified territory

In practice it's the third that binds. How far agent-first working can go depends mostly on how much the person directing it can hold in mind at once, which [[Notes/agentic workflows|agentic workflows]] takes up in more detail.

### How much the specification decides

A well-directed agent can apply a formatting standard across forty documents, cross-reference a set of notes against a bibliography for consistency, or restructure a piece of writing to match an explicit brief: well-defined tasks that would otherwise take a person several hours. What the agent is given to work from matters as much. Yang et al. (2026) built an agent for evidence-based nursing education on the content of a standard course textbook, working through a loop of retrieval, reflection, and decision, and it scored significantly higher than three general-purpose models on 124 standardised exam questions; the authors credit its alignment with the curriculum.

[^hallucination]: **Hallucination**: a language model producing something that reads as fluent and confident but is false, such as a reference that doesn't exist or a policy it has misremembered. An agent that hallucinates can go on to act on the mistake, which is why its output needs checking. [Wikipedia](https://en.wikipedia.org/wiki/Hallucination_(artificial_intelligence))

---

## Sources

- Yang, S., Shi, M., Qian, Y., Hu, T., Huang, Z., Wang, S., & Zhu, Z. (2026). A large language model-powered reflective AI agent for evidence-based nursing education: Design and evaluation. *Nurse Education in Practice*, *91*, Article 104710. https://doi.org/10.1016/j.nepr.2026.104710

---

## Notes

The distinction between agents and assistants maps onto the execution/direction distinction described in [[Posts/2026-02-26-ai-agents-academic-workflow|AI agents for academic workflow]]: delegating to an agent shifts the human contribution from execution to direction. See also [[Notes/context engineering|context engineering]].
