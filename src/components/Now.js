import { ArrowUpRight } from 'lucide-react'
import { experiments } from '@/data/site'
import { CaseStudyLink, StatusPill } from './ProjectCard'
import { Reveal } from './motion'

export default function Now() {
  if (!experiments?.length) return null

  return (
    <section id="now" className="flex scroll-mt-20 flex-col gap-10 py-20">
      <Reveal className="flex flex-wrap items-baseline justify-between gap-3">
        <h2 className="font-display text-4xl font-medium tracking-tight md:text-5xl">Now building</h2>
        <span className="font-mono text-sm text-dim">{'// in progress'}</span>
      </Reveal>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {experiments.map((e, i) => (
          <Reveal key={e.name} delay={(i % 2) * 0.08}>
            <article className="flex h-full flex-col gap-4 rounded-lg border border-line bg-panel p-6 transition-colors duration-300 hover:border-edge">
              <div className="flex flex-wrap gap-2 font-mono text-xs">
                {e.status && <StatusPill>{e.status}</StatusPill>}
                {e.tags.map((t) => (
                  <span key={t} className="rounded-sm border border-edge px-2 py-1 text-muted">
                    {t}
                  </span>
                ))}
              </div>
              <h3 className="font-display text-2xl font-medium tracking-tight text-accent">
                {e.url ? (
                  <a href={e.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 hover:opacity-80">
                    {e.name}
                    <ArrowUpRight size={20} className="opacity-70" />
                  </a>
                ) : (
                  e.name
                )}
              </h3>
              <p className="leading-relaxed text-muted">{e.description}</p>
              <div className="mt-auto flex flex-wrap items-center justify-between gap-3 pt-1">
                <span className="font-mono text-[13px] text-dim">{e.role}</span>
                <CaseStudyLink slug={e.caseStudy} />
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
