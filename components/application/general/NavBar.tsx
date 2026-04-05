import Link from "next/link";

import { ApplicationIcon } from "@/components/application/form/application-icon";
import { applicationNavItems } from "@/components/application/form/data";

type ApplicationTopNavProps = {
  locale: string;
};

export function NavBar({ locale }: ApplicationTopNavProps) {
  return (
    <nav className="fixed left-0 right-0 top-0 z-50 mx-auto flex w-full max-w-7xl items-center justify-between rounded-b-[1.5rem] bg-white/70 px-8 py-4 shadow-xl shadow-slate-900/5 backdrop-blur-xl md:rounded-b-[3rem]">
      <div className="flex items-center gap-2">
        <Link
          className="application-headline text-xl font-bold tracking-[-0.04em] text-teal-800"
          href={`/application`}
        >
          MedVoyage
        </Link>
      </div>

      <div className="hidden items-center gap-8 md:flex">
        {applicationNavItems.map((item) => (
          <a
            className={
              item.active
                ? "border-b-2 border-teal-600 font-bold text-teal-700"
                : "font-medium text-slate-500 transition-colors duration-300 hover:text-teal-600"
            }
            href={item.href}
            key={item.label}
          >
            {item.label}
          </a>
        ))}
      </div>

      <div className="flex items-center gap-4">
        <button
          aria-label="Notificări"
          className="cursor-pointer text-[#3e4949] transition-colors hover:text-teal-600"
          type="button"
        >
          <ApplicationIcon name="notifications" size={22} />
        </button>
        <button
          aria-label="Ajutor"
          className="cursor-pointer text-[#3e4949] transition-colors hover:text-teal-600"
          type="button"
        >
          <ApplicationIcon name="help_outline" size={22} />
        </button>
        <div className="h-10 w-10 overflow-hidden rounded-full border-2 border-white bg-[#dde9ff]">
          <img
            alt="User clinical profile"
            className="h-full w-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAHlk9lGthH7109G3vBLWuqNOz6WpLXcn9wEC60w1M4zpijrdi69k0iPUsKVXOJk7VdGj-I-vYbVtY7fhqFLHYhXS6tnmpAS4JypVYBios45GVKSKDUXjDw4gvIuQkC0WW5ieu632p1DCa3u9_oZM-pEBfiOK_d0UrL8EeVeRZCKElGD7mlSrZiDvcB0ucyJSw7pQH-oL-uVkdNzjHZfhJx9DhkQYDH2o92tq5lw4c9anoCaqqnO5d1aGhl9AFG6BaQwjAcvJZYqA"
          />
        </div>
      </div>
    </nav>
  );
}
