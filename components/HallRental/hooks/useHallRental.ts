"use client";

import { useCallback, useState } from "react";

interface UseHallRentalReturn {
  openFaqIndex: number | null;
  toggleFaq: (index: number) => void;
}

const useHallRental = (): UseHallRentalReturn => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = useCallback((index: number) => {
    setOpenFaqIndex((current) => (current === index ? null : index));
  }, []);

  return { openFaqIndex, toggleFaq };
};

export default useHallRental;
