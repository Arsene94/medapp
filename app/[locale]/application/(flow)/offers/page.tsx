import { OffersStep } from "@/components/application/form/offers-step";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function Page({ params }: Props) {
  const { locale } = await params;

  return <OffersStep locale={locale} />;
}
