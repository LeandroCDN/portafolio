import { profile } from '@/data/site'

const links = [
  { href: '/#now', label: 'now' },
  { href: '/#work', label: 'work' },
  { href: '/#experience', label: 'experience' },
  { href: '/#stack', label: 'stack' },
]

export default function Header() {
  return (
    <header className="sticky top-0 z-20 -mx-4 flex items-center justify-between gap-4 border-b border-line bg-ink/80 px-4 py-3 backdrop-blur-md sm:-mx-6 sm:px-6 sm:py-5">
      <a href="/#top" className="font-mono text-[15px]">
        {profile.handle}
        <span className="text-accent">_</span>
      </a>
      <nav aria-label="Main" className="flex items-center gap-6 font-mono text-sm">
        {links.map((l) => (
          <a key={l.href} href={l.href} className="hidden text-muted transition-colors hover:text-accent sm:inline">
            {l.label}
          </a>
        ))}
        <a href="/#contact" className="rounded bg-accent px-4 py-2 font-medium text-ink transition-transform hover:-translate-y-0.5">
          hire me
        </a>
      </nav>
    </header>
  )
}
