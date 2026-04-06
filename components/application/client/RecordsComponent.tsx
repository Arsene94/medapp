import Image from "next/image";

import { DocumentCard } from "@/components/application/client/DocumentCard";
import { ApplicationIcon } from "@/components/application/form/application-icon";
import { Link } from "@/i18n/navigation";

const recordTabs = [
  { key: "all", label: "Toate" },
  { key: "blood-tests", label: "Analize Sânge" },
  { key: "imaging", label: "Imagistică (RMN/CT)" },
  { key: "prescriptions", label: "Rețete" },
  { key: "discharge-notes", label: "Bilete de Ieșire" },
] as const;

const tabLabels = new Map(recordTabs.map((tab) => [tab.key, tab.label]));

const records = [
  {
    id: "blood-primary",
    category: "blood-tests",
    type: "document-card",
    title: "Set Complet Analize Sânge",
    date: "14 Octombrie 2023 • Dr. Elena Ionescu",
    size: "PDF • 2.4 MB",
    icon: "biotech",
    colorClass: "bg-error-container/30 text-error",
    tag: "Urgent",
    urgent: true,
  },
  {
    id: "imaging-rmn",
    category: "imaging",
    type: "imaging-card",
    title: "RMN Coloană Cervicală",
    date: "12 Octombrie 2023 • Centrul Affidea",
    size: "DICOM • 128 MB",
    tag: "Imagistică",
  },
  {
    id: "prescription-main",
    category: "prescriptions",
    type: "document-card",
    title: "Rețetă Compensată Serie B",
    date: "08 Octombrie 2023 • Dr. Adrian M.",
    size: "Imagine • 1.1 MB",
    icon: "prescriptions",
    colorClass: "bg-tertiary-fixed text-on-tertiary-fixed-variant",
    tag: "Rețetă",
  },
  {
    id: "discharge-primary",
    category: "discharge-notes",
    type: "document-card",
    title: "Externare Spitalul Militar",
    date: "25 Septembrie 2023 • Secția Cardiologie",
    size: "PDF • 4.5 MB",
    icon: "description",
    colorClass: "bg-primary-container text-on-primary-container",
    tag: "Bilet Ieșire",
  },
  {
    id: "blood-secondary",
    category: "blood-tests",
    type: "document-card",
    title: "Panou Metabolic Bazal",
    date: "10 August 2023 • Laborator Synevo",
    size: "PDF • 0.8 MB",
    icon: "biotech",
    colorClass: "bg-slate-200 text-slate-600",
    tag: "Analize",
  },
  {
    id: "upload-card",
    category: "all",
    type: "upload-card",
  },
] as const;

export type RecordsTabKey = (typeof recordTabs)[number]["key"];

function isRecordsTabKey(value: string): value is RecordsTabKey {
  return recordTabs.some((tab) => tab.key === value);
}

export function getRecordsTabFromSearchParam(value: string | string[] | undefined): RecordsTabKey {
  const candidate = Array.isArray(value) ? value[0] : value;

  if (candidate && isRecordsTabKey(candidate)) {
    return candidate;
  }

  return "all";
}

function getTabHref(tabKey: RecordsTabKey) {
  return tabKey === "all" ? "/application/client/records" : `/application/client/records?tab=${tabKey}`;
}

function getVisibleRecords(activeTab: RecordsTabKey) {
  if (activeTab === "all") {
    return records;
  }

  return records.filter((record) => record.category === activeTab || record.type === "upload-card");
}

