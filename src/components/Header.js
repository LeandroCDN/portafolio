import { profile } from '@/data/site'

const links = [
  { href: '#work', label: 'work' },
  { href: '#experience', label: 'experience' },
  { href: '#stack', label: 'stack' },
]

export default function Header() {
  return (
    <header className="flex flex-wrap items-center justify-between gap-4 border-b border-line py-7">
      <a href="#top" className="font-mono text-[15px]">
        {profile.handle}
        <span className="text-accent">_</span>
      </a>
      <nav aria-label="Main" className="flex flex-wrap items-center gap-6 font-mono text-sm">
        {links.map((l) => (
          <a key={l.href} href={l.href} className="text-muted transition-colors hover:text-accent">
            {l.label}
          </a>
        ))}
        <a href="#contact" className="rounded bg-accent px-4 py-2.5 font-medium text-ink">
          hire me
        </a>
      </nav>
    </header>
  )
}
