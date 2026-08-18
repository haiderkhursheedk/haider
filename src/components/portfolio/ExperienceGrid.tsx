"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

interface ProjectItem {
  year: string;
  designation: string;
  title: string;
  desc: string;
  url?: string;
  badge?: string;
  tags?: string[];
  image: string;
  imageAlt: string;
  dividerImage: string;
  dividerAlt: string;
}

const projects: ProjectItem[] = [
  {
    year: "2026",
    designation: "Founder & Indie Builder",
    title: "Home for Builders",
    desc: "Home for Builders is an execution-first ecosystem for developers, designers, founders, creators, hackers, and internet builders who want to build real things. Whether it's AI, apps, games, hardware, media, or weird internet experiments it doesn't matter. What matters is that you build.",
    url: "https://www.homeforbuilders.com/",
    badge: "Startup school",
    tags: ["AI", "Memory Systems", "Agentic AI"],
    image: "https://erzeardsiwrvbavennox.supabase.co/storage/v1/object/public/images/homeforbuilders.png",
    imageAlt: "Home for Builders — Place where you can build your ideas.",
    dividerImage: "https://erzeardsiwrvbavennox.supabase.co/storage/v1/object/public/images/hfbartpiece.jpg",
    dividerAlt: "the art of dreaming delusionally big",
  },
  // {
  //   year: "2026",
  //   designation: "Founder & AI Researcher",
  //   title: "Aeomi",
  //   desc: "Frontier AI research lab building intelligence that remembers, understands, and evolves alongside humans. Focused on memory systems, agentic reasoning, and long-horizon AI.",
  //   url: "https://www.aeomi.me/",
  //   badge: "Stealth · Lab",
  //   tags: ["AI", "Emotional Intelligence", "Cognitive Synaptic Memory"],
  //   image: "https://erzeardsiwrvbavennox.supabase.co/storage/v1/object/public/images/aeomi.png",
  //   imageAlt: "aeomi — AI research lab",
  //   dividerImage: "https://erzeardsiwrvbavennox.supabase.co/storage/v1/object/public/images/aeomiartpiece.png",
  //   dividerAlt: "the art of dreaming delusionally big",
  // },
  {
    year: "2025",
    designation: "Co-Founder & CEO",
    title: "Komunity",
    desc: "Onchain hiring platform for techies and startup founders to build, showcase, and get hired. In a world where traditional hiring depends on outdated resumes, Komunity flips it by creating a space where your work becomes your identity.",
    url: "https://www.komunity.dev/",
    badge: "Exited · Closed",
    tags: ["Hiring", "Ecosytem", "Community"],
    image: "https://erzeardsiwrvbavennox.supabase.co/storage/v1/object/public/images/komunity.png",
    imageAlt: "Komunity — Onchain hiring platform",
    dividerImage: "https://erzeardsiwrvbavennox.supabase.co/storage/v1/object/public/images/Linkdlen%20Banner%20(Komunity).png",
    dividerAlt: "Komunity art piece",
  },
  {
    year: "2024",
    designation: "Founder & Chairman",
    title: "Lixta Network",
    desc: "Creative studio & venture foundry turning labour into ai-first software that delivers business outcomes. So far we become india's fastest growing creative studio helping startups build tech products.",
    url: "https://www.lixtanetwork.com/",
    badge: "Currently running",
    tags: ["Creative Studio", "Venture Foundry", "Enterprise Solutions"],
    image: "https://erzeardsiwrvbavennox.supabase.co/storage/v1/object/public/images/lixtanetwork.png",
    imageAlt: "lixta network — developer platform",
    dividerImage: "https://erzeardsiwrvbavennox.supabase.co/storage/v1/object/public/images/lixtanetworkart.png",
    dividerAlt: "lixta network art piece",
  },
  {
    year: "2023",
    designation: "Founder & Game Developer",
    title: "Game Dev Studio",
    desc: "Started a small game development studio, grew that to a decent size. Shipped titles across multiple platforms before a private acquisition by a game publisher in 2024.",
    badge: "Exited · Acquired",
    tags: ["Games", "Indie Game Studio", "Hyper casual games"],
    image: "https://erzeardsiwrvbavennox.supabase.co/storage/v1/object/public/images/gamedev.jpg",
    imageAlt: "game studio — acquired 2023",
    dividerImage: "https://erzeardsiwrvbavennox.supabase.co/storage/v1/object/public/images/gamedevartpiece.png",
    dividerAlt: "game studio divider",
  },
  {
    year: "2022",
    designation: "Intern",
    title: "Ihaan Technologies",
    desc: "I had the opportunity to work with experienced developers and learn the ins and outs of developing apps for the Android platform. From day one, I was given real-world tasks to complete and was able to make a meaningful contribution to the development of the team's current project.",
    url: "https://ihaantechnologies.com/",
    badge: "Internship",
    tags: ["Mobile Application Development", "UI Design", "App Developer"],
    image: "https://erzeardsiwrvbavennox.supabase.co/storage/v1/object/public/images/ihaantechnologies.png",
    imageAlt: "Ihaan Technologies",
    dividerImage: "https://erzeardsiwrvbavennox.supabase.co/storage/v1/object/public/assets/haider.jpg",
    dividerAlt: "game studio divider",
  },
];

