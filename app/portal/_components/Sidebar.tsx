"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { NAV_ITEMS, isNavActive } from "./nav-items";
import { useAuth } from "../_lib/auth";
import { LogoutIcon } from "./icons";

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const { user, logout } = useAuth();

  const initials =
    (user?.firstName?.[0] ?? "") + (user?.lastName?.[0] ?? "");

  const signOut = () => {
    logout();
    router.replace("/login");
  };

  return (
    <aside className="hidden lg:flex fixed inset-y-0 left-0 z-40 w-64 flex-col p-4">
      <div className="glass flex-1 flex flex-col rounded-3xl p-4">
        {/* Brand */}
        <Link href="/portal" className="flex items-center gap-3 px-2 py-3">
          <span className="grid place-items-center w-10 h-10 rounded-xl tile-rose font-display font-bold text-lg">
            KW
          </span>
          <span className="leading-tight">
            <span className="block font-display font-semibold text-sm">
              Kings World
            </span>
            <span className="block text-[11px] text-white/45">Member Portal</span>
          </span>
        </Link>

        {/* Nav */}
        <nav className="mt-4 flex flex-col gap-1">
          {NAV_ITEMS.map((item) => {
            const active = isNavActive(pathname, item);
            const { Icon } = item;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative flex items-center gap-3 h-11 px-3 rounded-xl text-sm transition-colors ${
                  active
                    ? "text-white bg-gradient-to-r from-[color:var(--burgundy-2)]/25 to-transparent border border-[color:var(--rose)]/25"
                    : "text-white/55 hover:text-white hover:bg-white/[0.05]"
                }`}
              >
                {active && (
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 h-6 w-1 rounded-full bg-gradient-to-b from-[color:var(--rose-2)] to-[color:var(--burgundy-2)]" />
                )}
                <Icon width={20} height={20} />
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="mt-auto">
          {/* User chip */}
          <Link
            href="/portal/me"
            className="flex items-center gap-3 p-2 rounded-2xl hover:bg-white/[0.05] transition-colors"
          >
            <span className="grid place-items-center w-10 h-10 rounded-full tile-rose font-display text-sm uppercase shrink-0">
              {initials}
            </span>
            <span className="min-w-0 leading-tight">
              <span className="block text-sm font-medium truncate">
                {user?.firstName} {user?.lastName}
              </span>
              <span className="block text-[11px] text-white/45">
                {user?.role}
              </span>
            </span>
          </Link>
          <button
            onClick={signOut}
            className="mt-1 w-full flex items-center gap-2 h-10 px-3 rounded-xl text-sm text-white/50 hover:text-white hover:bg-white/[0.05] transition-colors"
          >
            <LogoutIcon width={18} height={18} /> Sign out
          </button>
        </div>
      </div>
    </aside>
  );
}
