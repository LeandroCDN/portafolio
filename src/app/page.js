import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Work from '@/components/Work'
import Experience from '@/components/Experience'
import Stack from '@/components/Stack'
import Contact from '@/components/Contact'
import { getBirdGamesVolume } from '@/lib/volume'

// Re-read the on-chain volume at most once per hour.
export const revalidate = 3600

export default async function Home() {
  const volume = await getBirdGamesVolume()

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6">
      <Header />
      <main>
        <Hero volume={volume} />
        <Work volume={volume} />
        <Experience />
        <Stack />
        <Contact />
      </main>
    </div>
  )
}
