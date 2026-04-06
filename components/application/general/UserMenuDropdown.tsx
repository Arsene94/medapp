"use client";

import Image from "next/image";
import { useEffect, useId, useRef, useState } from "react";

import { ApplicationIcon, type ApplicationIconName } from "@/components/application/form/application-icon";
import {Link} from "@/i18n/navigation";

const menuItems: Array<{
  icon: ApplicationIconName;
  label: string;
  href: string;
  tone?: "default" | "danger";
}> = [
  { icon: "person", label: "Dashboard", href: "/application/client" },
  { icon: "person", label: "Caz Nou", href: "/application" },
  { icon: "settings", label: "Setări cont", href: "#" },
  { icon: "history", label: "Istoric cazuri", href: "#" },
  { icon: "logout", label: "Deconectare", tone: "danger", href: "#" },
];

const AVATAR_SRC =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBpMmHDet9jZdNMMikTYGv3LbgGJl3KiGyNvKJN-okjsonfvekCTtogpbdYT5U1RPzEpDs82LFdf18itSTprXE--lBGXycpQiawpv7emJnPGn8i8r4qWShpBec89HWs5c74iFmLNCf4EkPg7ES9Ou2oebySy_x_baKbnZtTfY08KkCf_UfSV9LM6RvYvR-5wJOjlXleNLdWw5DBbhYtUxBoSBHVnzSIU70Tjct8tHnNMf5BexOyXwZXgZLhZr82iK6bOwTwztcZgg";

export function UserMenuDropdown() {
  const menuId = useId();
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) {
      return;
    }

    const handlePointerDown = (event: PointerEvent) => {
      const target = event.target;

      if (!(target instanceof Node)) {
        return;
      }

      if (!containerRef.current?.contains(target)) {
        setOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  return (
    <div className="relative" ref={containerRef}>
      <button
        ref={buttonRef}
        aria-controls={menuId}
        aria-expanded={open}
        aria-haspopup="menu"
        className="ml-2 h-10 w-10 overflow-hidden rounded-full border-2 border-white bg-surface-container-high transition-all hover:ring-4 hover:ring-teal-500/10 focus:outline-none focus-visible:ring-4 focus-visible:ring-teal-500/15"
        onClick={() => {
          setOpen((current) => !current);
        }}
        type="button"
      >
        <Image
          alt="User profile"
          className="h-full w-full object-cover"
          height={40}
          src={AVATAR_SRC}
          width={40}
        />
      </button>

      <div
        aria-hidden={!open}
        className={`absolute right-0 z-[60] mt-3 w-64 overflow-hidden rounded-2xl border border-teal-50 bg-white shadow-2xl shadow-teal-900/10 transition-all duration-200 ${
          open
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-2 opacity-0"
        }`}
        id={menuId}
        role="menu"
      >
        <div className="border-b border-slate-50 bg-teal-50/30 p-4">
          <p className="text-sm font-bold text-teal-900">Dr. Alexandru Popescu</p>
          <p className="text-xs text-teal-700/70">alexandru.p@clinical.ro</p>
        </div>

        <div className="p-2">
          {menuItems.slice(0, 3).map((item) => (
            <Link
              className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm font-medium text-slate-600 transition-colors hover:bg-teal-50 hover:text-teal-700"
              key={item.label}
              href={item.href}
              role="menuitem"
              type="button"
            >
              <ApplicationIcon name={item.icon} size={20} />
              {item.label}
            </Link>
          ))}
        </div>

        <div className="border-t border-slate-50 p-2">
          <button
            className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm font-medium text-error transition-colors hover:bg-error-container/20"
            onClick={() => {
              setOpen(false);
            }}
            role="menuitem"
            type="button"
          >
            <ApplicationIcon name="logout" size={20} />
            Deconectare
          </button>
        </div>
      </div>
    </div>
  );
}
