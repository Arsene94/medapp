import { MedVoyageLogo } from "@/components/landing/medvoyage-logo";

const patientLinks = [
  "Cum funcționează",
  "Specialități medicale",
  "Prețuri și asigurări",
  "Întrebări frecvente",
];

const clinicLinks = [
  "Devino Partener",
  "Criterii de Acreditare JCI",
  "Portal Clinici",
];

const socialLinks = ["f", "in", "ig"];

function FooterLinkColumn({
  links,
  title,
}: {
  links: string[];
  title: string;
}) {
  return (
    <div>
      <h4 className="text-white font-bold mb-4">{title}</h4>
      <ul className="space-y-3 text-sm">
        {links.map((link) => (
          <li key={link}>
            <a href="#" className="hover:text-teal-400 transition-colors">
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 py-16 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="md:col-span-1">
          <MedVoyageLogo
            className="mb-6 text-white"
            iconContainerClassName="bg-teal-600 p-1.5 rounded-lg"
            iconSize={20}
            textClassName="text-xl font-bold tracking-tight"
          />
          <p className="text-sm leading-relaxed mb-6">
            Platforma ta digitală pentru turism medical sigur, transparent și
            accesibil oriunde în lume.
          </p>
        </div>

        <FooterLinkColumn links={patientLinks} title="Pacienți" />
        <FooterLinkColumn links={clinicLinks} title="Clinici" />

        <div>
          <h4 className="text-white font-bold mb-4">Contact</h4>
          <ul className="space-y-3 text-sm">
            <li>contact@medvoyage.app</li>
            <li>+40 700 000 000</li>
            <li>București, România</li>
            <li className="pt-2">
              <div className="flex gap-4">
                {socialLinks.map((socialLink) => (
                  <div
                    key={socialLink}
                    className="w-8 h-8 rounded-full bg-slate-800 hover:bg-teal-600 transition-colors cursor-pointer flex items-center justify-center text-white"
                  >
                    {socialLink}
                  </div>
                ))}
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-slate-900 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
        <p>© 2026 MedVoyage App. Toate drepturile rezervate.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white transition-colors">
            Termeni și condiții
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Politica de confidențialitate
          </a>
        </div>
      </div>
    </footer>
  );
}
