"use client";

import React, { useState, useEffect, useRef } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { motion } from "framer-motion";

// interface HeaderControlsProps {
//   onOpenCmd?: () => void;
//   onOpenTerm?: () => void;
// }

const AUDIO_SRC = "https://erzeardsiwrvbavennox.supabase.co/storage/v1/object/public/images/canyouhearthemusic.mp3";

export default function HeaderControls() {
  const [soundEnabled, setSoundEnabled] = useState<boolean>(false);
  const [age, setAge] = useState<string>("");
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio(AUDIO_SRC);
    const audio = audioRef.current;

    const handleEnded = () => {
      setSoundEnabled(false);
    };

    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.removeEventListener("ended", handleEnded);
      audio.pause();
    };
  }, []);

  useEffect(() => {
    const BIRTH = new Date(Date.UTC(2005, 3, 30, 0, 0, 0)).getTime();
    const YEAR_MS = 365.25 * 24 * 60 * 60 * 1000;
    const updateAge = () => {
      const years = (Date.now() - BIRTH) / YEAR_MS;
      setAge(years.toFixed(9));
    };
    updateAge();
    const ageInterval = setInterval(updateAge, 50);

    return () => {
      clearInterval(ageInterval);
    };
  }, []);

  const toggleSound = () => {
    if (!audioRef.current) return;

    if (soundEnabled) {
      audioRef.current.pause();
      setSoundEnabled(false);
    } else {
      audioRef.current.play().then(() => {
        setSoundEnabled(true);
      }).catch((err) => {
        console.error("Audio playback error:", err);
      });
    }
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="flex items-center justify-between gap-4 mb-6 font-mono text-xs text-neutral-500 dark:text-neutral-400"
    >
      <div className="flex items-center gap-3">
        <span className="hidden sm:inline-flex items-center gap-1.5 .t text-[11px] text-neutral-500 dark:text-neutral-400 tabular-nums">
          <span className="text-neutral-400 dark:text-neutral-600">been here from</span>
          <span className="text-neutral-700 dark:text-neutral-300 tracking-tight">
            {age ? `${age} yrs` : "—"}
          </span>
        </span>
      </div>

      <div className="flex items-center gap-1.5">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={toggleSound}
          title={soundEnabled ? "Mute audio" : "Enable sound"}
          className="p-1.5 rounded hover:bg-neutral-100 dark:hover:bg-neutral-800/60 transition-colors text-neutral-600 dark:text-neutral-300"
        >
          {soundEnabled ? <Volume2 className="w-3.5 h-3.5 text-emerald-500" /> : <VolumeX className="w-3.5 h-3.5 text-neutral-400" />}
        </motion.button>
      </div>
    </motion.header>
  );
}



