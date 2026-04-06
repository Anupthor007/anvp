---
title: "Building a RAG Pipeline from Scratch: What I Learned"
date: "2025-06-01"
description: "A practical walkthrough of building a Retrieval-Augmented Generation system — what worked, what didn't, and why RAG is one of the most useful patterns in production AI."
tags: ["RAG", "AI Engineering", "LangChain", "LLMs"]
---

## What is RAG, and Why Should You Care?

If you've worked with LLMs, you've hit the wall: the model doesn't know your data. Fine-tuning is expensive and slow. RAG (Retrieval-Augmented Generation) is the practical solution — inject relevant context directly into the prompt at inference time.

The architecture is elegant: chunk your documents, embed them, store in a vector database, and retrieve the top-k most relevant chunks when a user asks a question.

Simple in theory. The details are where it gets interesting.

## Step 1: Chunking Strategy

Your first decision is how to chunk your documents. I made the mistake of using fixed-size chunks initially.

The problem: a sentence would get split mid-thought, destroying its meaning. The solution I landed on:

- **Semantic chunking** — split on paragraph boundaries first
- **Overlap** — 10–15% overlap between chunks so context isn't lost at boundaries
- **Size ceiling** — cap at ~500 tokens to fit within embedding model limits

```python
from langchain.text_splitter import RecursiveCharacterTextSplitter

splitter = RecursiveCharacterTextSplitter(
    chunk_size=500,
    chunk_overlap=50,
    separators=["\n\n", "\n", ".", " "]
)
chunks = splitter.split_text(document)
```

## Step 2: Embedding Model Choice

I tested two approaches:

1. OpenAI `text-embedding-ada-002` — excellent quality, costs money
2. `sentence-transformers/all-MiniLM-L6-v2` — fast, free, runs locally

For a production system handling sensitive documents, the local model was the obvious winner. Quality was ~85% of OpenAI's, which was acceptable for the use case.

## Step 3: Vector Store

I used ChromaDB for local development — easy to set up, no infra required. For production, the choice depends on scale:

- **ChromaDB** — great for local, small-to-medium scale
- **Pinecone** — managed, scales easily
- **Weaviate** — open source, self-hostable

## Step 4: Retrieval + Reranking

Basic retrieval (top-k by cosine similarity) worked, but I noticed false positives — chunks that were semantically similar but not actually relevant.

Adding a reranking step with a cross-encoder model significantly improved precision:

```python
from sentence_transformers import CrossEncoder

reranker = CrossEncoder("cross-encoder/ms-marco-MiniLM-L-6-v2")
scores = reranker.predict([[query, chunk] for chunk in retrieved_chunks])
```

## What I'd Do Differently

- **Metadata filtering** — store document source, date, type as metadata and filter before embedding search
- **Hybrid search** — combine BM25 (keyword) with vector search for better recall
- **Eval from the start** — I built the system first and evaluated later. Big mistake. Define your eval metrics (faithfulness, relevance, answer correctness) before building.

## Final Thoughts

RAG is not magic. It's a pipeline, and every stage has failure modes. The teams shipping reliable RAG systems are the ones who treat it as an engineering problem, not a prompt engineering problem.

The chunking, retrieval quality, and prompt design all matter equally.

Start simple, measure everything, improve iteratively.