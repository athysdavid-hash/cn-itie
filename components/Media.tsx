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
    <section className="py-12 px-4 bg-[#031b34]">

      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-8">

          <div>

            <p className="text-xs font-black tracking-[0.25em] text-cyan-400 uppercase">
              Média
            </p>

            <h2 className="text-3xl lg:text-4xl font-black text-white mt-2">
              Galerie & vidéos
            </h2>

            <p className="text-slate-300 text-sm max-w-2xl mt-3">
              Conférences, publications et événements du CN-ITIE Congo.
            </p>

          </div>

          <button className="bg-cyan-500 text-white px-5 py-2 rounded-xl font-bold text-sm">
            Voir la galerie
          </button>

        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">

          {media.map((item, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-[22px] bg-white/5 border border-white/10"
            >

              <div className="relative h-[240px]">

                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                <div className="absolute inset-0 flex items-center justify-center">

                  <button className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-lg text-white text-xl">
                    ▶
                  </button>

                </div>

                <div className="absolute bottom-4 left-4 right-4">

                  <span className="inline-flex bg-cyan-500 text-white px-3 py-1 rounded-full text-xs font-black mb-2">
                    {item.category}
                  </span>

                  <h3 className="text-xl font-black text-white leading-tight">
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