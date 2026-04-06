import {ClientTopBar} from "@/components/application/client/TopBar";
import { getRecordsTabFromSearchParam, RecordsComponent } from "@/components/application/client/RecordsComponent";
import { ApplicationIcon } from "@/components/application/form/application-icon";

type Props = {
    params: Promise<{ locale: string }>;
    searchParams: Promise<{ tab?: string | string[] }>;
};

export default async function Page({ params, searchParams }: Props) {
    await params;
    const { tab } = await searchParams;
    const activeTab = getRecordsTabFromSearchParam(tab);


    return (
        <div className="flex flex-col flex-1">
            <ClientTopBar title="Dosare medicale" />
            <main className="flex-1 px-8 lg:px-12 bg-surface min-h-screen pb-24 md:pb-12">
                <section className="px-12 py-8 flex-1">
                    <div className="flex justify-between items-end mb-10">
                        <div>
                            <h2 className="text-4xl font-extrabold font-manrope tracking-tighter text-on-surface mb-2">Management
                                Diagnostic</h2>
                            <p className="text-slate-500 max-w-md">Urmăriți evoluția consultărilor dumneavoastră și
                                rapoartele medicale integrate.</p>
                        </div>
                        <button
                            className="bg-tertiary text-on-tertiary px-8 py-4 rounded-full font-bold shadow-xl shadow-tertiary/10 transition-transform hover:scale-105 active:scale-95 flex items-center gap-2">
                            <ApplicationIcon name="add_circle" />
                            Caz Nou
                        </button>
                    </div>
                <RecordsComponent activeTab={activeTab} />
                </section>
            </main>
        </div>
    );
}
