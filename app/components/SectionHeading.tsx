import Reveal from "./Reveal";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: {
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
        <div className="flex items-center gap-3">
          <span className="h-px w-8 bg-[color:var(--burgundy-2)]" />
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
