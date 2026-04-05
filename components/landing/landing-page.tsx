import { AdvantagesSection } from "@/components/landing/advantages-section";
import { CtaSection } from "@/components/landing/cta-section";
import { HeroSection } from "@/components/landing/hero-section";
import { HowItWorksSection } from "@/components/landing/how-it-works-section";
import { PartnerLogosSection } from "@/components/landing/partner-logos-section";

export function LandingPage() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-teal-200 selection:text-teal-900 overflow-x-hidden">
      <HeroSection />
      <PartnerLogosSection />
      <AdvantagesSection />
      <HowItWorksSection />
      <CtaSection />
    </div>
  );
}
