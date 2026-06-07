"use client"

import { useEffect, useState } from "react"

export default function KeyFiguresV2() {

  const data = [
    { label: "PIB extractif", value: 53.26 },
    { label: "Revenus publics", value: 66.41 },
    { label: "Exportations", value: 72.42 },
    { label: "Emploi direct", value: 0.5 }
  ]

  const [progress, setProgress] = useState<number[]>([])

  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(data.map(d => d.value))
    }, 300)

    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="bg-[#061f3a] py-20">

      <div className="max-w-6xl mx-auto px-6">

        {/* HEADER */}
        <h2 className="text-white text-3xl font-black">
          Dashboard ITIE Congo 2023
        </h2>

        <p className="text-slate-300 mt-3 mb-10 max-w-2xl">
          Indicateurs macroéconomiques du secteur extractif (pétrole, mines, gaz, forêt)
        </p>

        {/* CARDS */}
        <div className="grid md:grid-cols-2 gap-6">

          {data.map((item, i) => (
            <div
              key={i}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur"
            >

              {/* LABEL */}
              <div className="flex justify-between items-center">
                <span className="text-white font-semibold">
                  {item.label}
                </span>

                <span className="text-cyan-300 font-black">
                  {item.value}%
                </span>
              </div>

              {/* BAR BACKGROUND */}
              <div className="mt-4 w-full h-3 bg-white/10 rounded-full overflow-hidden">

                {/* ANIMATED BAR */}
                <div
                  className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full transition-all duration-1000 ease-out"
                  style={{
                    width: progress.length
                      ? `${progress[i]}%`
                      : "0%"
                  }}
                />
              </div>

              {/* MINI INDICATOR */}
              <div className="mt-2 flex items-center gap-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
                <p className="text-slate-400 text-xs">
                  ITIE 2023 – données officielles agrégées
                </p>
              </div>

            </div>
          ))}

        </div>

        {/* ANALYSE BLOCK */}
        <div className="mt-12 bg-white/5 border border-white/10 rounded-3xl p-8">

          <h3 className="text-white text-xl font-black mb-4">
            Analyse institutionnelle
          </h3>

          <p className="text-slate-300 leading-8">
            Le rapport ITIE 2023 met en évidence une forte dépendance de l’économie congolaise
            aux industries extractives, notamment les hydrocarbures. Ces derniers constituent
            la principale source de revenus publics et d’exportations. Cependant, leur impact
            sur l’emploi reste limité, confirmant la nature capitalistique du secteur.
          </p>

        </div>

      </div>
    </section>
  )
}