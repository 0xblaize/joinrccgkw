"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { HomeIcon, ConnectIcon, GiveIcon, MeIcon } from "./icons";

const TABS = [
  { href: "/portal", label: "Home", Icon: HomeIcon, exact: true },
  { href: "/portal/connect", label: "Connect", Icon: ConnectIcon },
  { href: "/portal/give", label: "Give", Icon: GiveIcon },
  { href: "/portal/me", label: "Me", Icon: MeIcon },
];

export default function TabBar() {
  const pathname = usePathname();

  const isActive = (href: string, exact?: boolean) => {
    if (exact) return pathname === href;
    return pathname === href || pathname.startsWith(href + "/");
  };

  return (
    <nav className="fixed inset-x-0 bottom-0 z-50 bg-black/90 backdrop-blur hair-t pb-safe">
      <div className="mx-auto max-w-lg grid grid-cols-4">
        {TABS.map(({ href, label, Icon, exact }) => {
          const active = isActive(href, exact);
          return (
            <Link
              key={href}
              href={href}
              className="group relative flex flex-col items-center justify-center gap-1 pt-2.5 pb-1"
            >
              <span
                className={`absolute top-0 h-0.5 w-8 rounded-full transition-colors ${
                  active ? "bg-[color:var(--burgundy-2)]" : "bg-transparent"
                }`}
              />
              <Icon
                width={23}
                height={23}
                className={`transition-colors ${
                  active
                    ? "text-white"
                    : "text-white/45 group-hover:text-white/75"
                }`}
              />
              <span
                className={`text-[11px] transition-colors ${
                  active ? "text-white" : "text-white/45 group-hover:text-white/75"
                }`}
              >
                {label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
