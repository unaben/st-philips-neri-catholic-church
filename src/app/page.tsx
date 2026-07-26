"use client";

import HeroCarousel from "@/components/sections/HeroCarousel/HeroCarousel";
import MainSection from "@/components/sections/Main/Main";
import { churchData } from "@/components/sections/Main/MainData";

export default function HomePage() {
  return (
    <>
      <HeroCarousel />
      <MainSection {...churchData} />
    </>
  );
}
