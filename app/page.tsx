import { Hero } from "@/components/hero"
import { Stats } from "@/components/stats"
import { About } from "@/components/about"
import { Facilities } from "@/components/facilities"
import { Achievements } from "@/components/achievements"

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <About />
      <Facilities />
      <Achievements />
    </>
  )
}
