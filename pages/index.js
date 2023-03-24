import About from "@/components/About";
import Hero from "@/components/Hero";
import Hv from "@/components/Hv";
import StartUps from "@/components/StartUps/StartUps";
import BG from "@/components/ui/BG/BG";

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
    </>
  );
}
