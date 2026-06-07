"use client"

import Link from "next/link"

const reports = [
  {
    slug: "rapport-itie-2023",
    year: "2023",
    category: "ITIE",
    title: "Rapport ITIE 2023",
    image: "/reports/rapport-2023.jpg",
  },
  {
    slug: "rapport-itie-2022",
    year: "2022",
    category: "ITIE",
    title: "Rapport ITIE 2022",
    image: "/reports/rapport-2022.jpg",
  },
  {
    slug: "rapport-itie-2021",
    year: "2021",
    category: "ITIE",
    title: "Rapport ITIE 2021",
    image: "/reports/rapport-2021.jpg",
  },
  {
    slug: "rapport-itie-2020",
    year: "2020",
    category: "Archives",
    title: "Rapport ITIE 2020",
    image: "/reports/rapport-2020.jpg",
  },
]

export default function Reports() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-[#f4f8fb] to-white">

      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10">

          <div>

            <p className="text-xs font-black tracking-[0.25em] text-cyan-600 uppercase">
              Publications Officielles
            </p>

            <h2 className="text-3xl lg:text-5xl font-black text-[#062b57] mt-3">
              Rapports ITIE
            </h2>

            <p className="text-slate-500 max-w-3xl mt-4">
              Accédez aux rapports ITIE, études sectorielles, publications
              officielles et documents de gouvernance du Comité National ITIE
              Congo.
            </p>

          </div>

          <div className="flex items-center gap-4">

            <div className="bg-white rounded-2xl px-6 py-4 shadow-lg border border-slate-100">

              <p className="text-slate-500 text-xs uppercase font-black">
                Rapports publiés
              </p>

              <h3 className="text-3xl font-black text-[#062b57]">
                24
              </h3>

            </div>

          </div>

        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">

          {reports.map((report, index) => (
            <div
              key={index}
              className="group bg-white rounded-[28px] overflow-hidden border border-slate-100 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
            >

              <div className="relative h-[240px] overflow-hidden">

                <img
                  src={report.image}
                  alt={report.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                <div className="absolute top-4 left-4 bg-white text-[#062b57] px-3 py-1 rounded-full text-xs font-black shadow-lg">
                  {report.year}
                </div>

                <div className="absolute top-4 right-4 bg-cyan-500 text-white px-3 py-1 rounded-full text-[10px] font-black uppercase">
                  {report.category}
                </div>

                <div className="absolute bottom-4 left-4 right-4">

                  <h3 className="text-white text-lg font-black leading-tight">
                    {report.title}
                  </h3>

                </div>

              </div>

              <div className="p-5">

                <p className="text-slate-500 text-sm leading-relaxed">
                  Publication officielle du Comité National ITIE Congo.
                </p>

                <div className="flex gap-2 mt-5">

                  <Link
                    href={`/rapport/${report.slug}`}
                    className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 rounded-xl font-black text-sm hover:scale-105 transition-all duration-300 text-center flex items-center justify-center"
                  >
                    Consulter
                  </Link>

                  <Link
                    href={`/rapport/${report.slug}`}
                    className="w-12 h-12 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 font-black text-[#062b57] hover:scale-105 transition-all duration-300 flex items-center justify-center"
                  >
                    ↓
                  </Link>

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  )
}