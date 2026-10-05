"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Copy, Check } from "lucide-react";

const BIOS: { title: string; paragraphs: string[] }[] = [
  {
    title: "Short Bio",
    paragraphs: [
      "Haider Khursheed is the Founder & Chairman of Lixta Network, a studio that builds brands, websites and apps and turns manual work into AI-first software. He founded it with Abdullah Yasin Shaikh. He co-founded a small game development studio during his diploma, exited and closed in 2023, co-founded Komunity, and runs Home for Builders, a community for people who build.",
    ],
  },
  {
    title: "Medium Bio",
    paragraphs: [
      "Haider Khursheed is a builder and founder based in India. He has been building since age 11, starting with robotics, videos and games.",
      "In 2021, during his computer engineering diploma, he co-founded a small game development studio. He exited and closed it in 2023. In July 2024 he founded Lixta Network with Abdullah Yasin Shaikh, a studio that builds brands, websites and apps and turns manual work into AI-first software. He is its Founder & Chairman.",
      "In 2025 he co-founded Komunity, an onchain hiring platform where work serves as identity. It received early backing from an angel investor and reached 1,000+ users before shutting down in April 2026.",
      "Today he is focused on Lixta Network's move into enterprise engineering and product work, and he runs Home for Builders, a community for people who build real things. He writes about shipping, distribution and building in public at haiderkhursheed.com.",
    ],
  },
  {
    title: "Long Bio",
    paragraphs: [
      "Haider Khursheed is a builder and founder based in India, with a strong bias toward shipping. He has been building on the internet for about ten years. It began at age 11 with taking apart machines, building small robots and recording videos, and continued with his first mobile game.",
      "In 2021, while pursuing a diploma in computer engineering, he co-founded a small game development studio. He exited and closed it in 2023. In 2022 he also interned at Ihaan Technologies, working on Android apps alongside experienced developers.",
      "In July 2024 he founded Lixta Network with Abdullah Yasin Shaikh. It is a studio that builds brands, websites and apps and turns manual work into AI-first software. Haider is its Founder & Chairman.",
      "In 2025, he co-founded Komunity, an onchain platform where a person's work serves as their identity. It received early backing from an angel investor and reached 1,000+ users before shutting down in April 2026.",
      "He also runs Home for Builders, a community for developers, designers, founders and creators who want to build real things, whether in AI, apps, games, hardware or media.",
      "His approach is simple: build in public, ship early, and measure what people actually use. He writes about shipping, distribution and building in public at haiderkhursheed.com, and he cares about real work over noise.",
    ],
  },
];

const countWords = (paragraphs: string[]) =>
  paragraphs.join(" ").trim().split(/\s+/).length;

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
                  <span className="text-neutral-600">
                    ({countWords(bio.paragraphs)} words)
                  </span>
                </span>
                <CopyButton text={bio.paragraphs.join("\n\n")} />
              </div>
              <div className="space-y-3 text-sm text-neutral-400 leading-relaxed font-sans group-hover:text-neutral-300 transition-colors">
                {bio.paragraphs.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
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

          {/* <p>
            • email:{" "}
            <a
              href="mailto:haiderkhursheedk@gmail.com"
              className="text-neutral-200 hover:text-white underline underline-offset-4 decoration-neutral-700 hover:decoration-neutral-400 transition-colors"
            >
              haiderkhursheedk@gmail.com
            </a>
          </p> */}
          {/* <p className="text-neutral-600">Responds within 24 hours (if im alive).</p> */}
          <p className="text-neutral-600">Responds within 24 hours.</p>
          <p className="text-neutral-600">Interview requests, Quotes, Speaking opportunities.</p>
        </div>
      </section>
    </main>
  );
}