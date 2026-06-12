import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import Sectors from "@/components/Sectors"
import KeyFigures from "@/components/KeyFigures"

import OpenData from "@/components/OpenData"
import News from "@/components/News"
import DashboardPremium from "@/components/DashboardPremium"
import Media from "@/components/Media"

import Reports from "@/components/Reports"
import LiveStats from "@/components/LiveStats"
import Documents from "@/components/Documents"
import Analytics from "@/components/Analytics"

import Partners from "@/components/Partners"
import BigCTA from "@/components/BigCTA"
import ContactSection from "@/components/ContactSection"
import FAQ from "@/components/FAQ"
import Newsletter from "@/components/Newsletter"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main className="pt-20">

      <Navbar />

      <Hero />

      <Sectors />

      <KeyFigures />

      {/* =========================
          OPEN DATA + SIDEBAR
      ========================== */}

      <section className="max-w-7xl mx-auto px-4 py-12">

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">

          {/* COLONNE GAUCHE */}

          <div className="lg:col-span-2">
            <OpenData />
          </div>

          {/* COLONNE DROITE */}

          <div className="space-y-6">

            <News />

            <DashboardPremium />

          </div>

        </div>

        {/* ACTUALITÉS & MÉDIAS */}

        <div className="mt-10">
          <Media />
        </div>

      </section>

      {/* ========================= */}

      <Reports />

      <LiveStats />

      <section className="max-w-6xl mx-auto px-4 py-8">
        
      </section>

      <Analytics />

      <Partners />

      <BigCTA />

      <ContactSection />

      <FAQ />

      <Newsletter />

      <Footer />

    </main>
  )
}