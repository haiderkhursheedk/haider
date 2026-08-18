"use client";

import React, { useState, useEffect, useRef } from "react";
import { X, Terminal as TermIcon } from "lucide-react";

interface TerminalDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

interface LogEntry {
  type: "input" | "output" | "system";
  text: string;
}

export default function TerminalDrawer({ isOpen, onClose }: TerminalDrawerProps) {
  const [inputVal, setInputVal] = useState("");
  const [history, setHistory] = useState<LogEntry[]>([
    { type: "system", text: "Haider Portfolio Shell v2.6.0 (type 'help' for commands)" },
  ]);
  const bottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "`" || e.key === "~") {
        e.preventDefault();
        if (isOpen) onClose();
        else {
          // Handled via state toggle
        }
      }
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  if (!isOpen) return null;

  const handleCommand = (cmdStr: string) => {
    const trimmed = cmdStr.trim().toLowerCase();
    if (!trimmed) return;

    const newEntries: LogEntry[] = [
      ...history,
      { type: "input", text: trimmed },
    ];

    if (trimmed === "clear") {
      setHistory([]);
      setInputVal("");
      return;
    } else if (trimmed === "help") {
      newEntries.push({
        type: "output",
        text: "Available commands:\n  help      — Show this help menu\n  bio       — Brief founder summary\n  projects  — List active ventures & research\n  contact   — Get contact details\n  clear     — Clear terminal\n  cat       — Print office cat",
      });
    } else if (trimmed === "bio") {
      newEntries.push({
        type: "output",
        text: "Haider Khursheed: Builder since age 11 (Robotics & IIT Bombay pitch). Exited Game Dev firm (2023). Founder at Lixta Labs & Aeomi (frontier AI memory research).",
      });
    } else if (trimmed === "projects" || trimmed === "ls") {
      newEntries.push({
        type: "output",
        text: "Active Ventures:\n  • Aeomi (aeomi.me) — Frontier AI Memory Research\n  • Lixta Labs (lixtalabs.com) — Holding Company\n  • Lixta Network (lixtanetwork.com) — Infrastructure\n  • Komunity (komunity.dev) — Builder Platform",
      });
    } else if (trimmed === "contact") {
      newEntries.push({
        type: "output",
        text: "Email: haider@lixtalabs.com | X: @khaiderksh",
      });
    } else if (trimmed === "cat") {
      newEntries.push({
        type: "output",
        text: "  /\\_/\\\n ( o.o )\n  > ^ <   [purrrr]",
      });
    } else {
      newEntries.push({
        type: "output",
        text: `zsh: command not found: ${trimmed}. Type 'help' for available commands.`,
      });
    }

    setHistory(newEntries);
    setInputVal("");
  };

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-150 font-mono"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-2xl bg-neutral-950 text-neutral-200 border border-neutral-800 rounded-xl shadow-2xl overflow-hidden flex flex-col h-[400px]"
      >
        {/* Terminal Header Bar */}
        <div className="flex items-center justify-between px-4 py-2.5 bg-neutral-900 border-b border-neutral-800">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
            <span className="ml-2 text-xs text-neutral-400 font-medium flex items-center gap-1.5">
              <TermIcon className="w-3.5 h-3.5 text-neutral-500" />
              haider@portfolio — zsh
            </span>
          </div>
          <button
            onClick={onClose}
            className="text-neutral-400 hover:text-neutral-100 p-1 rounded hover:bg-neutral-800 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Terminal Output Area */}
        <div className="flex-1 p-4 overflow-y-auto space-y-2 text-xs sm:text-sm">
          {history.map((item, idx) => (
            <div key={idx}>
              {item.type === "input" && (
                <div className="flex items-center gap-2 text-emerald-400">
                  <span className="text-neutral-500">haider@portfolio ~ %</span>
                  <span>{item.text}</span>
                </div>
              )}
              {item.type === "output" && (
                <pre className="text-neutral-300 whitespace-pre-wrap font-mono mt-0.5 leading-relaxed">
                  {item.text}
                </pre>
              )}
              {item.type === "system" && (
                <div className="text-neutral-500 italic pb-1">{item.text}</div>
              )}
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Terminal Input Line */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleCommand(inputVal);
          }}
          className="flex items-center gap-2 px-4 py-3 bg-neutral-900/60 border-t border-neutral-800 text-xs sm:text-sm"
        >
          <span className="text-emerald-400 shrink-0">~ %</span>
          <input
            type="text"
            autoFocus
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            className="w-full bg-transparent text-emerald-300 focus:outline-none placeholder-neutral-600 font-mono"
            placeholder="type a command..."
          />
        </form>
      </div>
    </div>
  );
}
