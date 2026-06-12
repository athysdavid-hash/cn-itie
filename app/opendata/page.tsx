"use client"

import { useState } from "react"

export default function OpenDataPage() {
  const [year, setYear] = useState("2023")

  const data = [
    {
      year: "2020",
      pib: 48,
      revenus: 55,
      export: 85,
      emploi: 0.4,
    },
    {
      year: "2021",
      pib: 50,
      revenus: 60,
      export: 87,
      emploi: 0.45,
    },
    {
      year: "2022",
      pib: 52,
      revenus: 63,
      export: 89,
      emploi: 0.48,
    },
    {
      year: "2023",
      pib: 53.26,
      revenus: 66.41,
      export: 92,
      emploi: 0.5,
    },
  ]

  const filtered = data.filter((d) => d.year === year)

  const item = filtered[0]

  return (
    <section className="bg-[#061f3a] min-h-screen py-20 text-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* HEADER */}
        <h1 className="text-3xl font-black">
          Open Data ITIE Congo
        </h1>

        <p className="text-slate-400 mt-2 mb-8">
          Données publiques du secteur extractif (2020–2023)
        </p>

        {/* FILTER */}
        <div className="flex gap-3 mb-10">
          {["2020", "2021", "2022", "2023"].map((y) => (
            <button
              key={y}
              onClick={() => setYear(y)}
              className={`
                px-4 py-2 rounded-lg border transition
                ${year === y
                  ? "bg-cyan-500 text-black"
                  : "bg-white/5 border-white/10 text-white hover:bg-white/10"}
              `}
            >
              {y}
            </button>
          ))}
        </div>

        {/* DATA CARDS */}
        {item && (
          <div className="grid md:grid-cols-2 gap-6">

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <p className="text-slate-400 text-sm">PIB extractif</p>
              <p className="text-3xl font-bold text-cyan-300">{item.pib}%</p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <p className="text-slate-400 text-sm">Revenus publics</p>
              <p className="text-3xl font-bold text-cyan-300">{item.revenus}%</p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <p className="text-slate-400 text-sm">Exportations</p>
              <p className="text-3xl font-bold text-cyan-300">{item.export}%</p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <p className="text-slate-400 text-sm">Emploi direct</p>
              <p className="text-3xl font-bold text-cyan-300">{item.emploi}%</p>
            </div>

          </div>
        )}

        {/* DOWNLOAD SECTION */}
        <div className="mt-10 bg-white/5 border border-white/10 rounded-2xl p-6">
          <h3 className="text-lg font-bold mb-2">
            Téléchargements
          </h3>

          <p className="text-slate-400 text-sm mb-4">
            Accès aux données brutes ITIE
          </p>

          <button className="px-4 py-2 bg-cyan-500 text-black rounded-lg font-semibold">
            Télécharger données (CSV)
          </button>
        </div>

      </div>
    </section>
  )
}