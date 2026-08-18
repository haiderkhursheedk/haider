"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Copy, Check } from "lucide-react";

const BIOS = [
  {
    title: "Short Bio",
    words: "50 words",
    text: "Haider Khursheed is the Co-founder & CEO of Lixta Network, a creative studio building brands, web applications, and AI-first software. 19 years old. Founded a game dev studio at 16 (acquired 2024), co-founded Komunity.dev, and now scaling enterprise software solutions alongside Home for Builders.",
  },
  {
    title: "Medium Bio",
    words: "150 words",
    text: "Haider Khursheed is a builder and founder who turns ideas into fast-shipping companies. At 19, he serves as the Co-founder & CEO of Lixta Network, leading the company's shift toward enterprise engineering and AI-first product development. Obsessed with how things work since age 11, Haider started recording videos and building games early, founding a game development studio in 2021 that scaled globally and was acquired by a publisher in 2024. In 2024, he co-founded Lixta Network, turning manual workflows into modern digital experiences. He later co-founded Komunity.dev, raising a pre-seed round at a ₹12.9M valuation before pivoting its lessons into new ventures. Today, alongside scaling Lixta Network, he actively builds Home for Builders—a dedicated startup school for builders—and Aeomi, an AI research lab focused on persistent memory systems.",
  },
  {
    title: "Long Bio",
    words: "300 words",
    text: "Haider Khursheed is the Co-founder & CEO of Lixta Network, building next-generation digital products, brand experiences, and enterprise AI-first software. Operating with an intense bias toward execution, Haider has been building on the internet for over a decade. His journey began at age 11, taking apart machines, building robotics, and creating his first mobile game in 2016. In 2021, while pursuing a diploma in computer engineering, he launched a game development studio that produced games for global clients, culminating in a successful acquisition by a game publisher in mid-2024. In August 2024, Haider co-founded Lixta Network alongside Abdullah. Under their leadership, Lixta has emerged as one of the fastest-growing creative and software studios out of India, servicing ambitious startups and transitioning into high-impact enterprise solutions. In 2025, to solve hiring friction for builders, he co-founded Komunity.dev—an onchain platform where work serves as identity—raising a pre-seed round at a ₹12.9M pre-money valuation and scaling to 1,000+ users before winding down operations in 2026 to focus on high-conviction ventures. Currently, Haider leads product and engineering at Lixta Network while driving side initiatives including Home for Builders, an execution-first startup school for internet builders, and Aeomi, a frontier AI research lab exploring persistent memory architecture. Driven by an uncompromising love for building startups, Haider continues to ship software at scale.",
  },
];

interface Asset {
  title: string;
  meta: string;
  url: string;
  aspect?: string;
}

const PHOTOS: Asset[] = [
  {
    title: "Haider Khursheed — Photo 1",
    meta: "PNG · 512×512",
    url: "https://erzeardsiwrvbavennox.supabase.co/storage/v1/object/public/images/haiderkhursheed1.png",
  },
  {
    title: "Haider Khursheed — Photo 2",
    meta: "PNG · 512×512",
    url: "https://erzeardsiwrvbavennox.supabase.co/storage/v1/object/public/images/haiderkhursheed2.png",
  },
  {
    title: "Haider Khursheed — Photo 3",
    meta: "PNG · 512×512",
    url: "https://erzeardsiwrvbavennox.supabase.co/storage/v1/object/public/images/haiderkhursheed3.png",
  },
];

// const BRAND_LOGOS: Asset[] = [
//   {
//     title: "Lixta Network — Brand Art",
//     meta: "JFIF · High Res",
//     url: "https://erzeardsiwrvbavennox.supabase.co/storage/v1/object/public/images/theart.jfif",
//   },
//   {
//     title: "Home for Builders — Ecosystem",
//     meta: "PNG · High Res",
//     url: "https://erzeardsiwrvbavennox.supabase.co/storage/v1/object/public/images/homeforbuilders.png",
//   },
//   {
//     title: "Game Dev Studio — Artwork",
//     meta: "PNG · High Res",
//     url: "https://erzeardsiwrvbavennox.supabase.co/storage/v1/object/public/images/gamedevartpiece.png",
//   },
// ];

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      if (typeof window !== "undefined" && navigator?.clipboard?.writeText) {
        await navigator.clipboard.writeText(text);
      } else {
        const textArea = document.createElement("textarea");
        textArea.value = text;
        textArea.style.position = "fixed";
        textArea.style.left = "-999999px";
        textArea.style.top = "-999999px";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand("copy");
        textArea.remove();
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text:", err);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className="inline-flex items-center gap-1 text-[11px] text-neutral-500 hover:text-neutral-200 transition-colors"
    >
      {copied ? (
        <>
          <Check className="w-3 h-3 text-emerald-400" />
          <span className="text-emerald-400">copied</span>
        </>
      ) : (
        <>
          <Copy className="w-3 h-3" />
          <span>copy</span>
        </>
      )}
    </button>
  );
}

