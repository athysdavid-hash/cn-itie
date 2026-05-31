"use client"

import Link from "next/link"
import Image from "next/image"

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-2xl bg-[#041c3c]/75 border-b border-white/10">

      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LOGO */}
        <div className="bg-white p-2 rounded-2xl shadow-2xl flex items-center justify-center">
          <Image
            src="/logo.png"
            alt="ITIE Congo"
            width={70}
            height={70}
            priority
          />
        </div>

        {/* NAVIGATION */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">

          <Link href="/" className="text-white hover:text-cyan-300 transition">
            Accueil
          </Link>

          <Link href="/rapports" className="text-white hover:text-cyan-300 transition">
            Rapports
          </Link>

          <Link href="/opendata" className="text-white hover:text-cyan-300 transition">
            Open Data
          </Link>

          <Link href="/actualites" className="text-white hover:text-cyan-300 transition">
            Actualités
          </Link>

          <Link href="/contact" className="text-white hover:text-cyan-300 transition">
            Contact
          </Link>

        </nav>

        {/* BUTTON */}
        <Link
          href="/opendata"
          className="hidden lg:flex px-6 py-3 rounded-2xl bg-cyan-500 hover:bg-cyan-400 text-white font-bold shadow-xl hover:scale-105 transition"
        >
          Explorer
        </Link>

      </div>

    </header>
  )
}