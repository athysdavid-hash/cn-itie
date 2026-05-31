"use client"

const analytics = [
  {
    title: "Revenus pétroliers",
    value: "845 Md FCFA",
    progress: "82%",
    icon: "🛢️",
  },
  {
    title: "Permis miniers",
    value: "327",
    progress: "64%",
    icon: "⛏️",
  },
  {
    title: "Rapports publiés",
    value: "24",
    progress: "91%",
    icon: "📘",
  },
  {
    title: "Open Data",
    value: "98%",
    progress: "98%",
    icon: "📊",
  },
]

export default function Analytics() {
  return (
    <section className="py-28 px-4 bg-[#031b34] overflow-hidden relative">

      {/* GLOW */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* HEADER */}
        <div className="text-center max-w-4xl mx-auto mb-16">

          <p className="text-cyan-400 uppercase tracking-[0.3em] font-black text-sm">
            Centre d'analyse
          </p>

          <h2 className="text-4xl lg:text-6xl font-black text-white mt-6">
            Pilotage stratégique du secteur extractif
          </h2>

          <p className="text-slate-300 text-xl mt-6 leading-relaxed">
            Visualisation consolidée des indicateurs de performance,
            des revenus extractifs et des données de transparence.
          </p>

        </div>

        <div className="grid lg:grid-cols-3 gap-8">

          {/* MAIN PANEL */}
          <div className="lg:col-span-2 bg-white/5 border border-white/10 backdrop-blur-2xl rounded-[36px] p-8">

            <div className="flex items-center justify-between mb-10">

              <div>

                <p className="text-cyan-400 uppercase tracking-widest text-sm font-black">
                  Performance nationale
                </p>

                <h3 className="text-4xl font-black text-white mt-3">
                  Indicateurs stratégiques
                </h3>

              </div>

              <div className="w-20 h-20 rounded-3xl bg-cyan-500/20 flex items-center justify-center text-4xl">
                📈
              </div>

            </div>

            <div className="space-y-8">

              {analytics.map((item, index) => (
                <div key={index}>

                  <div className="flex items-center justify-between mb-3">

                    <div className="flex items-center gap-3">

                      <span className="text-2xl">
                        {item.icon}
                      </span>

                      <span className="text-white font-bold">
                        {item.title}
                      </span>

                    </div>

                    <span className="text-cyan-300 font-black">
                      {item.value}
                    </span>

                  </div>

                  <div className="h-4 bg-white/10 rounded-full overflow-hidden">

                    <div
                      className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"
                      style={{ width: item.progress }}
                    />

                  </div>

                </div>
              ))}

            </div>

          </div>

          {/* RIGHT PANEL */}
          <div className="space-y-6">

            <div className="bg-gradient-to-br from-cyan-500 to-blue-600 rounded-[32px] p-8 text-white shadow-2xl">

              <p className="uppercase tracking-widest text-sm font-black text-cyan-100">
                Croissance annuelle
              </p>

              <h3 className="text-7xl font-black mt-5">
                +12%
              </h3>

              <p className="mt-4 text-cyan-100">
                Revenus extractifs publiés
              </p>

            </div>

            <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-[32px] p-8">

              <p className="text-cyan-300 uppercase tracking-widest text-sm font-black">
                Transparence
              </p>

              <h3 className="text-6xl font-black text-white mt-5">
                AAA
              </h3>

              <p className="text-slate-300 mt-4">
                Conformité aux standards ITIE
              </p>

            </div>

            <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-[32px] p-8">

              <p className="text-cyan-300 uppercase tracking-widest text-sm font-black">
                Données publiques
              </p>

              <h3 className="text-6xl font-black text-white mt-5">
                98%
              </h3>

              <p className="text-slate-300 mt-4">
                Disponibilité Open Data
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  )
}