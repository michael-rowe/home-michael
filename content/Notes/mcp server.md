---
title: MCP server
description: A lightweight programme that exposes specific data sources or capabilities through the Model Context Protocol standard, acting as an adapter between AI systems and diverse data sources.
aliases:
  - Model Context Protocol server
  - context server
type: note
author: "[[Michael Rowe]]"
created: 2026-02-05
updated: 2026-02-05
needs_review: false
tags:
  - generative-ai
  - context-engineering
  - implementation
category: AI implementation
related:
  - "[[context engineering]]"
  - "[[context sovereignty]]"
  - "[[contextual interoperability]]"
  - "[[model-context-protocol]]"
builds_on:
  - "[[model-context-protocol]]"
leads_to:
contradicts:
source: ""
source_url: ""
---

> [!tip] The adapter pattern for AI
> MCP servers solve a translation problem: your data exists in specific formats with particular access patterns, but AI systems need standardised interfaces. Rather than modifying your data sources or building custom integrations for each AI system, MCP servers act as adapters—translating between your data's native format and the protocol AI systems understand.

## MCP server

**One-sentence definition:** A lightweight programme that exposes specific data sources or capabilities through the [[Model Context Protocol]] standard, enabling AI systems to access that data or functionality through standardised interfaces.

Think of MCP servers as translators. Your file system speaks the language of files and directories. Your database speaks SQL. Your knowledge base has its own API. AI systems speak [[Model Context Protocol]]. MCP servers translate between these worlds—they understand how to fetch data from your sources and present it in the format AI systems expect.

Each server typically connects to one data source or service. A file system server knows how to navigate directories and read files. A database server knows how to execute queries and return results. A Slack server knows how to send messages and retrieve conversations. This focused scope keeps servers simple while enabling broad coverage through composition—connect multiple servers to give AI access to multiple data sources.

## What servers expose

MCP servers make four types of capabilities available to AI:

**Resources** are data or content the server can provide—essentially read operations. A file server might expose `file://documents/research.md` as a resource, enabling AI to access that document's contents. Resources make external information available to AI reasoning without requiring AI to understand file systems, databases, or APIs directly.

**Tools** are actions AI can invoke through the server—write operations that cause side effects. A calendar server might expose a "schedule_meeting" tool, enabling AI to actually create calendar events rather than just suggesting them. Tools transform AI from information consumer to active agent capable of taking action in the world.

**Prompts** are reusable templates the server supplies. Rather than crafting prompts from scratch, AI can access pre-written prompts optimised for working with that server's data. A research server might provide prompts for literature synthesis, methodology critique, or theoretical comparison—patterns specific to scholarly work.

**Sampling** enables two-way dialogue where servers can request AI to analyse or transform data. The server doesn't just respond to AI queries; it can initiate requests for AI processing. This creates genuine collaborative loops rather than one-directional retrieval.

The combination of these capabilities enables sophisticated interactions. AI doesn't just read your data—it can reason about it, take action based on it, and engage in structured dialogue mediated by the server.

## Building versus using

The distinction between building MCP servers and using them matters:

**Using servers** means connecting existing MCP servers to your AI system. Someone has already built a server exposing file system access or database queries. You configure your AI application to connect to that server, grant appropriate permissions, and start using the capability. This requires no programming—just configuration.

**Building servers** means creating new MCP servers that expose data sources or capabilities not yet available. Your organisation has a proprietary knowledge base. Your research uses a specialised database. Your workflow involves tools without existing MCP servers. Building a server requires programming but follows standardised patterns provided by the protocol.

The ecosystem's value grows as more servers become available. Early adopters face more server building. Later adopters benefit from existing server libraries covering common use cases.

For scholars, this distinction shapes what's practical. Using existing servers for file systems, databases, or common tools requires minimal technical sophistication. Building custom servers for specialised research infrastructure requires development capability—though the [[Model Context Protocol]] provides frameworks simplifying this work.

## Security and control

MCP servers operate with explicit permission models. When AI requests data through a server, you control what's accessible:

**Granular permissions** enable specifying exactly what data or capabilities AI can access. Not just "access my file system" but "read documents in this specific directory." Not just "query my database" but "read from these tables only, no write access."

**User approval** means AI cannot simply execute tools with side effects. Creating calendar events, sending messages, modifying data—these require explicit user authorisation. This prevents AI from taking unintended actions.

**Transparent logging** records what AI accessed and when, enabling audit and review. You can see exactly what data AI has used, which tools it invoked, what actions it took.

These controls support [[context sovereignty]]—maintaining agency over your context while enabling AI access. The server architecture enables temporary, controlled access rather than permanent data transfer.

## Local versus remote servers

Where MCP servers run affects security, convenience, and capability:

**Local servers** run on your own device, accessing data stored locally. Maximum security and privacy—your data never leaves your machine. AI running locally or remotely can access the server, but the data source itself remains under your physical control. Ideal for sensitive personal or proprietary information.

**Remote servers** run as web services, potentially in cloud infrastructure. More convenient for collaborative work or when data sources are already cloud-hosted. Enables sharing server access across teams. Requires trusting that infrastructure with your data access.

**Hybrid architectures** run sensitive servers locally while using remote servers for less sensitive data. Your research notes stay on your device accessed through local servers. Shared institutional resources use remote servers. This balances security with practical collaboration needs.

The choice isn't binary—different data sources warrant different approaches. The question is which architecture serves your security requirements, collaboration needs, and technical capabilities for each specific data source.

## Building personal infrastructure

For knowledge workers, MCP servers enable creating personal AI infrastructure:

**File system servers** make your documents, notes, and research materials accessible to AI while keeping them under your control. AI can read your literature library, synthesis documents, or research notes—but only what you specify, only when you approve.

**Database servers** expose structured knowledge—citation databases, concept maps, research data—in ways AI can query and reason about. Rather than uploading databases to AI providers, servers enable temporary access for specific tasks.

**Tool servers** let AI interact with your workflow—calendar, email, project management, communication tools—through controlled interfaces. AI can help manage your work without direct access to underlying systems.

**Custom servers** for specialised needs—research instruments, domain-specific databases, proprietary tools—extend AI capabilities into your particular context without requiring vendor support.

This infrastructure supports [[contextual interoperability]]—making your personal knowledge machine-readable while maintaining sovereignty. The servers you build or deploy become the interface between your intellectual work and AI capabilities.

## What this enables

MCP servers make [[intelligence as a service]] practical. Rather than uploading context to access AI capabilities, servers enable AI to access your context temporarily and under your control. This architectural separation—intelligence as remote service, context as local resource—enables the privacy-preserving AI integration that [[context sovereignty]] requires.

For [[context engineering]], servers provide the technical mechanism connecting structured knowledge representations to AI reasoning. Your [[knowledge graph]]s, personal knowledge bases, and research infrastructure become accessible to AI through standardised interfaces without custom integration work.

The question isn't whether to use MCP servers but which ones to deploy, how to configure them, and what permissions to grant. These decisions shape what AI can do with your work—and what remains under your exclusive control.

---

## Sources

- Anthropic. (2024). Model Context Protocol documentation. https://modelcontextprotocol.io
- Diamant, N. (2025). Model Context Protocol (MCP) Explained. https://diamantai.substack.com/p/model-context-protocol-mcp-explained

---

## Notes

The server pattern enables composability—combine multiple focused servers rather than building monolithic integrations. A research workflow might use file system servers, database servers, literature database servers, and custom instrument servers simultaneously. Each handles one concern well; together they provide comprehensive AI access to research infrastructure.