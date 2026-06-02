const reports = [
  {
    year: "2025",
    title: "Rapport ITIE Congo 2025",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
  },
  {
    year: "2024",
    title: "Rapport ITIE Congo 2024",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop",
  },
  {
    year: "2023",
    title: "Rapport ITIE Congo 2023",
    image:
      "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200&auto=format&fit=crop",
  },
  {
    year: "2022",
    title: "Rapport ITIE Congo 2022",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1200&auto=format&fit=crop",
  },
]

export default function Reports() {
  return (
    <section className="py-10 px-4 bg-[#f4f8fb]">

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
              Consultez les rapports et publications officielles.
            </p>

          </div>

          <select className="bg-white border border-slate-200 px-4 py-2 rounded-xl font-bold text-[#062b57] shadow-sm outline-none">

            <option>Toutes les années</option>
            <option>2025</option>
            <option>2024</option>
            <option>2023</option>

          </select>

        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4">

          {reports.map((report, index) => (
            <div
              key={index}
        
            className="group bg-white rounded-[20px] overflow-hidden border border-slate-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">

              {/* IMAGE */}
              <div className="relative h-[180px] overflow-hidden">

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

                  <h3 className="text-lg font-black text-white group-hover:text-cyan-300 transition duration-300">
                    {report.title}
                  </h3>

                </div>

              </div>

              <div className="p-4">

                <div className="flex items-center justify-between">

                  <span className="text-slate-500 text-xs">
                    PDF • 24 MB
                  </span>

                  <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white w-9 h-9 rounded-xl font-black hover:scale-105 transition-all duration-300">
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