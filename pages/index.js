import About from "@/components/About";
import Hero from "@/components/Hero";
import Hv from "@/components/Hv";
import Pricing from "@/components/Pricing/Pricing";
import StartUps from "@/components/StartUps/StartUps";
import BG from "@/components/ui/BG/BG";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
export default function Home() {
  return (
    <>
      <BG />
      <Hero />
      <div className="bg-primary h-screen">
        <About />
        <StartUps />
      </div>
      <Hv />
      <div className="bg-primary h-screen">
      <Pricing />
      </div>
    </>
  );
}
