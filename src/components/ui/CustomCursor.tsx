"use client";

import React, { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Smooth springs for cursor follower
  const springConfig = { damping: 28, stiffness: 350, mass: 0.5 };
  const cursorX = useSpring(-100, springConfig);
  const cursorY = useSpring(-100, springConfig);

  // Instant positioning for center dot
  const dotX = useSpring(-100, { damping: 40, stiffness: 900 });
  const dotY = useSpring(-100, { damping: 40, stiffness: 900 });

  useEffect(() => {
    // Check if coarse pointer (mobile/touch)
    if (window.matchMedia("(pointer: coarse)").matches) {
      setIsMobile(true);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      dotX.set(e.clientX);
      dotY.set(e.clientY);

      if (!isVisible) setIsVisible(true);
    };

    const handleMouseDown = () => setIsClicked(true);
    const handleMouseUp = () => setIsClicked(false);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const isInteractive = Boolean(
        target.closest(
          'a, button, input, textarea, select, [role="button"], .photo-frame, .basic-link, .cursor-pointer, .redact'
        )
      );
      setIsHovered(isInteractive);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [cursorX, cursorY, dotX, dotY, isVisible]);

  if (isMobile || !isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
      {/* Outer Spring Follower Ring */}
      <motion.div
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isClicked ? 0.75 : isHovered ? 1.8 : 1,
          borderColor: isHovered
            ? "rgba(52, 211, 153, 0.8)" // Emerald glow on hover
            : "rgba(163, 163, 163, 0.4)",
          backgroundColor: isHovered
            ? "rgba(52, 211, 153, 0.08)"
            : "transparent",
        }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-neutral-400/50 dark:border-neutral-500/50 backdrop-blur-[1px] shadow-sm"
      />

      {/* Central Sharp Dot */}
      <motion.div
        style={{
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isClicked ? 1.4 : isHovered ? 0.5 : 1,
          backgroundColor: isHovered ? "#34d399" : "#10b981",
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
        className="fixed top-0 left-0 w-2 h-2 rounded-full shadow-[0_0_8px_rgba(16,185,129,0.8)]"
      />
    </div>
  );
}
