"use client"

const docs = [
  {
    title: "Rapport ITIE 2025",
    type: "PDF",
    size: "12 MB",
    downloads: "3 248",
    icon: "📘",
  },
  {
    title: "Revenus extractifs nationaux",
    type: "XLSX",
    size: "4 MB",
    downloads: "2 118",
    icon: "📊",
  },
  {
    title: "Contrats pétroliers",
    type: "PDF",
    size: "8 MB",
    downloads: "1 874",
    icon: "📑",
  },
  {
    title: "Production minière",
    type: "CSV",
    size: "2 MB",
    downloads: "1 256",
    icon: "⛏️",
  },
]

export default function Documents() {
  return (
    <section className="py-28 px-4 bg-white overflow-hidden">

      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">

          <div>

            <p className="text-cyan-600 uppercase tracking-[0.3em] font-black text-sm">
              Centre documentaire
            </p>

            <h2 className="text-4xl lg:text-6xl font-black text-[#062b57] mt-6 leading-tight">
              Publications & données
            </h2>

            <p className="text-slate-500 text-xl mt-6 max-w-3xl leading-relaxed">
              Accédez aux rapports ITIE, statistiques nationales,
              contrats publiés et ressources documentaires officielles.
            </p>

          </div>

          <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:scale-105 transition text-white px-8 py-4 rounded-2xl font-black shadow-2xl">
            Explorer la bibliothèque
          </button>

        </div>

        {/* TOP STATS */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">

          <div className="bg-[#f4f8fb] rounded-[30px] p-8 border border-slate-200">

            <p className="text-slate-500 font-bold">
              Documents publiés
            </p>

            <h3 className="text-5xl font-black text-[#062b57] mt-3">
              245
            </h3>

          </div>

          <div className="bg-[#f4f8fb] rounded-[30px] p-8 border border-slate-200">

            <p className="text-slate-500 font-bold">
              Jeux de données
            </p>

            <h3 className="text-5xl font-black text-[#062b57] mt-3">
              89
            </h3>

          </div>

          <div className="bg-[#f4f8fb] rounded-[30px] p-8 border border-slate-200">

            <p className="text-slate-500 font-bold">
              Téléchargements
            </p>

            <h3 className="text-5xl font-black text-[#062b57] mt-3">
              25K+
            </h3>

          </div>

        </div>

        {/* DOCUMENTS GRID */}
        <div className="grid md:grid-cols-2 gap-8">

          {docs.map((doc, index) => (
            <div
              key={index}
              className="group bg-[#f4f8fb] border border-slate-200 rounded-[36px] p-8 hover:-translate-y-2 hover:shadow-2xl transition-all duration-500"
            >

              <div className="flex items-start justify-between">

                <div className="w-20 h-20 rounded-[28px] bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-4xl text-white shadow-xl">

                  {doc.icon}

                </div>

                <span className="bg-cyan-100 text-cyan-700 px-4 py-2 rounded-full text-sm font-black">
                  {doc.type}
                </span>

              </div>

              <h3 className="text-3xl font-black text-[#062b57] mt-8 leading-tight">
                {doc.title}
              </h3>

              <div className="flex items-center gap-6 mt-6 text-slate-500 font-bold">

                <span>{doc.size}</span>

                <span>⬇ {doc.downloads}</span>

              </div>

              <div className="mt-8 h-3 bg-slate-200 rounded-full overflow-hidden">

                <div className="h-full w-[85%] rounded-full bg-gradient-to-r from-cyan-400 to-blue-600" />

              </div>

              <button className="mt-8 w-full bg-[#062b57] hover:bg-cyan-600 transition text-white py-4 rounded-2xl font-black">

                Télécharger le document

              </button>

            </div>
          ))}

        </div>

      </div>

    </section>
  )
}