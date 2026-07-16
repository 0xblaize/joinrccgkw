import type { ReactNode } from "react";

// Top-of-tab header. `back` renders a back link when provided.
export default function PageHeader({
  eyebrow,
  title,
  description,
  right,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  right?: ReactNode;
}) {
  return (
    <div className="flex items-start justify-between gap-4 mb-6">
      <div>
        {eyebrow && <div className="eyebrow-burgundy mb-2">{eyebrow}</div>}
        <h1 className="font-display font-semibold text-2xl sm:text-3xl leading-tight">
          {title}
        </h1>
        {description && (
          <p className="mt-2 text-sm text-white/60 max-w-md leading-relaxed">
            {description}
          </p>
        )}
      </div>
      {right && <div className="shrink-0">{right}</div>}
    </div>
  );
}
