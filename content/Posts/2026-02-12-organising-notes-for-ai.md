---
title: "Organising your notes for AI: why retrieval isn't enough"
type: post
description: Most advice on organising notes for AI treats it as a retrieval problem, as if the AI only needs to find the right documents. The harder problem is translation, making the relationships in your thinking machine-readable without losing what makes them yours. This post explains why search and retrieval fall short, shows what a typed link between two notes looks like, and suggests one small way to start.
meta-description: Organising notes for AI takes more than good search. Make the relationships in your thinking machine-readable, starting with typed links between notes.
keyphrase: organising notes for AI
author: "[[Michael Rowe]]"
date: 2026-02-12
updated: 2026-02-12
tags:
  - context-sovereignty
  - knowledge-representation
  - information-management
  - note-taking
  - ai-integration
category:
  - Information management
  - Technology
related:
  - "[[Notes/context sovereignty]]"
  - "[[Notes/knowledge graph]]"
  - "[[Essays/documentation-as-infrastructure]]"
  - "[[Notes/contextual interoperability]]"
draft: false
enableToc: true
linkedin:
reviewed:
  - blog_writer
  - writing_style
  - SEO_optimiser
  - copy_editor

---

> [!info] The bottleneck is translating your thinking into something AI can navigate
> Your notes make perfect sense to you—the connections, frameworks, and questions form a rich intellectual infrastructure. But to an AI, they're often just disconnected text. Making those connections explicit lets a machine follow them, and the effort sharpens your own thinking as much as it helps the AI.

Most advice on organising your notes for AI treats the problem as retrieval: find the right documents, [[Notes/retrieval augmented generation|surface the relevant chunks]], reduce the time to answer. But this assumes the bottleneck is access to information. The harder problem, and in my experience the one discussed less, is translation: making human meaning machine-readable without losing what makes it meaningful.

That's what **[[Notes/contextual interoperability|contextual interoperability]]** addresses: the capacity to structure your thinking in ways that an AI can navigate, while preserving the specificity that makes your thinking yours.

## Why retrieval isn't enough

Traditional information retrieval finds documents containing keywords. [[Notes/embeddings|Semantic search]] finds conceptually similar text. Both are reactive—they wait for a question before offering help. Neither achieves contextual interoperability because neither understands the *architecture* of your thinking.

Consider how you actually work. Much of what you keep is a set of relationships between things. Perhaps you note that a qualitative study challenges the evidence base for an assessment approach you've been using. You develop a framework linking self-regulated learning to your ongoing question about clinical supervision. This is your intellectual infrastructure—the scaffolding that supports your cognition.

The problem is that it remains largely implicit. The connections exist in your head, perhaps as links in a notes app, but they're opaque to the AI. When you ask for help, it sees the text of your notes but not the *reasoning* that connects them. It can't tell why a particular critique matters or how a specific framework should be applied.

Closing that gap means making the reasoning as legible as the text, so the AI can recognise what might matter before you've thought to ask.

## Making the implicit explicit

Achieving this requires a shift from document management to information architecture, where the aim is to make your thinking explicit enough that a machine can follow it.

That shift starts with typed relationships. In most notes apps, a link is just a pointer. In a [[Notes/knowledge graph|knowledge graph]], a link can carry meaning: "Miller's pyramid *extends* Bloom's taxonomy into observable clinical performance", "workplace-based assessment *challenges* the assumptions of traditional high-stakes examinations." This turns a collection of notes into a network of ideas, a map the AI can follow rather than a pile of text it can only skim.

In [[Notes/plain text|plain-text]] notes, a typed link can be as simple as a named field. In [[Notes/Obsidian|Obsidian]], with the Dataview[^dataview] plugin, it's a relationship name, two colons, and a link:

```markdown
# Workplace-based assessment

challenges:: [[High-stakes examinations]]
assesses:: [[Miller's pyramid]] at the "does" level
```

A model reading that note can follow the relationship and the direction it runs in, instead of guessing from the fact that two notes link to each other.

The discipline serves you as much as it does the machine. Articulating relationships between concepts often reveals gaps in your own understanding: connections you thought were solid turn out to be fuzzy; frameworks you've been using in parallel turn out to be incompatible. Making your thinking machine-readable (as far as that's possible) clarifies your own thinking in the process.

## From notebook to cognitive interface

Personal knowledge management[^pkm] has moved through distinct phases. The notebook began as a memory aid, a filing cabinet for things we might otherwise forget. Then it became a [thinking tool](https://numinous.productions/ttft/) (Matuschak & Nielsen, 2019), a space for writing to discover what we think. The third phase is different in kind: the notebook as a cognitive interface, the infrastructure through which human and artificial intelligence collaborate.

In this third phase, your knowledge base does more than store ideas. It moves some of the 'intelligence' of the system out of the model and into the architecture of the data. When contextual interoperability is high, the AI can reason within the boundaries and commitments of your established intellectual framework, because you've described *how* you think about the things it's working on.

This is also the practical foundation of [[Notes/context sovereignty|context sovereignty]]. If your context is structured and interoperable, you can keep control of your data and still use [[Notes/intelligence as a service|intelligence as a service]], giving a model the specific, structured context a task needs instead of handing over your entire intellectual history.

## What this asks of us

Whether AI can 'understand' us matters less here than whether we're willing to build the infrastructure that makes our understanding visible enough for it to support our thinking.

I think of this as a new kind of literacy: the ability to design the digital environments where human and artificial intelligence meet. The effort of making thinking explicit, through typed links, clear metadata, and structured frameworks, can look like administration, but in an [[Notes/AI-forward|AI-forward]] age it's part of the work of scholarship itself.

Start small. Pick one note you return to often, and for each link in it, name the kind of relationship it stands for. Where you can't name one, you've found a gap in your own thinking.

## References

- Matuschak, A., & Nielsen, M. (2019). _How can we develop transformative tools for thought?_ Numinous Productions. [https://numinous.productions/ttft/](https://numinous.productions/ttft/) ([[Bibliography/Matuschak-Nielsen-2019-how-can-we-develop-transformative-tools-for-thought|annotation]])

[^dataview]: **Dataview** is a free community plugin for Obsidian that reads fields written into notes, such as `challenges:: [[High-stakes examinations]]`, and lets you query them like a small database: every note that challenges a given assessment approach, say. See the [Dataview documentation](https://blacksmithgu.github.io/obsidian-dataview/).

[^pkm]: **Personal knowledge management** is the practice of collecting, organising, and connecting what you learn so you can find and use it later, from a clinical educator's reading notes to a programme lead's file of teaching ideas. See [Wikipedia](https://en.wikipedia.org/wiki/Personal_knowledge_management).