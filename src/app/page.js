import About from "../components/sections/About"
import Experience from "../components/sections/Experience"
import Stack from "../components/sections/Stack"

export default function Home() {
  return (
    <main className="flex  flex-col items-center justify-between lg:p-24">
      <About />
      <Experience/>
      <Stack/>
    </main>
  )
}
