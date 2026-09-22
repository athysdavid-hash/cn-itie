import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import Sectors from "@/components/Sectors"
import KeyFigures from "@/components/KeyFigures"

import News from "@/components/News"
import DashboardPremium from "@/components/DashboardPremium"
import Media from "@/components/Media"

import Reports from "@/components/Reports"
import LiveStats from "@/components/LiveStats"
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
          ACTUALITÉS + DASHBOARD
      ========================= */}

    <section className="max-w-7xl mx-auto px-4 py-12">
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-stretch">

    <News />

    <DashboardPremium />

  </div>

  <div className="mt-8">
    <Media />
  </div>
</section>

     <Reports />

{/* <LiveStats /> */}

{/* <Analytics /> */}

<Partners />

<BigCTA />

{/* <ContactSection /> */}

{/* <FAQ /> */}

{/* <Newsletter /> */}

<Footer />

    </main>
  )
}