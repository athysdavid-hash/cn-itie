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
    <section className="py-24 px-4 bg-[#f4f8fb]">

      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">

          <div>

            <p className="text-sm font-black tracking-[0.3em] text-cyan-600 uppercase">
              Publications
            </p>

            <h2 className="text-4xl lg:text-6xl font-black text-[#062b57] mt-4">
              Rapports ITIE
            </h2>

            <p className="text-slate-500 text-xl max-w-3xl mt-6 leading-relaxed">
              Consultez les publications officielles, rapports annuels
              et documents de transparence extractive.
            </p>

          </div>

          {/* FILTER */}
          <select className="bg-white border border-slate-200 px-6 py-4 rounded-2xl font-bold text-[#062b57] shadow-sm outline-none">

            <option>Toutes les années</option>
            <option>2025</option>
            <option>2024</option>
            <option>2023</option>

          </select>

        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-10">

          {reports.map((report, index) => (
            <div
              key={index}
              className="group bg-white rounded-[32px] overflow-hidden border border-slate-200 shadow-sm hover:shadow-2xl hover:-translate-y-3 transition-all duration-500"
            >

              {/* COVER */}
              <div className="relative h-[320px] overflow-hidden">

                <img
                  src={report.image}
                  alt={report.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

                {/* YEAR */}
                <div className="absolute top-5 left-5 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full text-sm font-black text-[#062b57]">

                  {report.year}

                </div>

                {/* TITLE */}
                <div className="absolute bottom-6 left-6 right-6">

                  <h3 className="text-3xl font-black text-white leading-tight">

                    {report.title}

                  </h3>

                </div>

              </div>

              {/* CONTENT */}
              <div className="p-6">

                <div className="flex items-center justify-between">

                  <span className="text-slate-500 font-medium">
                    PDF • 24 MB
                  </span>

                  <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:scale-110 text-white w-12 h-12 rounded-2xl font-black shadow-xl transition">

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