import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft } from 'lucide-react'
import Header from '@/components/Header'
import { caseStudies } from '@/data/case-studies'
import { experiments, projects } from '@/data/site'

export const dynamicParams = false

export function generateStaticParams() {
  return [...projects, ...experiments]
    .map((p) => p.caseStudy)
    .filter((slug) => slug && caseStudies[slug])
    .map((slug) => ({ slug }))
}

export function generateMetadata({ params }) {
  const cs = caseStudies[params.slug]
  return cs ? { title: `${cs.title} — Leandro Labiano`, description: cs.summary } : {}
}

export default function CaseStudy({ params }) {
  const cs = caseStudies[params.slug]
  if (!cs) notFound()

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6">
      <Header />
      <main className="mx-auto flex max-w-3xl flex-col gap-10 py-16 md:py-24">
        <Link href="/#work" className="inline-flex items-center gap-2 font-mono text-sm text-dim hover:text-accent">
          <ArrowLeft size={14} /> back
        </Link>
        <header className="flex flex-col gap-4">
          <span className="font-mono text-sm text-accent">{'// case study'}</span>
          <h1 className="font-display text-4xl font-bold tracking-tight md:text-6xl">{cs.title}</h1>
          <p className="text-lg leading-relaxed text-muted">{cs.summary}</p>
        </header>
        {cs.metrics?.length > 0 && (
          <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-3">
            {cs.metrics.map((m) => (
              <div key={m.label} className="flex flex-col-reverse gap-1 bg-ink px-5 py-4">
                <dt className="font-mono text-xs text-dim">{m.label}</dt>
                <dd className="font-display text-3xl font-medium">{m.value}</dd>
              </div>
            ))}
          </dl>
        )}
        {cs.sections.map((s) => (
          <section key={s.heading} className="flex flex-col gap-3">
            <h2 className="font-display text-2xl font-medium">{s.heading}</h2>
            <p className="whitespace-pre-line leading-relaxed text-muted">{s.body}</p>
          </section>
        ))}
      </main>
    </div>
  )
}
