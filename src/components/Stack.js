import { stack } from '@/data/site'
import { Reveal } from './motion'

export default function Stack() {
  return (
    <section id="stack" className="grid scroll-mt-20 gap-10 border-t border-line py-20 md:grid-cols-2">
      <Reveal><h2 className="font-display text-4xl font-medium tracking-tight md:text-5xl">Stack</h2></Reveal>
      <Reveal delay={0.08} className="flex flex-col gap-7">
        {stack.map((s) => (
          <div key={s.group} className="flex flex-col gap-3">
            <span className="font-mono text-[13px] text-accent">{`// ${s.group}`}</span>
            <ul className="flex flex-wrap gap-2 font-mono text-sm">
              {s.items.map((i) => (
                <li key={i} className="rounded border border-edge px-3 py-2 transition-colors hover:border-accent hover:text-accent">
                  {i}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </Reveal>
    </section>
  )
}
