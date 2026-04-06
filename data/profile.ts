// ============================================================
// data/profile.ts — SINGLE SOURCE OF TRUTH
// Edit only this file to update the entire website.
// ============================================================

export const profile = {
  name: "Anup Thorat",
  title: "AI Engineer | Data Analyst | ML Engineer",
  email: "", // add your email here if you want it shown

  short_bio:
    "Final-year B.Tech student in Artificial Intelligence and Data Science with hands-on experience in building AI-powered applications, backend systems, and data-driven solutions. Passionate about Generative AI, agent-based systems, and solving real-world problems using machine learning and automation.",

  long_bio: `I'm a final-year B.Tech student specializing in Artificial Intelligence and Data Science at Yashoda Technical Campus, graduating in 2026.

My focus is on building production-grade AI systems — from RAG pipelines and autonomous agents to full-stack AI applications. I care deeply about systems that actually work in the real world, not just in notebooks.

Currently exploring: on-premises AI deployment, local LLM inference, and agentic architectures that solve meaningful problems.

When I'm not building, I'm breaking things to understand them better.`,

  skills: {
    programming: ["Python", "JavaScript", "SQL"],
    ai_ml: [
      "Machine Learning",
      "Natural Language Processing (NLP)",
      "Generative AI",
      "Prompt Engineering",
      "RAG (Retrieval-Augmented Generation)",
      "Embeddings",
    ],
    frameworks: ["Django", "Flask", "React.js", "LangChain"],
    tools: [
      "Git",
      "GitHub",
      "Postman",
      "Jupyter Notebook",
      "VS Code",
      "Power BI",
      "Excel",
    ],
  },

  projects: [
    {
      slug: "autonomous-browser-agent",
      name: "Autonomous Browser-Control AI Agent",
      description:
        "AI-powered automation system executing browser workflows using LLM reasoning. Built a modular agent that understands natural language instructions and translates them into precise browser actions.",
      tech_stack: ["Python", "LLM APIs", "Automation"],
      highlights: [
        "Step-by-step agent execution with LLM reasoning",
        "Handles multi-step browser workflows autonomously",
        "Modular and scalable architecture for easy extension",
      ],
      featured: true,
    },
    {
      slug: "rag-document-system",
      name: "RAG-based Document Interaction System",
      description:
        "Document querying system using embeddings and retrieval pipelines. Upload any document and ask questions — get accurate, context-aware answers grounded in the document.",
      tech_stack: ["Python", "LangChain", "Vector DB"],
      highlights: [
        "Chunking + embedding pipeline for large documents",
        "Context-aware retrieval with semantic search",
        "Significantly improved response accuracy over naive QA",
      ],
      featured: true,
    },
    {
      slug: "youtube-sentiment-analysis",
      name: "YouTube Comment Sentiment Analysis",
      description:
        "NLP system for sentiment analysis on large-scale YouTube comment datasets. Processes thousands of comments and surfaces audience sentiment insights.",
      tech_stack: ["Python", "NLP", "VADER"],
      highlights: [
        "Processes large comment datasets efficiently",
        "Multi-class sentiment classification",
        "Generates actionable insight reports",
      ],
      featured: true,
    },
    {
      slug: "retail-rating-app",
      name: "Retail Store Rating Web Application",
      description:
        "Full-stack web application with REST APIs and database integration for managing and displaying retail store ratings.",
      tech_stack: ["Django", "React", "PostgreSQL"],
      highlights: [
        "REST API development with Django backend",
        "React frontend with clean UI",
        "Relational database modeling with PostgreSQL",
      ],
      featured: false,
    },
  ],

  education: {
    degree: "B.Tech in AI & Data Science",
    institution: "Yashoda Technical Campus",
    duration: "2022 – 2026",
  },

  social_links: {
    github: "https://github.com/Anupthor007",
    linkedin: "https://linkedin.com/in/anup-thorat-44a079286",
  },
};

export type Project = (typeof profile.projects)[number];
export type Skills = typeof profile.skills;