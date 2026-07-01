export default function Logo({ small = false }: { small?: boolean }) {
  return (
    <div className="inline-flex items-center gap-3">
      <span className="relative grid place-items-center w-9 h-9 rounded-full border border-white/20">
        <span className="absolute inset-[3px] rounded-full bg-[color:var(--burgundy)]" />
        <span className="relative font-display font-bold text-[12px] tracking-wider text-white">
          KW
        </span>
      </span>
      {!small && (
        <span className="hidden sm:flex flex-col leading-[1.05]">
          <span className="text-[12px] tracking-[0.28em] text-white uppercase">
            Kings World
          </span>
          <span className="text-[9px] tracking-[0.4em] text-white/50 uppercase">
            RCCG · Ile-Ife
          </span>
        </span>
      )}
    </div>
  );
}
