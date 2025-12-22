"use client";
import React from "react";
import { motion } from "motion/react";
import { LinkPreview } from "@/components/ui/link-preview";
 
export default function Linky() {
  return (
    <div className="flex flex-col">
      <p className="text-neutral-500">
          i'm just a guy that loves creating things for others.
      </p>

      <p className="text-neutral-500 mt-4">
      i started my first company at 11 where i build {" "}     
      <LinkPreview url="https://kurpmqtkgthagnjqmphd.supabase.co/storage/v1/object/public/assets/2011.jpg" className="font-bold">
          robots
        </LinkPreview>{" "}
        and{" "}
        <LinkPreview url="https://kurpmqtkgthagnjqmphd.supabase.co/storage/v1/object/public/assets/iitbombay.png" className="font-bold">
          pitch to iit bombay
        </LinkPreview>
        , was a great journey.
      </p>

      <p className="text-neutral-500 mt-4">
      building stuff online turned into business obsession, that make me build{" "}     
      <LinkPreview url="https://kurpmqtkgthagnjqmphd.supabase.co/storage/v1/object/public/assets/2011.jpg" className="font-bold">
      startups
        </LinkPreview>{" "}
        later
      </p>

<p className="text-neutral-500 mt-4">
these days im shipping random stuff and seeing what i want to spend more time on. recently{" "}     
<LinkPreview url="https://www.lixtanetwork.com/" className="font-bold">
lixta network
  </LinkPreview>,{" "}
  <LinkPreview url="https://www.komunity.dev/" className="font-bold">
komunity
  </LinkPreview>{" "}
  and some other{" "}
  <LinkPreview url="https://www.lixtalabs.com/" className="font-bold">
  viral stuff
  </LinkPreview>
  .
</p>

      
    </div>
  );
}