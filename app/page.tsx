import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import StrategicData from "@/components/StrategicData"

import Stats from "@/components/Stats"
import KeyFigures from "@/components/KeyFigures"

import InteractiveMap from "@/components/InteractiveMap"
import News from "@/components/News"

import OpenData from "@/components/OpenData"
import Sectors from "@/components/Sectors"

import Analytics from "@/components/Analytics"
import DashboardPremium from "@/components/DashboardPremium"

import Reports from "@/components/Reports"
import Governance from "@/components/Governance"

import Media from "@/components/Media"
import Partners from "@/components/Partners"

import LiveStats from "@/components/LiveStats"
import BigCTA from "@/components/BigCTA"

import Documents from "@/components/Documents"
import FAQ from "@/components/FAQ"
import ContactSection from "@/components/ContactSection"

import Newsletter from "@/components/Newsletter"
import Footer from "@/components/Footer"
import ContractsPage from "@/components/ContractsPage"
export default function Home() {
  return (
    <main className="pt-24">

      <Navbar />

      <Hero />
      <Sectors />

      {/* <StrategicData /> */}

      

      <KeyFigures />

      <OpenData />
<ContractsPage />

      <Reports />

      <DashboardPremium />

      <LiveStats />

    <section className="max-w-6xl mx-auto px-4 py-8">
  <Documents />
</section>
      <div className="max-w-6xl mx-auto px-4">
        
      </div>

      <Analytics />

      <Media />

      <Partners />

      <BigCTA />

      

      <ContactSection />

      <FAQ />

      <Newsletter />

      <Footer />

    </main>
  )
}