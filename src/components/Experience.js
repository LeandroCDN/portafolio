import { experience } from '@/data/site'
import { Reveal } from './motion'

export default function Experience() {
  return (
    <section id="experience" className="flex scroll-mt-20 flex-col gap-10 border-t border-line py-20">
      <Reveal><h2 className="font-display text-4xl font-medium tracking-tight md:text-5xl">Experience</h2></Reveal>
      <Reveal as="ol" className="border-b border-line">
        {experience.map((e) => (
          <li key={e.company} className="grid gap-3 border-t border-line py-7 transition-colors hover:bg-panel/50 md:grid-cols-3 md:gap-6">
            <div className="flex flex-col gap-1.5">
              {e.url ? (
                <a href={e.url} target="_blank" rel="noopener noreferrer" className="font-display text-2xl font-medium hover:text-accent">
                  {e.company} ↗
                </a>
              ) : (
                <span className="font-display text-2xl font-medium">{e.company}</span>
              )}
              {e.role && <span className="text-sm text-fg/80">{e.role}</span>}
              {e.period && <span className="font-mono text-[13px] text-dim">{e.period}</span>}
            </div>
            <p className="leading-relaxed text-muted md:col-span-2">{e.description}</p>
          </li>
        ))}
      </Reveal>
    </section>
  )
}
