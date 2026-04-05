import { ApplicationMobileNav } from "@/components/application/form/application-mobile-nav";
import {NavBar} from "@/components/application/general/NavBar";
import {Footer} from "@/components/application/general/Footer";

type ApplicationShellProps = {
  children: React.ReactNode;
  locale: string;
};

export function ApplicationShell({
  children,
  locale,
}: ApplicationShellProps) {
  return (
    <div className="application-flow flex min-h-screen flex-col">
      <NavBar locale={locale} />
      {children}
      <ApplicationMobileNav />
      <Footer />
    </div>
  );
}
