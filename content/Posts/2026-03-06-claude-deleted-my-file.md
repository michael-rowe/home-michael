---
title: Claude deleted my file. It was my fault. But Claude took the blame.
type: post
description: A field note on the time Claude deleted my file. The agent followed my instructions precisely and that was the problem. A reflection on a different kind of AI failure mode, and what the model's apology reveals about where responsibility actually sits.
meta-description: Claude deleted my file by following my instructions exactly. A field note on a different kind of AI failure, and who's really responsible.
keyphrase: Claude deleted my file
author: "[[Michael Rowe]]"
date: 2026-03-06
updated: 2026-03-06
tags:
  - agent
  - ai-integration
  - generative-ai
category:
  - Technology
related:
  - "[[2026-03-04-ai-dependency-in-practice]]"
  - "[[2026-03-01-working-effectively-with-ai-agents]]"
  - "[[2026-02-26-ai-agents-academic-workflow]]"
draft: false
slug: posts/claude-deleted-my-file
subtype: field-note
enableToc: false
linkedin-status: "—"

---

Yesterday Claude deleted a file. As per my instruction. Except I didn't want it to. My prompt was clear; I just hadn't thought carefully enough about what I was asking.

I'd asked Claude to [[2026-03-05-ai-agents-lecture-slides|export a slide deck as a PDF]] and place it in the same folder as the source Markdown file. But the Markdown file shared a filename with an existing PDF, so when the conversion script ran, the output overwrote the original. As you can see in the screenshot below, I asked if the original could be recovered but because there was no git history, no trash, and no backup, the file was gone.

![[agent_overwrites_file.png|Claude Code terminal showing Claude confirming a deleted file is unrecoverable — no git history, no trash, no backup|400]]

This isn't the kind of failure people usually worry about with AI. Claude didn't hallucinate or misunderstand the task; it followed my instructions precisely. In this interaction, I was the problem; I gave Claude an ambiguous instruction and I approved the file creation without pausing to consider that the Markdown filename matched the existing PDF.

I also thought the apology was interesting. Claude accepts responsibility, explains what it should have done differently, and says sorry. But, to me, the apology felt insincere. And I think it's because the causal story runs the other way. The instructions I provided were clear, Claude asked for permission, I approved, and the task was completed correctly. The apology itself is gracious, and probably the right social move, but I don't think Claude is in any doubt about who made the mistake. Thinking about this now, I should have followed up by asking Claude why it apologised.

I've now updated my instructions to require explicit confirmation before overwriting any existing file. The broader point I want to make is that Claude executes exactly what you authorise, which means clarity of thought is the critical variable. Mistakes that friction used to slow down can now happen cleanly and instantly. And that's mostly a feature. But sometimes it's going to cause problems.

This makes me wonder how many reported AI bloopers are actually this; not model errors, but the downstream consequences of vague or thoughtless instructions from users.

The model took the blame. But it was my mistake.
