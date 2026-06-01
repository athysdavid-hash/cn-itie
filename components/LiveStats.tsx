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
    <section className="py-12 px-4 bg-[#02162d] relative">

      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-8">

          <p className="text-cyan-400 uppercase tracking-[0.25em] font-black text-xs">
            Données en direct
          </p>

          <h2 className="text-3xl lg:text-4xl font-black text-white mt-2">
            Indicateurs nationaux
          </h2>

          <p className="text-slate-300 text-sm mt-3">
            Principaux chiffres des industries extractives du Congo.
          </p>

        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4">

          {stats.map((item, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-[20px] border border-white/10 bg-white/5 p-5"
            >

              <div
                className={`absolute top-0 right-0 w-20 h-20 rounded-full blur-2xl bg-gradient-to-br ${item.color} opacity-20`}
              />

              <div className="flex items-center justify-between relative z-10">

                <div
                  className={`w-3 h-3 rounded-full bg-gradient-to-r ${item.color}`}
                />

                <div className="text-emerald-400 text-[10px] font-black">
                  LIVE
                </div>

              </div>

              <h3 className="relative z-10 text-3xl font-black text-white mt-4">
                {item.value}
              </h3>

              <p className="relative z-10 text-slate-300 text-sm mt-2">
                {item.label}
              </p>

              <div className="mt-4 h-2 bg-white/10 rounded-full overflow-hidden relative z-10">

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