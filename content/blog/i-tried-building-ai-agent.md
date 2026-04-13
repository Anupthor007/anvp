---
title: "I Tried Building an AI Agent — Here's What Actually Broke"
date: "2026-04-13"
description: "I spent a few days building a basic AI agent from scratch. Not the polished kind you see in demos. Here is what actually happened."
tags: ["Agentic AI", "Python", "AI Engineering", "Learning"]
---

I spent a few days trying to build a basic AI agent from scratch. Not the polished kind you see in demo videos. Just me, Python, a free LLM API, and a lot of things breaking in ways I did not expect.

This is what actually happened.

---

## Why I Even Tried

Agents are everywhere right now. Every blog post, every YouTube video, everyone is talking about how AI agents will automate everything. I wanted to see what the reality looked like when you actually sit down and build one.

I did not want to use LangChain or any framework for this. I wanted to understand what is happening under the hood before adding abstractions on top.

---

## What I Tried to Build

The idea was simple. An agent that could:

- Answer questions using a search tool
- Do basic math using a calculator tool
- Remember what was said earlier in the conversation

That is it. Nothing fancy. I figured this would take a day or two at most.

It did not.

---

## Tech Stack

Nothing complicated here:

- Python
- Gemini free tier API for the LLM
- A few small Python functions acting as tools
- No frameworks, just raw API calls and a loop

---

## The Basic Loop

The core idea of an agent is a loop. You ask the model what to do, it tells you, you do it, you feed the result back, repeat.

Here is a simplified version of what I built:

```python
def run_agent(user_input):
    messages = [{"role": "user", "content": user_input}]

    for step in range(10):  # max steps to avoid infinite loop
        response = call_llm(messages)
        action = parse_action(response)

        if action["type"] == "final_answer":
            return action["content"]

        tool_result = execute_tool(action["tool"], action["input"])

        messages.append({"role": "assistant", "content": response})
        messages.append({"role": "user", "content": f"Tool result: {tool_result}"})

    return "Agent could not complete the task."
```

Looks clean. Works in theory. In practice, this is where things got interesting.

---

## What Actually Broke

This is the part nobody really talks about in the tutorials.

**Infinite loops were the first problem.** Even with a step limit, the agent would get stuck doing the same thing repeatedly. It would call the search tool, get a result, then call the search tool again with almost the same query, then again. It was not making progress. It just kept searching.

I had to add logic to detect repeated actions and force it to move on. That alone took longer than building the original loop.

**The model kept hallucinating tool names.** I had three tools: search, calculator, memory. The model would sometimes try to call tools that did not exist. Things like "web_browser" or "python_executor". When that happened, the agent would crash or silently do nothing, which was somehow worse because it would pretend it got a result.

**Parsing the LLM output was a pain.** I asked the model to respond in a specific JSON format so I could parse the action. It did this correctly about 70% of the time. The other 30% it would add extra text, change the format slightly, or wrap the JSON in markdown code blocks. Every edge case needed a separate fix.

**Context got messy fast.** After 4 or 5 steps, the message history was getting long. The model started losing track of the original goal. It would go off on a tangent, answer a different question than what was asked, or start summarizing things that did not need summarizing.

**Performance was just slow.** Each step is an API call. An agent doing 6 steps to answer one question means 6 API calls. On the free tier, that adds up to real waiting time. For something that should feel intelligent and fast, it felt the opposite.

---

## What I Learned

The biggest thing I realized is that the LLM is not the hard part. Calling an API and getting text back is easy. The hard part is everything around it.

Deciding when the agent should stop is harder than it sounds. Deciding what counts as a valid tool call is harder than it sounds. Keeping the context clean across multiple steps is harder than it sounds.

Orchestration is the actual work. The model is one piece. The system around it is what makes or breaks the whole thing.

I also realized agents are not reliable by default. They are probabilistic. The same input can produce different behavior on different runs. That is fine for experimentation but not acceptable if you are building something real that needs to work consistently.

---

## Would I Use This in a Real Project?

Honestly, not without significant work around reliability. For internal tools, prototypes, or things where occasional failure is acceptable, yes. For anything user-facing where consistency matters, I would add a lot more guardrails first.

The framework approach (LangChain, LlamaIndex, etc.) starts to make more sense after you build things raw. They handle a lot of the edge cases I ran into. I still think understanding the basics first is worth it, but I would not reinvent the wheel for production.

---

## Final Thoughts

Agents are genuinely interesting. I am not saying they are overhyped or useless. They can do things that a single model call cannot.

But the demos make it look easier than it is. The gap between a working demo and a reliable system is large. Most of that gap is not about the model at all. It is about error handling, context management, and keeping the loop from spiraling.

If you want to build an agent, build a simple one first. Get it breaking. That is where the actual learning is.