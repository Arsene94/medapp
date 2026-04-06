'use client';

import { X } from "lucide-react";
import { useEffect } from "react";

import { useClientSidebar } from "@/components/application/client/ClientSidebarShell";
import { ApplicationIcon, type ApplicationIconName } from "@/components/application/form/application-icon";
import { Link, usePathname } from "@/i18n/navigation";

type NavItem = {
  href: string;
  icon: ApplicationIconName;
  label: string;
  matches: (pathname: string) => boolean;
};

const ACTIVE_ICON_COLOR = "#115e59";
const INACTIVE_ICON_COLOR = "#64748b";
const WHITE_ICON_COLOR = "#ffffff";

const navItems: NavItem[] = [
  {
    href: "/application/client",
    icon: "dashboard",
    label: "Dashboard",
    matches: (pathname) => pathname === "/application/client",
  },
  {
    href: "/application/client/cases",
    icon: "medical_services",
    label: "My Cases",
    matches: (pathname) => pathname.startsWith("/application/client/cases"),
  },
  {
    href: "/application/client/records",
    icon: "folder_shared",
    label: "Dosare medicale",
    matches: (pathname) => pathname.startsWith("/application/client/records"),
  },
  {
    href: "/application/client/settings",
    icon: "settings",
    label: "Setări",
    matches: (pathname) => pathname.startsWith("/application/client/settings"),
  },
];

function getNavLinkClassName(active: boolean) {
  return active
    ? "flex items-center gap-4 rounded-2xl transition-all duration-300 ease-in-out scale-90 bg-white py-3 px-6 font-bold text-teal-800 shadow-sm border-r-4 border-teal-600 tracking-tight"
    : "flex items-center gap-4 py-3 px-6 text-slate-500 rounded-2xl transition-all duration-200 ease-in-out scale-95 hover:translate-x-1 hover:border-r-4 hover:border-teal-600";
}

function getNavIconFill(name: ApplicationIconName, active: boolean) {
  if (name === "dashboard" && active) {
    return ACTIVE_ICON_COLOR;
  }

  return "none";
}

function SidebarContent({ onNavigate }: { onNavigate: () => void }) {
  const pathname = usePathname();
  const currentPath = pathname.split("?")[0];

  return (
    <>
      <div className="mb-10 flex items-center justify-between gap-3 px-2">
        <Link
          href="/application/client"
          className="flex items-center gap-3"
          onClick={onNavigate}
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-container">
            <ApplicationIcon
              name="medical_services"
              size={20}
              strokeWidth={2.2}
              stroke={WHITE_ICON_COLOR}
            />
          </div>
          <div>
            <h1 className="font-headline text-xl leading-none font-black text-teal-800">
              MedVoyage
            </h1>
            <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
              Clinical Sanctuary
            </p>
          </div>
        </Link>

        <button
          aria-label="Închide meniul"
          className="flex h-10 w-10 items-center justify-center rounded-full text-slate-400 transition-colors hover:bg-white hover:text-teal-700 lg:hidden"
          onClick={onNavigate}
          type="button"
        >
          <X className="h-5 w-5" />
        </button>
      </div>

      <nav className="flex-1 space-y-1">
        {navItems.map((item) => {
          const active = item.matches(currentPath);
          return (
            <Link
              key={item.label}
              href={item.href}
              className={getNavLinkClassName(active)}
              onClick={onNavigate}
            >
              <ApplicationIcon
                name={item.icon}
                size={20}
                strokeWidth={2.2}
                stroke={active ? ACTIVE_ICON_COLOR : INACTIVE_ICON_COLOR}
                fill={getNavIconFill(item.icon, active)}
              />
              <span className="font-['Inter'] text-sm font-medium">
                {item.label}
              </span>
            </Link>
          );
        })}
      </nav>

      <div className="mt-auto space-y-6 px-4">
        <Link
          href="/application"
          className="flex w-full items-center justify-center gap-2 rounded-full bg-primary py-4 font-headline font-bold text-on-primary shadow-lg shadow-primary/10 transition-colors hover:bg-primary-container"
          onClick={onNavigate}
          type="button"
        >
          <ApplicationIcon
            name="add_circle"
            size={20}
            strokeWidth={2.2}
            stroke={WHITE_ICON_COLOR}
          />
          Caz Nou
        </Link>

        <div className="border-t border-slate-100 pt-6">
          <Link
            href="/application/client"
            className="flex items-center gap-4 py-2 px-6 text-slate-500 transition-all duration-300 hover:translate-x-1 hover:text-teal-700"
            onClick={onNavigate}
          >
            <ApplicationIcon
              name="help_outline"
              size={20}
              strokeWidth={2.2}
              stroke={INACTIVE_ICON_COLOR}
            />
            <span className="font-['Inter'] text-sm font-medium">
              Help Center
            </span>
          </Link>
        </div>
      </div>
    </>
  );
}

export function ClientSideBar() {
  const { isMobileSidebarOpen, setMobileSidebarOpen } = useClientSidebar();

  useEffect(() => {
    if (!isMobileSidebarOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileSidebarOpen(false);
      }
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMobileSidebarOpen, setMobileSidebarOpen]);

  return (
    <>
      <aside className="sticky top-0 z-40 hidden h-screen w-72 flex-col border-r border-slate-100 bg-slate-50 py-8 pl-6 lg:flex">
        <SidebarContent
          onNavigate={() => {
            setMobileSidebarOpen(false);
          }}
        />
      </aside>

      <div
        aria-hidden={!isMobileSidebarOpen}
        className={`fixed inset-0 z-40 bg-slate-950/20 transition-opacity duration-300 lg:hidden ${
          isMobileSidebarOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => {
          setMobileSidebarOpen(false);
        }}
      />

      <aside
        aria-hidden={!isMobileSidebarOpen}
        className={`fixed inset-y-0 left-0 z-50 flex w-72 flex-col border-r border-slate-100 bg-slate-50 py-6 pl-4 pr-4 shadow-2xl transition-transform duration-300 lg:hidden ${
          isMobileSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <SidebarContent
          onNavigate={() => {
            setMobileSidebarOpen(false);
          }}
        />
      </aside>
    </>
  );
}
