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
    <section className="max-w-6xl mx-auto px-4 -mt-10 relative z-30">

      <div className="bg-white/95 backdrop-blur-2xl border border-slate-200 rounded-[28px] shadow-2xl overflow-hidden">

        <div className="grid md:grid-cols-2 xl:grid-cols-4">

          {stats.map((item, index) => (
            <div
              key={index}
              className="
                group
                relative
                p-6
                border-b
                xl:border-b-0
                xl:border-r
                border-slate-200
                last:border-r-0
                hover:bg-cyan-50/50
                hover:-translate-y-2
                transition-all
                duration-500
                cursor-pointer
              "
            >

              {/* GLOW */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-200 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-500" />

              <div className="relative z-10">

                <div className="flex items-center justify-between">

                  <span className="text-emerald-500 font-black text-xs">
                    ▲ {item.growth}
                  </span>

                  <div className="w-3 h-3 rounded-full bg-cyan-500 animate-pulse" />

                </div>

                <h3 className="text-3xl font-black text-[#062b57] mt-4 group-hover:scale-110 transition-all duration-300 origin-left">
                  {item.value}
                </h3>

                <p className="text-slate-500 text-sm mt-2 leading-relaxed">
                  {item.label}
                </p>

                {/* MINI CHART */}
                <div className="mt-5 flex items-end gap-1 h-8">

                  <div className="w-full h-2 bg-cyan-200 rounded-full group-hover:h-3 transition-all duration-500" />
                  <div className="w-full h-3 bg-cyan-300 rounded-full group-hover:h-4 transition-all duration-500" />
                  <div className="w-full h-4 bg-cyan-400 rounded-full group-hover:h-5 transition-all duration-500" />
                  <div className="w-full h-6 bg-cyan-500 rounded-full group-hover:h-7 transition-all duration-500" />
                  <div className="w-full h-8 bg-cyan-600 rounded-full group-hover:h-10 transition-all duration-500" />

                </div>

                {/* BARRE ANIMEE */}
                <div className="mt-4 h-1 bg-slate-200 rounded-full overflow-hidden">

                  <div className="h-full w-0 group-hover:w-full bg-gradient-to-r from-cyan-400 to-blue-600 transition-all duration-1000" />

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  )
}