export function RecordsComponent({ activeTab }: { activeTab: RecordsTabKey }) {
  const visibleRecords = getVisibleRecords(activeTab);

  return (
    <>
      <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-center">
        <div className="flex items-center gap-2 overflow-x-auto rounded-full bg-surface-container-low p-1.5 no-scrollbar">
          {recordTabs.map((tab) => {
            const active = tab.key === activeTab;

            return (
              <Link
                key={tab.key}
                href={getTabHref(tab.key)}
                className={`whitespace-nowrap rounded-full px-6 py-2 text-sm font-medium transition-colors ${
                  active
                    ? "bg-surface-container-lowest font-semibold text-primary shadow-sm"
                    : "text-slate-500 hover:text-primary"
                }`}
              >
                {tab.label}
              </Link>
            );
          })}
        </div>

        <button className="flex items-center gap-3 rounded-full bg-primary px-8 py-3.5 font-bold text-on-primary shadow-lg shadow-primary/10 transition-all hover:shadow-primary/20 active:scale-95">
          <ApplicationIcon name="upload_file" />
          Adaugă Document
        </button>
      </div>

      <div className="mb-4 flex items-center justify-between gap-4">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-slate-400">Categorie activă</p>
          <h3 className="mt-2 font-headline text-2xl font-bold text-teal-900">
            {tabLabels.get(activeTab)}
          </h3>
        </div>
        <p className="text-sm font-medium text-slate-500">
          {visibleRecords.length} elemente afișate
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
        {visibleRecords.map((record) => {
          if (record.type === "document-card") {
            return (
              <DocumentCard
                key={record.id}
                urgent={"urgent" in record ? record.urgent : false}
                title={record.title}
                date={record.date}
                size={record.size}
                icon={record.icon}
                colorClass={record.colorClass}
                tag={record.tag}
              />
            );
          }

          if (record.type === "imaging-card") {
            return (
              <div
                key={record.id}
                className="group flex flex-col gap-4 rounded-3xl bg-surface-container-low p-6 transition-all hover:bg-surface-container-lowest hover:shadow-xl hover:shadow-slate-200/50"
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <ApplicationIcon name="radiology" className="text-3xl" />
                  </div>
                  <span className="rounded-full bg-surface-container-highest px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-on-surface-variant">
                    {record.tag}
                  </span>
                </div>
                <div className="space-y-1">
                  <h3 className="font-headline text-lg font-bold tracking-tight text-on-surface">
                    {record.title}
                  </h3>
                  <p className="text-sm font-medium text-slate-500">{record.date}</p>
                </div>
                <div className="mt-2 flex items-center gap-2">
                  <span className="rounded-full bg-surface-container-highest px-4 py-1.5 text-[11px] font-bold text-on-surface-variant">
                    {record.size}
                  </span>
                </div>
                <div className="mt-4 flex gap-3">
                  <button className="flex flex-1 items-center justify-center gap-2 rounded-2xl bg-primary py-3 font-bold text-on-primary shadow-md transition-all hover:shadow-lg">
                    <ApplicationIcon name="view_in_ar" className="text-lg" />
                    Vezi DICOM
                  </button>
                  <button className="flex h-12 w-12 items-center justify-center rounded-2xl border-2 border-surface-container-highest text-slate-400 transition-all hover:border-primary/20 hover:text-primary">
                    <ApplicationIcon name="download" />
                  </button>
                </div>
              </div>
            );
          }

          return (
            <div
              key={record.id}
              className="group flex cursor-pointer flex-col items-center justify-center gap-3 rounded-3xl border-2 border-dashed border-surface-container-highest p-6 text-center transition-all hover:border-primary/40"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-surface-container-low text-slate-400 transition-all group-hover:bg-primary/5 group-hover:text-primary">
                <ApplicationIcon name="add" className="text-4xl" />
              </div>
              <div className="space-y-1">
                <h3 className="font-headline text-lg font-bold text-slate-600 transition-colors group-hover:text-primary">
                  Încarcă Document Nou
                </h3>
                <p className="max-w-[200px] text-xs text-slate-400">
                  Trage documentele aici sau dă click pentru a naviga în calculator
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2 flex flex-col items-center gap-8 rounded-3xl bg-surface-container-low p-8 md:flex-row">
          <div className="flex-1 space-y-4">
            <h2 className="font-headline text-xl font-bold text-teal-900">Spațiu de stocare utilizat</h2>
            <p className="text-sm text-slate-600">
              Ai utilizat 420 MB din totalul de 2 GB disponibili pentru documente medicale de înaltă rezoluție.
            </p>
            <div className="h-3 w-full overflow-hidden rounded-full bg-surface-container-highest">
              <div className="h-full w-[21%] rounded-full bg-primary shadow-sm"></div>
            </div>
            <div className="flex justify-between text-[11px] font-bold uppercase tracking-widest text-slate-500">
              <span>21% Ocupat</span>
              <span>1.58 GB Liber</span>
            </div>
          </div>
          <div className="aspect-square w-full overflow-hidden rounded-3xl shadow-2xl md:w-48">
            <Image
              className="h-full w-full object-cover"
              alt="Storage"
              height={384}
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCMGFOs0-lgZDYzP2O6OwYB1tEeKgkTMINTUXpO46OmJLbBrnvSYgBrX96cffC5e52u_1DI0j2sBtdGLqGdqq_nZx8fevUieOcyq22Jp3yJ9ggIZfptnO2m597wvrkR7znGUK5zILkkBy6cRTfp5IFqsh1OX1_q7zausjvM81iQ9JcOclK6qbaag_F7hSRehAVbal4Tg50iSAcLpJcCu0FXdcbj6d_Qm4hwA85MH7zmHIyROQc3MTMnBuPjyapEaDO8pgc00WUWzw"
              width={384}
            />
          </div>
        </div>
        <div className="flex flex-col justify-between rounded-3xl bg-primary p-8 text-on-primary">
          <ApplicationIcon name="security" className="text-4xl opacity-50" />
          <div className="mt-4 space-y-2">
            <h3 className="font-headline text-lg font-bold">Criptare de tip militar</h3>
            <p className="text-xs leading-relaxed text-primary-fixed opacity-90">
              Toate documentele tale sunt criptate end-to-end și stocate conform standardelor GDPR și HIPAA.
            </p>
          </div>
          <a
            className="mt-6 text-xs font-bold underline underline-offset-4 transition-colors hover:text-white"
            href="#"
          >
            Află mai multe despre securitate
          </a>
        </div>
      </div>
    </>
  );
}
