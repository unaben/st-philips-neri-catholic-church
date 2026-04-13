import type { Metadata } from "next";
import { slugToTitle } from "./slugToTitle";

export async function generateMetadata({
    params,
  }: {
    params: Promise<{ slug: string }>;
  }): Promise<Metadata> {
    const { slug } = await params;
    const title = slugToTitle(slug);
    return {
      title,
      description: `${title} — St. Philip Neri Catholic Church, Smethwick.`,
    };
  }