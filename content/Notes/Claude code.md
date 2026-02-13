---
title: Claude code
description: An agentic AI command-line tool designed to understand, modify, and manage complex repositories of code and documentation.
aliases:
  - Claude CLI
type: note
author: "[[Michael Rowe]]"
created: 2026-02-12
updated: 2026-02-12
status: draft
draft: false
tags:
  - AI
  - agents
  - automation
  - CLI
category: Technology
related:
  - "[[Notes/large language models]]"
  - "[[Notes/model-context-protocol]]"
  - "[[Notes/system prompt]]"
  - "[[Notes/mcp server]]"
keyphrase: "AI agents for curriculum management"
slug: notes/claude-code
---

> [!info] From chatbot to operator
> Claude code represents a transition in AI capability from simple text generation to autonomous system operation. By operating within the local environment (the terminal) and having direct access to the filesystem, it moves beyond "talking about" problems to actively resolving them across an entire project.

## Claude code

**One-sentence definition:** Claude code is an agentic AI tool that operates through a command-line interface, allowing it to autonomously read, write, and execute commands across a local repository of files.

Unlike a standard web-based interface where a user must manually provide context, Claude code is "resident" within the project. It can use tools like `ls`, `grep`, and `read_file` to understand the structure and content of a codebase or a curriculum repository. This allows it to perform complex, multi-step tasks—such as refactoring a set of files to match a new naming convention or identifying inconsistencies in learning outcomes across multiple modules—with minimal human intervention.

### Operational capability for educators
- **Autonomous Investigation:** You can ask Claude code to "Find all instances where the new patient safety standards are not addressed in our Year 3 modules." It will search the files, analyze the content, and report back with a list of specific gaps.
- **Batch Processing:** It can handle repetitive, "low-level" administrative tasks at scale. For example, updating the metadata, dates, or contact details across hundreds of module specifications simultaneously.
- **Verification and "Tests":** In software development, we use "tests" to verify that code works as intended. In a curriculum context, Claude code can run similar checks—verifying that every learning outcome is mapped to a competency or that no internal links are broken—acting as an automated layer of quality assurance.

### The Agentic Shift
Claude code exemplifies the shift toward [[Notes/model-context-protocol|MCP]]-enabled agents that can interact with institutional data. It requires the user to move from being a "writer" to being a "director" or "reviewer." The challenge for the educator is developing the **evaluative judgement** necessary to oversee an agent that can make hundreds of changes to a digital workspace in seconds, ensuring that the agent's actions align with the overarching pedagogical goals.

---

## Sources

- Anthropic. (2025). Claude Code Documentation. https://docs.anthropic.com/en/docs/agents-and-tools/claude-code
- "Documentation becomes infrastructure when AI agents are the readers." (Rowe, 2026).
