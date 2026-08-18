"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export interface ProjectItem {
  year: string;
  title: string;
  desc: string;
  url: string;
  badge?: string;
  stars?: string;
}

const projects: ProjectItem[] = [
  {
    year: "2026",
    title: "aeomi",
    desc: "AI research lab building intelligence that remembers, understands, and evolves with humans",
    url: "https://www.aeomi.me/",
    badge: "Stealth / Lab",
    stars: "v1.0",
  },
  {
    year: "2024",
    title: "lixta labs",
    desc: "Venture holding company building next-gen developer & creator ecosystem startups",
    url: "https://www.lixtalabs.com/",
    badge: "Holding Co",
  },
  {
    year: "2024",
    title: "lixta network",
    desc: "High-speed infrastructure & decentralized developer community platform",
    url: "https://www.lixtanetwork.com/",
    badge: "Live",
    stars: "★ 140",
  },
  {
    year: "2024",
    title: "komunity",
    desc: "Developer & tech builder hub connecting 10k+ engineers across Asia",
    url: "https://www.komunity.dev/",
    badge: "Live",
    stars: "★ 98",
  },
  {
    year: "2023",
    title: "game studio exit",
    desc: "Founded game development firm with 200+ global clients; acquired by publisher in 2023",
    url: "https://x.com/khaiderksh/status/1983581870228173087?s=20",
    badge: "Acquired",
    stars: "Exit",
  },
  {
    year: "2011",
    title: "robotics & iit bombay pitch",
    desc: "Built custom autonomous robotics and pitched startup ideas to IIT Bombay at age 11",
    url: "https://erzeardsiwrvbavennox.supabase.co/storage/v1/object/public/assets/iitbombay.png",
    badge: "Origin",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const rowVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

export default function ShippingTable() {
  return (
    <section className="my-12">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-between mb-3"
      >
        <h2 className="text-lg font-bold tracking-tight text-neutral-900 dark:text-neutral-100 font-sans">
          Shipping
        </h2>
        <span className="text-xs text-neutral-400">Selected work</span>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
        className="divide-y divide-neutral-200/50 dark:divide-neutral-800/50"
      >
        {projects.map((item, idx) => (
          <motion.a
            key={idx}
            variants={rowVariants}
            whileHover={{ x: 3 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between py-2.5 px-2 hover:bg-neutral-100/60 dark:hover:bg-neutral-900/50 rounded-lg transition-colors group"
          >
            {/* Left: Year & Title & Short Desc */}
            <div className="flex items-baseline gap-3 min-w-0 pr-2">
              <span className="w-10 font-mono text-xs text-neutral-400 dark:text-neutral-500 shrink-0">
                {item.year}
              </span>
              <span className="font-semibold text-sm text-neutral-900 dark:text-neutral-100 group-hover:text-emerald-500 transition-colors shrink-0">
                {item.title}
              </span>
              <span className="hidden sm:inline text-xs text-neutral-500 dark:text-neutral-400 truncate">
                — {item.desc}
              </span>
            </div>

            {/* Right: Badge & Arrow */}
            <div className="flex items-center gap-2 font-mono text-xs shrink-0 text-neutral-500 dark:text-neutral-400">
              {item.stars && (
                <span className="hidden xs:inline-flex items-center px-1.5 py-0.5 rounded text-[10px] bg-neutral-100 dark:bg-neutral-800/80 text-neutral-600 dark:text-neutral-400">
                  {item.stars}
                </span>
              )}
              {item.badge && (
                <span className="px-2 py-0.5 rounded-full text-[10px] font-medium bg-neutral-100 dark:bg-neutral-800/80 text-neutral-700 dark:text-neutral-300">
                  {item.badge}
                </span>
              )}
              <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-neutral-100" />
            </div>
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
}

