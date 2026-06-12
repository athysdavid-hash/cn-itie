"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { searchIndex } from "@/data/searchIndex"

export default function Navbar() {

  const [query, setQuery] = useState("")
  const normalize = (text: string) =>
  text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")

  const results =
  query.trim() === ""
    ? []
    : searchIndex.filter((item) =>
        normalize(item.title).includes(normalize(query))
      )
  return (
    <header className="fixed top-9 left-0 w-full z-50 backdrop-blur-2xl bg-[#041c3c]/80 border-b border-white/10">

      <div className="max-w-6xl mx-auto px-4 py-2 flex items-center justify-between">

        {/* LOGO */}
        <div className="bg-white p-1.5 rounded-xl shadow-lg flex items-center justify-center">
          <Image
            src="/logo.png"
            alt="ITIE République du Congo"
            width={48}
            height={48}
            priority
          />
        </div>

        {/* NAVIGATION */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">

          <Link href="/" className="text-white hover:text-cyan-300 transition">
            Accueil
          </Link>

          <Link href="/gouvernance" className="text-white hover:text-cyan-300 transition">
            Gouvernance
          </Link>

          <Link href="/rapport" className="text-white hover:text-cyan-300 transition">
            Rapports
          </Link>

          {/* SECTEURS */}
          <div className="relative group">

            <span className="text-white hover:text-cyan-300 cursor-pointer transition">
              Secteurs ▾
            </span>

            <div className="absolute top-8 left-0 hidden group-hover:block bg-[#062b57] border border-white/10 rounded-xl shadow-xl w-64">

              <Link
                href="/secteur/petrole"
                className="block px-4 py-3 text-white hover:bg-cyan-500/20 transition"
              >
                🛢️ Pétrole
              </Link>

              <Link
                href="/secteur/mines"
                className="block px-4 py-3 text-white hover:bg-cyan-500/20 transition"
              >
                ⛏️ Mines
              </Link>

              <Link
                href="/secteur/foret"
                className="block px-4 py-3 text-white hover:bg-cyan-500/20 transition"
              >
                🌳 Forêt
              </Link>

            </div>
          </div>

          {/* DONNÉES & PUBLICATIONS */}
          <div className="relative group">

            <span className="text-white hover:text-cyan-300 cursor-pointer transition">
              Données & Publications ▾
            </span>

            <div className="absolute top-8 left-0 hidden group-hover:block bg-[#062b57] border border-white/10 rounded-xl shadow-xl w-72">

              <Link
                href="/opendata"
                className="block px-4 py-3 text-white hover:bg-cyan-500/20 transition"
              >
                📊 Open Data
              </Link>

              <Link
                href="/resultats-impacts"
                className="block px-4 py-3 text-white hover:bg-cyan-500/20 transition"
              >
                📈 Résultats et impacts
              </Link>

              <Link
                href="/plan-travail"
                className="block px-4 py-3 text-white hover:bg-cyan-500/20 transition"
              >
                🗂️ Plan de travail
              </Link>

              <Link
                href="/validation-itie"
                className="block px-4 py-3 text-white hover:bg-cyan-500/20 transition"
              >
                🟢 Validation ITIE
              </Link>

              <Link
                href="/propriete-reelle"
                className="block px-4 py-3 text-white hover:bg-cyan-500/20 transition"
              >
                🏢 Propriété réelle
              </Link>

              <Link
                href="/documentation/decrets"
                className="block px-4 py-3 text-white hover:bg-cyan-500/20 transition"
              >
                ⚖️ Textes légaux
              </Link>

              <Link
                href="/documentation/norme-itie"
                className="block px-4 py-3 text-white hover:bg-cyan-500/20 transition"
              >
                🌍 Norme ITIE
              </Link>

            </div>
          </div>

          <Link href="/actualites" className="text-white hover:text-cyan-300 transition">
            Actualités
          </Link>

          <Link href="/contact" className="text-white hover:text-cyan-300 transition">
            Contact
          </Link>

        </nav>

      {/* SEARCH */}
<div className="hidden lg:flex relative">

  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-300 z-10">
    🔍
  </span>

  <input
    type="text"
    value={query}
    onChange={(e) => setQuery(e.target.value)}
    placeholder="Rechercher rapports, données..."
    className="
      w-72
      pl-10
      pr-4
      py-2
      rounded-xl
      bg-white/10
      border
      border-white/20
      text-white
      placeholder:text-slate-300
      outline-none
      focus:border-cyan-400
      backdrop-blur-xl
    "
  />

  {results.length > 0 && (
    <div className="absolute top-12 left-0 w-full bg-[#062b57] border border-white/10 rounded-xl shadow-xl overflow-hidden z-50">

      {results.map((item, index) => (
        <Link
          key={index}
          href={item.href}
          onClick={() => setQuery("")}
          className="block px-4 py-3 text-white hover:bg-cyan-500/20 transition"
        >
          {item.title}
        </Link>
      ))}

    </div>
  )}

</div>
      </div>

    </header>
  )
}