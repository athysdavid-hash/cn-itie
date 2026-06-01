export default function Hero() {
  return (
    <section className="relative min-h-[45vh] flex items-center overflow-hidden py-6">

      {/* IMAGE */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/congo-extractif.jpg')",
        }}
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#031b34]/90 via-[#031b34]/70 to-[#031b34]/30" />

      {/* GLOW */}
      <div className="absolute top-0 left-0 w-52 h-52 bg-cyan-400/10 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-0 w-52 h-52 bg-blue-500/10 blur-3xl rounded-full" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 w-full">

        <div className="grid lg:grid-cols-2 gap-6 items-center">

          {/* LEFT */}
          <div>

            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-3 py-1.5 rounded-full mb-4">

              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />

              <span className="text-cyan-300 text-[10px] font-black uppercase">
                Plateforme officielle
              </span>

            </div>

            <h1 className="text-2xl lg:text-4xl font-black text-white leading-tight">

              Comité National

              <br />

              <span className="text-cyan-400">
                ITIE Congo
              </span>

            </h1>

            <p className="text-slate-200 text-sm mt-4 max-w-lg leading-relaxed">

              Transparence des revenus extractifs,
              rapports ITIE, données ouvertes et
              gouvernance du secteur extractif.

            </p>

            <div className="flex flex-wrap gap-3 mt-5">

              <button className="bg-cyan-500 text-white px-4 py-2.5 rounded-xl font-black text-sm">
                Open Data
              </button>

              <button className="bg-white/10 border border-white/20 text-white px-4 py-2.5 rounded-xl font-black text-sm">
                Rapports
              </button>

            </div>

          </div>

          {/* RIGHT */}
          <div className="flex justify-end">

            <div className="w-full max-w-sm bg-white/10 backdrop-blur-xl border border-white/10 rounded-[22px] p-4">

              <p className="text-cyan-300 uppercase text-[10px] font-black">
                Transparence
              </p>

              <h3 className="text-xl font-black text-white mt-2">
                Gouvernance responsable
              </h3>

              <p className="text-slate-300 text-xs mt-3 leading-relaxed">
                Une gestion transparente des ressources
                naturelles au bénéfice de tous.
              </p>

              <div className="grid grid-cols-2 gap-2 mt-4">

                <div className="bg-white/10 rounded-lg p-2 text-center">
                  <p className="text-cyan-300 text-xs font-black">
                    Transparence
                  </p>
                </div>

                <div className="bg-white/10 rounded-lg p-2 text-center">
                  <p className="text-cyan-300 text-xs font-black">
                    Redevabilité
                  </p>
                </div>

                <div className="bg-white/10 rounded-lg p-2 text-center">
                  <p className="text-cyan-300 text-xs font-black">
                    Participation
                  </p>
                </div>

                <div className="bg-white/10 rounded-lg p-2 text-center">
                  <p className="text-cyan-300 text-xs font-black">
                    Impact
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

        {/* STATS */}
        <div className="mt-5">

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 bg-white/10 backdrop-blur-xl border border-white/10 rounded-[18px] p-3">

            <div className="text-center">
              <h3 className="text-lg font-black text-white">24</h3>
              <p className="text-slate-300 text-xs">
                Rapports
              </p>
            </div>

            <div className="text-center">
              <h3 className="text-lg font-black text-white">98%</h3>
              <p className="text-slate-300 text-xs">
                Open Data
              </p>
            </div>

            <div className="text-center">
              <h3 className="text-lg font-black text-white">89</h3>
              <p className="text-slate-300 text-xs">
                Entreprises
              </p>
            </div>

            <div className="text-center">
              <h3 className="text-lg font-black text-white">327</h3>
              <p className="text-slate-300 text-xs">
                Permis
              </p>
            </div>

          </div>

        </div>

      </div>

    </section>
  )
}