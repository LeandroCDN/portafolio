import { projects } from '@/data/site'

function Card({ p, volume }) {
  const Tag = p.url ? 'a' : 'div'
  return (
    <Tag
      {...(p.url ? { href: p.url, target: '_blank', rel: 'noopener noreferrer' } : {})}
      className={`flex flex-col gap-4 rounded-lg border border-line bg-panel p-7 transition-colors ${
        p.url ? 'hover:border-edge' : ''
      } ${p.featured ? 'md:col-span-2 md:p-9' : ''}`}
    >
      <div className="flex flex-wrap gap-2 font-mono text-xs">
        {p.live && <span className="rounded-sm bg-accent px-2 py-1 text-ink">LIVE</span>}
        {p.tags.map((t) => (
          <span key={t} className="rounded-sm border border-edge px-2 py-1 text-muted">
            {t}
          </span>
        ))}
      </div>
      <h3 className={`font-display font-medium ${p.featured ? 'text-4xl md:text-5xl' : 'text-[28px]'}`}>
        {p.name}
        {p.url && <span className="text-dim"> ↗</span>}
      </h3>
      <p className={`leading-relaxed text-muted ${p.featured ? 'max-w-2xl text-lg' : ''}`}>{p.description}</p>
      {p.showVolume && volume?.length > 0 && (
        <p className="font-mono text-sm text-accent">
          {volume.map((v) => `${v.value} ${v.symbol}`).join(' + ')} wagered
        </p>
      )}
      <span className="mt-auto pt-2 font-mono text-[13px] text-dim">{p.role}</span>
    </Tag>
  )
}

export default function Work({ volume }) {
  return (
    <section id="work" className="flex flex-col gap-10 py-12 md:pb-24">
      <div className="flex flex-wrap items-baseline justify-between gap-3">
        <h2 className="font-display text-4xl font-medium tracking-tight md:text-5xl">Selected work</h2>
        <span className="font-mono text-sm text-dim">01 — {String(projects.length).padStart(2, '0')}</span>
      </div>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {projects.map((p) => (
          <Card key={p.name} p={p} volume={volume} />
        ))}
      </div>
    </section>
  )
}
