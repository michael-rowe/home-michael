---
title: A personal design system for scholarly output
type: post
description: Almost everything I produce starts as a markdown file and ends in a different format — a slide deck, a handout, a Word document, this website — and until September 2026 I designed each one from scratch. I've replaced that with a personal design system with one visual language, one identity, and a template for each format, all reading the same token file. This post explains what the system is, how the pieces fit together technically, and what's still unfinished.
meta-description: How I built a personal design system for slide decks, handouts, and this website, with every format reading one token file.
keyphrase: personal design system
author: "[[Michael Rowe]]"
date: 2026-09-29
updated: 2026-09-29
tags:
  - publishing
  - open-scholarship
  - information-architecture
  - documentation
category:
  - Scholarship
  - Technology
related:
  - "[[Posts/2026-09-29-quartz-graph-view]]"
  - "[[Presentations/2026-09-24-atocp-making-sense-of-ai]]"
  - "[[Notes/markdown]]"
  - "[[Notes/plain text]]"
  - "[[Notes/pandoc]]"
  - "[[Notes/open source software]]"
draft: false
enableToc: true
linkedin:
---

> [!info] Design once, then stop designing
> My decks, handouts, and this website now read their colours, type, and structure from one file, and Word documents are next. Each format carries different things in the same identity, and I no longer spend an evening making a slide deck look acceptable.

Almost everything I produce starts life as a [[Notes/markdown|markdown]] file. An invited talk begins as a page of notes, a workshop handout as a list of concepts and takeaways, and a paper for a committee as a draft I've been editing for a week. Then each one has to become something else: a slide deck, an A4 PDF, a Word document on SharePoint, a page on this site.

Until September 2026 every one of those conversions was improvised. I'd assemble a [[Notes/pandoc|pandoc]] command from memory, write a slide theme more or less from scratch, or build a background in Google Slides, screenshot it, and paste it in behind the text. The design work was repeated for every output, and the details that should travel with a shared document (its version, its date, whether it's a draft or final) were typed in again by hand or left off. The time I spent making things look acceptable was time I didn't spend on what they said.

So I've built a personal design system, of the kind product teams use to keep a family of apps looking like they belong together, scaled down to one person's outputs. The approach transfers well beyond my own work, and writing it down is also how I find out what I haven't finished.

## Three layers

The system has three layers, borrowed from the way multi-brand design systems are usually organised.

The first is the **language**: the structural decisions that hold across everything. Sections are marked with a monospaced label (`§01`, `§02`) on a left rail and separated by 2px lines, with 1px hairlines between rows and columns. There are no rounded corners, no shadows, and no cards. Metadata goes in a row of small uppercase "chips" under the title. There's one accent colour, and it's used for marks and lines rather than for carrying text.

The second is the **identity**: the palette, the typefaces, and the treatment of my name. Mine uses a cool grey background, a single ink blue, and IBM Plex Sans and Plex Mono. It's kept separate from the language so that another identity could share the same structure without borrowing my colours. When I present my own work at someone else's event there's an endorsed variant, which keeps my identity and adds a band at the foot of the title slide naming the host.

The design itself came out of a single session with Claude Design[^claudedesign], working from a brief I'd written about who the identity was for and what register it needed ("calm, modern, clean", closer to a well-set book than a personal brand). The session produced two versions, and I chose the second, which departed from my own brief in three places: a cool grey background instead of a warm one, blue instead of green, and Plex Sans instead of the typeface I'd suggested. I've learned to treat that kind of departure as useful information. I'd described what I thought I wanted, and it was only when I saw both side by side that I could tell which one I'd actually use.

The third is the **format**: a deck, a one-pager, a document, the website. Each format has its own template and stylesheet, and all of them read the same identity. A workshop can therefore have a deck, a handout, and a reference sheet that visibly belong together. Here's [[Presentations/2026-09-24-atocp-making-sense-of-ai|my talk at the BOA Congress]] in three of them: the opening slide, the one-page handout, and the talk's page on this site.

![[design-one-talk-three-formats.png|Three formats for one talk from my personal design system: the title slide of the ATOCP deck, its A4 handout, and its presentation page on this site, all in the same grey background, blue accent, and Plex type]]

## One file that everything reads

The part that makes these pieces one system is that every format reads the same file. The identity is described in a markdown document, which is where I make decisions and record why. From that document I derive a short CSS file of tokens[^tokens], and the formats read the tokens rather than hold their own copies of the values. A shortened version looks like this:

```css
:root {
  --mr-bg: #f2f3f5;         --mr-surface: #eaecef;
  --mr-ink: #16181c;        --mr-label: #656b75;
  --mr-accent: #2f5fa8;     --mr-accent-deep: #1d3f73;
  --mr-font-sans: "IBM Plex Sans", system-ui, sans-serif;
  --mr-rule: 2px; --mr-hairline: 1px; --mr-radius: 0;
}
[data-theme="dark"] {
  --mr-bg: #101215;         --mr-ink: #eef0f3;
  --mr-accent: #7aa3dd;     --mr-accent-deep: #a8c6ef;
}
```

Each token is a named decision. `--mr-accent` is the blue used for lines and marks, and `--mr-accent-deep` is a darker version of it that's safe for text, because the lighter blue doesn't have enough contrast for body text. The contrast ratios are checked and recorded in the identity document, so when I'm tempted to put a phrase in the lighter blue I can see why I shouldn't.

