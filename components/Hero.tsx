"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import CountUp from "react-countup"
import DashboardNational from "@/components/dashboard/DashboardNational"

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
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-cyan-400/20 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-500/20 blur-3xl rounded-full" />

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 w-full">

        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-16 items-center">

          {/* LEFT TEXT */}
          <div>

            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-xl border border-white/20 px-4 py-2 rounded-full mb-6">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-cyan-300 text-xs font-black tracking-wider uppercase">
                Plateforme officielle ITIE Congo
              </span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-black text-white leading-[1.05]">
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

             <button className="rounded-xl border border-white/20 bg-white/10 px-7 py-4 font-bold text-white backdrop-blur-xl transition hover:bg-white/20">
  Voir les rapports
</button>

              <button className="bg-white/10 backdrop-blur-xl border border-white/20 hover:bg-white/20 text-white px-6 py-4 rounded-xl font-black transition-all duration-300 hover:scale-105">
                Voir les rapports
              </button>

            </div>

          </div>

         {/* RIGHT PANEL */}
<div className="flex justify-end">
  <DashboardNational />
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