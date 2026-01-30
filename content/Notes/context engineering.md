---
title: Context engineering
description: A system-level discipline focused on building dynamic, state-aware information ecosystems for AI agents
aliases:
  - context design
type: note
author: "[[Michael Rowe]]"
created: 2026-01-08
updated: 2026-01-30
status: draft
needs_review: false
tags:
  - context-engineering
  - generative-ai
  - language-model
  - information-architecture
  - knowledge-graphs
category:
  - Generative AI
related:
  - "[[prompt engineering]]"
  - "[[knowledge graph]]"
  - "[[graphRAG]]"
  - "[[multi-hop reasoning]]"
  - "[[Model Context Protocol]]"
  - "[[retrieval augmented generation]]"
  - "[[context engineering for academics]]"
builds_on:
  - "[[prompt engineering]]"
leads_to:
  - AI agents
contradicts:
source: ""
source_url: ""
---

## Definition

**Context engineering** (noun): The process of building dynamic systems that provide large language models with all the necessary information, instructions, and tools to accomplish tasks reliably.

Context engineering is not merely an extension of [[prompt engineering]] but a distinct system-level discipline focused on creating dynamic, state-aware information ecosystems for AI agents. It shifts the frontier of AI development from model-centric optimisation to context-centric architecture.

Key characteristics:
- Builds relationships between concepts that AI and humans can traverse
- Leverages structured, relationship-aware knowledge representations
- Creates intelligent retrieval systems that surface relevant information when needed
- Focuses on knowledge architecture rather than just information retrieval

## Context and background

Context engineering emerged as practitioners recognised that the most capable models often underperform not due to their own limitations, but because they are provided with incomplete or poorly structured context. As Harrison Chase observed, "Context engineering is building dynamic systems to provide the right information and tools in the right format such that the LLM can plausibly accomplish the task."

The shift from [[prompt engineering]] to context engineering reflects broader trends in AI:
- Manual craft → Automated intelligence
- Simple retrieval → Complex reasoning
- Individual optimisation → Systematic architecture

> "Prompt engineering" was coined as a term for the effort needing to write your task in the ideal format for a LLM chatbot. "Context engineering" is the next level of this. — Walden Yan

## Related concepts

*[[Knowledge graph]]*: The primary data structure for context engineering, enabling explicit relationship modelling and traversal between concepts.

*[[GraphRAG]]*: A technique that automates the creation of knowledge graphs by extracting entities and relationships from documents.

*[[Multi-hop reasoning]]*: The ability to draw conclusions by traversing multiple connected concepts—a key capability enabled by context engineering.

*[[Retrieval augmented generation]]*: The simpler precursor approach using vector databases and embeddings for similarity-based retrieval.

## Distinctive characteristics

Context engineering differs fundamentally from [[prompt engineering]]:

| Aspect | Prompt engineering | Context engineering |
|--------|-------------------|---------------------|
| Flow | Linear: Query → Search → Retrieve → Generate | Graph-aware: Query → Reason → Traverse → Synthesise |
| Information structure | Flat text chunks based on similarity | Entities, relationships, hierarchies |
| Reasoning | Single-hop, direct question-answer | [[Multi-hop reasoning]] across connected concepts |
| Core philosophy | "Find information that appears contextually similar" | "Understand and reason over explicit relationships" |
| Semantic encoding | Distributional ("you know a word by the company it keeps") | Structural ("you know a concept by its connections") |

### Technical architecture

**Context engineering stack:**
1. Source Layer: Documents plus curated knowledge
2. Processing Layer: [[GraphRAG]] entity extraction and relationship detection
3. Storage Layer: [[Knowledge graph]]s with relationship traversal
4. Query Layer: Complex queries requiring [[multi-hop reasoning]]
5. Orchestration Layer: Graph query engines with relationship reasoning
6. Engineering Layer: Context structuring with reasoning paths
7. Interface Layer: [[Model Context Protocol]] servers with permission control
8. AI Layer: Enhanced language models with graph reasoning capabilities

## Applications

Context engineering is essential for:
- **Reliable AI agents**: Long-running agents require consistent context to perform effectively
- **Complex knowledge domains**: Where relationships between concepts matter
- **Multi-source integration**: Combining information from diverse knowledge bases
- **Permission-controlled access**: Sophisticated access control over what information is surfaced

Choose context engineering when you need:
- Complex reasoning requirements
- Multi-source knowledge integration
- Domain expertise requiring relationship understanding
- Long-term knowledge management strategy

### Core principles

Successful context engineering relies on three key elements:
1. **Knowledge architecture**: Organising information into traversable structures
2. **Integration systems**: Bridging information sources and AI tools
3. **Implementation strategy**: Deploying and measuring solutions

> Making context engineering work comes down to three key elements: Knowledge Architecture, Integration Systems, Implementation Strategy. — Sean King

## Implications

Context engineering positions knowledge architectures as equally important as information retrieval. Traditional chatbots force a choice: either work with the model's general knowledge or upload everything and hope it fits in context. Context engineering sidesteps this by building intelligent retrieval systems that surface exactly the relevant information when needed.

This is not simply adding more context (e.g., giving models access to emails and calendars)—that would be [[prompt engineering]] with more sources. True context engineering involves:
- Dynamic retrieval from external sources
- Robust memory management across interactions
- Summarising previous conversations
- Tracking user preferences
- Integrating real-time data

## Questions and tensions

- How do we balance implementation complexity against the benefits of sophisticated reasoning?
- When is a hybrid approach (combining both paradigms) optimal?
- How do we manage the longer development cycles context engineering requires?
- What expertise is needed to architect effective knowledge ecosystems?

## My thinking

The central insight is that "context is king"—it serves as the primary differentiator between a fragile demo and a robust, production-grade AI product. Even highly intelligent models cannot perform effectively without appropriate context about what they're being asked to do.

The shift to context engineering represents a maturation of the field: from optimising individual prompts to architecting entire information ecosystems. This requires practitioners to think like information architects, not just prompt crafters.

---

## Sources

- Chalef, D. (2025). What is Context Engineering, Anyway?
- Chase, H. (2025). The rise of context engineering.
- King, S. (2025). Context Engineering: Why Feeding AI the Right Context Matters.
- Teki, S. (2025). Context Engineering: The 2025 Guide to Advanced AI Strategy and RAG.
- Yan, W. (2025). Don't Build Multi-Agents.

---

## Notes

Consolidated from multiple atomic notes on context engineering concepts. Original notes covered: definition, evolution from prompt engineering, system-level discipline characteristics, reliability foundations, principles and frameworks, dynamic systems and memory management, technical architectures, and paradigm comparisons.
