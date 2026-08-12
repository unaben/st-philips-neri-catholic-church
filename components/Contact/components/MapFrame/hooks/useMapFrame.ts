"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import { MapFrameStage } from "../MapFrame.types";

interface UseMapFrameReturn {
  stage: MapFrameStage;
  hasTimedOut: boolean;
  activate: () => void;
  handleLoad: () => void;
}

export function useMapFrame(timeoutMs = 8000): UseMapFrameReturn {
  const [stage, setStage] = useState<MapFrameStage>("preview");
  const [hasTimedOut, setHasTimedOut] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | undefined>(
    undefined
  );

  const activate = useCallback(() => {
    setStage((prev) => (prev === "preview" ? "loading" : prev));
  }, []);

  const handleLoad = useCallback(() => {
    setStage("loaded");
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  }, []);

  useEffect(() => {
    if (stage !== "loading") return;

    timeoutRef.current = setTimeout(() => setHasTimedOut(true), timeoutMs);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [stage, timeoutMs]);

  return { stage, hasTimedOut, activate, handleLoad };
}
