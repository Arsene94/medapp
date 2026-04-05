import { Loader2 } from "lucide-react";
import { forwardRef } from "react";

import { cn } from "@/lib/cn";

const buttonVariantClasses = {
  dark:
    "bg-[#0d1c2f] text-white font-bold active:scale-95 hover:bg-[#233144]",
  ghost:
    "bg-transparent text-[#515f74] font-medium hover:bg-[#eff4ff] hover:text-[#006565]",
  iconPrimary:
    "bg-[#008080] text-white hover:bg-[#006565] active:scale-95",
  mobileCta:
    "bg-[#006565] text-white font-bold shadow-lg shadow-[#006565]/20 hover:bg-[#008080] active:scale-95",
  navCta:
    "bg-[#233144] text-[#ebf1ff] font-bold shadow-lg shadow-[#233144]/15 hover:bg-[#0d1c2f] active:scale-95",
  offerDark:
    "bg-[#515f74] text-white font-bold active:scale-95 hover:bg-[#3a485b]",
  offerPrimary:
    "bg-[#76d6d5] text-[#004f4f] font-bold hover:bg-[#93f2f2] active:scale-95",
  orange:
    "bg-[#be5300] text-white font-bold shadow-lg shadow-[#be5300]/20 hover:bg-[#974000] active:scale-95",
  searchCta:
    "border border-[#93f2f2]/40 bg-[#d5e3fd] text-[#004f4f] font-bold shadow-lg shadow-[#d5e3fd]/40 hover:bg-[#e3fffe] active:scale-95",
  segmentedActive:
    "bg-[#006565] text-white font-bold shadow-sm shadow-[#006565]/20",
  segmentedIdle:
    "bg-[#d5e3fd] text-[#3e4949] font-medium hover:bg-[#dde9ff]",
  surface:
    "border border-[#bdc9c8]/30 bg-white text-[#0d1c2f] font-medium hover:bg-[#eff4ff]",
  teal:
    "bg-[#004f4f] text-white font-bold shadow-lg shadow-[#004f4f]/20 hover:bg-[#006565] active:scale-95",
  textNav:
    "bg-transparent text-[#006565] font-medium hover:bg-[#eff4ff] hover:text-[#004f4f]",
  downloadCta:
    "bg-[#ffdbca] text-[#783200] font-bold shadow-lg shadow-[#ffdbca]/30 hover:bg-[#ffb690] active:scale-95",
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
