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
- **Complex knowledge domains**: Where relationships between concepts matter
- **Multi-source integration**: Combining information from diverse knowledge bases
- **Long-running AI workflows**: Agents that maintain coherent understanding across sessions
- **Permission-controlled access**: Sophisticated control over what information is surfaced

### For academic work

Context engineering transforms how scholars can work with AI by making your accumulated knowledge accessible:

- **Literature synthesis**: Rather than asking about individual papers, query across your entire research library: "How do these three theoretical frameworks relate to each other? Where do they conflict?"
- **Research development**: AI that understands your methodological commitments, theoretical positions, and ongoing arguments can offer substantive intellectual partnership rather than generic responses
- **Teaching with depth**: Course materials that draw on your curated knowledge—your annotations, your connections between readings, your pedagogical insights
- **Writing support**: Drafting that reflects your voice, your citations, your way of building arguments

The key insight for academics: you've likely spent years building a personal knowledge system (whether in Zotero, Obsidian, or annotated PDFs). Context engineering makes that investment legible to AI.

### Core principles

Successful context engineering relies on three key elements:
1. **Knowledge architecture**: Organising information into traversable structures
2. **Integration systems**: Bridging information sources and AI tools
3. **Implementation strategy**: Deploying and measuring solutions

## Implications

Context engineering positions knowledge architectures as equally important as information retrieval. For scholars, this validates what we've always known: the value isn't just in having information, but in understanding how ideas connect.

This is not simply adding more context (e.g., giving models access to your email). True context engineering involves building systems where your theoretical frameworks, methodological preferences, and conceptual relationships become part of how AI reasons about your work.

The practical implication: the time you invest in connecting ideas—linking notes, mapping relationships between concepts, building your personal knowledge graph—becomes directly valuable for AI-assisted work.

## Questions and tensions

- How do we maintain scholarly voice and intellectual ownership when AI has deep access to our thinking?
- Does externalising knowledge structures change how we think?
- What happens to tacit knowledge that resists explicit representation?
- How do we handle contested or evolving relationships between concepts?

## My thinking

The central insight is that "context is king"—even highly capable models cannot engage meaningfully with your scholarship without understanding how your ideas connect. This is why generic AI tools feel shallow for serious academic work: they lack access to the relational structure of your knowledge.

For academics, context engineering is really about making your intellectual infrastructure—the frameworks, connections, and commitments you've developed—available as context for AI reasoning. The linked notes, the annotated sources, the conceptual maps: these aren't just for your own reference anymore.

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
