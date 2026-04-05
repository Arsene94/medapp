"use client";

import {
  BedDouble,
  Building2,
  Bus,
  CarFront,
  CheckCircle2,
  House,
  Stethoscope,
  Ban,
} from "lucide-react";
import { useState } from "react";

import { cn } from "@/lib/cn";

type TransportOption = "car" | "private" | "none";
type TransmissionOption = "manual" | "automatic";
type LocationOption = "near" | "center" | "none";

type TravelOptionCardProps = {
  badge?: React.ReactNode;
  children?: React.ReactNode;
  description: string;
  icon: React.ReactNode;
  onSelect: () => void;
  price: React.ReactNode;
  selected: boolean;
  title: string;
};

function TravelOptionCard({
  badge,
  children,
  description,
  icon,
  onSelect,
  price,
  selected,
  title,
}: TravelOptionCardProps) {
  return (
    <div
      aria-checked={selected}
      className={cn(
        "cursor-pointer rounded-[1rem] border-2 bg-white p-5 shadow-sm transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]",
        selected
          ? "border-[#006565] bg-[rgba(0,101,101,0.05)] shadow-[0_0_0_1px_#006565]"
          : "border-[#bdc9c8]/20 hover:border-[#006565]/40",
      )}
      onClick={onSelect}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          onSelect();
        }
      }}
      role="radio"
      tabIndex={0}
    >
      <div className="flex items-start gap-4">
        <div className="mt-1 text-slate-400">{icon}</div>
        <div className="flex-1">
          <div className="mb-1 flex items-center justify-between gap-3">
            <span className="text-base font-extrabold text-[#0d1c2f]">
              {title}
            </span>
            <div className="flex items-center gap-2">
              {badge}
              {price}
            </div>
          </div>
          <p className="mb-4 text-xs leading-tight text-[#515f74]">
            {description}
          </p>
          {children}
        </div>
        <div
          className={cn(
            "transition-all duration-300",
            selected ? "scale-100 opacity-100" : "scale-50 opacity-0",
          )}
        >
          <CheckCircle2 className="text-[#006565]" size={22} />
        </div>
      </div>
    </div>
  );
}

type TransmissionToggleProps = {
  onChange: (value: TransmissionOption) => void;
  value: TransmissionOption;
};

