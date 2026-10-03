"use client";

import React from "react";
import Image from "next/image";
import { LinkPreview } from "@/components/ui/link-preview";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function Hero() {
  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={itemVariants} className="mt-6 mb-4">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-neutral-900 dark:text-neutral-100 font-sans">
          Haider Khursheed
        </h1>
        <p className="mt-2 text-base sm:text-lg text-neutral-500 dark:text-neutral-400">
          the curious child
        </p>
      </motion.div>

      <motion.div
        variants={itemVariants}
        className="relative w-full overflow-hidden"
      >
        <Image
          width={800}
          height={160}
          priority
          sizes="(max-width: 768px) 100vw, 800px"
          className="w-full h-60 object-cover"
          src="https://erzeardsiwrvbavennox.supabase.co/storage/v1/object/public/images/theart.jfif"
          alt="the art of dreaming delusional"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <p className="absolute -bottom-2 right-0 text-base sm:text-lg text-white/40 drop-shadow-sm">
          the art of dreaming delusionally big
        </p>
      </motion.div>

      <div className="space-y-4 text-base sm:text-lg leading-relaxed text-neutral-300 my-8 font-sans">
        <motion.h3
          variants={itemVariants}
          className="text-xs font-light italic w-fit pt-2 text-neutral-500"
        >
          - the beginning.
        </motion.h3>

        <motion.p variants={itemVariants}>
          Hii, I&apos;m Haider Khursheed, a builder and founder who turns wild ideas into fast shipping companies.
        </motion.p>

        <motion.p variants={itemVariants}>

        </motion.p>

        <motion.div
          variants={itemVariants}
          className="relative flex flex-col sm:flex-row items-center gap-4 sm:gap-6 overflow-hidden"
        >
          <video
            width={800}
            height={160}
            className="w-32 h-32 object-cover shrink-0 lg:block md:block sm:hidden"
            autoPlay
            loop
            muted
            playsInline
            src="https://erzeardsiwrvbavennox.supabase.co/storage/v1/object/public/images/thebeginning.mp4"
          />
          <p className="relative sm:ml-0 lg:ml-2 md:ml-2 right-0 text-base sm:text-lg text-neutral-300 drop-shadow-sm">
            I&apos;ve been obsessed with how things work since I was a {" "}
            <LinkPreview
              imageSrc="https://erzeardsiwrvbavennox.supabase.co/storage/v1/object/public/images/robotsatiit.png"
              caption="IIT Bombay, for Techfest (Robowars)"
              className="font-bold text-neutral-900 dark:text-neutral-100 basic-link"
            >
              kid.
            </LinkPreview>{" "}
            At 11, I recorded my first video (it was horrible, and I'm still proud of it).
            I&apos;ve been obsessed with how things work since I was a kid. I was the one who kept asking "why" and "how." While others memorized answers, I was taking apart machines and building robots. I wasn't the cool kid. I was average on paper, but always curious.


          </p>
        </motion.div>

        <motion.p variants={itemVariants}>

          In 2016, I built my first game inside a mobile app that let you make games within a game. It wasn't Unreal Engine, but it was insanely cool for an 11-year-old. In 2021, I enrolled in a computer engineering diploma and fell into game development, founded a

          {" "}
          <LinkPreview
            imageSrc="https://erzeardsiwrvbavennox.supabase.co/storage/v1/object/public/images/gamedevartpiece.png"
            caption="Game development studio. scaled games for global clients, acquired by publisher in 2024."
            className="font-bold text-neutral-100 basic-link"
          >
            game dev studio,
          </LinkPreview>{" "}

          building games for clients around the world.

        </motion.p>

        <motion.div
          variants={itemVariants}
          className="relative flex flex-col sm:flex-row items-center gap-4 sm:gap-6 overflow-hidden"
        >
          <p>
            In July 2024, I met{" "}
            <LinkPreview
              url="https://www.linkedin.com/in/abdullahys24/"
              imageSrc="https://erzeardsiwrvbavennox.supabase.co/storage/v1/object/public/images/thefirstconversation.jpg"
              caption="The first conversation."
              className="font-bold text-neutral-100 basic-link"
            >
              Abdullah
            </LinkPreview>{" "}
            on LinkedIn. We cofounded{" "}
            <LinkPreview
              url="https://lixtanetwork.com/"
              imageSrc="https://erzeardsiwrvbavennox.supabase.co/storage/v1/object/public/images/lixtanetworkcofounders.jpg"
              caption="Haider Khursheed and Abdullah Yasin Shaikh, Cofounders of Lixta Network."
              className="font-bold text-neutral-100 basic-link"
            >
              Lixta Network,
            </LinkPreview>{" "}
            a studio that builds brands, websites and apps for tomorrow's companies, turning manual work into AI-first software. Two years in, we worked with multiple clients building great products and now we&apos;re pushing into enterprise solutions.{" "}
          </p>
          <video
            width={800}
            height={160}
            className="w-32 h-32 object-cover shrink-0 lg:block md:block sm:hidden sm:ml-0 lg:ml-2 md:ml-2"
            autoPlay
            loop
            muted
            playsInline
            src="https://erzeardsiwrvbavennox.supabase.co/storage/v1/object/public/images/firstnova.mp4"
          />
        </motion.div>

        <motion.p variants={itemVariants}>


          In 2025, I ran into a hiring problem. Everyone was polishing resumes instead of showing what they built. So I cofounded{" "}
          <LinkPreview
            url="https://www.komunity.dev/"
            imageSrc="https://erzeardsiwrvbavennox.supabase.co/storage/v1/object/public/images/@20journey1.jpg"
            caption="Komunity, onchain hiring platform based on proof of work."
            className="font-bold text-neutral-900 dark:text-neutral-100 basic-link"
          >
            Komunity
          </LinkPreview>{" "}
          , an onchain hiring platform where your work becomes your identity. We raised a pre-seed round, reached 1,000 users and made some revenue. By April 2026, I realized we had failed on distribution and product-market fit. We scaled before nailing early adopters, and we shut it down. I learned more from that failure than from any win.
        </motion.p>
        <motion.div
          variants={itemVariants}
          className="relative flex flex-col sm:flex-row items-center gap-4 sm:gap-6 overflow-hidden"
        >
          <video
            width={800}
            height={160}
            className="w-32 h-32 object-cover shrink-0 lg:block md:block sm:hidden"
            autoPlay
            loop
            muted
            playsInline
            src="https://erzeardsiwrvbavennox.supabase.co/storage/v1/object/public/images/supanova.mp4"
          />
          <p>
            Today, my main focused is on scaling{" "}
            <LinkPreview
              url="https://www.lixtanetwork.com/"
              imageSrc="https://erzeardsiwrvbavennox.supabase.co/storage/v1/object/public/images/@2026-lixtanetwork.jpg"
              caption="Lixta Network. creative studio"
              className="font-bold text-neutral-900 dark:text-neutral-100 basic-link"
            >
              Lixta Network
            </LinkPreview>{" "}
            at enterprise level, becoming more of a engineering and product led company.
            On the side, I am also building Home for Builders (Startup Community).
            I don&apos;t know where this ends. I just know I love building things, and I&apos;ll keep doing it. That&apos;s the whole story.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
}