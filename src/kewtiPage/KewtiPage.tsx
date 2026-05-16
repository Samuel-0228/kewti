import { useReveal } from '@/components/kewti/useReveal';
import { DottedSurface } from '@/components/ui/dotted-surface';
import { ComponentTicker } from '@/components/kewti/ComponentTicker';
import { InstallBox } from '@/components/kewti/InstallBox';
import { KewtiCursor } from '@/components/kewti/KewtiCursor';
import { ThemeToggle } from '@/components/kewti/ThemeToggle';
import { cn } from '@/lib/utils';
import KewtiMascot from '../kewti-mascot/component.tsx';

type NavProps = {
  onNavigate?: (route: string) => void;
};

const COMPONENTS = [
  { name: 'KewtiInput', description: 'Input field variant with built-in styling and states.', glow: 'glow-green', accent: 'text-[var(--kewti-green)]' },
  { name: 'KewtiLocationSelector', description: 'Cascading dropdowns for selecting regions, zones, woredas, and sub-cities.', glow: 'glow-gold', accent: 'text-[var(--kewti-gold)]' },
  { name: 'KewtiPassword', description: 'Secure password input field.', glow: 'glow-red', accent: 'text-[var(--kewti-red)]' },
  { name: 'KewtiMap', description: 'Interactive mapping integration for picking location coordinates.', glow: 'glow-green', accent: 'text-[var(--kewti-green)]' },
  { name: 'KewtiFonts', description: 'Custom Ethiopian font application component.', glow: 'glow-gold', accent: 'text-[var(--kewti-gold)]' },
  { name: 'KewtiIcons', description: 'Comming soon ..', glow: 'glow-red', accent: 'text-[var(--kewti-red)]' },
  { name: 'EthiopianCalendar', description: 'Calendar implementation supporting Gregorian-to-Habeshan date conversions.', glow: 'glow-green', accent: 'text-[var(--kewti-green)]' },
  { name: 'TransactionValidator', description: 'Payment parsing and validation flows for CBE and Telebirr.', glow: 'glow-gold', accent: 'text-[var(--kewti-gold)]' },
  { name: 'DottedSurface', description: 'A beautiful animated 3D dotted surface background using Three.js.', glow: 'glow-red', accent: 'text-[var(--kewti-red)]' },
] as const;

