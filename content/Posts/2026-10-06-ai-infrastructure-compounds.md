---
title: "AI infrastructure for academics: how earlier work makes later requests simple"
type: post
aliases:
  - "AI infrastructure for academics: why one sentence was enough"
  - One sentence was enough because of everything I'd built before it
  - Infrastructure compounds
  - How AI infrastructure compounds
description: I gave an AI agent two YouTube links and one sentence, and it returned two catalogued conference talks with slides, transcripts, and appraisal notes attached in Zotero. The request was short because months of earlier work sat behind it, including a fix from March and a tool from September. This post describes that session and an earlier one, and what they show about the difference between using AI to finish a task and using it in a way that leaves your system more capable than before.
meta-description: "How AI infrastructure for academics compounds: one request to an agent catalogued two talks with slides, transcripts and appraisal notes."
keyphrase: AI infrastructure for academics
author: "[[Michael Rowe]]"
date: 2026-10-06
updated: 2026-10-06
tags:
  - agent
  - information-management
  - context-engineering
category: [Technology, Scholarship]
related:
  - "[[2026-02-26-ai-agents-academic-workflow]]"
  - "[[2026-06-11-verification-trap]]"
  - "[[Notes/epistemic accountability]]"
draft: false
subtype: ""
enableToc: true
linkedin:
---

> [!info] Small fixes compound when the system keeps them
> Most AI use is transactional: you finish a task and the tool is the same afterwards as it was before. When you work inside infrastructure you've built, some sessions leave the system slightly more capable, and those gains add up. Eventually a single sentence can do work that once needed step-by-step direction, because everything the sentence relies on was built in earlier sessions.

