export default function BigCTA() {
  return (
    <section className="relative py-32 px-4 overflow-hidden">

      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#031b34] via-[#062b57] to-[#0b4d91]" />

      {/* GLOW */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-400/20 blur-3xl rounded-full" />

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/20 blur-3xl rounded-full" />

      {/* GRID */}
      <div className="absolute inset-0 opacity-10">

        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

      </div>

      <div className="relative z-10 max-w-7xl mx-auto">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}
          <div>

            <p className="text-cyan-300 uppercase tracking-[0.3em] font-black text-sm">
              Transparence numérique
            </p>

            <h2 className="text-4xl lg:text-7xl font-black text-white mt-8 leading-tight">

              Construire une gouvernance extractive moderne

            </h2>

            <p className="text-slate-300 text-xl leading-relaxed mt-6 max-w-2xl">

              ITIE Congo modernise l’accès aux données publiques,
              aux rapports extractifs et aux indicateurs nationaux
              grâce à une plateforme numérique innovante.

            </p>

            {/* BUTTONS */}
            <div className="flex flex-wrap gap-5 mt-12">

              <button className="bg-cyan-500 hover:bg-cyan-600 hover:scale-105 transition text-white px-8 py-5 rounded-2xl font-black shadow-2xl">

                Explorer Open Data

              </button>

              <button className="bg-white/10 backdrop-blur-xl border border-white/10 hover:bg-white/20 text-white px-8 py-5 rounded-2xl font-black transition">

                Télécharger les rapports

              </button>

            </div>

          </div>

          {/* RIGHT */}
          <div className="relative">

            {/* CARD */}
            <div className="bg-white/10 backdrop-blur-2xl border border-white/10 rounded-[40px] p-10 shadow-2xl overflow-hidden relative">

              {/* GLOW */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-400/20 rounded-full blur-3xl" />

              <div className="relative z-10">

                {/* TOP */}
                <div className="flex items-center justify-between mb-12">

                  <div>

                    <p className="text-cyan-300 uppercase tracking-widest text-sm font-black">
                      Performance
                    </p>

                    <h3 className="text-4xl font-black text-white mt-4">
                      Transparence Nationale
                    </h3>

                  </div>

                  <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-4xl shadow-2xl">

                    🌍

                  </div>

                </div>

                {/* STATS */}
                <div className="space-y-8">

                  {[
                    {
                      label: "Open Data",
                      value: "98%",
                    },
                    {
                      label: "Rapports publiés",
                      value: "24",
                    },
                    {
                      label: "Conformité ITIE",
                      value: "AAA",
                    },
                  ].map((item, index) => (
                    <div key={index}>

                      <div className="flex items-center justify-between mb-3">

                        <span className="text-white font-bold">
                          {item.label}
                        </span>

                        <span className="text-cyan-300 font-black">
                          {item.value}
                        </span>

                      </div>

                      <div className="h-4 bg-white/10 rounded-full overflow-hidden">

                        <div className="h-full w-[85%] rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" />

                      </div>

                    </div>
                  ))}

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  )
}