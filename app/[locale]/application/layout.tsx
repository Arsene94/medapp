import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";

import "../../globals.css";
import { routing } from "@/i18n/routing";

const manrope = Manrope({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-manrope",
});

const inter = Inter({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-inter",
});

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export const metadata: Metadata = {
  title: "MedVoyage | Consultanță Medicală",
  description:
    "Fluxul de consultanță medicală MedVoyage, cu încărcare documente, consult AI și oferte recomandate.",
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function ApplicationLocaleLayout({
  children,
  params,
}: Props) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  return (
    <html
      className={`${inter.variable} ${manrope.variable} h-full antialiased`}
      data-scroll-behavior="smooth"
      lang={locale}
    >
      <body className="application-flow-body">
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}
