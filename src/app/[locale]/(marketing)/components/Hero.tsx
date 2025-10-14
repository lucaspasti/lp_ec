"use client";
import { HeroParallax } from "@/components/ui/hero-parallax";
import { NavbarDemo } from "./Navbar";

export default function Hero() {
  return (
    <>
      <NavbarDemo />
      <HeroParallax products={products} />
    </>
  );
}
export const products = [
  {
    title: "EC Data",
    link: "https://ecdata.com.br",
    thumbnail: "/ecdata.png",
  },
  {
    title: "EC Infra",
    link: "https://ecinfra.com.br",
    thumbnail: "/ecinfra.png",
  },
  {
    title: "CMOG",
    link: "https://cmog.com.br",
    thumbnail: "/cmog.png",
  },
];
