---
title: "Newsletter: February 2026 Update"
description: "A summary of recent site updates and some behind-the-scenes context."
date: 2026-02
type: newsletter
status: draft
---

> [!info] Project Status
> This site was launched just over two months ago as a home for **/home/michael**. Since then, it has been under aggressive development—not just in terms of the content being published, but in the evolution of the site's architecture and the frameworks that support it. This update captures the significant velocity of the past 30 days.

> [!tip] Subscriber Context
> [Write 1-2 paragraphs here about the 'Why' behind this month's work.]

## Project updates


### Posts
- **[[2026-02-06-LLM-similarities-human-cognition|AI and human cognition: What if we're the language models?]]** (2026-02-06): What LLM terminology reveals about human cognition, and why we resist acknowledging the extensive similarities between AI and human thinking.
- **[[2026-02-05-AI-tripwires-and-assessment-security-theatre|AI tripwires and assessment security theatre]]** (2026-02-05): AI tripwires in assessment create adversarial dynamics between educators and students while detecting carelessness rather than learning absence
- **[[2026-01-28-bitter-lesson-higher-education|A bitter lesson for higher education]]** (2026-02-03): Rich Sutton's 'Bitter Lesson' applies to education: AI reveals that artifact-based assessment never truly measured learning.

### Notes
- **[[arms race dynamics higher education|Arms race dynamics in higher education]]** (2026-02-05): How arms race dynamics in higher education create adversarial relationships between institutions and students, and what drives these cycles
- **[[contextual interoperability|Contextual interoperability]]** (2026-02-05): The capacity to make human thoughts and knowledge machine-readable while preserving their human meaning, creating a cognitive interface between human and artificial intelligence.
- **[[intelligence-as-service|Intelligence as a service]]** (2026-02-05): A model for accessing AI capabilities while personal context remains private and under individual control, separating computational intelligence from data ownership.
- **[[mcp server|MCP server]]** (2026-02-05): A lightweight programme that exposes specific data sources or capabilities through the Model Context Protocol standard, acting as an adapter between AI systems and diverse data sources.
- **[[model-context-protocol|Model Context Protocol]]** (2026-02-05): An open standard enabling AI systems to access diverse data sources through standardised interfaces with fine-grained permission control.
- **[[system prompt|System prompt]]** (2026-02-05): Persistent context included in every message to an AI model, establishing consistent behaviour, knowledge, or constraints across interactions.
- **[[large language models|Large language models]]** (2026-02-04): Large language models are deep learning models with billions of parameters, trained on vast text corpora using self-supervised learning, capable of general-purpose language tasks.




## Behind the Scenes: Site & Infrastructure



### Rename honeypots to tripwires for accuracy

Replace "honeypot" terminology with "tripwire" throughout the
assessment security theatre post. Add prompt injection explanation
to describe how the detection mechanism works. Update slug and
add old URL as alias for redirects.

Also fixes date in AI human cognition post (2025 → 2026).

### Add AI human cognition post and publish honeypots post

Add new post exploring parallels between LLM and human cognition.
Publish AI honeypots assessment post (draft: false).
Update date sorting to use created date instead of modified.

### Add new post on AI honeypots and update notes

- Add post on AI honeypots and assessment security theatre
- Add note on arms race dynamics in higher education
- Update notes on context engineering, MCP, and related topics

### Add and update notes, ignore personas folder

- Add personas folder to gitignore and Quartz ignorePatterns
- Add new notes: contextual interoperability, intelligence-as-service,
  mcp server, model-context-protocol, system prompt
- Update existing notes with refinements

### Editorial refinements to AI posts

- Fix link path in thoughtful AI use post
- Minor wording and clarity improvements in bitter lesson post

### Add SEO slugs to posts and update post template

- Replace permalink field with slug field (Quartz-compatible)
- Add keyphrase-based slugs to all posts for cleaner URLs
- Rename and reorganize posts with updated dates
- Update post template with slug field

### Add speaking page and top navigation link

- Create speaking page with topics, upcoming talks, and contact form
- Add Speaking link to top navigation between About and Contact

### Add share buttons, footer pages, and site infrastructure

- Add ShareLinks component with X, LinkedIn, Bluesky, email, copy link
- Create privacy policy, uses, colophon, and accessibility pages
- Update footer with links to new pages using proper relative paths
- Add footer link styling

### Add AI literacy framework, LLM accessibility, and newsletter

- Add AI literacy development framework for embedding AI literacy into courses
- Create generic classroom AI policy template with metadata example
- Add llms.txt and robots.txt for LLM discoverability
- Add Kit newsletter signup form
- Update theme colours (steel blue for light mode, brighter blue for dark)
- Link related AI literacy content to new framework


## Current Reflections

[Placeholder: Add any additional notes, resources you're finding useful, or questions you're asking the audience.]

---

*This draft was auto-generated from the site's project history to serve as a starting point.*
