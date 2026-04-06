import {ClientTopBar} from "@/components/application/client/TopBar";
import {ApplicationIcon} from "@/components/application/form/application-icon";

type Props = {
    params: Promise<{ locale: string }>;
};

export default async function Page({ params }: Props) {
    const { locale } = await params;

    return (
        <main className="flex-1 px-8 lg:px-12 bg-surface min-h-screen pb-24 md:pb-12">
            <ClientTopBar title="Cazurile Mele"/>
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
                        <span className="material-symbols-outlined" data-icon="add_circle">add_circle</span>
                        Caz Nou
                    </button>
                </div>

                <div className="mb-14">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="h-2 w-2 rounded-full bg-teal-500 animate-pulse"></div>
                        <h3 className="text-lg font-bold font-manrope tracking-tight">Cazuri Active</h3>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <div
                            className="lg:col-span-2 relative group overflow-hidden rounded-xl bg-surface-container-lowest p-8 shadow-2xl shadow-slate-900/5 flex flex-col md:flex-row gap-8">
                            <div className="absolute top-0 right-0 p-4">
                                <span
                                    className="bg-primary-container text-on-primary-container text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">Urgență Redusă</span>
                            </div>
                            <div className="w-full md:w-1/3 aspect-square rounded-2xl overflow-hidden relative">
                                <img alt="Oncology Case Visual"
                                     className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                                     src="https://lh3.googleusercontent.com/aida-public/AB6AXuCbtVUHkgVcmvkHD0CshGUGBrw2Gfq_Lc-65z19be46wMOCOCX7nqgqde99JjstPvIiYzae4lPl3m2uaGvOVpZFF3tV2JWaHY4pezy5HkCbpy-kx575TCFPg_E8vVHTmi6orXsnJN1C2tlgI-l0biFyS9c_hg-EUNF2f21ava9FCHXOhfSj9Sjxn6PY4zAtZLizba8R8LCs9nj5cb-cVi3XjYGbLcVOU1bdXUwz95vUIqqGW7MUvq-G8OKt-VP2skfbiy4Wvr2lng"/>
                                <div
                                    className="absolute inset-0 bg-gradient-to-t from-teal-900/60 to-transparent"></div>
                            </div>
                            <div className="flex-1 flex flex-col justify-between">
                                <div>
                                    <div className="flex items-center gap-2 text-primary font-bold text-xs mb-2">
                                        <ApplicationIcon name="clinical_notes" />
                                        #MV-2024-0891
                                    </div>
                                    <h4 className="text-2xl font-bold font-manrope mb-2">Diagnostic Secundar
                                        Oncologic</h4>
                                    <p className="text-slate-500 text-sm mb-6">Analiză multi-disciplinară pentru
                                        confirmarea protocolului terapeutic și validarea markerilor tumorali.</p>
                                    <div className="space-y-4">
                                        <div className="flex justify-between items-end mb-1">
                                            <span
                                                className="text-xs font-bold text-slate-400">În Analiză AI (65%)</span>
                                            <span className="text-xs font-bold text-teal-600">Estimare: 24h</span>
                                        </div>
                                        <div
                                            className="h-2 w-full bg-surface-container-highest rounded-full overflow-hidden">
                                            <div
                                                className="h-full bg-primary w-[65%] rounded-full shadow-[0_0_15px_rgba(0,101,101,0.4)]"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-8 flex items-center justify-between">
                                    <div className="flex -space-x-3">
                                        <img className="w-10 h-10 rounded-full border-2 border-white shadow-sm"
                                             src="https://lh3.googleusercontent.com/aida-public/AB6AXuDT5M6dp08zwHUGoCtaG9ziWVvqoG9Tx9PA3ORGYhYgL6nrZCKzlK4pcYJBSHsXoyCa-RgMyRxFZB7SHxW8z6noE2JFc4qBSAo3rO4mw0mWlIpmbupMAY8X8G_8KtfkXKHu5a0mbswbW_foHQctfCVkbxBkI1tUzxeUGUJclmZr-jUVz-FLxziVeW8oIBfrNrE6zWoa6xunNDHCm7hBpg4mG_2SxsQ3eX309Hqv05ffkPxlJ0HqPIaarzGpolmZPQgzKaJSD4IL5w"/>
                                        <img className="w-10 h-10 rounded-full border-2 border-white shadow-sm"
                                             src="https://lh3.googleusercontent.com/aida-public/AB6AXuBiXGmVf4_B6G73CLWuvUWBGBc6LHQjsCIV1HnzxQLwZwj_NUQaa1MfQ7XHW84DuquFeC_c7ZwSn59Z8nMvr_buLh1QGq0gbxmq5FlDjswnj_UCUarwJtBtY8ytpIhXEpkE9vPM4qw0iGQ-apIjmtiTVVBYmOrTUiROmy1vGg_QL3mdq5y6i4huVwk8udplv90avHT9EiNvDX_MScrjYC3E229mCQC4eNOevvAtStIHUkQ5ikjYNcHs-M6sb7_CsiqOzRl78I_Oww"/>
                                        <div
                                            className="w-10 h-10 rounded-full bg-surface-container-high border-2 border-white flex items-center justify-center text-[10px] font-bold text-slate-500">+1
                                        </div>
                                    </div>
                                    <button
                                        className="bg-primary text-on-primary px-6 py-3 rounded-full font-bold text-sm transition-all hover:bg-primary-container hover:text-on-primary-container active:scale-95 shadow-lg shadow-primary/10">Vezi
                                        Detalii
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="bg-surface-container-low rounded-xl p-8 flex flex-col justify-between">
                            <div>
                                <p className="text-sm font-bold text-slate-400 mb-6 uppercase tracking-wider">Status
                                    Sumar</p>
                                <div className="space-y-8">
                                    <div className="flex items-start gap-4">
                                        <div
                                            className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center text-teal-600">
                                            <ApplicationIcon name="schedule" />
                                        </div>
                                        <div>
                                            <p className="text-sm font-bold">Deschis pe</p>
                                            <p className="text-lg font-manrope font-bold text-teal-900">14 Octombrie
                                                2026</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div
                                            className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center text-orange-600">
                                            <ApplicationIcon name="location" />
                                        </div>
                                        <div>
                                            <p className="text-sm font-bold">Clinic de referință</p>
                                            <p className="text-lg font-manrope font-bold text-teal-900">Clinica Sanador,
                                                RO</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-8 pt-8 border-t border-slate-200/50">
                                <p className="text-xs text-slate-400 italic font-medium leading-relaxed">„Pacientul
                                    prezintă o evoluție stabilă, așteptăm raportul patologic final pentru confirmarea
                                    etapei II.”</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mb-12">
                    <div className="flex items-center justify-between mb-8">
                        <h3 className="text-lg font-bold font-manrope tracking-tight">Istoric Consultări</h3>
                        <div className="flex gap-2">
                            <button className="p-2 hover:bg-surface-container-high rounded-lg transition-colors">
                                <ApplicationIcon name="filter_list" />
                            </button>
                            <button className="p-2 hover:bg-surface-container-high rounded-lg transition-colors">
                                <ApplicationIcon name="download" />
                            </button>
                        </div>
                    </div>
                    <div
                        className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-2xl shadow-slate-900/5">
                        <table className="w-full text-left border-collapse">
                            <thead>
                            <tr className="bg-surface-container-low/50">
                                <th className="py-5 px-8 text-[11px] font-bold text-slate-400 uppercase tracking-widest font-manrope">ID
                                    Caz
                                </th>
                                <th className="py-5 px-6 text-[11px] font-bold text-slate-400 uppercase tracking-widest font-manrope">Specialitate</th>
                                <th className="py-5 px-6 text-[11px] font-bold text-slate-400 uppercase tracking-widest font-manrope">Data
                                    Finalizării
                                </th>
                                <th className="py-5 px-6 text-[11px] font-bold text-slate-400 uppercase tracking-widest font-manrope">Clinic</th>
                                <th className="py-5 px-6 text-[11px] font-bold text-slate-400 uppercase tracking-widest font-manrope">Status</th>
                                <th className="py-5 px-8 text-right text-[11px] font-bold text-slate-400 uppercase tracking-widest font-manrope">Acțiune</th>
                            </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                            {[
                                {
                                    id: '#MV-2023-0452',
                                    spec: 'Ortopedie',
                                    date: '22 Septembrie 2023',
                                    clinic: 'Acibadem Hospital',
                                    status: 'Finalizat',
                                    statusColor: 'bg-teal-50 text-teal-700 border-teal-100'
                                },
                                {
                                    id: '#MV-2023-0112',
                                    spec: 'Cardiologie',
                                    date: '15 Iulie 2023',
                                    clinic: 'Mayo Clinic (External)',
                                    status: 'Finalizat',
                                    statusColor: 'bg-teal-50 text-teal-700 border-teal-100'
                                },
                                {
                                    id: '#MV-2023-0098',
                                    spec: 'Neurologie',
                                    date: '03 Mai 2023',
                                    clinic: 'Regina Maria',
                                    status: 'Arhivat',
                                    statusColor: 'bg-slate-100 text-slate-500 border-slate-200'
                                }
                            ].map((row, i) => (
                                <tr key={i} className="hover:bg-slate-50 transition-colors">
                                    <td className="py-6 px-8 font-bold text-teal-800 text-sm">{row.id}</td>
                                    <td className="py-6 px-6 font-semibold text-sm">{row.spec}</td>
                                    <td className="py-6 px-6 text-slate-500 text-sm">{row.date}</td>
                                    <td className="py-6 px-6 text-slate-500 text-sm">{row.clinic}</td>
                                    <td className="py-6 px-6">
                                        <span
                                            className={`${row.statusColor} text-[10px] font-bold px-3 py-1 rounded-full border`}>{row.status}</span>
                                    </td>
                                    <td className="py-6 px-8 text-right">
                                        <button
                                            className="text-primary font-bold text-sm hover:underline flex items-center gap-1 ml-auto">
                                            Vezi Raport
                                            <span className="material-symbols-outlined text-sm"
                                                  data-icon="arrow_forward">arrow_forward</span>
                                        </button>
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </main>
    );
}
