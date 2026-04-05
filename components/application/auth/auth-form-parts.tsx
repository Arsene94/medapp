import type { LucideIcon } from "lucide-react";
import { Lock, Mail, User } from "lucide-react";

export const authIcons = {
  email: Mail,
  name: User,
  password: Lock,
} as const;

export function AuthField({
  icon,
  label,
  placeholder,
  type,
}: {
  icon: LucideIcon;
  label: string;
  placeholder: string;
  type: string;
}) {
  const Icon = icon;

  return (
    <div className="space-y-2">
      <label className="text-sm font-semibold text-[#0d1c2f] ml-1">
        {label}
      </label>
      <div className="relative group">
        <Icon
          className="absolute left-4 top-1/2 -translate-y-1/2 text-[#bdc9c8] group-focus-within:text-[#006565] transition-colors"
          size={20}
        />
        <input
          className="w-full pl-12 pr-4 py-4 bg-[#d5e3fd] border-none rounded-lg focus:ring-2 focus:ring-[#006565]/20 focus:bg-white transition-all placeholder:text-[#6e7979]"
          placeholder={placeholder}
          required
          type={type}
        />
      </div>
    </div>
  );
}

export function AuthSeparator({ label }: { label: string }) {
  return (
    <div className="relative py-4">
      <div className="absolute inset-0 flex items-center">
        <div className="w-full border-t border-[#bdc9c8]/30" />
      </div>
      <div className="relative flex justify-center text-xs">
        <span className="bg-white px-4 text-[#6e7979] font-medium">
          {label}
        </span>
      </div>
    </div>
  );
}

export function SocialAuthButtons() {
  return (
    <div className="grid grid-cols-2 gap-4">
      <button
        className="flex items-center justify-center gap-2 py-3 border border-[#bdc9c8]/30 rounded-lg hover:bg-[#eff4ff] transition-colors"
        type="button"
      >
        <img
          alt="Google"
          className="w-5 h-5"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCmidJe_NrQtsO4m4p3h5tMnHnh63WY9XLRWdiJVfmcLxuVnFsdsX6rbyxBhtwcPQgVdQ8GIY3zfZ-6g0jTzzN-pFCOA4aYZCHPhzjU2Omb-4Mw6-dkMW4eh4dXhlTwKkNpb3AQ417YNu4Jn43PFxLWe42vV8UqNAVAiobi4uVEwwEZZ9veGrONAQtY_RtlXNxxBMRHNtxuVdIWHGUJS2LjGdFs-2427sqzj9G9v6Pg-LE_KJCYDYeR79GfAJpDAFUMJ43triJgPg"
        />
        <span className="text-sm font-medium">Google</span>
      </button>
      <button
        className="flex items-center justify-center gap-2 py-3 border border-[#bdc9c8]/30 rounded-lg hover:bg-[#eff4ff] transition-colors"
        type="button"
      >
        <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#1877F2] text-xs font-bold text-white">
          f
        </div>
        <span className="text-sm font-medium">Facebook</span>
      </button>
    </div>
  );
}

export function AuthCard({
  children,
  subtitle,
  title,
}: {
  children: React.ReactNode;
  subtitle: string;
  title: string;
}) {
  return (
    <div className="w-full max-w-md bg-white p-8 md:p-12 rounded-[1rem] shadow-sm border border-[#bdc9c8]/10">
      <div className="mb-10 text-center lg:text-left">
        <h2 className="application-headline text-3xl font-bold mb-2">
          {title}
        </h2>
        <p className="text-[#3e4949]">{subtitle}</p>
      </div>
      {children}
    </div>
  );
}

export function AuthMainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex-grow flex items-center justify-center pt-32 pb-12 px-6">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {children}
      </div>
    </main>
  );
}
