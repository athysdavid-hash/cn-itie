const cards = [
  {
    title: "Production pétrolière",
    value: "267K",
    growth: "+8%",
    icon: "🛢️",
  },
  {
    title: "Recettes extractives",
    value: "1,4 T",
    growth: "+12%",
    icon: "💰",
  },
  {
    title: "Rapports ITIE",
    value: "15",
    growth: "+4%",
    icon: "📘",
  },
  {
    title: "Données ouvertes",
    value: "98%",
    growth: "+16%",
    icon: "📊",
  },
]

export default function DashboardPremium() {
  return (
    <section className="py-16 px-4 bg-[#031b34] relative overflow-hidden">

      {/* Glow */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-60 h-60 bg-cyan-500 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-60 h-60 bg-blue-700 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-10">

          <p className="text-cyan-400 uppercase tracking-[0.25em] font-black text-[10px]">
            CN-ITIE CONGO
          </p>

          <h2 className="text-2xl lg:text-3xl font-black text-white mt-3">
            Tableau de bord du secteur extractif
          </h2>

          <p className="text-slate-300 text-sm mt-3 leading-relaxed">
            Principaux indicateurs liés aux hydrocarbures,
            aux revenus extractifs et à la transparence
            en République du Congo.
          </p>

        </div>

        {/* CARDS */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">

          {cards.map((card, index) => (
            <div
              key={index}
              className="group relative bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl p-5 hover:-translate-y-2 hover:scale-[1.03] hover:border-cyan-400/40 hover:shadow-[0_0_30px_rgba(34,211,238,0.25)] transition-all duration-500"
            >

              <div className="flex items-center justify-between">

                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center text-2xl shadow-lg group-hover:rotate-12 transition-transform duration-500">
                  {card.icon}
                </div>

                <span className="text-emerald-300 font-black text-xs">
                  {card.growth}
                </span>

              </div>

              <h3 className="text-3xl font-black text-white mt-5">
                {card.value}
              </h3>

              <p className="text-slate-300 text-sm mt-2">
                {card.title}
              </p>

              <div className="mt-5 h-2 bg-white/10 rounded-full overflow-hidden">

                <div className="h-full w-[80%] bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full" />

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  )
}