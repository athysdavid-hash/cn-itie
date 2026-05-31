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
    <section className="py-24 px-4 bg-[#031b34] overflow-hidden relative">

      {/* BACKGROUND */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-700 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* HEADER */}
        <div className="text-center max-w-4xl mx-auto mb-16">

          <p className="text-cyan-400 uppercase tracking-[0.3em] font-black text-sm">
            Dashboard
          </p>

          <h2 className="text-4xl lg:text-6xl font-black text-white mt-6 leading-tight">
            Plateforme analytique nationale
          </h2>

          <p className="text-slate-300 text-xl mt-6 leading-relaxed">
            Visualisez les principaux indicateurs des industries extractives
            de la République du Congo.
          </p>

        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">

          {cards.map((card, index) => (
            <div
              key={index}
              className="group relative bg-white/10 backdrop-blur-2xl border border-white/10 rounded-[36px] p-6 overflow-hidden hover:-translate-y-3 hover:bg-white/15 transition-all duration-500 shadow-2xl"
            >

              {/* GLOW */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-400/20 rounded-full blur-3xl" />

              {/* TOP */}
              <div className="flex items-center justify-between relative z-10">

                <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center text-4xl shadow-2xl">

                  {card.icon}

                </div>

                <div className="bg-emerald-500/20 text-emerald-300 px-4 py-2 rounded-full text-sm font-black border border-emerald-400/20">

                  {card.growth}

                </div>

              </div>

              {/* VALUE */}
              <h3 className="text-5xl font-black text-white mt-6 relative z-10">

                {card.value}

              </h3>

              {/* TITLE */}
              <p className="text-slate-300 text-xl mt-4 relative z-10">

                {card.title}

              </p>

              {/* BAR */}
              <div className="mt-6 h-3 bg-white/10 rounded-full overflow-hidden relative z-10">

                <div className="h-full w-[75%] bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full" />

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  )
}