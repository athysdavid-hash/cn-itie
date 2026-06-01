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

      <div className="bg-white rounded-[18px] border border-slate-200 overflow-hidden shadow-sm h-full">

        {/* FEATURED */}
        <div className="relative h-[160px] overflow-hidden">

          <img
            src={news[0].image}
            alt=""
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#031b34] via-[#031b34]/50 to-transparent" />

          <div className="absolute bottom-0 left-0 p-4">

            <span className="bg-cyan-500 text-white text-[9px] font-black uppercase px-2 py-1 rounded-full">
              {news[0].category}
            </span>

            <h2 className="text-base font-black text-white mt-2 max-w-sm">
              {news[0].title}
            </h2>

            <p className="text-slate-300 text-xs mt-1">
              {news[0].date}
            </p>

          </div>

        </div>

        {/* LIST */}
        <div className="p-4">

          <div className="flex items-center justify-between mb-4">

            <h3 className="text-lg font-black text-[#062b57]">
              Actualités
            </h3>

            <button className="text-cyan-600 text-xs font-black">
              Voir tout →
            </button>

          </div>

          <div className="space-y-2">

            {news.slice(1).map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-2 border-b border-slate-100 pb-2"
              >

                <div className="w-8 h-8 rounded-lg bg-cyan-50 flex items-center justify-center text-xs">
                  📰
                </div>

                <div className="flex-1">

                  <p className="text-[9px] uppercase font-black text-cyan-600">
                    {item.category}
                  </p>

                  <h4 className="font-bold text-xs text-[#062b57]">
                    {item.title}
                  </h4>

                  <p className="text-slate-400 text-[10px]">
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