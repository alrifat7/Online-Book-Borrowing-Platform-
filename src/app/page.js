import Banner from "@/components/Banner";
import { BrowseByCategory, WhyChooseUs } from "@/components/Extrasections";
import FeaturedBooks from "@/components/Featuredbooks";
import Marquee from "@/components/Marquee";
import AllBooks from "@/ui/AllBooks";
import TopGenerations from "@/ui/AllBooks";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Banner />
      <Marquee />
      <FeaturedBooks />
      <BrowseByCategory />
      <WhyChooseUs />
    </div>
  );
}
