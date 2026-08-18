"use client";

import React, { useState, useEffect } from "react";
import { Search, ExternalLink } from "lucide-react";

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
}

interface CommandItem {
  category: string;
  label: string;
  sub?: string;
  url?: string;
  action?: () => void;
}

export default function CommandPalette({ isOpen, onClose }: CommandPaletteProps) {
  const [query, setQuery] = useState("");

  const items: CommandItem[] = [
    { category: "Projects", label: "Aeomi — AI Memory Lab", sub: "aeomi.me", url: "https://www.aeomi.me/" },
    { category: "Projects", label: "Lixta Labs — Holding Co", sub: "lixtalabs.com", url: "https://www.lixtalabs.com/" },
    { category: "Projects", label: "Lixta Network", sub: "lixtanetwork.com", url: "https://www.lixtanetwork.com/" },
    { category: "Projects", label: "Komunity", sub: "komunity.dev", url: "https://www.komunity.dev/" },
    { category: "Socials", label: "X / Twitter", sub: "@khaiderksh", url: "https://x.com/khaiderksh" },
    { category: "Socials", label: "GitHub", sub: "github.com", url: "https://github.com" },
    { category: "Socials", label: "Email Haider", sub: "Direct email contact", url: "mailto:haider@lixtalabs.com" },
  ];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        if (isOpen) onClose();
        else {
          // Open handled by parent or state
        }
      }
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const filtered = items.filter(
    (item) =>
      item.label.toLowerCase().includes(query.toLowerCase()) ||
      item.category.toLowerCase().includes(query.toLowerCase()) ||
      (item.sub && item.sub.toLowerCase().includes(query.toLowerCase()))
  );

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-150"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl shadow-2xl overflow-hidden font-sans"
      >
        {/* Search Bar Input */}
        <div className="flex items-center px-4 py-3 border-b border-neutral-200 dark:border-neutral-800">
          <Search className="w-4 h-4 text-neutral-400 mr-2 shrink-0" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search projects, socials & actions..."
            className="w-full bg-transparent text-sm text-neutral-900 dark:text-neutral-100 placeholder-neutral-400 focus:outline-none"
          />
          <kbd className="px-1.5 py-0.5 text-[10px] font-mono rounded bg-neutral-100 dark:bg-neutral-800 text-neutral-500 border border-neutral-200 dark:border-neutral-700">
            ESC
          </kbd>
        </div>

        {/* Results List */}
        <div className="max-h-72 overflow-y-auto p-2 space-y-1">
          {filtered.length === 0 ? (
            <div className="p-6 text-center text-sm font-mono text-neutral-500">
              No matching commands or projects found.
            </div>
          ) : (
            filtered.map((item, idx) => (
              <a
                key={idx}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={onClose}
                className="flex items-center justify-between px-3 py-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors group cursor-pointer text-sm"
              >
                <div className="flex items-center gap-2 min-w-0">
                  <span className="px-1.5 py-0.5 rounded text-[10px] font-mono bg-neutral-100 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400 border border-neutral-200 dark:border-neutral-700">
                    {item.category}
                  </span>
                  <span className="font-medium text-neutral-900 dark:text-neutral-100 truncate">
                    {item.label}
                  </span>
                </div>
                <div className="flex items-center gap-1 font-mono text-xs text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-neutral-100">
                  {item.sub && <span>{item.sub}</span>}
                  <ExternalLink className="w-3.5 h-3.5" />
                </div>
              </a>
            ))
          )}
        </div>

        {/* Footer shortcuts */}
        <div className="flex items-center justify-between px-4 py-2 bg-neutral-50 dark:bg-neutral-950 border-t border-neutral-200 dark:border-neutral-800 font-mono text-[11px] text-neutral-500">
          <span>
            Press <kbd className="px-1 bg-neutral-200 dark:bg-neutral-800 rounded">↑</kbd> <kbd className="px-1 bg-neutral-200 dark:bg-neutral-800 rounded">↓</kbd> to navigate
          </span>
          <span><kbd className="px-1 bg-neutral-200 dark:bg-neutral-800 rounded">↵</kbd> select</span>
        </div>
      </div>
    </div>
  );
}
