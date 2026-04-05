import { Headset, PlaneTakeoff, ShieldCheck } from "lucide-react";

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

export function AuthSidePanel() {
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
        <img
          alt="Modern Hospital Interior"
          className="object-cover w-full h-full"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCY6FhY9gKjsdNIfYzqbCOwmu6KkMpz4Es4mZjNLex9qHEqn52FqW1x1gU7cBVQ49eSit90Zn5M4RM19g4LW99plIy5K1E-_wrv3C5yqlz2HzrEvztV-vmPJsIRBMWy0VrmYettB4J8Wv0YI1Yd9IN0kgZ8LRzJ-vnKbqI6EmK5en5jGXXwgjJ9FcBQwNwjxDOlHZL4HL8rj6BnIOwwQI-otw53FPu1BsQOC6W9kvB8mKuf8OB3GSv-MtztpbN0AjxLcKLCOczPHA"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d1c2f]/40 to-transparent" />
      </div>
    </div>
  );
}
