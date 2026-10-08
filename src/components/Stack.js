import { stack } from '@/data/site'
import { Reveal } from './motion'

export default function Stack() {
  return (
    <section id="stack" className="scroll-mt-20 border-t border-line py-14">
      <Reveal className="grid gap-6 md:grid-cols-[200px_1fr]">
        <h2 className="font-mono text-sm text-accent">{'// stack'}</h2>
        <dl className="grid gap-x-10 gap-y-3 text-sm sm:grid-cols-2">
          {stack.map((s) => (
            <div key={s.group} className="flex gap-4 border-b border-line/70 pb-3">
              <dt className="w-24 shrink-0 font-mono text-xs leading-5 text-dim">{s.group}</dt>
              <dd className="leading-5 text-muted">{s.items.join(' · ')}</dd>
            </div>
          ))}
        </dl>
      </Reveal>
    </section>
  )
}
