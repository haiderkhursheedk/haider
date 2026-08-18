"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

interface ProjectItem {
  year: string;
  title: string;
  desc: string;
  url: string;
  badge?: string;
  tags?: string[];
  image: string;
  imageAlt: string;
  dividerImage: string; // full-width image shown after this row
  dividerAlt: string;
}

const projects: ProjectItem[] = [
  {
    year: "2026",
    title: "aeomi",
    desc: "Frontier AI research lab building intelligence that remembers, understands, and evolves alongside humans. Focused on memory systems, agentic reasoning, and long-horizon AI.",
    url: "https://www.aeomi.me/",
    badge: "Stealth · Lab",
    tags: ["AI", "Memory Systems", "Agentic AI"],
    image: "https://erzeardsiwrvbavennox.supabase.co/storage/v1/object/public/images/haider.jpg",
    imageAlt: "aeomi — AI research lab",
    dividerImage: "https://erzeardsiwrvbavennox.supabase.co/storage/v1/object/public/images/theart.jfif",
    dividerAlt: "the art of dreaming delusionally big",
  },
  {
    year: "2024",
    title: "lixta labs",
    desc: "Venture holding company building the next generation of developer & creator ecosystem startups. Incubating, funding, and operating companies from 0 to 1.",
    url: "https://www.lixtalabs.com/",
    badge: "Holding Co",
    tags: ["Venture", "Startups", "Ecosystem"],
    image: "https://erzeardsiwrvbavennox.supabase.co/storage/v1/object/public/assets/haider.jpg",
    imageAlt: "lixta labs — venture holding company",
    dividerImage: "https://erzeardsiwrvbavennox.supabase.co/storage/v1/object/public/assets/haider.jpg",
    dividerAlt: "lixta labs — early days",
  },
  {
    year: "2024",
    title: "lixta network",
    desc: "High-speed decentralized infrastructure & developer community platform connecting builders across the globe. 140+ community members and growing.",
    url: "https://www.lixtanetwork.com/",
    badge: "Live",
    tags: ["Network", "Infrastructure", "Community"],
    image: "https://erzeardsiwrvbavennox.supabase.co/storage/v1/object/public/assets/haider.jpg",
    imageAlt: "lixta network — developer platform",
    dividerImage: "https://erzeardsiwrvbavennox.supabase.co/storage/v1/object/public/assets/haider.jpg",
    dividerAlt: "lixta network divider",
  },
  {
    year: "2023",
    title: "game studio exit",
    desc: "Founded a game development studio that grew to 200+ global clients. Shipped titles across multiple platforms before a strategic acquisition by a game publisher in 2023.",
    url: "https://x.com/khaiderksh/status/1983581870228173087?s=20",
    badge: "Acquired",
    tags: ["Games", "Exit", "200+ Clients"],
    image: "https://erzeardsiwrvbavennox.supabase.co/storage/v1/object/public/assets/haider.jpg",
    imageAlt: "game studio — acquired 2023",
    dividerImage: "https://erzeardsiwrvbavennox.supabase.co/storage/v1/object/public/assets/haider.jpg",
    dividerAlt: "game studio divider",
  },
];

export default function ShippingGrid() {
  return (
    <section className="my-10">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-bold tracking-tight text-neutral-900 dark:text-neutral-100">
          Shipping
        </h2>
        <span className="font-mono text-xs text-neutral-500">Selected work</span>
      </div>

      <div className="flex flex-col gap-3">
        {projects.map((item, idx) => {
          const isEven = idx % 2 === 0;
          const isLast = idx === projects.length - 1;

          const TextCard = (
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col justify-between h-full min-h-[220px] rounded-2xl border border-neutral-800/60 bg-neutral-900/60 p-6 hover:border-neutral-700/80 transition-all duration-300 hover:bg-neutral-900/80 backdrop-blur-sm"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2 flex-wrap">
                    {item.badge && (
                      <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-neutral-800 text-neutral-400 border border-neutral-700/60">
                        {item.badge}
                      </span>
                    )}
                    <span className="text-[10px] font-mono text-neutral-600">{item.year}</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-neutral-700 group-hover:text-neutral-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200" />
                </div>

                <h3 className="text-2xl font-bold text-neutral-100 mb-3 group-hover:text-white transition-colors tracking-tight">
                  {item.title}
                </h3>

                <p className="text-sm text-neutral-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              {item.tags && (
                <div className="flex flex-wrap gap-1.5 mt-5 pt-4 border-t border-neutral-800/60">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-mono px-2 py-0.5 rounded bg-neutral-800/80 text-neutral-400 border border-neutral-700/40"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </a>
          );

          const ImageCard = (
            <div className="relative h-full min-h-[220px] rounded-2xl overflow-hidden border border-neutral-800/60 group">
              <Image
                src={item.image}
                alt={item.imageAlt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/60 via-transparent to-transparent" />
            </div>
          );

          return (
            <React.Fragment key={idx}>
              {/* 2:1 bento row */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {isEven ? (
                  <>
                    <div className="sm:col-span-2">{TextCard}</div>
                    <div className="sm:col-span-1">{ImageCard}</div>
                  </>
                ) : (
                  <>
                    <div className="sm:col-span-1">{ImageCard}</div>
                    <div className="sm:col-span-2">{TextCard}</div>
                  </>
                )}
              </div>

              {/* Full-width divider image after each row (except last) */}
              {!isLast && (
                <div className="relative w-full h-48 rounded-2xl overflow-hidden border border-neutral-800/60">
                  <Image
                    src={item.dividerImage}
                    alt={item.dividerAlt}
                    fill
                    className="object-cover"
                    sizes="100vw"
                  />
                  {/* Fade top & bottom into neutral-950 */}
                  <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/60 via-transparent to-neutral-950/60" />
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </section>
  );
}
