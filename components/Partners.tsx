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
    <section className="py-28 px-4 bg-white overflow-hidden">

      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-20">

          <p className="text-sm font-black tracking-[0.3em] text-cyan-600 uppercase">
            Partenaires
          </p>

          <h2 className="text-4xl lg:text-5xl font-black text-[#062b57] mt-5 leading-tight">
            Institutions partenaires
          </h2>

          <p className="text-slate-500 text-lg mt-6 leading-relaxed">
            Le Comité National ITIE Congo collabore avec des institutions
            nationales et internationales engagées dans la transparence,
            la gouvernance et le développement durable.
          </p>

        </div>

        {/* PARTNERS WALL */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">

          {partners.map((partner, index) => (
            <div
              key={index}
              className="group bg-white border border-slate-200 rounded-[28px] p-8 text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >

              {/* LOGO */}
              <div className="w-24 h-24 mx-auto rounded-[24px] bg-[#f4f8fb] flex items-center justify-center text-5xl group-hover:scale-110 transition">

                {partner.icon}

              </div>

              {/* NAME */}
              <h3 className="mt-6 text-lg font-bold text-[#062b57] leading-snug min-h-[56px] flex items-center justify-center">

                {partner.name}

              </h3>

            </div>
          ))}

        </div>

        {/* BOTTOM BAND */}
        <div className="mt-16 bg-gradient-to-r from-[#062b57] to-[#0b4d91] rounded-[32px] p-10 text-center text-white">

          <h3 className="text-3xl font-black">
            Collaboration multipartite
          </h3>

          <p className="text-slate-200 mt-4 max-w-3xl mx-auto">
            Gouvernement, entreprises extractives, société civile et partenaires
            techniques travaillent ensemble pour renforcer la transparence et la
            redevabilité dans la gestion des ressources naturelles.
          </p>

        </div>

      </div>

    </section>
  )
}