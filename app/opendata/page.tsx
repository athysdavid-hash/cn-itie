"use client"

import { useState } from "react"
import Link from "next/link"

export default function OpenDataPage() {

  const [query, setQuery] = useState("")

  const items = [
    {
      title: "Rapports ITIE",
      link: "/rapport",
      desc: "Rapports financiers",
      icon: "📊"
    },
    {
      title: "Hydrocarbures",
      link: "/documentation/hydrocarbures",
      desc: "Pétrole et gaz",
      icon: "🛢️"
    },
    {
      title: "Code minier",
      link: "/documentation/code-minier",
      desc: "Secteur minier",
      icon: "⛏️"
    },
    {
      title: "Norme ITIE",
      link: "/documentation/norme-itie",
      desc: "Standards ITIE",
      icon: "🌍"
    },
    {
      title: "Décrets",
      link: "/documentation/decrets",
      desc: "Textes officiels",
      icon: "⚖️"
    },
    {
      title: "Communiqués",
      link: "/documentation/communiques",
      desc: "Actualités CN-ITIE",
      icon: "📢"
    }
  ]
const filtered = items.filter((item) => {
  const search = query.toLowerCase().trim()

  return (
    item.title.toLowerCase().includes(search) ||
    item.desc.toLowerCase().includes(search)
  )
})
  return (
    <main className="max-w-6xl mx-auto py-20">

      <h1 className="text-4xl font-black text-[#062b57]">
        Recherche Open Data
      </h1>

      
      {/* SEARCH */}
<div className="relative mt-8">

  <input
    value={query}
    onChange={(e) => setQuery(e.target.value)}
    placeholder="Rechercher un document, un texte ou un rapport..."
    className="w-full p-5 pl-14 rounded-2xl border border-slate-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
  />

  <span className="absolute left-5 top-1/2 -translate-y-1/2 text-xl">
    🔍
  </span>

</div>

<div className="mt-4 text-slate-500">
  {filtered.length} résultat(s) trouvé(s)
</div>

    </main>
  )
}