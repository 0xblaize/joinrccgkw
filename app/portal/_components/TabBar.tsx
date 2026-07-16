"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_ITEMS, isNavActive } from "./nav-items";

export default function TabBar() {
  const pathname = usePathname();

  return (
    <nav className="lg:hidden fixed inset-x-0 bottom-0 z-50 pb-safe">
      <div className="mx-auto max-w-md px-3">
        <div className="glass rounded-2xl grid grid-cols-4 px-1 py-1 shadow-[0_-8px_30px_-12px_rgba(0,0,0,0.8)]">
          {NAV_ITEMS.map((item) => {
            const active = isNavActive(pathname, item);
            const { Icon } = item;
            return (
              <Link
                key={item.href}
                href={item.href}
                className="group relative flex flex-col items-center justify-center gap-1 py-2 rounded-xl"
              >
                {active && (
                  <span className="absolute inset-1 rounded-xl bg-gradient-to-b from-[color:var(--burgundy-2)]/30 to-transparent border border-[color:var(--rose)]/30" />
                )}
                <Icon
                  width={22}
                  height={22}
                  className={`relative transition-colors ${
                    active
                      ? "text-white"
                      : "text-white/45 group-hover:text-white/75"
                  }`}
                />
                <span
                  className={`relative text-[11px] transition-colors ${
                    active
                      ? "text-white font-medium"
                      : "text-white/45 group-hover:text-white/75"
                  }`}
                >
                  {item.label}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
