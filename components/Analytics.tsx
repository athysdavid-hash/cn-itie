const analytics = [
  {
    title: "Revenus pétroliers",
    value: "845 Md",
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
    title: "Rapports",
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
    <section className="py-6 px-4 bg-[#031b34] relative overflow-hidden">

      <div className="absolute top-0 left-0 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-blue-600/10 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-6">

          <p className="text-cyan-400 uppercase tracking-[0.15em] font-black text-[10px]">
            Centre d'analyse
          </p>

          <h2 className="text-xl lg:text-2xl font-black text-white mt-2">
            Pilotage stratégique
          </h2>

          <p className="text-slate-300 text-xs mt-2">
            Revenus, permis et indicateurs ITIE.
          </p>

        </div>

        <div className="grid lg:grid-cols-3 gap-3">

          {/* PANEL */}
          <div className="lg:col-span-2 bg-white/5 border border-white/10 rounded-xl p-3">

            <div className="flex items-center justify-between mb-4">

              <div>

                <p className="text-cyan-400 uppercase text-[10px] font-black">
                  Performance
                </p>

                <h3 className="text-lg font-black text-white mt-1">
                  Indicateurs
                </h3>

              </div>

              <div className="w-9 h-9 rounded-lg bg-cyan-500/20 flex items-center justify-center">
                📈
              </div>

            </div>

            <div className="space-y-3">

              {analytics.map((item, index) => (
                <div key={index}>

                  <div className="flex items-center justify-between mb-1">

                    <div className="flex items-center gap-2">

                      <span className="text-sm">
                        {item.icon}
                      </span>

                      <span className="text-white text-xs font-bold">
                        {item.title}
                      </span>

                    </div>

                    <span className="text-cyan-300 text-xs font-black">
                      {item.value}
                    </span>

                  </div>

                  <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">

                    <div
                      className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"
                      style={{ width: item.progress }}
                    />

                  </div>

                </div>
              ))}

            </div>

          </div>

          {/* RIGHT */}
          <div className="space-y-3">

            <div className="bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl p-3 text-white">

              <p className="uppercase text-[10px] font-black">
                Croissance
              </p>

              <h3 className="text-2xl font-black mt-1">
                +12%
              </h3>

            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-3">

              <p className="text-cyan-300 uppercase text-[10px] font-black">
                Transparence
              </p>

              <h3 className="text-2xl font-black text-white mt-1">
                AAA
              </h3>

            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-3">

              <p className="text-cyan-300 uppercase text-[10px] font-black">
                Open Data
              </p>

              <h3 className="text-2xl font-black text-white mt-1">
                98%
              </h3>

            </div>

          </div>

        </div>

      </div>

    </section>
  )
}