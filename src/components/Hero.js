import { ArrowRight, Download, Github } from 'lucide-react'
import { profile, stats } from '@/data/site'
import { CountUp, Reveal } from './motion'

const lgCols = ['', 'lg:grid-cols-1', 'lg:grid-cols-2', 'lg:grid-cols-3', 'lg:grid-cols-4']

export default function Hero({ volume }) {
  const items = [
    ...stats.filter((s) => s.value).map((s) => ({ ...s, node: s.value })),
    ...(volume ?? []).map((v) => ({
      label: `${v.symbol} wagered on BirdGames`,
      node: <CountUp value={v.amount} />,
    })),
  ]

  return (
    <section id="top" className="relative isolate pb-12 pt-10 md:pb-20 md:pt-24">
      {/* dotted grid, faded toward the edges */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(#2A2C26_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_70%_60%_at_30%_40%,#000_40%,transparent_100%)]"
      />

      <div className="flex flex-col gap-7">
        {profile.available && (
          <Reveal>
            <p className="inline-flex items-center gap-2.5 rounded-full border border-line bg-panel/80 px-3.5 py-1.5 font-mono text-xs text-accent sm:text-sm">
              <span className="relative flex h-2 w-2" aria-hidden="true">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              {profile.available} · {profile.location}
            </p>
          </Reveal>
        )}

        <Reveal delay={0.05}>
          <h1 className="max-w-4xl [text-wrap:balance] font-display text-[40px] font-bold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
            I build systems that run <span className="text-accent">on-chain</span> — and the agents that run them.
          </h1>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="max-w-2xl text-base leading-relaxed text-muted md:text-lg">
            {profile.name}. {profile.intro}
          </p>
        </Reveal>

        <Reveal delay={0.15} className="flex flex-wrap gap-3">
          <a href="#contact" className="group inline-flex items-center gap-2 rounded bg-accent px-5 py-3.5 font-medium text-ink">
            Start a project
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
          </a>
          <a href={profile.cv} className="inline-flex items-center gap-2 rounded border border-edge px-5 py-3.5 transition-colors hover:border-fg">
            <Download size={16} /> CV
          </a>
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded border border-edge px-5 py-3.5 transition-colors hover:border-fg">
            <Github size={16} /> GitHub
          </a>
        </Reveal>
      </div>

      {items.length > 0 && (
        <Reveal delay={0.2}>
          <dl className={`mt-10 md:mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-line bg-line ${lgCols[Math.min(items.length, 4)]}`}>
            {items.map((s, i) => (
              <div key={s.label} className={`flex flex-col-reverse gap-1.5 bg-ink px-5 py-5 ${items.length % 2 && i === items.length - 1 ? 'col-span-2 lg:col-span-1' : ''}`}>
                <dt className="font-mono text-xs text-dim">{s.label}</dt>
                <dd className="font-display text-3xl font-medium md:text-4xl">{s.node}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      )}
    </section>
  )
}
