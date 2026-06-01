"use client"

import Link from "next/link"
import Image from "next/image"

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-2xl bg-[#041c3c]/80 border-b border-white/10">

      <div className="max-w-6xl mx-auto px-4 py-2 flex items-center justify-between">

        {/* LOGO */}
        <div className="bg-white p-1.5 rounded-xl shadow-lg flex items-center justify-center">

          <Image
            src="/logo.png"
            alt="ITIE Congo"
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
          className="hidden lg:flex px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-white text-sm font-bold shadow-lg transition"
        >
          Explorer
        </Link>

      </div>

    </header>
  )
}