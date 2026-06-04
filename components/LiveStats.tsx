const stats = [
  {
    label: "Production pétrolière",
    value: "267K",
    color: "from-cyan-400 to-blue-600",
  },
  {
    label: "Recettes extractives",
    value: "1,4 T",
    color: "from-emerald-400 to-green-600",
  },
  {
    label: "Rapports publiés",
    value: "15",
    color: "from-orange-400 to-red-500",
  },
  {
    label: "Jeux de données",
    value: "24+",
    color: "from-violet-400 to-purple-600",
  },
]

export default function LiveStats() {
  return (
    <section className="py-16 px-4 bg-[#02162d]">

      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-8">

          <p className="text-cyan-400 uppercase tracking-[0.2em] font-black text-[10px]">
            CN-ITIE CONGO
          </p>

          <h2 className="text-2xl lg:text-3xl font-black text-white mt-2">
            Chiffres clés du secteur extractif
          </h2>

          <p className="text-slate-300 text-sm mt-3">
            Aperçu des principaux indicateurs relatifs aux hydrocarbures,
            aux revenus extractifs et à la transparence en République du Congo.
          </p>

        </div>

        {/* GRID */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">

          {stats.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-lg p-5 hover:-translate-y-2 hover:border-cyan-400/30 hover:shadow-[0_0_25px_rgba(34,211,238,0.2)] transition-all duration-500"
            >

              <div
                className={`absolute top-0 right-0 w-24 h-24 rounded-full blur-2xl bg-gradient-to-br ${item.color} opacity-20`}
              />

              <div className="relative z-10 flex items-center justify-between">

                <div
                  className={`w-3 h-3 rounded-full bg-gradient-to-r ${item.color}`}
                />

                <span className="text-[10px] font-black text-emerald-400">
                  ACTIF
                </span>

              </div>

              <h3 className="relative z-10 text-3xl font-black text-white mt-5">
                {item.value}
              </h3>

              <p className="relative z-10 text-slate-300 text-sm mt-2">
                {item.label}
              </p>

              <div className="mt-5 h-2 bg-white/10 rounded-full overflow-hidden relative z-10">

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