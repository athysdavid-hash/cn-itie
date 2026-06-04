export default function News() {
  const news = [
    {
      title: "Publication du Rapport ITIE Congo 2025",
      category: "Rapport ITIE",
      date: "12 Mai 2026",
    },
    {
      title: "Atelier de dissémination du Rapport ITIE à Pointe-Noire",
      category: "Transparence",
      date: "08 Mai 2026",
    },
    {
      title: "Réunion du Groupe Multipartite du CN-ITIE Congo",
      category: "Gouvernance",
      date: "03 Mai 2026",
    },
    {
      title: "Mise à disposition des données ouvertes du secteur pétrolier",
      category: "Open Data",
      date: "28 Avril 2026",
    },
  ]

  return (
    <section className="bg-white rounded-[24px] border border-slate-200 overflow-hidden shadow-sm h-full">

      {/* HEADER */}
      <div className="bg-gradient-to-r from-[#062b57] to-[#0b4d91] p-6 text-white">

        <p className="uppercase tracking-[3px] text-cyan-300 text-xs font-black">
          Actualités
        </p>

        <h2 className="text-2xl font-black mt-2">
          CN-ITIE Congo
        </h2>

        <p className="text-slate-200 text-sm mt-2">
          Dernières publications et activités du Comité National ITIE.
        </p>

      </div>

      {/* CONTENT */}
      <div className="p-5 space-y-4">

        {news.map((item, index) => (
          <div
            key={index}
            className="border-b border-slate-100 pb-4 last:border-b-0 hover:translate-x-1 transition-all duration-300 cursor-pointer"
          >

            <span className="inline-block bg-cyan-50 text-cyan-700 px-2 py-1 rounded-full text-[10px] uppercase font-black">
              {item.category}
            </span>

            <h3 className="text-[#062b57] font-bold mt-2 leading-snug">
              {item.title}
            </h3>

            <p className="text-xs text-slate-400 mt-1">
              {item.date}
            </p>

          </div>
        ))}

      </div>

    </section>
  )
}