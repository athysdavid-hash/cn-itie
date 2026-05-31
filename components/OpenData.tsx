const datasets = [
  {
    title: "Revenus extractifs",
    description:
      "Publication des revenus issus des hydrocarbures et des mines.",
    icon: "💰",
    files: "XLSX • CSV • PDF",
  },
  {
    title: "Permis miniers",
    description:
      "Liste complète des permis actifs et des zones attribuées.",
    icon: "📄",
    files: "GeoJSON • XLSX",
  },
  {
    title: "Production pétrolière",
    description:
      "Volumes de production et statistiques nationales.",
    icon: "🛢️",
    files: "CSV • API",
  },
  {
    title: "Contrats publiés",
    description:
      "Accès aux contrats extractifs et accords publics.",
    icon: "📘",
    files: "PDF • DOCX",
  },
]

export default function OpenData() {
  return (
    <section className="py-24 px-4 bg-white">

      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-16">

          <p className="text-sm font-black tracking-[0.3em] text-cyan-600 uppercase">
            Open Data
          </p>

          <h2 className="text-4xl lg:text-6xl font-black text-[#062b57] mt-4">
            Centre national des données ouvertes
          </h2>

          <p className="text-slate-500 text-xl max-w-3xl mx-auto mt-6 leading-relaxed">
            Accédez aux données publiques, rapports ITIE, statistiques
            extractives, permis, contrats et ressources documentaires
            du secteur extractif en République du Congo.
          </p>

        </div>

        {/* MAIN LAYOUT */}
        <div className="grid lg:grid-cols-[380px_1fr] gap-10">

          {/* LEFT PANEL */}
          <div className="bg-gradient-to-br from-[#062b57] to-[#0b4d91] rounded-[32px] p-10 text-white shadow-2xl flex flex-col justify-between">

            <div>

              <div className="w-20 h-20 rounded-[24px] bg-white/10 backdrop-blur-xl flex items-center justify-center text-4xl mb-8">
                📊
              </div>

              <h3 className="text-4xl font-black leading-tight">
                Plateforme Open Data
              </h3>

              <p className="text-slate-300 mt-6 leading-relaxed">
                Explorez les principales bases de données publiques
                relatives aux industries extractives, à la transparence
                des revenus et à la gouvernance des ressources naturelles.
              </p>

            </div>

            <div className="mt-10">

              <div className="grid grid-cols-2 gap-4 mb-8">

                <div>
                  <h4 className="text-3xl font-black">24+</h4>
                  <p className="text-slate-300 text-sm">
                    Jeux de données
                  </p>
                </div>

                <div>
                  <h4 className="text-3xl font-black">98%</h4>
                  <p className="text-slate-300 text-sm">
                    Données ouvertes
                  </p>
                </div>

              </div>

              <button className="w-full bg-cyan-500 hover:bg-cyan-600 py-4 rounded-2xl font-black transition shadow-xl">
                Explorer la plateforme
              </button>

            </div>

          </div>

          {/* RIGHT PANEL */}
          <div className="space-y-5">

            {datasets.map((item, index) => (
              <div
                key={index}
                className="group bg-[#f8fbfd] hover:bg-white border border-slate-200 rounded-[28px] p-7 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
              >

                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">

                  {/* LEFT */}
                  <div className="flex items-center gap-5">

                    <div className="w-16 h-16 rounded-2xl bg-cyan-50 flex items-center justify-center text-3xl">
                      {item.icon}
                    </div>

                    <div>

                      <h3 className="text-2xl font-black text-[#062b57]">
                        {item.title}
                      </h3>

                      <p className="text-slate-500 mt-2 leading-relaxed">
                        {item.description}
                      </p>

                    </div>

                  </div>

                  {/* RIGHT */}
                  <div className="flex items-center gap-6">

                    <div className="text-right">

                      <p className="text-cyan-600 font-black">
                        {item.files}
                      </p>

                      <p className="text-slate-400 text-sm mt-1">
                        Formats disponibles
                      </p>

                    </div>

                    <button className="w-14 h-14 rounded-2xl bg-[#062b57] text-white text-xl hover:scale-110 transition shadow-lg">
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