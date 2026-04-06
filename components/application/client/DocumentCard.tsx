import { ApplicationIcon, type ApplicationIconName } from "@/components/application/form/application-icon";

type DocumentCardProps = {
  colorClass?: string;
  date: string;
  icon: ApplicationIconName;
  size: string;
  tag: string;
  title: string;
  urgent?: boolean;
};

export function DocumentCard({
  title,
  date,
  size,
  colorClass,
  icon,
  urgent = false,
  tag,
}: DocumentCardProps) {
  return (
    <div
      className={`group flex flex-col gap-4 rounded-3xl bg-surface-container-low p-6 transition-all hover:bg-surface-container-lowest hover:shadow-xl hover:shadow-slate-200/50 ${
        urgent ? "relative overflow-hidden bg-surface-container-lowest" : ""
      }`}
    >
      {urgent ? (
        <div className="absolute -right-16 -top-16 h-32 w-32 rounded-full bg-primary/5 transition-transform duration-700 group-hover:scale-150"></div>
      ) : null}

      <div className="relative z-10 flex items-start justify-between">
        <div className={`flex h-14 w-14 items-center justify-center rounded-2xl ${colorClass}`}>
          <ApplicationIcon name={icon} className="text-3xl" />
        </div>
        <span
          className={`rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider ${
            urgent
              ? "bg-error-container text-on-error-container"
              : "bg-surface-container-highest text-on-surface-variant"
          }`}
        >
          {tag}
        </span>
      </div>

      <div className="relative z-10 space-y-1">
        <h3 className="font-headline text-lg font-bold tracking-tight text-on-surface">{title}</h3>
        <p className="text-sm font-medium text-slate-500">{date}</p>
      </div>

      <div className="relative z-10 mt-2 flex items-center gap-2">
        <span className="rounded-full bg-surface-container-highest px-4 py-1.5 text-[11px] font-bold text-on-surface-variant">
          {size}
        </span>
      </div>

      <div className="relative z-10 mt-4 flex gap-3">
        <button
          className={`flex flex-1 items-center justify-center gap-2 rounded-2xl py-3 font-bold transition-colors ${
            urgent
              ? "bg-surface-container-low text-primary hover:bg-surface-container"
              : "border border-surface-container-highest bg-surface-container-lowest text-slate-700 hover:bg-surface-container"
          }`}
          type="button"
        >
          <ApplicationIcon name="visibility" className="text-lg" />
          Vezi
        </button>
        <button
          className="flex h-12 w-12 items-center justify-center rounded-2xl border-2 border-surface-container-highest text-slate-400 transition-all hover:border-primary/20 hover:text-primary"
          type="button"
        >
          <ApplicationIcon name="download" />
        </button>
      </div>
    </div>
  );
}
