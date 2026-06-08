"use client"

import { useMemo, useState } from "react"

const datasets = [
  {
    title: "Production pétrolière nationale (2023)",
    description:
      "≈ 262 047 barils/jour produits (offshore profond, onshore et conventionnel)",
    icon: "🛢️",
    files: "ITIE 2023 • MINISTÈRE DES HYDROCARBURES",
    type: "data",
    source: "ITIE Congo 2023",
  },
  {
    title: "Principaux opérateurs pétroliers",
    description:
      "TotalEnergies EP Congo, Perenco Congo, ENI Congo (majorité de la production nationale)",
    icon: "🏭",
    files: "ITIE 2023",
    type: "data",
    source: "ITIE Congo 2023",
  },
  {
    title: "Cadre institutionnel hydrocarbures",
    description:
      "Ministère des Hydrocarbures : politique, attribution des titres, supervision de la production",
    icon: "🏛️",
    files: "Rapport ITIE 2023",
    type: "data",
    source: "ITIE Congo 2023",
  },
  {
    title: "Recettes extractives de l’État",
    description:
      "Secteur pétrolier = principale source des revenus publics du Congo (~majorité des recettes fiscales)",
    icon: "💰",
    files: "ITIE 2023 • Trésor Public",
    type: "data",
    source: "ITIE Congo 2023",
  },
  {
    title: "Contrat PNGF (Bloc offshore)",
    description:
      "Bloc stratégique offshore lié à la production pétrolière nationale",
    icon: "🛢️",
    files: "ITIE 2023",
    status: "ACTIF",
    type: "contracts",
    source: "Ministère des Hydrocarbures",
  },
  {
    title: "Tchibeli-Litanzi II",
    description:
      "Exploration et production d’hydrocarbures en zone offshore",
    icon: "🛢️",
    files: "ITIE 2023",
    status: "ACTIF",
    type: "contracts",
    source: "ITIE Congo 2023",
  },
  {
    title: "Kombi-Likalala-Libondo",
    description:
      "Permis stratégique d’exploitation pétrolière offshore",
    icon: "🛢️",
    files: "ITIE 2023",
    status: "ACTIF",
    type: "contracts",
    source: "ITIE Congo 2023",
  },
]

export default function OpenData() {
  const [filter, setFilter] = useState("all")
  const [search, setSearch] = useState("")

  const filteredData = useMemo(() => {
    return datasets.filter((item) => {
      const matchFilter = filter === "all" || item.type === filter
      const matchSearch =
        item.title.toLowerCase().includes(search.toLowerCase()) ||
        item.description.toLowerCase().includes(search.toLowerCase())

      return matchFilter && matchSearch
    })
  }, [filter, search])

  const counts = {
    all: datasets.length,
    data: datasets.filter((d) => d.type === "data").length,
    contracts: datasets.filter((d) => d.type === "contracts").length,
  }

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-6">
          <p className="text-xs font-black tracking-[0.25em] text-cyan-600 uppercase">
            ITIE Congo • Open Data Officiel
          </p>

          <h2 className="text-3xl font-black text-[#062b57] mt-2">
            Données extractives et contrats pétroliers
          </h2>

          <p className="text-slate-500 text-sm mt-2">
            Ministère des Hydrocarbures • Trésor Public • ITIE République du Congo
          </p>
        </div>

        {/* SEARCH */}
        <div className="mb-6 flex justify-center">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Rechercher production, contrats, opérateurs..."
            className="w-full max-w-md px-4 py-2 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />
        </div>

        {/* FILTERS */}
        <div className="flex justify-center gap-2 mb-8 flex-wrap">
          <button
            onClick={() => setFilter("all")}
            className={`px-4 py-2 rounded-xl text-sm font-black transition ${
              filter === "all"
                ? "bg-[#062b57] text-white"
                : "bg-slate-100 text-slate-600"
            }`}
          >
            Tous ({counts.all})
          </button>

          <button
            onClick={() => setFilter("data")}
            className={`px-4 py-2 rounded-xl text-sm font-black transition ${
              filter === "data"
                ? "bg-cyan-600 text-white"
                : "bg-slate-100 text-slate-600"
            }`}
          >
            Données ({counts.data})
          </button>

          <button
            onClick={() => setFilter("contracts")}
            className={`px-4 py-2 rounded-xl text-sm font-black transition ${
              filter === "contracts"
                ? "bg-green-600 text-white"
                : "bg-slate-100 text-slate-600"
            }`}
          >
            Contrats ({counts.contracts})
          </button>
        </div>

        {/* LIST */}
        <div className="space-y-3">
          {filteredData.map((item, index) => (
            <div
              key={index}
              className="group bg-[#f8fbfd] border border-slate-200 rounded-2xl p-4 transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5"
            >
              <div className="flex items-center justify-between">

                {/* LEFT */}
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

                    <p className="text-[10px] text-slate-400 mt-1">
                      Source : {item.source}
                    </p>
                  </div>
                </div>

                {/* RIGHT */}
                <div className="text-right">
                  <p className="text-xs font-bold text-cyan-600">
                    {item.files}
                  </p>

                  {item.status && (
                    <span className="text-[10px] px-2 py-1 rounded-full bg-green-100 text-green-700 font-black">
                      {item.status}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* EMPTY STATE */}
        {filteredData.length === 0 && (
          <p className="text-center text-slate-400 mt-10 text-sm">
            Aucun résultat trouvé
          </p>
        )}

      </div>
    </section>
  )
}