"use client"

const news = [
  {
    title: "Publication du Rapport ITIE Congo 2025",
    date: "12 Mai 2026",
    category: "Rapport ITIE",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200",
  },
  {
    title: "Mise à jour des données Open Data",
    date: "08 Mai 2026",
    category: "Open Data",
  },
  {
    title: "Réunion du Comité National",
    date: "03 Mai 2026",
    category: "Gouvernance",
  },
]

export default function News() {
  return (
    <section className="h-full">

      <div className="group bg-white rounded-[24px] border border-slate-200 overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 h-full">

        {/* FEATURED */}
        <div className="relative h-[180px] overflow-hidden">

          <img
            src={news[0].image}
            alt=""
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#031b34] via-[#031b34]/50 to-transparent" />

          <div className="absolute top-3 right-3">

            <div className="w-3 h-3 rounded-full bg-cyan-400 animate-ping absolute" />

            <div className="w-3 h-3 rounded-full bg-cyan-400 relative" />

          </div>

          <div className="absolute bottom-4 left-4">

            <span className="bg-cyan-500 text-white text-[10px] px-3 py-1 rounded-full font-black uppercase tracking-wider">
              {news[0].category}
            </span>

            <h2 className="text-white text-lg font-black mt-3 max-w-sm leading-tight">
              {news[0].title}
            </h2>

            <p className="text-slate-300 text-xs mt-2">
              {news[0].date}
            </p>

          </div>

        </div>

        {/* CONTENT */}
        <div className="p-5">

          <div className="flex items-center justify-between mb-5">

            <h3 className="text-xl font-black text-[#062b57]">
              Actualités
            </h3>

            <button className="text-cyan-600 text-sm font-black hover:translate-x-1 transition-all duration-300">
              Voir tout →
            </button>

          </div>

          <div className="space-y-3">

            {news.slice(1).map((item, index) => (
              <div
                key={index}
                className="group/item flex gap-3 border-b border-slate-100 pb-3 hover:translate-x-2 transition-all duration-300 cursor-pointer"
              >

                <div className="w-10 h-10 rounded-xl bg-cyan-50 flex items-center justify-center text-sm group-hover/item:scale-110 transition-all duration-300">

                  📰

                </div>

                <div className="flex-1">

                  <p className="text-[10px] uppercase font-black text-cyan-600 tracking-wider">
                    {item.category}
                  </p>

                  <h4 className="text-sm font-black text-[#062b57] mt-1 group-hover/item:text-cyan-600 transition-colors duration-300">
                    {item.title}
                  </h4>

                  <p className="text-xs text-slate-400 mt-1">
                    {item.date}
                  </p>

                </div>

              </div>
            ))}

          </div>

        </div>

      </div>

    </section>
  )
}