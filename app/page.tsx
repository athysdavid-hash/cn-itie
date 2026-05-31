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
    <main className="pt-32">

      {/* NAVBAR */}
      <Navbar />

      {/* HERO */}
      <Hero />

      {/* STRATEGIC DATA */}
      <StrategicData />

      {/* STATS */}
      <Stats />

      {/* KEY FIGURES */}
      <KeyFigures />

      {/* MAP + NEWS */}
      <section className="max-w-7xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-8">
        <InteractiveMap />
        <News />
      </section>

      {/* OPEN DATA */}
      <OpenData />

      {/* SECTORS */}
      <div className="max-w-7xl mx-auto px-4">
        <Sectors />
      </div>

      {/* ANALYTICS */}
      <Analytics />

      {/* DASHBOARD */}
      <DashboardPremium />

      {/* REPORTS + GOVERNANCE */}
      <section className="max-w-7xl mx-auto px-4 py-16 grid lg:grid-cols-2 gap-8">
        <Reports />
        <Governance />
      </section>

      {/* MEDIA */}
      <Media />

      {/* PARTNERS */}
      <Partners />

      {/* LIVE STATS */}
      <LiveStats />

      {/* BIG CTA */}
      <BigCTA />

      {/* DOCUMENTS */}
      <Documents />

      {/* CONTACT */}
      <ContactSection />

      {/* FAQ */}
      <FAQ />

      {/* CTA */}
      <CTA />

      {/* NEWSLETTER */}
      <Newsletter />

      {/* FOOTER */}
      <Footer />

    </main>
  )
}