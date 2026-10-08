import { ArrowUpRight } from 'lucide-react'
import { projects } from '@/data/site'
import ContractList from './ContractList'
import { CountUp, Reveal } from './motion'

const slug = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-')

function Card({ p, volume }) {
  const showVolume = p.showVolume && volume?.length > 0
  return (
    <article
      className={`group relative flex h-full flex-col gap-4 rounded-lg border border-line bg-panel p-6 transition-colors duration-300 hover:border-edge md:p-7 ${
        p.featured ? 'md:p-8' : ''
      }`}
    >
      <div className="flex flex-wrap gap-2 font-mono text-xs">
        {p.live && (
          <span className="flex items-center gap-1.5 rounded-sm bg-accent px-2 py-1 text-ink">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-ink" aria-hidden="true" />
            LIVE
          </span>
        )}
        {p.tags.map((t) => (
          <span key={t} className="rounded-sm border border-edge px-2 py-1 text-muted">
            {t}
          </span>
        ))}
      </div>

      <div className={`flex flex-col gap-6 ${showVolume ? 'lg:flex-row lg:items-start lg:justify-between' : ''}`}>
        <div className="flex flex-col gap-3">
          <h3 className={`font-display font-medium tracking-tight ${p.featured ? 'text-3xl md:text-4xl' : 'text-2xl'}`}>
            {p.url ? (
              <a href={p.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 hover:text-accent">
                {p.name}
                <ArrowUpRight size={p.featured ? 26 : 20} className="text-dim transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            ) : (
              p.name
            )}
          </h3>
          <p className={`leading-relaxed text-muted ${p.featured ? 'max-w-xl md:text-lg' : ''}`}>{p.description}</p>
        </div>

        {showVolume && (
          <dl className="flex shrink-0 gap-8 rounded-md border border-line bg-ink/60 px-5 py-4">
            {volume.map((v) => (
              <div key={v.symbol} className="flex flex-col-reverse gap-1">
                <dt className="font-mono text-xs text-dim">{v.symbol} wagered</dt>
                <dd className="font-display text-3xl font-medium text-accent">
                  <CountUp value={v.amount} />
                </dd>
              </div>
            ))}
          </dl>
        )}
      </div>

      <span className="mt-auto pt-1 font-mono text-[13px] text-dim">{p.role}</span>

      {p.contracts?.length > 0 && <ContractList contracts={p.contracts} explorer={p.explorer} id={slug(p.name)} />}
    </article>
  )
}

export default function Work({ volume }) {
  return (
    <section id="work" className="flex scroll-mt-20 flex-col gap-10 py-20">
      <Reveal className="flex flex-wrap items-baseline justify-between gap-3">
        <h2 className="font-display text-4xl font-medium tracking-tight md:text-5xl">Selected work</h2>
        <span className="font-mono text-sm text-dim">01 — {String(projects.length).padStart(2, '0')}</span>
      </Reveal>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal key={p.name} delay={(i % 2) * 0.08} className={p.featured ? 'md:col-span-2' : ''}>
            <Card p={p} volume={volume} />
          </Reveal>
        ))}
      </div>
    </section>
  )
}
