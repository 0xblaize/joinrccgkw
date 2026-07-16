import type { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "ghost" | "subtle";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  full?: boolean;
  children: ReactNode;
};

const variants: Record<Variant, string> = {
  primary: "btn-primary",
  ghost: "btn-ghost",
  subtle:
    "bg-white/[0.04] text-white border border-[color:var(--hair-strong)] hover:bg-white/[0.08] transition-colors",
};

export default function Button({
  variant = "primary",
  full = false,
  className = "",
  children,
  ...rest
}: Props) {
  return (
    <button
      className={`inline-flex items-center justify-center gap-2 h-12 px-5 rounded-full text-sm font-medium disabled:opacity-50 disabled:pointer-events-none ${
        variants[variant]
      } ${full ? "w-full" : ""} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}
