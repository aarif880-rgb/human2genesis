import { Navbar }              from "@/components/layout/Navbar";
import { Footer }              from "@/components/layout/Footer";
import { Hero }                from "@/components/sections/Hero";
import { WhyFail }             from "@/components/sections/WhyFail";
import { OperatorDifference }  from "@/components/sections/OperatorDifference";
import { ProductTeaser }       from "@/components/sections/ProductTeaser";
import { FrameworkPreview }    from "@/components/sections/FrameworkPreview";
import { RefundPolicy }        from "@/components/sections/RefundPolicy";
import { FinalCTA }            from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />              {/* 1 — Hook: operator identity + Eid urgency */}
        <WhyFail />           {/* 2 — Problem: why most people fail with AI */}
        <OperatorDifference />{/* 3 — Distinction: beginner vs operator */}
        <ProductTeaser />     {/* 4 — Solution: product introduction */}
        <FrameworkPreview />  {/* 5 — Proof: 4 proprietary frameworks */}
        <RefundPolicy />      {/* 6 — Trust: clear policy */}
        <FinalCTA />          {/* 7 — Close: Eid CTA → sales page */}
      </main>
      <Footer />
    </>
  );
}
