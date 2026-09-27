---
title: MCP server
description: An MCP server is a small program that connects an AI assistant to one data source or service, such as a reference library, a folder of notes, or a calendar, through the Model Context Protocol. What the server offers sets the limit of what the assistant can see and do there.
aliases:
  - Model Context Protocol server
  - context server
type: note
author: "[[Michael Rowe]]"
created: 2026-02-05
updated: 2026-09-27
draft: false
tags:
  - model-context-protocol
  - context-engineering
category:
  - Technology
related:
  - "[[Notes/model context protocol]]"
  - "[[Notes/Claude Code]]"
  - "[[Notes/context sovereignty]]"
  - "[[Notes/prompt injection]]"
  - "[[Notes/context engineering]]"
keyphrase: MCP server for educators
meta-description: "MCP server for educators: what it is, what it lets an AI assistant see and do, and what to check before you connect one to your files."
reviewed:
  - note_writer
  - writing_style
  - SEO_optimiser
  - copy_editor
linkedin:
---

> [!info] The server decides what the AI can reach
> An MCP server sits between an AI assistant and one of your data sources: your notes, your reference library, or a database. The assistant can only see and do what the server offers it, so choosing or building a server is where you decide how much of your work an AI gets to touch.

## MCP server

**One-sentence definition:** An MCP server is a small program that makes one data source or service available to AI applications through the [[Notes/model context protocol|Model Context Protocol]], the open standard for connecting AI assistants to external data and tools.

A server usually does one job. A file system server lists folders and reads files, a calendar server reads events and creates new ones, and a reference-manager server searches a library and returns citations. The AI application you're working in (Claude Desktop, [[Notes/Claude Code|Claude Code]], or a code editor) connects to whichever servers you've set up, and the assistant sees each one as a list of things it can ask for. Connecting several small servers gives an assistant access to several sources, and none of them needs to know about the others.

### What a server offers

The protocol defines three things a server can offer. *Tools* are actions the assistant can call, like running a search, fetching a record, creating an event, or writing a file. *Resources* are content it can read, such as a document or a database entry, and *prompts* are ready-made instructions for common tasks with that server's data. Most of what an assistant does through a server is calling tools.

That list also marks the edge of what the assistant can do. If a server offers a search tool and a fetch tool, the assistant can search and fetch, and it has no way to delete anything because no tool for deleting exists. The person who builds the server decides what goes on the list, and that's a firmer limit on the AI than an instruction in a prompt, which the model may or may not follow.

### What one looks like

I run a small server of my own that connects Claude to my Zotero[^zotero] library and my notes. It offers tools to search the library, pull an item's metadata and notes, extract the text of a PDF, and search my notes by keyword. When I ask what I've read about [[Notes/programmatic assessment|programmatic assessment]], Claude calls those tools and answers from my library rather than from whatever it absorbed in training. Two of the tools write to the library (one attaches a note to an item and one adds an item by its DOI[^doi]), and they're the only two that can change anything.

A programme team could build the same kind of thing over its curriculum documents: the module descriptors, the placement handbook, and the professional body's standards. With a server that offers only read-only searches, a module lead can ask *which modules assess communication with service users?* or *what does the handbook say when a student misses a placement shift?* and get an answer drawn from the programme's own documents. The assistant can't edit a descriptor, because the server never gave it a way to.

### Using one or building one

Using an existing server takes configuration and no programming: you add an entry to the AI application's settings that names the server and, for some, a folder path or an access key. Servers already exist for file systems, Google Drive, GitHub, common databases, and most widely used services. Building one takes some programming, though less than you might expect. The official libraries for Python[^python] and TypeScript[^typescript] handle the protocol, so a server that wraps a single data source can be a short script, within reach of an educator who's comfortable with a little Python and has an AI assistant to help write it.

### Local and remote

A local server runs on your own computer, and the AI application starts it when it's needed. A remote server runs as a web service, which suits shared material like an institutional repository or a team's records, but means trusting whoever runs it. You can choose per source, keeping personal notes on a local server and reaching a shared resource through a remote one. How the two kinds connect is a matter of the protocol's transports, which [[Notes/model context protocol|the protocol note]] covers.

Running a server locally keeps the source on your machine, but the answers still leave it. Whatever a tool returns goes to the model, and if the model is hosted by an AI provider, that's where it goes. An occupational therapist who connects a server to a folder of home-visit reports and asks a cloud-hosted assistant to summarise their caseload has sent those patients' details to the provider, however securely the folder itself is stored. Patient-identifiable information should only reach a model your organisation has approved for it, and in most clinical settings that rules out a personal AI subscription.

### Consent depends on the application

The protocol's specification says AI applications must get your consent before calling a tool, and most do this with an approval prompt. The specification can't enforce it, so how well you're protected depends on the application, on which tools you've told it to stop asking about, and on whether you read the prompt before clicking through it. The approval prompt also doesn't cover a second risk. Anything a server returns, whether a web page, an email, or a document someone else wrote, reaches the model as text it may treat as instructions, which is how [[Notes/prompt injection|prompt injection]] gets in. Before installing a server, find out who wrote it and what it can touch, as you would with any other software.

Used with that care, servers make [[Notes/context sovereignty|context sovereignty]] practical: your data stays in your own systems, and the model reaches only the parts a task needs, for as long as the task takes.

---

## Sources

- Anthropic. (2024, November 25). *Introducing the Model Context Protocol*. https://www.anthropic.com/news/model-context-protocol
- Diamant, N. (2025, April 10). Model Context Protocol (MCP) explained. *DiamantAI*. https://newsletter.diamant-ai.com/p/model-context-protocol-mcp-explained
- Model Context Protocol. (2026). *Specification* (Version 2026-07-28). https://modelcontextprotocol.io/specification/2026-07-28

[^zotero]: **Zotero**: a free, open source reference manager that stores the articles, books, and PDFs you collect, with their citation details and your notes on them. Many students and researchers use it to build a reference list for a dissertation or a literature review. [Wikipedia](https://en.wikipedia.org/wiki/Zotero)
[^doi]: **DOI (digital object identifier)**: a permanent identifier given to a published article, report, or dataset, which keeps pointing to it even when the publisher's web address changes. It's the string beginning `10.` at the end of most journal references. [Wikipedia](https://en.wikipedia.org/wiki/Digital_object_identifier)
[^python]: **Python**: a general-purpose programming language known for being readable, and widely used in research for analysing data and automating routine tasks. [Wikipedia](https://en.wikipedia.org/wiki/Python_(programming_language))
[^typescript]: **TypeScript**: a programming language built on JavaScript, the language that runs in web browsers, and commonly used for web applications. [Wikipedia](https://en.wikipedia.org/wiki/TypeScript)
