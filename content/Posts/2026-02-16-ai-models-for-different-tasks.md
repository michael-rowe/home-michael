---
title: The hidden inefficiency in how we work with AI
type: post
description: Most academics use one AI model for everything, but different models suit different kinds of cognitive work. Choosing the right AI model for each step of a task can improve both efficiency and output quality. Michael Rowe describes how he noticed this in his own workflow, what splitting one workflow across three models looks like, and why the same logic applies when a university plans its AI strategy.
meta-description: Choosing the right AI model for each step of a task improves output quality, for academics planning their work and universities planning AI strategy.
keyphrase: choosing the right AI model
author: "[[Michael Rowe]]"
date: 2026-02-16
updated: 2026-10-03
tags:
  - language-model
  - ai-integration
  - ai-literacy
category:
  - Technology
related:
draft: false
enableToc: true
linkedin:
reviewed:
  - blog_writer
  - writing_style
  - SEO_optimiser
  - copy_editor
---
> [!info] Getting more from AI depends on how you structure the work
> Different models suit different kinds of work, and the gain comes from matching each step of a task to the model that suits it. That matching is a design decision about how work is organised, and it's the same decision whether you're an academic planning your week or an institution planning its AI strategy.

Most academics I know use AI the same way: they open ChatGPT or Claude, throw whatever task they're working on at it, and hope for useful output. Literature review? Claude. Email drafting? Claude. Data analysis? Claude. Conceptual framework development? Also Claude.

This approach treats AI models as interchangeable general-purpose tools. It's understandable — we've been conditioned by decades of software use to think this way. But different AI models suit different tasks. Each has distinct characteristics that make it better suited to particular kinds of cognitive work.

I found this out by accident. I was maxing out my Claude Opus sessions in [[Claude Code]] daily, then switching to Gemini only when forced to by rate limits,[^rate-limits] and rarely touching Qwen despite its generous free tier. When I used Qwen on the rare occasion after maxing out Gemini, for instruction-following tasks with well-structured files, something surprising happened: the results were essentially identical to what Claude would have produced, no worse and no better.

That result suggested I'd been systematically overusing models for work that didn't require their capabilities.

## Choosing the right AI model for each task

The pattern became clearer when I started paying attention to what each model was actually good at. [[large language models|Large language models]] aren't uniform. Claude Opus excels at complex reasoning and conceptual framework development. Claude Sonnet balances capability with efficiency for structured tasks. Haiku is remarkably good at straightforward instruction following — sometimes even more reliable than its more sophisticated siblings, because there's less surface area for overthinking. Gemini's massive [[context window]] suits processing large bodies of text, and Qwen handles well-structured instruction-following tasks efficiently.

The names will probably have changed by the time you read this, but the shape is likely to last, since the major providers each offer a heavy reasoning model, a balanced middle tier, and a small fast model, and the question of which one a task needs stays the same.

Reasoning depth has a cost, and the idea of a [[token budget]] makes it visible: sophisticated thinking burns more tokens while the model works out its answer than simple instruction-following does. Asking a model to synthesise patterns across literature requires more processing than asking it to reformat a reference list according to a template, because the first needs reasoning and the second needs reliable execution. That difference shows up in the quality and reliability of the output as well as in the cost.

My own case was a weekly workflow for turning research notes into structured concept notes. It needs something to collate annotations from multiple sources (requiring consistency more than insight), something to synthesise patterns and connections (requiring reasoning depth), and something to draft the actual notes according to a template (requiring reliable instruction following).

Running all three steps through Claude Opus is inefficient, and in my experience it can also produce worse results than using Haiku for collation, Gemini or Opus for synthesis, and Sonnet for drafting. The collation step gains nothing from Opus's reasoning and only needs reliable execution, the synthesis step needs that reasoning depth, and the drafting step needs Sonnet's balance of capability and consistency.

The principle reaches well beyond my notes. When a nursing programme is prepared for approval, the team has to show where each of the NMC's *Standards of proficiency for registered nurses* (Nursing and Midwifery Council, 2018), set out across seven platforms, is taught and assessed. Gathering the learning outcomes from twenty-odd module specifications is collation, and a small model does it reliably. Deciding whether a particular outcome actually meets a particular proficiency is a judgement, and that's where a heavy reasoning model earns its cost, with the team checking each call it makes. Writing the result up in the mapping document the approval panel expects is template work for the middle tier. Run the whole job through one model and you either pay for reasoning the first and last steps don't need, or get thin judgement in the step that matters most.

