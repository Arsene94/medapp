import { Loader2 } from "lucide-react";
import { forwardRef } from "react";

import { cn } from "@/lib/cn";

const buttonVariantClasses = {
  dark:
    "bg-[#0d1c2f] text-white font-bold active:scale-95 hover:opacity-95",
  ghost:
    "bg-transparent text-slate-600 font-medium hover:opacity-80",
  iconPrimary:
    "bg-[#006565] text-white hover:opacity-95 active:scale-95",
  mobileCta:
    "bg-[#006565] text-white font-bold shadow-lg shadow-teal-900/10 hover:opacity-95 active:scale-95",
  navCta:
    "bg-[#006565] text-white font-bold shadow-lg shadow-teal-900/10 hover:opacity-95 active:scale-95",
  offerDark:
    "bg-[#0d1c2f] text-white font-bold active:scale-95 hover:opacity-95",
  offerPrimary:
    "bg-[#006565] text-white font-bold hover:bg-[#008080] active:scale-95",
  orange:
    "bg-[#006565] text-white font-bold shadow-lg shadow-teal-900/10 hover:opacity-95 active:scale-95",
  searchCta:
    "bg-[#006565] text-white font-bold shadow-lg shadow-teal-900/10 hover:opacity-95 active:scale-95",
  segmentedActive:
    "bg-[#006565] text-white font-bold",
  segmentedIdle:
    "bg-[#e6eeff] text-[#0d1c2f] font-medium hover:bg-[#dde9ff]",
  surface:
    "bg-[#e6eeff] text-[#0d1c2f] font-medium hover:bg-[#dde9ff]",
  teal:
    "bg-[#006565] text-white font-bold shadow-lg shadow-teal-900/10 hover:opacity-95 active:scale-95",
  textNav:
    "bg-transparent text-slate-600 font-medium hover:opacity-80",
  downloadCta:
    "bg-[#006565] text-white font-bold shadow-lg shadow-teal-900/10 hover:opacity-95 active:scale-95",
} as const;

const buttonSizeClasses = {
  icon: "rounded-full p-2 text-sm",
  lg: "rounded-full px-6 py-2.5 text-base",
  md: "rounded-full px-6 py-2.5 text-sm",
  offer: "rounded-full px-8 py-3 text-base",
  pill: "rounded-full px-6 py-2.5 text-sm",
  search: "rounded-full px-8 py-3 text-base",
  segment: "rounded-[2rem] px-5 py-3 text-base",
  sm: "rounded-full px-4 py-2 text-sm",
  xl: "rounded-full px-8 py-3 text-base",
} as const;

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  endIcon?: React.ReactNode;
  fullWidth?: boolean;
  loading?: boolean;
  startIcon?: React.ReactNode;
  size?: keyof typeof buttonSizeClasses;
  variant?: keyof typeof buttonVariantClasses;
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className,
      disabled,
      endIcon,
      fullWidth = false,
      loading = false,
      size = "md",
      startIcon,
      type = "button",
      variant = "dark",
      ...props
    },
    ref,
  ) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap font-label transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#006565] disabled:pointer-events-none disabled:opacity-50",
          buttonVariantClasses[variant],
          buttonSizeClasses[size],
          fullWidth && "w-full",
          className,
        )}
        disabled={disabled || loading}
        type={type}
        {...props}
      >
        {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : startIcon}
        {children}
        {!loading ? endIcon : null}
      </button>
    );
  },
);

Button.displayName = "Button";
