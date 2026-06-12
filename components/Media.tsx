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
    <section className="py-10">

      {/* HEADER */}

      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">

        <div>

          <p className="text-xs font-black tracking-[0.25em] text-cyan-600 uppercase">
            CN-ITIE Congo
          </p>

          <h2 className="text-3xl font-black text-[#062b57] mt-2">
            Actualités & Médias
          </h2>

          <p className="text-slate-500 text-sm mt-2">
            Activités, ateliers, gouvernance extractive et transparence.
          </p>

        </div>

        <button className="bg-[#062b57] hover:bg-[#0b4d91] text-white px-5 py-3 rounded-xl font-black transition">
          Voir toutes les publications
        </button>

      </div>

      {/* CARTES */}

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

        {media.map((item, index) => (

          <article
            key={index}
            className="group overflow-hidden rounded-[24px] bg-white border border-slate-200 shadow-lg hover:shadow-2xl transition-all duration-500"
          >

            <div className="relative h-[240px] overflow-hidden">

              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

              <span className="absolute top-4 left-4 bg-cyan-600 text-white px-3 py-1 rounded-full text-xs font-black">
                {item.category}
              </span>

            </div>

            <div className="p-5">

              <h3 className="text-[#062b57] text-lg font-black leading-snug">
                {item.title}
              </h3>

            </div>

          </article>

        ))}

      </div>

    </section>
  )
}