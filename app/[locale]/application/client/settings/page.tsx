import {ClientTopBar} from "@/components/application/client/TopBar";
import {ApplicationIcon} from "@/components/application/form/application-icon";
import App from "next/app";

type Props = {
    params: Promise<{ locale: string }>;
};

export default async function Page({ params }: Props) {
    const {locale} = await params;

    return (
        <div className="flex flex-col flex-1">
            <ClientTopBar title="Setări" />
            <main className="flex-1 px-8 lg:px-12 bg-surface min-h-screen pb-24 md:pb-12">
                <div className="max-w-5xl mx-auto px-12 py-8">
                    <div className="grid grid-cols-12 gap-8">
                        <section className="col-span-12 lg:col-span-8 space-y-8">
                            <div
                                className="bg-surface-container-lowest rounded-xl p-8 shadow-sm relative overflow-hidden">
                                <div
                                    className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-primary-container"></div>
                                <div className="flex items-start gap-8">
                                    <div className="relative group">
                                        <img alt="Avatar"
                                             className="w-32 h-32 rounded-3xl object-cover shadow-lg group-hover:opacity-90 transition-opacity"
                                             src="https://lh3.googleusercontent.com/aida-public/AB6AXuA7POuPJxvlwaiTik48Lq0rOKJ7bK5wCcJTy2-YAo9H-5V2uzZcBE1RLF1YQTj5blWa6jqBC4WFwYZxmIxgmyGHeJyB-I4R3PovtlQHAzVukuz8LN_ghDhGHngnwzqp1tWrbX5czJxgoBOR0Bl8HoGYj5vT05Jsl4i0HiyXeN6yGDdASKfjEyqoNN7Mbbu55kQjqJr12p4Cu3yEVobt9ewa7SAo8jWeKiBMd0NrhzwYNOUy0EAj_FaOWqV-zZ8ErmRSZB7-xlYgOg"/>
                                        <button
                                            className="absolute -bottom-2 -right-2 bg-primary text-on-primary w-10 h-10 rounded-full flex items-center justify-center shadow-md hover:scale-110 transition-transform">
                                            <ApplicationIcon name="photo_camera" className="text-xl" />
                                        </button>
                                    </div>
                                    <div className="flex-1 space-y-6">
                                        <h2 className="text-xl font-bold text-on-surface">Profile Section</h2>
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="space-y-1">
                                                <label
                                                    className="text-[11px] font-bold uppercase tracking-wider text-slate-400 px-1">Full
                                                    Name</label>
                                                <input
                                                    className="w-full bg-surface-container-low border-none rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-primary-container font-medium"
                                                    type="text" defaultValue="Dr. Adrian Marinescu"/>
                                            </div>
                                            <div className="space-y-1">
                                                <label
                                                    className="text-[11px] font-bold uppercase tracking-wider text-slate-400 px-1">Email
                                                    Address</label>
                                                <input
                                                    className="w-full bg-surface-container-low border-none rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-primary-container font-medium"
                                                    type="email" defaultValue="adrian.marinescu@medvoyage.com"/>
                                            </div>
                                            <div className="space-y-1">
                                                <label
                                                    className="text-[11px] font-bold uppercase tracking-wider text-slate-400 px-1">Phone
                                                    Number</label>
                                                <input
                                                    className="w-full bg-surface-container-low border-none rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-primary-container font-medium"
                                                    type="tel" defaultValue="+40 722 123 456"/>
                                            </div>
                                            <div className="space-y-1">
                                                <label
                                                    className="text-[11px] font-bold uppercase tracking-wider text-slate-400 px-1">Language
                                                    Preference</label>
                                                <select
                                                    className="w-full bg-surface-container-low border-none rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-primary-container font-medium">
                                                    <option>Romanian</option>
                                                    <option>English</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-surface-container-low rounded-xl p-8 space-y-6">
                                <div className="flex items-center gap-3">
                                    <ApplicationIcon name="security" />
                                    <h2 className="text-xl font-bold">Security Section</h2>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div
                                        className="bg-surface-container-lowest p-6 rounded-2xl border border-outline-variant/10">
                                        <h3 className="font-bold text-sm mb-2">Change Password</h3>
                                        <p className="text-xs text-slate-500 mb-4">Last changed 3 months ago. We
                                            recommend regular updates.</p>
                                        <button
                                            className="px-6 py-2 bg-slate-100 text-slate-800 rounded-full text-xs font-bold hover:bg-slate-200 transition-colors">Update
                                            Password
                                        </button>
                                    </div>
                                    <div
                                        className="bg-surface-container-lowest p-6 rounded-2xl border border-outline-variant/10 flex items-center justify-between">
                                        <div>
                                            <h3 className="font-bold text-sm mb-1">Two-Factor Authentication</h3>
                                            <p className="text-xs text-slate-500">Secure your account via SMS or
                                                App.</p>
                                        </div>
                                        <label className="relative inline-flex items-center cursor-pointer">
                                            <input type="checkbox" defaultChecked className="sr-only peer"/>
                                            <div
                                                className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                                        </label>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-surface-container-low rounded-xl p-8 space-y-6">
                                <div className="flex items-center gap-3">
                                    <span className="material-symbols-outlined text-primary">gavel</span>
                                    <h2 className="text-xl font-bold">Medical Consent Section</h2>
                                </div>
                                <div className="space-y-4">
                                    <div className="flex items-start gap-4 p-4 bg-white/40 rounded-2xl">
                                        <div className="mt-1">
                                            <input type="checkbox" defaultChecked
                                                   className="w-5 h-5 rounded border-slate-300 text-primary focus:ring-primary"/>
                                        </div>
                                        <div>
                                            <p className="text-sm font-bold">GDPR Compliance & Data Processing</p>
                                            <p className="text-xs text-slate-500 mt-1 leading-relaxed">I consent to the
                                                collection and processing of my clinical data for the purpose of medical
                                                diagnostics and treatment planning as per the hospital's privacy
                                                protocol.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4 p-4 bg-white/40 rounded-2xl">
                                        <div className="mt-1">
                                            <input type="checkbox"
                                                   className="w-5 h-5 rounded border-slate-300 text-primary focus:ring-primary"/>
                                        </div>
                                        <div>
                                            <p className="text-sm font-bold">Anonymized Research Sharing</p>
                                            <p className="text-xs text-slate-500 mt-1 leading-relaxed">Allow sharing of
                                                anonymized medical case studies with the University Research Board to
                                                help advance neurological science.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className="col-span-12 lg:col-span-4 space-y-8">
                            <div className="bg-white rounded-xl shadow-xl shadow-slate-200/50 p-8 space-y-6">
                                <h2 className="text-lg font-bold">Notifications Section</h2>
                                <div className="space-y-6">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <div
                                                className="w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center text-primary">
                                                <ApplicationIcon name="mail" className="text-xl" />
                                            </div>
                                            <div>
                                                <p className="text-sm font-bold">Email alerts</p>
                                                <p className="text-[10px] text-slate-400">Monthly reports & activity</p>
                                            </div>
                                        </div>
                                        <label className="relative inline-flex items-center cursor-pointer">
                                            <input type="checkbox" defaultChecked className="sr-only peer"/>
                                            <div
                                                className="w-10 h-5 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-5 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></div>
                                        </label>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <div
                                                className="w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center text-primary">
                                                <ApplicationIcon name="sms" className="text-xl" />
                                            </div>
                                            <div>
                                                <p className="text-sm font-bold">SMS alerts</p>
                                                <p className="text-[10px] text-slate-400">Emergency & Appointment</p>
                                            </div>
                                        </div>
                                        <label className="relative inline-flex items-center cursor-pointer">
                                            <input type="checkbox" className="sr-only peer"/>
                                            <div
                                                className="w-10 h-5 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-5 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></div>
                                        </label>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <div
                                                className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center text-tertiary">
                                                <ApplicationIcon name="campaign" className="text-xl" />
                                            </div>
                                            <div>
                                                <p className="text-sm font-bold">Marketing updates</p>
                                                <p className="text-[10px] text-slate-400">News & Special offers</p>
                                            </div>
                                        </div>
                                        <label className="relative inline-flex items-center cursor-pointer">
                                            <input type="checkbox" className="sr-only peer"/>
                                            <div
                                                className="w-10 h-5 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-5 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></div>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-surface-container-highest p-8 rounded-xl space-y-4">
                                <h3 className="font-bold text-sm text-teal-900">Need Assistance?</h3>
                                <p className="text-xs text-slate-600 leading-relaxed">If you need help configuring your
                                    clinical dashboard or have data privacy questions, our 24/7 concierge is
                                    available.</p>
                                <button
                                    className="w-full py-3 border-2 border-primary text-primary rounded-full font-bold text-sm hover:bg-primary hover:text-white transition-all flex items-center justify-center gap-2">
                                    <ApplicationIcon name="info" className="text-sm" />
                                    Contact Support
                                </button>
                            </div>
                            <div className="sticky top-24 pt-4">
                                <button
                                    className="w-full py-4 bg-primary text-on-primary rounded-full font-bold shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-3">
                                    <ApplicationIcon name="save" />
                                    Save All Changes
                                </button>
                                <p className="text-center text-[10px] text-slate-400 mt-4 uppercase tracking-[0.1em] font-bold">Last
                                    saved 12 minutes ago</p>
                            </div>
                        </section>
                    </div>
                </div>
            </main>
        </div>
    );
}
