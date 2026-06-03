import { Metadata } from "next";
import { Navbar }   from "@/components/layout/Navbar";
import { Footer }   from "@/components/layout/Footer";
import { LandingHero }         from "@/components/sections/landing/LandingHero";
import { LandingBeforeAfter }  from "@/components/sections/landing/LandingBeforeAfter";
import { LandingMirror }       from "@/components/sections/landing/LandingMirror";
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
    "তুমি AI ব্যবহার করো। কিন্তু AI তোমার জন্য কাজ করে না। The AI Creator's Blueprint teaches the systems behind professional AI results. Launch Offer: ৳199.",
};

export default function BlueprintPage() {
  return (
    <>
      <Navbar />
      <main>
        <LandingHero />
        <LandingBeforeAfter />
        <LandingMirror />
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