I recently watched two talks from [Akademy](https://akademy.kde.org/2026/), the annual KDE conference, which was held in Graz this year. One was [Scott Jenson's keynote](https://www.youtube.com/watch?v=V7AfAcQwLW0) on why desktop interfaces have barely changed in twenty years, and the other was [Eva Brucherseifer and Jan Mühlig](https://www.youtube.com/watch?v=n8eTZk6xoZQ) on what a sovereign, AI-native desktop might need.

If you work in health professions education, these talks probably won't matter to you unless you happen to use KDE's Plasma desktop, and that's fine. I'm using them to show how an agent handled the request, why it took so little to ask, and what that says about building AI infrastructure for academics.

I wanted both in my reference library with whatever source material I could get, and a summary note on each, so I gave Claude Code this request:

> [!prompt] Prompt
> I want you to add them to Zotero as presentations. Then I want you to find the transcripts and/or the actual slides, and add those as attachments. Then I want you to use a Claude command or script or whatever you'd normally use to create notes from a PDF, to create a new note and add it as an attachment to the item.

What came back was two [[Notes/Zotero|Zotero]] items with the presentation type, the speakers listed as presenters, the conference and date filled in, and the programme abstracts copied in. The Brucherseifer and Mühlig item had their slides attached, which the agent found on the conference's programme website. Jenson hadn't posted slides, so his item had only a transcript, which the agent took from YouTube's captions, reformatted, and saved as a PDF with a header saying where it came from and that it was unedited. Each item also had a plain-language summary note in the format I use for papers, including a rating of how much weight the conclusions can bear.

![[zotero-akademy-items.png|The Brucherseifer and Mühlig talk in Zotero as a presentation item, expanded to show its summary note, slides, and transcript]]

![[zotero-akademy-item-info.png|Zotero's Info pane for the Brucherseifer and Mühlig talk, showing the presentation type, both presenters, the date, Akademy 2026 as the meeting name, Graz as the place, and the YouTube link|300]]

I didn't tell the agent where to look for slides, which Zotero item type to use, or that the transcripts would need to be PDFs before my note command could read them, and it worked all of those out. One sentence was enough because a series of earlier sessions had each left something behind.

## The earlier sessions the request relied on

The agent could write to Zotero at all because of a session in March. I'd asked Claude to summarise a newly added paper, [Marchal et al. (2026)](https://arxiv.org/abs/2603.02960) on trust in artificial epistemic agents, and attach the summary as a note. The write failed, because my [[Notes/mcp server|MCP server]] (the small program that gives Claude access to Zotero) was sending write requests to Zotero's local API, which only allows reading. The fix was one line that sent writes to the web API instead, and from that session onwards the system could write to my library.

The attachments in October relied on a tool I added in September, for attaching a PDF to an existing item. I built it for a different job and haven't thought about it since. The note format came from a command I wrote in March and have revised since, which specifies what a summary should contain and how to appraise the claims in a paper. When I wrote "whatever you'd normally use", the agent found that command and applied it, because it was written down where the agent knows to look. Like the March fix and the September tool, it was there because an earlier task had needed it.

## How AI infrastructure builds up across sessions

Most talk about using AI describes a transaction: you have a task, the AI helps you complete it, and the session ends with the task done and the tool unchanged. A lot of my own use looks like that, and there's nothing wrong with it, but the March session also changed what the system could do, and every session after it inherited the change. A one-line fix is a trivial piece of work, and its value depends on how many later sessions use it, which you can't know when you make it. I've argued before that [[Essays/documentation-as-infrastructure|documentation becomes infrastructure when AI agents are the readers]], and this is what that looks like over several months in one person's work.

For health professions educators, a patient's record may be the closest comparison. Each entry documents one encounter and also informs the next, and a record that's been kept carefully for years is worth far more than its entries taken one at a time, which is how a personal knowledge system works too.

## Ideas and standards build up as well

In the March session, while the paper was being summarised, I also asked Claude to search my own writing for related ideas. It found 'epistemic accountability', a concept I'd defined in a section of an essay that I'd cut during editing and moved to the trash. Without a search across the whole vault, I wouldn't have found it again.

I recovered the concept and put it back into the published essay on [[Essays/ai-tutor-accuracy-health-professions|AI tutor accuracy]], citing the paper I'd been summarising. I also created a separate [[Notes/epistemic accountability|concept note]] for it on this site, linked the essay to the note, and updated the Zotero summary to mention the connection. Later writing can now link to a concept that had been sitting in the trash.

I wrote the note command for journal articles, with its sections on what the authors claim and what their evidence can support, and hadn't thought about using it for conference talks until October, when it worked for them too. The agent rated Jenson's keynote as *speculative*, because he's an experienced practitioner making a design argument with sketched prototypes and no user testing. It rated the Brucherseifer and Mühlig talk as *limited*, because their main evidence is a usability study from 2003 with self-reported outcomes and a repeat study that hasn't produced results yet. The part of the command that produced those ratings reads, slightly shortened:

```
How much weight can the conclusions bear?
Weight: Strong / Moderate / Limited / Speculative — one sentence saying why.
What the design can and cannot support: name the study design (or, for
non-empirical work, the kind of argument) and the claims it licenses.
Claim: an assertion the authors make — Evidence: what the data or argument
actually shows, and where the claim outruns it. One bullet per claim.
```

Writing down what I mean by a good summary took a few sessions earlier in the year, and it now applies to kinds of source I wasn't thinking about when I wrote it. I made the same point in the post on [[2026-03-07-ai-personas-for-professional-practice|AI personas for professional practice]], about stating your professional standards clearly enough for an AI to work within them.

| Opening of the note | Weight section |
| :-----------------: | :------------: |
| ![[zotero-akademy-note-opening.png\|The opening of the summary note for the Brucherseifer and Mühlig talk in Zotero, naming the slides and transcript as sources and explaining what the talk argues\|300]] | ![[zotero-akademy-note-weight.png\|The weight section of the same note, rating the conclusions as limited and checking three of the talk's claims against the evidence behind them\|300]] |

## Asking for outcomes moves your effort to checking

Once the infrastructure is in place, you can describe the outcome you want and leave the steps to the agent. I wrote about this earlier in the year as the [[2026-02-26-ai-agents-academic-workflow|shift from executing to directing]], and the Akademy request is the clearest example I've had of it, since it named three outcomes and no procedure.

The transcripts came from YouTube's automatic captions, which turned the speakers' names into "Eva Bha Cipha" and "Yan Muling", and the notes can only be as good as that source, so checking them is now my part of the work. I still need to watch the talks again against the notes and decide whether those weight ratings are fair. I also need to test the paragraph at the end of each note that connects the talk to my own work, because a connection that sounds plausible is easy to accept without checking. As I argued in [[2026-06-11-verification-trap|the verification trap]], this checking is slower and harder than "always verify" makes it sound, and it depends on knowing the subject.

## Gaps the two sessions revealed

The March session showed me that adding a note to Zotero doesn't prompt a search for essays and concept notes that should cite the new source. Nothing flags a concept that turns up across several notes but has no note of its own, either.

The October session showed me that my note command assumes the source is a paper, so it has no guidance on how to appraise a keynote, and the agent made reasonable choices that I'd prefer to have written down. It also showed that automatic captions are good enough to summarise from but not to quote from, which matters most for a talk without slides, where the transcript is all there is.

I won't build all of these, but I wouldn't have known about most of them if I hadn't been using what I'd already built. The system got to the point where it could handle the Akademy request because I kept using it, and kept fixing whatever each piece of work showed was missing.

If you want to start on AI infrastructure of your own, begin with one standard you already apply, such as how you judge whether a paper's conclusions hold, or what a useful comment on a student's work contains. Write it down and keep it somewhere your AI tool can read every time you use it. That's how the [[Presentations/2026-09-09-ippta-ai-powered-practice-growth|AI-powered practice growth workshop]] for the International Private Physiotherapy Association worked: delegates kept everything they produced in a single plain-text practice file, which carried their context from one session to the next across the day.
