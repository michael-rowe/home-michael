---
type: note
title: "AI agents"
description: "An AI agent is a system that autonomously executes multi-step tasks using language model reasoning — distinct from an AI assistant, which responds to individual prompts. Agents plan, act, observe results, and adapt, using tools such as file access, code execution, and web search. They perform best when given clear goals, explicit constraints, and well-prepared context."
author: "[[Michael Rowe]]"
created: 2026-02-27
updated: 2026-02-27
status: draft
draft: false
keyphrase: "how AI agents work"
slug: notes/ai-agents
category: Technology
tags:
  - agent
  - language-model
  - ai-integration
related:
  - "[[agent-first-workflows]]"
  - "[[context-engineering]]"
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
3. **Act**: use a tool: write a file, execute code, query a database, search the web
4. **Observe**: check the result and update understanding of the task state
5. **Repeat**: until the goal is reached or human intervention is needed

The tools an agent has access to define its effective capability. An agent with file access, a code interpreter, and a browser can do substantially more than one limited to generating text.

### Known limitations

- **Direction quality**: output is bounded by how clearly the goal, constraints, and success criteria were specified at the outset ;vague direction produces generic results
- **Context window**: long or complex tasks risk the agent losing coherence across earlier decisions
- **Attentional bandwidth**: people can effectively supervise a limited number of agents simultaneously before oversight becomes fragile
- **Hallucination risk**: agents can make plausible but incorrect decisions, particularly when operating in underspecified territory

The third limitation is worth underscoring: the constraint in agent-first working is rarely what the models can do. It is how much the directing human can hold in mind at once.

### What it looks like in practice

A well-directed agent can apply a formatting standard across forty documents, cross-reference a set of notes against a bibliography for consistency, or restructure a piece of writing to match an explicit brief; tasks that are well-defined and would otherwise take a human several hours. The specificity of the specification matters considerably: Yang et al. (2026) found that a domain-specific agent in nursing education substantially outperformed general-purpose language models on evidence-based practice tasks, with the advantage attributed directly to its alignment with curriculum structure and explicitly defined task constraints.

---

## Sources

- Yang, S., Shi, M., Qian, Y., Hu, T., Huang, Z., Wang, S., & Zhu, Z. (2026). A large language model-powered reflective AI agent for evidence-based nursing education: Design and evaluation. *Nurse Education in Practice*. https://doi.org/10.1016/j.nepr.2026.104710

---

## Notes

The distinction between agents and assistants maps onto the execution/direction distinction described in [[2026-02-26-ai-agents-academic-workflow|AI agents for academic workflow]]: delegating to an agent shifts the human contribution from execution to direction. The quality of that direction — how clearly the goal and constraints are specified — determines most of the outcome. See also [[context-engineering]].
