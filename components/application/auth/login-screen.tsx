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

export function LoginScreen() {
  const router = useRouter();

  return (
    <div className="flex flex-col min-h-screen">
      <AuthMainLayout>
        <AuthSidePanel />
        <div className="w-full flex justify-center lg:justify-end">
          <AuthCard
            subtitle="Autentifică-te pentru a continua experiența MedVoyage."
            title="Login"
          >
            <form
              className="space-y-6"
              onSubmit={(event) => {
                event.preventDefault();
                router.push("/application/offers");
              }}
            >
              <AuthField
                icon={authIcons.email}
                label="Email"
                placeholder="nume@exemplu.com"
                type="email"
              />
              <AuthField
                icon={authIcons.password}
                label="Parolă"
                placeholder="••••••••"
                type="password"
              />
              <div className="flex items-center justify-between gap-4 py-2">
                <div className="flex items-center gap-3">
                  <input
                    className="w-5 h-5 rounded border-[#bdc9c8] text-[#006565] focus:ring-[#006565]/20 bg-[#d5e3fd]"
                    id="remember-me"
                    type="checkbox"
                  />
                  <label
                    className="text-sm text-[#3e4949] leading-tight"
                    htmlFor="remember-me"
                  >
                    Ține-mă minte
                  </label>
                </div>
                <a
                  className="text-sm font-medium text-[#006565] hover:underline"
                  href="#"
                >
                  Ai uitat parola?
                </a>
              </div>
              <button
                className="w-full py-4 bg-[#006565] text-white font-bold rounded-full text-lg shadow-lg shadow-[#006565]/20 hover:bg-[#008080] hover:scale-[1.02] active:scale-95 transition-all duration-300"
                type="submit"
              >
                Continuă
              </button>
              <AuthSeparator label="SAU CONTINUĂ CU" />
              <SocialAuthButtons />
            </form>
          </AuthCard>
        </div>
      </AuthMainLayout>
    </div>
  );
}
