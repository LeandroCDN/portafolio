import { profile, stats } from '@/data/site'

export default function Hero({ volume }) {
  const items = [
    ...stats.filter((s) => s.value),
    ...(volume ?? []).map((v) => ({ value: `${v.value} ${v.symbol}`, label: 'wagered on BirdGames, on-chain' })),
  ]

  return (
    <section id="top" className="flex flex-col gap-8 pb-24 pt-20 md:pt-28">
      {profile.available && (
        <p className="flex items-center gap-2.5 font-mono text-sm text-accent">
          <span className="inline-block h-2 w-2 rounded-full bg-accent" aria-hidden="true" />
          {profile.available} · {profile.location}
        </p>
      )}
      <h1 className="max-w-5xl font-display text-5xl font-bold leading-[0.95] tracking-tight sm:text-7xl lg:text-[104px]">
        {profile.headline}
      </h1>
      <p className="max-w-2xl text-lg leading-relaxed text-muted md:text-xl">
        {profile.name}. {profile.intro}
      </p>
      <div className="mt-2 flex flex-wrap gap-3">
        <a href="#contact" className="rounded bg-accent px-6 py-4 font-medium text-ink">
          Start a project
        </a>
        <a href={profile.cv} className="rounded border border-edge px-6 py-4 transition-colors hover:border-fg">
          Download CV
        </a>
        <a href={profile.github} className="rounded border border-edge px-6 py-4 transition-colors hover:border-fg">
          GitHub ↗
        </a>
      </div>

      {items.length > 0 && (
        <dl className="mt-12 grid grid-cols-1 border-y border-line sm:grid-cols-2 lg:grid-cols-4">
          {items.map((s, i) => (
            <div
              key={s.label + i}
              className={`flex flex-col-reverse gap-1.5 py-6 sm:px-6 ${i % 2 === 0 ? 'sm:pl-0' : 'sm:border-l sm:border-line'} ${i % 4 !== 0 ? 'lg:border-l lg:border-line lg:pl-6' : 'lg:border-l-0 lg:pl-0'}`}
            >
              <dt className="font-mono text-[13px] text-dim">{s.label}</dt>
              <dd className="font-display text-4xl font-medium">{s.value}</dd>
            </div>
          ))}
        </dl>
      )}
    </section>
  )
}
