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
    <section className="relative bg-[#061f3a] py-16 overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 left-0 w-[350px] h-[350px] bg-cyan-500/10 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-blue-500/10 blur-3xl rounded-full" />

      <div className="relative max-w-6xl mx-auto px-4">

        {/* HEADER */}
        <div className="mb-8">
          <h2 className="text-white text-2xl lg:text-3xl font-black">
            Key Indicators
          </h2>

          <p className="text-slate-300 mt-3 max-w-xl text-sm">
            Tableau de bord synthétique du secteur extractif en République du Congo.
          </p>
        </div>

        {/* KPI CARDS */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">

          <div className="bg-white/5 border border-white/10 rounded-xl p-4">
            <p className="text-slate-400 text-xs">Performance globale</p>
            <h3 className="text-2xl font-black text-white mt-1">78%</h3>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-xl p-4">
            <p className="text-slate-400 text-xs">Secteurs actifs</p>
            <h3 className="text-2xl font-black text-white mt-1">5</h3>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-xl p-4">
            <p className="text-slate-400 text-xs">Données ouvertes</p>
            <h3 className="text-2xl font-black text-white mt-1">98%</h3>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-xl p-4">
            <p className="text-slate-400 text-xs">Impact économique</p>
            <h3 className="text-2xl font-black text-white mt-1">A+</h3>
          </div>

        </div>

        {/* CHART GRID */}
        <div className="grid lg:grid-cols-2 gap-4">

          {data.map((item, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-xl p-4"
            >

              <div className="flex justify-between mb-2">
                <span className="text-white text-sm font-semibold">
                  {item.label}
                </span>

                <span className="text-cyan-300 text-sm font-bold">
                  {item.value}%
                </span>
              </div>

              <div className="relative w-full h-3 bg-white/10 rounded-full overflow-hidden">

                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage:
                      "linear-gradient(90deg, rgba(255,255,255,0.25) 1px, transparent 1px)",
                    backgroundSize: "25px 100%",
                  }}
                />

                <div
                  className="h-full bg-gradient-to-r from-cyan-400 via-cyan-300 to-blue-500 rounded-full"
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