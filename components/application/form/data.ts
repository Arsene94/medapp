import type { ApplicationIconName } from "@/components/application/form/application-icon";

export type ApplicationNavItem = {
  active?: boolean;
  href: string;
  label: string;
};

export type ApplicationDocumentItem = {
  icon: ApplicationIconName;
  name: string;
  status: string;
  subtitle?: string;
};

export type ConsultationGoal = {
  complete?: boolean;
  label: string;
};

export type ConsultationMessage = {
  body: string;
  emphasis?: string;
  options?: string[];
  role: "assistant" | "user";
};

export type OfferFeature = {
  icon: ApplicationIconName;
  label: string;
};

export type OfferCardData = {
  badge: string;
  badgeClassName: string;
  cardClassName: string;
  clinic: string;
  features: OfferFeature[];
  imageAlt: string;
  imageSrc: string;
  price: string;
  priceClassName: string;
  primaryButtonClassName: string;
  primaryButtonLabel: string;
  secondaryButtonClassName: string;
  secondaryButtonLabel: string;
  wrapperClassName?: string;
};

export type GuaranteeItem = {
  description: string;
  icon: ApplicationIconName;
  title: string;
};

export const applicationNavItems: ApplicationNavItem[] = [
  { href: "#", label: "Dashboard" },
  { active: true, href: "#", label: "My Records" },
  { href: "#", label: "Find Clinics" },
];

export const recentDocuments: ApplicationDocumentItem[] = [
  {
    icon: "picture_as_pdf",
    name: "Analize_Sange.pdf",
    status: "ÎNCĂRCAT",
  },
];

export const contextualDocuments: ApplicationDocumentItem[] = [
  {
    icon: "description",
    name: "Analize_Sange_Ianuarie.pdf",
    status: "Analizat de Aura",
  },
  {
    icon: "radiology",
    name: "RMN_Lombar_S1.dicom",
    status: "În așteptare clinică",
  },
];

export const consultationGoals: ConsultationGoal[] = [
  {
    complete: true,
    label: "Clarificarea simptomelor raportate",
  },
  {
    complete: true,
    label: "Corelarea istoricului cu analizele noi",
  },
  {
    complete: false,
    label: "Generare recomandări preliminare",
  },
];

export const consultationMessages: ConsultationMessage[] = [
  {
    body: "Bună ziua! Am analizat documentele încărcate de dumneavoastră. Am observat o ușoară deviație a valorilor TSH în analizele de sânge.",
    emphasis:
      "Ați resimțit oboseală neobișnuită sau sensibilitate la frig în ultimele 2 săptămâni?",
    role: "assistant",
  },
  {
    body: "Da, m-am simțit destul de obosit chiar și după 8 ore de somn, dar am pus-o pe seama stresului de la muncă.",
    role: "user",
  },
  {
    body: "Înțeles. Această oboseală persistentă, coroborată cu analizele, este un indicator important. Mai am o întrebare pentru a rafina recomandările:",
    options: [
      "Ați observat schimbări de greutate?",
      "Aveți istoric familial de tiroidită?",
    ],
    role: "assistant",
  },
];

export const offerCards: OfferCardData[] = [
  {
    badge: "Gold Standard",
    badgeClassName: "bg-teal-50 text-teal-700",
    cardClassName: "bg-[#ffffff]",
    clinic: "Acibadem Healthcare",
    features: [
      { icon: "hotel", label: "Hotel 5* Inclus" },
      { icon: "airport_shuttle", label: "Transfer VIP" },
      { icon: "monitoring", label: "Rată succes: 98.4%" },
      { icon: "translate", label: "Traducător Român" },
    ],
    imageAlt: "Clinic exterior",
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBKSYfBAoFLHduobFqbEFUUygGD3NhXOBNf5F0UibAXjGOkPhGiaWxMqzLTkuLNOWVrbv-Ko9708EKROLQpNQue3Pa25CkopSjhX69Yl_ri8dEJJD4T-4dFuJZwindRb9hQCU4A3ONrdFs1XZeSPR3hlbUe0flkeWQtxceqFi1y6KgHaKyvU6AsCDqrir3Zu_2GlZID9Slwi9OP_78DeluoSF91BO3ilnalgc9788G0uTMhi6hXBZMWhCaFrNWOIM5IOr-9mB-NlA",
    price: "€4,200",
    priceClassName: "text-[#006565]",
    primaryButtonClassName:
      "application-editorial-gradient text-white shadow-xl shadow-teal-900/10",
    primaryButtonLabel: "Selectează Oferta",
    secondaryButtonClassName:
      "border border-[#bdc9c8]/30 text-[#006565] hover:bg-[#eff4ff]",
    secondaryButtonLabel: "Detalii",
    wrapperClassName:
      "relative before:absolute before:-inset-0.5 before:rounded-[1rem] before:bg-gradient-to-r before:from-teal-500 before:to-teal-800 before:opacity-20 before:blur before:transition before:duration-500 group-hover:before:opacity-40",
  },
  {
    badge: "Clinical Excellence",
    badgeClassName: "bg-slate-200 text-slate-700",
    cardClassName: "bg-[#eff4ff]",
    clinic: "Memorial Hospitals",
    features: [
      { icon: "hotel", label: "Hotel 4* Premium" },
      { icon: "flight_takeoff", label: "Bilete Avion Incluse" },
      { icon: "verified", label: "Rată succes: 96.2%" },
      { icon: "medical_services", label: "Recuperare Inclusă" },
    ],
    imageAlt: "Medical lab",
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBQSd1XdwW7TnzehbyB6M439uzzmyQUp_JBQB39MCQoF3gHOY4cU7FtbRidIneFpc4NWk9VlL2csAUFogliYiPXcdemdVNvwN_oRDfFtWlklhklKL0H1DL_vvCIyjHNkBpOKhtSdHyRTv7TF7ecrbpnwb7jYljDwo1LtNpXcGoKCATWE4tvZeXefuxTuRpSOYuRe-cqIn0C1ETaXdyZ0sk4b-67v4RhzojinSJIMzhcQuGx9X907oP4P0y3b44xWIsTw2rbXwBcfQ",
    price: "€3,850",
    priceClassName: "text-[#0d1c2f]",
    primaryButtonClassName:
      "border-2 border-[#006565] bg-white text-[#006565] hover:bg-[#006565] hover:text-white",
    primaryButtonLabel: "Selectează Oferta",
    secondaryButtonClassName:
      "text-[#515f74] hover:bg-[#dde9ff] border border-transparent",
    secondaryButtonLabel: "Detalii",
  },
];

export const guaranteeItems: GuaranteeItem[] = [
  {
    description:
      "Fondurile sunt eliberate clinicii doar după finalizarea procedurii.",
    icon: "security",
    title: "Plată Securizată",
  },
  {
    description:
      "Manager de caz dedicat pe tot parcursul călătoriei.",
    icon: "support_agent",
    title: "Asistență 24/7",
  },
];
