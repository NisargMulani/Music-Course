import { InfiniteMovingCardsDemo } from "@/components/Cards";
import Featuredcourses from "@/components/Featuredcourses";
import Herosection from "@/components/Herosection";
import { CardHoverEffectDemo } from "@/components/Hovercard";
import { WavyBackgroundDemo } from "@/components/Instructer";
import { StickyScrollRevealDemo } from "@/components/Scroll";

export default function Home() {
  return (
    <div className="bg-black">
      <Herosection />
      <Featuredcourses />
      <StickyScrollRevealDemo />
      <InfiniteMovingCardsDemo />
      <CardHoverEffectDemo/>
      <WavyBackgroundDemo/>
    </div>
  );
}
