"use client";

import { useEffect } from "react";
import { CloseIcon } from "./icons";

// Bottom-sheet modal used for all the Connect / Give forms.
export default function Sheet({
  open,
  onClose,
  title,
  subtitle,
  children,
}: {
  open: boolean;
  onClose: () => void;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-end sm:items-center sm:justify-center">
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm animate-fade-in"
        onClick={onClose}
        aria-hidden
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-label={title}
        className="relative w-full sm:max-w-lg max-h-[92vh] overflow-y-auto surface-2 rounded-t-3xl sm:rounded-3xl animate-sheet-up"
      >
        <div className="sticky top-0 z-10 bg-[color:var(--surface-2)] px-5 pt-4 pb-3 flex items-start justify-between gap-4 rounded-t-3xl">
          <div className="min-w-0">
            <div className="mx-auto sm:hidden w-10 h-1 rounded-full bg-white/15 mb-3" />
            <h2 className="font-display text-xl leading-tight">{title}</h2>
            {subtitle && (
              <p className="mt-1 text-sm text-white/55">{subtitle}</p>
            )}
          </div>
          <button
            onClick={onClose}
            aria-label="Close"
            className="shrink-0 grid place-items-center w-9 h-9 rounded-full border border-white/15 text-white/70 hover:text-white hover:border-white/40 transition-colors"
          >
            <CloseIcon width={18} height={18} />
          </button>
        </div>
        <div className="px-5 pb-8 pt-1">{children}</div>
      </div>
    </div>
  );
}
