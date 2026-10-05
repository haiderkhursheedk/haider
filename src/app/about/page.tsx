"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface MomentCard {
  src: string;
  caption: string;
  rotate?: string;
}

interface LoreBlock {
  age: string;
  points: { text: string; link?: string; linkText?: string }[];
  images: MomentCard[];
}

const LORE_TIMELINE: LoreBlock[] = [
  {
    age: "@11",
    points: [
      { text: "Started exploring robotics. No tutorials, just raw curiosity." },
      { text: "Sold pens, wrote books and rented my cycle. Always had an entrepreneurial streak." },
      { text: "Recorded my first video. Horrible quality, but I was obsessed." },
    ],
    images: [
      {
        src: "https://erzeardsiwrvbavennox.supabase.co/storage/v1/object/public/images/@11-12journey1.jpg",
        caption: "First ever robotics event",
        rotate: "-2deg",
      },
      {
        src: "https://erzeardsiwrvbavennox.supabase.co/storage/v1/object/public/images/Screenshot%202026-08-18%20015329.png",
        caption: "First video i shoot",
        rotate: "2deg",
      },
    ],
  },
  {
    age: "@12",
    points: [
      { text: "Played games, recorded them and posted on my YouTube channel." },
      { text: "Built my first game inside a mobile app that let you create games within a game." },
      { text: "Built small robots and machines as a hobby." },
      { text: "Documented everything on my second YouTube channel. Still have it, but it's a bit embarrassing to share now." },
    ],
    images: [
      {
        src: "https://erzeardsiwrvbavennox.supabase.co/storage/v1/object/public/images/iitbombay.png",
        caption: "The IIT Bombay visit",
        rotate: "-3deg",
      },
      {
        src: "https://erzeardsiwrvbavennox.supabase.co/storage/v1/object/public/images/robotsatiit.png",
        caption: "Me at Techfest for robowars",
        rotate: "1deg",
      },
    ],
  },
  {
    age: "@16",
    points: [
      { text: "Enrolled in a diploma program for Computer Engineering." },
      { text: "Started learning coding and design seriously." },
      { text: "Co-founded a small game development studio during my diploma. Exited and closed in 2023." },
    ],
    images: [
      {
        src: "https://erzeardsiwrvbavennox.supabase.co/storage/v1/object/public/images/@16journey1.jpg",
        caption: "First Game I Made",
        rotate: "-3deg",
      },
      {
        src: "https://erzeardsiwrvbavennox.supabase.co/storage/v1/object/public/images/@16journey02.jpg",
        caption: "Global Game Scaling",
        rotate: "2deg",
      },
    ],
  },
  {
    age: "@18",
    points: [
      { text: "Shipped hyper-casual games with the studio, then exited and closed it in 2023.." },
      { text: "Learned some android development and ethical hacking on the side." },
    ],
    images: [
      {
        src: "https://erzeardsiwrvbavennox.supabase.co/storage/v1/object/public/images/@18journey01.jpg",
        caption: "One of the multiple games we built",
        rotate: "-2deg",
      },
      {
        src: "https://erzeardsiwrvbavennox.supabase.co/storage/v1/object/public/images/gamedevartpiece.png",
        caption: "Moments before, Studio Acquisition",
        rotate: "3deg",
      },
    ],
  },
  {
    age: "@19",
    points: [
      { text: "Met Abdullah Yasin Shaikh on LinkedIn and founded ", link: "https://lixtanetwork.com", linkText: "Lixta Network" },
      { text: "A creative studio that builds brands, websites and apps." },
      { text: "Started attending tech events and networking." },
    ],
    images: [
      {
        src: "https://erzeardsiwrvbavennox.supabase.co/storage/v1/object/public/images/@19journey1.jpg",
        caption: "Lixta Network Co-Founded",
        rotate: "-2deg",
      },
      {
        src: "https://erzeardsiwrvbavennox.supabase.co/storage/v1/object/public/images/@19journey2.jpg",
        caption: "The first Lixta Network HQ",
        rotate: "2deg",
      },
    ],
  },
  {
    age: "@20",
    points: [
      { text: "Co-founded Komunity, an onchain hiring platform for builders.", link: "https://komunity.dev", linkText: "Komunity.dev" },
      { text: "It received early backing from an angel investor and reached 1,000+ users before shutting down in April 2026." },
      { text: "Classic mistake: scaled before product-market fit. Shut it down in April 2026. Learned more from the failure than from any win." },
    ],
    images: [
      {
        src: "https://erzeardsiwrvbavennox.supabase.co/storage/v1/object/public/images/@20journey1.jpg",
        caption: "Komunity cofounders",
        rotate: "-2deg",
      },
      {
        src: "https://erzeardsiwrvbavennox.supabase.co/storage/v1/object/public/images/@20journey2.jpg",
        caption: "Moments while building komunity",
        rotate: "2deg",
      },
    ],
  },
  {
    age: "@21",
    points: [
      { text: "Scaling Lixta Network, toward enterprise engineering and product work." },
      { text: "Building Home for Builders, a community.", link: "https://homeforbuilders.com", linkText: "Home for Builders" },
      { text: "I love startups." }
    ],
    images: [
      {
        src: "https://erzeardsiwrvbavennox.supabase.co/storage/v1/object/public/images/buildandgrow2.0hackathon.jpg",
        caption: "One of the mentoring session",
        rotate: "-2deg",
      },
      {
        src: "https://erzeardsiwrvbavennox.supabase.co/storage/v1/object/public/images/hfbartpiece.jpg",
        caption: "The Home for Builders effect",
        rotate: "2deg",
      },

    ],
  },
];

