import type { ReactNode } from "react";
import { ChevronRight } from "./icons";

// A tappable card row with an icon, title, description and chevron.
// Used across Connect and the Home dashboard.
export default function ActionCard({
  icon,
  title,
  description,
  onClick,
  tone = "default",
}: {
  icon: ReactNode;
  title: string;
  description?: string;
  onClick?: () => void;
  tone?: "default" | "confidential";
}) {
  return (
    <button
      onClick={onClick}
      className="card-tap w-full text-left p-4 flex items-center gap-4 group"
    >
      <span
        className={`shrink-0 tile w-11 h-11 ${
          tone === "confidential"
            ? "tile-rose"
            : ""
        }`}
      >
        {icon}
      </span>
      <span className="min-w-0 flex-1">
        <span className="block text-sm font-medium text-white">{title}</span>
        {description && (
          <span className="block text-xs text-white/50 mt-0.5 leading-snug">
            {description}
          </span>
        )}
      </span>
      <ChevronRight
        width={18}
        height={18}
        className="shrink-0 text-white/30 group-hover:translate-x-0.5 group-hover:text-white/60 transition"
      />
    </button>
  );
}
