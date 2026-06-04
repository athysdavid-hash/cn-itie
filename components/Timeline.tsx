"use client"

export default function Timeline() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-14">

      {/* HEADER */}
      <div className="text-center max-w-3xl mx-auto">

        <p className="text-xs uppercase tracking-[0.25em] text-cyan-600 font-black">
          Historique & Réformes
        </p>

        <h2 className="text-3xl font-black text-[#062b57] mt-3 leading-tight">
          Évolution de la transparence
          <br />
          extractive au Congo
        </h2>

        <p className="mt-4 text-slate-600 leading-relaxed">
          Principales étapes du processus ITIE, des réformes
          institutionnelles et de la modernisation du secteur
          extractif en République du Congo.
        </p>

      </div>

      {/* TIMELINE */}
      <div className="relative mt-12">

        <div className="absolute left-1/2 top-0 bottom-0 w-[3px] bg-gradient-to-b from-cyan-400 via-[#062b57] to-emerald-500 -translate-x-1/2 rounded-full" />

        <div className="space-y-12">

          {/* ITEM 1 */}
          <div className="relative grid md:grid-cols-2 gap-6 items-center">

            <div className="text-right">

              <p className="text-cyan-600 font-black uppercase tracking-[0.2em]">
                2004
              </p>

              <h3 className="text-2xl font-black text-[#062b57] mt-2">
                Adhésion à l’ITIE
              </h3>

              <p className="mt-2 text-slate-600 leading-relaxed">
                Le Congo rejoint l’Initiative pour la Transparence
                dans les Industries Extractives afin de renforcer
                la gouvernance des ressources naturelles.
              </p>

            </div>

            <div>
              <div className="bg-white rounded-[20px] border border-slate-200 p-4 shadow-lg">

                <img
                  src="/timeline-1.jpg"
                  alt="ITIE Congo"
                  className="rounded-xl object-cover h-[160px] w-full"
                />

              </div>
            </div>

            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5 bg-cyan-500 border-4 border-white rounded-full shadow-lg" />

          </div>

          {/* ITEM 2 */}
          <div className="relative grid md:grid-cols-2 gap-6 items-center">

            <div className="order-2 md:order-1">

              <div className="bg-[#041c3c] rounded-[20px] p-4 shadow-lg overflow-hidden">

                <img
                  src="/timeline-2.jpg"
                  alt="Production pétrolière"
                  className="rounded-xl object-cover h-[160px] w-full"
                />

              </div>

            </div>

            <div className="order-1 md:order-2">

              <p className="text-emerald-600 font-black uppercase tracking-[0.2em]">
                2013
              </p>

              <h3 className="text-2xl font-black text-[#062b57] mt-2">
                Modernisation pétrolière
              </h3>

              <p className="mt-2 text-slate-600 leading-relaxed">
                Déploiement des nouveaux mécanismes de suivi des
                revenus pétroliers et amélioration de la publication
                des données extractives.
              </p>

            </div>

            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5 bg-emerald-500 border-4 border-white rounded-full shadow-lg" />

          </div>

          {/* ITEM 3 */}
          <div className="relative grid md:grid-cols-2 gap-6 items-center">

            <div className="text-right">

              <p className="text-yellow-500 font-black uppercase tracking-[0.2em]">
                2023
              </p>

              <h3 className="text-2xl font-black text-[#062b57] mt-2">
                Digitalisation des données
              </h3>

              <p className="mt-2 text-slate-600 leading-relaxed">
                Mise en place de plateformes numériques pour le
                suivi des permis, des revenus et des indicateurs
                de transparence extractive.
              </p>

            </div>

            <div>

              <div className="bg-white rounded-[20px] border border-slate-200 p-4 shadow-lg">

                <img
                  src="/timeline-3.jpg"
                  alt="Digitalisation"
                  className="rounded-xl object-cover h-[160px] w-full"
                />

              </div>

            </div>

            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5 bg-yellow-400 border-4 border-white rounded-full shadow-lg" />

          </div>

        </div>

      </div>

    </section>
  )
}
