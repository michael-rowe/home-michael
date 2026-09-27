---
title: Model Context Protocol
description: The Model Context Protocol (MCP) is an open standard for connecting AI applications to external data and tools through one common interface, in place of a custom integration for every pairing. It makes connections technically cleaner; whether they are wise ones is still a decision for the people who set them up.
aliases:
  - MCP
type: note
author: "[[Michael Rowe]]"
created: 2026-02-05
updated: 2026-09-27
draft: false
tags:
  - model-context-protocol
  - context-engineering
  - standards
category:
  - Technology
related:
  - "[[Notes/mcp server]]"
  - "[[Notes/context sovereignty]]"
  - "[[Notes/contextual interoperability]]"
  - "[[Notes/context engineering]]"
  - "[[Notes/intelligence as a service]]"
  - "[[Notes/prompt injection]]"
meta-description: "What is Model Context Protocol? How the open standard connects AI assistants to data and tools, and what educators should ask before switching one on."
keyphrase: "what is model context protocol"
reviewed:
  - note_writer
  - writing_style
  - SEO_optimiser
  - copy_editor
linkedin:
---

> [!info] Universal connector, not universal solution
> MCP solves a real problem: every AI application used to need its own custom integration with every data source. It replaces those with one standard interface. Standardisation isn't transformation, though: a cleaner connection isn't automatically a pedagogically sound, ethically robust, or strategically wise one.

## Model Context Protocol

**One-sentence definition:** The Model Context Protocol (MCP) is an open standard that lets any compliant AI application connect to any compliant data source or tool through the same interface.

Before MCP, connecting an AI assistant to your files meant building an integration for that assistant and that source. Querying a database took another one, and moving to a different assistant meant starting again. MCP replaces these point-to-point connections with a single protocol, much as USB replaced a drawer of proprietary cables. Anthropic released it as an open standard in November 2024, and it's since been taken up by AI applications from several other companies.

## How it works

The protocol names three roles. The **host** is the AI application you work in: a chat assistant, [[Notes/Claude Code|Claude Code]], or a code editor. Inside the host, a **client** holds the connection to each **server**, a small program that makes one source or service available: a folder of notes, a reference library, a calendar. The host decides which servers to connect to and asks for your permission; the client and server exchange messages in a standard format[^json-rpc]. Because every server speaks the same protocol, you can swap the source, add a new one, or change the assistant without rebuilding anything.

A server can offer three kinds of thing: *tools* the model can call, *resources* it can read, and *prompts*, ready-made instructions for common tasks. What that looks like in practice, and why the list of tools sets a firmer limit on the AI than any instruction, is the subject of the [[Notes/mcp server|MCP server]] note. Traffic in the other direction is limited: the one feature a client offers servers is *elicitation*, which lets a server ask you, through the host, for information it needs to finish a task.

Messages travel between client and server in one of two standard ways. With **stdio**[^stdio], the host starts the server as a program on your own computer and they exchange messages directly. With **Streamable HTTP**[^http], the server runs as a web service, which lets it live elsewhere and be shared by a team or an institution. Earlier versions of the specification used a different web transport, and older guides still describe it.

## A specification that moves

MCP has been revised often since its launch, and each revision is published as a dated version of the specification; this note follows the version dated 28 July 2026. Earlier versions let servers ask the model to generate text for them (a feature called *sampling*), and that is gone from the current core. Articles written a year ago describe a protocol that differs in several details, so it's worth checking the date on anything you read about it, including this note.

## Switching on a supplier's server

Most educators will meet MCP as a governance question. Suppose the company behind the e-portfolio a diagnostic radiography programme uses for placement records announces an MCP server. Once it's switched on, any compliant assistant a student or practice educator uses can reach those records, within whatever the server allows. The questions a programme team needs answered first are which tools the server offers, whether any of them write or delete, and whose model receives the data they return. The protocol makes the connection possible and leaves those decisions to whoever switches it on.

Used with that care, MCP supports [[Notes/context sovereignty|context sovereignty]]. You keep your material in your own systems and let a model reach the part a task needs, for as long as the task takes, and nothing has to be uploaded to an AI provider in advance. Deciding which part that is, and when the model gets it, is the work of [[Notes/context engineering|context engineering]], and MCP is one of the main ways of doing it. It separates where the intelligence lives from where your data lives, which is the arrangement [[Notes/intelligence as a service|intelligence as a service]] depends on.

## What the protocol can't guarantee

The protocol's own specification says hosts must get your explicit consent before calling a tool or exposing your data, and then concedes that it can't enforce this. Protection depends on the application's design and on whether you read the approval prompt before clicking through it. Consent also does nothing about content: whatever a server returns reaches the model as text it may treat as instructions, which is how [[Notes/prompt injection|prompt injection]] gets in.

Standardisation has costs of its own. Early design decisions become hard to change once widely adopted, and a protocol shaped around one set of assumptions about how AI and data interact may not suit uses nobody has thought of yet. The frequent revisions are partly the protocol's designers finding that out as people use it.

None of this makes MCP good or bad in itself. What matters is whether the connections it makes easy get used to support human-centred goals, or only to make existing problematic patterns run more smoothly.

---

## Sources

- Anthropic. (2024, November 25). *Introducing the Model Context Protocol*. https://www.anthropic.com/news/model-context-protocol
- Diamant, N. (2025, April 10). Model Context Protocol (MCP) explained. *DiamantAI*. https://newsletter.diamant-ai.com/p/model-context-protocol-mcp-explained
- Model Context Protocol. (2026). *Specification* (Version 2026-07-28). https://modelcontextprotocol.io/specification/2026-07-28

[^json-rpc]: **JSON-RPC**: a simple, widely used format for one program to ask another to do something and get a reply, written as structured text. MCP uses it so that every client and server phrases requests the same way. [Wikipedia](https://en.wikipedia.org/wiki/JSON-RPC)
[^stdio]: **stdio (standard input and output)**: the channels every program on a computer has for receiving text and sending it back, the same ones you use when typing into a terminal. Using them means the server needs no network connection at all. [Wikipedia](https://en.wikipedia.org/wiki/Standard_streams)
[^http]: **HTTP**: the set of rules web browsers and web servers use to exchange pages and data; it's the "http" at the start of a web address. A transport built on it lets an AI application reach a server anywhere on the internet, the same way a browser reaches your institution's virtual learning environment. [Wikipedia](https://en.wikipedia.org/wiki/HTTP)
