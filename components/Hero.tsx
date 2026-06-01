export default function Hero() {
  return (
    <section className="relative min-h-[60vh] flex items-center overflow-hidden py-10">

      {/* IMAGE DE FOND */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/congo-extractif.jpg')",
        }}
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#031b34]/90 via-[#031b34]/60 to-[#031b34]/20" />

      {/* GLOW */}
      <div className="absolute top-0 left-0 w-[350px] h-[350px] bg-cyan-400/20 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-blue-500/20 blur-3xl rounded-full" />

      {/* CONTENT */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 w-full">

        <div className="grid lg:grid-cols-2 gap-8 items-center">

          {/* LEFT */}
          <div>

            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-xl border border-white/20 px-4 py-2 rounded-full mb-5">

              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />

              <span className="text-cyan-300 text-xs font-black tracking-wider uppercase">
                Plateforme officielle ITIE Congo
              </span>

            </div>

            <h1 className="text-2xl lg:text-3xl font-black text-white leading-tight">

              Comité National
              <br />

              <span className="text-cyan-400">
                ITIE Congo
              </span>

            </h1>

            <p className="text-slate-200 text-base leading-relaxed mt-5 max-w-lg">

              Transparence et gouvernance des industries extractives
              en République du Congo. Accédez aux données ouvertes,
              rapports ITIE, contrats, revenus extractifs et
              informations stratégiques du secteur.

            </p>

            <div className="flex flex-wrap gap-3 mt-6">

              <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-5 py-3 rounded-xl font-black shadow-xl transition-all duration-300">

                Explorer les données

              </button>

              <button className="bg-white/10 backdrop-blur-xl border border-white/20 hover:bg-white/20 text-white px-5 py-3 rounded-xl font-black transition-all duration-300">

                Voir les rapports

              </button>

            </div>

          </div>

          {/* RIGHT */}
          <div className="flex justify-end">

            <div className="w-full max-w-md bg-white/10 backdrop-blur-2xl border border-white/20 rounded-[28px] p-6 shadow-2xl">

              <p className="text-cyan-300 uppercase tracking-[0.2em] text-xs font-black">
                Engagement pour la transparence
              </p>

              <h3 className="text-2xl font-black text-white mt-3 leading-tight">

                Une gestion responsable des ressources naturelles

              </h3>

              <p className="text-slate-200 mt-3 leading-relaxed text-sm">

                L'ITIE Congo s'engage à promouvoir une gouvernance
                transparente, responsable et participative des revenus
                issus des industries extractives au bénéfice de tous.

              </p>

              <div className="grid grid-cols-2 gap-3 mt-6">

                <div className="bg-white/10 rounded-xl p-3 text-center border border-white/10">
                  <p className="text-cyan-300 font-black text-sm">
                    Transparence
                  </p>
                </div>

                <div className="bg-white/10 rounded-xl p-3 text-center border border-white/10">
                  <p className="text-cyan-300 font-black text-sm">
                    Redevabilité
                  </p>
                </div>

                <div className="bg-white/10 rounded-xl p-3 text-center border border-white/10">
                  <p className="text-cyan-300 font-black text-sm">
                    Participation
                  </p>
                </div>

                <div className="bg-white/10 rounded-xl p-3 text-center border border-white/10">
                  <p className="text-cyan-300 font-black text-sm">
                    Impact
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

        {/* STATS */}
        <div className="mt-6">

          <div className="grid md:grid-cols-4 gap-4 bg-white/10 backdrop-blur-2xl border border-white/10 rounded-[24px] p-5">

            <div className="text-center">
              <h3 className="text-2xl font-black text-white">24</h3>
              <p className="text-slate-300 text-sm mt-1">
                Rapports publiés
              </p>
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-black text-white">98%</h3>
              <p className="text-slate-300 text-sm mt-1">
                Open Data
              </p>
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-black text-white">89</h3>
              <p className="text-slate-300 text-sm mt-1">
                Entreprises
              </p>
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-black text-white">327</h3>
              <p className="text-slate-300 text-sm mt-1">
                Permis actifs
              </p>
            </div>

          </div>

        </div>

      </div>

    </section>
  )
}