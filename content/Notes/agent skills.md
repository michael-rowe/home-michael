---
title: Agent skills
description: A skill is a folder holding written instructions for one task, which an AI agent loads when the work calls for it. The format is a plain-text file with a name and a description of when it applies, and it now works across most AI tools rather than only one.
aliases:
  - skill
  - SKILL.md
type: note
author: "[[Michael Rowe]]"
created: 2026-09-18
updated: 2026-09-18
draft: true
tags:
  - agent
  - context-engineering
  - ai-integration
  - operational-architecture
  - standards
category: Technology
related:
  - "[[Notes/progressive disclosure]]"
  - "[[Notes/harness-engineering]]"
  - "[[Notes/context engineering]]"
  - "[[Notes/Claude Code]]"
  - "[[Notes/model context protocol]]"
  - "[[Notes/ai-agents]]"
keyphrase: AI agent skills
linkedin:
---

> [!info] A skill is procedural knowledge written down, in a form an agent can find
> Everything you know about how a piece of work gets done — the steps, the house conventions, the form it has to end up on — can be written into a folder that an AI agent reads when the task comes up. It is plain text, it is portable between tools, and the hard part is not the instructions but describing when they apply.

## Agent skills

**One-sentence definition:** A skill is a folder containing a `SKILL.md` file — metadata plus instructions written in ordinary prose — that an AI agent loads when a task matches its description, optionally bundling templates, reference documents and scripts alongside.

The whole format is one required file:

```
mid-placement-report/
├── SKILL.md          # required: name, description, instructions
├── references/       # optional: the regulations, the marking criteria
├── assets/           # optional: the blank form, an exemplar
└── scripts/          # optional: code the agent can run
```

`SKILL.md` opens with a few lines of configuration[^yaml] and continues in Markdown.[^markdown] Nothing compiles and nothing executes. When the skill is invoked, the file's contents drop into the conversation and the model follows them — which means writing a skill is writing instructions for a competent colleague, not programming.

## The description is the working part

Two fields are required: a `name` and a `description`. The description is not a summary of what the skill contains; it is a statement of *when it applies*. A skill on my own machine for Linux configuration opens with "REQUIRED for end-user customization of Linux desktop, window manager, or system config… Triggers: Hyprland, window rules, animations, keybindings…" — a list of conditions, written for matching rather than reading.

This is where most skills fail. The agent holds only the description in mind and compares it against what has been asked; the instructions stay unread until that comparison succeeds. A skill with excellent contents and a vague description is a book with no catalogue entry — it exists and is never found. See [[Notes/progressive disclosure|progressive disclosure]] for the mechanism this rests on.

## Who invokes it

A skill can fire two ways, and the setting that chooses between them is the whole of what used to be a separate feature.

**The agent invokes it** when the task matches the description. This is the default and the interesting case: you get the procedure without having to remember it exists. The cost is that it is a judgement — it sometimes fires when you did not want it, and sometimes fails to fire when you did.

**You invoke it** by typing `/name`. Deterministic: it never runs unless asked, and always runs when asked. Frontmatter fields set this directly — `disable-model-invocation: true` makes a skill user-only, `user-invocable: false` makes it agent-only and hides it from the menu.

*Until 2026 these were two distinct things in Claude Code — a "slash command" was a single file you triggered yourself, a "skill" was a folder the model could trigger. They have since been merged: the same file produces both behaviours and the old command files still work. It is worth knowing because a great deal of writing about this, some of it recent, still treats them as separate mechanisms.*

The choice is not technical. It is a question about the work: *do I know when this procedure is needed, or is the system better placed to notice than I am?*

## What it looks like in health professions education

Take the mid-placement report a practice educator completes for each student. There is a house way of doing it: what evidence counts, how concerns are phrased so they are actionable rather than punitive, which regulator's language must appear, what the form looks like.

That knowledge currently lives in a handbook nobody opens, a workshop people attended two years ago, and the head of placements' inbox. As a skill it is a folder: the instructions in `SKILL.md`, the blank form and a good exemplar in `assets/`, the relevant standards in `references/`. An educator drafting a report with an AI assistant gets the school's actual procedure applied, rather than a generic report the model invented.

Two things follow that matter more than the convenience. The procedure becomes a single artefact that can be versioned, reviewed and argued about — which is more than can be said for the workshop. And writing it forces the school to state what the procedure *is*, which is usually where the exercise gets uncomfortable and usually where its value sits.

## Where skills work

Anthropic released the format as an open specification in December 2025 and it spread unusually fast: by mid-2026 it was supported by OpenAI's Codex, Gemini CLI, GitHub Copilot, VS Code, Cursor, JetBrains, AWS, Databricks, Snowflake, Mistral and several dozen others, with the specification maintained at agentskills.io. Adoption was cheap because there is nothing to implement beyond reading a file.

The equivalents in the consumer products are named differently and do not all mean the same thing:

| Product | The skill-shaped thing | Not the same as |
|---|---|---|
| Claude | Skills | Project instructions (standing context) |
| ChatGPT | Skills, on business and education plans since July 2026 | Projects (a workspace) and Custom GPTs (a configured assistant) |
| Gemini | Skills in the CLI; Extensions bundle skills with tools | Gems (closer to a Custom GPT) |
| Codex, Copilot, Cursor | Skills, same format | `AGENTS.md` (standing context) |

The consequence for anyone deciding whether to invest effort here: what you write down outlives the tool you wrote it for. That is a different calculation from configuring a vendor's interface, and it is the argument for an institution documenting its procedures rather than buying a product that encodes them.

## Knowledge is not access

A skill is knowledge, not capability. It tells an agent *how* to do something; whether the agent can reach the placement records, the calendar or the marking platform is a separate matter, usually handled by [[Notes/model context protocol|MCP]]. A well-written skill that requires access the agent does not have is a well-written instruction to do nothing.

Skills also inherit the honesty problem of all written procedure: a skill describes how the work is supposed to be done, which is not always how it is done. That gap is worth finding, but the skill will not find it for you.

---

## Sources

- [Agent Skills overview and specification](https://agentskills.io/)
- [Skills — Claude Code documentation](https://code.claude.com/docs/en/skills)
- [Build skills — OpenAI Codex documentation](https://developers.openai.com/codex/skills/)

[^yaml]: **YAML frontmatter** — a short block at the top of a text file, fenced by `---`, holding settings as `key: value` pairs. The same convention this site's own notes use. [Wikipedia](https://en.wikipedia.org/wiki/YAML)
[^markdown]: **Markdown** — a plain-text formatting convention where symbols such as `#` and `*` mark headings and emphasis. Files stay readable as-is in any editor, which is why agent tooling settled on it. [Wikipedia](https://en.wikipedia.org/wiki/Markdown)
