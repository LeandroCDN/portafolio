'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight, Check, ChevronDown, Copy } from 'lucide-react'

const short = (a) => `${a.slice(0, 6)}…${a.slice(-4)}`

function CopyButton({ value }) {
  const [done, setDone] = useState(false)
  return (
    <button
      type="button"
      aria-label={`Copy ${value}`}
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(value)
          setDone(true)
          setTimeout(() => setDone(false), 1400)
        } catch {}
      }}
      className="grid h-8 w-8 place-items-center rounded text-dim transition-colors hover:bg-line hover:text-fg"
    >
      {done ? <Check size={14} className="text-accent" /> : <Copy size={14} />}
    </button>
  )
}

export default function ContractList({ contracts, explorer, id }) {
  const [open, setOpen] = useState(false)
  const panelId = `${id}-contracts`

  return (
    <div className="border-t border-line pt-4">
      <button
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between gap-3 py-1 font-mono text-sm text-muted transition-colors hover:text-fg"
      >
        <span>
          {open ? 'hide' : 'view'} contracts <span className="text-dim">({contracts.length})</span>
        </span>
        <motion.span animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.25 }}>
          <ChevronDown size={16} />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={panelId}
            key="list"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <ul className="mt-3 grid gap-x-6 sm:grid-cols-2">
              {contracts.map((c) => (
                <li key={c.address} className="flex items-center justify-between gap-2 border-b border-line/70 py-1.5">
                  <span className="truncate text-sm">{c.name}</span>
                  <span className="flex shrink-0 items-center">
                    <a
                      href={explorer + c.address}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 rounded px-1.5 py-1.5 font-mono text-xs text-dim transition-colors hover:text-accent"
                    >
                      {short(c.address)}
                      <ArrowUpRight size={12} />
                    </a>
                    <CopyButton value={c.address} />
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
