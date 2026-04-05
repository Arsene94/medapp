import { Link } from "@/i18n/navigation";

import {
  AuraAssistantPanel,
  ConsultationObjectivesCard,
  ContextFolderCard,
} from "@/components/application/form/application-chat";
import { ApplicationIcon } from "@/components/application/form/application-icon";
import {
  ApplicationBackLink,
  ApplicationLinearProgressHeader,
} from "@/components/application/form/application-progress";

type ConsultStepProps = {
  locale: string;
};

export function ConsultStep({ locale }: ConsultStepProps) {
  return (
    <main className="mx-auto w-full max-w-6xl flex-1 px-6 pb-12 pt-32">
      <ApplicationBackLink href={`/application`} />

      <ApplicationLinearProgressHeader
        progressClassName="w-[66.6%] bg-[#008080]"
        rightSlot={
          <Link
            className="group flex items-center gap-2 rounded-full bg-[#006565] px-8 py-4 font-bold text-white shadow-lg shadow-[#006565]/20 transition-all hover:scale-[1.02]"
            href={`/application/offers`}
          >
            Vezi Oferte Medicale
            <ApplicationIcon
              className="transition-transform group-hover:translate-x-1"
              name="arrow_forward"
            />
          </Link>
        }
        stepLabel="Pasul 2 din 3"
        title="Consultanță AI"
      />

      <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
        <div className="space-y-6 lg:col-span-4">
          <ContextFolderCard />
          <ConsultationObjectivesCard />
        </div>

        <div className="lg:col-span-8">
          <AuraAssistantPanel />
        </div>
      </div>
    </main>
  );
}
