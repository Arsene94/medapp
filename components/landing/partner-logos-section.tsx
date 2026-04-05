import type { LucideIcon } from "lucide-react";
import { Activity, Globe, Heart, ShieldCheck, Star } from "lucide-react";

const partnerLogos: Array<{
  hiddenOnSmallScreen?: boolean;
  icon: LucideIcon;
  label: string;
}> = [
  { icon: Heart, label: "Memorial" },
  { icon: Activity, label: "Acibadem" },
  { icon: ShieldCheck, label: "AKH Wien" },
  { icon: Globe, label: "Medicana" },
  { hiddenOnSmallScreen: true, icon: Star, label: "Charité" },
];

function PartnerLogo({
  hiddenOnSmallScreen,
  icon: Icon,
  label,
}: {
  hiddenOnSmallScreen?: boolean;
  icon: LucideIcon;
  label: string;
}) {
  const className = hiddenOnSmallScreen
    ? "text-xl font-bold text-slate-700 hidden sm:flex items-center gap-1"
    : "text-xl font-bold text-slate-700 flex items-center gap-1";

  return (
    <div className={className}>
      <Icon size={20} />
      {label}
    </div>
  );
}

export function PartnerLogosSection() {
  return (
    <section className="py-10 border-y border-slate-200 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-6">
          Parteneri medicali cu acreditare internațională JCI
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          {partnerLogos.map((logo) => (
            <PartnerLogo
              key={logo.label}
              hiddenOnSmallScreen={logo.hiddenOnSmallScreen}
              icon={logo.icon}
              label={logo.label}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
