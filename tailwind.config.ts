import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0a0a0a",
        "bg-secondary": "#111111",
        "bg-card": "#141414",
        border: "#1f1f1f",
        "border-hover": "#2a2a2a",
        "text-primary": "#f0f0f0",
        "text-secondary": "#888888",
        "text-muted": "#555555",
        accent: "#e8e8e8",
        "accent-dim": "#444444",
        green: "#4ade80",
      },
      fontFamily: {
        mono: ["DM Mono", "monospace"],
        display: ["Syne", "sans-serif"],
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease forwards",
      },
      keyframes: {
        fadeUp: {
          from: { opacity: "0", transform: "translateY(16px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;