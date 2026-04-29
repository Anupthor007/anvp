"use client";

import { useTheme } from "@/components/ThemeProvider";

export default function ThemeToggle() {
  const { toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="theme-toggle"
      aria-label="Toggle theme"
    >
      <span className="theme-toggle-track">
        <span className="theme-toggle-glow" aria-hidden="true" />
        <span className="theme-toggle-icons" aria-hidden="true">
          <svg viewBox="0 0 24 24" className="theme-icon moon">
            <path
              d="M16.5 15.8a7 7 0 0 1-8.3-8.3 8.25 8.25 0 1 0 8.3 8.3Z"
              fill="currentColor"
            />
          </svg>
          <svg viewBox="0 0 24 24" className="theme-icon sun">
            <circle cx="12" cy="12" r="4.5" fill="currentColor" />
            <g stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
              <line x1="12" y1="1.8" x2="12" y2="4.2" />
              <line x1="12" y1="19.8" x2="12" y2="22.2" />
              <line x1="1.8" y1="12" x2="4.2" y2="12" />
              <line x1="19.8" y1="12" x2="22.2" y2="12" />
              <line x1="4.4" y1="4.4" x2="6.1" y2="6.1" />
              <line x1="17.9" y1="17.9" x2="19.6" y2="19.6" />
              <line x1="17.9" y1="6.1" x2="19.6" y2="4.4" />
              <line x1="4.4" y1="19.6" x2="6.1" y2="17.9" />
            </g>
          </svg>
        </span>
      </span>
    </button>
  );
}