"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { NAV_ITEMS, isNavActive } from "./nav-items";
import { useAuth } from "../_lib/auth";
import { LogoutIcon } from "./icons";

export default function TopBar() {
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
    <header className="sticky top-0 z-40 border-b border-[color:var(--hair)] bg-black/85 backdrop-blur">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-10 h-16 flex items-center gap-4">
        {/* Brand */}
        <Link href="/portal" className="flex items-center gap-3 shrink-0">
          <span className="tile tile-rose w-9 h-9 font-display font-bold text-base">
            KW
          </span>
          <span className="hidden sm:block font-display font-semibold text-sm">
            Kings World
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1 ml-6">
          {NAV_ITEMS.map((item) => {
            const active = isNavActive(pathname, item);
            const { Icon } = item;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative flex items-center gap-2 h-9 px-3.5 rounded-full text-sm transition-colors ${
                  active
                    ? "text-white bg-white/[0.06] border border-[color:var(--hair)]"
                    : "text-white/55 hover:text-white hover:bg-white/[0.05]"
                }`}
              >
                <Icon width={17} height={17} />
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Right side: user */}
        <div className="ml-auto flex items-center gap-2">
          <Link
            href="/portal/me"
            className="flex items-center gap-2.5 pl-1 pr-1 sm:pr-3 py-1 rounded-full hover:bg-white/[0.05] transition-colors"
          >
            <span className="tile tile-rose w-9 h-9 rounded-full font-display text-sm uppercase shrink-0">
              {initials}
            </span>
            <span className="hidden sm:block min-w-0 leading-tight text-left">
              <span className="block text-sm font-medium truncate max-w-[10rem]">
                {user?.firstName} {user?.lastName}
              </span>
              <span className="block text-[11px] text-white/45">
                {user?.role}
              </span>
            </span>
          </Link>
          <button
            onClick={signOut}
            aria-label="Sign out"
            className="hidden lg:grid place-items-center w-9 h-9 rounded-full text-white/50 hover:text-white hover:bg-white/[0.05] transition-colors"
          >
            <LogoutIcon width={18} height={18} />
          </button>
        </div>
      </div>
    </header>
  );
}