The website shows how far one file can reach. This site is built with Quartz[^quartz], which expects its colours as nine named values in its own configuration file. Instead of typing my colours into that configuration, a short script reads the token file at build time, maps each token onto one of Quartz's slots (the page background, the link colour, the hover colour, and so on), and writes every token out as a CSS custom property for the site's own styles. When I change a colour in the token file, the site, the slide decks, and the handouts all change with it on their next build, because none of them keeps its own copy of the palette.

The chip row, the tinted phrase in the title, and the section rail on the left of the [[Essays/research-harness-doctoral-ai|essay page]] below are the same pieces that appear on the slides and the handout.

![[design-site-masthead.png|The top of an essay page on this site: the wordmark in the top bar, a contents rail on the left, the title with a tinted key phrase, and a row of mono chips reading essay, v0.9, submitted, and the date]]

## What each format does with the tokens

The deck format is a set of themes for Marp[^marp], which turns a markdown file into slides. There are three densities that share one structure: a conference theme with large type, an organisation theme for meetings, and a teaching theme that allows sub-bullets. A slide's type is set with a one-line comment in the markdown, so the file for a talk stays readable as a document. On content slides the left rail lists every section of the talk, with the current one highlighted, so the audience always knows where they are and what's still to come. The markdown for a section slide is three lines:

```markdown
<!-- _class: section -->
<!-- _header: §03 · what you bring -->
# You bring context that AI doesn't have
```

There's no presenter slide with my name and job title, because the title slide already carries the wordmark and the audience doesn't need my CV before I start. The dark section slide is the only dark slide in a light deck, and the last content slide is always three things to do tomorrow.

![[design-deck-slides.png|Four slides from the ATOCP deck: the title slide with a tinted phrase, a content slide with the section rail on the left, a dark section slide with example chips, and a three-column tomorrow, do this slide]]

The one-pager format is a Python script that takes a markdown file with a known set of headings (the session, three concepts, the key takeaways, and further reading), renders it to HTML with the identity's stylesheet, and prints it to an A4 PDF through a headless browser[^headless]. The script reports the page count, and if the handout runs to two pages the rule is to cut words and leave the type size alone. Each concept links to its note on this site, so a handout from a workshop leads readers to the fuller account.

The formats also share a way of being honest about their own state. The chip row under a title says what the thing is, its version, its status, and its date, and the status vocabulary is deliberately small: *unstable*, *draft*, *for discussion*, *as delivered*. A draft circulated to a programme board that says *for discussion* in the header gets read differently from one that doesn't, and a slide deck marked *as delivered* tells anyone downloading it later that this is what that audience saw. On essays the status is derived from the version number, and it stops at *submitted*. A version number can't tell whether peer review actually happened, so the chip doesn't claim it.

## Where it applies beyond my own work

The same approach suits anyone who produces a family of documents. Consider a programme team that produces a module handbook, a briefing deck for practice educators before placements, and a one-page guide that students carry onto the ward. At the moment those three are probably made by different people in different tools, and they look like it, and the version on the one-pager is anyone's guess. A shared token file and three templates would make them read as one programme, and a status chip would make it obvious which version of the placement guide is current. The design itself could be borrowed from anywhere. The work for the team would be agreeing the values once, and then starting each new document from the templates.

## What's not finished

Two formats are working: the decks, which carried my talk at the BOA Congress, and the one-pager, which produced the handouts for that talk and for an earlier workshop. The website picked up the identity at the end of September 2026. The Word document pipeline, which will take a markdown paper to a formatted document with its version and circulation details in the masthead, is scoped but not built, and so is the single command I want to drive all of it. The essay PDF still uses an older style.

The identity document lists a small set of rules I won't break (no rounded corners, no second accent on a page, never hiding the state of a draft), and the list of exceptions has already grown by one: [[Posts/2026-09-29-quartz-graph-view|this site's graph of pages]] colours its nodes by content type, because there the colour carries meaning the reader needs. That's the kind of decision the system is for, made once, written down with its reason, and then applied everywhere without my having to remember it.

[^tokens]: **Design token**: a single named design decision, such as a colour, a font, or a line thickness, stored as a value that other files refer to by name. Changing the token changes every place that uses it. The [W3C Design Tokens Community Group](https://www.w3.org/community/design-tokens/) publishes a standard format for defining and sharing them. See also [Design system](https://en.wikipedia.org/wiki/Design_system).
[^claudedesign]: **Claude Design**: Anthropic's tool for visual work such as designs, slide decks, one-pagers, and prototypes. You describe what you want, Claude builds a first version on a canvas beside the conversation, and you refine it by talking it through or editing it directly. See [Claude Design](https://claude.com/product/design).
[^quartz]: **Quartz**: an open-source static site generator that turns a folder of markdown notes into a website, with links between notes preserved. See [Quartz](https://quartz.jzhao.xyz/).
[^marp]: **Marp**: an open-source tool that turns a markdown file into a slide deck, with slides separated by a line of dashes and styled by a CSS theme. See [Marp](https://marp.app/).
[^headless]: **Headless browser**: a web browser run without a window, from a script, used here to print a web page to PDF exactly as a browser would render it. See [Headless browser](https://en.wikipedia.org/wiki/Headless_browser).
