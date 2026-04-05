import {Link} from '@/i18n/navigation';

import { ApplicationIcon } from "@/components/application/form/application-icon";
import { ApplicationLinearProgressHeader } from "@/components/application/form/application-progress";
import { recentDocuments } from "@/components/application/form/data";

type UploadStepProps = {
  locale: string;
};

export function UploadStep({ locale }: UploadStepProps) {
  return (
    <main className="mx-auto w-full max-w-5xl flex-1 px-6 pb-20 pt-32">
      <ApplicationLinearProgressHeader
        progressClassName="w-1/3"
        rightSlot={
          <div className="text-right">
            <p className="text-sm font-medium text-slate-500">
              Urmează: Detalii Clinice
            </p>
          </div>
        }
        stepLabel="Pasul 01 / 03"
        title="Încărcare Documente"
      />

      <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
        <div className="space-y-6 lg:col-span-8">
          <div className="group relative">
            <div className="absolute -inset-1 rounded-[1rem] bg-gradient-to-r from-[#006565] to-[#008080] opacity-10 blur transition duration-1000 group-hover:opacity-20" />
            <div className="relative flex min-h-[400px] flex-col items-center justify-center rounded-[1rem] border-2 border-dashed border-[#bdc9c8] bg-white p-12 text-center transition-all duration-300 hover:bg-[#eff4ff]">
              <input
                accept=".pdf,.jpg,.jpeg,.png,.dcm,.dicom"
                className="sr-only"
                id="application-upload-input"
                multiple
                type="file"
              />
              <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[#008080]/10">
                <ApplicationIcon
                  className="text-[#006565]"
                  name="upload_file"
                  size={40}
                />
              </div>
              <h3 className="application-headline mb-2 text-2xl font-bold tracking-[-0.03em] text-[#0d1c2f]">
                Trage documentele aici
              </h3>
              <p className="mb-8 max-w-xs text-slate-500">
                Încarcă radiografii, rezultate RMN sau dosarul tău medical în
                format PDF, JPG sau DICOM.
              </p>
              <label
                className="cursor-pointer rounded-full bg-[#006565] px-8 py-4 font-bold text-white shadow-lg shadow-[#006565]/20 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                htmlFor="application-upload-input"
              >
                Selectează Fisiere
              </label>
              <div className="mt-8 flex w-full max-w-md justify-around border-t border-[#dde9ff] pt-8 text-slate-400">
                {[
                  "Max 50MB",
                  "Format DICOM",
                  "Criptare AES",
                ].map((item) => (
                  <div className="flex items-center gap-2" key={item}>
                    <ApplicationIcon name="check_circle" size={14} />
                    <span className="text-xs font-medium uppercase">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex items-start gap-4 rounded-[1rem] bg-[#eff4ff] p-6">
            <ApplicationIcon className="text-[#006565]" name="info" />
            <div>
              <h4 className="font-bold text-[#0d1c2f]">
                Instrucțiuni de scanare
              </h4>
              <p className="mt-1 text-sm leading-relaxed text-slate-600">
                Asigură-te că toate documentele scanate sunt lizibile. Pentru
                radiografii, preferăm formatul original digital (DICOM) pentru
                o analiză de înaltă precizie.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-6 lg:col-span-4">
          <div className="relative overflow-hidden rounded-[1rem] bg-[#006565] p-8 text-white shadow-xl shadow-[#006565]/10">
            <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-white/10 blur-3xl" />
            <ApplicationIcon className="mb-4" name="verified_user" size={30} />
            <h3 className="application-headline mb-4 text-xl font-bold">
              Securitate Certificată
            </h3>
            <p className="mb-6 text-sm leading-relaxed text-white/80">
              Datele tale sunt protejate conform standardelor{" "}
              <span className="font-bold">HIPAA</span> și{" "}
              <span className="font-bold">GDPR</span>. Toate fișierele sunt
              criptate end-to-end și stocate pe servere medicale securizate.
            </p>
            <div className="flex gap-4">
              <div className="rounded bg-white/20 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.22em]">
                TLS 1.3
              </div>
              <div className="rounded bg-white/20 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.22em]">
                ISO 27001
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center space-y-4 rounded-[1rem] bg-[#d5e3fd] p-8">
            <Link
              className="mx-auto flex items-center justify-center gap-3 rounded-full bg-orange-500 px-10 py-5 text-lg font-bold text-white shadow-xl shadow-orange-500/30 transition-all duration-300 hover:scale-[1.01] hover:bg-orange-600 active:scale-[0.99]"
              href={`/application/consult`}
            >
              Continuă pasul următor
              <ApplicationIcon name="arrow_forward" />
            </Link>
            <p className="text-center text-xs text-slate-500">
              Prin continuarea procesului, confirmi că ești proprietarul sau
              deții dreptul de a procesa aceste documente medicale.
            </p>
          </div>

          <div className="space-y-4 rounded-[1rem] border border-[#bdc9c8]/20 bg-white p-6">
            <h4 className="text-sm font-bold uppercase tracking-[0.16em] text-[#0d1c2f]">
              Documente Recente
            </h4>
            <div className="space-y-3">
              {recentDocuments.map((document) => (
                <div
                  className="flex items-center justify-between rounded-lg bg-[#eff4ff] p-3"
                  key={document.name}
                >
                  <div className="flex items-center gap-3">
                    <ApplicationIcon
                      className="text-[#006565]"
                      name={document.icon}
                    />
                    <span className="max-w-[120px] truncate text-xs font-medium">
                      {document.name}
                    </span>
                  </div>
                  <span className="text-[10px] font-bold text-slate-400">
                    {document.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
