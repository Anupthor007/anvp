---
title: "Running LLMs Locally: A Practical Guide to On-Premises AI"
date: "2026-01-18"
description: "Cloud APIs are convenient but they're not always the right answer. Here's everything I've learned about running large language models locally — hardware, tools, tradeoffs."
tags: ["Local LLMs", "On-Premises AI", "Ollama", "AI Engineering"]
---

## Why Run Locally?

The default answer for most developers is to call an API. OpenAI, Anthropic, Gemini — pick one, get an API key, start building. It works and it's fast to get started.

But there are real reasons to run models locally:

- **Privacy** — Your data never leaves your machine. Critical for medical, legal, or proprietary data.
- **Cost at scale** — API costs compound. At high volume, local inference pays for itself quickly.
- **Latency** — No network round-trip. For real-time applications, this matters.
- **Control** — No rate limits, no downtime dependency, no sudden price changes.
- **On-premises deployment** — Many enterprises simply cannot send data to external APIs.

## The Hardware Reality

Let's be honest about what you need.

For 7B parameter models (Mistral 7B, LLaMA 3 8B), you need at minimum 8GB VRAM. These run well on a single consumer GPU like an RTX 3060 or 4060.

For 13B models, you're looking at 16GB VRAM — RTX 3090, 4080, or better.

For 70B models, you either need multiple high-end GPUs or you run them quantized (4-bit) on a single 24GB card like an RTX 3090 or 4090. Quality drops somewhat but remains impressive.

CPU inference is possible but slow — useful for experimentation, not production.

## Tools That Actually Work

**Ollama** is the easiest starting point. One command to download and run a model:

```bash
ollama run llama3.2
ollama run mistral
ollama run qwen2.5-coder
```

It exposes an OpenAI-compatible API locally, so you can swap it in anywhere you're already using the OpenAI SDK.

**llama.cpp** is for when you want maximum control and performance. It's a C++ inference engine that runs quantized models efficiently on CPU and GPU. Steep learning curve, excellent results.

**vLLM** is the production-grade option. It implements PagedAttention for high-throughput inference, supports continuous batching, and is what many companies use for self-hosted deployments.

## Quantization: The Key Concept

A 70B parameter model in full 16-bit precision requires ~140GB of memory. That's not feasible for most setups.

Quantization reduces precision — from 16-bit floats to 4-bit integers — shrinking the model to ~35GB with minimal quality loss. GGUF format (used by llama.cpp and Ollama) makes this straightforward.

The naming convention: `Q4_K_M` means 4-bit quantization, K-quant method, medium size. Higher Q = better quality, more memory.

## A Realistic Benchmark

On an RTX 4090 (24GB VRAM):
- LLaMA 3 8B (Q8): ~80 tokens/second
- Mistral 7B (Q4_K_M): ~120 tokens/second  
- LLaMA 3 70B (Q4_K_M): ~25 tokens/second

For reference, GPT-4 through the API typically delivers 30-60 tokens/second depending on load.

Local 7B models at 120 tokens/second feel fast. 70B at 25 tokens/second is usable for most applications.

## When Not to Run Locally

Local inference makes sense when you have the hardware and the use case justifies it. But for prototyping, experimentation, or low-volume applications, API access is usually faster and cheaper to start with.

The right answer depends on your scale, your data sensitivity, and your infrastructure constraints. Local LLMs are a tool — a powerful one — not a universal replacement for cloud APIs.