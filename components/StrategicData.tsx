export default function StrategicData() {

  const data = [
    { label: "Hydrocarbures", value: 82 },
    { label: "Mines", value: 64 },
    { label: "Exportations", value: 91 },
    { label: "Recettes publiques", value: 74 },
  ]

  return (
    <section className="relative w-screen -ml-[50vw] left-1/2 bg-[#031b34] py-12 overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 left-0 w-[350px] h-[350px] bg-cyan-500/10 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-blue-500/10 blur-3xl rounded-full" />

      <div className="relative max-w-6xl mx-auto px-4">

        {/* TITLE */}
        <div className="mb-8">
          <h2 className="text-white text-2xl lg:text-3xl font-black">
            Données stratégiques du secteur extractif
          </h2>

          <p className="text-slate-300 mt-3 max-w-xl text-sm">
            Vue synthétique des principaux indicateurs du secteur extractif en République du Congo.
          </p>
        </div>

        {/* BARS */}
        <div className="space-y-5">

          {data.map((item, index) => (
            <div key={index}>

              <div className="flex justify-between mb-2">
                <span className="text-white text-sm font-medium">
                  {item.label}
                </span>

                <span className="text-cyan-300 text-sm font-bold">
                  {item.value}%
                </span>
              </div>

              <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden">

                <div
                  className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
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