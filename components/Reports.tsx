"use client"

const reports = [
  {
    year: "2025",
    title: "Rapport ITIE Congo 2025",
    image: "/reports/rapport-2025.jpg",
  },
  {
    year: "2024",
    title: "Réunion du CN-ITIE",
    image: "/reports/reunion-cnitie.jpg",
  },
  {
    year: "2023",
    title: "Plateforme offshore",
    image: "/reports/plateforme-offshore.jpg",
  },
  {
    year: "2022",
    title: "Secteur extractif congolais",
    image: "/reports/secteur-extractif-congo.jpg",
  },
]

export default function Reports() {
  return (
    <section className="py-8 px-4 bg-[#f4f8fb]">

      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-8">

          <div>

            <p className="text-xs font-black tracking-[0.2em] text-cyan-600 uppercase">
              Publications
            </p>

            <h2 className="text-2xl lg:text-4xl font-black text-[#062b57] mt-2">
              Rapports ITIE
            </h2>

            <p className="text-slate-500 text-sm max-w-2xl mt-3">
              Rapports ITIE, études sectorielles, documents de gouvernance
              et publications officielles du Comité National ITIE Congo.
            </p>

          </div>

          <select className="bg-white border border-slate-200 px-4 py-2 rounded-xl font-bold text-[#062b57] shadow-sm outline-none">

            <option>Toutes les années</option>
            <option>2025</option>
            <option>2024</option>
            <option>2023</option>
            <option>2022</option>

          </select>

        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4">

          {reports.map((report, index) => (
            <div
              key={index}
              className="group bg-white rounded-[20px] overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >

              {/* IMAGE */}
              <div className="relative h-[160px] overflow-hidden">

                <img
                  src={report.image}
                  alt={report.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

                <div className="absolute top-3 left-3 bg-white px-3 py-1 rounded-full text-xs font-black text-[#062b57]">
                  {report.year}
                </div>

                <div className="absolute bottom-3 left-3 right-3">

                  <h3 className="text-base font-black text-white group-hover:text-cyan-300 transition duration-300 leading-tight">
                    {report.title}
                  </h3>

                </div>

              </div>

              {/* CONTENT */}
              <div className="p-4">

                <div className="flex items-center justify-between">

                  <span className="text-slate-500 text-xs font-semibold">
                    Publication officielle
                  </span>

                  <button className="w-10 h-10 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-black hover:scale-110 transition-all duration-300">
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