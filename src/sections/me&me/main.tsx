"use client";

import React from "react";
import HeaderControls from "@/components/portfolio/HeaderControls";
import ExperienceGrid from "@/components/portfolio/ExperienceGrid";
import Hero from "@/components/portfolio/Hero";
import { PreviewProvider } from "@/components/ui/link-preview";
import { motion } from "framer-motion";
import OnStage from "@/components/portfolio/OnStageTable";
import WritingTable from "@/components/portfolio/WritingTable";
import type { WritingArticle } from "@/lib/writing";
import FindMe from "@/components/portfolio/FindMeTable";

interface LandingProps {
  writingArticles: WritingArticle[];
}

export default function Landing({ writingArticles }: LandingProps) {
  return (
    <PreviewProvider>
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="min-h-screen w-full max-w-4xl mx-auto px-4 sm:px-8 py-4 text-neutral-800 dark:text-neutral-200 transition-colors duration-300 font-sans"
      >

        <HeaderControls />

        <Hero />

        <ExperienceGrid />

        {/* <ExperienceTable /> */}

        {/* <ShippingTable /> */}

        <OnStage />

        <WritingTable articles={writingArticles} />

        <FindMe />

        {/* <PhotoShelf /> */}

      </motion.main>
    </PreviewProvider>
  );
}
