"use client";

import React, { useState } from "react";
import { Sparkles } from "lucide-react";

export default function PetMenagerie() {
  const [catBubble, setCatBubble] = useState<string | null>("zzz...");
  const [dogBubble, setDogBubble] = useState<string | null>("woof!");
  const [birdBubble, setBirdBubble] = useState<string | null>("chirp");
  const [treatCount, setTreatCount] = useState(12);

  const feedPets = () => {
    setTreatCount((c) => c + 3);
    setCatBubble("yummm! 🐟");
    setDogBubble("tail wag! 🦴");
    setBirdBubble("peck peck! 🌾");
    setTimeout(() => {
      setCatBubble("purrr ~");
      setDogBubble("happy dog!");
      setBirdBubble("tweet ~");
    }, 2500);
  };

  return (
    <div className="py-8 my-10 border-t border-neutral-200 dark:border-neutral-800 text-center font-mono">
      {/* Title & Hint */}
      <p className="text-xs text-neutral-500 mb-4">
        the office menagerie. <b>tap</b> pets or feed treat treats — fish for cat, bone for dog, seed for bird.
      </p>

      {/* Menagerie Pets Container */}
      <div className="flex items-center justify-center gap-6 sm:gap-10 my-4">
        {/* Cat Pet */}
        <button
          onClick={() => {
            setCatBubble("meow! ❤️");
            setTimeout(() => setCatBubble("purrr ~"), 2000);
          }}
          className="group relative flex flex-col items-center focus:outline-none"
        >
          {catBubble && (
            <span className="absolute -top-7 px-2 py-0.5 text-[10px] rounded-md bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-900 shadow font-sans animate-bounce">
              {catBubble}
            </span>
          )}
          <svg className="w-10 h-10 text-neutral-700 dark:text-neutral-300 group-hover:scale-110 transition-transform" viewBox="0 0 40 32" fill="currentColor">
            <path d="M10.3 9 L8.6 2.8 L13.6 5 C15.6 4.3 18.4 4.3 20.4 5 L25.4 2.8 L23.7 9 C24.6 10.8 24.9 13 24.2 15 C26.3 17.2 27.4 20.4 27.3 23.6 C27.3 25.8 26 27.6 23.5 28.3 C19.5 29.3 14.5 29.3 11.5 28.2 C8.9 27 7.8 24 8.2 21 C8.5 18.5 9.3 16.4 10.6 14.9 C9.6 12.9 9.7 10.9 10.3 9 Z" />
            <circle cx="13.9" cy="11.6" r="1.8" fill="var(--background, #000)" />
            <circle cx="20.1" cy="11.6" r="1.8" fill="var(--background, #000)" />
          </svg>
          <span className="text-[10px] text-neutral-400 mt-1">cat</span>
        </button>

        {/* Dog Pet */}
        <button
          onClick={() => {
            setDogBubble("woof woof! 🐶");
            setTimeout(() => setDogBubble("wag tail!"), 2000);
          }}
          className="group relative flex flex-col items-center focus:outline-none"
        >
          {dogBubble && (
            <span className="absolute -top-7 px-2 py-0.5 text-[10px] rounded-md bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-900 shadow font-sans animate-bounce">
              {dogBubble}
            </span>
          )}
          <svg className="w-10 h-10 text-neutral-700 dark:text-neutral-300 group-hover:scale-110 transition-transform" viewBox="0 0 40 38" fill="currentColor">
            <circle cx="20" cy="14" r="10" />
            <path d="M11 8 C6 9 6 18 10 21 C13 18 13.5 11 11 8 Z" />
            <path d="M29 8 C34 9 34 18 30 21 C27 18 26.5 11 29 8 Z" />
            <circle cx="15" cy="12" r="1.8" fill="var(--background, #000)" />
            <circle cx="25" cy="12" r="1.8" fill="var(--background, #000)" />
          </svg>
          <span className="text-[10px] text-neutral-400 mt-1">dog</span>
        </button>

        {/* Bird Pet */}
        <button
          onClick={() => {
            setBirdBubble("chirp chirp! 🐦");
            setTimeout(() => setBirdBubble("tweet ~"), 2000);
          }}
          className="group relative flex flex-col items-center focus:outline-none"
        >
          {birdBubble && (
            <span className="absolute -top-7 px-2 py-0.5 text-[10px] rounded-md bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-900 shadow font-sans animate-bounce">
              {birdBubble}
            </span>
          )}
          <svg className="w-9 h-9 text-neutral-700 dark:text-neutral-300 group-hover:scale-110 transition-transform" viewBox="0 0 34 36" fill="currentColor">
            <ellipse cx="16" cy="20" rx="10" ry="10" />
            <circle cx="24" cy="11" r="6" />
            <polygon points="29.5,11 34,12 29.5,13.6" fill="#f59e0b" />
            <circle cx="26" cy="10" r="1.5" fill="var(--background, #000)" />
          </svg>
          <span className="text-[10px] text-neutral-400 mt-1">bird</span>
        </button>

        {/* Feed Button */}
        <button
          onClick={feedPets}
          title="Feed treats to pets"
          className="flex items-center gap-1 px-3 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-600 dark:text-amber-400 text-xs hover:bg-amber-500/20 transition-colors"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>Feed ({treatCount})</span>
        </button>
      </div>
    </div>
  );
}
