const cards = [
  {
    title: "Revenus pétroliers",
    value: "1 245 Md",
    growth: "+12%",
    icon: "🛢️",
  },
  {
    title: "Permis actifs",
    value: "327",
    growth: "+8%",
    icon: "📄",
  },
  {
    title: "Rapports publiés",
    value: "12",
    growth: "+4%",
    icon: "📘",
  },
  {
    title: "Données ouvertes",
    value: "100%",
    growth: "+16%",
    icon: "🌍",
  },
]

export default function DashboardPremium() {
  return (
    <section className="py-12 px-4 bg-[#031b34] overflow-hidden relative">

      {/* BACKGROUND */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-500 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-700 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-8">

          <p className="text-cyan-400 uppercase tracking-[0.25em] font-black text-xs">
            Dashboard
          </p>

          <h2 className="text-2xl lg:text-4xl font-black text-white mt-3">
            Plateforme analytique nationale
          </h2>

          <p className="text-slate-300 text-base mt-3 leading-relaxed">
            Visualisez les principaux indicateurs des industries extractives
            de la République du Congo.
          </p>

        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4">

          {cards.map((card, index) => (
            <div
              key={index}
              className="group relative bg-white/10 backdrop-blur-xl border border-white/10 rounded-[24px] p-4 overflow-hidden hover:-translate-y-1 transition-all duration-300 shadow-xl"
            >

              {/* GLOW */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-cyan-400/10 rounded-full blur-2xl" />

              {/* TOP */}
              <div className="flex items-center justify-between relative z-10">

                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center text-2xl shadow-lg">
                  {card.icon}
                </div>

                <div className="bg-emerald-500/20 text-emerald-300 px-3 py-1 rounded-full text-xs font-black">
                  {card.growth}
                </div>

              </div>

              {/* VALUE */}
              <h3 className="text-3xl font-black text-white mt-4">
                {card.value}
              </h3>

              {/* TITLE */}
              <p className="text-slate-300 text-sm mt-2">
                {card.title}
              </p>

              {/* BAR */}
              <div className="mt-4 h-2 bg-white/10 rounded-full overflow-hidden">

                <div className="h-full w-[75%] bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full" />

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  )
}