export default function KewtiPage({ onNavigate }: NavProps) {
  const { ref: sectionRef, visible: sectionVisible } = useReveal<HTMLElement>();

  const smoothScrollTo = (e: React.MouseEvent<Element>, targetId: string) => {
    e.preventDefault();
    document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const goDocs = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onNavigate) onNavigate('docs');
    else smoothScrollTo(e, 'components');
  };

  const goSlides = (e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate?.('slides');
  };

  return (
    <div className="kewti-custom-cursor relative min-h-screen bg-background font-body text-foreground selection:bg-[var(--kewti-cream)] selection:text-[var(--kewti-black)]">
      <KewtiCursor />

      <nav className="kewti-nav fixed inset-x-0 top-0 z-50 flex animate-kewti-slide-down items-center justify-between px-4 py-3 sm:px-8 lg:px-12 backdrop-blur-md">
        <a
          href="#"
          className="flex items-center gap-2.5 font-display text-lg font-extrabold tracking-tight text-[var(--kewti-cream)] no-underline"
        >
          <span className="relative grid size-6 place-items-center overflow-hidden rounded-sm border border-[var(--kewti-cream)]">
            <span className="size-2 animate-kewti-pulse-dot rounded-full bg-[var(--kewti-green)]" />
          </span>
          Kewti
        </a>

        <ul className="hidden items-center gap-6 list-none md:flex">
          <li>
            <a
              href="#components"
              onClick={(e) => smoothScrollTo(e, 'components')}
              className="text-[11px] font-medium uppercase tracking-wider text-[var(--kewti-muted)] no-underline transition-colors hover:text-[var(--kewti-cream)]"
            >
              Components
            </a>
          </li>
          <li>
            <button
              type="button"
              onClick={goDocs}
              className="text-[11px] font-medium uppercase tracking-wider text-[var(--kewti-muted)] transition-colors hover:text-[var(--kewti-cream)] bg-transparent border-0 cursor-pointer"
            >
              Docs
            </button>
          </li>
          <li>
            <a
              href="https://github.com/coderade1905/GDG"
              target="_blank"
              rel="noreferrer"
              className="text-[11px] font-medium uppercase tracking-wider text-[var(--kewti-muted)] no-underline transition-colors hover:text-[var(--kewti-cream)]"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href="#docs"
              onClick={goDocs}
              className="kewti-btn kewti-btn-primary !px-3 !py-1 !text-[11px] !font-medium"
            >
              Get Started →
            </a>
          </li>
        </ul>
      </nav>

      <section className="relative min-h-screen overflow-hidden grid grid-cols-1 gap-8 px-4 pb-16 pt-24 sm:px-8 lg:grid-cols-2 lg:gap-0 lg:px-12 lg:pt-28 xl:px-16">
        <DottedSurface />
        
        {/* Technical Vignette & Split Line */}
        <div className="pointer-events-none absolute inset-0 z-[1] opacity-100">
          {/* Radial Vignette */}
          <div 
            className="absolute inset-0"
            style={{
              background: 'radial-gradient(ellipse at center, transparent 40%, var(--background) 85%)'
            }}
          />
          {/* Vertical Split Line */}
          <div className="absolute inset-y-0 left-1/2 w-px bg-white/[0.05] hidden lg:block" />
        </div>

        {/* Corner Bracket Markers */}
        <div className="pointer-events-none absolute inset-x-4 inset-y-24 z-[2] sm:inset-x-8 lg:inset-x-12 xl:inset-x-16">
          <div className="absolute left-0 top-0 size-[10px] border-l border-t border-white/10" />
          <div className="absolute right-0 top-0 size-[10px] border-r border-t border-white/10" />
          <div className="absolute bottom-0 left-0 size-[10px] border-l border-bottom border-white/10" />
          <div className="absolute bottom-0 right-0 size-[10px] border-r border-bottom border-white/10" />
        </div>

        <div className="relative z-10 flex flex-col justify-center py-8 lg:py-16 lg:pr-8">
          <div
            className="mb-8 inline-flex w-fit items-center gap-2 rounded-full border border-[rgba(46,204,113,0.25)] bg-[rgba(46,204,113,0.1)] px-3.5 py-1.5 text-[11px] font-medium uppercase tracking-widest text-[var(--kewti-green)] opacity-0 animate-kewti-fade-up"
            style={{ animationDelay: '0.3s' }}
          >
            <span className="size-1.5 animate-kewti-pulse-dot rounded-full bg-[var(--kewti-green)]" />
            Open Source
          </div>

          <h1
            className="mb-6 font-display text-[clamp(2.2rem,5vw,4.25rem)] font-extrabold leading-[0.95] tracking-[-0.04em] opacity-0 animate-kewti-fade-up"
            style={{ animationDelay: '0.5s' }}
          >
            <span className="block">Component</span>
            <span className="block">library for</span>
            <span className="block">
              <span className="text-[var(--kewti-green)]">Ethio</span>
              <span className="text-[var(--kewti-gold)]">p</span>
              <span className="text-[var(--kewti-red)]">ian</span>
            </span>
            <span className="block">Apps</span>
          </h1>

          <p
            className="mb-8 max-w-md text-[15px] leading-relaxed text-[var(--kewti-muted)] opacity-0 animate-kewti-fade-up"
            style={{ animationDelay: '0.7s' }}
          >
            Accessible. Customizable. Open Source.
          </p>

          <div
            className="flex flex-wrap gap-3 opacity-0 animate-kewti-fade-up"
            style={{ animationDelay: '0.9s' }}
          >
            <a href="#docs" onClick={goDocs} className="kewti-btn kewti-btn-primary">
              Get Started <span className="text-lg transition-transform group-hover:translate-x-0.5">→</span>
            </a>
            <a href="https://github.com/coderade1905/GDG" target="_blank" rel="noreferrer" className="kewti-btn kewti-btn-ghost">
              GitHub
            </a>
            <button type="button" onClick={goSlides} className="kewti-btn kewti-btn-ghost">
              slides
            </button>
            <button type="button" onClick={goDocs} className="kewti-btn kewti-btn-ghost-green">
              Documentation
            </button>
          </div>
        </div>

        <div className="relative z-10 flex flex-col justify-center gap-6 py-8 opacity-0 animate-kewti-fade-in-right lg:py-16">
          <div className="flex justify-center">
            <KewtiMascot />
          </div>

          <InstallBox />

          <div className="grid grid-cols-3 gap-4">
            {[
              { value: '8+', label: 'Components', color: 'var(--kewti-green)' },
              { value: '100%', label: 'Open Source', color: 'var(--kewti-gold)' },
              { value: 'AM', label: 'Amharic Ready', color: 'var(--kewti-red)' },
            ].map((stat) => (
              <div key={stat.label} className="kewti-stat-card !py-3">
                <span className="mb-0.5 block font-display text-[18px] font-extrabold" style={{ color: stat.color }}>
                  {stat.value}
                </span>
                <span className="text-[10px] uppercase tracking-wider text-[var(--kewti-muted)]">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ComponentTicker />

      <section id="docs" className="relative z-20 bg-background scroll-mt-24 px-4 py-4 sm:px-8 lg:px-12 xl:px-16">
        <div className="kewti-section-divider" />
      </section>

      <section
        id="components"
        ref={sectionRef}
        className={cn(
          'relative z-20 bg-background scroll-mt-24 px-4 py-16 sm:px-8 sm:py-24 lg:px-12 xl:px-16',
          'kewti-reveal',
          sectionVisible && 'is-visible',
        )}
      >
        <div className="mb-12 flex flex-col gap-6 sm:mb-16 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-3 font-mono-kewti text-[11px] uppercase tracking-[0.15em] text-white/35">// components</p>
            <h2 className="font-display text-[clamp(2rem,4vw,3.25rem)] font-extrabold leading-none tracking-[-0.04em] text-[var(--kewti-cream)]">
              Component library for Ethiopian Apps
            </h2>
            <p className="mt-3 text-[15px] text-white/55">open source Ethiopian component library</p>
            <p className="mt-2 text-[15px] text-white/45">Explore the available components in the library.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {COMPONENTS.map((comp, index) => (
            <div
              key={comp.name}
              onClick={() => {
                if (comp.name === 'DottedSurface') {
                  onNavigate?.('dotted-surface');
                }
              }}
              className="cursor-pointer"
            >
              <ComponentCard {...comp} delay={index * 0.1} />
            </div>
          ))}
        </div>
      </section>

      <footer className="relative z-20 bg-background flex flex-wrap items-center justify-between gap-6 border-t border-[var(--kewti-border)] px-4 py-12 sm:px-8 lg:px-12 xl:px-16">
        <div>
          <p className="font-display text-[28px] font-extrabold tracking-tight">Kewti</p>
          <p className="mt-2 text-[13px] text-[var(--kewti-muted)]">open source Ethiopian component library</p>
          <p className="mt-4 text-sm text-[var(--kewti-muted)]">
            Built by{' '}
            <a href="#" className="font-medium text-[var(--kewti-cream)] underline underline-offset-4">
              Kewti
            </a>
            . The source code is available on{' '}
            <a href="https://github.com/coderade1905/GDG" className="font-medium text-[var(--kewti-cream)] underline underline-offset-4">
              GitHub
            </a>
            .
          </p>
        </div>
        <span className="animate-kewti-float text-[32px]" aria-hidden>
          🇪🇹
        </span>
        <p className="text-[13px] text-[var(--kewti-muted)]">Accessible · Customizable · Open Source</p>
      </footer>

      <ThemeToggle />
    </div>
  );
}

function ComponentCard({
  name,
  description,
  glow,
  delay,
}: {
  name: string;
  description: string;
  glow: string;
  delay: number;
}) {
  const hoverTone =
    glow === 'glow-green'
      ? 'hover:!border-[rgba(46,204,113,0.36)] hover:shadow-[0_0_0_1px_rgba(46,204,113,0.08),0_10px_30px_rgba(0,0,0,0.24)]'
      : glow === 'glow-gold'
        ? 'hover:!border-[rgba(230,168,23,0.34)] hover:shadow-[0_0_0_1px_rgba(230,168,23,0.08),0_10px_30px_rgba(0,0,0,0.24)]'
        : 'hover:!border-[rgba(232,54,42,0.34)] hover:shadow-[0_0_0_1px_rgba(232,54,42,0.08),0_10px_30px_rgba(0,0,0,0.24)]';

  const hoverAccentBar =
    glow === 'glow-green'
      ? 'group-hover:bg-[rgba(46,204,113,0.9)]'
      : glow === 'glow-gold'
        ? 'group-hover:bg-[rgba(230,168,23,0.9)]'
        : 'group-hover:bg-[rgba(232,54,42,0.9)]';

  const hoverAccentIcon =
    glow === 'glow-green'
      ? 'group-hover:border-[rgba(46,204,113,0.35)] group-hover:bg-[rgba(46,204,113,0.1)] group-hover:text-[rgba(46,204,113,0.95)]'
      : glow === 'glow-gold'
        ? 'group-hover:border-[rgba(230,168,23,0.35)] group-hover:bg-[rgba(230,168,23,0.1)] group-hover:text-[rgba(230,168,23,0.95)]'
        : 'group-hover:border-[rgba(232,54,42,0.35)] group-hover:bg-[rgba(232,54,42,0.1)] group-hover:text-[rgba(232,54,42,0.95)]';

  return (
    <article
      className={cn(
        'kewti-comp-card group relative opacity-0 animate-kewti-fade-up !rounded-[6px] !border !border-white/[0.08] !bg-[#101010] !p-5 !shadow-none transition-all duration-300 hover:-translate-y-0.5 hover:!border-white/20 hover:bg-[#141414]',
        hoverTone,
      )}
      style={{ animationDelay: `${delay}s` }}
      tabIndex={0}
    >
      <div className={cn('absolute inset-x-0 top-0 h-px opacity-0 transition-opacity duration-300 group-hover:opacity-100', hoverAccentBar)} />
      <div
        className={cn(
          'kewti-comp-glow pointer-events-none absolute inset-0 rounded-[inherit] border border-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100',
          glow === 'glow-green' && 'group-hover:border-[rgba(46,204,113,0.08)]',
          glow === 'glow-gold' && 'group-hover:border-[rgba(230,168,23,0.08)]',
          glow === 'glow-red' && 'group-hover:border-[rgba(232,54,42,0.08)]',
        )}
      />
      <div className="relative mb-5 flex items-start justify-between gap-4">
        <div
          className={cn(
            'grid size-8 place-items-center rounded-[5px] border border-white/10 bg-white/[0.03] text-xs text-white/70 transition-all duration-300',
            hoverAccentIcon,
          )}
        >
          ◆
        </div>
        <span className="rounded-[5px] border border-white/10 bg-white/[0.03] px-2.5 py-1 font-mono-kewti text-[10px] text-white/45 transition-colors duration-300 group-hover:border-white/15 group-hover:text-white/60">
          &lt;{name} /&gt;
        </span>
      </div>
      <h3 className="mb-1.5 font-display text-base font-bold tracking-tight text-[var(--kewti-cream)]">{name}</h3>
      <p className="text-[12px] leading-relaxed text-white/50">{description}</p>
    </article>
  );
}
