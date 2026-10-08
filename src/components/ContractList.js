'use client'

import { useState } from 'react'
import { ArrowUpRight, Check, Copy } from 'lucide-react'

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

// List of deployed contracts with explorer links and copy buttons.
export default function ContractList({ contracts, explorer, id }) {
  return (
    <ul id={id} className="grid gap-x-6 sm:grid-cols-2">
      {contracts.map((c) => (
        <li key={c.address} className="flex items-center justify-between gap-2 border-b border-line/70 py-1">
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
  )
}
