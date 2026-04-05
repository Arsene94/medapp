export function ApplicationFooter() {
  return (
    <footer className="mt-20 bg-[#ccdbf4] px-8 py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 md:flex-row">
        <div>
          <span className="application-headline text-lg font-black text-teal-800">
            MedVoyage
          </span>
          <p className="mt-2 text-sm text-[#515f74]">
            © 2024 Clinical Sanctuary Ecosystem. Toate drepturile rezervate.
          </p>
        </div>

        <div className="flex gap-8 text-sm font-medium text-[#515f74]">
          <a className="hover:text-[#006565]" href="#">
            Termeni și Condiții
          </a>
          <a className="hover:text-[#006565]" href="#">
            Politică de Confidențialitate
          </a>
          <a className="hover:text-[#006565]" href="#">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
