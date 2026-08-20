import HallRental from "@/components/HallRental/HallRental";
import HeroCarousel from "@/components/HeroCarousel/HeroCarousel";
import { hallSlides } from "@/data";

const HallRentalPage = () => {
  return (
    <>
      <HeroCarousel slides={hallSlides} />
      <HallRental />
    </>
  );
};

export default HallRentalPage;
