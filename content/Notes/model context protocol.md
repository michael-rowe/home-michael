---
title: Model Context Protocol
description: >-
  An open standard enabling AI systems to access diverse data sources through
  standardised interfaces with fine-grained permission control.
aliases:
  - MCP
type: note
author: '[[Michael Rowe]]'
created: 2026-02-05
updated: 2026-02-05
needs_review: false
tags:
  - generative-ai
  - context-engineering
  - standards
category: AI and technology
related:
  - '[[context engineering]]'
  - '[[context sovereignty]]'
  - '[[contextual interoperability]]'
  - '[[mcp server]]'
  - '[[intelligence-as-service]]'
builds_on:
  - '[[prompt engineering]]'
  - '[[retrieval augmented generation]]'
leads_to:
  - '[[context sovereignty]]'
  - '[[MCP server]]'
contradicts: null
source: ''
source_url: 'https://modelcontextprotocol.io'
---

> [!info] Universal connector, not universal solution
> MCP solves a real problem—fragmented integrations between AI and data sources—by providing a standard interface. But standardisation isn't transformation. MCP makes context integration technically cleaner without automatically making it pedagogically sound, ethically robust, or strategically wise. The protocol enables possibilities; it doesn't determine outcomes.

## Model Context Protocol

**One-sentence definition:** An open standard enabling AI systems to access diverse data sources through standardised interfaces with fine-grained permission control, replacing fragmented point-to-point integrations.

Before MCP, connecting AI to external data sources meant building custom integrations for each combination of AI system and data source. Want Claude to access your file system? Build an integration. Want it to query your database? Build another integration. Want ChatGPT to access the same sources? Start over.

This fragmentation created maintainability nightmares, security inconsistencies, and duplication of effort. MCP addresses this by providing a universal protocol—one standard interface that any AI system can use to access any compliant data source.

The analogy: USB replaced dozens of proprietary connector types with a single standard. MCP aims to do the same for AI-data connections. Whether this succeeds depends on adoption, but the technical foundation is sound.

## How it works

MCP uses client-server architecture with three components:

**MCP servers** expose specific data sources or capabilities through the standard protocol. Each [[mcp server|MCP server]] typically connects to one data source—your file system, a database, Slack, a knowledge base. Think of servers as adapters that know how to fetch or manipulate particular kinds of data while presenting a consistent interface to AI systems.

**MCP clients** run in AI applications and maintain connections to MCP servers. The client sends requests to servers and receives responses. You typically don't interact with clients directly—they're handled by the AI platform you use (Claude Desktop, Cursor, custom applications).

**MCP hosts** are the AI-powered applications themselves—chat assistants, IDE extensions, agents—that want to use external data or tools. The host determines which servers to connect to and manages permission.

The interaction flow: your AI application (host) uses its MCP client to request data from an MCP server, which fetches from the actual data source and returns it through the standard protocol. This separation enables flexibility—swap data sources, change AI systems, add new capabilities—without rebuilding integrations from scratch.

## What MCP enables

The protocol defines four interaction types between AI and servers:

**Resources** provide data or content to the AI—essentially read operations. A file server might expose `file://README.md` as a resource enabling AI to access that file's contents. This makes external information available to AI reasoning.

**Tools** enable AI to invoke actions through the server—write operations causing side effects. Tools let AI do things: run calculations, modify data, send messages, execute code. This transforms AI from passive consumer to active agent.

**Prompts** are reusable templates or workflows that servers supply. Rather than crafting prompts from scratch, AI can access pre-written prompts designed for specific tasks. This enables standardisation of common patterns.

**Sampling** allows two-way communication—servers can request AI to analyse or transform text. The AI asks servers for data; servers ask AI to process that data. This creates genuine dialogue rather than one-directional query-response.

These interaction types, combined with standardised interfaces, enable sophisticated AI-data integration without custom development for each use case.

## Security and transport

MCP emphasises security because servers often access sensitive data or perform powerful actions. Servers implement access controls, and AI hosts typically require user approval before executing tools that modify data or access private information.

The protocol supports different transport mechanisms:

**STDIO transport** runs the MCP server as a local process, communicating through standard input/output pipes. Simple, secure, ideal for local development and personal use.

**SSE (HTTP) transport** runs servers as web services with HTTP endpoints. More flexible—servers can run remotely, enabling cloud deployment and distributed architectures.

The choice of transport affects security, deployment complexity, and use case suitability. Local servers through STDIO offer maximum security for personal data. Remote servers through HTTP enable shared infrastructure and collaborative use.

## What this means for [[context sovereignty]]

MCP provides technical infrastructure supporting [[context sovereignty]]—the framework where personal context remains under individual control while accessing AI capabilities. The protocol's permission model enables fine-grained control over what AI accesses and when.

Rather than uploading all context to AI providers, MCP enables temporary, controlled access. Your data stays in your systems (exposed through MCP servers), AI accesses it only as needed (through MCP clients), and you control permissions (through the host application).

This supports [[intelligence-as-service|intelligence as a service]]—accessing AI capabilities without surrendering context ownership. MCP separates where intelligence lives from where your data lives, enabling the architectural separation that makes context sovereignty practical.

## Critical perspectives

MCP is infrastructure, not solution. It makes certain technical architectures easier to build but doesn't guarantee they'll be built well or used appropriately.

**Standards don't ensure adoption:** MCP's value depends on widespread implementation. If AI platforms don't integrate MCP clients or data sources don't provide MCP servers, the standard remains theoretical. The protocol's success is social and commercial, not just technical.

**Permission models require sophistication:** Fine-grained control is only as good as users' understanding of what they're granting access to. Poorly designed permission interfaces or inadequate user comprehension could undermine MCP's security benefits.

**Standardisation creates path dependence:** Early architectural decisions in standards become difficult to change once widely adopted. MCP's current design reflects particular assumptions about AI-data interaction that may not serve all future use cases.

**Integration isn't transformation:** Making it easier to connect AI to data sources doesn't automatically make those connections pedagogically valuable, ethically sound, or strategically wise. Technical capability precedes thoughtful implementation but doesn't ensure it.

The question isn't whether MCP is good or bad but whether we use standardised AI-data integration to support human-centred goals or merely to make existing problematic patterns more efficient.

## Practical implications

For individuals, MCP enables building personal infrastructure where AI accesses your knowledge bases, files, and tools through standardised interfaces. This supports [[contextual interoperability]]—making your thinking machine-readable while maintaining control.

For organisations, MCP reduces integration complexity when deploying AI across diverse data sources. Rather than custom development for each AI-data combination, implement MCP servers once and connect any compliant AI system.

For developers, MCP provides clear specifications for building AI-integrated applications. Rather than inventing proprietary protocols, implement the standard and gain access to growing ecosystem of compatible servers and clients.

The protocol's value grows with adoption—more MCP servers mean more data sources accessible to compliant AI systems. More AI platforms supporting MCP clients mean wider utility for existing servers. This network effect could drive standardisation or fragment if competing protocols emerge.

---

## Sources

- Anthropic. (2024). Model Context Protocol documentation. https://modelcontextprotocol.io
- Diamant, N. (2025). Model Context Protocol (MCP) Explained. https://diamantai.substack.com/p/model-context-protocol-mcp-explained

---

## Notes

MCP emerged from Anthropic in 2024 but is open source and designed for broad adoption beyond Claude. The protocol addresses real fragmentation problems in AI-data integration while creating new questions about how standardised access to personal data should be governed, what permission models adequately protect user interests, and whether technical standardisation will drive or follow changes in how we think about AI-human collaboration.
