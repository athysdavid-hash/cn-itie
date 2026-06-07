"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import CountUp from "react-countup"
export default function Hero() {
  const images = [
    "/hero/hero1.jpg",
    "/hero/hero2.jpg",
    "/hero/hero3.jpg",
  ]

  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [images.length])

  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">

      {/* BACKGROUND SLIDER */}
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-[2000ms] ${
            index === currentImage ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url(${img})`,
          }}
        />
      ))}

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#031b34]/90 via-[#031b34]/70 to-[#031b34]/30" />

      {/* GLOW */}
<motion.div
  className="absolute top-0 left-0 w-[400px] h-[400px] bg-cyan-400/20 blur-3xl rounded-full"
  animate={{
    scale: [1, 1.2, 1],
    opacity: [0.2, 0.4, 0.2],
  }}
  transition={{
    duration: 8,
    repeat: Infinity,
  }}
/>

<motion.div
  className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-500/20 blur-3xl rounded-full"
  animate={{
    scale: [1.2, 1, 1.2],
    opacity: [0.2, 0.4, 0.2],
  }}
  transition={{
    duration: 10,
    repeat: Infinity,
  }}
/>
      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 w-full">

        <div className="grid lg:grid-cols-2 gap-10 items-center">

          {/* LEFT TEXT */}
          <div>

            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-xl border border-white/20 px-4 py-2 rounded-full mb-6">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-cyan-300 text-xs font-black tracking-wider uppercase">
                Plateforme officielle ITIE Congo
              </span>
            </div>

            <h1 className="text-4xl lg:text-6xl font-black text-white leading-tight">
              Comité National
              <br />
              <span className="text-cyan-400">
                ITIE Congo
              </span>
            </h1>

            <p className="text-slate-200 text-lg leading-relaxed mt-6 max-w-2xl">
              Transparence des revenus pétroliers, miniers et gaziers en République du Congo.
              Accédez aux données officielles issues du rapport ITIE 2023.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">

              <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-4 rounded-xl font-black shadow-xl transition-all duration-300 hover:scale-105">
                Explorer les données
              </button>

              <button className="bg-white/10 backdrop-blur-xl border border-white/20 hover:bg-white/20 text-white px-6 py-4 rounded-xl font-black transition-all duration-300 hover:scale-105">
                Voir les rapports
              </button>

            </div>

          </div>

          {/* RIGHT PANEL */}
          <div className="flex justify-end">

            <div className="w-full max-w-lg bg-white/10 backdrop-blur-2xl border border-white/20 rounded-[30px] p-8 shadow-2xl">

              <p className="text-cyan-300 uppercase tracking-[0.2em] text-xs font-black">
                Données ITIE 2023
              </p>

              <h3 className="text-3xl font-black text-white mt-4 leading-tight">
                Aperçu du secteur extractif
              </h3>

              <p className="text-slate-200 mt-4 leading-relaxed">
                Données officielles issues du rapport ITIE Congo 2023 sur la production et les revenus pétroliers.
              </p>

              <div className="grid grid-cols-2 gap-3 mt-8">

                <div className="bg-white/10 rounded-xl p-4 text-center border border-white/10">
                  <p className="text-white font-black text-lg">925 Mds</p>
                  <p className="text-xs text-slate-300">FCFA revenus</p>
                </div>

                <div className="bg-white/10 rounded-xl p-4 text-center border border-white/10">
                  <p className="text-white font-black text-lg">95,65M</p>
                  <p className="text-xs text-slate-300">Barils produits</p>
                </div>

                <div className="bg-white/10 rounded-xl p-4 text-center border border-white/10">
                  <p className="text-white font-black text-lg">90,56M</p>
                  <p className="text-xs text-slate-300">Barils exportés</p>
                </div>

                <div className="bg-white/10 rounded-xl p-4 text-center border border-white/10">
                  <p className="text-white font-black text-lg">53,26%</p>
                  <p className="text-xs text-slate-300">PIB extractif</p>
                </div>

              </div>

            </div>

          </div>

        </div>

        {/* GLOBAL STATS BAR */}
        <div className="mt-12">
  <div className="grid md:grid-cols-4 gap-4 bg-white/10 backdrop-blur-2xl border border-white/10 rounded-[24px] p-6">

    <motion.div
      whileHover={{ scale: 1.05, y: -5 }}
      className="text-center"
    >
      <h3 className="text-3xl font-black text-white">
        <CountUp end={925} duration={3} />
      </h3>
      <p className="text-slate-300 mt-2">
        Mds FCFA revenus
      </p>
    </motion.div>

    <motion.div
      whileHover={{ scale: 1.05, y: -5 }}
      className="text-center"
    >
      <h3 className="text-3xl font-black text-white">
        <CountUp end={95.65} decimals={2} duration={3} />
      </h3>
      <p className="text-slate-300 mt-2">
        Millions de barils
      </p>
    </motion.div>

    <motion.div
      whileHover={{ scale: 1.05, y: -5 }}
      className="text-center"
    >
      <h3 className="text-3xl font-black text-white">
        <CountUp end={90.56} decimals={2} duration={3} />
      </h3>
      <p className="text-slate-300 mt-2">
        Barils exportés
      </p>
    </motion.div>

    <motion.div
      whileHover={{ scale: 1.05, y: -5 }}
      className="text-center"
    >
      <h3 className="text-3xl font-black text-white">
        <CountUp end={53.26} decimals={2} duration={3} />
      </h3>
      <p className="text-slate-300 mt-2">
        Contribution au PIB
      </p>
    </motion.div>

  </div>
</div>
      </div>

      {/* INDICATEURS */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-20">

        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`transition-all duration-500 rounded-full ${
              currentImage === index
                ? "w-10 h-3 bg-cyan-400"
                : "w-3 h-3 bg-white/50 hover:bg-white"
            }`}
          />
        ))}

      </div>

    </section>
  )
}