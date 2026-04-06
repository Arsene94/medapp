import {ApplicationIcon, ApplicationIconName} from "@/components/application/form/application-icon";
import {ClientTopBar} from "@/components/application/client/TopBar";

type Props = {
    params: Promise<{ locale: string }>;
};

export default async function Page({ params }: Props) {
    const { locale } = await params;

    return (
        <main className="flex-1 px-8 lg:px-12 bg-surface min-h-screen pb-24 md:pb-12">
            <ClientTopBar title="Dashboard" />
            <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
                <div className="max-w-2xl">
                    <h2 className="text-4xl font-headline font-extrabold text-on-surface tracking-tight mb-2">Bună,
                        Alexandru!</h2>
                    <p className="text-secondary font-medium text-lg leading-relaxed">Cazul tău este în analiză de
                        către <span className="text-primary font-bold">3 clinici</span> internaționale de prestigiu.
                    </p>
                </div>
                <div className="relative group">
                    <img alt="Profile" className="w-14 h-14 rounded-full object-cover ring-4 ring-white shadow-xl"
                         src="https://lh3.googleusercontent.com/aida-public/AB6AXuAXpjGlXX-ZgRgl0XQ5DxbSfPgIl2PyYOElXo7DUK04Y6_rnYU_6cZGKbWGf6_Ij98DTfaafyfcGZXF6GNB08boLCARaxeDKgUy3n_TLyVHigt4bBzVzWNdeo6tfCONSw3H5XdcBbpTok2mmNUI9XZp57FsOn0Zkwi9ORpGDywTsJrkXPpZuqHOlLKSWBZllTeuxqivWSS5usLY6hih_pf7RCw2tib6SCP7hl6_auff9kzWoyTkMyx70mz1pCuDmIOYm8Sh18wbKA"/>
                    <span
                        className="absolute bottom-0 right-0 w-4 h-4 bg-primary border-2 border-white rounded-full"></span>
                </div>
            </header>

            <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
                <div className="xl:col-span-2 space-y-8">
                    <section
                        className="bg-surface-container-lowest rounded-lg p-8 shadow-[0_32px_64px_rgba(13,28,47,0.05)] relative overflow-hidden">
                        <div className="flex justify-between items-start mb-8 relative z-10">
                            <div>
                                <span
                                    className="bg-primary-fixed text-on-primary-fixed-variant px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3 inline-block">Caz Activ: #MV-9082</span>
                                <h3 className="text-2xl font-headline font-bold text-teal-800">Diagnostic Secundar
                                    Oncologic</h3>
                            </div>
                            <button className="p-2 text-slate-400 hover:text-primary transition-colors">
                                <span className="material-symbols-outlined">more_horiz</span>
                            </button>
                        </div>
                        <div className="mb-10 relative z-10">
                            <div className="flex justify-between text-sm font-medium mb-4">
                                <span className="text-primary">Pasul 2 din 3: AI Analysis & Offers Pending</span>
                                <span className="text-slate-400">65% Finalizat</span>
                            </div>
                            <div className="h-3 w-full bg-surface-container rounded-full overflow-hidden">
                                <div
                                    className="h-full bg-primary rounded-full w-[65%] shadow-[0_0_20px_rgba(0,101,101,0.3)]"></div>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
                            <div className="flex items-center gap-4 p-4 rounded-3xl bg-surface-container-low">
                                <ApplicationIcon name="check_circle" className="text-[#006565]" fill="currentColor" stroke="white" />
                                <span className="text-sm font-bold">Documente Verificate</span>
                            </div>
                            <div className="flex items-center gap-4 p-4 rounded-3xl bg-[#d5e3fc]">
                                <ApplicationIcon name="sync"
                                                 className="text-[#57657a] animate-pulse" />
                                <span className="text-sm font-bold text-[#57657a]">Evaluare AI</span>
                            </div>
                            <div className="flex items-center gap-4 p-4 rounded-3xl bg-slate-50 opacity-50">
                                <ApplicationIcon name="hourglass" className="text-slate-300" />
                                <span className="text-sm font-bold text-slate-400">Decizie Finală</span>
                            </div>
                        </div>
                        <div
                            className="absolute -right-20 -top-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
                    </section>

                    <section>
                        <div className="flex justify-between items-end mb-6">
                            <h3 className="text-xl font-headline font-bold text-on-surface">Dosar Medical
                                Recente</h3>
                            <button className="text-primary font-bold text-sm hover:underline">Vezi tot istoricul
                            </button>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {[
                                {title: "Analize Sânge", icon: "lab_research", date: "12 Oct 2023"},
                                {title: "RMN Cranian", icon: "biotech", date: "08 Oct 2023"},
                                {title: "Istoric Medical", icon: "history_edu", date: "01 Oct 2023"}
                            ].map((item, idx) => (
                                <div key={idx}
                                     className="bg-surface-container-low p-6 rounded-3xl group hover:bg-white transition-all duration-300 border border-transparent hover:border-slate-100 hover:shadow-xl">
                                    <div
                                        className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-4 shadow-sm group-hover:bg-primary-fixed transition-colors">
                                        <ApplicationIcon name={item.icon as ApplicationIconName} className="text-[#006565]"/>
                                    </div>
                                    <h4 className="font-headline font-bold text-teal-900 mb-1">{item.title}</h4>
                                    <p className="text-xs text-slate-500 mb-4">Adăugat: {item.date}</p>
                                    <div className="flex gap-2">
                                        <button
                                            className="flex-1 py-2 bg-white rounded-full text-xs font-bold text-slate-700 hover:bg-slate-50 transition-colors">Download
                                        </button>
                                        <button
                                            className="p-2 bg-white rounded-full text-primary hover:bg-primary hover:text-white transition-colors">
                                            <span className="material-symbols-outlined text-sm">visibility</span>
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>

                <div className="space-y-8">
                    <section className="bg-white rounded-lg p-6 shadow-sm">
                        <h3 className="text-lg font-headline font-bold mb-6 flex items-center gap-2">
                            <span className="material-symbols-outlined text-primary">calendar_today</span>
                            Urmează pentru tine
                        </h3>
                        <div
                            className="space-y-8 relative before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-[2px] before:bg-slate-100">
                            <div className="relative pl-10">
                                <div
                                    className="absolute left-0 top-1 w-[24px] h-[24px] bg-primary rounded-full border-4 border-white ring-1 ring-primary/20"></div>
                                <h4 className="text-sm font-bold text-teal-800">Primire Oferte Finale</h4>
                                <p className="text-xs text-slate-500 mt-1">Estimare: Astăzi, 18:00</p>
                            </div>
                            <div className="relative pl-10">
                                <div
                                    className="absolute left-0 top-1 w-[24px] h-[24px] bg-slate-200 rounded-full border-4 border-white"></div>
                                <h4 className="text-sm font-bold text-slate-400">Programare Consultanță Video</h4>
                                <p className="text-xs text-slate-400 mt-1">În curând</p>
                            </div>
                            <div className="relative pl-10">
                                <div
                                    className="absolute left-0 top-1 w-[24px] h-[24px] bg-slate-200 rounded-full border-4 border-white"></div>
                                <h4 className="text-sm font-bold text-slate-400">Validare Plan Tratament</h4>
                                <p className="text-xs text-slate-400 mt-1">După consultanță</p>
                            </div>
                        </div>
                    </section>

                    <section
                        className="bg-primary p-6 rounded-lg text-on-primary shadow-xl shadow-primary/20 relative overflow-hidden">
                        <h3 className="text-lg font-headline font-bold mb-4 relative z-10">Cele mai bune oferte</h3>
                        <div className="space-y-3 relative z-10">
                            <div
                                className="bg-white/10 clinical-blur rounded-2xl p-4 flex justify-between items-center group cursor-pointer hover:bg-white/20 transition-all">
                                <div>
                                    <h4 className="text-sm font-bold">Acibadem Healthcare</h4>
                                    <p className="text-[10px] text-primary-fixed/80">Istanbul, Turcia</p>
                                </div>
                                <div className="text-right">
                                    <p className="text-sm font-black">4.620€</p>
                                    <span
                                        className="text-[10px] bg-white/20 px-2 py-0.5 rounded-full">Top Scor</span>
                                </div>
                            </div>
                            <div
                                className="bg-white/10 clinical-blur rounded-2xl p-4 flex justify-between items-center group cursor-pointer hover:bg-white/20 transition-all">
                                <div>
                                    <h4 className="text-sm font-bold">Wiener Privatklinik</h4>
                                    <p className="text-[10px] text-primary-fixed/80">Viena, Austria</p>
                                </div>
                                <div className="text-right">
                                    <p className="text-sm font-black">5.150€</p>
                                </div>
                            </div>
                        </div>
                        <div className="absolute bottom-0 right-0 opacity-10 pointer-events-none">
                            <span className="material-symbols-outlined text-9xl">medical_information</span>
                        </div>
                    </section>

                    <section
                        className="bg-surface-container-high rounded-lg p-6 flex items-center gap-4 border border-white/50">
                        <div className="relative">
                            <img alt="Consultant" className="w-12 h-12 rounded-full object-cover"
                                 src="https://lh3.googleusercontent.com/aida-public/AB6AXuBGaw3ayR3PBqVsPdzQYU1ADUnVHiNV_YhwUPEp1qdP_ayC01_cK7aoQMC1QnIO3AafOyz87Qh8RfJ5lijHpRy3iRDx3LHNX1SZwgF3t7T2g5vq2YjqvtI2yqsSLEwQpU9HgbnyiAL1khrkK7DlIXeR3VJair5Q8Kqg7sEXK60GrkUZxmypKfVkkW2DDC3Fl0H7jvtiTEcePvviz0xor3kLEpijBFAinXweHA7TAA5xjcP0V7JvxL779fOgaQWUmQbWdSpaoDBEQQ"/>
                            <span
                                className="absolute top-0 right-0 w-3 h-3 bg-green-500 border-2 border-surface-container-high rounded-full"></span>
                        </div>
                        <div className="flex-1">
                            <h4 className="text-sm font-bold text-teal-900">Dr. Maria Ionescu</h4>
                            <p className="text-xs text-slate-500">Consilierul tău personal</p>
                        </div>
                        <button
                            className="bg-white p-2 rounded-full text-primary shadow-sm hover:scale-105 active:scale-95 transition-transform">
                            <ApplicationIcon name="chat_bubble" />
                        </button>
                    </section>
                </div>
            </div>
            <footer
                className="mt-20 pt-10 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
                <p className="text-slate-400 text-sm">© 2024 MedVoyage Clinical Sanctuary. Siguranța datelor tale
                    este prioritatea noastră.</p>
                <div className="flex gap-6">
                    <a className="text-slate-400 hover:text-primary text-sm font-medium transition-colors" href="#">Termeni
                        și Condiții</a>
                    <a className="text-slate-400 hover:text-primary text-sm font-medium transition-colors" href="#">Politica
                        de Confidențialitate</a>
                </div>
            </footer>
        </main>
    );
}
