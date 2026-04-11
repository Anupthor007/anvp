"use client";

import { useEffect, useState } from "react";

const words = [
  { text: "Hello", lang: "en" },
];

export default function LoadingScreen() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [phase, setPhase] = useState<"enter" | "exit" | "done">("enter");
  const [hiding, setHiding] = useState(false);

  useEffect(() => {
    // Check if already shown this session
    if (sessionStorage.getItem("loaded")) {
      queueMicrotask(() => setPhase("done"));
      return;
    }

    let wordTimer: ReturnType<typeof setTimeout>;
    let hideTimer: ReturnType<typeof setTimeout>;

    const showNextWord = (index: number) => {
      if (index >= words.length) {
        // All words shown — fade out screen
        setHiding(true);
        hideTimer = setTimeout(() => {
          setPhase("done");
          sessionStorage.setItem("loaded", "1");
        }, 700);
        return;
      }

      setCurrentIndex(index);
      setPhase("enter");

      // After showing word, exit it
      wordTimer = setTimeout(() => {
        setPhase("exit");
        setTimeout(() => showNextWord(index + 1), 400);
      }, 800);
    };

    showNextWord(0);

    return () => {
      clearTimeout(wordTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (phase === "done") return null;

  return (
    <div
      id="loading-screen"
      className={hiding ? "hide" : ""}
      style={{
        position: "fixed",
        inset: 0,
        background: "#000",
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {words.map((word, i) => (
        <span
          key={word.text}
          className={`loading-word ${
            i === currentIndex
              ? phase === "enter"
                ? "active"
                : "exit"
              : ""
          }`}
          style={{
            fontFamily:
              "-apple-system, 'SF Pro Display', 'Helvetica Neue', sans-serif",
            fontSize: "clamp(2.5rem, 8vw, 5rem)",
            fontWeight: 300,
            color: "#fff",
            letterSpacing: "-0.02em",
            position: "absolute",
          }}
        >
          {word.text}
        </span>
      ))}
    </div>
  );
}