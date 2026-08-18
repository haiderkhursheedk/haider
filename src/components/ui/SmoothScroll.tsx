"use client";

import { useEffect } from "react";

export default function SmoothScroll() {
  useEffect(() => {
    // Custom smooth inertia scroll listener for wheel events
    let currentY = window.scrollY;
    let targetY = window.scrollY;
    let animationFrameId: number | null = null;
    let isScrolling = false;

    const lerp = (start: number, end: number, factor: number) => {
      return start + (end - start) * factor;
    };

    const updateScroll = () => {
      currentY = lerp(currentY, targetY, 0.08); // Smooth lerp factor (0.08 for fluid slow decay)

      if (Math.abs(targetY - currentY) > 0.5) {
        window.scrollTo(0, currentY);
        animationFrameId = requestAnimationFrame(updateScroll);
      } else {
        window.scrollTo(0, targetY);
        isScrolling = false;
        animationFrameId = null;
      }
    };

    const handleWheel = (e: WheelEvent) => {
      // Don't interfere if user is scrolling inside a scrollable container (e.g. modal or overflow div)
      let parent = e.target as HTMLElement | null;
      while (parent && parent !== document.body && parent !== document.documentElement) {
        const overflowY = window.getComputedStyle(parent).overflowY;
        if ((overflowY === "auto" || overflowY === "scroll") && parent.scrollHeight > parent.clientHeight) {
          // If inner element can scroll, allow default inner scrolling
          return;
        }
        parent = parent.parentElement;
      }

      e.preventDefault();
      const delta = e.deltaY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;

      targetY = Math.min(Math.max(0, targetY + delta * 0.95), maxScroll);

      if (!isScrolling) {
        isScrolling = true;
        currentY = window.scrollY;
        animationFrameId = requestAnimationFrame(updateScroll);
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return null;
}
