"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import {Link} from '@/i18n/navigation';
import {useTranslations} from "next-intl";

import { MedVoyageLogo } from "@/components/landing/medvoyage-logo";
import LocaleSwitcher from "@/components/general/LocaleSwitcher";
import {Button} from "@/components/ui/button";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = useTranslations('navbar');

  const navItems = [
    { href: "#cum-functioneaza", label: t('how_it_works') },
    { href: "#avantaje", label: t('advantages') },
    { href: "#clinici", label: t('partner_clinics') },
    { href: "#testimoniale", label: t('reviews') },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((open) => !open);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-md shadow-sm py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <MedVoyageLogo
          accentClassName="text-teal-600"
          iconClassName="animate-ekg-line"
          iconContainerClassName="bg-teal-600 text-white p-2 rounded-xl"
          iconSize={24}
          splitAccent
          textClassName="text-2xl font-bold tracking-tight text-teal-950"
        />

        <div className="hidden md:flex items-center gap-8 font-medium text-slate-600">
          {navItems.map((item) => (
              <Link
                key={item.label}
                className="hover:text-teal-600 transition-colors"
                href={item.href}
                >
                {item.label}
              </Link>
          ))}
          <LocaleSwitcher />
        </div>

        <div className="hidden md:block">
          <Button
            size="pill"
            variant="navCta"
          >
            {t('download_app')}
          </Button>
        </div>

        <button
          className="md:hidden text-slate-600 hover:text-teal-600 transition-colors"
          onClick={toggleMobileMenu}
          type="button"
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-xl border-t border-slate-100 py-4 flex flex-col md:hidden">
          {navItems.map((item) => (
            <a
              key={item.label}
              className="px-6 py-3 font-medium text-slate-700 hover:bg-slate-50 hover:text-teal-600"
              href={item.href}
              onClick={closeMobileMenu}
            >
              {item.label}
            </a>
          ))}
          <div className="px-6 pt-4 pb-2">
            <Button
              fullWidth
              size="lg"
              variant="mobileCta"
            >
              {t('download_app')}
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
