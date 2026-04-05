const steps = [
  {
    desc: "Descarci aplicația și încarci documentele medicale în siguranță.",
    step: "01",
    title: "Creezi profilul",
  },
  {
    desc: "În 48h, consiliul nostru medical îți trimite planuri de tratament de la mai multe clinici.",
    step: "02",
    title: "Primești oferte",
  },
  {
    desc: "Compari costurile reale și validezi oferta direct din telefon. Noi ne ocupăm de zbor.",
    step: "03",
    title: "Alegi și rezervi",
  },
  {
    desc: "Te întâmpinăm la aeroport. Ai suport 24/7 pe durata intervenției și recuperării.",
    step: "04",
    title: "Călătorești fără griji",
  },
];

function TimelineStep({
  animationDelay,
  desc,
  step,
  title,
}: {
  animationDelay: string;
  desc: string;
  step: string;
  title: string;
}) {
  return (
    <div className="relative z-10 flex flex-col items-center md:items-start text-center md:text-left">
      <div className="w-24 h-24 rounded-full bg-teal-900 border-4 border-teal-950 flex items-center justify-center text-3xl font-extrabold text-teal-400 mb-6 shadow-xl relative">
        {step}
        <div
          className="absolute -inset-2 rounded-full border border-teal-800 animate-ping"
          style={{ animationDelay, animationDuration: "3s" }}
        ></div>
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-teal-200/80 text-sm leading-relaxed">{desc}</p>
    </div>
  );
}

export function HowItWorksSection() {
  return (
    <section
      id="cum-functioneaza"
      className="py-24 bg-teal-950 text-white relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
            Tratamentul tău la doar 4 pași distanță
          </h2>
          <p className="text-teal-100 text-lg">
            Am simplificat procesul de turism medical, transformându-l într-o
            experiență digitală fluidă.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-teal-800 z-0"></div>

          {steps.map((item, index) => (
            <TimelineStep
              key={item.step}
              animationDelay={`${index * 0.5}s`}
              desc={item.desc}
              step={item.step}
              title={item.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
