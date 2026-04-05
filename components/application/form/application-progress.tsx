import Link from "next/link";

import { cn } from "@/lib/cn";
import { ApplicationIcon } from "@/components/application/form/application-icon";

type ApplicationBackLinkProps = {
  href: string;
};

export function ApplicationBackLink({ href }: ApplicationBackLinkProps) {
  return (
    <Link
      className="group mb-6 flex items-center gap-2 font-bold text-[#006565] transition-opacity hover:opacity-80"
      href={href}
    >
      <ApplicationIcon
        className="transition-transform group-hover:-translate-x-1"
        name="arrow_back"
      />
      <span>Înapoi</span>
    </Link>
  );
}

type ApplicationLinearProgressHeaderProps = {
  progressClassName: string;
  rightSlot?: React.ReactNode;
  stepLabel: string;
  title: string;
};

export function ApplicationLinearProgressHeader({
  progressClassName,
  rightSlot,
  stepLabel,
  title,
}: ApplicationLinearProgressHeaderProps) {
  return (
    <div className="mb-12">
      <div className="mb-4 flex items-end justify-between gap-6">
        <div>
          <span className="text-xs font-bold uppercase tracking-[0.28em] text-[#006565]">
            {stepLabel}
          </span>
          <h1 className="application-headline mt-2 text-4xl font-extrabold tracking-[-0.04em] text-[#0d1c2f] md:text-5xl">
            {title}
          </h1>
        </div>
        {rightSlot ? <div className="hidden md:block">{rightSlot}</div> : null}
      </div>
      <div className="h-2 w-full overflow-hidden rounded-full bg-[#d5e3fd]">
        <div
          className={cn("h-full rounded-full bg-[#006565]", progressClassName)}
        />
      </div>
    </div>
  );
}

type ApplicationStepTrailProps = {
  currentStep: 1 | 2 | 3;
};

export function ApplicationStepTrail({
  currentStep,
}: ApplicationStepTrailProps) {
  const isComplete = (step: number) => step <= currentStep;
  const isCurrent = (step: number) => step === currentStep;

  return (
    <div className="mb-12 flex flex-col items-center">
      <div className="mb-4 flex items-center gap-4">
        {[1, 2, 3].map((step, index) => (
          <div className="flex items-center gap-4" key={step}>
            <div
              className={cn(
                "flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold text-white",
                isComplete(step) ? "bg-[#008080]" : "bg-[#d5e3fd] text-[#0d1c2f]",
                isCurrent(step) && "ring-4 ring-[#008080]/20",
              )}
            >
              {step}
            </div>
            {index < 2 ? (
              <div className="h-1 w-12 rounded-full bg-[#008080]" />
            ) : null}
          </div>
        ))}
      </div>
      <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#006565]">
        Pasul 3 din 3 • Finalizarea Selecției
      </p>
    </div>
  );
}
