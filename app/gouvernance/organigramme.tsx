"use client"

export default function Organigramme() {
  return (
    <section className="py-16 px-4 bg-white">

      <div className="max-w-6xl mx-auto">

        {/* TITLE */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-black text-[#062b57]">
            Organigramme de la gouvernance ITIE
          </h2>
          <p className="text-slate-500 text-sm mt-3">
            Structure officielle multipartite du secteur extractif
          </p>
        </div>

        {/* TOP */}
        <div className="flex justify-center">
          <div className="bg-[#062b57] text-white px-8 py-4 rounded-2xl shadow-lg font-bold text-center">
            Comité national ITIE Congo
          </div>
        </div>

        {/* CONNECTOR */}
        <div className="flex justify-center">
          <div className="w-px h-12 bg-slate-300"></div>
        </div>

        {/* SECOND LEVEL TITLE */}
        <div className="text-center text-xs text-slate-400 mb-4 uppercase tracking-widest">
          Parties prenantes
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          {/* ÉTAT */}
          <div className="border rounded-xl p-5 text-center bg-[#f8fafc] hover:shadow-xl transition">
            <div className="text-3xl">🏢</div>
            <h3 className="font-black text-[#062b57] mt-2">État</h3>
            <p className="text-xs text-slate-600 mt-2">
              Hydrocarbures • Mines • Finances • Douanes
            </p>
          </div>

          {/* ENTREPRISES */}
          <div className="border rounded-xl p-5 text-center bg-[#f8fafc] hover:shadow-xl transition">
            <div className="text-3xl">⛽</div>
            <h3 className="font-black text-[#062b57] mt-2">Entreprises</h3>
            <p className="text-xs text-slate-600 mt-2">
              Pétrole • Gaz • Mines
            </p>
          </div>

          {/* SOCIÉTÉ CIVILE */}
          <div className="border rounded-xl p-5 text-center bg-[#f8fafc] hover:shadow-xl transition">
            <div className="text-3xl">🤝</div>
            <h3 className="font-black text-[#062b57] mt-2">Société civile</h3>
            <p className="text-xs text-slate-600 mt-2">
              ONG • Journalistes • Observateurs
            </p>
          </div>

          {/* SECRETARIAT */}
          <div className="border rounded-xl p-5 text-center bg-[#f8fafc] hover:shadow-xl transition">
            <div className="text-3xl">📊</div>
            <h3 className="font-black text-[#062b57] mt-2">
              Secrétariat permanent
            </h3>
            <p className="text-xs text-slate-600 mt-2">
              Coordination • Données • Rapports
            </p>
          </div>

        </div>

        {/* FOOT */}
        <div className="text-center text-xs text-slate-500 mt-10">
          Modèle conforme à la norme ITIE – Gouvernance multipartite
        </div>

      </div>

    </section>
  )
}