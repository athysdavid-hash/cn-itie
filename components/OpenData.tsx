"use client"

const datasets = [
  {
    title: "Revenus extractifs",
    description: "Hydrocarbures et mines",
    icon: "💰",
    files: "XLSX • CSV",
  },
  {
    title: "Permis miniers",
    description: "Permis et zones",
    icon: "📄",
    files: "GeoJSON",
  },
  {
    title: "Production pétrolière",
    description: "Volumes nationaux",
    icon: "🛢️",
    files: "CSV • API",
  },
  {
    title: "Contrats publiés",
    description: "Documents officiels",
    icon: "📘",
    files: "PDF",
  },
]

export default function OpenData() {
  return (
    <section className="py-12 px-4 bg-white overflow-hidden">

      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-8">

          <p className="text-xs font-black tracking-[0.25em] text-cyan-600 uppercase animate-pulse">
            Open Data
          </p>

          <h2 className="text-2xl lg:text-3xl font-black text-[#062b57] mt-2">
            Centre des données ouvertes
          </h2>

          <p className="text-slate-500 text-sm max-w-2xl mx-auto mt-3">
            Rapports, statistiques, permis et contrats.
          </p>

        </div>

        <div className="grid lg:grid-cols-[260px_1fr] gap-5">

          {/* LEFT */}
          <div className="bg-gradient-to-br from-[#062b57] to-[#0b4d91] rounded-2xl p-5 text-white hover:scale-105 transition-all duration-500 shadow-xl">

            <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-xl mb-4 animate-bounce">
              📊
            </div>

            <h3 className="text-xl font-black">
              Open Data
            </h3>

            <p className="text-sm text-slate-300 mt-2">
              Données publiques extractives.
            </p>

            <div className="grid grid-cols-2 gap-3 mt-5">

              <div>
                <h4 className="text-xl font-black">24+</h4>
                <p className="text-xs text-slate-300">
                  Jeux
                </p>
              </div>

              <div>
                <h4 className="text-xl font-black">98%</h4>
                <p className="text-xs text-slate-300">
                  Ouvertes
                </p>
              </div>

            </div>

            <button className="w-full bg-cyan-500 hover:bg-cyan-400 hover:scale-105 mt-5 py-2 rounded-xl text-sm font-black transition-all duration-300">
              Explorer
            </button>

          </div>

          {/* RIGHT */}
          <div className="space-y-3">

            {datasets.map((item, index) => (
              <div
                key={index}
                className="group bg-[#f8fbfd] border border-slate-200 rounded-2xl p-4 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 cursor-pointer"
              >

                <div className="flex items-center justify-between">

                  <div className="flex items-center gap-3">

                    <div className="w-10 h-10 rounded-xl bg-cyan-50 flex items-center justify-center text-lg group-hover:scale-125 transition-all duration-500">
                      {item.icon}
                    </div>

                    <div>

                      <h3 className="text-base font-black text-[#062b57] group-hover:text-cyan-600 transition">
                        {item.title}
                      </h3>

                      <p className="text-xs text-slate-500">
                        {item.description}
                      </p>

                    </div>

                  </div>

                  <div className="text-right">

                    <p className="text-xs font-bold text-cyan-600">
                      {item.files}
                    </p>

                    <button className="mt-1 w-8 h-8 rounded-lg bg-[#062b57] text-white group-hover:bg-cyan-500 group-hover:rotate-45 transition-all duration-500">
                      →
                    </button>

                  </div>

                </div>

              </div>
            ))}

          </div>

        </div>

      </div>

    </section>
  )
}