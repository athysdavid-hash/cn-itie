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
    <section className="py-12 px-4 bg-[#031b34] overflow-hidden relative">

      <div className="absolute top-0 left-0 w-[250px] h-[250px] bg-cyan-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[250px] h-[250px] bg-blue-600/10 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-8">

          <p className="text-cyan-400 uppercase tracking-[0.2em] font-black text-xs">
            Centre d'analyse
          </p>

          <h2 className="text-2xl lg:text-4xl font-black text-white mt-3">
            Pilotage stratégique du secteur extractif
          </h2>

          <p className="text-slate-300 text-sm mt-3 leading-relaxed">
            Visualisation des revenus, permis et indicateurs ITIE.
          </p>

        </div>

        <div className="grid lg:grid-cols-3 gap-4">

          {/* PANEL PRINCIPAL */}
          <div className="lg:col-span-2 bg-white/5 border border-white/10 backdrop-blur-xl rounded-[24px] p-5">

            <div className="flex items-center justify-between mb-5">

              <div>

                <p className="text-cyan-400 uppercase tracking-widest text-xs font-black">
                  Performance nationale
                </p>

                <h3 className="text-2xl font-black text-white mt-2">
                  Indicateurs stratégiques
                </h3>

              </div>

              <div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center text-2xl">
                📈
              </div>

            </div>

            <div className="space-y-5">

              {analytics.map((item, index) => (
                <div key={index}>

                  <div className="flex items-center justify-between mb-2">

                    <div className="flex items-center gap-2">

                      <span>{item.icon}</span>

                      <span className="text-white text-sm font-bold">
                        {item.title}
                      </span>

                    </div>

                    <span className="text-cyan-300 text-sm font-black">
                      {item.value}
                    </span>

                  </div>

                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">

                    <div
                      className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"
                      style={{ width: item.progress }}
                    />

                  </div>

                </div>
              ))}

            </div>

          </div>

          {/* CARTES LATÉRALES */}
          <div className="space-y-4">

            <div className="bg-gradient-to-br from-cyan-500 to-blue-600 rounded-[20px] p-5 text-white">

              <p className="uppercase tracking-widest text-xs font-black">
                Croissance annuelle
              </p>

              <h3 className="text-4xl font-black mt-3">
                +12%
              </h3>

              <p className="mt-2 text-sm">
                Revenus extractifs publiés
              </p>

            </div>

            <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-[20px] p-5">

              <p className="text-cyan-300 uppercase tracking-widest text-xs font-black">
                Transparence
              </p>

              <h3 className="text-4xl font-black text-white mt-3">
                AAA
              </h3>

              <p className="text-slate-300 text-sm mt-2">
                Conformité ITIE
              </p>

            </div>

            <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-[20px] p-5">

              <p className="text-cyan-300 uppercase tracking-widest text-xs font-black">
                Open Data
              </p>

              <h3 className="text-4xl font-black text-white mt-3">
                98%
              </h3>

              <p className="text-slate-300 text-sm mt-2">
                Disponibilité des données
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  )
}