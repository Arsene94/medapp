import { forwardRef } from "react";

import { cn } from "@/lib/cn";

const labelVariantClasses = {
  default:
    "block font-label text-sm font-bold uppercase tracking-[0.16em] text-[#3e4949]",
  meta: "block font-label text-xs font-bold uppercase tracking-[0.18em] text-[#3e4949]",
  muted: "block font-label text-sm font-medium text-slate-500",
  srOnly: "sr-only",
  text: "block font-label text-sm font-medium text-[#3e4949]",
} as const;

export type LabelVariant = keyof typeof labelVariantClasses;

export type LabelProps = React.LabelHTMLAttributes<HTMLLabelElement> & {
  optionalText?: string;
  required?: boolean;
  variant?: LabelVariant;
};

export const Label = forwardRef<HTMLLabelElement, LabelProps>(
  (
    {
      children,
      className,
      optionalText,
      required = false,
      variant = "default",
      ...props
    },
    ref,
  ) => {
    return (
      <label
        ref={ref}
        className={cn(labelVariantClasses[variant], className)}
        {...props}
      >
        <span>{children}</span>
        {required ? (
          <span aria-hidden="true" className="ml-1 text-red-500">
            *
          </span>
        ) : null}
        {optionalText ? (
          <span className="ml-2 text-xs font-normal text-slate-400">
            {optionalText}
          </span>
        ) : null}
      </label>
    );
  },
);

Label.displayName = "Label";