Saving scarce resources is a side effect. The reason to do it is that matching each step to a model with the right characteristics can improve the work itself.

Switching is cheap. In Claude Code and other command-line[^command-line] agents, changing model is a single command — `/model haiku`, `/model opus` — so different steps in the same session can run on different models. The interface matters too: Claude Code in the terminal can read your files and run code, which the web interface can't, so it's a functionally different tool even with the same model underneath.

## The same logic at institutional scale

As universities experiment with AI integration, many of the ones I see are drawn towards uniform solutions. A Microsoft-licensed institution may default to routing everything through Copilot, and others select a single enterprise AI vendor and channel every use through that platform.

That reproduces my overuse of Opus at institutional scale. A chatbot handling routine enrolment questions doesn't need the same capabilities as a system analysing institutional data across several domains, say correlating facilities usage with student outcomes, or synthesising budget allocations across departments. Automating an administrative workflow asks something different of a model than supporting doctoral supervision conversations does.

Some institutions already use small, locally run models for specialised tasks: a focused model for parsing course evaluation data, another for routing help desk queries. These don't need the broad capabilities of frontier models,[^frontier] and running them locally keeps sensitive institutional information in-house, which simplifies data governance.

Institutions also have an advantage I don't have as an individual, because they can build infrastructure that does the matching automatically. Students asking routine questions could be routed to lightweight models that handle well-defined queries reliably, complex research support could reach more sophisticated reasoning systems, and administrative tasks could use models optimised for structured outputs.

The aim is the same as for the individual: systems where the characteristics of each component suit the demands placed on it. An academic decomposing their workflow across models is making the same kind of decision as an IT director designing an institutional AI strategy, because both are deciding which capabilities should handle which processes.

## This is architecture work

When you decide which model handles your literature collation versus your conceptual synthesis, you're making [[documentation-as-infrastructure|infrastructure decisions about information flow and system design]].

The question becomes how we should structure our work so that AI capabilities suit the tasks in it. For an individual academic, that means treating your workflow as something to design.

For an institution, it means designing the system before choosing the vendor, and asking how its information architecture should be organised so that different AI capabilities can be deployed where they fit.

## Why this matters now

Research tracking AI performance on progressively longer autonomous tasks suggests that the length of task AI can complete on its own has been [doubling roughly every seven months](https://metr.org/blog/2025-03-19-measuring-ai-ability-to-complete-long-tasks/) (Kwa et al., 2025). As that continues, what limits us will increasingly be whether we've structured our work in ways AI can reliably carry out over longer stretches. I expect an academic who can decompose their workflow well to get more done than one who simply has access to the most powerful model, and an institution that matches tasks to systems to integrate AI more successfully than one that deploys the most sophisticated platform everywhere.

How we structure our work with AI now, the patterns we establish and the mental models we develop, will shape how we work for years, and will outlast whichever models are current. A practical place to start is one task you do every week: break it into its steps, and ask of each whether it needs reasoning, reliable execution, or a large context.

## References

Kwa, T., West, B., Becker, J., et al. (2025). *Measuring AI ability to complete long tasks*. METR. https://metr.org/blog/2025-03-19-measuring-ai-ability-to-complete-long-tasks/

Nursing and Midwifery Council. (2018). *Standards of proficiency for registered nurses*. NMC. https://www.nmc.org.uk/standards/standards-for-nurses/standards-of-proficiency-for-registered-nurses/

[^rate-limits]: **Rate limits** are caps a provider sets on how much you can use a model in a given period. Once you reach one, you wait or switch to another model. [Wikipedia](https://en.wikipedia.org/wiki/Rate_limiting)

[^command-line]: **Command line** means working with a computer by typing instructions into a text window rather than clicking through menus. AI agents that run there can read and change the files on your machine directly. [Wikipedia](https://en.wikipedia.org/wiki/Command-line_interface)

[^frontier]: **Frontier models** are the largest and most capable models the major AI companies offer at any given time, and the most expensive to run. [Wikipedia](https://en.wikipedia.org/wiki/Foundation_model#Frontier_models)
