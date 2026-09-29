---
title: What the Quartz graph view reveals about this site
type: post
description: "The graph view is one of the reasons I built this site with Quartz, and now that there's enough writing on it the links between pages have started to form a shape. The graph opens from the top bar, shows the site's writing as a network coloured by type, and lets you choose what's on it. This post shows how to read it, and what it reveals about the site: where the ideas cluster, which concepts hold the rest together, and which ones nothing connects to."
meta-description: The Quartz graph view maps every post, note, and essay on this site as a network, and shows where the writing clusters and where it's thin.
keyphrase: Quartz graph view
author: "[[Michael Rowe]]"
date: 2026-09-29
updated: 2026-09-29
tags:
  - knowledge-graphs
  - information-architecture
  - note-taking
  - open-scholarship
category:
  - Information management
  - Technology
related:
  - "[[Notes/knowledge graph]]"
  - "[[Notes/context engineering]]"
  - "[[Notes/Obsidian]]"
  - "[[Posts/2026-09-29-personal-design-system]]"
draft: false
enableToc: true
linkedin:
---

> [!info] A map of linked writing shows where it's thin
> The links between pages show how the writing fits together: where ideas cluster, which concepts hold the rest together, and which ones nothing connects to. On this site, the concepts closest to what the site is for turn out to be the least connected.

When I moved this site to Quartz[^quartz], the feature I most wanted was the graph view. Most of what I write here is connected: a post uses a concept that has its own note, the note cites an essay, the essay grows out of a talk. A list of posts in date order hides all of that. A graph shows it, and I wanted readers to be able to see the shape of the work as well as its individual pieces.

The graph has only recently started to pay off. With a handful of pages it was a few dots and lines. There are now more than a hundred posts, notes, essays, and talks on the site, which is enough for the links between them to form a shape, and the shape turns out to say something about the work.

## What the graph view shows

Every page on the site is a node, and every link from one page to another is a line between two nodes. A node's size grows with the number of links it has, so a concept that many pieces rely on shows up as a large dot near the middle of the network. Clicking a node takes you to that page. Hovering over one brings up its title and fades everything that isn't directly connected to it, so you can see a page's immediate neighbourhood. Zooming in shows the titles of the pages around it.

It opens from the graph icon in the top bar, or with `Ctrl`+`G` (`Cmd`+`G` on a Mac), and closes with `Esc` or the button in the top-right corner. It isn't offered on phones, which don't have room for it to be readable.

## Choosing what's on the map

The graph opens with the site's writing: posts, notes, essays, guides, projects, and talks. Each kind has its own colour, with a key in the panel on the left.

![[global-graph-default.png|The default Quartz graph view on this site: posts in blue, notes in green, essays in ochre, talks in purple, with the settings panel on the left and the close button top right]]

The panel lets you switch each kind of writing on or off, add the podcasts and annotated readings, bring in the tags, and spread the network out with the spacing slider. Your choices are kept in your own browser for next time, and *Reset* puts everything back.

![[global-graph-settings.png|The settings panel at the top left of the graph: a checkbox and colour key for each kind of writing, a Tags checkbox, a spacing slider, and a Reset button, with part of the network beside it]]

## Reading the map

Once you know what's on the map, it starts to show things about the writing as a whole: where ideas cluster, which ones hold the rest together, and where the connections are missing.

### Clusters

Because linked pages pull each other close, pages about related things end up in the same region without anyone putting them there. Switching everything off except the notes makes this easiest to see. The concept notes separate into two loose groups, one above the other, joined by a small number of lines running between them.

![[global-graph-notes.png|The graph with only notes switched on and every label showing: notes about language models, tokens, hallucination, and AI literacy in an upper group; notes about retrieval, knowledge graphs, markdown, git, and Claude Code in a lower group; a few unconnected notes around the edge]]

I wanted to know what the split was, so I took the links between the 59 notes and ran them through a community detection algorithm[^community], which looks for groups of nodes that link to each other more than they link to the rest. It found three groups. The layout draws two of them side by side at the bottom, so they look like one.

The upper group is about **the model**: what a language model is and how it behaves. The note on [[Notes/large language models|large language models]] is its hub, with token, context window, system prompt, hallucination, sycophancy, and context rot around it. The notes on [[Notes/AI literacy|AI literacy]] sit here too, which makes sense, since most of what I've written about AI literacy is about understanding those behaviours.

The lower left is about **retrieval and knowledge structures**, the ways of getting the right material in front of a model: [[Notes/knowledge graph|knowledge graphs]], graph and vector databases, embeddings, retrieval-augmented generation, single-hop and multi-hop reasoning, and the Model Context Protocol. [[Notes/context engineering|Context engineering]] sits at its centre, and it's the most connected of all the notes, linked to nineteen others.

