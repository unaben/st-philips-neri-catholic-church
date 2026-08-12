"use client";

import HeroCarousel from "@/components/HeroCarousel/HeroCarousel";
import MainSection from "@/components/Main/Main";
import { churchData } from "@/components/Main/MainData";

export default function HomePage() {
  return (
    <>
      <HeroCarousel />
      <MainSection {...churchData} />
    </>
  );
}
