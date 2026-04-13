import HeroCarousel from "@/components/sections/HeroCarousel/HeroCarousel";
import Welcome from "@/components/sections/Welcome/Welcome";
import Featured from "@/components/sections/Featured/Featured";
import Subscribe from "@/components/sections/Subscribe/Subscribe";
import BlogAndHall from "@/components/sections/BlogAndHall/BlogAndHall";

//https://www.figma.com/proto/CVP1TH1t87qR8k7DF54BUK/church?type=design&node-id=1-2&t=2E3QtPNs6aA576jP-0&scaling=min-zoom&page-id=0%3A1

export default function HomePage() {
  return (
    <>
      <HeroCarousel />
      <Welcome />
      <Featured />
      <Subscribe />
      <BlogAndHall />
    </>
  );
}
