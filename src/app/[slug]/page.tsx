import { Metadata } from "next";
import PlaceholderPage from "@/components/sections/PlaceholderPage/PlaceholderPage";
import { slugToTitle } from "@/components/sections/PlaceholderPage/utils/slugToTitle";


export const revalidate = 300;

type PageProps = { params: Promise<{ slug: string }> };

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

const PlaceholderPageScreen = async ({ params }: PageProps) => {
  return <PlaceholderPage params={params} />;
};
export default PlaceholderPageScreen;
