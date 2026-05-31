const media = [
  {
    title: "Forum national ITIE Congo",
    category: "Conférence",
    image:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Publication du rapport 2025",
    category: "Rapport",
    image:
      "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Open Data & Transparence",
    category: "Open Data",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
  },
]

export default function Media() {
  return (
    <section className="py-24 px-4 bg-[#031b34] group overflow-hidden">

      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">

          <div>

            <p className="text-sm font-black tracking-[0.3em] text-cyan-400 uppercase">
              Média
            </p>

            <h2 className="text-4xl lg:text-6xl font-black text-white mt-4 leading-tight">
              Galerie & vidéos
            </h2>

            <p className="text-slate-300 text-xl max-w-3xl mt-6 leading-relaxed">
              Revivez les conférences, publications et événements
              organisés autour de la transparence extractive.
            </p>

          </div>

          <button className="bg-cyan-500 hover:bg-cyan-600 hover:scale-105 transition text-white px-8 py-4 rounded-2xl font-black shadow-2xl">

            Voir toute la galerie

          </button>

        </div>

        {/* GRID */}
        <div className="grid lg:grid-cols-3 gap-8">

          {media.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-[36px] bg-white/5 border border-white/10 backdrop-blur-xl hover:-translate-y-4 hover:shadow-2xl transition-all duration-700 group-hover:scale-105 duration-500"
            >

              {/* IMAGE */}
              <div className="relative h-[420px] group overflow-hidden">

                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                {/* PLAY */}
                <div className="absolute inset-0 flex items-center justify-center">

                  <button className="w-24 h-24 rounded-full bg-white/20 backdrop-blur-xl border border-white/20 text-white text-4xl hover:scale-110 transition shadow-2xl">

                    ▶

                  </button>

                </div>

                {/* CONTENT */}
                <div className="absolute bottom-8 left-8 right-8">

                  <span className="inline-flex bg-cyan-500 text-white px-4 py-2 rounded-full text-sm font-black mb-5">

                    {item.category}

                  </span>

                  <h3 className="text-4xl font-black text-white leading-tight">

                    {item.title}

                  </h3>

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  )
}