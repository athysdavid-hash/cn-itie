export default function BigCTA() {
  return (
    <section className="relative py-14 px-4 overflow-hidden">

      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#031b34] via-[#062b57] to-[#0b4d91]" />

      <div className="absolute top-0 left-0 w-52 h-52 bg-cyan-400/20 blur-3xl rounded-full animate-pulse" />
      <div className="absolute bottom-0 right-0 w-52 h-52 bg-blue-500/20 blur-3xl rounded-full animate-pulse" />

      <div className="relative z-10 max-w-6xl mx-auto">

        <div className="grid lg:grid-cols-2 gap-8 items-center">

          {/* LEFT */}
          <div>

            <p className="text-cyan-300 uppercase tracking-[0.2em] font-black text-xs">
              Transparence numérique
            </p>

            <h2 className="text-2xl lg:text-4xl font-black text-white mt-3 leading-tight">
              Gouvernance extractive moderne
            </h2>

            <p className="text-slate-300 text-sm mt-4 leading-relaxed max-w-xl">
              Accédez aux données ouvertes, rapports ITIE et
              indicateurs du secteur extractif congolais.
            </p>

            <div className="flex flex-wrap gap-3 mt-6">

              <button className="bg-cyan-500 text-white px-5 py-2.5 rounded-xl font-black text-sm hover:scale-105 hover:-translate-y-1 hover:bg-cyan-600 transition-all duration-300 shadow-xl">
                Open Data
              </button>

              <button className="bg-white/10 border border-white/10 text-white px-5 py-2.5 rounded-xl font-black text-sm hover:bg-white/20 hover:scale-105 hover:-translate-y-1 transition-all duration-300">
                Rapports
              </button>

            </div>

          </div>

          {/* RIGHT */}
          <div>

            <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-[24px] p-5 hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(34,211,238,0.25)] transition-all duration-500">

              <div className="flex items-center justify-between mb-5">

                <div>

                  <p className="text-cyan-300 uppercase text-[10px] font-black">
                    Performance
                  </p>

                  <h3 className="text-xl font-black text-white mt-1">
                    Transparence
                  </h3>

                </div>

                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-xl hover:rotate-12 hover:scale-110 transition-all duration-300">
                  🌍
                </div>

              </div>

              <div className="space-y-4">

                {[
                  { label: "Open Data", value: "98%" },
                  { label: "Rapports", value: "24" },
                  { label: "Conformité", value: "AAA" },
                ].map((item, index) => (
                  <div key={index} className="group">

                    <div className="flex justify-between mb-1">

                      <span className="text-white text-sm">
                        {item.label}
                      </span>

                      <span className="text-cyan-300 text-sm font-black">
                        {item.value}
                      </span>

                    </div>

                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">

                      <div className="h-full w-[85%] bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full group-hover:w-full transition-all duration-700" />

                    </div>

                  </div>
                ))}

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  )
}