function TransmissionToggle({
  onChange,
  value,
}: TransmissionToggleProps) {
  return (
    <div className="rounded-lg border border-[#bdc9c8]/10 bg-white p-3">
      <p className="mb-2 text-[10px] font-bold uppercase tracking-[-0.03em] text-slate-400">
        Tip Transmisie
      </p>
      <div className="grid grid-cols-2 gap-2">
        {[
          { label: "Manuală", value: "manual" as const },
          { label: "Automată", value: "automatic" as const },
        ].map((option) => (
          <button
            className={cn(
              "rounded-md border px-3 py-1.5 text-center text-[11px] font-bold transition-all",
              value === option.value
                ? "border-[#006565] bg-white text-[#006565] shadow-sm"
                : "border-transparent bg-[#eff4ff] text-[#515f74]",
            )}
            key={option.value}
            onClick={(event) => {
              event.stopPropagation();
              onChange(option.value);
            }}
            type="button"
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
}

export function TravelConfigurationSection() {
  const [transport, setTransport] = useState<TransportOption>("none");
  const [transmission, setTransmission] =
    useState<TransmissionOption>("manual");
  const [location, setLocation] = useState<LocationOption>("none");
  const [lodgingIncluded, setLodgingIncluded] = useState(true);

  return (
    <section className="mb-16">
      <div className="rounded-[1rem] border border-[#bdc9c8]/30 bg-white p-8 shadow-sm">
        <div className="mb-10 flex flex-col justify-between gap-6 border-b border-[#bdc9c8]/10 pb-6 md:flex-row md:items-center">
          <div>
            <h2 className="application-headline text-2xl font-extrabold tracking-[-0.03em] text-[#0d1c2f]">
              Configurație Călătorie
            </h2>
            <p className="mt-1 text-sm text-[#515f74]">
              Personalizați detaliile logistice ale vizitei dumneavoastră
              medicale.
            </p>
          </div>

          <div className="flex items-center gap-3 rounded-full border border-[#bdc9c8]/20 bg-[#eff4ff] p-2">
            <span className="px-4 text-sm font-bold text-[#0d1c2f]">
              Cazare Inclusă
            </span>
            <label className="relative inline-flex cursor-pointer items-center">
              <input
                checked={lodgingIncluded}
                className="peer sr-only"
                onChange={() => setLodgingIncluded((value) => !value)}
                type="checkbox"
              />
              <div className="h-6 w-11 rounded-full bg-slate-200 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-[#006565] peer-checked:after:translate-x-full peer-checked:after:border-white" />
            </label>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div>
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#006565]/10">
                <Bus className="text-[#006565]" size={20} />
              </div>
              <h4 className="text-sm font-bold uppercase tracking-[0.22em] text-[#515f74]">
                Alegeți Transportul
              </h4>
            </div>

            <div
              aria-label="Transport"
              className="space-y-4"
              role="radiogroup"
            >
              <TravelOptionCard
                  description="Mă ocup singur de deplasările locale."
                  icon={<Ban size={22} />}
                  onSelect={() => setTransport("none")}
                  price={
                    <span className="text-xs font-bold text-slate-400">
                    Inclus
                  </span>
                  }
                  selected={transport === "none"}
                  title="Fără transport"
              />

              <TravelOptionCard
                badge={
                  <span className="rounded-full bg-teal-50 px-2 py-0.5 text-xs font-bold text-teal-600">
                    Popular
                  </span>
                }
                description="Autonomie totală pe durata șederii dumneavoastră."
                icon={<CarFront size={22} />}
                onSelect={() => setTransport("car")}
                price={null}
                selected={transport === "car"}
                title="Mașină Închiriată"
              >
                <TransmissionToggle
                  onChange={(value) => {
                    setTransmission(value);
                    setTransport("car");
                  }}
                  value={transmission}
                />
              </TravelOptionCard>

              <TravelOptionCard
                description="Șofer dedicat non-stop. Ideal pentru pacienții post-operatori."
                icon={<Bus size={22} />}
                onSelect={() => setTransport("private")}
                price={
                  <span className="text-sm font-black text-[#006565]">
                    + €120
                  </span>
                }
                selected={transport === "private"}
                title="Transfer Privat"
              />
            </div>
          </div>

          <div>
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#006565]/10">
                <House className="text-[#006565]" size={20} />
              </div>
              <h4 className="text-sm font-bold uppercase tracking-[0.22em] text-[#515f74]">
                Locație Cazare
              </h4>
            </div>

            <div
              aria-label="Locație cazare"
              className="space-y-4"
              role="radiogroup"
            >
              <TravelOptionCard
                  description="Am deja rezervată o locație proprie pentru ședere."
                  icon={<BedDouble size={22} />}
                  onSelect={() => setLocation("none")}
                  price={
                    <span className="text-xs font-bold text-slate-400">
                    Personalizat
                  </span>
                  }
                  selected={location === "none"}
                  title="Fără cazare"
              />
              <TravelOptionCard
                description="Timp de recuperare maximizat. Acces facil la personalul medical."
                icon={<Stethoscope size={22} />}
                onSelect={() => setLocation("near")}
                price={
                  <span className="text-sm font-black text-[#006565]">
                    + €300
                  </span>
                }
                selected={location === "near"}
                title="Lângă Clinică (Premium)"
              />

              <TravelOptionCard
                description="Aproape de obiective turistice și restaurante locale."
                icon={<Building2 size={22} />}
                onSelect={() => setLocation("center")}
                price={
                  <span className="text-xs font-bold text-slate-400">
                    Inclus
                  </span>
                }
                selected={location === "center"}
                title="Centrul Orașului"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
