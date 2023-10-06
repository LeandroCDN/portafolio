import About from "../components/sections/About"
import Experience from "../components/sections/Experience"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <About />
      <Experience/>
    </main>
  )
}
