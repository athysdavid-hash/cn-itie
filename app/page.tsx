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
import Analytics from "@/components/Analytics"

import Partners from "@/components/Partners"
import BigCTA from "@/components/BigCTA"
import ContactSection from "@/components/ContactSection"
import FAQ from "@/components/FAQ"
import Newsletter from "@/components/Newsletter"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main className="pt-24">

      <Navbar />

      <Hero />

      {/* 🟢 SECTION VALIDATION ITIE */}
      <section className="max-w-6xl mx-auto px-4 py-12">

        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-10 backdrop-blur">

          {/* HEADER */}
          <div className="flex items-center gap-3 mb-4">

            <span className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></span>

            <h2 className="text-white text-xl md:text-2xl font-bold">
              Validation ITIE République du Congo
            </h2>

          </div>

          {/* STATUS */}
          <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-400/30 px-4 py-2 rounded-full text-green-200 text-sm mb-6">
            🟢 Processus de validation en cours
          </div>

          {/* DESCRIPTION */}
          <p className="text-slate-300 leading-7 max-w-3xl">
            La République du Congo est engagée dans le processus de validation de l’ITIE,
            visant à évaluer les progrès réalisés en matière de transparence dans le secteur
            extractif (pétrole, mines et forêts). Cette étape est essentielle pour renforcer
            la gouvernance et la confiance dans la gestion des ressources naturelles.
          </p>

          {/* ACTIONS */}
          <div className="mt-6 flex flex-wrap gap-3">

            <a
              href="/rapport"
              className="bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-200 px-4 py-2 rounded-xl transition"
            >
              📄 Voir les rapports
            </a>

            <a
              href="/opendata"
              className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-xl transition"
            >
              📊 Explorer les données
            </a>

          </div>

        </div>

      </section>

      {/* RESTE DU SITE */}
      <Sectors />

      <KeyFigures />

      <section className="max-w-7xl mx-auto px-4 py-12">

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">

          <div className="lg:col-span-2">
            <OpenData />
          </div>

          <div className="space-y-6">
            <News />
            <DashboardPremium />
          </div>

        </div>

        <div className="mt-10">
          <Media />
        </div>

      </section>

      <Reports />

      <LiveStats />

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