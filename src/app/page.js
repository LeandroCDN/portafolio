import About from "../components/sections/About"
import Experience from "../components/sections/Experience"
import Stack from "../components/sections/Stack"
import Contributions from "../components/sections/Contributions"
import Playground from "@/components/sections/Playground"

export default function Home() {
  return (
    <main className="">
      <About className=""/>
      <Experience/>
      <Stack/>
      <Contributions/>
      <Playground/>
    </main>
  )
}
