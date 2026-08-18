"use client";

import React, { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export interface PhotoItem {
  src: string;
  caption: string;
  rotation: string;
  offsetY: string;
}

const photos: PhotoItem[] = [
  {
    src: "https://erzeardsiwrvbavennox.supabase.co/storage/v1/object/public/images/haider.jpg",
    caption: "Haider · Creator",
    rotation: "-5deg",
    offsetY: "2px",
  },
  {
    src: "https://erzeardsiwrvbavennox.supabase.co/storage/v1/object/public/images/iitbombay.png",
    caption: "IIT Bombay pitch at 11",
    rotation: "4deg",
    offsetY: "-4px",
  },
  {
    src: "https://erzeardsiwrvbavennox.supabase.co/storage/v1/object/public/images/robotsatiit.png",
    caption: "First robotics setup",
    rotation: "-3deg",
    offsetY: "3px",
  },
  {
    src: "https://erzeardsiwrvbavennox.supabase.co/storage/v1/object/public/images/game.webp",
    caption: "Game dev studio days",
    rotation: "5deg",
    offsetY: "-2px",
  },
];

export default function PhotoShelf() {
  const [activePhoto, setActivePhoto] = useState<PhotoItem | null>(null);

  return (
    <section className="my-12">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-between mb-4"
      >
        <h2 className="text-xl sm:text-2xl font-bold font-sans tracking-tight text-neutral-900 dark:text-neutral-100">
          Off screen
        </h2>
        <span className="font-mono text-xs text-neutral-500">Moments & archives</span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.6 }}
        className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 py-6 px-2 overflow-x-auto min-h-[220px]"
      >
        {photos.map((item, idx) => (
          <motion.button
            key={idx}
            onClick={() => setActivePhoto(item)}
            whileHover={{
              scale: 1.08,
              rotate: 0,
              y: -8,
              transition: { type: "spring", stiffness: 350, damping: 20 },
            }}
            whileTap={{ scale: 0.96 }}
            className="photo-frame group focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded"
            style={
              {
                "--r": item.rotation,
                "--y": item.offsetY,
              } as React.CSSProperties
            }
          >
            <div className="relative w-36 h-44 sm:w-40 sm:h-48 overflow-hidden rounded bg-neutral-100 dark:bg-neutral-800">
              <Image
                src={item.src}
                alt={item.caption}
                fill
                sizes="(max-width: 640px) 144px, 160px"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <figcaption className="mt-2 text-center font-mono text-[11px] text-neutral-600 dark:text-neutral-300 font-medium truncate max-w-[140px]">
              {item.caption}
            </figcaption>
          </motion.button>
        ))}
      </motion.div>

      {/* Lightbox Modal with AnimatePresence */}
      <AnimatePresence>
        {activePhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActivePhoto(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 10 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-lg w-full bg-neutral-900 border border-neutral-800 p-4 rounded-xl shadow-2xl space-y-3"
            >
              <button
                onClick={() => setActivePhoto(null)}
                className="absolute top-3 right-3 p-1.5 rounded-full bg-neutral-800 hover:bg-neutral-700 text-neutral-400 hover:text-neutral-200 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
              <div className="relative w-full h-80 sm:h-96 rounded-lg overflow-hidden bg-neutral-950">
                <Image
                  src={activePhoto.src}
                  alt={activePhoto.caption}
                  fill
                  className="object-contain"
                />
              </div>
              <p className="text-center font-mono text-sm text-neutral-300 font-medium">
                {activePhoto.caption}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

