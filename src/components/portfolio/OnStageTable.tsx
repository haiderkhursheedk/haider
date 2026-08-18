"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export interface StageItem {
  title: string;
  url: string;
  image: string;
  imageAlt?: string;
  done: string;
}

const stage: StageItem[] = [
  {
    title: "Alumni Connect Series and EDP session on From Student to Startup at AIARKP",
    url: "https://www.aiarkp.ac.in/event_all.php",
    image: "https://erzeardsiwrvbavennox.supabase.co/storage/v1/object/public/images/alumniconnectseriesatarkp.jpg",
    imageAlt: "Alumni Connect Series and EDP session on From Student to Startup at AIARKP",
    done: "Talk"
  },
  {
    title: "Build and Grow AI Hackathon 2.0 (Mumbai & Pune)",
    url: "https://buildandgrow.gdgcloudmumbai.com/",
    image: "https://erzeardsiwrvbavennox.supabase.co/storage/v1/object/public/images/buildandgrow2.0hackathon.jpg",
    imageAlt: "Build and Grow AI Hackathon 2.0 (Mumbai & Pune)",
    done: "Mentor"
  },
  {
    title: "ITM Summer Hacks 2026",
    url: "https://www.itm-summerhacks.xyz/",
    imageAlt: "ITM Summer Hacks 2026",
    image: "https://erzeardsiwrvbavennox.supabase.co/storage/v1/object/public/images/summerhacks2026.jpg",
    done: "Mentor"
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function OnStage() {
  return (
    <section className="my-12">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-between mb-4"
      >
        <h2 className="text-lg font-bold tracking-tight text-neutral-900 dark:text-neutral-100 font-sans">
          On Stage
        </h2>
        <span className="text-xs text-neutral-400">Just helping people</span>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
        className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 gap-4 w-full"
      >
        {stage.map((item, idx) => (
          <motion.a
            key={idx}
            variants={cardVariants}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col w-full backdrop-blur-sm"
          >
            <div className="relative w-full h-60 overflow-hidden border border-neutral-800/60 bg-neutral-950">
              <Image
                src={item.image}
                alt={item.imageAlt || item.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 640px) 100vw, 33vw"
              />
              <div
                className="absolute inset-0 opacity-40 pointer-events-none mix-blend-overlay"
                style={{
                  backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.4) 1px, transparent 1px)`,
                  backgroundSize: "4px 4px",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:opacity-70 transition-opacity duration-300 pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <p className="absolute -bottom-2 right-0 text-4xl   text-white/40 drop-shadow-sm">
                {item.done}
              </p>

            </div>

            <div className="mt-3 flex items-center justify-between">
              <h3 className="font-semibold lg:text-2xl md:text-2xl sm:text-lg text-neutral-100 group-hover:text-emerald-400 transition-colors">
                {item.title}
              </h3>
              {/* <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all text-neutral-400 group-hover:text-emerald-400" /> */}
            </div>

            {/* <p className="mt-1 text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">
              {item.desc}
            </p> */}
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
}



