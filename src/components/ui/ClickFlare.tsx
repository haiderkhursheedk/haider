"use client";

import React, { useEffect, useState, useCallback } from "react";

interface Flare {
  id: number;
  x: number;
  y: number;
}

export default function ClickFlare() {
  const [flares, setFlares] = useState<Flare[]>([]);
  const [_pressed, setPressed] = useState(false);

  const spawnFlare = useCallback((e: MouseEvent) => {
    const id = Date.now() + Math.random();
    // Offset y upward so flare appears above the cursor tip
    setFlares((prev) => [...prev, { id, x: e.clientX, y: e.clientY - 28 }]);
    setTimeout(() => {
      setFlares((prev) => prev.filter((f) => f.id !== id));
    }, 500);
  }, []);

  useEffect(() => {
    const onDown = () => setPressed(true);
    const onUp = () => setPressed(false);

    window.addEventListener("click", spawnFlare);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);

    return () => {
      window.removeEventListener("click", spawnFlare);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
    };
  }, [spawnFlare]);

  return (
    <div className="pointer-events-none fixed inset-0 z-[9998] overflow-hidden">
      {flares.map((flare) => (
        <div
          key={flare.id}
          style={{ left: flare.x, top: flare.y, position: "absolute" }}
        >
          {/* SVG starburst rays */}
          <svg
            width="80"
            height="80"
            viewBox="0 0 80 80"
            style={{
              position: "absolute",
              transform: "translate(-50%, -50%)",
              animation: "flare-burst 0.45s ease-out forwards",
            }}
          >
            {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
              <line
                key={i}
                x1="40"
                y1="40"
                x2={40 + Math.cos((angle * Math.PI) / 180) * 28}
                y2={40 + Math.sin((angle * Math.PI) / 180) * 28}
                stroke="white"
                strokeWidth={i % 2 === 0 ? 1.5 : 0.8}
                strokeLinecap="round"
                style={{
                  transformOrigin: "40px 40px",
                  animation: `flare-ray 0.45s ease-out forwards`,
                  animationDelay: `${i * 10}ms`,
                }}
              />
            ))}
            <circle
              cx="40"
              cy="40"
              r="3"
              fill="white"
              style={{ animation: "flare-dot 0.45s ease-out forwards" }}
            />
          </svg>

          {/* Soft glow ring */}
          <div
            style={{
              position: "absolute",
              transform: "translate(-50%, -50%)",
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: "rgba(255,255,255,0.9)",
              boxShadow: "0 0 12px 6px rgba(255,255,255,0.4)",
              animation: "flare-glow 0.45s ease-out forwards",
            }}
          />
        </div>
      ))}

      {/* Inject click-press scale animation onto the SmoothCursor wrapper */}
      <style>{`
        @keyframes flare-burst {
          0%   { opacity: 1; transform: translate(-50%, -50%) scale(0.3); }
          60%  { opacity: 0.9; transform: translate(-50%, -50%) scale(1); }
          100% { opacity: 0; transform: translate(-50%, -50%) scale(1.3); }
        }
        @keyframes flare-ray {
          0%   { opacity: 0; stroke-dasharray: 0 28; }
          30%  { opacity: 1; stroke-dasharray: 28 0; }
          100% { opacity: 0; stroke-dasharray: 28 0; }
        }
        @keyframes flare-dot {
          0%   { opacity: 1; r: 3; }
          100% { opacity: 0; r: 8; }
        }
        @keyframes flare-glow {
          0%   { opacity: 1; transform: translate(-50%, -50%) scale(1); }
          100% { opacity: 0; transform: translate(-50%, -50%) scale(4); }
        }

        /* Press animation on the cursor image itself */
        #mickey-cursor-img {
          transition: transform 0.08s ease-out;
          transform: scale(1);
        }
        body.cursor-pressed #mickey-cursor-img {
          transform: scale(0.72);
          transition: transform 0.06s ease-in;
        }
      `}</style>

      {/* Inject/remove body class to drive cursor press animation */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            (function() {
              window.addEventListener('mousedown', function() {
                document.body.classList.add('cursor-pressed');
              });
              window.addEventListener('mouseup', function() {
                document.body.classList.remove('cursor-pressed');
              });
            })();
          `,
        }}
      />
    </div>
  );
}
