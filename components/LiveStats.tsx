const stats = [
  {
    label: "Barils produits",
    value: "57,3M",
    color: "from-cyan-400 to-blue-600",
  },
  {
    label: "Contrats publiés",
    value: "184",
    color: "from-emerald-400 to-green-600",
  },
  {
    label: "Entreprises déclarantes",
    value: "89",
    color: "from-orange-400 to-red-500",
  },
  {
    label: "Permis actifs",
    value: "327",
    color: "from-violet-400 to-purple-600",
  },
]

export default function LiveStats() {
  return (
    <section className="py-24 px-4 bg-[#02162d] overflow-hidden relative">

      {/* BACKGROUND */}
      <div className="absolute inset-0 opacity-20">

        <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500 rounded-full blur-3xl" />

        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-700 rounded-full blur-3xl" />

      </div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* HEADER */}
        <div className="text-center max-w-4xl mx-auto mb-16">

          <p className="text-cyan-400 uppercase tracking-[0.3em] font-black text-sm">
            Données en direct
          </p>

          <h2 className="text-4xl lg:text-6xl font-black text-white mt-6 leading-tight">
            Indicateurs nationaux
          </h2>

          <p className="text-slate-300 text-xl mt-6 leading-relaxed">
            Visualisation instantanée des principaux chiffres
            des industries extractives du Congo.
          </p>

        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">

          {stats.map((item, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-[30px] border border-white/10 bg-white/5 backdrop-blur-xl p-10 hover:-translate-y-3 hover:bg-white/10 transition-all duration-500"
            >

              {/* GLOW */}
              <div className={`absolute top-0 right-0 w-40 h-40 rounded-full blur-3xl bg-gradient-to-br ${item.color} opacity-20`} />

              {/* TOP */}
              <div className="flex items-center justify-between relative z-10">

                <div className={`w-6 h-6 rounded-full bg-gradient-to-r ${item.color} animate-pulse`} />

                <div className="text-emerald-400 text-sm font-black">
                  LIVE
                </div>

              </div>

              {/* VALUE */}
              <h3 className="relative z-10 text-6xl font-black text-white mt-6">

                {item.value}

              </h3>

              {/* LABEL */}
              <p className="relative z-10 text-slate-300 text-xl mt-5">

                {item.label}

              </p>

              {/* BAR */}
              <div className="mt-6 h-3 bg-white/10 rounded-full overflow-hidden relative z-10">

                <div
                  className={`h-full w-[80%] rounded-full bg-gradient-to-r ${item.color}`}
                />

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  )
}