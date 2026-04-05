import { Heart, Smartphone } from "lucide-react";

import { Button } from "@/components/ui/button";

function DownloadButton({ label }: { label: string }) {
  return (
    <Button
      size="xl"
      startIcon={<Smartphone size={24} />}
      variant="downloadCta"
    >
      {label}
    </Button>
  );
}

export function CtaSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-[3rem] p-10 md:p-16 text-center relative overflow-hidden border border-orange-200">
          <div className="absolute top-0 right-0 p-16 opacity-5 mix-blend-multiply">
            <Heart size={300} />
          </div>

          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
              Gata să preiei controlul asupra sănătății tale?
            </h2>
            <p className="text-lg text-slate-600 mb-10">
              Descarcă MedVoyage acum și primește o evaluare medicală gratuită a
              dosarului tău de la un medic specialist internațional.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <DownloadButton label="Descarcă pentru iOS" />
              <DownloadButton label="Descarcă pentru Android" />
            </div>
            <p className="mt-6 text-sm text-slate-500 font-medium">
              * 100% Gratuit pentru pacienți. Plătești doar procedurile la
              clinică.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
