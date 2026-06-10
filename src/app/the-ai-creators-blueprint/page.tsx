"use client";

import { useEffect } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { LandingHero } from "@/components/sections/landing/LandingHero";
import { LandingBeforeAfter } from "@/components/sections/landing/LandingBeforeAfter";
import { LandingMirror } from "@/components/sections/landing/LandingMirror";
import { LandingProblem } from "@/components/sections/landing/LandingProblem";
import { LandingWhatsInside } from "@/components/sections/landing/LandingWhatsInside";
import { LandingFrameworks } from "@/components/sections/landing/LandingFrameworks";
import { LandingWhoItsFor } from "@/components/sections/landing/LandingWhoItsFor";
import { EbookPreview } from "@/components/sections/landing/EbookPreview";
import { LandingPayment } from "@/components/sections/landing/LandingPayment";
import { LandingFAQ } from "@/components/sections/landing/LandingFAQ";
import { LandingFinalCTA } from "@/components/sections/landing/LandingFinalCTA";
import { FloatingWhatsApp } from "@/components/ui/FloatingWhatsApp";
import { StickyMobileCTA } from "@/components/ui/StickyMobileCTA";
import { PRODUCT } from "@/lib/data";

export default function BlueprintPage() {
  useEffect(() => {
    if (typeof window !== "undefined" && (window as any).fbq) {
      (window as any).fbq("track", "ViewContent", {
        content_name: "The AI Creators Blueprint",
        content_type: "product",
        value: 1.99,
        currency: "USD",
      });
    }
  }, []);

  return (
    <>
      <Navbar />
      <main className="pb-24 md:pb-0">
        <LandingHero />
        <LandingBeforeAfter />
        <LandingMirror />
        <LandingProblem />
        <LandingWhatsInside />
        <LandingFrameworks />
        <LandingWhoItsFor />
        <EbookPreview />
        <LandingPayment />
        <LandingFAQ />
        <LandingFinalCTA />
      </main>
      <FloatingWhatsApp href={PRODUCT.whatsapp} productName="The AI Creators Blueprint" />
      <StickyMobileCTA
        href={PRODUCT.whatsapp}
        label="Order on WhatsApp"
        price={PRODUCT.price}
        productName="The AI Creators Blueprint"
      />
      <Footer />
    </>
  );
}
