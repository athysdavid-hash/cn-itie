"use client"

export default function InteractiveMap() {
  return (
    <section className="bg-white rounded-[20px] overflow-hidden border border-slate-200 shadow-sm">

      {/* HEADER */}
      <div className="px-4 py-3 border-b border-slate-200 flex items-center justify-between">

        <div>
          <p className="text-[10px] font-black text-cyan-600 uppercase">
            Cartographie
          </p>

          <h2 className="text-lg font-black text-[#062b57]">
            Ressources extractives
          </h2>
        </div>

        <button className="bg-cyan-600 text-white px-3 py-1.5 rounded-lg text-xs font-bold">
          Explorer
        </button>

      </div>

      <div className="grid lg:grid-cols-[1.7fr_0.8fr]">

        {/* MAP */}
        <div className="p-3">

          <div className="relative overflow-hidden rounded-xl border border-slate-200 h-[280px]">

            <iframe
              title="Carte Congo"
              src="https://www.openstreetmap.org/export/embed.html?bbox=10.0%2C-5.5%2C19.5%2C3.5&layer=mapnik"
              className="absolute inset-0 w-full h-full"
            />

          </div>

        </div>

        {/* PANEL */}
        <div className="border-l border-slate-200 bg-[#f8fbff] p-4">

          <p className="text-cyan-600 text-[10px] uppercase font-black">
            Zone stratégique
          </p>

          <h3 className="text-lg font-black text-[#062b57] mt-2">
            Offshore Pointe-Noire
          </h3>

          <p className="text-slate-500 text-xs mt-2">
            Principal bassin pétrolier du Congo.
          </p>

          <div className="grid gap-2 mt-4">

            <div className="bg-white rounded-xl p-3 border border-slate-200">
              <p className="text-[10px] text-slate-500">Production</p>
              <h4 className="text-lg font-black text-[#062b57]">
                57,3 M
              </h4>
            </div>

            <div className="bg-white rounded-xl p-3 border border-slate-200">
              <p className="text-[10px] text-slate-500">Permis</p>
              <h4 className="text-lg font-black text-[#062b57]">
                84
              </h4>
            </div>

          </div>

        </div>

      </div>

    </section>
  )
}