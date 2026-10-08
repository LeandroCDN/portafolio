import { profile } from '@/data/site'
import { Reveal } from './motion'

export default function Contact() {
  const links = [
    { href: profile.x, label: 'X' },
    { href: profile.linkedin, label: 'LinkedIn' },
    { href: profile.github, label: 'GitHub' },
    { href: profile.youtube, label: 'YouTube' },
  ]

  return (
    <>
      <section id="contact" className="flex scroll-mt-20 flex-col gap-7 border-t border-line py-14 md:py-20">
        <span className="font-mono text-sm text-accent">{'// contact'}</span>
        <h2 className="max-w-3xl [text-wrap:balance] font-display text-4xl font-bold leading-[1.02] tracking-tight sm:text-5xl lg:text-6xl">
          Need contracts shipped or audited? Let&apos;s talk.
        </h2>
        <div className="flex flex-wrap gap-3">
          {profile.email && (
            <a href={`mailto:${profile.email}`} className="rounded bg-accent px-6 py-4 font-medium text-ink">
              {profile.email}
            </a>
          )}
          {links.map((l, i) => (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className={
                !profile.email && i === 0
                  ? 'rounded bg-accent px-6 py-4 font-medium text-ink'
                  : 'rounded border border-edge px-6 py-4 transition-colors hover:border-fg'
              }
            >
              {l.label} ↗
            </a>
          ))}
        </div>
      </section>
      <footer className="flex flex-wrap justify-between gap-3 border-t border-line pb-10 pt-7 font-mono text-[13px] text-dim">
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <span>{profile.location}</span>
      </footer>
    </>
  )
}
