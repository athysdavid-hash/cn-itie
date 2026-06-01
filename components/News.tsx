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
  {
    title: "Nouvelles statistiques extractives",
    date: "28 Avril 2026",
    category: "Données",
  },
]

export default function News() {
  return (
    <section className="h-full">

      <div className="bg-white rounded-[24px] border border-slate-200 overflow-hidden shadow-lg h-full">

        {/* FEATURED */}
        <div className="relative h-[220px] overflow-hidden">

          <img
            src={news[0].image}
            alt=""
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#031b34] via-[#031b34]/60 to-transparent" />

          <div className="absolute bottom-0 left-0 p-5">

            <span className="bg-cyan-500 text-white text-[10px] font-black uppercase px-3 py-1 rounded-full">
              {news[0].category}
            </span>

            <h2 className="text-xl font-black text-white mt-3 max-w-md">
              {news[0].title}
            </h2>

            <p className="text-slate-300 text-sm mt-2">
              {news[0].date}
            </p>

          </div>

        </div>

        {/* LIST */}
        <div className="p-5">

          <div className="flex items-center justify-between mb-5">

            <h3 className="text-xl font-black text-[#062b57]">
              Dernières actualités
            </h3>

            <button className="text-cyan-600 text-sm font-black">
              Voir tout →
            </button>

          </div>

          <div className="space-y-3">

            {news.slice(1).map((item, index) => (
              <div
                key={index}
                className="group flex items-center gap-3 border-b border-slate-100 pb-3 hover:translate-x-1 transition-all duration-300"
              >

                <div className="w-10 h-10 rounded-xl bg-cyan-50 flex items-center justify-center text-sm">
                  📰
                </div>

                <div className="flex-1">

                  <p className="text-[10px] uppercase font-black text-cyan-600">
                    {item.category}
                  </p>

                  <h4 className="font-black text-sm text-[#062b57] mt-1 group-hover:text-cyan-600 transition">
                    {item.title}
                  </h4>

                  <p className="text-slate-400 text-xs mt-1">
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