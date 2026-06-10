"use client"

import { useMemo, useState } from "react"

const datasets = [
  {
    title: "Rapport ITIE Congo 2023",
    description:
      "Rapport annuel présentant les paiements des entreprises extractives et les revenus perçus par l'État.",
    icon: "📘",
    files: "PDF",
    type: "data",
    source: "ITIE Congo",
  },

  {
    title: "Recettes extractives 2023",
    description:
      "925,35 milliards FCFA de recettes générées par le secteur extractif.",
    icon: "💰",
    files: "XLSX • CSV",
    type: "data",
    source: "Rapport ITIE 2023",
  },

  {
    title: "Production pétrolière 2023",
    description:
      "95,65 millions de barils de pétrole produits sur l'ensemble du territoire national.",
    icon: "🛢️",
    files: "XLSX • CSV",
    type: "data",
    source: "Ministère des Hydrocarbures",
  },

  {
    title: "Production gazière 2023",
    description:
      "43 milliards de pieds cubes de gaz naturel produits.",
    icon: "🔥",
    files: "XLSX • CSV",
    type: "data",
    source: "ITIE Congo 2023",
  },

  {
    title: "Exportations extractives",
    description:
      "Le secteur extractif représente environ 82 % des exportations nationales.",
    icon: "🚢",
    files: "CSV",
    type: "data",
    source: "Banque des États de l'Afrique Centrale",
  },

  {
    title: "Registre des permis pétroliers",
    description:
      "Liste des blocs, permis d'exploration et permis d'exploitation en vigueur.",
    icon: "📍",
    files: "XLSX",
    type: "data",
    source: "Ministère des Hydrocarbures",
  },

  {
    title: "Contrat Marine XII",
    description:
      "Contrat de partage de production entre ENI Congo et la SNPC.",
    icon: "📄",
    files: "PDF",
    status: "ACTIF",
    type: "contracts",
    source: "ITIE Congo",
  },

  {
    title: "Contrat Marine XX",
    description:
      "Contrat de partage de production du bloc offshore Marine XX.",
    icon: "📄",
    files: "PDF",
    status: "ACTIF",
    type: "contracts",
    source: "ITIE Congo",
  },

  {
    title: "Contrat Moho-Bilondo",
    description:
      "Projet offshore majeur exploité par TotalEnergies EP Congo.",
    icon: "📄",
    files: "PDF",
    status: "ACTIF",
    type: "contracts",
    source: "ITIE Congo",
  },

  {
    title: "Contrat Nkossa",
    description:
      "Convention pétrolière et documents contractuels associés.",
    icon: "📄",
    files: "PDF",
    status: "ACTIF",
    type: "contracts",
    source: "ITIE Congo",
  },

  {
    title: "Projet Kola Potash",
    description:
      "Projet minier de potasse situé dans le Kouilou.",
    icon: "⛏️",
    files: "PDF",
    status: "PROJET",
    type: "contracts",
    source: "Ministère des Mines",
  },

  {
    title: "Projet Zanaga Iron Ore",
    description:
      "Projet de développement du minerai de fer dans le département de la Lékoumou.",
    icon: "⛏️",
    files: "PDF",
    status: "PROJET",
    type: "contracts",
    source: "Ministère des Mines",
  },

  {
    title: "Concessions forestières",
    description:
      "Liste des concessions forestières attribuées et exploitées.",
    icon: "🌳",
    files: "XLSX",
    type: "data",
    source: "Ministère de l'Économie Forestière",
  },

  {
    title: "Production forestière",
    description:
      "Volumes de bois exploités et exportés par essence forestière.",
    icon: "🪵",
    files: "CSV",
    type: "data",
    source: "Direction Générale de l'Économie Forestière",
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