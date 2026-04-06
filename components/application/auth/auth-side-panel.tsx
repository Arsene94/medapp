import Image from "next/image";
import {
  Activity,
  HeartPulse,
  Headset,
  LockKeyhole,
  NotebookText,
  PlaneTakeoff,
  ShieldCheck,
  Stethoscope,
} from "lucide-react";

function AuthFeature({
  description,
  icon,
  title,
}: {
  description: string;
  icon: React.ReactNode;
  title: string;
}) {
  return (
    <div className="flex items-start gap-4">
      <div className="rounded-full bg-[#008080]/10 p-3 text-[#006565]">
        {icon}
      </div>
      <div>
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="text-[#3e4949]">{description}</p>
      </div>
    </div>
  );
}

type AuthSidePanelProps = {
  variant?: "default" | "immersive";
};

export function AuthSidePanel({
  variant = "default",
}: AuthSidePanelProps = {}) {
  if (variant === "immersive") {
    return (
      <div
        className="relative hidden overflow-hidden bg-[#006565] p-16 md:flex md:flex-col md:justify-between"
        style={{
          backgroundImage:
            "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.05) 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      >
        <div className="absolute top-0 right-0 p-8 opacity-10">
          <HeartPulse className="h-[200px] w-[200px] text-white" strokeWidth={1.2} />
        </div>
        <div className="absolute bottom-1/4 left-[-20px] rotate-12 opacity-10">
          <Stethoscope className="h-[150px] w-[150px] text-white" strokeWidth={1.2} />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-[#006565] via-[#006565] to-[#008080] opacity-90" />

        <div className="relative z-10">
          <div className="mb-12 flex items-center gap-2">
            <Activity className="text-white" size={32} strokeWidth={2.5} />
            <span className="application-headline text-2xl font-black tracking-tight text-white">
              MedVoyage
            </span>
          </div>
        </div>

        <div className="relative z-10 space-y-6">
          <div className="space-y-4">
            <span className="application-headline inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-white/80">
              MedVoyage Precision
            </span>
            <h2 className="application-headline text-5xl leading-[1.1] font-extrabold tracking-tight text-white">
              Bine ai revenit în sanctuarul tău medical.
            </h2>
            <p className="max-w-sm text-lg text-[#e3fffe]/80">
              O experiență premium de îngrijire medicală, creată pentru liniștea
              ta.
            </p>
          </div>

          <div className="flex gap-4 pt-8 text-white/40">
            <ShieldCheck size={24} strokeWidth={2} />
            <LockKeyhole size={24} strokeWidth={2} />
            <NotebookText size={24} strokeWidth={2} />
          </div>
        </div>

        <div className="relative z-10 mt-auto" />
      </div>
    );
  }

  return (
    <div className="hidden lg:flex flex-col space-y-8 pr-12">
      <div className="space-y-4">
        <h1 className="application-headline text-5xl font-extrabold text-[#0d1c2f] leading-tight tracking-tight">
          Începe călătoria ta spre o sănătate fără granițe.
        </h1>
        <p className="text-xl text-[#3e4949] leading-relaxed font-light">
          MedVoyage reunește tehnologia de ultimă oră cu grija umană pentru a-ți
          oferi acces la cele mai bune soluții clinice globale.
        </p>
      </div>
      <div className="space-y-6 pt-4">
        <AuthFeature
          description="Conectare directă cu rețele medicale acreditate internațional."
          icon={<ShieldCheck size={22} />}
          title="Acces la clinici de top"
        />
        <AuthFeature
          description="O echipă dedicată gata să te ghideze în fiecare etapă a tratamentului."
          icon={<Headset size={22} />}
          title="Asistență 24/7"
        />
        <AuthFeature
          description="Planificare completă pentru călătoria și cazarea ta în scop medical."
          icon={<PlaneTakeoff size={22} />}
          title="Concierge Medical"
        />
      </div>
      <div className="relative mt-8 rounded-[1rem] overflow-hidden aspect-video shadow-2xl shadow-[#0d1c2f]/5">
        <Image
          alt="Modern Hospital Interior"
          className="object-cover w-full h-full"
          fill
          sizes="(min-width: 1024px) 40vw, 100vw"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCY6FhY9gKjsdNIfYzqbCOwmu6KkMpz4Es4mZjNLex9qHEqn52FqW1x1gU7cBVQ49eSit90Zn5M4RM19g4LW99plIy5K1E-_wrv3C5yqlz2HzrEvztV-vmPJsIRBMWy0VrmYettB4J8Wv0YI1Yd9IN0kgZ8LRzJ-vnKbqI6EmK5en5jGXXwgjJ9FcBQwNwjxDOlHZL4HL8rj6BnIOwwQI-otw53FPu1BsQOC6W9kvB8mKuf8OB3GSv-MtztpbN0AjxLcKLCOczPHA"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d1c2f]/40 to-transparent" />
      </div>
    </div>
  );
}
