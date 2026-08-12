import { ConfessionSlot } from "./Confession.types";

export function groupSlotsByDay(
  slots: ConfessionSlot[]
): Record<string, ConfessionSlot[]> {
  return slots.reduce<Record<string, ConfessionSlot[]>>((acc, slot) => {
    acc[slot.day] = acc[slot.day] ? [...acc[slot.day], slot] : [slot];
    return acc;
  }, {});
}
