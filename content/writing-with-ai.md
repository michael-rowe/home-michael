---
title: Writing with AI
description: How AI is actually used in producing what's published on this site, how that differs from the usual picture of writing with AI, and who answers for the result.
enableToc: false
---

Claude is involved in most of what appears on this site, including this page. I'd rather say that plainly than leave you to infer it, partly because the site argues elsewhere for provenance and honest disclosure, and partly because the whole thing is an experiment in what knowledge work looks like when a capable model is part of the working environment rather than a tool you occasionally reach for. The writing is the demonstration of that, and so is the site itself: the components, the navigation, the taxonomy, and the build scripts are almost all written through conversation with Claude Code.

Most of what people picture when they hear "writing with AI" is a chat window: you name a topic, perhaps upload a document or two, and ask for a draft. That's how most academics I know use it. My set-up works differently, and the difference changes what the collaboration can do.

I write in [[Notes/markdown|markdown]], in plain files on my own machine, and Claude works on those files directly through [[Notes/Claude Code|Claude Code]]. It has the same access to what the writing draws on: more than fifteen years of personal notes and reading, and my [[Notes/Zotero|Zotero]] library. A small [[Notes/mcp server|MCP server]] I built gives Claude tools for searching across all of it. It can pull up the notes I've written on a topic, the papers I've annotated, the full text of a PDF, or the thing I wrote three months ago that doesn't sit comfortably with what I'm claiming now. It can also add to that record as we work, so a conversation about a draft often leaves new or revised notes behind, and the next piece starts from a slightly richer place.

The conventions are written down as well. A set of reviewer personas holds my writing style guide, the house style the copy editor enforces, and the citation conventions, and a script checks every page's tags against the site's taxonomy. When a finished text needs to become something else, like a PDF, a handout or a slide deck, it's converted from the same markdown through a design template of my own, so the outputs look like they belong together.

This set-up is what allows a long process. A piece might begin with hours of conversation across several sessions: working through the literature alongside my own notes, arguing about the framing, outlining, disagreeing, and going back to the reading. I leave instructions and questions for Claude as HTML comments[^html-comment] inside the draft, next to the sentence they're about. Drafting comes late, section by section, and each section gets more commentary and editing. By the time there's prose on the page, most of the thinking has already been argued over.

Essays go through the same process as everything else. The one difference is that an essay sometimes starts with writing of my own, done before Claude is involved, because that's often how I find out what I think. A fair amount of the prose that ends up on the site, essays included, isn't mine in any sentence-by-sentence sense.

Then there's the checking, which is where most of the actual labour goes. Claims about the world get verified: citations, quotations, numbers, whether a source says what I've said it says. For a long time that was the part I wouldn't hand over. It's where these models were weakest, and until I had a workflow I could trust, I was reluctant to let them near it. I've since tested and refined that process, and Claude is now far better and more reliable at the checking than I am.

What I won't do is annotate which sentences came from where. Sarah Eaton's (2023) account of postplagiarism is the most useful thing I've read on this: hybrid human-AI writing is becoming ordinary, and trying to determine where the human ends and the machine begins is futile. I care less about where the seam falls than about whether anyone will stand behind what's on the page.

I will. Handing over some of the production of text doesn't hand over responsibility for it, for whether the claims hold up, whether the sources exist, whether it was worth your time. If something here is wrong, it's mine to answer for, and not the model's.

Two things I'm deliberately not saying. I'm not claiming that every sentence passed under my eye in its final form, because some pages here are much more machine than me and pretending otherwise would be the comfortable lie. And none of this is an apology, because whether I used AI stopped being the interesting question a while ago.

If you want to see the workings, the [source is public](https://github.com/michael-rowe/home-michael), with the full commit history for every page here.

---

Eaton, S. E. (2023, February 25). 6 tenets of postplagiarism: Writing in the age of artificial intelligence. *Learning, Teaching and Leadership*. https://drsaraheaton.wordpress.com/2023/02/25/6-tenets-of-postplagiarism-writing-in-the-age-of-artificial-intelligence/

[^html-comment]: **HTML comment.** A note written into a file between `<!--` and `-->` markers. It stays in the source but never appears on the rendered page. See [comments in computer programming](https://en.wikipedia.org/wiki/Comment_(computer_programming)).
