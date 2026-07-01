"use client";

import { useEffect, useState } from "react";
import Logo from "./Logo";

const TABS = [
  { label: "About", href: "#about" },
  { label: "Community", href: "#community" },
  { label: "Sermons", href: "#sermons" },
  { label: "Map", href: "#map" },
  { label: "Give", href: "#give" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-black/80 backdrop-blur-xl hair-b"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <a href="#top" aria-label="Kings World home">
              <Logo />
            </a>

            <nav className="hidden lg:flex items-center gap-8">
              {TABS.map((t) => (
                <a
                  key={t.label}
                  href={t.href}
                  className="link-underline text-[13px] tracking-[0.2em] uppercase text-white/70 hover:text-white transition-colors"
                >
                  {t.label}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <a
                href="#portal"
                className="hidden sm:inline-flex items-center gap-2 h-11 px-5 rounded-full btn-primary text-[12px] font-semibold tracking-[0.2em] uppercase"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-white blink" />
                Portal Login
              </a>
              <button
                onClick={() => setOpen((v) => !v)}
                aria-label="Toggle menu"
                className="lg:hidden grid place-items-center w-11 h-11 rounded-full border border-white/20 hover:border-white/60 transition-colors"
              >
                <span className="flex flex-col gap-1.5">
                  <span
                    className={`h-px w-5 bg-white transition-transform ${
                      open ? "translate-y-[6px] rotate-45" : ""
                    }`}
                  />
                  <span
                    className={`h-px w-5 bg-white transition-opacity ${
                      open ? "opacity-0" : ""
                    }`}
                  />
                  <span
                    className={`h-px w-5 bg-white transition-transform ${
                      open ? "-translate-y-[6px] -rotate-45" : ""
                    }`}
                  />
                </span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Full-screen mobile mega menu */}
      <div
        className={`fixed inset-0 z-40 bg-black transition-all duration-700 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="mx-auto max-w-7xl px-6 pt-28 pb-10 h-full flex flex-col">
          <div className="flex-1 flex flex-col justify-center gap-2">
            {TABS.map((t, idx) => (
              <a
                key={t.label}
                href={t.href}
                onClick={() => setOpen(false)}
                className={`group block hair-b py-6 transition-all duration-700 ${
                  open ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
                }`}
                style={{ transitionDelay: `${idx * 60 + 100}ms` }}
              >
                <span className="flex items-center justify-between">
                  <span className="font-display text-5xl sm:text-6xl leading-none">
                    {t.label}
                  </span>
                  <span className="text-white/40 group-hover:text-[color:var(--burgundy-2)] transition-colors">
                    →
                  </span>
                </span>
              </a>
            ))}
          </div>
          <a
            href="#portal"
            onClick={() => setOpen(false)}
            className="h-14 grid place-items-center rounded-full btn-primary text-sm font-semibold tracking-[0.25em] uppercase"
          >
            Portal Login
          </a>
        </div>
      </div>
    </>
  );
}
