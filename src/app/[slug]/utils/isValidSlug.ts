import { APP_LINKS } from "@/constants";

const ALLOWED_SLUGS = new Set<string>(APP_LINKS);

export function isValidSlug(slug: string) {
    return ALLOWED_SLUGS.has(`/${slug}`);
  }