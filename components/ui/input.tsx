import { forwardRef, useId } from "react";

import { cn } from "@/lib/cn";
import { Label, type LabelVariant } from "@/components/ui/label";

const inputVariantClasses = {
  bare: "border-none bg-transparent px-0 py-0 shadow-none focus-visible:ring-0 focus-visible:border-transparent",
  default:
    "rounded-[3rem] border-none bg-[#d5e3fd] px-4 py-4 text-[#0d1c2f] shadow-none focus-visible:ring-2 focus-visible:ring-[#006565]",
  newsletter:
    "rounded-full border-none bg-white px-4 py-2 text-[#0d1c2f] shadow-none focus-visible:ring-2 focus-visible:ring-[#006565]",
} as const;

const inputSizeClasses = {
  lg: "min-h-14 text-base",
  md: "min-h-12 text-sm",
  sm: "min-h-10 text-sm",
} as const;

export type InputProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "size"
> & {
  endAdornment?: React.ReactNode;
  error?: string;
  hint?: string;
  label?: React.ReactNode;
  labelClassName?: string;
  labelVariant?: LabelVariant;
  optionalText?: string;
  required?: boolean;
  shellClassName?: string;
  size?: keyof typeof inputSizeClasses;
  startAdornment?: React.ReactNode;
  variant?: keyof typeof inputVariantClasses;
  wrapperClassName?: string;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
      {
        className,
        endAdornment,
        error,
        hint,
        id,
        label,
        labelClassName,
        labelVariant = "default",
        optionalText,
        required = false,
        shellClassName,
        size = "md",
        startAdornment,
        type = "text",
      variant = "default",
      wrapperClassName,
      ...props
    },
    ref,
  ) => {
    const generatedId = useId();
    const inputId = id ?? generatedId;
    const hasShell = Boolean(startAdornment || endAdornment || shellClassName);
    const describedBy = error
      ? `${inputId}-error`
      : hint
        ? `${inputId}-hint`
        : undefined;

    const inputElement = (
      <input
        ref={ref}
        aria-describedby={describedBy}
        aria-invalid={error ? "true" : "false"}
        className={cn(
          "w-full min-w-0 font-label text-[#0d1c2f] placeholder:text-[#6e7979] outline-none",
          inputVariantClasses[variant],
          inputSizeClasses[size],
          className,
        )}
        id={inputId}
        required={required}
        type={type}
        {...props}
      />
    );

    return (
      <div className={wrapperClassName}>
        {label ? (
          <Label
            className={cn(labelVariant !== "srOnly" && "mb-2", labelClassName)}
            htmlFor={inputId}
            optionalText={optionalText}
            required={required}
            variant={labelVariant}
          >
            {label}
          </Label>
        ) : null}

        {hasShell ? (
          <div className={shellClassName}>
            {startAdornment}
            {inputElement}
            {endAdornment}
          </div>
        ) : (
          inputElement
        )}

        {hint && !error ? (
          <p className="mt-2 font-label text-sm text-slate-500" id={`${inputId}-hint`}>
            {hint}
          </p>
        ) : null}

        {error ? (
          <p className="mt-2 font-label text-sm text-red-600" id={`${inputId}-error`}>
            {error}
          </p>
        ) : null}
      </div>
    );
  },
);

Input.displayName = "Input";
