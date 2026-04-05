import type { Metadata } from "next";
import { Inter, Manrope, Noto_Serif } from "next/font/google";
import "../../globals.css";
import {hasLocale, NextIntlClientProvider} from "next-intl";
import {routing} from "@/i18n/routing";
import {notFound} from "next/navigation";
import {setRequestLocale} from "next-intl/server";
import {Navbar} from "@/components/landing/NavBar";
import {Footer} from "@/components/landing/Footer";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const notoSerif = Noto_Serif({
  variable: "--font-noto-serif",
  subsets: ["latin"],
  display: "swap",
});

type Props = {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
};

export const metadata: Metadata = {
  title: "MedVoyage | The Curated Sanctuary",
  description:
    "A luxury medical travel landing page recreated in Next.js App Router.",
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}

export default async function LocaleLayout({children, params}: Props) {
  const {locale} = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);
  return (
    <html lang={locale}
      data-scroll-behavior="smooth"
      className={`${inter.variable} ${manrope.variable} ${notoSerif.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-background font-body text-on-background">
      <NextIntlClientProvider>
        <Navbar />
        {children}
        <Footer />
      </NextIntlClientProvider>
      </body>
    </html>
  );
}
