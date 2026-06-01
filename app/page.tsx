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

import CTA from "@/components/CTA"
import Newsletter from "@/components/Newsletter"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main className="pt-24">

      <Navbar />

      <Hero />

      <StrategicData />

      <Stats />

      <KeyFigures />

      <section className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-2 gap-6">
        <InteractiveMap />
        <News />
      </section>

      <OpenData />

      <div className="max-w-6xl mx-auto px-4">
        <Sectors />
      </div>

      <Analytics />

      <DashboardPremium />

      <section className="max-w-6xl mx-auto px-4 py-10 grid lg:grid-cols-2 gap-6">
        <Reports />
        <Governance />
      </section>

      <Media />

      <Partners />

      <LiveStats />

      <BigCTA />

      <Documents />

      <ContactSection />

      <FAQ />

      <CTA />

      <Newsletter />

      <Footer />

    </main>
  )
}