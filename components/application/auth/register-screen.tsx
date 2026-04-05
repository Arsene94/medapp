"use client";

import { useRouter } from "@/i18n/navigation";
import {
  AuthCard,
  AuthField,
  AuthMainLayout,
  AuthSeparator,
  authIcons,
  SocialAuthButtons,
} from "@/components/application/auth/auth-form-parts";
import { AuthSidePanel } from "@/components/application/auth/auth-side-panel";

export function RegisterScreen() {
  const router = useRouter();

  return (
    <div className="flex flex-col min-h-screen">
      <AuthMainLayout>
        <AuthSidePanel />
        <div className="w-full flex justify-center lg:justify-end">
          <AuthCard
            subtitle="Completează datele tale pentru a începe."
            title="Înregistrare"
          >
            <form
              className="space-y-6"
              onSubmit={(event) => {
                event.preventDefault();
                router.push("/application/offers");
              }}
            >
              <AuthField
                icon={authIcons.name}
                label="Nume Complet"
                placeholder="Ex: Andrei Popescu"
                type="text"
              />
              <AuthField
                icon={authIcons.email}
                label="Email"
                placeholder="nume@exemplu.com"
                type="email"
              />
              <div className="grid grid-cols-1 gap-6">
                <AuthField
                  icon={authIcons.password}
                  label="Parolă"
                  placeholder="••••••••"
                  type="password"
                />
                <AuthField
                  icon={authIcons.password}
                  label="Confirmă Parola"
                  placeholder="••••••••"
                  type="password"
                />
              </div>
              <div className="flex items-center gap-3 py-2">
                <input
                  className="w-5 h-5 rounded border-[#bdc9c8] text-[#006565] focus:ring-[#006565]/20 bg-[#d5e3fd]"
                  id="terms"
                  required
                  type="checkbox"
                />
                <label
                  className="text-sm text-[#3e4949] leading-tight"
                  htmlFor="terms"
                >
                  Accept{" "}
                  <a className="text-[#006565] font-medium hover:underline" href="#">
                    termenii și condițiile
                  </a>{" "}
                  MedVoyage.
                </label>
              </div>
              <button
                className="w-full py-4 bg-[#006565] text-white font-bold rounded-full text-lg shadow-lg shadow-[#006565]/20 hover:bg-[#008080] hover:scale-[1.02] active:scale-95 transition-all duration-300"
                type="submit"
              >
                Creează Cont
              </button>
              <AuthSeparator label="SAU ÎNREGISTREAZĂ-TE CU" />
              <SocialAuthButtons />
            </form>
          </AuthCard>
        </div>
      </AuthMainLayout>
    </div>
  );
}
