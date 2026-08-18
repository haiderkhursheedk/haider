"use client";

import React, { useState, useEffect } from "react";
import * as HoverCardPrimitive from "@radix-ui/react-hover-card";
import { AnimatePresence, motion, useMotionValue, useSpring } from "framer-motion";
import { encode } from "qss";
import { cn } from "@/lib/utils";

export const PreviewProvider = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export const usePreview = () => ({
  activePreview: null,
  setActivePreview: () => { },
});

export type LinkPreviewProps = {
  children: React.ReactNode;
  url?: string;
  className?: string;
  imageSrc?: string;
  caption?: string;
  width?: number;
  height?: number;
  quality?: number;
  layout?: string;
  isStatic?: boolean;
};

export const LinkPreview = ({
  children,
  url,
  className,
  imageSrc,
  caption,
  width = 220,
  height = 135,
  isStatic = false,
}: LinkPreviewProps) => {
  let computedSrc = imageSrc || url;
  if (!isStatic && !imageSrc && url && !url.match(/\.(jpeg|jpg|gif|png|webp|svg|jfif)(\?.*)?$/i)) {
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

  const [isOpen, setOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const springConfig = { stiffness: 100, damping: 15 };
  const x = useMotionValue(0);
  const translateX = useSpring(x, springConfig);

  const handleMouseMove = (event: React.MouseEvent<HTMLAnchorElement>) => {
    const targetRect = event.currentTarget.getBoundingClientRect();
    const eventOffsetX = event.clientX - targetRect.left;
    const offsetFromCenter = eventOffsetX - targetRect.width / 2;
    x.set(offsetFromCenter);
  };

  return (
    <>
      {isMounted ? (
        <HoverCardPrimitive.Root
          openDelay={50}
          closeDelay={100}
          onOpenChange={(open) => {
            setOpen(open);
          }}
        >
          <HoverCardPrimitive.Trigger
            onMouseMove={handleMouseMove}
            className={cn("text-neutral-900 dark:text-neutral-100 font-bold basic-link inline-block", className)}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {children}
          </HoverCardPrimitive.Trigger>

          <HoverCardPrimitive.Portal>
            <HoverCardPrimitive.Content
              className="[transform-origin:var(--radix-hover-card-content-transform-origin)] z-[9999] pointer-events-none"
              side="top"
              align="center"
              sideOffset={10}
            >
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 15, scale: 0.8 }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      scale: 1,
                      transition: {
                        type: "spring",
                        stiffness: 260,
                        damping: 20,
                      },
                    }}
                    exit={{ opacity: 0, y: 15, scale: 0.8 }}
                    className="shadow-2xl rounded-xl"
                    style={{
                      x: translateX,
                    }}
                  >
                    <a
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block p-1.5 bg-[#0c0c0c]/95 border border-neutral-800 rounded-xl hover:border-neutral-700 transition-colors shadow-2xl backdrop-blur-xl overflow-hidden max-w-xs pointer-events-auto"
                    >
                      <div className="overflow-hidden rounded-lg relative aspect-[16/10] w-[220px] bg-neutral-950">
                        <img
                          src={computedSrc}
                          alt={caption || "Link preview"}
                          className="h-full w-full object-cover rounded-lg"
                        />
                      </div>
                      {caption && (
                        <div className="pt-2 pb-1 px-1.5 max-w-[220px]">
                          <p className="font-sans text-xs leading-relaxed text-neutral-300">
                            {caption}
                          </p>
                        </div>
                      )}
                    </a>
                  </motion.div>
                )}
              </AnimatePresence>
            </HoverCardPrimitive.Content>
          </HoverCardPrimitive.Portal>
        </HoverCardPrimitive.Root>
      ) : (
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className={cn("text-neutral-900 dark:text-neutral-100 font-bold basic-link inline-block", className)}
        >
          {children}
        </a>
      )}
    </>
  );
};