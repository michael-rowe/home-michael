---
title: The hidden inefficiency in how we work with AI
type: post
description: Most academics treat AI models as interchangeable general-purpose tools. They aren't. Different models have different characteristics that make them better suited to particular kinds of cognitive work, and matching tasks to those characteristics may improve both efficiency and output quality. This post explores what that looks like in personal workflows and how the same logic scales to institutional AI strategy.
meta-description: Using AI models for different tasks — matched to their strengths — improves output quality and efficiency for individuals and institutions alike.
keyphrase: AI models for different tasks
author: "[[Michael Rowe]]"
date: 2026-02-16
updated: 2026-02-16
tags:
  - large-language-models
  - ai-integration
  - context-engineering
  - ai-literacy
category:
  - AI and technology
related:
draft: false
slug: ai-models-for-different-tasks
enableToc: true
reviewed:
  - writing_style
  - blog_writer
  - copy_editor
  - SEO_optimiser
---
> [!info] AI effectiveness is an architecture problem, not a capability problem
> The constraint on effective AI use isn't model capability — it's whether we've structured our work so that the right capabilities handle the right tasks. Matching models to tasks is infrastructure thinking, not tool selection.

Most academics I know use AI the same way: they open ChatGPT or Claude, throw whatever task they're working on at it, and hope for useful output. Literature review? Claude. Email drafting? Claude. Data analysis? Claude. Conceptual framework development? Also Claude.

This approach treats AI models as interchangeable general-purpose tools. It's understandable — we've been conditioned by decades of software use to think this way. But different AI models suit different tasks. Each has distinct characteristics that make it better suited to particular kinds of cognitive work. The same is true for different interfaces to the same model — Claude Code in the terminal offers file system access and code execution that the web interface doesn't, making them functionally different tools despite using the same underlying model. Within Claude Code (and other CLI agents), switching models is a single command — `/model Default (recommended)` for Opus, `/model Haiku` for Haiku — which makes it practical to route different tasks through different capabilities in the same session.

I noticed this pattern in my own practice. I was maxing out my Claude Opus sessions in Claude Code daily, then switching to Gemini only when forced to by rate limits, and rarely touching Qwen despite its generous free tier. When I used Qwen on the rare occasion after maxing out Gemini, for instruction-following tasks with well-structured files, something surprising happened: the results were essentially identical to what Claude would have produced. Not worse. Just... the same.

That result suggested I'd been systematically overusing models for work that didn't require their capabilities.

## Match the task to the model

The pattern became clearer when I started paying attention to what each model was actually good at — and what that meant for computational cost. [[large language models|Large language models]] aren't uniform: Claude Opus excels at complex reasoning and conceptual framework development, but that reasoning depth comes with a [[token budget|"token budget"]] cost: sophisticated thinking burns more tokens at inference than simple instruction-following. Claude Sonnet balances capability with efficiency for structured tasks. Haiku is remarkably good at straightforward instruction following — sometimes even more reliable than its more sophisticated siblings because there's less surface area for overthinking.

This token budget concept does valuable cognitive work: it makes visible that different tasks have different computational costs. Asking a model to synthesise patterns across literature requires more processing than asking it to reformat a reference list according to a template. The former needs reasoning; the latter needs reliable execution.

Gemini's massive context window makes it ideal for processing large bodies of text. Qwen handles well-structured instruction-following tasks efficiently. These aren't just cost differences. They're functional differences that matter for output quality and reliability.

Consider a workflow for processing weekly research notes into structured concept notes: you need something to collate annotations from multiple sources (requiring consistency more than insight), something to synthesise patterns and connections (requiring reasoning depth), and something to draft the actual notes according to a template (requiring reliable instruction following).

Running all three steps through Claude Opus isn't just inefficient — it might actually produce worse results than using Haiku for collation, Gemini or Opus for synthesis, and Sonnet for drafting. Each model's characteristics align with different phases of the workflow. The collation step doesn't benefit from Opus's reasoning capability; it just needs reliable execution. The synthesis step needs that reasoning depth. The drafting step needs Sonnet's balance of capability and consistency.

This isn't primarily about rationing scarce resources. It's about matching task characteristics to system capabilities in ways that might improve both efficiency and output quality.

## The same logic at institutional scale

This pattern scales from personal workflows to institutional strategy. As universities experiment with AI integration, many seem drawn toward uniform solutions. Microsoft-licensed institutions might default to routing everything through Copilot. Others might select a single enterprise AI vendor and channel all uses through that platform.

This creates similar inefficiencies at institutional scale. A chatbot handling routine enrolment questions doesn't need the same capabilities as a system analysing institutional data across multiple domains — say, correlating facilities usage patterns with student outcomes data, or synthesising budget allocations across departments. Administrative workflow automation has different requirements than supporting doctoral supervision conversations.

Some institutions are already recognising this. Small, locally-run models can handle specialised tasks efficiently — a focused model for parsing course evaluation data, another for routing help desk queries. These don't need the broad capabilities of frontier models, and running them locally offers data governance advantages for sensitive institutional information.

The task decomposition pattern I discovered individually applies at an institutional level, but institutions can design infrastructure that makes this matching automatic rather than manual. Students asking routine questions could be routed to lightweight models that handle well-defined queries reliably. Complex research support could access more sophisticated reasoning systems. Administrative tasks could use specialised models optimised for structured outputs.

This isn't about cost optimisation, though that's a consequence. It's about designing systems where the characteristics of each component align with the demands placed on it. An academic decomposing their workflow across models is making the same kind of architectural decision as an IT director designing an institutional AI strategy. Both are determining which capabilities should handle which processes.

## This is architecture work

This pattern — decomposing work into tasks and matching those tasks to appropriate systems based on their characteristics — is architecture work. When you decide which model handles your literature collation versus your conceptual synthesis, you're making [[documentation-as-infrastructure|infrastructure decisions about information flow and system design]].

This reframing shifts the question from "what can AI do?" to "how should we structure our work so that AI capabilities align with task requirements?" For individual academics, it means viewing your workflow as an architecture to design. Which processes need sophisticated reasoning? Which need reliable instruction following? Where do you need massive context windows versus focused analysis?

For institutions, it means moving beyond vendor selection to system design. Not "which AI should we buy?" but "how should we structure our information architecture so different AI capabilities can be deployed appropriately across different processes?"

## Why this matters now

Research tracking AI performance on progressively longer autonomous tasks suggests the time horizon for AI to complete tasks of a given length is [halving roughly every seven months](https://metr.org/blog/2025-03-19-measuring-ai-ability-to-complete-long-tasks/) (Kwa et al., 2025). Which means we're rapidly approaching a world where the constraint isn't whether AI can do something, but whether we've structured our work in ways that AI can reliably execute over longer and longer time horizons.

That shift makes architecture, not tool capability, the primary constraint. The academic who can decompose their workflow effectively will accomplish more than the academic with access to the most powerful model. The institution that can design appropriate task-to-system matching will integrate AI more successfully than the institution that simply deploys the most sophisticated platform.

How we structure our work with AI now — the patterns we establish, the mental models we develop — will shape how we work for years to come. The academics who start thinking architecturally about AI integration are developing capabilities that scale to institutional strategy. The institutions that recognise this as an architecture problem rather than a procurement problem will be better positioned for whatever capabilities emerge next.

## Reference

Kwa, T., West, B., Becker, J., et al. (2025). *Measuring AI ability to complete long tasks*. METR. https://metr.org/blog/2025-03-19-measuring-ai-ability-to-complete-long-tasks/
