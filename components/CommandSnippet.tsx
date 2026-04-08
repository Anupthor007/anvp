"use client";

import { useState } from "react";

interface CommandSnippetProps {
  command: string;
  helperText: string;
}

export default function CommandSnippet({ command, helperText }: CommandSnippetProps) {
  const [copied, setCopied] = useState(false);

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(command);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="mt-5 max-w-2xl rounded-xl border p-3" style={{ background: "rgba(255,255,255,0.03)", borderColor: "#2a2a2a" }}>
      <p className="mb-3 text-xs" style={{ color: "#b9b9b9", lineHeight: 1.6 }}>
        {helperText}
      </p>

      <div className="flex items-center gap-2 rounded-lg border p-2" style={{ background: "rgba(255,255,255,0.02)", borderColor: "#343434" }}>
        <button
          type="button"
          onClick={onCopy}
          className="shrink-0 rounded-md border px-3 py-2 text-xs transition-colors"
          style={{
            color: copied ? "#f2f2f2" : "#d4d4d4",
            borderColor: copied ? "#5b5b5b" : "#3c3c3c",
            backgroundColor: copied ? "rgba(255,255,255,0.08)" : "rgba(255,255,255,0.04)",
            fontFamily: "var(--font-mono)",
          }}
          aria-label="Copy command"
        >
          {copied ? "Copied" : "Copy"}
        </button>

        <code
          className="min-w-0 overflow-x-auto text-sm"
          style={{
            color: "#ececec",
            fontFamily: "var(--font-mono)",
            whiteSpace: "nowrap",
          }}
        >
          {command}
        </code>
      </div>
    </div>
  );
}
