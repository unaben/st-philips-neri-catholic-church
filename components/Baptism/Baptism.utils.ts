import { BaptismStep } from "./Baptism.types";

export function findStageByNumber(
  steps: BaptismStep[],
  stage: number
): BaptismStep | undefined {
  return steps.find((s) => s.stage === stage);
}
