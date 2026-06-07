"use client"

import Link from "next/link"

export default function News() {
  const news = [
    {
      slug: "session-comite-executif-2026",
      date: "27 Mars 2026",
      category: "CN-ITIE",
      title: "1ère session 2026 du Comité exécutif du CN-ITIE Congo",
      excerpt:
        "Le Comité exécutif du CN-ITIE Congo s'est réuni à Brazzaville sous la présidence du Ministre des Finances.",
      image: "/news/session-2026.jpg",
    },

    {
      slug: "adoption-rapport-itie-2023",
      date: "30 Décembre 2025",
      category: "Rapport ITIE",
      title: "Adoption du Rapport ITIE 2023",
      excerpt:
        "Le Comité exécutif a adopté le Rapport ITIE 2023.",
      image: "/news/rapport-2023.jpg",
    },

    {
      slug: "atelier-dissemination-dolisie",
      date: "17 Décembre 2025",
      category: "Atelier",
      title: "Atelier de dissémination des rapports ITIE à Dolisie",
      excerpt:
        "Le CN-ITIE Congo a organisé un atelier de vulgarisation des rapports ITIE.",
      image: "/news/dolisie.jpg",
    },

    {
      slug: "preparation-validation-congo",
      date: "24 Juillet 2025",
      category: "Gouvernance",
      title: "Préparation de la validation du Congo",
      excerpt:
        "Les membres du Comité national ont examiné le rapport de cadrage ITIE.",
      image: "/news/validation-congo.jpg",
    },
  ]

  return (
    <section className="bg-white rounded-[24px] border border-slate-200 overflow-hidden shadow-sm h-full">

      <div className="bg-gradient-to-r from-[#062b57] to-[#0b4d91] p-6 text-white">

        <p className="uppercase tracking-[3px] text-cyan-300 text-xs font-black">
          Actualités
        </p>

        <h2 className="text-2xl font-black mt-2">
          CN-ITIE Congo
        </h2>

        <p className="text-slate-200 text-sm mt-2">
          Dernières publications et activités du Comité National ITIE.
        </p>

      </div>

      <div className="p-5 space-y-4">

        {news.map((item, index) => (
          <Link
            href={`/actualites/${item.slug}`}
            key={index}
          >
            <div className="border-b border-slate-100 pb-4 last:border-b-0 hover:translate-x-1 transition-all duration-300 cursor-pointer">

              <span className="inline-block bg-cyan-50 text-cyan-700 px-2 py-1 rounded-full text-[10px] uppercase font-black">
                {item.category}
              </span>

              <h3 className="text-[#062b57] font-bold mt-2 leading-snug hover:text-cyan-600 transition">
                {item.title}
              </h3>

              <p className="text-xs text-slate-400 mt-1">
                {item.date}
              </p>

            </div>
          </Link>
        ))}

      </div>

    </section>
  )
}