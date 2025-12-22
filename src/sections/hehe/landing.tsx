"use client";
import React from "react";
import { LinkPreview } from "@/components/ui/link-preview";
import Image from "next/image";
import Video from "./video"
export default function Hero() {
  return (
    <section className="w-full px-8 py-6 sm:px-8">
      <div className="space-y-4 text-base sm:text-lg text-neutral-500">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 sm:mb-12 mt-4">
          hi i&apos;m haider.
        </h1>

        <Video />

        <div className="flex flex-col">
          <p className="text-neutral-500">
            i&apos;m just a guy that loves creating things for others.
          </p>

          <p className="text-neutral-500 mt-3 sm:mt-4">
            i started my first company at 11 where i build{" "}
            <LinkPreview
              url="https://kurpmqtkgthagnjqmphd.supabase.co/storage/v1/object/public/assets/2011.jpg"
              className="font-bold"
            >
              robots
            </LinkPreview>{" "}
            and{" "}
            <LinkPreview
              url="https://kurpmqtkgthagnjqmphd.supabase.co/storage/v1/object/public/assets/iitbombay.png"
              className="font-bold"
            >
              pitch to iit bombay
            </LinkPreview>
            , was a great journey.
          </p>

          <p className="text-neutral-500 mt-3 sm:mt-4">
            building stuff online turned into business obsession, that make me
            build{" "}
            <LinkPreview
              url="https://kurpmqtkgthagnjqmphd.supabase.co/storage/v1/object/public/assets/2011.jpg"
              className="font-bold"
            >
              startups
            </LinkPreview>{" "}
            later
          </p>

          <p className="text-neutral-500 mt-3 sm:mt-4">
            these days im shipping random stuff and seeing what i want to spend
            more time on. recently{" "}
            <LinkPreview
              url="https://www.lixtanetwork.com/"
              className="font-bold"
            >
              lixta network
            </LinkPreview>
            ,{" "}
            <LinkPreview
              url="https://www.komunity.dev/"
              className="font-bold"
            >
              komunity
            </LinkPreview>{" "}
            and some other{" "}
            <LinkPreview
              url="https://x.com/khaiderksh/status/1987083399295868940?s=20/"
              className="font-bold"
            >
              viral stuff
            </LinkPreview>
            .
          </p>

          <p className="text-neutral-500 mt-3 sm:mt-4">
            in the past, i founding a{" "}
            <LinkPreview
              url="https://kurpmqtkgthagnjqmphd.supabase.co/storage/v1/object/public/assets/game.webp/"
              className="font-bold"
            >
              game development company,
            </LinkPreview>{" "}
            worked with more than 200+ clients across the globe. sold the
            company to a{" "}
            <LinkPreview
              url="https://x.com/khaiderksh/status/1983581870228173087?s=20/"
              className="font-bold"
            >
              game publishing firm in 2023
            </LinkPreview>
            .
          </p>

          <p className="text-neutral-500 mt-3 sm:mt-4">
            now founded a holding company{" "}
            <LinkPreview
              url="https://www.lixtalabs.com/"
              className="font-bold"
            >
              lixta labs,
            </LinkPreview>{" "}
            building cool startups like{" "}
            <LinkPreview
              url="https://www.lixtanetwork.com/"
              className="font-bold"
            >
              lixta network
            </LinkPreview>
            ,{" "}
            <LinkPreview
              url="https://www.komunity.dev/"
              className="font-bold"
            >
              komunity
            </LinkPreview>
            ,{" "}
            <LinkPreview
              url="https://www.100xbrain.in/"
              className="font-bold"
            >
              100xbrain
            </LinkPreview>{" "}
            and many more.
          </p>

          <div className="space-y-2 mt-4">
            <p className="text-neutral-500">some stuff above worked out.</p>
            <p className="text-neutral-500">most of it didn&apos;t.</p>
            <p className="text-neutral-500">but, i learned a lot.</p>
          </div>

          <div className="mt-10 flex">
            <Image
              src="https://kurpmqtkgthagnjqmphd.supabase.co/storage/v1/object/public/assets/haider.jpg"
              alt="haider"
              width={300}
              height={300}
              className="max-w-full h-auto"
              draggable="false"
            />
          </div>

          <div className="mt-6 sm:mt-8 mb-8">
            <LinkPreview
              url="https://www.haiderkhursheed.com/"
              className="font-bold text-3xl sm:text-5xl md:text-7xl text-neutral-500 block"
            >
              peace, bye.
            </LinkPreview>
          </div>
        </div>
      </div>
    </section>
  );
}