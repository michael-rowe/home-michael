---
title: Intelligence as a service
description: A model for accessing AI capabilities while personal context remains private and under individual control, separating computational intelligence from data ownership.
aliases:
  - IaaS model
  - AI as utility
type: note
author: "[[Michael Rowe]]"
created: 2026-02-05
updated: 2026-02-05
status: draft
needs_review: false
tags:
  - artificial-intelligence
  - context-sovereignty
  - privacy
  - architecture
category: "AI architecture"
related:
  - "[[context sovereignty]]"
  - "[[contextual interoperability]]"
  - "[[Model Context Protocol]]"
builds_on:
leads_to:
  - "[[context sovereignty]]"
contradicts:
source: "Rowe, M., & Lynch, W. (2025). Context sovereignty for AI-supported learning: A human-centred approach."
source_url: ""
---

> [!tip] The utility model for AI
> Electricity providers don't need to know what you're powering in your home to deliver electricity. Internet providers don't need to know what websites you're visiting to provide connectivity. Intelligence as a service applies the same principle to AI: you access computational capabilities while your personal context—what you're actually working on—remains private and under your control.

## Intelligence as a service

**One-sentence definition:** A model where powerful AI capabilities are accessed as a utility while personal context remains private and under individual control, separating computational intelligence from data ownership.

The current AI paradigm requires a troubling exchange: to access AI capabilities, you upload your work to providers' systems. Want help with your research? Share your literature library. Need clinical decision support? Provide patient information. Seeking writing assistance? Give AI your drafts, your notes, your thinking.

This extractive model treats AI access and data surrender as inseparable. Intelligence as a service breaks this coupling by positioning AI capabilities as computational resources you access—like electricity or internet connectivity—without surrendering the context you're working within.

## How it works

Intelligence as a service relies on architectural separation between where intelligence lives and where your context lives:

**AI models** providing computational capabilities run on remote servers or locally on your devices. These models are powerful, sophisticated, capable of complex reasoning and generation. But they don't permanently store or own your personal context.

**Your context** remains in systems you control—your personal knowledge base, your notes, your documents, your structured information. This context stays private, under your governance, accessible only with your explicit permission.

**The connection** between intelligence and context happens temporarily, for specific tasks, under your control. You grant AI access to relevant context for a particular interaction, it reasons using that context, then the connection closes. The AI provider never owns your context; you've merely allowed temporary access to computational capabilities.

This is analogous to how you use electricity: the power company provides capability (electrical current) that temporarily flows through your devices to accomplish your purposes, but the company doesn't own or control what you're powering. You're purchasing capability, not surrendering sovereignty.

## Why this matters

The intelligence as a service model addresses several persistent problems with current AI interaction:

**Privacy without capability loss:** You don't have to choose between privacy and AI assistance. Access powerful capabilities while keeping sensitive information under your control.

**Reduced vendor lock-in:** Your context isn't trapped in a single provider's system. You can work with different AI capabilities as needed while maintaining consistent access to your own context.

**Clearer boundaries:** The separation between what you own (context) and what you access (intelligence) creates clearer understanding of the relationship. You're purchasing computational capability, not becoming a data source for AI providers.

**Power rebalancing:** Current models position users as supplicants seeking access to AI capabilities in exchange for data. Intelligence as a service positions you as a customer purchasing utility services—fundamentally different power dynamics.

For knowledge workers, this shift matters because your intellectual infrastructure—the frameworks, connections, and commitments you've built over years—remains under your control. You're not surrendering it to access AI assistance. You're integrating AI capabilities into your existing cognitive environment.

## Technical implementation

Intelligence as a service becomes practical through several architectural approaches:

**[[Contextual interoperability]]** makes your personal knowledge accessible to AI temporarily without permanent transfer. Your context stays in your systems; AI accesses it only when and how you specify.

**[[Model Context Protocol]]** provides standardised ways for AI to query your context with fine-grained permission control. You determine what information AI can access, when, and for what purposes.

**Federated architectures** enable AI to learn from your context without centralising it. The intelligence adapts to your patterns without requiring you to upload everything to remote servers.

**Local-first computing** runs capable models directly on your devices for sensitive work, accessing remote intelligence only when appropriate and with your explicit control.

These aren't theoretical—the technologies exist. What's missing is widespread adoption and cultural shift toward treating AI as utility service rather than extractive platform.

## Where this leads

Intelligence as a service enables [[context sovereignty]]—the framework where your personal context remains central and under your control in human-AI collaboration. It provides the technical architecture supporting the philosophical commitment that AI should adapt to human cognitive patterns rather than requiring humans to adapt to AI system requirements.

This model suggests different questions about AI development and deployment:
- How do we ensure intelligence remains accessible as utility rather than controlled by gatekeepers?
- What standards enable interoperability between intelligence services and personal context systems?
- How do we prevent intelligence as a service from becoming another form of digital divide?
- What governance frameworks protect individual context sovereignty while enabling shared intelligence?

The shift from extractive to utility model for AI interaction represents more than technical architecture change—it's a different philosophy about the relationship between humans and artificial intelligence.

---

## Sources

- Rowe, M., & Lynch, W. (2025). Context sovereignty for AI-supported learning: A human-centred approach. Unpublished essay.

---

## Notes

The intelligence as a service model applies utility thinking (electricity, water, internet) to AI capabilities. This framing matters because utilities are regulated, standardised, and treated as essential services rather than extractive platforms. Whether AI will actually develop as utility or remain platform-based depends on technical, regulatory, and commercial decisions still being made.