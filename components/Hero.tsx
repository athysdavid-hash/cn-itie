export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">

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
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-400/20 blur-3xl rounded-full" />

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/20 blur-3xl rounded-full" />

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 w-full">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}
          <div>

            {/* BADGE */}
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-xl border border-white/20 px-5 py-3 rounded-full mb-8">

              <span className="w-3 h-3 rounded-full bg-cyan-400 animate-pulse" />

              <span className="text-cyan-300 text-sm font-black tracking-wider uppercase">
                Plateforme officielle ITIE Congo
              </span>

            </div>

            {/* TITLE */}
            <h1 className="text-5xl lg:text-7xl font-black text-white leading-tight">

              Comité National
              <br />

              <span className="text-cyan-400">
                ITIE Congo
              </span>

            </h1>

            {/* DESCRIPTION */}
            <p className="text-slate-200 text-xl leading-relaxed mt-8 max-w-2xl">

              Transparence et gouvernance des industries extractives
              en République du Congo. Accédez aux données ouvertes,
              rapports ITIE, contrats, revenus extractifs et
              informations stratégiques du secteur.

            </p>

            {/* BUTTONS */}
            <div className="flex flex-wrap gap-5 mt-12">

              <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-4 rounded-2xl font-black shadow-2xl transition-all duration-300">

                Explorer les données

              </button>

              <button className="bg-white/10 backdrop-blur-xl border border-white/20 hover:bg-white/20 text-white px-8 py-4 rounded-2xl font-black transition-all duration-300">

                Voir les rapports

              </button>

            </div>

          </div>

          {/* RIGHT */}
          <div className="flex justify-end">

            <div className="w-full max-w-xl bg-white/10 backdrop-blur-2xl border border-white/20 rounded-[40px] p-10 shadow-2xl">

              <p className="text-cyan-300 uppercase tracking-[0.3em] text-sm font-black">
                Engagement pour la transparence
              </p>

              <h3 className="text-4xl font-black text-white mt-6 leading-tight">

                Une gestion responsable des ressources naturelles

              </h3>

              <p className="text-slate-200 mt-6 leading-relaxed">

                L'ITIE Congo s'engage à promouvoir une gouvernance
                transparente, responsable et participative des revenus
                issus des industries extractives au bénéfice de tous.

              </p>

              <div className="grid grid-cols-2 gap-4 mt-10">

                <div className="bg-white/10 rounded-2xl p-5 text-center border border-white/10">
                  <p className="text-cyan-300 font-black">
                    Transparence
                  </p>
                </div>

                <div className="bg-white/10 rounded-2xl p-5 text-center border border-white/10">
                  <p className="text-cyan-300 font-black">
                    Redevabilité
                  </p>
                </div>

                <div className="bg-white/10 rounded-2xl p-5 text-center border border-white/10">
                  <p className="text-cyan-300 font-black">
                    Participation
                  </p>
                </div>

                <div className="bg-white/10 rounded-2xl p-5 text-center border border-white/10">
                  <p className="text-cyan-300 font-black">
                    Impact
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

        {/* STATS BAR */}
        <div className="mt-20">

          <div className="grid md:grid-cols-4 gap-6 bg-white/10 backdrop-blur-2xl border border-white/10 rounded-[32px] p-8">

            <div className="text-center">

              <h3 className="text-4xl font-black text-white">
                24
              </h3>

              <p className="text-slate-300 mt-2">
                Rapports publiés
              </p>

            </div>

            <div className="text-center">

              <h3 className="text-4xl font-black text-white">
                98%
              </h3>

              <p className="text-slate-300 mt-2">
                Open Data
              </p>

            </div>

            <div className="text-center">

              <h3 className="text-4xl font-black text-white">
                89
              </h3>

              <p className="text-slate-300 mt-2">
                Entreprises
              </p>

            </div>

            <div className="text-center">

              <h3 className="text-4xl font-black text-white">
                327
              </h3>

              <p className="text-slate-300 mt-2">
                Permis actifs
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  )
}