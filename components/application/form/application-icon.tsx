import {
  Box, Camera,
  Clock, Download, Eye,
  FilePenLine,
  FileSearchCorner,
  Home,
  Hourglass,
  LayoutDashboardIcon, ListFilter, LogOut,
  LucideIcon, Mail, MapPin, Megaphone, MessageCircleMore,
  Microscope, Pill,
  RefreshCcw, Save, Search,
  Settings
} from "lucide-react";
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
import { CSSProperties } from 'react';

import { cn } from "@/lib/cn";

export type ApplicationIconName =
  | "account_circle"
  | "add"
  | "add_circle"
  | "airport_shuttle"
  | "arrow_back"
  | "arrow_forward"
  | "auto_awesome"
  | "biotech"
  | "campaign"
  | "chat_bubble"
  | "check_circle"
  | "clinical_notes"
  | "dashboard"
  | "description"
  | "download"
  | "filter_list"
  | "find_clinics"
  | "flight_takeoff"
  | "folder_shared"
  | "home"
  | "hourglass"
  | "help_outline"
  | "history"
  | "history_edu"
  | "hotel"
  | "info"
  | "lab_research"
  | "local_hospital"
  | "location"
  | "logout"
  | "mail"
  | "medical_services"
  | "mic"
  | "monitoring"
  | "more_vert"
  | "notifications"
  | "neurology"
  | "person"
  | "photo_camera"
  | "picture_as_pdf"
  | "prescriptions"
  | "radiology"
  | "radio_button_unchecked"
  | "savings"
  | "save"
  | "schedule"
  | "search"
  | "security"
  | "send"
  | "settings"
  | "sms"
  | "stars"
  | "support_agent"
  | "sync"
  | "translate"
  | "upload_file"
  | "verified"
  | "verified_user"
  | "visibility"
  | "view_in_ar";

const iconMap: Record<ApplicationIconName, LucideIcon> = {
  account_circle: CircleUserRound,
  add: Plus,
  add_circle: CirclePlus,
  airport_shuttle: Bus,
  arrow_back: ArrowLeft,
  arrow_forward: ArrowRight,
  auto_awesome: Sparkles,
  biotech: Microscope,
  campaign: Megaphone,
  chat_bubble: MessageCircle,
  check_circle: BadgeCheck,
  clinical_notes: ClipboardList,
  dashboard: LayoutDashboardIcon,
  description: FileText,
  download: Download,
  filter_list: ListFilter,
  find_clinics: Hospital,
  flight_takeoff: PlaneTakeoff,
  folder_shared: FolderOpen,
  home: Home,
  help_outline: CircleHelp,
  hourglass: Hourglass,
  history: History,
  history_edu: FilePenLine,
  hotel: Hotel,
  info: Info,
  lab_research: FileSearchCorner,
  local_hospital: Hospital,
  location: MapPin,
  logout: LogOut,
  mail: Mail,
  medical_services: Stethoscope,
  mic: Mic,
  monitoring: Activity,
  more_vert: EllipsisVertical,
  neurology: Brain,
  notifications: Bell,
  person: User,
  photo_camera: Camera,
  picture_as_pdf: FileText,
  prescriptions: Pill,
  radiology: Activity,
  radio_button_unchecked: Circle,
  save: Save,
  savings: PiggyBank,
  schedule: Clock,
  search: Search,
  security: Shield,
  send: Send,
  settings: Settings,
  sms: MessageCircleMore,
  stars: Sparkles,
  support_agent: Headset,
  sync: RefreshCcw,
  translate: Languages,
  upload_file: Upload,
  verified: BadgeCheck,
  verified_user: ShieldCheck,
  visibility: Eye,
  view_in_ar: Box,
};

type ApplicationIconProps = {
  className?: string;
  name: ApplicationIconName;
  size?: number;
  strokeWidth?: number;
  fill?: string;
  stroke?: string;
};

export function ApplicationIcon({
  className,
  name,
  size = 24,
  strokeWidth = 2,
  stroke,
  fill,
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
