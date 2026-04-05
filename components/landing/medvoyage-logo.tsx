import { Activity } from "lucide-react";

type MedVoyageLogoProps = {
  accentClassName?: string;
  className?: string;
  iconClassName?: string;
  iconContainerClassName: string;
  iconSize: number;
  iconStrokeWidth?: number;
  splitAccent?: boolean;
  textClassName: string;
};

export function MedVoyageLogo({
  accentClassName,
  className,
  iconClassName,
  iconContainerClassName,
  iconSize,
  iconStrokeWidth = 2.5,
  splitAccent = false,
  textClassName,
}: MedVoyageLogoProps) {
  const wrapperClassName = className
    ? `flex items-center gap-2 ${className}`
    : "flex items-center gap-2";

  return (
    <div className={wrapperClassName}>
      <div className={iconContainerClassName}>
        <Activity
          className={iconClassName}
          size={iconSize}
          strokeWidth={iconStrokeWidth}
        />
      </div>
      {splitAccent ? (
        <span className={textClassName}>
          Med<span className={accentClassName}>Voyage</span>
        </span>
      ) : (
        <span className={textClassName}>MedVoyage</span>
      )}
    </div>
  );
}
