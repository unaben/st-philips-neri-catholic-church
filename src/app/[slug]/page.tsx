import PlaceholderPage from "@/components/sections/PlaceholderPage/PlaceholderPage";

export const revalidate = 300;

type PageProps = { params: Promise<{ slug: string }> };

const PlaceholderPageScreen = async ({ params }: PageProps) => {
  return <PlaceholderPage params={params} />;
};
export default PlaceholderPageScreen;