export default function AboutPage() {
  const [, setActiveImage] = useState<{ src: string; caption: string } | null>(null);

  return (
    <main className="min-h-screen w-full max-w-4xl mx-auto px-4 sm:px-8 py-4 sm:py-6 font-sans text-neutral-300 mb-2">
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-10"
      >
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-100 font-sans">
          Journey
        </h1>
        <p className="mt-2 text-sm text-neutral-500 max-w-md">
          The timeline of a curious child who turns ideas into fast shipping companies.
        </p>
        <div className="mt-6 max-w-2xl overflow-hidden py-5 shadow-lg shadow-black/10 sm:py-6">
          <p className="mb-4 text-xs text-neutral-500">
            (Yes, I&apos;m the guy with two names, so a little note about my name)
          </p>
          <div className="flex flex-wrap items-start gap-x-5 gap-y-4">
            <div className="flex flex-wrap items-start gap-x-4 gap-y-3">
              <span className="inline-flex flex-col items-end gap-0">
                <span className="text-[11px] font-medium tracking-wide text-sky-300">Used professionally</span>
                <svg aria-hidden="true" viewBox="0 0 100 22" preserveAspectRatio="none" className="h-4 w-full overflow-visible text-sky-300">
                  <defs><marker id="arrow-professional" markerWidth="7" markerHeight="7" refX="5.5" refY="3" orient="auto" markerUnits="userSpaceOnUse"><path d="M 1 1 L 5 3 L 1 5" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" /></marker></defs>
                  <path d="M 88 1 C 82 11, 58 7, 72 18" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" markerEnd="url(#arrow-professional)" />
                </svg>
                <span className="relative px-1 text-2xl font-semibold tracking-tight text-neutral-50 sm:text-3xl">
                  Haider
                  <span className="absolute -inset-x-1 -inset-y-0.5 -rotate-2 rounded-[45%] border border-sky-400/80" />
                </span>
              </span>
              <span className="inline-flex flex-col items-start gap-0">
                <span className="text-[11px] font-medium tracking-wide text-amber-300">Father&apos;s name</span>
                <svg aria-hidden="true" viewBox="0 0 100 22" preserveAspectRatio="none" className="h-4 w-full overflow-visible text-amber-300">
                  <defs><marker id="arrow-father" markerWidth="7" markerHeight="7" refX="5.5" refY="3" orient="auto" markerUnits="userSpaceOnUse"><path d="M 1 1 L 5 3 L 1 5" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" /></marker></defs>
                  <path d="M 8 1 C 12 12, 39 5, 50 18" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" markerEnd="url(#arrow-father)" />
                </svg>
                <span className="relative px-1 text-2xl font-semibold tracking-tight text-neutral-50 sm:text-3xl">
                  Khursheed
                  <span className="absolute -inset-x-1 -inset-y-0.5 rotate-1 rounded-[45%] border-2 border-amber-400/80" />
                </span>
              </span>
            </div>
          </div>
          <p className="mt-2 text-sm text-neutral-400">Haider Khursheed is the name I use professionally.</p>

          <div className="my-5 h-px bg-neutral-800/80" />

          <p className="mb-3 text-xs text-neutral-500">My legal name</p>
          <div className="flex flex-wrap items-start gap-x-5 gap-y-4 mx-3">
            <span className="inline-flex flex-col items-center gap-0">
              <span className="text-[11px] font-medium tracking-wide text-rose-300">Maa-baap ka diya hua naam</span>
              <svg aria-hidden="true" viewBox="0 0 100 22" preserveAspectRatio="none" className="h-4 w-full overflow-visible text-rose-300">
                <defs><marker id="arrow-given-name" markerWidth="7" markerHeight="7" refX="5.5" refY="3" orient="auto" markerUnits="userSpaceOnUse"><path d="M 1 1 L 5 3 L 1 5" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" /></marker></defs>
                <path d="M 88 1 C 80 12, 52 5, 38 18" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" markerEnd="url(#arrow-given-name)" />
              </svg>
              <span className="relative px-1 text-2xl font-semibold tracking-tight text-neutral-50 sm:text-3xl">
                Abdul Rehman
                <span className="absolute -inset-x-1 -inset-y-0.5 rotate-1 rounded-[45%] border border-rose-400/80" />
              </span>
            </span>
            <span className="inline-flex flex-col items-end gap-0">
              <span className="text-[11px] font-medium tracking-wide text-amber-300">Father&apos;s name</span>
              <svg aria-hidden="true" viewBox="0 0 100 22" preserveAspectRatio="none" className="h-4 w-full overflow-visible text-amber-300">
                <defs><marker id="arrow-legal-father" markerWidth="7" markerHeight="7" refX="5.5" refY="3" orient="auto" markerUnits="userSpaceOnUse"><path d="M 1 1 L 5 3 L 1 5" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" /></marker></defs>
                <path d="M 90 1 C 84 12, 62 5, 74 18" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" markerEnd="url(#arrow-legal-father)" />
              </svg>
              <span className="relative px-1 text-2xl font-semibold tracking-tight text-neutral-50 sm:text-3xl">
                Khursheed
                <span className="absolute -inset-x-1 -inset-y-0.5 rotate-1 rounded-[45%] border-2 border-amber-400/80" />
              </span>
            </span>
            <span className="inline-flex flex-col items-center gap-0">
              <span className="text-[11px] font-medium tracking-wide text-violet-300">Surname</span>
              <svg aria-hidden="true" viewBox="0 0 100 22" preserveAspectRatio="none" className="h-4 w-full overflow-visible text-violet-300">
                <defs><marker id="arrow-surname" markerWidth="7" markerHeight="7" refX="5.5" refY="3" orient="auto" markerUnits="userSpaceOnUse"><path d="M 1 1 L 5 3 L 1 5" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" /></marker></defs>
                <path d="M 92 1 C 86 10, 72 7, 68 18" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" markerEnd="url(#arrow-surname)" />
              </svg>
              <span className="relative px-1 text-2xl font-semibold tracking-tight text-neutral-50 sm:text-3xl">
                Khan
                <span className="absolute -inset-x-1 -inset-y-0.5 -rotate-2 rounded-[45%] border border-violet-400/80" />
              </span>
            </span>
          </div>
        </div>
      </motion.div>

      <div className="space-y-10">
        {LORE_TIMELINE.map((section, idx) => (
          <motion.div
            key={section.age}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.4, delay: idx * 0.04 }}
            className="space-y-3"
          >
            <div className="flex items-center gap-3">
              <span className="text-sm font-semibold text-neutral-100">
                {section.age}
              </span>
              <div className="h-px flex-1 bg-neutral-800/60" />
            </div>

            <ul className="space-y-1.5 pl-1 text-sm sm:text-base text-neutral-300 leading-relaxed font-sans">
              {section.points.map((pt, pIdx) => (
                <li key={pIdx} className="flex items-start gap-2.5 group">
                  <span className="text-neutral-600 text-sm mt-0.5 group-hover:text-neutral-400 transition-colors select-none">
                    •
                  </span>
                  <span className="group-hover:text-neutral-100 transition-colors">
                    {pt.text}
                    {pt.link && pt.linkText && (
                      <>
                        {" "}
                        <a
                          href={pt.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-neutral-200 hover:text-white underline underline-offset-4 decoration-neutral-700 hover:decoration-neutral-400 transition-colors"
                        >
                          {pt.linkText}
                        </a>
                      </>
                    )}
                  </span>
                </li>
              ))}
            </ul>

            <div className="pt-2 pb-2 grid grid-cols-2 gap-3 sm:gap-5 max-w-xs">
              {section.images.map((img, imgIdx) => (
                <motion.button
                  key={imgIdx}
                  onClick={() => setActiveImage({ src: img.src, caption: img.caption })}
                  whileHover={{ scale: 1.04, rotate: 0, y: -3 }}
                  whileTap={{ scale: 0.96 }}
                  style={{ rotate: img.rotate ?? "0deg" }}
                  className="p-2 bg-neutral-900/60 border border-neutral-800  shadow-md text-left flex flex-col items-center transition-all hover:bg-neutral-900 hover:border-neutral-700"
                >
                  <div className="relative w-full h-44  overflow-hidden bg-neutral-950">
                    <Image
                      src={img.src}
                      alt={img.caption}
                      fill
                      sizes="(max-width: 640px) 45vw, 240px"
                      className="object-cover"
                    />
                  </div>
                  {/* <p className="mt-2 text-[11px] font-mono text-neutral-400 text-center truncate w-full px-1">
                    {img.caption}
                  </p> */}
                </motion.button>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* <AnimatePresence>
        {activeImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveImage(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md"
          >
            <button
            onClick={() => setActiveImage(null)}
            className="absolute top-3 right-3 p-1.5 rounded-full bg-neutral-800 hover:bg-neutral-700 text-neutral-400 hover:text-neutral-200 transition-colors"
          >
              <X className="w-4 h-4" />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-2xl w-full bg-neutral-900 border border-neutral-800 p-4 rounded-xl shadow-2xl space-y-3"
            >

              <div className="relative w-full h-72 sm:h-96 rounded-lg overflow-hidden bg-neutral-950">

                <Image
                  src={activeImage.src}
                  alt={activeImage.caption}
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-center font-mono text-xs sm:text-sm text-neutral-300">
                {activeImage.caption}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence> */}
    </main>
  );
}
