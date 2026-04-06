"use client";

import { Menu } from "lucide-react";

import { useClientSidebar } from "@/components/application/client/ClientSidebarShell";
import {ApplicationIcon} from "@/components/application/form/application-icon";
import { UserMenuDropdown } from "@/components/application/general/UserMenuDropdown";

export function ClientTopBar({title}: {title?: string}) {
    const { setMobileSidebarOpen } = useClientSidebar();

    return (
        <header className="sticky top-0 z-40 flex h-20 w-full items-center justify-between bg-transparent px-4 font-manrope font-semibold backdrop-blur-md sm:px-6 lg:px-12">
            <div className="flex items-center gap-3">
                <button
                    aria-label="Deschide meniul"
                    className="group flex h-10 w-10 items-center justify-center rounded-full bg-white/80 shadow-sm ring-1 ring-slate-200 transition-colors hover:text-teal-700 lg:hidden"
                    onClick={() => {
                        setMobileSidebarOpen((current) => !current);
                    }}
                    type="button"
                >
                    <Menu className="h-5 w-5 text-slate-500 transition-colors group-hover:text-teal-700" stroke="currentColor" />
                </button>
                <h1 className="text-2xl font-bold font-manrope tracking-tight text-teal-900">{title}</h1>
            </div>
            <div className="flex items-center gap-3 sm:gap-6">
                <div className="relative hidden lg:block">
                    <input className="w-64 rounded-full border-none bg-surface-container-highest px-6 py-2.5 pr-12 text-sm transition-all placeholder:text-slate-500 focus:ring-2 focus:ring-primary/20" placeholder="Caută documente..." type="text"/>
                    <ApplicationIcon
                        name="search"
                        size={18}
                        strokeWidth={2.1}
                        stroke="currentColor"
                        fill="none"
                        className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-400"
                    />
                </div>
                <div className="flex items-center gap-4 text-slate-400">
                    <button className="group flex h-10 w-10 items-center justify-center rounded-full transition-colors" type="button">
                        <ApplicationIcon
                            name="notifications"
                            size={24}
                            strokeWidth={2.1}
                            stroke="currentColor"
                            fill="none"
                            className="text-slate-400 transition-colors group-hover:text-teal-600"
                        />
                    </button>
                    <UserMenuDropdown />
                </div>
            </div>
        </header>
    );
}
