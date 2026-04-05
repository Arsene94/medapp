import { ApplicationFooter } from "@/components/application/form/application-footer";
import { ApplicationMobileNav } from "@/components/application/form/application-mobile-nav";
import { ApplicationTopNav } from "@/components/application/form/application-top-nav";

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
      <ApplicationTopNav locale={locale} />
      {children}
      <ApplicationMobileNav />
      <ApplicationFooter />
    </div>
  );
}
