import { projects, sideProjects } from '@/data/site'
import ProjectCard from './ProjectCard'
import { Reveal } from './motion'

export default function Work({ volume }) {
  return (
    <section id="work" className="flex scroll-mt-20 flex-col gap-8 py-14 md:gap-10 md:py-20">
      <Reveal className="flex flex-wrap items-baseline justify-between gap-3">
        <h2 className="font-display text-4xl font-medium tracking-tight md:text-5xl">Selected work</h2>
        <span className="font-mono text-sm text-dim">01 — {String(projects.length).padStart(2, '0')}</span>
      </Reveal>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal key={p.name} delay={(i % 2) * 0.08} className={p.featured ? 'md:col-span-2' : ''}>
            <ProjectCard p={p} volume={volume} />
          </Reveal>
        ))}
      </div>

      {sideProjects?.length > 0 && (
        <Reveal className="mt-6 flex flex-col gap-4">
          <h3 className="font-mono text-sm text-dim">{'// also built'}</h3>
          <ul className="border-t border-line">
            {sideProjects.map((sp) => (
              <li key={sp.name} className="flex flex-col gap-1 border-b border-line py-4 sm:flex-row sm:items-baseline sm:gap-6">
                <span className="shrink-0 font-display text-lg font-medium sm:w-64">
                  {sp.url ? (
                    <a href={sp.url} target="_blank" rel="noopener noreferrer" className="hover:text-accent">
                      {sp.name} ↗
                    </a>
                  ) : (
                    sp.name
                  )}
                </span>
                <span className="text-sm leading-relaxed text-muted">{sp.description}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      )}
    </section>
  )
}
