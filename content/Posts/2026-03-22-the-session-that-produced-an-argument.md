---
title: The session that produced an argument
type: post
author: "[[Michael Rowe]]"
date: 2026-03-22
updated: 2026-03-22
description: "Raw material accumulates — reading summaries, transcripts, book annotations. This is a field note on the brainstorming command I use to engage with any source, with an excerpt showing what a session looks like: the format, Claude surfacing vault notes and Zotero sources, and why the conversation living in markdown matters."
meta-description: "A field note on AI-assisted brainstorming in Claude Code: what a session looks like, how it surfaces connected notes, and why the conversation stays in your vault."
keyphrase: developing ideas with AI
draft: false
enableToc: false
subtype: field-note
tags:
  - ai-integration
  - academic-writing
  - academic-practice
  - context-engineering
category:
  - Scholarship
slug: posts/the-session-that-produced-an-argument
linkedin:
---

Raw material accumulates in different forms. Sometimes it's the weekly synthesis of reading and listening produced by my [weekly review command](posts/review-reading-notes-ai). Sometimes it's a transcript, a set of book annotations, or a cluster of notes that haven't resolved into anything coherent. The material is there; what's missing is a structured way to engage with it.

I have a brainstorming command for this — I call it `/conclave`. It runs inside [Claude Code](https://claude.ai/code), a terminal-based AI interface, and you can point it at any source. It creates or opens a daily note in my writing vault, loads context from my recent work, and begins a conversation. Through a local server it has access to my full vault and Zotero library — it can search notes, surface connections, and pull in sources directly.

The instruction behind the command tells Claude to push back rather than validate, to steelman positions before testing them, to ask one sharp question rather than a battery of gentle ones. It's explicitly not a summarisation tool. The point is to have something to think against.

## What a session looks like

The format is simple. I write a few lines — half-formed, provisional — and Claude responds. I reply in bullet points. Claude asks something sharper. The session builds as a running transcript in the note.

Here's a short excerpt from a recent session. I opened with a loose thought about writing:

---

**Michael**: Blog post on getting joy from writing, then getting disillusioned, then realising that I enjoy expressing ideas, and I used to do that mainly through writing, and AI helps me do that better. Maybe not "joy", maybe I mean something like "purpose". I used to say that I feel compelled to write, not that I enjoy writing. Maybe that feeling of compulsion was coming from a need to articulate something I saw, and that I wanted others to see?

---

**Claude**:

> The distinction between *compulsion* and *enjoyment* is doing a lot of work here — because they're pointing at different things.
>
> Compulsion usually means there's something that won't let you rest until it's done. Enjoyment is about the process itself being pleasant. You're saying the writing was never really the enjoyable part — it was the vehicle for something else: making a thing you've seen visible to someone else. The writing was just the best tool available for that.

- Yes, the enjoyment came from seeing an idea, clearly expressed

> But here's where I'd push back a little: there's something in the *struggle* of writing that shapes the idea itself. Writing isn't just transcription — it's discovery. The act of trying to articulate something you've seen often reveals that you haven't quite seen it yet. Does AI-assisted expression give you that same loop? Or does it short-circuit it — producing fluency before the idea is actually ready?

- I've learned to look past the fluency of the AI output
- In some important sense, I don't trust the words
- I'm looking for the expression of the idea in the words
- There remains a productive and generative struggle

---

Later in the same session, I asked it to search my vault and Zotero for relevant material:

---

**Michael**: Explore my permanent notes and Zotero for some concepts to add weight to the piece.

---

**Claude**:

> The most directly useful vault note is the Feynman quote in [[writing is thinking]]: "writing was not merely a record or trace of what he thought, but rather the *medium through which he thought* that enabled him to think more consciously." That's almost exactly the claim you're making about AI — except the medium has shifted from inscription to dialogue.
>
> From Zotero, Nguyen, Hong, Dang & Huang (2024, *Studies in Higher Education*) studied doctoral students working with AI and found that those who engaged in iterative, highly interactive back-and-forth with the tool outperformed those who used it as a supplementary information source. The empirical finding maps directly onto your practice: the collaboration is the thing, not the offloading.
>
> [[scarcity inversion when words become cheap]] is also worth pulling in here. When generation becomes cheap, discernment becomes the scarce and valuable thing. Carlo Iacono: "when words get cheaper, meaning gets more expensive." The vibe coder has outsourced the expensive part.

---

That last move — surfacing three things I'd written or read separately and hadn't yet connected — is what makes this different from a conversation I'd have in a browser. The command has context. It knows what's in my vault.

## Why this matters

Most AI interaction happens in a chat interface: you type, the model responds, you close the tab, the conversation disappears. If something useful emerged, you have to copy it somewhere manually, or it's gone.

A session like this one is a markdown file on my machine from the moment it starts. It's in my vault, alongside everything else — searchable, linkable, and available as context to any future session. When I asked the command to search my notes, it could find this session in a future search, surface what came out of it, and build on it. The thinking accumulates rather than evaporating.

That's not a minor convenience. It's a different relationship with the tool. The conversation isn't a transaction — ask, receive, close. It's a record of thinking, in the same place as the rest of my thinking, that compounds over time.
