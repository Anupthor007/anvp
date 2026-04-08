"use client";

import { memo, useEffect, useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useTransform,
} from "framer-motion";

function EtherealBackground() {
  const prefersReducedMotion = useReducedMotion();
  const [lowEndMode] = useState(() => {
    if (typeof navigator === "undefined") return false;

    const nav = navigator as Navigator & { deviceMemory?: number };
    const lowCpu = nav.hardwareConcurrency > 0 && nav.hardwareConcurrency <= 4;
    const lowMemory = typeof nav.deviceMemory === "number" && nav.deviceMemory <= 4;

    return lowCpu || lowMemory;
  });

  const parallaxX = useMotionValue(0);
  const parallaxY = useMotionValue(0);
  const parallaxXInverse = useTransform(parallaxX, (v) => -v * 0.4);
  const parallaxYInverse = useTransform(parallaxY, (v) => -v * 0.4);

  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const clusterOpacity = useMotionValue(0);
  const clusterTranslateX = useTransform(cursorX, (v) => v - 110);
  const clusterTranslateY = useTransform(cursorY, (v) => v - 110);
  const rafPending = useRef(false);

  useEffect(() => {
    const centerX = window.innerWidth * 0.5;
    const centerY = window.innerHeight * 0.5;
    cursorX.set(centerX);
    cursorY.set(centerY);

    if (prefersReducedMotion || lowEndMode) {
      parallaxX.set(0);
      parallaxY.set(0);
      clusterOpacity.set(0);
      return;
    }

    const onMouseMove = (event: MouseEvent) => {
      if (rafPending.current) return;
      rafPending.current = true;

      window.requestAnimationFrame(() => {
        const xRatio = event.clientX / window.innerWidth - 0.5;
        const yRatio = event.clientY / window.innerHeight - 0.5;

        parallaxX.set(xRatio * 18);
        parallaxY.set(yRatio * 18);
        cursorX.set(event.clientX);
        cursorY.set(event.clientY);
        clusterOpacity.set(0.36);
        rafPending.current = false;
      });
    };

    const onMouseLeave = () => {
      parallaxX.set(0);
      parallaxY.set(0);
      clusterOpacity.set(0);
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseleave", onMouseLeave);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseleave", onMouseLeave);
    };
  }, [prefersReducedMotion, lowEndMode, parallaxX, parallaxY, cursorX, cursorY, clusterOpacity]);

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
            "radial-gradient(130% 80% at 50% 0%, rgba(255, 255, 255, 0.05), transparent 65%), linear-gradient(180deg, #070707 0%, #0b0b0b 45%, #070707 100%)",
        }}
      />

      <motion.div
        className="absolute -inset-[12%]"
        style={{
          x: parallaxX,
          y: parallaxY,
          opacity: lowEndMode ? 0.22 : 0.3,
          willChange: "transform, opacity",
        }}
        transition={{ type: "spring", stiffness: 26, damping: 28, mass: 0.6 }}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at center, rgba(210, 210, 210, 0.42) 1px, transparent 1.25px)",
            backgroundSize: "26px 26px",
            backgroundPosition: "0 0",
            willChange: "transform",
            animation: prefersReducedMotion
              ? "none"
              : lowEndMode
                ? "dotDriftALite 48s ease-in-out infinite"
                : "dotDriftA 34s ease-in-out infinite",
          }}
        />
      </motion.div>

      <motion.div
        className="absolute -inset-[14%]"
        style={{
          x: parallaxXInverse,
          y: parallaxYInverse,
          opacity: lowEndMode ? 0.12 : 0.18,
          willChange: "transform, opacity",
        }}
        transition={{ type: "spring", stiffness: 24, damping: 30, mass: 0.7 }}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at center, rgba(245, 245, 245, 0.24) 0.8px, transparent 1.2px)",
            backgroundSize: "38px 38px",
            backgroundPosition: "18px 12px",
            willChange: "transform",
            animation: prefersReducedMotion
              ? "none"
              : lowEndMode
                ? "dotDriftBLite 60s ease-in-out infinite"
                : "dotDriftB 46s ease-in-out infinite",
          }}
        />
      </motion.div>

      {!prefersReducedMotion && !lowEndMode && (
        <motion.div
          className="absolute h-[220px] w-[220px] rounded-full"
          style={{
            x: clusterTranslateX,
            y: clusterTranslateY,
            opacity: clusterOpacity,
            backgroundImage:
              "radial-gradient(circle at center, rgba(255, 255, 255, 0.52) 1.2px, transparent 1.55px)",
            backgroundSize: "16px 16px",
            boxShadow: "0 0 28px rgba(255, 255, 255, 0.08)",
            willChange: "transform, opacity",
          }}
          transition={{ type: "spring", stiffness: 40, damping: 24, mass: 0.45 }}
        />
      )}

      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 90% at 50% 50%, transparent 48%, rgba(0, 0, 0, 0.3) 100%)",
        }}
      />

      <style jsx>{`
        @keyframes dotDriftA {
          0% {
            transform: translate3d(0, 0, 0);
          }
          25% {
            transform: translate3d(26px, -16px, 0);
          }
          50% {
            transform: translate3d(-18px, 14px, 0);
          }
          75% {
            transform: translate3d(12px, 24px, 0);
          }
          100% {
            transform: translate3d(0, 0, 0);
          }
        }

        @keyframes dotDriftB {
          0% {
            transform: translate3d(0, 0, 0);
          }
          20% {
            transform: translate3d(-22px, 10px, 0);
          }
          45% {
            transform: translate3d(18px, -18px, 0);
          }
          70% {
            transform: translate3d(-10px, -8px, 0);
          }
          100% {
            transform: translate3d(0, 0, 0);
          }
        }

        @keyframes dotDriftALite {
          0% {
            transform: translate3d(0, 0, 0);
          }
          30% {
            transform: translate3d(12px, -8px, 0);
          }
          65% {
            transform: translate3d(-10px, 8px, 0);
          }
          100% {
            transform: translate3d(0, 0, 0);
          }
        }

        @keyframes dotDriftBLite {
          0% {
            transform: translate3d(0, 0, 0);
          }
          35% {
            transform: translate3d(-10px, 6px, 0);
          }
          70% {
            transform: translate3d(8px, -7px, 0);
          }
          100% {
            transform: translate3d(0, 0, 0);
          }
        }
      `}</style>
    </div>
  );
}

export default memo(EtherealBackground);
