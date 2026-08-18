"use client";

import React from "react";
import Image from "next/image";

export interface ExperienceItem {
  year: string;
  role: string;
  image: string;
  company: string;
  location: string;
  tenure: string;
}

const experiences: ExperienceItem[] = [
  {
    year: "2026",
    role: "Founder & AI Researcher",
    company: "Aeomi",
    location: "Stealth",
    tenure: "2026 — Present",
    image: "https://erzeardsiwrvbavennox.supabase.co/storage/v1/object/public/images/homeforbuilders.png",

  },
  {
    year: "2024",
    role: "Founder & Managing Director",
    company: "Lixta Labs Holding",
    location: "Global",
    tenure: "2024 — Present",
    image: "https://erzeardsiwrvbavennox.supabase.co/storage/v1/object/public/images/homeforbuilders.png",

  },
  {
    year: "2024",
    role: "Founder & Lead",
    company: "Lixta Network & Komunity",
    location: "Remote",
    tenure: "2024 — Present",
    image: "https://erzeardsiwrvbavennox.supabase.co/storage/v1/object/public/images/homeforbuilders.png",

  },
  {
    year: "2023",
    role: "Founder & CEO (Acquired)",
    company: "Game Studio",
    location: "200+ Clients",
    tenure: "Acquired 2023",
    image: "https://erzeardsiwrvbavennox.supabase.co/storage/v1/object/public/images/homeforbuilders.png",

  },
  {
    year: "2011",
    role: "Robotics Builder & Pitcher",
    company: "IIT Bombay Demo",
    location: "Mumbai",
    tenure: "Age 11",
    image: "https://erzeardsiwrvbavennox.supabase.co/storage/v1/object/public/images/homeforbuilders.png",

  },
];

export default function ExperienceTable() {
  return (
    <section className="my-12">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-lg font-bold tracking-tight text-neutral-900 dark:text-neutral-100 font-sans">
          Career & Ventures
        </h2>
        <span className="text-xs text-neutral-400">Just love what i do</span>
      </div>

      <div className="divide-y divide-neutral-200/50 dark:divide-neutral-800/50">
        {experiences.map((item, idx) => (
          <div
            key={idx}
            className="flex items-center justify-between py-3.5 hover:bg-neutral-100/60 dark:hover:bg-neutral-900/50 transition-colors group"
          >
            <div className="flex items-center gap-3 sm:gap-4 min-w-0 ">
              {/* <span className="w-10 font-mono text-xs text-neutral-400 dark:text-neutral-500 shrink-0">
                {item.year}
              </span> */}
              {item.image && (
                <div className="relative w-20 h-20 sm:w-14 sm:h-14 shrink-0 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.company}
                    fill
                    className="object-cover"
                    sizes="56px"
                  />
                </div>
              )}

              <div className="flex flex-col min-w-0">
                <span className="font-semibold text-sm text-neutral-900 dark:text-neutral-100 shrink-0">
                  {item.role}
                </span>
                <span className="text-xs text-neutral-500 dark:text-neutral-400 truncate">
                  · {item.company}
                </span>
              </div>


            </div>

            <div className="flex items-center gap-3 font-mono text-xs text-neutral-500 dark:text-neutral-400 shrink-0">
              <span className="hidden md:inline text-neutral-400">{item.location}</span>
              <span className="px-2 py-0.5 rounded text-[10px] font-medium bg-neutral-100 dark:bg-neutral-800/80 text-neutral-700 dark:text-neutral-300">
                {item.tenure}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
