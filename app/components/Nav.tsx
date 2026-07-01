"use client";

import { useEffect, useState } from "react";
import Logo from "./Logo";

const TABS = [
  { label: "About", href: "#about" },
  { label: "Community", href: "#community" },
  { label: "Sermons", href: "#sermons" },
  { label: "Map", href: "#map" },
  { label: "Give", href: "#give" },
  { label: "Quick Links", href: "#footer" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className={`glass rounded-2xl flex items-center justify-between px-4 sm:px-5 h-14 sm:h-16 transition-all duration-500 ${
            scrolled ? "ring-gold" : ""
          }`}
        >
          <a href="#top" aria-label="Kings World home">
            <Logo />
          </a>

          <nav className="hidden lg:flex items-center gap-1">
            {TABS.map((t) => (
              <a
                key={t.label}
                href={t.href}
                className="relative px-3 py-2 text-[13px] tracking-wide text-[#f5efe0]/75 hover:text-[#f4d160] transition-colors"
              >
                {t.label}
                <span className="pointer-events-none absolute left-3 right-3 -bottom-0.5 h-px bg-gradient-to-r from-transparent via-[#d4af37]/70 to-transparent opacity-0 hover:opacity-100 transition-opacity" />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="#portal"
              className="hidden sm:inline-flex relative items-center gap-2 h-10 px-4 rounded-full btn-gold text-[13px] font-semibold tracking-wide"
            >
              <span
                aria-hidden
                className="absolute inset-0 -z-10 rounded-full blur-md opacity-70 bg-[#d4af37]"
              />
              <span className="w-1.5 h-1.5 rounded-full bg-[#0b0f19] animate-pulse" />
              Portal Login
            </a>
            <button
              onClick={() => setOpen((v) => !v)}
              aria-label="Open menu"
              className="lg:hidden grid place-items-center w-10 h-10 rounded-full glass"
            >
              <span className="flex flex-col gap-1.5">
                <span
                  className={`h-px w-5 bg-[#f4d160] transition-transform ${
                    open ? "translate-y-[6px] rotate-45" : ""
                  }`}
                />
                <span
                  className={`h-px w-5 bg-[#f4d160] transition-opacity ${
                    open ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`h-px w-5 bg-[#f4d160] transition-transform ${
                    open ? "-translate-y-[6px] -rotate-45" : ""
                  }`}
                />
              </span>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`lg:hidden overflow-hidden transition-[max-height,opacity] duration-500 ${
            open ? "max-h-96 opacity-100 mt-2" : "max-h-0 opacity-0"
          }`}
        >
          <div className="glass rounded-2xl p-2 grid grid-cols-2 gap-1">
            {TABS.map((t) => (
              <a
                key={t.label}
                href={t.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-3 text-sm text-[#f5efe0]/80 hover:bg-white/5 hover:text-[#f4d160]"
              >
                {t.label}
              </a>
            ))}
            <a
              href="#portal"
              onClick={() => setOpen(false)}
              className="col-span-2 mt-1 rounded-xl h-11 grid place-items-center btn-gold text-sm font-semibold"
            >
              Portal Login
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
