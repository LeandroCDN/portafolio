import { stack } from '@/data/site'

export default function Marquee() {
  const items = stack.flatMap((s) => s.items)
  const row = [...items, ...items]
  return (
    <div
      aria-hidden="true"
      className="relative overflow-hidden border-y border-line py-4 [mask-image:linear-gradient(90deg,transparent,#000_10%,#000_90%,transparent)]"
    >
      <div className="flex w-max animate-marquee font-mono text-sm text-dim motion-reduce:animate-none">
        {row.map((t, i) => (
          <span key={i} className="flex items-center gap-10 whitespace-nowrap pr-10">
            {t}
            <span className="text-accent">✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}
