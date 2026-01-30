---
title: Differences in processing architecture of prompt and context engineering
author:
  - "[[Michael Rowe]]"
tags:
  - knowledge-graphs
  - prompt-engineering
  - context-engineering
  - language-model
description: 
related:
  - "[[context engineering]]"
  - "[[prompt engineering]]"
  - "[[GraphRAG and knowledge graphs are to context engineering, what RAG and vector databases are to prompt engineering]]"
created: 2025-07-26
---
#### Prompt engineering stack

1. **Source Layer**: Documents, papers, personal notes
2. **Processing Layer**: [[embeddings are learned semantic vectors|Text-to-embeddings]] conversion using statistical co-occurrence ([[retrieval augmented generation|RAG]])
3. **Storage Layer**: [[Vector database]]s with semantic search capabilities
4. **Query Layer**: User queries converted to vector space
5. **Orchestration Layer**: [[retrieval augmented generation|RAG]] performing similarity search
6. **Engineering Layer**: Context injection (query + retrieved chunks)
7. **Interface Layer**: Standard API calls to language models
8. **AI Layer**: Language models processing augmented prompts

#### Context engineering stack

1. **Source Layer**: Same documents plus curated knowledge (Obsidian)
2. **Processing Layer**: [[GraphRAG]] entity extraction and relationship detection
3. **Storage Layer**: [[Knowledge graph]]s with relationship traversal
4. **Query Layer**: Complex queries requiring multi-hop reasoning
5. **Orchestration Layer**: Graph query engines with relationship reasoning
6. **Engineering Layer**: Context structuring with reasoning paths
7. **Interface Layer**: [[Model Context Protocol|MCP]] (Model Context Protocol) servers with permission control
8. **AI Layer**: Enhanced language models with graph reasoning capabilities

---

**References**

- 