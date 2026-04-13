'use client';

import { useState, useEffect, useCallback, useRef } from 'react';

interface UseCarouselOptions {
  total: number;
  interval?: number;
  autoPlay?: boolean;
}

interface UseCarouselReturn {
  current: number;
  next: () => void;
  prev: () => void;
  goTo: (index: number) => void;
  pause: () => void;
  resume: () => void;
  isPaused: boolean;
}

export function useCarousel({
  total,
  interval = 5000,
  autoPlay = true,
}: UseCarouselOptions): UseCarouselReturn {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearTimer = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % total);
  }, [total]);

  const prev = useCallback(() => {
    setCurrent((c) => (c - 1 + total) % total);
  }, [total]);

  const goTo = useCallback((index: number) => {
    if (index >= 0 && index < total) setCurrent(index);
  }, [total]);

  const pause = useCallback(() => setIsPaused(true), []);
  const resume = useCallback(() => setIsPaused(false), []);

  useEffect(() => {
    if (!autoPlay || isPaused) {
      clearTimer();
      return;
    }
    timerRef.current = setInterval(next, interval);
    return clearTimer;
  }, [autoPlay, isPaused, interval, next, clearTimer]);

  return { current, next, prev, goTo, pause, resume, isPaused };
}
