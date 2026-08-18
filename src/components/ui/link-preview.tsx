"use client";

import React, { createContext, useContext, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { encode } from "qss";
import { cn } from "@/lib/utils";

interface PreviewData {
  url: string;
  imageSrc: string;
  caption?: string;
  tag?: string;
}

interface PreviewContextType {
  activePreview: PreviewData | null;
  setActivePreview: (preview: PreviewData | null) => void;
}

const PreviewContext = createContext<PreviewContextType>({
  activePreview: null,
  setActivePreview: () => { },
});

export const PreviewProvider = ({ children }: { children: React.ReactNode }) => {
  const [activePreview, setActivePreview] = useState<PreviewData | null>(null);

  return (
    <PreviewContext.Provider value={{ activePreview, setActivePreview }}>
      {children}
      <RightSidePreviewDock />
    </PreviewContext.Provider>
  );
};

export const usePreview = () => useContext(PreviewContext);

export function RightSidePreviewDock() {
  const { activePreview } = usePreview();

  return (
    <AnimatePresence>
      {activePreview && (
        <motion.aside
          key={activePreview.url + (activePreview.caption || "")}
          initial={{ x: "100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: "100%", opacity: 0 }}
          transition={{
            type: "spring",
            damping: 30,
            stiffness: 280,
          }}
          className="fixed inset-y-0 right-0 z-50 hidden lg:flex w-[250px] xl:w-[320px] flex-col justify-center px-6 xl:px-8 py-10 bg-[#0c0c0c]/98 border-l border-neutral-800 shadow-[-25px_0_60px_rgba(0,0,0,0.85)] backdrop-blur-2xl pointer-events-auto"
        >
          <div className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-blue-500/40 to-transparent" />

          <a
            href={activePreview.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group block overflow-hidden p-3 shadow-2xl transition-all duration-300"
          >
            <div className="relative aspect-[3/4] w-full overflow-hidden  bg-neutral-950">
              <img
                src={activePreview.imageSrc}
                alt={activePreview.caption || "Link preview"}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />

            </div>

            {activePreview.caption && (
              <div className="pt-3 pb-1 px-1.5">
                <p className="font-sans text-sm leading-relaxed text-neutral-300 group-hover:text-white transition-colors">
                  {activePreview.caption}
                </p>
              </div>
            )}
          </a>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}

export type LinkPreviewProps = {
  children: React.ReactNode;
  url: string;
  className?: string;
  imageSrc?: string;
  caption?: string;
  width?: number;
  height?: number;
  isStatic?: boolean;
};

export const LinkPreview = ({
  children,
  url,
  className,
  imageSrc,
  caption,
  width = 250,
  height = 350,
}: LinkPreviewProps) => {
  const { setActivePreview } = usePreview();

  let computedSrc = imageSrc || url;
  if (!imageSrc && !url.match(/\.(jpeg|jpg|gif|png|webp|svg|jfif)(\?.*)?$/i)) {
    const params = encode({
      url,
      screenshot: true,
      meta: false,
      embed: "screenshot.url",
      colorScheme: "dark",
      "viewport.isMobile": true,
      "viewport.deviceScaleFactor": 1,
      "viewport.width": width * 2,
      "viewport.height": height * 2,
    });
    computedSrc = `https://api.microlink.io/?${params}`;
  }

  const handleMouseEnter = () => {
    if (typeof window !== "undefined" && window.innerWidth >= 1024) {
      setActivePreview({
        url,
        imageSrc: computedSrc,
        caption,
      });
    }
  };

  const handleMouseLeave = () => {
    setActivePreview(null);
  };

  return (
    <a
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={cn("text-neutral-900 dark:text-neutral-100 font-bold basic-link inline-block", className)}
      href={url}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
};