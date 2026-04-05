import { offerCards } from "@/components/application/form/data";
import {
  MedVoyageGuaranteeCard,
  OfferCard,
  PersonalizedOfferCard,
} from "@/components/application/form/application-offer-card";
import { ApplicationBackLink, ApplicationStepTrail } from "@/components/application/form/application-progress";
import { TravelConfigurationSection } from "@/components/application/form/travel-configuration-section";

type OffersStepProps = {
  locale: string;
};

export function OffersStep({ locale }: OffersStepProps) {
  return (
    <main className="mx-auto w-full max-w-7xl flex-1 px-6 pb-20 pt-32">
      <div className="mb-8">
        <ApplicationBackLink href={`/application/consult`} />
      </div>

      <ApplicationStepTrail currentStep={3} />

      <header className="mx-auto mb-16 max-w-2xl text-center">
        <h1 className="application-headline mb-6 text-4xl font-extrabold tracking-[-0.04em] text-[#0d1c2f] md:text-5xl">
          Oferte Recomandate
        </h1>
        <p className="text-lg font-medium leading-relaxed text-[#515f74]">
          Am analizat dosarul dumneavoastră medical și am selectat cele mai
          performante centre clinice pentru procedura solicitată.
        </p>
      </header>

      <TravelConfigurationSection />

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
        <div className="space-y-12 lg:col-span-8">
          {offerCards.map((card) => (
            <OfferCard data={card} key={card.clinic} />
          ))}
        </div>

        <aside className="space-y-8 lg:col-span-4">
          <MedVoyageGuaranteeCard />
          <PersonalizedOfferCard />
        </aside>
      </div>
    </main>
  );
}
