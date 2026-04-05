import { ChevronDown } from "lucide-react";
import { forwardRef, useId } from "react";

import { cn } from "@/lib/cn";
import { Label, type LabelVariant } from "@/components/ui/label";

export type SelectOption = {
  disabled?: boolean;
  label: string;
  value: string;
};

export type SelectValueChangeHandler = (
  value: string,
  option?: SelectOption,
) => void;

export function getSelectOptionByValue(
  options: SelectOption[] | undefined,
  value: string,
) {
  return options?.find((option) => option.value === value);
}

export function getSelectOptionLabel(
  options: SelectOption[] | undefined,
  value: string,
  fallback = "",
) {
  return getSelectOptionByValue(options, value)?.label ?? fallback;
}

const selectTriggerVariantClasses = {
  bare: "border-none bg-transparent shadow-none focus-within:border-transparent focus-within:ring-0",
  default:
    "rounded-[3rem] border-none bg-[#d5e3fd] shadow-none focus-within:ring-2 focus-within:ring-[#006565]",
  nav:
    "rounded-full border border-slate-200 bg-white/90 shadow-sm focus-within:ring-2 focus-within:ring-[#006565]",
} as const;

const selectSizeClasses = {
  lg: "min-h-14 px-4 text-base",
  md: "min-h-12 px-4 text-sm",
  sm: "min-h-10 px-3 text-sm",
} as const;

export type SelectProps = Omit<
  React.SelectHTMLAttributes<HTMLSelectElement>,
  "size"
> & {
  error?: string;
  hint?: string;
  label?: React.ReactNode;
  labelClassName?: string;
  labelVariant?: LabelVariant;
  onValueChange?: SelectValueChangeHandler;
  options?: SelectOption[];
  optionalText?: string;
  placeholder?: string;
  required?: boolean;
  size?: keyof typeof selectSizeClasses;
  startAdornment?: React.ReactNode;
  triggerClassName?: string;
  variant?: keyof typeof selectTriggerVariantClasses;
  wrapperClassName?: string;
};

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      children,
      className,
      defaultValue,
      error,
      hint,
      id,
      label,
      labelClassName,
      labelVariant = "default",
      onChange,
      onValueChange,
      options,
      optionalText,
      placeholder,
      required = false,
      size = "md",
      startAdornment,
      triggerClassName,
      value,
      variant = "default",
      wrapperClassName,
      ...props
    },
    ref,
  ) => {
    const generatedId = useId();
    const selectId = id ?? generatedId;
    const describedBy = error
      ? `${selectId}-error`
      : hint
        ? `${selectId}-hint`
        : undefined;

    return (
      <div className={wrapperClassName}>
        {label ? (
          <Label
            className={cn(labelVariant !== "srOnly" && "mb-2", labelClassName)}
            htmlFor={selectId}
            optionalText={optionalText}
            required={required}
            variant={labelVariant}
          >
            {label}
          </Label>
        ) : null}

        <div
          className={cn(
            "relative flex items-center gap-2 transition-all",
            selectTriggerVariantClasses[variant],
            selectSizeClasses[size],
            triggerClassName,
          )}
        >
          {startAdornment}
          <select
            ref={ref}
            aria-describedby={describedBy}
            aria-invalid={error ? "true" : "false"}
            className={cn(
              "w-full min-w-0 appearance-none bg-transparent pr-8 text-slate-800 outline-none",
              "font-label text-[#0d1c2f]",
              className,
            )}
            defaultValue={defaultValue}
            id={selectId}
            onChange={(event) => {
              const nextOption = getSelectOptionByValue(
                options,
                event.target.value,
              );
              onChange?.(event);
              onValueChange?.(event.target.value, nextOption);
            }}
            required={required}
            value={value}
            {...props}
          >
            {placeholder ? (
              <option disabled value="">
                {placeholder}
              </option>
            ) : null}
            {children
              ? children
              : options?.map((option) => (
                  <option
                    disabled={option.disabled}
                    key={option.value}
                    value={option.value}
                  >
                    {option.label}
                  </option>
                ))}
          </select>
          <ChevronDown className="pointer-events-none absolute right-3 h-4 w-4 text-[#3e4949]" />
        </div>

        {hint && !error ? (
          <p className="mt-2 font-label text-sm text-slate-500" id={`${selectId}-hint`}>
            {hint}
          </p>
        ) : null}

        {error ? (
          <p className="mt-2 font-label text-sm text-red-600" id={`${selectId}-error`}>
            {error}
          </p>
        ) : null}
      </div>
    );
  },
);

Select.displayName = "Select";
