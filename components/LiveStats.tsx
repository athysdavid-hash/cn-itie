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
    label: "Entreprises",
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
    <section className="py-6 px-4 bg-[#02162d]">

      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-6">

          <p className="text-cyan-400 uppercase tracking-[0.15em] font-black text-[10px]">
            Données en direct
          </p>

          <h2 className="text-xl lg:text-2xl font-black text-white mt-2">
            Indicateurs nationaux
          </h2>

          <p className="text-slate-300 text-xs mt-2">
            Chiffres clés du secteur extractif.
          </p>

        </div>

        {/* GRID */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">

          {stats.map((item, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-3"
            >

              <div
                className={`absolute top-0 right-0 w-14 h-14 rounded-full blur-xl bg-gradient-to-br ${item.color} opacity-20`}
              />

              <div className="flex items-center justify-between relative z-10">

                <div
                  className={`w-2.5 h-2.5 rounded-full bg-gradient-to-r ${item.color}`}
                />

                <span className="text-[9px] font-black text-emerald-400">
                  LIVE
                </span>

              </div>

              <h3 className="relative z-10 text-xl font-black text-white mt-3">
                {item.value}
              </h3>

              <p className="relative z-10 text-slate-300 text-xs mt-1">
                {item.label}
              </p>

              <div className="mt-3 h-1.5 bg-white/10 rounded-full overflow-hidden relative z-10">

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