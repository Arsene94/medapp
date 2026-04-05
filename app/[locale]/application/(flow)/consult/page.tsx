import { ConsultStep } from "@/components/application/form/consult-step";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function Page({ params }: Props) {
  const { locale } = await params;

  return <ConsultStep locale={locale} />;
}
