import Image from "next/image";
import { Activity, CheckCircle2, Search, Star } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type Offer = {
  clinic: string;
  details: string[];
  highlighted: boolean;
  price: string;
};

const offers: Offer[] = [
  {
    clinic: "Clinic A",
    details: ["Hotel included", "Transfer included"],
    highlighted: true,
    price: "€1,200",
  },
  {
    clinic: "Clinic B",
    details: ["Treatment included", "No hotel included"],
    highlighted: false,
    price: "€1,050",
  },
];

function OfferCard({
  className,
  offer,
}: {
  className: string;
  offer: Offer;
}) {
  return (
    <div className={className}>
      <div className={offer.highlighted ? "flex items-start justify-between gap-3" : undefined}>
        <div>
          <p className="text-sm font-semibold text-[#0B1C2D]">{offer.clinic}</p>
          <p className="mt-1 text-2xl font-bold tracking-[-0.03em] text-[#0B1C2D]">
            {offer.price}
          </p>
        </div>
        {offer.highlighted && (
          <span className="rounded-full bg-[#1BC47D]/10 px-2.5 py-1 text-[11px] font-semibold text-[#158f5d]">
            Best value
          </span>
        )}
      </div>

      <div className="mt-4 space-y-2">
        {offer.details.map((detail, index) => (
          <div key={detail} className="flex items-center gap-2 text-sm text-slate-600">
            <CheckCircle2
              className={`h-4 w-4 ${
                offer.highlighted || index === 0 ? "text-[#1BC47D]" : "text-slate-300"
              }`}
            />
            <span>{detail}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-50/95 via-slate-50/85 to-slate-50/30"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-50 via-transparent to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center gap-16 w-full">
        <div className="flex-1 text-center lg:text-left mt-10 lg:mt-0">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/80 backdrop-blur-sm border border-slate-200 text-sm font-medium text-teal-700 mb-6 shadow-sm">
            <span className="flex h-2 w-2 rounded-full bg-teal-500"></span>
            Aplicația #1 de brokeraj medical în Europa
          </div>

          <h1 className="text-5xl lg:text-7xl font-extrabold text-teal-950 tracking-tight leading-[1.1] mb-6">
            Sănătatea ta, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-teal-400">
              fără granițe.
            </span>
          </h1>

          <p className="text-lg lg:text-xl text-slate-700 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium">
            Găsește, compară și programează tratamente la cele mai bune clinici
            internaționale. Obține oferte personalizate, asistență pentru
            călătorie și suport medical—totul dintr-o singură aplicație.
          </p>

          <Input
            aria-label="Descrie problema ta"
            className="flex-1 px-4 py-3 text-lg sm:px-2"
            label="Descrie problema ta"
            labelVariant="srOnly"
            endAdornment={
              <Button
                className="w-full sm:w-auto"
                size="search"
                startIcon={<Search size={20} />}
                variant="searchCta"
              >
                Caută
              </Button>
            }
            placeholder="Descrie problema ta..."
            shellClassName="relative max-w-xl mx-auto lg:mx-0 bg-white p-2 rounded-2xl shadow-xl shadow-teal-900/10 border border-slate-100 flex flex-col sm:flex-row items-center gap-2 transition-all focus-within:ring-4 focus-within:ring-teal-500/20 focus-within:border-teal-500"
            startAdornment={
              <div className="hidden sm:flex pl-4 text-teal-600">
                <Activity className="animate-ekg-line" size={24} strokeWidth={2.25} />
              </div>
            }
            variant="bare"
          />

          <div className="mt-10 flex items-center justify-center lg:justify-start gap-4 text-sm font-medium text-slate-500">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className={`w-10 h-10 rounded-full border-2 border-slate-50 bg-slate-200 flex items-center justify-center overflow-hidden relative z-[${10 - i}]`}
                >
                  <Image
                    alt="User"
                    fill
                    className="w-full h-full object-cover"
                    sizes="40px"
                    src={`https://i.pravatar.cc/100?img=${i + 10}`}
                  />
                </div>
              ))}
            </div>
            <div className="flex flex-col">
              <div className="flex items-center text-orange-400">
                <Star fill="currentColor" size={16} />
                <Star fill="currentColor" size={16} />
                <Star fill="currentColor" size={16} />
                <Star fill="currentColor" size={16} />
                <Star fill="currentColor" size={16} />
              </div>
              <span>+5,000 pacienți mulțumiți</span>
            </div>
          </div>
        </div>

        <div className="relative hidden lg:block">
          <div className="relative mx-auto max-w-[580px]">
            <div className="absolute -left-8 top-10 hidden h-28 w-28 rounded-full bg-[#1BC47D]/10 blur-2xl sm:block" />
            <div className="absolute -right-6 bottom-6 hidden h-32 w-32 rounded-full bg-[#0B1C2D]/10 blur-2xl sm:block" />

            <div className="relative rounded-[28px] border border-slate-200 bg-white p-4 shadow-[0_30px_80px_rgba(15,23,42,0.10)] sm:p-5">
              <div className="rounded-[24px] bg-[#F8FAFC] p-4 sm:p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-medium uppercase tracking-[0.16em] text-slate-400">
                      Your case
                    </p>
                    <h3 className="mt-2 text-lg font-semibold text-[#0B1C2D]">
                      Dental implants
                    </h3>
                  </div>

                  <div className="rounded-full border border-[#1BC47D]/20 bg-[#1BC47D]/10 px-3 py-1 text-xs font-semibold text-[#158f5d]">
                    Offers received
                  </div>
                </div>

                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-200">
                    <p className="text-xs font-medium uppercase tracking-[0.14em] text-slate-400">
                      Destination
                    </p>
                    <p className="mt-2 text-sm font-semibold text-slate-800">
                      Bucharest, Romania
                    </p>
                  </div>

                  <div className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-200">
                    <p className="text-xs font-medium uppercase tracking-[0.14em] text-slate-400">
                      Estimated stay
                    </p>
                    <p className="mt-2 text-sm font-semibold text-slate-800">
                      4–6 days
                    </p>
                  </div>
                </div>

                <div className="mt-5 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-200">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-medium uppercase tracking-[0.14em] text-slate-400">
                        Case summary
                      </p>
                      <p className="mt-2 text-sm font-medium text-slate-800">
                        Compare verified offers with clear cost breakdowns and
                        included services.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-5 rounded-2xl border border-dashed border-slate-300 bg-white/70 p-4 text-sm text-slate-500">
                  3 clinics matched to your request
                </div>
              </div>
            </div>

            <OfferCard
              className="absolute -left-3 top-8 w-[220px] rotate-[-6deg] rounded-3xl border border-slate-200 bg-white p-4 shadow-[0_20px_50px_rgba(15,23,42,0.10)] sm:-left-16 sm:top-14"
              offer={offers[0]}
            />

            <OfferCard
              className="absolute -right-2 bottom-10 w-[220px] rotate-[5deg] rounded-3xl border border-slate-200 bg-white p-4 shadow-[0_20px_50px_rgba(15,23,42,0.10)] sm:-right-10"
              offer={offers[1]}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
