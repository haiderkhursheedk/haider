"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-4xl mx-auto px-4 sm:px-8 pt-8 pb-12 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white"
    >
      <p className="text-center sm:text-left">
        © Haider Khursheed
      </p>

      <p className="text-center">
        Website by{" "}
        <a
          href="https://www.lixtanetwork.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-2 decoration-neutral-600 hover:text-neutral-100 hover:decoration-neutral-100 transition-colors"
        >
          Lixta Network
        </a>
      </p>
    </motion.footer>
  );
}