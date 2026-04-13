'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useCarousel } from '@/hooks/useCarousel';
import { heroSlides } from '@/data';
import { cn } from '@/utils';
import styles from './HeroCarousel.module.css';

export default function HeroCarousel() {
  const { current, next, prev, goTo, pause, resume } = useCarousel({
    total: heroSlides.length,
    interval: 6000,
  });

  return (
    <section
      className={styles.hero}
      aria-label="Welcome carousel"
      onMouseEnter={pause}
      onMouseLeave={resume}
    >
      {/* Slides */}
      {heroSlides.map((slide, i) => (
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

      {/* Dark overlay */}
      <div className={styles.overlay} aria-hidden="true" />

      {/* Text content – shows current slide's text */}
      <div className={styles.content}>
        <div className={styles.textWrap}>
          <p className={styles.tagline}>{heroSlides[current].tagline}</p>
          <h1 className={styles.heading}>{heroSlides[current].heading}</h1>
          <Link href={heroSlides[current].ctaHref} className={styles.cta}>
            {heroSlides[current].ctaLabel}
          </Link>
        </div>
      </div>

      {/* Arrows */}
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

      {/* Dots */}
      <div className={styles.dots} role="tablist" aria-label="Carousel navigation">
        {heroSlides.map((_, i) => (
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
