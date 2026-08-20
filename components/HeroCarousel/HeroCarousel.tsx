"use client";

import Image from "next/image";
import Link from "next/link";
import cn from "classnames";
import { useCarousel } from "@/hooks/useCarousel";
import type { Slide } from "@/types";
import styles from "./HeroCarousel.module.css";

export default function HeroCarousel({ slides }: { slides: Array<Slide> }) {
  const { current, next, prev, goTo, pause, resume } = useCarousel({
    total: slides.length,
    interval: 6000,
  });

  return (
    <section
      className={styles.hero}
      aria-label="Welcome carousel"
      onMouseEnter={pause}
      onMouseLeave={resume}
    >
      {slides.map((slide, i) => (
        <div
          key={slide.id}
          className={cn(styles.slide, i === current && styles.active)}
          aria-hidden={i !== current}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            priority={i === 0}
            quality={85}
            className={styles.slideImage}
          />
        </div>
      ))}
      <div className={styles.overlay} aria-hidden="true" />
      <div className={styles.content}>
        <div className={styles.textWrap}>
          <p className={styles.tagline}>{slides[current].tagline}</p>
          <h1 className={styles.heading}>{slides[current].heading}</h1>
          {slides[current]?.ctaHref && (
            <Link href={slides[current].ctaHref ?? ""} className={styles.cta}>
              {slides[current].ctaLabel}
            </Link>
          )}
        </div>
      </div>
      <button
        className={cn(styles.arrowBtn, styles.arrowLeft)}
        onClick={prev}
        aria-label="Previous slide"
      >
        ‹
      </button>
      <button
        className={cn(styles.arrowBtn, styles.arrowRight)}
        onClick={next}
        aria-label="Next slide"
      >
        ›
      </button>
      <div
        className={styles.dots}
        role="tablist"
        aria-label="Carousel navigation"
      >
        {slides.map((_, i) => (
          <button
            key={i}
            className={cn(styles.dot, i === current && styles.activeDot)}
            onClick={() => goTo(i)}
            role="tab"
            aria-selected={i === current}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