export default function JourneyGrid() {
  return (
    <section className="my-20">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-between mb-6"
      >
        <h2 className="text-lg font-bold tracking-tight text-neutral-900 dark:text-neutral-100">
          Career & Ventures
        </h2>
        <span className="text-xs text-neutral-500">Just love what i do</span>
      </motion.div>

      {/* <div className="flex flex-col gap-3"> */}
      <div className="flex flex-col">
        {projects.map((item, idx) => {
          const TextCard = (
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col justify-between h-full min-h-[220px] border border-neutral-800/60 bg-neutral-900/60 p-6 hover:border-neutral-700/80 transition-all duration-300 hover:bg-neutral-900/80 backdrop-blur-sm"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2 flex-wrap">
                    {item.badge && (
                      <span className="text-[10px] px-2.5 py-0.5 bg-neutral-800 text-neutral-400 border border-neutral-700/60">
                        {item.badge}
                      </span>
                    )}
                    <span className="text-[10px] text-neutral-600">{item.year}</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-neutral-700 group-hover:text-neutral-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200" />
                </div>

                <h3 className="text-xl font-bold text-neutral-100 group-hover:text-white transition-colors tracking-tight">
                  {item.title}
                </h3>

                <p className="text-xs text-neutral-100 mb-4 group-hover:text-white transition-colors tracking-tight">
                  {item.designation}
                </p>

                <p className="text-sm text-neutral-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              {item.tags && (
                <div className="flex flex-wrap gap-1.5 pt-4">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] px-2 py-0.5 bg-neutral-800/80 text-neutral-400 border border-neutral-700/40"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </a>
          );

          const ImageCard = (
            <div className="lg:block md:block sm:hidden relative h-full min-h-[220px] overflow-hidden border border-neutral-800/60 group">
              <Image
                src={item.image}
                alt={item.imageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 33vw"
              />
              <div className="absolute inset-0" />
            </div>
          );

          return (
            <React.Fragment key={idx}>
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.04 }}
                // className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 sm:gap-0 lg:gap-3 md:gap-3"
                className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 sm:gap-0"
              >    <>
                  <div className="sm:col-span-2">{TextCard}</div>
                  <div className="sm:col-span-1">{ImageCard}</div>
                </>
              </motion.div>

              {/* {!isLast && (
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.6 }}
                  className="lg:block md:block sm:hidden relative w-full h-48 overflow-hidden border border-neutral-800/60"
                >
                  <Image
                    src={item.dividerImage}
                    alt={item.dividerAlt}
                    fill
                    className="object-cover"
                    sizes="100vw"
                  />
                  <div className="absolute inset-0" />
                </motion.div>
              )} */}
            </React.Fragment>
          );
        })}
      </div>
    </section>
  );
}


