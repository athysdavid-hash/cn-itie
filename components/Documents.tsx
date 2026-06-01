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
    title: "Revenus extractifs",
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
    <section className="py-12 px-4 bg-white">

      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-8">

          <div>

            <p className="text-xs font-black tracking-[0.25em] text-cyan-600 uppercase">
              Centre documentaire
            </p>

            <h2 className="text-2xl lg:text-3xl font-black text-[#062b57] mt-2">
              Publications & données
            </h2>

            <p className="text-sm text-slate-500 mt-2 max-w-2xl">
              Rapports, contrats et statistiques officielles.
            </p>

          </div>

          <button className="bg-cyan-500 text-white px-5 py-2 rounded-xl text-sm font-black">
            Explorer
          </button>

        </div>

        {/* STATS */}
        <div className="grid md:grid-cols-3 gap-3 mb-6">

          <div className="bg-[#f4f8fb] rounded-2xl p-4 border border-slate-200">
            <p className="text-xs text-slate-500">Documents</p>
            <h3 className="text-2xl font-black text-[#062b57]">245</h3>
          </div>

          <div className="bg-[#f4f8fb] rounded-2xl p-4 border border-slate-200">
            <p className="text-xs text-slate-500">Jeux de données</p>
            <h3 className="text-2xl font-black text-[#062b57]">89</h3>
          </div>

          <div className="bg-[#f4f8fb] rounded-2xl p-4 border border-slate-200">
            <p className="text-xs text-slate-500">Téléchargements</p>
            <h3 className="text-2xl font-black text-[#062b57]">25K+</h3>
          </div>

        </div>

        {/* DOCUMENTS */}
        <div className="grid md:grid-cols-2 gap-4">

          {docs.map((doc, index) => (
            <div
              key={index}
              className="bg-[#f4f8fb] border border-slate-200 rounded-2xl p-4"
            >

              <div className="flex items-center justify-between">

                <div className="flex items-center gap-3">

                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-xl text-white">
                    {doc.icon}
                  </div>

                  <div>

                    <h3 className="text-lg font-black text-[#062b57]">
                      {doc.title}
                    </h3>

                    <p className="text-xs text-slate-500">
                      {doc.size} • {doc.downloads}
                    </p>

                  </div>

                </div>

                <span className="bg-cyan-100 text-cyan-700 px-3 py-1 rounded-full text-xs font-black">
                  {doc.type}
                </span>

              </div>

              <button className="mt-4 w-full bg-[#062b57] text-white py-2 rounded-xl text-sm font-black">
                Télécharger
              </button>

            </div>
          ))}

        </div>

      </div>

    </section>
  )
}