import { Metadata } from "next";
import { Navbar }   from "@/components/layout/Navbar";
import { Footer }   from "@/components/layout/Footer";
import { LandingHero }         from "@/components/sections/landing/LandingHero";
import { LandingProblem }      from "@/components/sections/landing/LandingProblem";
import { LandingWhatsInside }  from "@/components/sections/landing/LandingWhatsInside";
import { LandingFrameworks }   from "@/components/sections/landing/LandingFrameworks";
import { LandingWhoItsFor }    from "@/components/sections/landing/LandingWhoItsFor";
import { LandingPayment }      from "@/components/sections/landing/LandingPayment";
import { LandingFAQ }          from "@/components/sections/landing/LandingFAQ";
import { LandingFinalCTA }     from "@/components/sections/landing/LandingFinalCTA";

export const metadata: Metadata = {
  title: "The AI Creator's Blueprint — Human 2.0 Genesis",
  description:
    "Four proprietary frameworks. One AI operating system. Stop using AI like a beginner — learn how operators actually use it. Launch Special: ৳199.",
};

export default function BlueprintPage() {
  return (
    <>
      <Navbar />
      <main>
        <LandingHero />
        <LandingProblem />
        <LandingWhatsInside />
        <LandingFrameworks />
        <LandingWhoItsFor />
        <LandingPayment />
        <LandingFAQ />
        <LandingFinalCTA />
      </main>
      <Footer />
    </>
  );
}
