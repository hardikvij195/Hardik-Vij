import About from "@/components/About";
import Hero from "@/components/Hero";
import StartUps from "@/components/StartUps/StartUps";
import BG from "@/components/ui/BG/BG";

export default function Home() {
  return (
    <>
      <BG />
      <div className="">
      <Hero />
      <About />
      <StartUps />
      </div>
    </>
  );
}
