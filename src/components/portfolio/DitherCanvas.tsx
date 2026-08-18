"use client";

import React, { useRef, useEffect, useState } from "react";

export default function DitherCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 320);
    let height = (canvas.height = 110);

    const handleResize = () => {
      if (canvas.parentElement) {
        width = canvas.width = canvas.parentElement.clientWidth;
        height = canvas.height = 110;
      }
    };
    window.addEventListener("resize", handleResize);

    const bayer4x4 = [
      [ 0,  8,  2, 10],
      [12,  4, 14,  6],
      [ 3, 11,  1,  9],
      [15,  7, 13,  5]
    ];

    let t = 0;
    const render = () => {
      t += 0.025;
      ctx.clearRect(0, 0, width, height);

      const targetX = isHovered ? mousePos.x : width / 2 + Math.cos(t * 0.7) * 70;
      const targetY = isHovered ? mousePos.y : height / 2 + Math.sin(t * 1.1) * 25;

      const isDark = document.documentElement.classList.contains("dark");
      const imgData = ctx.createImageData(width, height);
      const data = imgData.data;

      const step = 2;
      for (let y = 0; y < height; y += step) {
        for (let x = 0; x < width; x += step) {
          const dx = x - targetX;
          const dy = y - targetY;
          const dist = Math.sqrt(dx * dx + dy * dy);

          const wave = Math.sin(dist * 0.09 - t * 2) * 0.5 + 0.5;
          const intensity = Math.max(0, 1 - dist / (width * 0.55)) * wave;

          const matrixVal = bayer4x4[(y / step) % 4][(x / step) % 4] / 16;
          const isPixelOn = intensity > matrixVal;

          if (isPixelOn) {
            for (let sy = 0; sy < step && y + sy < height; sy++) {
              for (let sx = 0; sx < step && x + sx < width; sx++) {
                const idx = ((y + sy) * width + (x + sx)) * 4;
                if (isDark) {
                  data[idx] = 52;     // R
                  data[idx + 1] = 211; // G
                  data[idx + 2] = 153; // B
                  data[idx + 3] = Math.min(255, Math.floor(intensity * 200 + 30));
                } else {
                  data[idx] = 79;    // R
                  data[idx + 1] = 70;  // G
                  data[idx + 2] = 229; // B
                  data[idx + 3] = Math.min(255, Math.floor(intensity * 180 + 35));
                }
              }
            }
          }
        }
      }

      ctx.putImageData(imgData, 0, 0);
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [mousePos, isHovered]);

  return (
    <figure
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
        setIsHovered(true);
      }}
      onMouseLeave={() => setIsHovered(false)}
      className="relative w-full rounded-lg border border-neutral-200/80 dark:border-neutral-800/80 bg-neutral-50/50 dark:bg-neutral-900/40 p-1.5 overflow-hidden my-5 transition-all duration-300"
    >
      <canvas ref={canvasRef} className="w-full h-[110px] rounded block cursor-crosshair" />
      <figcaption className="mt-1.5 text-right font-mono text-[10px] text-neutral-400 dark:text-neutral-500">
        ordered dither · move cursor over panel
      </figcaption>
    </figure>
  );
}
