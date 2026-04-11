"use client";

import { useEffect, useState } from "react";

type TypedNameProps = {
  text: string;
  delay?: number;
  speed?: number;
};

export default function TypedName({
  text,
  delay = 2000,
  speed = 110,
}: TypedNameProps) {
  const [value, setValue] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const hasLoaded = sessionStorage.getItem("loaded");
    const startDelay = hasLoaded ? 150 : delay;

    let startTimer: ReturnType<typeof setTimeout> | undefined;
    let charTimer: ReturnType<typeof setInterval> | undefined;

    startTimer = setTimeout(() => {
      let index = 0;
      setValue("");
      setIsTyping(true);

      charTimer = setInterval(() => {
        index += 1;

        if (index >= text.length) {
          setValue(text);
          setIsTyping(false);
          if (charTimer) clearInterval(charTimer);
          return;
        }

        setValue(text.slice(0, index));
      }, speed);
    }, startDelay);

    return () => {
      if (startTimer) clearTimeout(startTimer);
      if (charTimer) clearInterval(charTimer);
    };
  }, [delay, speed, text]);

  return (
    <span
      aria-label={text}
      style={{
        display: "inline-flex",
        alignItems: "baseline",
        gap: "0.08em",
        whiteSpace: "nowrap",
      }}
    >
      <span>{value}</span>
      <span
        aria-hidden="true"
        style={{
          display: "inline-block",
          width: "0.6ch",
          height: "1em",
          borderRight: isTyping ? "2px solid currentColor" : "2px solid transparent",
          transform: "translateY(0.08em)",
          animation: isTyping ? "blinkCaret 0.9s steps(1) infinite" : "none",
        }}
      />
    </span>
  );
}