import type { LucideIcon } from "lucide-react";
import {
  Activity,
  ArrowLeft,
  ArrowRight,
  BadgeCheck,
  Bell,
  Brain,
  Bus,
  Circle,
  CircleHelp,
  CirclePlus,
  CircleUserRound,
  ClipboardList,
  EllipsisVertical,
  FileText,
  FolderOpen,
  Headset,
  History,
  Hospital,
  Hotel,
  Info,
  Languages,
  MessageCircle,
  Mic,
  PiggyBank,
  PlaneTakeoff,
  Plus,
  Send,
  Shield,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Upload,
  User,
} from "lucide-react";

import { cn } from "@/lib/cn";

export type ApplicationIconName =
  | "account_circle"
  | "add"
  | "add_circle"
  | "airport_shuttle"
  | "arrow_back"
  | "arrow_forward"
  | "auto_awesome"
  | "chat_bubble"
  | "check_circle"
  | "clinical_notes"
  | "description"
  | "find_clinics"
  | "flight_takeoff"
  | "folder_shared"
  | "help_outline"
  | "history"
  | "hotel"
  | "info"
  | "local_hospital"
  | "medical_services"
  | "mic"
  | "monitoring"
  | "more_vert"
  | "notifications"
  | "neurology"
  | "person"
  | "picture_as_pdf"
  | "radiology"
  | "radio_button_unchecked"
  | "savings"
  | "security"
  | "send"
  | "stars"
  | "support_agent"
  | "translate"
  | "upload_file"
  | "verified"
  | "verified_user";

const iconMap: Record<ApplicationIconName, LucideIcon> = {
  account_circle: CircleUserRound,
  add: Plus,
  add_circle: CirclePlus,
  airport_shuttle: Bus,
  arrow_back: ArrowLeft,
  arrow_forward: ArrowRight,
  auto_awesome: Sparkles,
  chat_bubble: MessageCircle,
  check_circle: BadgeCheck,
  clinical_notes: ClipboardList,
  description: FileText,
  find_clinics: Hospital,
  flight_takeoff: PlaneTakeoff,
  folder_shared: FolderOpen,
  help_outline: CircleHelp,
  history: History,
  hotel: Hotel,
  info: Info,
  local_hospital: Hospital,
  medical_services: Stethoscope,
  mic: Mic,
  monitoring: Activity,
  more_vert: EllipsisVertical,
  neurology: Brain,
  notifications: Bell,
  person: User,
  picture_as_pdf: FileText,
  radiology: Activity,
  radio_button_unchecked: Circle,
  savings: PiggyBank,
  security: Shield,
  send: Send,
  stars: Sparkles,
  support_agent: Headset,
  translate: Languages,
  upload_file: Upload,
  verified: BadgeCheck,
  verified_user: ShieldCheck,
};

type ApplicationIconProps = {
  className?: string;
  name: ApplicationIconName;
  size?: number;
  strokeWidth?: number;
};

export function ApplicationIcon({
  className,
  name,
  size = 24,
  strokeWidth = 2,
}: ApplicationIconProps) {
  const Icon = iconMap[name];

  return (
    <Icon
      aria-hidden="true"
      className={cn("shrink-0", className)}
      size={size}
      strokeWidth={strokeWidth}
    />
  );
}
