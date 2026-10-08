'use client'

import { useState } from 'react'
import Link from 'next/link'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, ArrowUpRight, ChevronDown } from 'lucide-react'
import ContractList from './ContractList'
import { CountUp } from './motion'

const slug = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-')
const fade = { initial: { opacity: 0, y: 6 }, animate: { opacity: 1, y: 0 }, exit: { opacity: 0, y: -6 }, transition: { duration: 0.2 } }

export function StatusPill({ children }) {
  return (
    <span className="flex items-center gap-1.5 rounded-sm border border-accent px-2 py-1 text-accent">
      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" aria-hidden="true" />
      {children}
    </span>
  )
}

export function CaseStudyLink({ slug: s }) {
  if (!s) return null
  return (
    <Link href={`/work/${s}`} className="group/cs inline-flex items-center gap-1.5 font-mono text-sm text-fg hover:text-accent">
      Read case study <ArrowRight size={14} className="transition-transform group-hover/cs:translate-x-0.5" />
    </Link>
  )
}

export default function ProjectCard({ p, volume }) {
  const [open, setOpen] = useState(false)
  const hasContracts = p.contracts?.length > 0
  const showVolume = p.showVolume && volume?.length > 0
  const panelId = `${slug(p.name)}-contracts`
  const titleSize = p.featured ? 'text-3xl md:text-4xl' : 'text-2xl'

  let title
  if (p.url) {
    title = (
      <a href={p.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-accent hover:opacity-80">
        {p.name}
        <ArrowUpRight size={p.featured ? 26 : 20} className="opacity-70" />
      </a>
    )
  } else if (hasContracts) {
    title = (
      <button
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((o) => !o)}
        className="inline-flex items-center gap-1.5 text-left text-accent hover:opacity-80"
      >
        {p.name}
        <motion.span animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.25 }} className="opacity-70">
          <ChevronDown size={p.featured ? 26 : 20} />
        </motion.span>
      </button>
    )
  } else {
    title = <span className="text-accent">{p.name}</span>
  }

  return (
    <article className="flex h-full flex-col gap-4 rounded-lg border border-line bg-panel p-6 transition-colors duration-300 hover:border-edge md:p-7">
      <div className="flex flex-wrap gap-2 font-mono text-xs">
        {p.live && (
          <span className="flex items-center gap-1.5 rounded-sm bg-accent px-2 py-1 text-ink">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-ink" aria-hidden="true" />
            LIVE
          </span>
        )}
        {p.badge && <StatusPill>{p.badge}</StatusPill>}
        {p.tags.map((t) => (
          <span key={t} className="rounded-sm border border-edge px-2 py-1 text-muted">
            {t}
          </span>
        ))}
      </div>

      <div className={`flex flex-col gap-6 ${showVolume ? 'lg:flex-row lg:items-start lg:justify-between' : ''}`}>
        <div className="flex min-w-0 flex-1 flex-col gap-3">
          <h3 className={`font-display font-medium tracking-tight ${titleSize}`}>{title}</h3>

          {/* Contracts replace the description in place when open */}
          <AnimatePresence mode="wait" initial={false}>
            {open && hasContracts ? (
              <motion.div key="contracts" {...fade}>
                <ContractList contracts={p.contracts} explorer={p.explorer} id={panelId} />
              </motion.div>
            ) : (
              <motion.p key="text" {...fade} className={`leading-relaxed text-muted ${p.featured ? 'max-w-xl md:text-lg' : ''}`}>
                {p.description}
              </motion.p>
            )}
          </AnimatePresence>
        </div>

        {showVolume && (
          <dl className="flex shrink-0 gap-8 rounded-md border border-line bg-ink/60 px-5 py-4">
            {volume.map((v) => (
              <div key={v.symbol} className="flex flex-col-reverse gap-1">
                <dt className="font-mono text-xs text-dim">{v.symbol} wagered</dt>
                <dd className="font-display text-3xl font-medium text-accent">
                  <CountUp value={v.amount} />
                </dd>
              </div>
            ))}
          </dl>
        )}
      </div>

      <div className="mt-auto flex flex-wrap items-center justify-between gap-3 pt-1">
        <span className="font-mono text-[13px] text-dim">{p.role}</span>
        <div className="flex items-center gap-5">
          {hasContracts && (
            <button
              type="button"
              aria-expanded={open}
              aria-controls={panelId}
              onClick={() => setOpen((o) => !o)}
              className="font-mono text-sm text-muted transition-colors hover:text-fg"
            >
              {open ? 'back to overview' : `view contracts (${p.contracts.length})`}
            </button>
          )}
          <CaseStudyLink slug={p.caseStudy} />
        </div>
      </div>
    </article>
  )
}
