import Reveal from "./Reveal";

export default function SectionHeading({
  chapter,
  eyebrow,
  title,
  description,
  align = "left",
}: {
  chapter?: string;
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  const alignCls =
    align === "center" ? "items-center text-center mx-auto" : "items-start text-left";
  return (
    <div className={`flex flex-col ${alignCls} gap-4 max-w-2xl`}>
      <Reveal>
        <div className="flex items-baseline gap-3">
          {chapter && (
            <>
              <span className="font-display font-semibold text-[color:var(--burgundy-2)] tabular text-sm leading-none">
                {chapter}
              </span>
              <span className="h-3 w-px self-center bg-[color:var(--burgundy-2)]/70" />
            </>
          )}
          <span className="eyebrow-burgundy">{eyebrow}</span>
        </div>
      </Reveal>
      <Reveal delay={80}>
        <h2 className="font-display font-semibold text-3xl sm:text-4xl leading-tight tracking-tight">
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={140}>
          <p className="text-base text-white/65 max-w-xl leading-relaxed">
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
