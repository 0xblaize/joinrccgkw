// Minimal stroke icons for the portal. currentColor so they inherit text color.
import type { SVGProps } from "react";

type P = SVGProps<SVGSVGElement>;

const base = {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function HomeIcon(p: P) {
  return (
    <svg {...base} {...p}>
      <path d="M3 10.5 12 3l9 7.5" />
      <path d="M5 9.5V21h14V9.5" />
      <path d="M9.5 21v-6h5v6" />
    </svg>
  );
}

export function ConnectIcon(p: P) {
  return (
    <svg {...base} {...p}>
      <path d="M21 11.5a7.5 7.5 0 0 1-10.9 6.7L4 20l1.8-6.1A7.5 7.5 0 1 1 21 11.5Z" />
    </svg>
  );
}

export function GiveIcon(p: P) {
  return (
    <svg {...base} {...p}>
      <path d="M20.8 8.6a4 4 0 0 0-6.1-5.2L12 6.1 9.3 3.4a4 4 0 0 0-6.1 5.2L12 18l8.8-9.4Z" />
    </svg>
  );
}

export function MeIcon(p: P) {
  return (
    <svg {...base} {...p}>
      <circle cx="12" cy="8" r="3.4" />
      <path d="M4.5 20a7.5 7.5 0 0 1 15 0" />
    </svg>
  );
}

export function BookIcon(p: P) {
  return (
    <svg {...base} {...p}>
      <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v15H6.5A2.5 2.5 0 0 0 4 20.5Z" />
      <path d="M4 20.5A2.5 2.5 0 0 1 6.5 18H20v3H6.5A2.5 2.5 0 0 1 4 18.5" />
    </svg>
  );
}

export function PlayIcon(p: P) {
  return (
    <svg {...base} {...p}>
      <path d="M8 5v14l11-7L8 5Z" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function DocIcon(p: P) {
  return (
    <svg {...base} {...p}>
      <path d="M6 3h8l4 4v14H6Z" />
      <path d="M14 3v4h4" />
      <path d="M9 12h6M9 16h6" />
    </svg>
  );
}

export function CalendarIcon(p: P) {
  return (
    <svg {...base} {...p}>
      <rect x="3.5" y="5" width="17" height="16" rx="2" />
      <path d="M3.5 9.5h17M8 3v4M16 3v4" />
    </svg>
  );
}

export function SearchIcon(p: P) {
  return (
    <svg {...base} {...p}>
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.2-3.2" />
    </svg>
  );
}

export function CheckIcon(p: P) {
  return (
    <svg {...base} {...p}>
      <path d="m5 12.5 4.5 4.5L19 7" />
    </svg>
  );
}

export function ChevronRight(p: P) {
  return (
    <svg {...base} {...p}>
      <path d="m9 6 6 6-6 6" />
    </svg>
  );
}

export function ChevronLeft(p: P) {
  return (
    <svg {...base} {...p}>
      <path d="m15 6-6 6 6 6" />
    </svg>
  );
}

export function CloseIcon(p: P) {
  return (
    <svg {...base} {...p}>
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  );
}

export function HeartHandIcon(p: P) {
  return (
    <svg {...base} {...p}>
      <path d="M11 7.5c-1-2-4.5-2-4.5 1 0 2.2 4.5 5 4.5 5s4.5-2.8 4.5-5c0-3-3.5-3-4.5-1Z" />
      <path d="M3 14.5l3.5 3.5a3 3 0 0 0 2.1.9H15l4-2" />
    </svg>
  );
}

export function ShieldIcon(p: P) {
  return (
    <svg {...base} {...p}>
      <path d="M12 3l7 2.5V11c0 5-3.5 8-7 10-3.5-2-7-5-7-10V5.5Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

export function UsersIcon(p: P) {
  return (
    <svg {...base} {...p}>
      <circle cx="9" cy="8" r="3" />
      <path d="M3.5 20a5.5 5.5 0 0 1 11 0" />
      <path d="M16 5.5a3 3 0 0 1 0 5.8M17 20a5.5 5.5 0 0 0-2-4.3" />
    </svg>
  );
}

export function PinIcon(p: P) {
  return (
    <svg {...base} {...p}>
      <path d="M12 21s7-6 7-11a7 7 0 1 0-14 0c0 5 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

export function PrayIcon(p: P) {
  return (
    <svg {...base} {...p}>
      <path d="M12 3v7M9 6h6" />
      <path d="M7 21c0-3 2-5 5-5s5 2 5 5" />
      <path d="M12 10v6" />
    </svg>
  );
}

export function StarIcon(p: P) {
  return (
    <svg {...base} {...p}>
      <path d="M12 3.5l2.4 5 5.5.8-4 3.9.9 5.5-4.8-2.6-4.8 2.6.9-5.5-4-3.9 5.5-.8Z" />
    </svg>
  );
}

export function BriefcaseIcon(p: P) {
  return (
    <svg {...base} {...p}>
      <rect x="3.5" y="7.5" width="17" height="12" rx="2" />
      <path d="M9 7.5V6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1.5M3.5 12.5h17" />
    </svg>
  );
}

export function CalendarChatIcon(p: P) {
  return (
    <svg {...base} {...p}>
      <path d="M4 5h16v11H9l-4 3v-3H4Z" />
      <path d="M8 9h8M8 12h5" />
    </svg>
  );
}

export function LogoutIcon(p: P) {
  return (
    <svg {...base} {...p}>
      <path d="M15 4h3a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-3" />
      <path d="M10 12H3m0 0 3-3m-3 3 3 3" />
    </svg>
  );
}

export function BellIcon(p: P) {
  return (
    <svg {...base} {...p}>
      <path d="M6 9a6 6 0 1 1 12 0c0 5 2 6 2 6H4s2-1 2-6Z" />
      <path d="M10 20a2 2 0 0 0 4 0" />
    </svg>
  );
}

export function GiftBoxIcon(p: P) {
  return (
    <svg {...base} {...p}>
      <rect x="3.5" y="8.5" width="17" height="12" rx="1.5" />
      <path d="M3.5 12.5h17M12 8.5v12" />
      <path d="M12 8.5S10.5 4 8 4a2 2 0 0 0 0 4.5ZM12 8.5S13.5 4 16 4a2 2 0 0 1 0 4.5Z" />
    </svg>
  );
}

export function CopyIcon(p: P) {
  return (
    <svg {...base} {...p}>
      <rect x="9" y="9" width="11" height="11" rx="2" />
      <path d="M5 15V5a2 2 0 0 1 2-2h8" />
    </svg>
  );
}

export function SparkIcon(p: P) {
  return (
    <svg {...base} {...p}>
      <path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M18 6l-2.5 2.5M8.5 15.5 6 18" />
    </svg>
  );
}
