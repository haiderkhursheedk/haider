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
          Hii, I&apos;m Haider Khursheed. I&apos;m a builder and founder who turns wild ideas into fast shipping companies.
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
              url="https://erzeardsiwrvbavennox.supabase.co/storage/v1/object/public/images/robotsatiit.png"
              imageSrc="https://erzeardsiwrvbavennox.supabase.co/storage/v1/object/public/images/robotsatiit.png"
              caption="IIT Bombay, for Techfest (Robowars)"
              className="font-bold text-neutral-900 dark:text-neutral-100 basic-link"
            >
              kid
            </LinkPreview>
            . At 11, I recorded my first video, it was horrible, but I&apos;m still proud of it.
            I was the kid who kept asking "why" and "how." While others memorized answers,
            I was taking apart machines and building robots.
            I wasn't the cool kid.
            I was average on paper.
            But I was always curious.
          </p>
        </motion.div>

        <motion.p variants={itemVariants}>
          In 2021, I enrolled in a diploma program for computer engineering and fell into game development. I ended up founding a
          {" "}
          <LinkPreview
            url="https://erzeardsiwrvbavennox.supabase.co/storage/v1/object/public/images/gamedevartpiece.png"
            imageSrc="https://erzeardsiwrvbavennox.supabase.co/storage/v1/object/public/images/gamedevartpiece.png"
            caption="Game development studio. scaled games for global clients, acquired by publisher in 2024."
            className="font-bold text-neutral-100 basic-link"
          >
            game dev studio
          </LinkPreview>{" "}
          building games for clients around the world, and scaling it fast. Then things went bad. Really bad. By mid-2024, the studio got acquired by a game publisher. The full circle moment, I built my first game back in 2016 inside a mobile app that let you build games within a game. Not exactly Unreal Engine, but it was insanely cool for an 11-year-old        </motion.p>

        <motion.div
          variants={itemVariants}
          className="relative flex flex-col sm:flex-row items-center gap-4 sm:gap-6 overflow-hidden"
        >
          <p>
            In August 2024, I met{" "}
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
              caption="Aeomi. frontier AI research lab building intelligence with persistent memory."
              className="font-bold text-neutral-100 basic-link"
            >
              Lixta Network
            </LinkPreview>{" "}
            , a creative studio that builds brands, websites, and apps for tomorrow&apos;s companies, turning manual work into AI-first software. Two years in, we're one of the fastest growing creative studios out of India and now we're pushing into enterprise solutions.{" "}
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
          In 2025, I ran into a hiring problem. Everyone was polishing resumes instead of showing what they built. So I cofounded {" "}
          <LinkPreview
            url="https://www.komunity.dev/"
            imageSrc="https://erzeardsiwrvbavennox.supabase.co/storage/v1/object/public/images/@20journey1.jpg"
            caption="Komunity, onchain hiring platform based on proof of work."
            className="font-bold text-neutral-900 dark:text-neutral-100 basic-link"
          >
            Komunity
          </LinkPreview>{" "}
          , an onchain hiring platform where your work becomes your identity. We raised a pre-seed round at a ₹12.9M pre-money valuation, hit 1,000 users, and made some revenue. But by April 2026, I realized we'd failed on distribution and product-market fit. We spent a year building, got traction, then made the classic mistake of scaling before nailing early adopters. We shut it down. I learned more from that failure than from any win.        </motion.p>

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
            Currently, I&apos;m focused on scaling{" "}
            <LinkPreview
              url="https://www.lixtanetwork.com/"
              imageSrc="https://erzeardsiwrvbavennox.supabase.co/storage/v1/object/public/images/@2026-lixtanetwork.jpg"
              caption="Lixta Network. creative studio"
              className="font-bold text-neutral-900 dark:text-neutral-100 basic-link"
            >
              Lixta Network
            </LinkPreview>{" "}
            at enterprise level, becoming more of a engineering and product led company.
            On the side, I am also building Home for Builders (Startup school), Aeomi (AI Research lab).
            I don&apos;t know where this ends. I don&apos;t know if we&apos;ll make it. I just know I love building things, and I&apos;ll do it forever. I hate jobs. I love startups. That&apos;s the whole story.
          </p>
        </motion.div>

        {/* <motion.div
          variants={itemVariants}
          className="relative flex flex-col sm:flex-row items-center gap-4 sm:gap-6 overflow-hidden"
        >
          <video
            width={800}
            height={160}
            className="w-40 h-40 object-cover shrink-0 lg:block md:block sm:hidden"
            autoPlay
            loop
            muted
            playsInline
            src="https://erzeardsiwrvbavennox.supabase.co/storage/v1/object/public/images/thebeginning.mp4"
          />
          <p>
            now we are trying to holding umberlla at{" "}
            <LinkPreview
              url="https://www.lixtalabs.com/"
              imageSrc="https://erzeardsiwrvbavennox.supabase.co/storage/v1/object/public/images/theart.jfif"
              caption="Lixta Labs holding co. building ecosystem startups and high-impact technology."
              className="font-bold text-neutral-900 dark:text-neutral-100 basic-link"
            >
              lixta labs
            </LinkPreview>
            , building ecosystem startups like{" "}
            <LinkPreview
              url="https://www.lixtanetwork.com/"
              imageSrc="https://erzeardsiwrvbavennox.supabase.co/storage/v1/object/public/images/iitbombay.png"
              caption="Lixta Network. venture studio co-founded with Abdullah."
              className="font-bold text-neutral-900 dark:text-neutral-100 basic-link"
            >
              lixta network,
            </LinkPreview>{" "}
            {" "}
            <LinkPreview
              url="https://www.komunity.dev/"
              imageSrc="https://erzeardsiwrvbavennox.supabase.co/storage/v1/object/public/images/gamedevartpiece.png"
              caption="Komunity.dev. developer and hacker community for founders."
              className="font-bold text-neutral-900 dark:text-neutral-100 basic-link"
            >
              komunity,
            </LinkPreview>{" "}
            <LinkPreview
              url="https://www.komunity.dev/"
              imageSrc="https://erzeardsiwrvbavennox.supabase.co/storage/v1/object/public/images/gamedevartpiece.png"
              caption="Komunity.dev. developer and hacker community for founders."
              className="font-bold text-neutral-900 dark:text-neutral-100 basic-link"
            >
              aeomi
            </LinkPreview>{" "}
            and{" "}
            <LinkPreview
              url="https://www.komunity.dev/"
              imageSrc="https://erzeardsiwrvbavennox.supabase.co/storage/v1/object/public/images/gamedevartpiece.png"
              caption="Komunity.dev. developer and hacker community for founders."
              className="font-bold text-neutral-900 dark:text-neutral-100 basic-link"
            >
              home for builders
            </LinkPreview>
            .
            i don't know where the journey takes me, i don't know if we are gonna make it. i just love what i do, and i will do it forever, i just love it, it's my life, and i love building startups and products.
          </p>
        </motion.div> */}

      </div>
    </motion.section>
  );
}