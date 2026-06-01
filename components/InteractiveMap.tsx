"use client"

export default function InteractiveMap() {
  return (
    <section className="bg-white rounded-[24px] overflow-hidden border border-slate-200 shadow-lg">

      {/* HEADER */}
      <div className="px-6 py-4 border-b border-slate-200 flex items-center justify-between">

        <div>
          <p className="text-xs font-black text-cyan-600 uppercase tracking-[0.15em]">
            Cartographie interactive
          </p>

          <h2 className="text-2xl font-black text-[#062b57] mt-1">
            Ressources extractives du Congo
          </h2>
        </div>

        <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-xl font-black text-sm shadow-md">
          Explorer
        </button>

      </div>

      {/* CONTENT */}
      <div className="grid xl:grid-cols-[1.8fr_0.8fr]">

        {/* MAP */}
        <div className="p-4">

          <div className="relative overflow-hidden rounded-[20px] border border-slate-200 h-[420px]">

            <iframe
              title="Carte Congo"
              src="https://www.openstreetmap.org/export/embed.html?bbox=10.0%2C-5.5%2C19.5%2C3.5&layer=mapnik"
              className="absolute inset-0 w-full h-full"
              style={{ filter: "contrast(1.05) saturate(1.1)" }}
            />

            <div className="absolute inset-0 bg-[#041c3c]/10 pointer-events-none" />

            {/* MARINE XII */}
            <div className="absolute left-[43%] bottom-[28%]">
              <div className="relative flex items-center justify-center">
                <span className="absolute w-7 h-7 rounded-full bg-cyan-400/40 animate-ping" />
                <span className="w-3 h-3 rounded-full bg-cyan-400 border border-white" />
              </div>
            </div>

            {/* MENGO */}
            <div className="absolute left-[48%] bottom-[35%]">
              <div className="relative flex items-center justify-center">
                <span className="absolute w-7 h-7 rounded-full bg-yellow-400/40 animate-ping" />
                <span className="w-3 h-3 rounded-full bg-yellow-400 border border-white" />
              </div>
            </div>

            {/* ZANAGA */}
            <div className="absolute left-[55%] bottom-[47%]">
              <div className="relative flex items-center justify-center">
                <span className="absolute w-7 h-7 rounded-full bg-red-500/40 animate-ping" />
                <span className="w-3 h-3 rounded-full bg-red-500 border border-white" />
              </div>
            </div>

          </div>

        </div>

        {/* INFO PANEL */}
        <div className="border-l border-slate-200 bg-[#f8fbff] p-5">

          <p className="text-cyan-600 uppercase tracking-[0.15em] font-black text-xs">
            Zone stratégique
          </p>

          <h3 className="text-2xl font-black text-[#062b57] mt-3">
            Offshore
            <br />
            Pointe-Noire
          </h3>

          <p className="text-slate-500 mt-4 text-sm leading-relaxed">
            Principal bassin de production pétrolière du Congo.
            Cette zone concentre une part importante des revenus
            extractifs nationaux.
          </p>

          <div className="space-y-3 mt-6">

            <div className="bg-white rounded-2xl p-4 border border-slate-200">

              <p className="text-slate-500 text-xs">
                Production
              </p>

              <h4 className="text-2xl font-black text-[#062b57] mt-1">
                57,3 M
              </h4>

              <p className="text-cyan-600 text-sm font-bold">
                Barils / an
              </p>

            </div>

            <div className="bg-white rounded-2xl p-4 border border-slate-200">

              <p className="text-slate-500 text-xs">
                Permis actifs
              </p>

              <h4 className="text-2xl font-black text-[#062b57] mt-1">
                84
              </h4>

            </div>

            <div className="bg-white rounded-2xl p-4 border border-slate-200">

              <p className="text-slate-500 text-xs">
                Revenus déclarés
              </p>

              <h4 className="text-2xl font-black text-[#062b57] mt-1">
                1,8 Md $
              </h4>

            </div>

          </div>

        </div>

      </div>

    </section>
  )
}