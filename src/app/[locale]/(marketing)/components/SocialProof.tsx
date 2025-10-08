"use client";

import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

const photos = [
  { src: "/sfs.png", alt: "sfs" },
  { src: "/findes.png", alt: "findes" },
  { src: "/itapoa.png", alt: "itapoa" },
];

export default function SocialProof() {
  return (
    <div className="h-[20rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={photos}
        direction="right"
        speed="fast"
        imageWidth={320}
        imageHeight={200}
        className="w-full"
      />
    </div>
  );
}
