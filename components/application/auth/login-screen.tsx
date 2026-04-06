"use client";

import type { LucideIcon } from "lucide-react";
import { Activity, Apple, Lock, Mail } from "lucide-react";

import { AuthSidePanel } from "@/components/application/auth/auth-side-panel";
import { Footer } from "@/components/landing/general/Footer";
import { Navbar } from "@/components/landing/general/NavBar";
import { Link, useRouter } from "@/i18n/navigation";

type LoginFieldProps = {
  icon: LucideIcon;
  id: string;
  label: string;
  placeholder: string;
  type: string;
};

function LoginField({
  icon: Icon,
  id,
  label,
  placeholder,
  type,
}: LoginFieldProps) {
  const autoComplete = type === "email" ? "email" : "current-password";

  return (
    <div className="space-y-2">
      <label
        className="ml-1 block text-xs font-bold uppercase tracking-[0.16em] text-[#3e4949]"
        htmlFor={id}
      >
        {label}
      </label>
      <div className="relative">
        <Icon
          className="absolute top-1/2 left-4 -translate-y-1/2 text-[#6e7979]"
          size={20}
          strokeWidth={2}
        />
        <input
          autoComplete={autoComplete}
          className="w-full rounded-[3rem] border-none bg-[#d5e3fd] py-4 pr-4 pl-12 text-base text-[#0d1c2f] outline-none transition-all duration-300 placeholder:text-[#6e7979]/50 focus:bg-white focus:ring-2 focus:ring-[#006565]"
          id={id}
          name={id}
          placeholder={placeholder}
          required
          type={type}
        />
      </div>
    </div>
  );
}

function GoogleMark() {
  return (
    <svg
      aria-hidden="true"
      className="h-5 w-5"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21.8 12.23c0-.76-.07-1.49-.2-2.18H12v4.13h5.49a4.7 4.7 0 0 1-2.04 3.08v2.55h3.3c1.93-1.78 3.05-4.4 3.05-7.58Z"
        fill="#4285F4"
      />
      <path
        d="M12 22c2.75 0 5.05-.91 6.73-2.46l-3.3-2.55c-.91.61-2.08.97-3.43.97-2.64 0-4.88-1.78-5.67-4.17H2.93v2.63A10.16 10.16 0 0 0 12 22Z"
        fill="#34A853"
      />
      <path
        d="M6.33 13.79A6.1 6.1 0 0 1 6.01 12c0-.62.11-1.23.32-1.79V7.58H2.93A10.15 10.15 0 0 0 1.85 12c0 1.63.39 3.17 1.08 4.42l3.4-2.63Z"
        fill="#FBBC05"
      />
      <path
        d="M12 6.04c1.5 0 2.85.52 3.91 1.53l2.92-2.92C17.04 2.97 14.74 2 12 2a10.16 10.16 0 0 0-9.07 5.58l3.4 2.63c.79-2.39 3.03-4.17 5.67-4.17Z"
        fill="#EA4335"
      />
    </svg>
  );
}

export function LoginScreen() {
  const router = useRouter();

  return (
    <>
      <Navbar />
      <main className="bg-[#f8f9ff] px-4 pt-28 pb-8 text-[#0d1c2f] md:px-8 md:pt-36 md:pb-12">
        <div className="mx-auto flex min-h-[calc(100vh-9rem)] max-w-6xl items-center justify-center">
          <div className="grid w-full grid-cols-1 overflow-hidden rounded-[3rem] bg-white shadow-sm shadow-[#0d1c2f]/5 md:grid-cols-2">
            <AuthSidePanel variant="immersive" />

            <div className="flex flex-col justify-center bg-white p-8 md:p-16">
              <div className="mx-auto w-full max-w-md">
                <div className="mb-12 flex items-center gap-2 md:hidden">
                  <Activity
                    className="text-[#006565]"
                    size={32}
                    strokeWidth={2.5}
                  />
                  <span className="application-headline text-2xl font-black tracking-tight text-[#006565]">
                    MedVoyage
                  </span>
                </div>

                <div className="mb-10">
                  <h1 className="application-headline mb-2 text-3xl font-extrabold tracking-tight text-[#0d1c2f]">
                    Autentificare
                  </h1>
                  <p className="text-sm text-[#515f74]">
                    Introdu datele tale pentru a accesa platforma MedVoyage.
                  </p>
                </div>

                <form
                  className="space-y-6"
                  onSubmit={(event) => {
                    event.preventDefault();
                    router.push("/application/offers");
                  }}
                >
                  <LoginField
                    icon={Mail}
                    id="email"
                    label="Email"
                    placeholder="nume@exemplu.ro"
                    type="email"
                  />

                  <div className="space-y-2">
                    <div className="flex items-center justify-between px-1">
                      <label
                        className="block text-xs font-bold uppercase tracking-[0.16em] text-[#3e4949]"
                        htmlFor="password"
                      >
                        Parolă
                      </label>
                      <button
                        className="text-xs font-semibold text-[#006565] transition-colors hover:text-[#008080]"
                        type="button"
                      >
                        Ai uitat parola?
                      </button>
                    </div>

                    <div className="relative">
                      <Lock
                        className="absolute top-1/2 left-4 -translate-y-1/2 text-[#6e7979]"
                        size={20}
                        strokeWidth={2}
                      />
                      <input
                        autoComplete="current-password"
                        className="w-full rounded-[3rem] border-none bg-[#d5e3fd] py-4 pr-4 pl-12 text-base text-[#0d1c2f] outline-none transition-all duration-300 placeholder:text-[#6e7979]/50 focus:bg-white focus:ring-2 focus:ring-[#006565]"
                        id="password"
                        name="password"
                        placeholder="••••••••"
                        required
                        type="password"
                      />
                    </div>
                  </div>

                  <button
                    className="application-headline w-full rounded-full bg-[#006565] py-4 font-bold text-white shadow-sm shadow-[#006565]/20 transition-transform duration-300 hover:bg-[#008080] active:scale-95"
                    type="submit"
                  >
                    Autentificare
                  </button>
                </form>

                <div className="mt-12">
                  <div className="relative mb-8 flex items-center">
                    <div className="flex-grow border-t border-[#bdc9c8]/30" />
                    <span className="mx-4 shrink-0 text-xs font-bold uppercase tracking-[0.16em] text-[#6e7979]">
                      sau continuă cu
                    </span>
                    <div className="flex-grow border-t border-[#bdc9c8]/30" />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <button
                      className="group flex items-center justify-center gap-3 rounded-[3rem] border border-[#bdc9c8]/30 px-4 py-3 transition-colors hover:bg-[#e6eeff]"
                      type="button"
                    >
                      <div className="transition-all group-hover:scale-105">
                        <GoogleMark />
                      </div>
                      <span className="text-sm font-semibold text-[#0d1c2f]">
                        Google
                      </span>
                    </button>

                    <button
                      className="group flex items-center justify-center gap-3 rounded-[3rem] border border-[#bdc9c8]/30 px-4 py-3 transition-colors hover:bg-[#e6eeff]"
                      type="button"
                    >
                      <Apple
                        className="transition-colors group-hover:text-[#0d1c2f]"
                        size={20}
                        strokeWidth={2.2}
                      />
                      <span className="text-sm font-semibold text-[#0d1c2f]">
                        Apple
                      </span>
                    </button>
                  </div>
                </div>

                <div className="mt-12 text-center">
                  <p className="text-sm text-[#515f74]">
                    Nu ai un cont încă?
                    <Link
                      className="ml-1 font-bold text-[#006565] hover:underline"
                      href="/application/register"
                    >
                      Creează un cont nou
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
