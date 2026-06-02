"use client"

export default function StrategicData() {
  const data = [
    { label: "Hydrocarbures", value: 82 },
    { label: "Mines", value: 64 },
    { label: "Exportations", value: 91 },
    { label: "Recettes publiques", value: 74 },
  ]

  return (
    <section className="relative w-full bg-[#031b34] py-12 overflow-hidden">

      {/* GLOW */}
      <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-cyan-500/10 blur-3xl rounded-full animate-pulse" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-blue-500/10 blur-3xl rounded-full animate-pulse" />

      <div className="max-w-6xl mx-auto px-4 relative">

        {/* HEADER */}
        <div className="mb-10">

          <h2 className="text-white text-2xl lg:text-3xl font-black">
            Données stratégiques du secteur extractif
          </h2>

          <p className="text-slate-300 mt-3 max-w-2xl text-sm leading-relaxed">
            Vue synthétique des principaux indicateurs du secteur extractif
            en République du Congo basée sur les dernières données disponibles.
          </p>

        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-6">

          {data.map((item, index) => (
            <div
              key={index}
              className="
                group
                bg-white/5
                border border-white/10
                rounded-2xl
                p-5
                backdrop-blur-md
                hover:bg-white/10
                hover:scale-[1.03]
                hover:-translate-y-1
                hover:border-cyan-400/40
                transition-all
                duration-500
              "
            >

              {/* TITRE */}
              <div className="flex justify-between items-center mb-3">

                <span className="text-white text-sm font-semibold tracking-wide">
                  {item.label}
                </span>

                <span className="text-cyan-300 text-sm font-black group-hover:scale-110 transition">
                  {item.value}%
                </span>

              </div>

              {/* BARRE */}
              <div className="w-full h-2.5 bg-white/10 rounded-full overflow-hidden">

                <div
                  className="
                    h-full
                    rounded-full
                    bg-gradient-to-r
                    from-cyan-400
                    to-blue-500
                    group-hover:brightness-125
                    transition-all
                    duration-700
                  "
                  style={{
                    width: `${item.value}%`,
                  }}
                />

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  )
}