const handleDownload = async (url: string, filename: string) => {
  try {
    const response = await fetch(url);
    const blob = await response.blob();
    const blobUrl = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = blobUrl;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    a.remove();
    window.URL.revokeObjectURL(blobUrl);
  } catch (err) {
    console.error("Failed to download asset directly:", err);
    window.open(url, "_blank");
  }
};

export default function PressKitPage() {
  return (
    <main className="min-h-screen w-full max-w-4xl mx-auto px-4 sm:px-8 py-4 sm:py-6 font-sans text-neutral-300">
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-100 font-sans">
          Press Kit
        </h1>
        <p className="mt-2 text-sm text-neutral-500 max-w-md">
          official bios, photos, and brand assets.
        </p>
      </motion.div>

      <section className="mb-16">
        <h2 className="text-xs tracking-wider text-neutral-500 uppercase mb-6 pb-2 border-b border-neutral-800/80">
          Bios
        </h2>
        <div className="space-y-8">
          {BIOS.map((bio) => (
            <div key={bio.title} className="group">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-neutral-400">
                  {bio.title}{" "}
                  <span className="text-neutral-600">({bio.words})</span>
                </span>
                <CopyButton text={bio.text} />
              </div>
              <p className="text-sm text-neutral-400 leading-relaxed font-sans group-hover:text-neutral-300 transition-colors">
                {bio.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-xs tracking-wider text-neutral-500 uppercase mb-6 pb-2 border-b border-neutral-800/80">
          Assets
        </h2>

        <div className="mb-10">
          <p className="text-xs text-neutral-400 mb-4 font-semibold">Photos</p>
          <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 gap-6">
            {PHOTOS.map((asset) => (
              <div
                key={asset.title}
                className="bg-neutral-900/60 border border-neutral-800 overflow-hidden flex flex-col"
              >
                <div className="p-8 flex items-center justify-center h-32">
                  <div className="relative w-24 h-24">
                    <Image
                      src={asset.url}
                      alt={asset.title}
                      fill
                      className="object-contain"
                      sizes="112px"
                    />
                  </div>
                </div>

                <div className="p-4 flex flex-col justify-between flex-1 space-y-1 bg-neutral-900/40">
                  <div>
                    <h4 className="text-sm font-medium text-neutral-200">{asset.title}</h4>
                    <p className="text-xs text-neutral-400 mt-1">{asset.meta}</p>
                  </div>
                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={() =>
                        handleDownload(
                          asset.url,
                          `${asset.title.toLowerCase().replace(/[^a-z0-9]/g, "-")}.png`
                        )
                      }
                      className="inline-flex items-center gap-1 text-xs text-blue-400 hover:text-blue-300 hover:underline transition-colors cursor-pointer"
                    >
                      Download ↓
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* <div>
          <p className="text-xs text-neutral-400 mb-4 font-semibold">Company Logos & Brand Art</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {BRAND_LOGOS.map((asset) => (
              <div
                key={asset.title}
                className="bg-neutral-900/60 border border-neutral-800 rounded overflow-hidden flex flex-col"
              >
                <div className="p-8 bg-white flex items-center justify-center border-b border-neutral-200 h-32">
                  <div className="relative w-28 h-28">
                    <Image
                      src={asset.url}
                      alt={asset.title}
                      fill
                      className="object-contain"
                      sizes="112px"
                    />
                  </div>
                </div>

                <div className="p-4 flex flex-col justify-between flex-1 space-y-1 bg-neutral-900/40">
                  <div>
                    <h4 className="text-sm font-medium text-neutral-200">{asset.title}</h4>
                    <p className="text-xs font-mono text-neutral-400 mt-1">{asset.meta}</p>
                  </div>
                  <div className="pt-3">
                    <a
                      href={asset.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      download
                      className="inline-flex items-center gap-1 text-xs font-mono text-blue-400 hover:text-blue-300 hover:underline transition-colors"
                    >
                      download ↓
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div> */}
      </section>

      <section className="pt-6 border-t border-neutral-800/80">
        <h2 className="text-xs tracking-wider text-neutral-500 uppercase mb-3">
          Press Contact
        </h2>
        <div className="text-xs text-neutral-400 space-y-1">
          <p>
            • office email:{" "}
            <a
              href="mailto:haider@lixtanetwork.com"
              className="text-neutral-200 hover:text-white underline underline-offset-4 decoration-neutral-700 hover:decoration-neutral-400 transition-colors"
            >
              haider@lixtanetwork.com
            </a>
          </p>

          <p>
            • email:{" "}
            <a
              href="mailto:haiderkhursheedk@gmail.com"
              className="text-neutral-200 hover:text-white underline underline-offset-4 decoration-neutral-700 hover:decoration-neutral-400 transition-colors"
            >
              haiderkhursheedk@gmail.com
            </a>


          </p>
          <p className="text-neutral-600">Responds within 24 hours (if im alive).</p>
          <p className="text-neutral-600">Interview requests, Quotes, Speaking opportunities.</p>
        </div>
      </section>
    </main>
  );
}


