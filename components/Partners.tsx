const partners = [
  {
    name: "ITIE International",
    icon: "🌍",
  },
  {
    name: "Ministère des Hydrocarbures",
    icon: "🏛️",
  },
  {
    name: "Banque Mondiale",
    icon: "💼",
  },
  {
    name: "Société Civile",
    icon: "🤝",
  },
  {
    name: "Open Data Congo",
    icon: "📊",
  },
]

export default function Partners() {
  return (
    <section className="py-12 px-4 bg-white">

      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-10">

          <p className="text-xs font-black tracking-[0.25em] text-cyan-600 uppercase">
            Partenaires
          </p>

          <h2 className="text-3xl lg:text-4xl font-black text-[#062b57] mt-3">
            Institutions partenaires
          </h2>

          <p className="text-slate-500 text-sm mt-3">
            Collaboration avec les acteurs nationaux et internationaux
            de la transparence extractive.
          </p>

        </div>

        {/* GRID */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">

          {partners.map((partner, index) => (
            <div
              key={index}
              className="bg-white border border-slate-200 rounded-[18px] p-4 text-center hover:shadow-lg transition"
            >

              <div className="w-14 h-14 mx-auto rounded-xl bg-[#f4f8fb] flex items-center justify-center text-3xl">
                {partner.icon}
              </div>

              <h3 className="mt-3 text-sm font-bold text-[#062b57] leading-snug">
                {partner.name}
              </h3>

            </div>
          ))}

        </div>

        {/* BOTTOM */}
        <div className="mt-8 bg-gradient-to-r from-[#062b57] to-[#0b4d91] rounded-[20px] p-5 text-center text-white">

          <h3 className="text-xl font-black">
            Collaboration multipartite
          </h3>

          <p className="text-sm text-slate-200 mt-2 max-w-2xl mx-auto">
            Gouvernement, entreprises, société civile et partenaires
            techniques œuvrent ensemble pour renforcer la transparence.
          </p>

        </div>

      </div>

    </section>
  )
}