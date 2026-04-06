import {ApplicationIcon} from "@/components/application/form/application-icon";
import { UserMenuDropdown } from "@/components/application/general/UserMenuDropdown";

export function ClientTopBar({title}: {title?: string}) {

    return (
        <header className="flex justify-between items-center w-full px-12 h-20 bg-transparent font-manrope font-semibold sticky top-0 z-40 backdrop-blur-md">
            <div>
                <h1 className="text-2xl font-bold font-manrope tracking-tight text-teal-900">{title}</h1>
            </div>
            <div className="flex items-center gap-6">
                <div className="relative">
                    <ApplicationIcon name="search" className="absolute left-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-slate-400" />
                    <input className="bg-surface-container-highest border-none rounded-full py-2 pl-12 pr-6 text-sm focus:ring-2 focus:ring-primary-container w-64 transition-all" placeholder="Search..." type="text"/>
                </div>
                <div className="flex items-center gap-3">
                    <button className="w-10 h-10 rounded-full flex items-center justify-center text-slate-400 hover:text-teal-600 transition-colors">
                        <ApplicationIcon name="notifications" />
                    </button>
                    <UserMenuDropdown />
                </div>
            </div>
        </header>
    );
}
