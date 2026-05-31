export default function KeyFigures() {

  const data = [
    { label: "Hydrocarbures", value: 82 },
    { label: "Mines", value: 64 },
    { label: "Exportations", value: 91 },
    { label: "Recettes publiques", value: 74 },
    { label: "Investissements", value: 58 },
    { label: "Contribution PIB", value: 77 },
  ]

  return (
    <section className="relative bg-[#061f3a] py-28 overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 left-0 w-[700px] h-[700px] bg-cyan-500/10 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-0 w-[700px] h-[700px] bg-blue-500/10 blur-3xl rounded-full" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="mb-14">
          <h2 className="text-white text-3xl lg:text-5xl font-black">
            Key Indicators
          </h2>
          <p className="text-slate-300 mt-4 max-w-2xl">
            Tableau de bord synthétique du secteur extractif en République du Congo.
          </p>
        </div>

        {/* KPI CARDS (TOP SUMMARY) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-14">

          <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
            <p className="text-slate-400 text-sm">Performance globale</p>
            <h3 className="text-3xl font-black text-white mt-2">78%</h3>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
            <p className="text-slate-400 text-sm">Secteurs actifs</p>
            <h3 className="text-3xl font-black text-white mt-2">5</h3>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
            <p className="text-slate-400 text-sm">Données ouvertes</p>
            <h3 className="text-3xl font-black text-white mt-2">98%</h3>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
            <p className="text-slate-400 text-sm">Impact économique</p>
            <h3 className="text-3xl font-black text-white mt-2">A+</h3>
          </div>

        </div>

        {/* CHART GRID */}
        <div className="grid lg:grid-cols-2 gap-6">

          {data.map((item, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition"
            >

              {/* LABEL */}
              <div className="flex justify-between mb-3">
                <span className="text-white font-semibold">
                  {item.label}
                </span>

                <span className="text-cyan-300 font-bold">
                  {item.value}%
                </span>
              </div>

              {/* BAR */}
              <div className="relative w-full h-5 bg-white/10 rounded-full overflow-hidden">

                {/* GRID LINES */}
                <div className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage:
                      "linear-gradient(90deg, rgba(255,255,255,0.25) 1px, transparent 1px)",
                    backgroundSize: "35px 100%",
                  }}
                />

                {/* FILL */}
                <div
                  className="h-full bg-gradient-to-r from-cyan-400 via-cyan-300 to-blue-500 rounded-full transition-all duration-700"
                  style={{ width: `${item.value}%` }}
                />

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  )
}