"use client"

export default function InteractiveMap() {
  return (
    <section className="bg-white rounded-[36px] overflow-hidden border border-slate-200 shadow-xl">

      {/* HEADER */}
      <div className="px-8 py-6 border-b border-slate-200 flex items-center justify-between">

        <div>
          <p className="text-sm font-black text-cyan-600 uppercase tracking-[0.2em]">
            Cartographie interactive
          </p>

          <h2 className="text-3xl font-black text-[#062b57] mt-2">
            Ressources extractives du Congo
          </h2>
        </div>

        <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-2xl font-black shadow-lg">
          Explorer
        </button>

      </div>

      {/* CONTENT */}
      <div className="grid xl:grid-cols-[1.7fr_0.9fr]">

        {/* MAP */}
        <div className="p-6">

          <div className="relative overflow-hidden rounded-[32px] border border-slate-200 h-[550px]">

           <iframe
  title="Carte Congo"
  src="https://www.openstreetmap.org/export/embed.html?bbox=10.0%2C-5.5%2C19.5%2C3.5&layer=mapnik"
  className="absolute inset-0 w-full h-full rounded-[32px]"
  style={{ filter: "contrast(1.1) saturate(1.2)" }}
/>

            <div className="absolute inset-0 bg-[#041c3c]/10 pointer-events-none" />

            {/* MARINE XII */}
            <div className="absolute left-[43%] bottom-[28%]">

              <div className="relative flex items-center justify-center">

                <span className="absolute w-10 h-10 rounded-full bg-cyan-400/40 animate-ping" />

                <span className="w-4 h-4 rounded-full bg-cyan-400 border-2 border-white" />

              </div>

            </div>

            {/* MENGO */}
            <div className="absolute left-[48%] bottom-[35%]">

              <div className="relative flex items-center justify-center">

                <span className="absolute w-10 h-10 rounded-full bg-yellow-400/40 animate-ping" />

                <span className="w-4 h-4 rounded-full bg-yellow-400 border-2 border-white" />

              </div>

            </div>

            {/* ZANAGA */}
            <div className="absolute left-[55%] bottom-[47%]">

              <div className="relative flex items-center justify-center">

                <span className="absolute w-10 h-10 rounded-full bg-red-500/40 animate-ping" />

                <span className="w-4 h-4 rounded-full bg-red-500 border-2 border-white" />

              </div>

            </div>

          </div>

        </div>

        {/* INFO PANEL */}
        <div className="border-l border-slate-200 bg-[#f8fbff] p-8">

          <p className="text-cyan-600 uppercase tracking-[0.2em] font-black text-sm">
            Zone stratégique
          </p>

          <h3 className="text-4xl font-black text-[#062b57] mt-4">
            Offshore
            <br />
            Pointe-Noire
          </h3>

          <p className="text-slate-500 mt-6 leading-relaxed">
            Principal bassin de production pétrolière du Congo.
            Cette zone concentre une part importante des revenus
            extractifs nationaux.
          </p>

          <div className="space-y-5 mt-10">

            <div className="bg-white rounded-3xl p-5 border border-slate-200">

              <p className="text-slate-500 text-sm">
                Production
              </p>

              <h4 className="text-3xl font-black text-[#062b57] mt-2">
                57,3 M
              </h4>

              <p className="text-cyan-600 font-bold">
                Barils / an
              </p>

            </div>

            <div className="bg-white rounded-3xl p-5 border border-slate-200">

              <p className="text-slate-500 text-sm">
                Permis actifs
              </p>

              <h4 className="text-3xl font-black text-[#062b57] mt-2">
                84
              </h4>

            </div>

            <div className="bg-white rounded-3xl p-5 border border-slate-200">

              <p className="text-slate-500 text-sm">
                Revenus déclarés
              </p>

              <h4 className="text-3xl font-black text-[#062b57] mt-2">
                1,8 Md $
              </h4>

            </div>

          </div>

        </div>

      </div>

    </section>
  )
}