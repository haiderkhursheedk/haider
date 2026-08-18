"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export interface FindmeItem {
  url: string;
  image: string;
  imageAlt?: string;
  done: string;
}

const findme: FindmeItem[] = [
  {
    url: "https://www.linkedin.com/in/haiderkhursheedk/",
    image: "https://erzeardsiwrvbavennox.supabase.co/storage/v1/object/public/images/haiderkhursheed-linkedin.jpg",
    imageAlt: "Haider Khursheed - Linkedin",
    done: "Linkedin"
  },
  {
    url: "https://x.com/khaiderksh",
    image: "https://erzeardsiwrvbavennox.supabase.co/storage/v1/object/public/images/haiderkhursheed-twitter.jpg",
    imageAlt: "Haider Khursheed - Twitter",
    done: "Twitter"
  },
  {
    url: "youtube.com/@haiderkhursheedk/",
    imageAlt: "Haider Khursheed - Youtube",
    image: "https://erzeardsiwrvbavennox.supabase.co/storage/v1/object/public/images/haiderkhursheed-youtube.jpg",
    done: "Youtube"
  },
  {
    url: "https://www.instagram.com/haiderkhursheedk/",
    imageAlt: "Haider Khursheed - Instagram",
    image: "https://erzeardsiwrvbavennox.supabase.co/storage/v1/object/public/images/haiderkhursheed-instagram.jpg",
    done: "Instagram"
  },
  {
    url: "https://medium.com/@haiderkhursheed/",
    imageAlt: "Haider Khursheed - Medium",
    image: "https://erzeardsiwrvbavennox.supabase.co/storage/v1/object/public/images/haiderkhursheed-medium.jpg",
    done: "Medium"
  },
  {
    url: "https://substack.com/@haiderkhursheed/",
    imageAlt: "Haider Khursheed - Substack",
    image: "https://erzeardsiwrvbavennox.supabase.co/storage/v1/object/public/images/haiderkhursheed-substack.jpg",
    done: "Substack"
  },
  {
    url: "https://github.com/haiderkhursheedk",
    imageAlt: "Haider Khursheed - Github",
    image: "https://erzeardsiwrvbavennox.supabase.co/storage/v1/object/public/images/haiderkhursheed-github.jpg",
    done: "Github"
  }
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

export default function FindMe() {
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
          Yoo, it's me
        </h2>
        <span className="text-xs text-neutral-400">You can also find me here</span>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
        className="grid lg:grid-cols-5 md:grid-cols-5 sm:grid-cols-2 gap-4 w-full"
      >
        {findme.map((item, idx) => (
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
            <div className="relative w-40 h-40 overflow-hidden border border-neutral-800/60 bg-neutral-950">
              <Image
                src={item.image}
                alt={item.imageAlt || ""}
                fill
                className="object-cover"
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
              <p className="absolute -bottom-2 right-0 text-xl text-white drop-shadow-sm">
                {item.done}
              </p>
            </div>
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
}