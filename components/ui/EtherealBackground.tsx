"use client";

import { memo } from "react";
import { motion, useReducedMotion } from "framer-motion";

function EtherealBackground() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 overflow-hidden"
      style={{ zIndex: 0 }}
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(1200px 700px at 20% 10%, rgba(255, 255, 255, 0.09), transparent 56%), radial-gradient(1000px 650px at 80% 20%, rgba(210, 210, 210, 0.07), transparent 60%), radial-gradient(900px 600px at 50% 85%, rgba(165, 165, 165, 0.055), transparent 62%), linear-gradient(180deg, rgba(10, 10, 10, 0.9), rgba(12, 12, 12, 0.92))",
        }}
      />

      <motion.div
        className="absolute -left-28 -top-28 h-[30rem] w-[30rem] rounded-full"
        style={{
          background:
            "radial-gradient(circle at 35% 35%, rgba(255, 255, 255, 0.2), rgba(108, 108, 108, 0.1) 46%, rgba(0, 0, 0, 0) 72%)",
          filter: "blur(60px)",
          willChange: "transform, opacity",
        }}
        animate={
          prefersReducedMotion
            ? { opacity: 0.52 }
            : {
                x: [0, 90, -40, 0],
                y: [0, 55, 30, 0],
                scale: [1, 1.08, 0.96, 1],
                opacity: [0.46, 0.6, 0.4, 0.46],
              }
        }
        transition={
          prefersReducedMotion
            ? undefined
            : {
                duration: 24,
                repeat: Infinity,
                ease: "easeInOut",
              }
        }
      />

      <motion.div
        className="absolute -right-24 top-1/4 h-[28rem] w-[28rem] rounded-full"
        style={{
          background:
            "radial-gradient(circle at 60% 40%, rgba(242, 242, 242, 0.17), rgba(88, 88, 88, 0.09) 46%, rgba(0, 0, 0, 0) 72%)",
          filter: "blur(64px)",
          willChange: "transform, opacity",
        }}
        animate={
          prefersReducedMotion
            ? { opacity: 0.48 }
            : {
                x: [0, -70, 45, 0],
                y: [0, 50, -25, 0],
                scale: [1, 0.94, 1.04, 1],
                opacity: [0.42, 0.56, 0.35, 0.42],
              }
        }
        transition={
          prefersReducedMotion
            ? undefined
            : {
                duration: 27,
                repeat: Infinity,
                ease: "easeInOut",
              }
        }
      />

      <motion.div
        className="absolute left-1/3 bottom-[-11rem] h-[27rem] w-[27rem] rounded-full"
        style={{
          background:
            "radial-gradient(circle at 45% 30%, rgba(228, 228, 228, 0.16), rgba(80, 80, 80, 0.085) 47%, rgba(0, 0, 0, 0) 73%)",
          filter: "blur(68px)",
          willChange: "transform, opacity",
        }}
        animate={
          prefersReducedMotion
            ? { opacity: 0.46 }
            : {
                x: [0, 40, -35, 0],
                y: [0, -40, -10, 0],
                scale: [1, 1.06, 0.95, 1],
                opacity: [0.38, 0.5, 0.32, 0.38],
              }
        }
        transition={
          prefersReducedMotion
            ? undefined
            : {
                duration: 29,
                repeat: Infinity,
                ease: "easeInOut",
              }
        }
      />
    </div>
  );
}

export default memo(EtherealBackground);
