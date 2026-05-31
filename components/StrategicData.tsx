export default function StrategicData() {

  const data = [
    { label: "Hydrocarbures", value: 82 },
    { label: "Mines", value: 64 },
    { label: "Exportations", value: 91 },
    { label: "Recettes publiques", value: 74 },
  ]

  return (
    <section className="relative w-screen -ml-[50vw] left-1/2 bg-[#031b34] py-24 overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-cyan-500/10 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-500/10 blur-3xl rounded-full" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* TITLE */}
        <div className="mb-14">
          <h2 className="text-white text-3xl lg:text-4xl font-black">
            Données stratégiques du secteur extractif
          </h2>

          <p className="text-slate-300 mt-4 max-w-2xl">
            Vue synthétique des principaux indicateurs du secteur extractif en République du Congo.
          </p>
        </div>

        {/* SIMPLE BARS */}
        <div className="space-y-8">

          {data.map((item, index) => (
            <div key={index}>

              {/* LABEL */}
              <div className="flex justify-between mb-2">
                <span className="text-white font-medium">
                  {item.label}
                </span>

                <span className="text-cyan-300 font-bold">
                  {item.value}%
                </span>
              </div>

              {/* BAR */}
              <div className="w-full h-5 bg-white/10 rounded-full overflow-hidden">

                <div
                  className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full transition-all duration-700"
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