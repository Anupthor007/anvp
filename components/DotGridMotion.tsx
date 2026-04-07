"use client";

import { useEffect } from "react";

const MAX_SHIFT = 22;
const AMBIENT_X = 4;
const AMBIENT_Y = 3;
const SMOOTHING = 0.12;

export default function DotGridMotion() {
  useEffect(() => {
    const root = document.documentElement;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reducedMotion) {
      root.style.setProperty("--dot-offset-x", "0px");
      root.style.setProperty("--dot-offset-y", "0px");
      root.style.setProperty("--dot-drift-x", "0px");
      root.style.setProperty("--dot-drift-y", "0px");
      return;
    }

    let rafId = 0;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const onMouseMove = (event: MouseEvent) => {
      const xRatio = event.clientX / window.innerWidth - 0.5;
      const yRatio = event.clientY / window.innerHeight - 0.5;

      targetX = xRatio * MAX_SHIFT;
      targetY = yRatio * MAX_SHIFT;
    };

    const onMouseLeave = () => {
      targetX = 0;
      targetY = 0;
    };

    const animate = (time: number) => {
      const driftX = Math.sin(time / 4000) * AMBIENT_X;
      const driftY = Math.cos(time / 5200) * AMBIENT_Y;

      currentX += (targetX - currentX) * SMOOTHING;
      currentY += (targetY - currentY) * SMOOTHING;

      root.style.setProperty("--dot-offset-x", `${currentX.toFixed(2)}px`);
      root.style.setProperty("--dot-offset-y", `${currentY.toFixed(2)}px`);
      root.style.setProperty("--dot-drift-x", `${driftX.toFixed(2)}px`);
      root.style.setProperty("--dot-drift-y", `${driftY.toFixed(2)}px`);

      rafId = window.requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseleave", onMouseLeave);
    rafId = window.requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseleave", onMouseLeave);
      window.cancelAnimationFrame(rafId);
      onMouseLeave();
      root.style.setProperty("--dot-drift-x", "0px");
      root.style.setProperty("--dot-drift-y", "0px");
    };
  }, []);

  return null;
}
