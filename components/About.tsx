export default function About() {
  return (
    <section className="py-16 px-4">

      <div className="max-w-7xl mx-auto">

        <div className="grid lg:grid-cols-2 gap-8">

          {/* LEFT */}
          <div className="bg-white rounded-[32px] border border-slate-200 group overflow-hidden shadow-sm">

            <div className="p-6">

              <p className="text-sm font-bold text-cyan-600 uppercase tracking-wider">
                À propos
              </p>

              <h2 className="text-2xl lg:text-3xl font-black text-[#062b57] mt-4 leading-tight">
                Initiative pour la Transparence
                dans les Industries Extractives
              </h2>

              <p className="text-slate-600 text-sm leading-relaxed mt-5">
                L’ITIE Congo œuvre pour une gestion transparente
                et responsable des revenus issus des ressources
                naturelles grâce à la publication des données
                extractives et à la participation citoyenne.
              </p>

              {/* STATS */}
              <div className="grid grid-cols-2 gap-5 mt-6">

                <div className="bg-slate-50 rounded-[20px] p-4 border border-slate-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">

                  <div className="text-3xl mb-2">
                    📘
                  </div>

                  <h3 className="text-2xl font-black text-[#062b57]">
                    12
                  </h3>

                  <p className="text-slate-500 mt-2">
                    Rapports publiés
                  </p>

                </div>

                <div className="bg-slate-50 rounded-[24px] p-6 border border-slate-200">

                  <div className="text-5xl mb-4">
                    🌍
                  </div>

                  <h3 className="text-4xl font-black text-[#062b57]">
                    100%
                  </h3>

                  <p className="text-slate-500 mt-2">
                    Données ouvertes
                  </p>

                </div>

              </div>

            </div>

          </div>

          {/* RIGHT */}
          <div className="bg-[#062b57] rounded-[32px] group overflow-hidden text-white relative shadow-sm">

            {/* GLOW */}
            <div className="absolute top-0 right-0 w-[320px] h-[320px] bg-cyan-500/20 blur-3xl rounded-full" />

            <div className="relative z-10 p-6">

              <p className="text-sm font-bold text-cyan-300 uppercase tracking-wider">
                Vision stratégique
              </p>

              <h2 className="text-2xl lg:text-3xl font-black mt-4 leading-tight">
                Gouvernance responsable des ressources
              </h2>

              <div className="space-y-6 mt-6">

                <div className="bg-white/10 backdrop-blur-md rounded-[24px] p-6 border border-white/10">

                  <div className="flex items-center gap-4">

                    <div className="w-16 h-16 rounded-2xl bg-cyan-500 flex items-center justify-center text-3xl">
                      🔎
                    </div>

                    <div>

                      <h3 className="text-2xl font-black">
                        Transparence
                      </h3>

                      <p className="text-slate-300 mt-2">
                        Publication ouverte des revenus extractifs.
                      </p>

                    </div>

                  </div>

                </div>

                <div className="bg-white/10 backdrop-blur-md rounded-[24px] p-6 border border-white/10">

                  <div className="flex items-center gap-4">

                    <div className="w-16 h-16 rounded-2xl bg-cyan-500 flex items-center justify-center text-3xl">
                      ⚖️
                    </div>

                    <div>

                      <h3 className="text-2xl font-black">
                        Redevabilité
                      </h3>

                      <p className="text-slate-300 mt-2">
                        Contrôle et suivi des flux financiers.
                      </p>

                    </div>

                  </div>

                </div>

                <div className="bg-white/10 backdrop-blur-md rounded-[24px] p-6 border border-white/10">

                  <div className="flex items-center gap-4">

                    <div className="w-12 h-12rounded-2xl bg-cyan-500 flex items-center justify-center text-3xl">
                      🤝
                    </div>

                    <div>

                      <h3 className="text-lg font-black">
                        Participation
                      </h3>

                      <p className="text-slate-300 mt-2">
                        Implication de la société civile et des citoyens.
                      </p>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  )
}