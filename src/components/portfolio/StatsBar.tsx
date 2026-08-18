"use client";

import React from "react";

export default function StatsBar() {
  const stats = [
    { label: "clients", val: "200+" },
    { label: "acquisition", val: "1" },
    { label: "startups", val: "3+" },
    { label: "focus", val: "AI Memory" },
  ];

  return (
    <ul
      aria-label="at a glance metrics"
      className="flex flex-wrap items-center justify-between gap-4 py-3 px-4 my-6 rounded-lg bg-neutral-100/60 dark:bg-neutral-900/40 border border-neutral-200/60 dark:border-neutral-800/60 font-mono text-xs"
    >
      {stats.map((item, idx) => (
        <li key={idx} className="flex items-baseline gap-1.5">
          <b className="font-semibold text-neutral-900 dark:text-neutral-100 text-sm">
            {item.val}
          </b>
          <span className="text-neutral-500 dark:text-neutral-400">{item.label}</span>
        </li>
      ))}
      <li className="flex items-center gap-1.5 text-emerald-500 font-medium ml-auto">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
        <span>live</span>
      </li>
    </ul>
  );
}
