import { ApplicationShell } from "@/components/application/form/application-shell";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function FlowLayout({ children, params }: Props) {
  const { locale } = await params;

  return <ApplicationShell locale={locale}>{children}</ApplicationShell>;
}
