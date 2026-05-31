"use client"

const stats = [
  {
    value: "1,4 T",
    label: "FCFA de revenus extractifs",
    growth: "+12,8%",
  },
  {
    value: "267 K",
    label: "Barils produits / jour",
    growth: "+8,4%",
  },
  {
    value: "42",
    label: "Permis actifs",
    growth: "+5,2%",
  },
  {
    value: "65%",
    label: "Contribution au PIB",
    growth: "+3,7%",
  },
]

export default function Stats() {
  return (
    <section className="max-w-7xl mx-auto px-4 -mt-16 relative z-30">

      <div className="bg-white/95 backdrop-blur-2xl border border-slate-200 rounded-[36px] shadow-2xl overflow-hidden">

        <div className="grid md:grid-cols-2 xl:grid-cols-4">

          {stats.map((item, index) => (
            <div
              key={index}
              className="relative p-8 lg:p-10 border-b xl:border-b-0 xl:border-r border-slate-200 last:border-r-0"
            >

              {/* Glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-100 rounded-full blur-3xl opacity-60" />

              <div className="relative z-10">

                <div className="flex items-center justify-between">

                  <span className="text-emerald-500 font-black text-sm">
                    ▲ {item.growth}
                  </span>

                  <div className="w-3 h-3 rounded-full bg-cyan-500 animate-pulse" />

                </div>

                <h3 className="text-5xl font-black text-[#062b57] mt-6">
                  {item.value}
                </h3>

                <p className="text-slate-500 mt-3 leading-relaxed">
                  {item.label}
                </p>

                {/* Mini graphique */}
                <div className="mt-8 flex items-end gap-1 h-12">

                  <div className="w-full h-3 bg-cyan-200 rounded-full" />
                  <div className="w-full h-5 bg-cyan-300 rounded-full" />
                  <div className="w-full h-7 bg-cyan-400 rounded-full" />
                  <div className="w-full h-9 bg-cyan-500 rounded-full" />
                  <div className="w-full h-12 bg-cyan-600 rounded-full" />

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  )
}