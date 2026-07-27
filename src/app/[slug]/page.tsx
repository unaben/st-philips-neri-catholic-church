import { Metadata } from "next";
import { redirect } from "next/navigation";
import PlaceholderPage from "@/components/sections/PlaceholderPage/PlaceholderPage";
import { slugToTitle } from "@/components/sections/PlaceholderPage/utils/slugToTitle";
import { isValidSlug } from "./utils/isValidSlug";

export const revalidate = 300;

type PageProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  if (!isValidSlug(slug)) {
    return { title: "Page not found" };
  }

  const title = slugToTitle(slug);
  return {
    title,
    description: `${title} — St. Philip Neri Catholic Church, Smethwick.`,
  };
}

const PlaceholderPageScreen = async ({ params }: PageProps) => {
  const { slug } = await params;

  if (!isValidSlug(slug)) {
    redirect("/");
  }

  return <PlaceholderPage params={params} />;
};

export default PlaceholderPageScreen;
