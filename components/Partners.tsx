"use client"

const partners = [
  {
    name: "Banque mondiale",
    logo: "/partenaires/banque-mondiale.png",
  },
  {
    name: "PAGIR",
    logo: "/partenaires/pagir.png",
  },
  {
    name: "Ministère des Finances",
    logo: "/partenaires/finances.png",
  },
  {
    name: "Ministère des Hydrocarbures",
    logo: "/partenaires/hydrocarbures.png",
  },
  {
    name: "ITIE International",
    logo: "/partenaires/itie.png",
  },
]

export default function Partners() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-slate-50">

      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-12">

          <p className="text-xs font-black tracking-[0.25em] text-cyan-600 uppercase">
            Partenaires
          </p>

          <h2 className="text-3xl lg:text-5xl font-black text-[#062b57] mt-3">
            Partenaires Stratégiques
          </h2>

          <p className="text-slate-500 mt-4">
            Institutions nationales, partenaires techniques et financiers
            accompagnant le Comité National ITIE Congo dans la promotion
            de la transparence et de la bonne gouvernance.
          </p>

        </div>

        {/* STATS */}
        <div className="grid md:grid-cols-3 gap-4 mb-12">

          <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-lg text-center">
            <h3 className="text-4xl font-black text-[#062b57]">5</h3>
            <p className="text-slate-500 mt-2">
              Partenaires stratégiques
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-lg text-center">
            <h3 className="text-4xl font-black text-[#062b57]">100%</h3>
            <p className="text-slate-500 mt-2">
              Coopération institutionnelle
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-lg text-center">
            <h3 className="text-4xl font-black text-[#062b57]">🇨🇬</h3>
            <p className="text-slate-500 mt-2">
              République du Congo
            </p>
          </div>

        </div>

        {/* PARTNERS */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">

          {partners.map((partner, index) => (
            <div
              key={index}
              className="group bg-white rounded-[28px] border border-slate-100 shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 overflow-hidden"
            >

              <div className="h-2 bg-gradient-to-r from-green-500 via-yellow-400 to-red-500" />

              <div className="p-6">

                <div className="h-24 flex items-center justify-center">

                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-h-16 object-contain group-hover:scale-110 transition-all duration-500"
                  />

                </div>

                <h3 className="mt-5 text-center text-[#062b57] font-black text-sm leading-snug">
                  {partner.name}
                </h3>

              </div>

            </div>
          ))}

        </div>

        {/* BLOC INSTITUTIONNEL */}
        <div className="mt-14 rounded-[32px] overflow-hidden">

          <div className="h-2 bg-gradient-to-r from-green-500 via-yellow-400 to-red-500" />

          <div className="bg-gradient-to-r from-[#062b57] to-[#0b4f91] p-10 text-center text-white">

            <p className="text-cyan-300 uppercase tracking-[0.25em] text-xs font-black">
              Coopération
            </p>

            <h3 className="text-3xl lg:text-4xl font-black mt-4">
              Ensemble pour une gouvernance transparente
            </h3>

            <p className="text-slate-200 max-w-4xl mx-auto mt-5 leading-relaxed">
              Le Comité National ITIE Congo collabore avec les institutions
              publiques, les partenaires techniques et financiers ainsi que
              les organisations internationales afin de renforcer la transparence,
              la redevabilité et la gestion responsable des ressources naturelles
              de la République du Congo.
            </p>

          </div>

        </div>

      </div>

    </section>
  )
}