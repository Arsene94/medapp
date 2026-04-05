import { UploadStep } from "@/components/application/form/upload-step";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function Page({ params }: Props) {
  const { locale } = await params;

  return <UploadStep locale={locale} />;
}
