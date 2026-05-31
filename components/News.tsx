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

      <div className="bg-white rounded-[36px] border border-slate-200 overflow-hidden shadow-xl h-full">

        {/* FEATURED */}
        <div className="relative h-[320px] overflow-hidden">

          <img
            src={news[0].image}
            alt=""
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#031b34] via-[#031b34]/60 to-transparent" />

          <div className="absolute bottom-0 left-0 p-8">

            <span className="bg-cyan-500 text-white text-xs font-black uppercase px-4 py-2 rounded-full">
              {news[0].category}
            </span>

            <h2 className="text-3xl font-black text-white mt-4 max-w-xl">
              {news[0].title}
            </h2>

            <p className="text-slate-300 mt-3">
              {news[0].date}
            </p>

          </div>

        </div>

        {/* LIST */}
        <div className="p-8">

          <div className="flex items-center justify-between mb-8">

            <h3 className="text-2xl font-black text-[#062b57]">
              Dernières actualités
            </h3>

            <button className="text-cyan-600 font-black">
              Voir tout →
            </button>

          </div>

          <div className="space-y-5">

            {news.slice(1).map((item, index) => (
              <div
                key={index}
                className="group flex items-center gap-5 border-b border-slate-100 pb-5 hover:translate-x-2 transition-all duration-300"
              >

                <div className="w-14 h-14 rounded-2xl bg-cyan-50 flex items-center justify-center">

                  📰

                </div>

                <div className="flex-1">

                  <p className="text-xs uppercase font-black text-cyan-600">

                    {item.category}

                  </p>

                  <h4 className="font-black text-[#062b57] mt-1 group-hover:text-cyan-600 transition">

                    {item.title}

                  </h4>

                  <p className="text-slate-400 text-sm mt-1">

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