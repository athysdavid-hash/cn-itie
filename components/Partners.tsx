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
    <section className="py-14 px-4 bg-white">

      <div className="max-w-7xl mx-auto">

        <div className="text-center max-w-3xl mx-auto mb-10">

          <p className="text-xs font-black tracking-[0.25em] text-cyan-600 uppercase">
            Partenaires
          </p>

          <h2 className="text-3xl lg:text-4xl font-black text-[#062b57] mt-3">
            Partenaires techniques et institutionnels
          </h2>

          <p className="text-slate-500 text-sm mt-3">
            Les partenaires qui accompagnent le Comité National ITIE Congo
            dans la promotion de la transparence et de la bonne gouvernance.
          </p>

        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">

          {partners.map((partner, index) => (
            <div
              key={index}
              className="bg-white border border-slate-200 rounded-[20px] p-5 hover:shadow-xl hover:-translate-y-2 transition-all duration-500"
            >

              <div className="h-20 flex items-center justify-center">

                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-h-14 object-contain"
                />

              </div>

              <h3 className="mt-4 text-sm font-bold text-center text-[#062b57]">
                {partner.name}
              </h3>

            </div>
          ))}

        </div>

        <div className="mt-10 bg-gradient-to-r from-[#062b57] to-[#0b4d91] rounded-[24px] p-6 text-center text-white">

          <h3 className="text-2xl font-black">
            Collaboration pour la transparence
          </h3>

          <p className="text-slate-200 text-sm mt-3 max-w-3xl mx-auto">
            Le Comité National ITIE Congo travaille en partenariat avec les
            institutions publiques, les partenaires techniques et financiers
            ainsi que les organisations internationales afin de renforcer la
            gouvernance du secteur extractif.
          </p>

        </div>

      </div>

    </section>
  )
}