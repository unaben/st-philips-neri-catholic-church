import { MapFrameStage } from "./MapFrame.types";

export function getSkeletonLabel(hasTimedOut: boolean): string {
  return hasTimedOut ? "Map is taking a moment to load…" : "Loading map…";
}

export function isFrameMounted(stage: MapFrameStage): boolean {
  return stage === "loading" || stage === "loaded";
}