The lower right is **the plain-text toolchain**: markdown, plain text, Obsidian, git and GitHub, pandoc, YAML, LaTeX, Claude Code, and the notes on harness engineering and headless AI. These are the tools I write about using, and they link to each other densely because using one usually means using several.

The lines between groups are worth following. Most of the links between the model and the other two run through context engineering, which connects to large language models, the context window, and the system prompt. A few others cross on their own: hallucination to retrieval-augmented generation, the Model Context Protocol to the system prompt, and multi-hop reasoning to [[Notes/programmatic assessment|programmatic assessment]]. The notes at either end of a line like that are where one set of ideas meets another, and in my experience that's where the most interesting work comes from, when something from one area turns out to explain something in another. The graph shows where the bridges are and how few of them there are, and judging whether each one is a good bridge is left to the reader.

### Hubs

The largest dots are the concepts that many pieces depend on. Zooming into the densest part of the default view shows one of these concentrations. The notes on the tools I use for writing and research (Claude Code, Zotero, Obsidian, markdown, plain text) sit close together, each with a dozen or more lines, surrounded by the posts that describe using them.

![[global-graph-dark.png|A zoomed-in view of the graph in dark mode, with labels showing: large green note nodes for Claude Code, Zotero, Obsidian, Markdown, and Plain text, surrounded by blue post nodes about AI workflows and agents]]

That's a useful thing to see. The site is meant to be about AI in health professions education, and the densest patch in the graph is about my working environment.

### Tags as gathering points

Turning the tags on adds a hollow ring for each tag, joined to every page that carries it. With posts and notes switched on, the large rings show which themes run through the most writing.

![[global-graph-tags.png|The graph with posts, notes, and tags switched on and the spacing increased: hollow tag rings of different sizes among blue post and green note nodes, with the largest rings near the centre joined to many pages]]

This is where gaps start to show. A large tag ring surrounded by posts, with no note sitting near it, is a theme I keep writing about without ever having explained the concept at its centre. A reader arriving from any one of those posts has nowhere to go for the underlying idea. The site's rule is that a term the writing keeps returning to earns its own note, and the graph is a quick way of finding the terms that have been returned to often enough.

### Isolated ideas

The dots floating on their own around the edge are pages that nothing else on the site links to. A page like that is harder to find and harder to place in context, and it usually means I wrote it and never came back to connect it. Most of the talks sit near the edge too, with only one or two lines each, because a talk page links out to the notes behind it far more often than anything links back to the talk. The graph turns these into a to-do list: a talk that should be cited from the post it grew into, or a note that the essay using the concept never mentions.

The notes-only view shows the same thing among the concepts, and it's the finding that has stayed with me. Five notes have no links to any other note at all, and four of them are about scholarship and higher education: [[Notes/Boyer's model of scholarship|Boyer's model of scholarship]], [[Notes/arms race dynamics higher education|arms race dynamics in higher education]], [[Notes/distributed cognition|distributed cognition]], and [[Notes/wicked problems|wicked problems]]. Two more, on [[Notes/research taste|research taste]] and the [[Notes/research industrial complex|research industrial complex]], link only to each other. Set beside the dense patch of tool notes, that's an uncomfortable picture. The concepts closest to what the site says it's for are the ones least woven into the rest of it. The pattern tells me where the writing has concentrated and where the connecting work hasn't been done yet, and it gives me a way of noticing when the balance moves further than I intended.

### Missing connections

Some gaps only show when two pages sit close together without a line between them. They're near each other because they share neighbours or tags, which suggests they're about related things, but neither mentions the other. Hovering over one shows its direct links and fades the rest, so the missing line becomes visible as an absence. Some of those deserve a link, and it only takes a minute to check.

## Beyond this site

The same kind of map would work for any body of linked material. A programme team that kept its module descriptors, placement guides, and teaching notes as linked pages could open a graph like this and see which concepts are taught in only one module, which placement guidance nothing refers to, and where the reading list connects to the assessment and where it doesn't. A competency that appears in the framework but sits on its own at the edge of the graph is one that no module has claimed. All of this depends on the pages being linked to each other as they're written.

If you'd like to try it here, open the graph from the icon in the top bar, switch off everything except notes, and look at the dots around the edge. Each one is a concept that isn't yet linked to any other note.

[^quartz]: **Quartz**: an open-source static site generator that turns a folder of markdown notes into a website, keeping the links between notes and drawing them as a graph. See [Quartz](https://quartz.jzhao.xyz/).
[^community]: **Community detection**: a family of methods for finding groups in a network, where nodes inside a group link to each other more often than to nodes outside it. I used the Louvain method, which is quick and needs no guess at how many groups to expect. See [Community structure](https://en.wikipedia.org/wiki/Community_structure).
