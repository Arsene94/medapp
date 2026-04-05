import {
  CheckCircle2,
  FileText,
  Globe,
  MessageSquare,
  Plane,
  Search,
} from "lucide-react";
import {useTranslations} from "next-intl";

function FeatureIcon({
  children,
  className,
}: {
  children: React.ReactNode;
  className: string;
}) {

  return (
    <div className={className}>
      {children}
    </div>
  );
}

export function AdvantagesSection() {
  const t = useTranslations('homepage_advantage_section');

  const advisorBenefits = [
    t('answer_under_x_minutes', { count: 15 }),
    t('medical_interpreter_available')
  ];
  return (
    <section id="avantaje" className="py-24 max-w-7xl mx-auto px-6">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-teal-950 mb-6 tracking-tight">
          De ce să folosești un <span className="text-teal-600">broker digital?</span>
        </h2>
        <p className="text-lg text-slate-600">
          MedVoyage elimină stresul căutărilor, intermediarii ascunși și
          barierele lingvistice. Tot procesul tău medical devine transparent și
          controlabil din aplicație.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:auto-rows-[minmax(280px,auto)]">
        <div className="md:col-span-2 bg-white rounded-3xl p-8 shadow-sm border border-slate-100 flex flex-col justify-between overflow-hidden relative group hover:shadow-md transition-shadow">
          <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
            <Globe size={120} />
          </div>
          <div className="relative z-10 w-full md:w-2/3">
            <FeatureIcon className="w-12 h-12 bg-teal-100 text-teal-700 rounded-xl flex items-center justify-center mb-6">
              <Search size={24} />
            </FeatureIcon>
            <h3 className="text-2xl font-bold text-teal-950 mb-3">
              Compară oferte obiectiv
            </h3>
            <p className="text-slate-600 leading-relaxed">
              Încarci dosarul o singură dată și primești planuri de tratament și
              oferte de preț de la mai multe clinici simultan. Fără comisioane
              ascunse, prețurile sunt exact cele de la poarta spitalului.
            </p>
          </div>
        </div>

        <div className="bg-teal-900 rounded-3xl p-8 shadow-sm border border-teal-800 flex flex-col justify-between text-white relative overflow-hidden group hover:shadow-md transition-shadow">
          <div className="absolute inset-0 bg-gradient-to-br from-teal-800 to-teal-950 z-0"></div>
          <div className="relative z-10">
            <FeatureIcon className="w-12 h-12 bg-teal-800/50 text-teal-300 rounded-xl flex items-center justify-center mb-6 border border-teal-700/50">
              <FileText size={24} />
            </FeatureIcon>
            <h3 className="text-xl font-bold mb-3">Dosar Medical Tradus</h3>
            <p className="text-teal-100/80 text-sm leading-relaxed">
              Istoricul tău medical este stocat securizat și tradus automat
              pentru medicii străini.
            </p>
          </div>
        </div>

        <div className="h-full rounded-3xl border border-orange-100 bg-orange-50 p-8 shadow-sm transition-shadow group hover:shadow-md flex flex-col">
          <FeatureIcon className="mb-8 flex h-12 w-12 items-center justify-center rounded-xl bg-orange-200 text-orange-700">
            <Plane size={24} />
          </FeatureIcon>
          <h3 className="text-xl font-bold text-slate-900 mb-3">
            Concierge de Călătorie
          </h3>
          <p className="text-slate-600 text-sm leading-relaxed">
            Zbor, transfer VIP de la aeroport și cazare lângă clinică.
            Organizăm toată logistica pentru tine și însoțitor.
          </p>
        </div>

        <div className="h-full rounded-3xl border border-slate-100 bg-white p-8 shadow-sm transition-shadow group hover:shadow-md md:col-span-2 flex flex-col gap-8 md:flex-row md:items-start">
          <div className="flex-1">
            <FeatureIcon className="mb-8 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
              <MessageSquare size={24} />
            </FeatureIcon>
            <h3 className="text-2xl font-bold text-teal-950 mb-3">
              Consilier dedicat 24/7
            </h3>
            <p className="text-slate-600 leading-relaxed mb-4">
              Ai o persoană reală, vorbitoare de limba română, alocată cazului
              tău. Comunică prin chat direct în aplicație pentru orice
              întrebare, oricând.
            </p>
            <ul className="space-y-2.5">
              {advisorBenefits.map((benefit) => (
                <li
                  key={benefit}
                  className="flex items-start gap-3 text-sm font-medium text-slate-700"
                >
                  <CheckCircle2
                    size={16}
                    className="mt-0.5 shrink-0 text-teal-500"
                  />
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative hidden h-full w-full rounded-2xl border border-slate-100 bg-slate-50 p-4 md:block md:w-64">
            <div className="flex items-start gap-3 mb-4">
              <div className="w-8 h-8 rounded-full bg-blue-200 flex-shrink-0"></div>
              <div className="bg-white p-2 rounded-xl rounded-tl-none border border-slate-200 text-xs text-slate-600 shadow-sm">
                Totul este pregătit pentru transferul de mâine dimineață. 🚗
              </div>
            </div>
            <div className="flex items-start gap-3 flex-row-reverse mb-4">
              <div className="w-8 h-8 rounded-full bg-teal-600 flex-shrink-0"></div>
              <div className="bg-teal-50 p-2 rounded-xl rounded-tr-none border border-teal-100 text-xs text-teal-800 shadow-sm">
                Mulțumesc! La ce oră?
              </div>
            </div>
            <div className="absolute bottom-4 left-4 right-4 h-8 bg-white border border-slate-200 rounded-full flex items-center px-3">
              <span className="text-[10px] text-slate-400">Scrie un mesaj...</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
