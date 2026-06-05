"use client"

const reports = [
  {
    year: "2025",
    category: "ITIE",
    title: "Rapport ITIE Congo 2025",
    image: "/reports/rapport-2025.jpg",
  },
  {
    year: "2024",
    category: "Gouvernance",
    title: "Réunion du CN-ITIE",
    image: "/reports/reunion-cnitie.jpg",
  },
  {
    year: "2023",
    category: "Pétrole",
    title: "Plateforme offshore",
    image: "/reports/plateforme-offshore.jpg",
  },
  {
    year: "2022",
    category: "Industries Extractives",
    title: "Secteur extractif congolais",
    image: "/reports/secteur-extractif-congo.jpg",
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

              {/* IMAGE */}
              <div className="relative h-[240px] overflow-hidden">

                <img
                  src={report.image}
                  alt={report.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                {/* YEAR */}
                <div className="absolute top-4 left-4 bg-white text-[#062b57] px-3 py-1 rounded-full text-xs font-black shadow-lg">
                  {report.year}
                </div>

                {/* CATEGORY */}
                <div className="absolute top-4 right-4 bg-cyan-500 text-white px-3 py-1 rounded-full text-[10px] font-black uppercase">
                  {report.category}
                </div>

                {/* TITLE */}
                <div className="absolute bottom-4 left-4 right-4">

                  <h3 className="text-white text-lg font-black leading-tight">
                    {report.title}
                  </h3>

                </div>

              </div>

              {/* CONTENT */}
              <div className="p-5">

                <p className="text-slate-500 text-sm leading-relaxed">
                  Publication officielle du Comité National ITIE Congo.
                </p>

                {/* BUTTONS */}
                <div className="flex gap-2 mt-5">

                  <button className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 rounded-xl font-black text-sm hover:scale-105 transition-all duration-300">
                    Consulter
                  </button>

                  <button className="w-12 h-12 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 font-black text-[#062b57] hover:scale-105 transition-all duration-300">
                    ↓
                  </button>

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  )
}