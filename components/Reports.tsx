const reports = [
  {
    year: "2025",
    title: "Rapport ITIE 2025",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
  },
  {
    year: "2024",
    title: "Rapport ITIE 2024",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop",
  },
  {
    year: "2023",
    title: "Rapport ITIE 2023",
    image:
      "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200&auto=format&fit=crop",
  },
  {
    year: "2022",
    title: "Rapport ITIE 2022",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1200&auto=format&fit=crop",
  },
]

export default function Reports() {
  return (
    <section className="py-6 px-4 bg-[#f4f8fb]">

      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-6">

          <div>

            <p className="text-[10px] font-black tracking-[0.2em] text-cyan-600 uppercase">
              Publications
            </p>

            <h2 className="text-xl lg:text-2xl font-black text-[#062b57] mt-1">
              Rapports ITIE
            </h2>

            <p className="text-slate-500 text-xs mt-2">
              Rapports et publications officielles.
            </p>

          </div>

          <select className="bg-white border border-slate-200 px-3 py-2 rounded-lg text-sm font-bold text-[#062b57]">
            <option>Toutes les années</option>
            <option>2025</option>
            <option>2024</option>
            <option>2023</option>
          </select>

        </div>

        {/* GRID */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">

          {reports.map((report, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition"
            >

              <div className="relative h-[120px] overflow-hidden">

                <img
                  src={report.image}
                  alt={report.title}
                  className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

                <div className="absolute top-2 left-2 bg-white px-2 py-1 rounded-full text-[10px] font-black text-[#062b57]">
                  {report.year}
                </div>

              </div>

              <div className="p-3">

                <h3 className="text-sm font-black text-[#062b57] leading-tight min-h-[40px]">
                  {report.title}
                </h3>

                <div className="flex items-center justify-between mt-3">

                  <span className="text-[10px] text-slate-500">
                    PDF
                  </span>

                  <button className="bg-[#062b57] text-white w-7 h-7 rounded-lg text-xs">
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