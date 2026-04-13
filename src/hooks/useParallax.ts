'use client';

import { useEffect, useRef, useState } from 'react';

interface UseParallaxOptions {
  speed?: number; // 0 = no movement, 1 = full scroll movement
}

export function useParallax({ speed = 0.4 }: UseParallaxOptions = {}) {
  const ref = useRef<HTMLElement | null>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      const windowH = window.innerHeight;
      // Only animate when element is visible
      if (rect.bottom < 0 || rect.top > windowH) return;
      const scrolled = window.scrollY;
      const elTop = el.offsetTop;
      setOffset((scrolled - elTop) * speed);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [speed]);

  return { ref, offset };
}
