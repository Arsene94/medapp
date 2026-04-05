import { cn } from "@/lib/cn";
import { ApplicationIcon } from "@/components/application/form/application-icon";
import {
  guaranteeItems,
  type OfferCardData,
} from "@/components/application/form/data";

type OfferCardProps = {
  data: OfferCardData;
};

export function OfferCard({ data }: OfferCardProps) {
  return (
    <div className={cn("group relative", data.wrapperClassName)}>
      <div
        className={cn(
          "relative flex flex-col items-start gap-8 overflow-hidden rounded-[1rem] p-8 md:flex-row",
          data.cardClassName,
        )}
      >
        <div className="-ml-4 -mt-4 h-56 w-full shrink-0 overflow-hidden rounded-[1rem] shadow-2xl md:w-56">
          <img
            alt={data.imageAlt}
            className="h-full w-full object-cover"
            src={data.imageSrc}
          />
        </div>

        <div className="w-full flex-1">
          <div className="mb-4 flex flex-col items-start justify-between gap-4 sm:flex-row">
            <div>
              <span
                className={cn(
                  "mb-2 inline-flex items-center rounded-full px-3 py-1 text-xs font-bold uppercase tracking-[-0.03em]",
                  data.badgeClassName,
                )}
              >
                {data.badge}
              </span>
              <h3 className="application-headline text-2xl font-bold text-[#0d1c2f]">
                {data.clinic}
              </h3>
            </div>
            <div className="text-left sm:text-right">
              <div className="text-sm font-medium text-[#515f74]">De la</div>
              <div
                className={cn(
                  "application-headline text-3xl font-black",
                  data.priceClassName,
                )}
              >
                {data.price}
              </div>
            </div>
          </div>

          <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {data.features.map((feature, index) => (
              <div
                className="flex items-center gap-2 text-[#3e4949]"
                key={`${feature.label}-${index}`}
              >
                <ApplicationIcon
                  className="text-[#006565]"
                  name={feature.icon}
                  size={20}
                />
                <span
                  className={cn(
                    "text-sm font-medium",
                    feature.label.includes("Rată succes") && "italic",
                  )}
                >
                  {feature.label}
                </span>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <button
              className={cn(
                "flex-1 rounded-full px-6 py-4 font-bold transition-all hover:scale-[1.02]",
                data.primaryButtonClassName,
              )}
              type="button"
            >
              {data.primaryButtonLabel}
            </button>
            <button
              className={cn(
                "rounded-full px-6 py-4 font-bold transition-colors",
                data.secondaryButtonClassName,
              )}
              type="button"
            >
              {data.secondaryButtonLabel}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export function MedVoyageGuaranteeCard() {
  return (
    <div className="rounded-[1rem] bg-[#d5e3fd] p-8">
      <h4 className="mb-6 flex items-center gap-2 text-xl font-bold">
        <ApplicationIcon className="text-[#974000]" name="stars" />
        Garanția MedVoyage
      </h4>
      <ul className="space-y-6">
        {guaranteeItems.map((item) => (
          <li className="flex gap-4" key={item.title}>
            <div className="h-fit rounded-lg bg-white p-2">
              <ApplicationIcon className="text-[#006565]" name={item.icon} />
            </div>
            <div>
              <p className="text-sm font-bold">{item.title}</p>
              <p className="mt-1 text-xs text-[#515f74]">{item.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function PersonalizedOfferCard() {
  return (
    <div className="group relative overflow-hidden rounded-[1rem] bg-[#be5300] p-8 text-white">
      <div className="absolute right-0 top-0 p-4 opacity-10 transition-transform group-hover:scale-110">
        <ApplicationIcon name="savings" size={96} />
      </div>
      <h4 className="mb-2 text-lg font-bold">
        Doriți o ofertă personalizată?
      </h4>
      <p className="mb-6 text-sm opacity-90">
        Dacă aveți un buget specific, experții noștri pot negocia pachete
        alternative.
      </p>
      <button
        className="relative z-10 w-full rounded-full bg-white py-3 font-bold text-[#974000] transition-all hover:shadow-lg"
        type="button"
      >
        Discută cu un Agent
      </button>
    </div>
  );
}
