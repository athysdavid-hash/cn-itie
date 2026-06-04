const media = [
  {
    title: "Atelier de dissémination du Rapport ITIE à Pointe-Noire",
    category: "Événement",
    image: "/media/pointe-noire.jpg",
  },
  {
    title: "Réunion du Groupe Multipartite du CN-ITIE",
    category: "Gouvernance",
    image: "/media/groupe-multipartite.jpg",
  },
  {
    title: "Secteur pétrolier offshore du Congo",
    category: "Hydrocarbures",
    image: "/media/offshore-congo.jpg",
  },
]

export default function Media() {
  return (
    <section className="py-16 px-4 bg-[#031b34]">

      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-8">

          <div>

            <p className="text-xs font-black tracking-[0.25em] text-cyan-400 uppercase">
              CN-ITIE Congo
            </p>

            <h2 className="text-3xl lg:text-4xl font-black text-white mt-2">
              Actualités & Médias
            </h2>

            <p className="text-slate-300 text-sm max-w-2xl mt-3">
              Activités du Comité National ITIE, ateliers de dissémination,
              gouvernance extractive et transparence des revenus.
            </p>

          </div>

          <button className="bg-cyan-500 hover:bg-cyan-400 transition px-5 py-2 rounded-xl font-black text-white text-sm">
            Voir toutes les publications
          </button>

        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">

          {media.map((item, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-[24px] bg-white/5 border border-white/10 hover:border-cyan-500/30 transition-all duration-500"
            >

              <div className="relative h-[260px] overflow-hidden">

                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

                <div className="absolute top-4 left-4">

                  <span className="bg-cyan-500 text-white px-3 py-1 rounded-full text-xs font-black">
                    {item.category}
                  </span>

                </div>

                <div className="absolute bottom-5 left-5 right-5">

                  <h3 className="text-white text-xl font-black leading-tight">
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