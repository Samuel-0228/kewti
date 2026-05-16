import { cn } from "@/lib/utils"

type KewtiLogoProps = {
  className?: string
  compact?: boolean
}

export function KewtiLogo({ className, compact = false }: KewtiLogoProps) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <div className="group relative flex size-11 items-center justify-center rounded-[8px] border border-white/10 bg-white/[0.04] shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] transition-all duration-300 hover:border-white/20 hover:bg-white/[0.06]">
        <svg viewBox="0 0 48 48" className="size-7 text-[var(--kewti-cream)] transition-colors duration-300 group-hover:text-white" aria-hidden>
          <rect x="8" y="8" width="32" height="32" rx="7" fill="none" stroke="currentColor" strokeWidth="1.4" opacity="0.45" />
          <path d="M16 14v20M16 24l13-10M16 24l14 10" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="34" cy="14" r="2" fill="currentColor" opacity="0.65" />
        </svg>
        <div className="absolute inset-x-2 bottom-2 h-px bg-gradient-to-r from-transparent via-white/35 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-100" />
      </div>

      {!compact && (
        <div className="flex flex-col leading-none">
          <span className="font-display text-[1.05rem] font-extrabold tracking-tight text-[var(--kewti-cream)]">Kewti</span>
          <span className="mt-1 text-[10px] uppercase tracking-[0.24em] text-white/40">Component library</span>
        </div>
      )}
    </div>
  )
}