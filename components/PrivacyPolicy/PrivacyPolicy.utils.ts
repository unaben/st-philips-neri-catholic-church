import { PolicySection } from "./PrivacyPolicy.types";

/**
 * Builds the compact table-of-contents entries (id + short label) from
 * the full section list, so the TOC and the content stay in sync from
 * a single source of truth.
 */
export function buildTocEntries(
  sections: PolicySection[]
): { id: string; title: string }[] {
  return sections.map(({ id, title }) => ({ id, title }));
}
