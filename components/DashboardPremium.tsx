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
    <section className="py-6 px-4 bg-[#031b34] relative overflow-hidden">

      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-52 h-52 bg-cyan-500 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-52 h-52 bg-blue-700 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">

        {/* HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-6">

          <p className="text-cyan-400 uppercase tracking-[0.2em] font-black text-[10px]">
            Dashboard
          </p>

          <h2 className="text-xl lg:text-2xl font-black text-white mt-2">
            Plateforme analytique
          </h2>

          <p className="text-slate-300 text-xs mt-2">
            Principaux indicateurs du secteur extractif.
          </p>

        </div>

        {/* GRID */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">

          {cards.map((card, index) => (
           <div
  key={index}
  className="group relative bg-white/10 border border-white/10 rounded-xl p-3 backdrop-blur-lg hover:-translate-y-2 hover:scale-105 hover:border-cyan-400/40 hover:shadow-[0_0_30px_rgba(34,211,238,0.25)] transition-all duration-500 cursor-pointer"
>

              <div className="flex items-center justify-between">

              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center text-lg transition-transform duration-500 group-hover:rotate-12">  
                  {card.icon}
                </div>

                <span className="text-[10px] font-black text-emerald-300">
                  {card.growth}
                </span>

              </div>

              <h3 className="text-xl font-black text-white mt-3">
                {card.value}
              </h3>

              <p className="text-slate-300 text-xs mt-1">
                {card.title}
              </p>

              <div className="mt-3 h-1.5 bg-white/10 rounded-full overflow-hidden">
                <div className="h-full w-[75%] bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full" />
              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  )
}