export default function ItieDashboardAdvanced() {

  const kpis = [
    {
      label: "Contribution au PIB",
      value: 53.26,
      suffix: "%",
      note: "Part du secteur extractif dans l'économie nationale (ITIE 2023)"
    },
    {
      label: "Revenus budgétaires",
      value: 66.41,
      suffix: "%",
      note: "Part des revenus de l'État issus des industries extractives"
    },
    {
      label: "Exportations",
      value: 72.42,
      suffix: "%",
      note: "Poids des hydrocarbures et minerais dans les exportations"
    },
    {
      label: "Emploi direct",
      value: 0.50,
      suffix: "%",
      note: "Faible part due au caractère capitalistique du secteur"
    }
  ]

  return (
    <section className="bg-[#061f3a] py-20 relative overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-cyan-500/10 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-500/10 blur-3xl rounded-full" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="mb-12">
          <p className="text-cyan-300 uppercase tracking-[0.3em] text-xs font-black">
            ITIE Congo • Rapport 2023
          </p>

          <h2 className="text-white text-3xl lg:text-5xl font-black mt-4">
            Dashboard des indicateurs macroéconomiques extractifs
          </h2>

          <p className="text-slate-300 mt-4 max-w-3xl leading-7">
            Synthèse des principaux indicateurs macroéconomiques issus du rapport ITIE 2023,
            couvrant l’impact du secteur pétrolier, gazier, minier et forestier sur l’économie nationale.
          </p>
        </div>

        {/* KPI GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          {kpis.map((kpi, i) => (
            <div
              key={i}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur"
            >

              <p className="text-slate-300 text-sm">
                {kpi.label}
              </p>

              <h3 className="text-3xl font-black text-white mt-3">
                {kpi.value}{kpi.suffix}
              </h3>

              {/* PROGRESS BAR */}
              <div className="mt-4 w-full h-2 bg-white/10 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
                  style={{ width: `${kpi.value}%` }}
                />
              </div>

              <p className="text-slate-400 text-xs mt-3 leading-5">
                {kpi.note}
              </p>

            </div>
          ))}

        </div>

        {/* INSIGHT BLOCK */}
        <div className="mt-14 bg-white/5 border border-white/10 rounded-3xl p-8">
          <h3 className="text-white text-xl font-black">
            Analyse institutionnelle
          </h3>

          <p className="text-slate-300 mt-4 leading-8">
            Le rapport ITIE 2023 confirme la forte dépendance de l’économie congolaise
            aux industries extractives, avec une contribution dominante aux exportations
            et aux recettes publiques. Toutefois, l’impact sur l’emploi reste limité,
            reflétant le caractère fortement capitalistique du secteur.
          </p>
        </div>

      </div>

    </section>
  )
}