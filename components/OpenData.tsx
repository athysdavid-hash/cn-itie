"use client"

import { useState } from "react"

const datasets = [
  {
    title: "Recettes extractives 2023",
    description: "925,35 milliards FCFA encaissés par l'État",
    icon: "💰",
    files: "XLSX • CSV",
    type: "data",
  },
  {
    title: "Production pétrolière 2023",
    description: "95,65 millions de barils produits",
    icon: "🛢️",
    files: "CSV • XLSX",
    type: "data",
  },
  {
    title: "Exportations pétrolières",
    description: "90,56 millions de barils exportés",
    icon: "🚢",
    files: "CSV",
    type: "data",
  },
  {
    title: "Production minière 2023",
    description: "Cuivre, zinc, diamant et quartz",
    icon: "⛏️",
    files: "XLSX",
    type: "data",
  },
  {
    title: "Contrats PNGF",
    description: "Bloc offshore majeur de production pétrolière",
    icon: "🛢️",
    files: "PDF • CSV",
    status: "ACTIF",
    type: "contracts",
  },
  {
    title: "Contrat TCHIBELI-LITANZI II",
    description: "Exploration et production hydrocarbures",
    icon: "🛢️",
    files: "PDF",
    status: "ACTIF",
    type: "contracts",
  },
  {
    title: "Contrat KOMBI-LIKALALA-LIBONDO",
    description: "Bloc offshore stratégique",
    icon: "🛢️",
    files: "PDF • XLSX",
    status: "ACTIF",
    type: "contracts",
  },
]

export default function OpenData() {
  const [filter, setFilter] = useState("all")

  const filteredData = datasets.filter((item) => {
    if (filter === "all") return true
    return item.type === filter
  })

  return (
    <section className="py-16 px-4 bg-white">

      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-6">

          <p className="text-xs font-black tracking-[0.25em] text-cyan-600 uppercase">
            Open Data
          </p>

          <h2 className="text-3xl font-black text-[#062b57] mt-2">
            Centre des données ouvertes
          </h2>

          <p className="text-slate-500 text-sm mt-2">
            Données extractives et contrats pétroliers du Congo
          </p>

        </div>

        {/* FILTERS */}
        <div className="flex justify-center gap-2 mb-8">

          <button
            onClick={() => setFilter("all")}
            className={`px-4 py-2 rounded-xl text-sm font-black transition ${
              filter === "all"
                ? "bg-[#062b57] text-white"
                : "bg-slate-100 text-slate-600"
            }`}
          >
            Tous
          </button>

          <button
            onClick={() => setFilter("data")}
            className={`px-4 py-2 rounded-xl text-sm font-black transition ${
              filter === "data"
                ? "bg-cyan-600 text-white"
                : "bg-slate-100 text-slate-600"
            }`}
          >
            Données
          </button>

          <button
            onClick={() => setFilter("contracts")}
            className={`px-4 py-2 rounded-xl text-sm font-black transition ${
              filter === "contracts"
                ? "bg-green-600 text-white"
                : "bg-slate-100 text-slate-600"
            }`}
          >
            Contrats
          </button>

        </div>

        {/* LIST */}
        <div className="space-y-3">

          {filteredData.map((item, index) => (
            <div
              key={index}
              className="group bg-[#f8fbfd] border border-slate-200 rounded-2xl p-4 hover:shadow-2xl transition"
            >

              <div className="flex items-center justify-between">

                <div className="flex items-center gap-3">

                  <div className="w-10 h-10 rounded-xl bg-cyan-50 flex items-center justify-center text-lg">
                    {item.icon}
                  </div>

                  <div>
                    <h3 className="font-black text-[#062b57] group-hover:text-cyan-600">
                      {item.title}
                    </h3>

                    <p className="text-xs text-slate-500">
                      {item.description}
                    </p>
                  </div>

                </div>

                <div className="text-right">

                  <p className="text-xs font-bold text-cyan-600">
                    {item.files}
                  </p>

                  {item.type === "contracts" && (
                    <span className="text-[10px] px-2 py-1 rounded-full bg-green-100 text-green-700 font-black">
                      ACTIF
                    </span>
                  )}

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  )
}