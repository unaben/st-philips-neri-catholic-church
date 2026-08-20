"use client";

import HeroCarousel from "@/components/HeroCarousel/HeroCarousel";
import MainSection from "@/components/Main/Main";
import { churchData } from "@/components/Main/MainData";
import { heroSlides } from "@/data";

export default function HomePage() {
  return (
    <>
      <HeroCarousel slides={heroSlides} />
      <MainSection {...churchData} />
    </>
  );
}
