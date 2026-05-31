"use client"

export default function Timeline() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-24">

      {/* HEADER */}
      <div className="text-center max-w-4xl mx-auto">

        <p className="text-sm uppercase tracking-[0.3em] text-cyan-600 font-black">
          Historique & Réformes
        </p>

        <h2 className="text-5xl font-black text-[#062b57] mt-4 leading-tight">
          Évolution de la transparence
          <br />
          extractive au Congo
        </h2>

        <p className="mt-6 text-slate-600 text-lg leading-relaxed">
          Principales étapes du processus ITIE, des réformes
          institutionnelles et de la modernisation du secteur
          extractif en République du Congo.
        </p>

      </div>

      {/* TIMELINE */}
      <div className="relative mt-24">

        {/* CENTER LINE */}
        <div className="absolute left-1/2 top-0 bottom-0 w-[4px] bg-gradient-to-b from-cyan-400 via-[#062b57] to-emerald-500 -translate-x-1/2 rounded-full" />

        <div className="space-y-24">

          {/* ITEM 1 */}
          <div className="relative grid md:grid-cols-2 gap-12 items-center">

            <div className="text-right">

              <p className="text-cyan-600 font-black uppercase tracking-[0.3em]">
                2004
              </p>

              <h3 className="text-4xl font-black text-[#062b57] mt-4">
                Adhésion à l’ITIE
              </h3>

              <p className="mt-4 text-slate-600 leading-relaxed">
                Le Congo rejoint l’Initiative pour la Transparence
                dans les Industries Extractives afin de renforcer
                la gouvernance des ressources naturelles.
              </p>

            </div>

            <div className="relative">

              <div className="bg-white rounded-[32px] border border-slate-200 p-8 shadow-2xl">

                <img
                  src="/timeline-1.jpg"
                  alt="ITIE Congo"
                  className="rounded-2xl object-cover h-[240px] w-full"
                />

              </div>

            </div>

            {/* DOT */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-cyan-500 border-[6px] border-white rounded-full shadow-2xl" />

          </div>

          {/* ITEM 2 */}
          <div className="relative grid md:grid-cols-2 gap-12 items-center">

            <div className="order-2 md:order-1 relative">

              <div className="bg-[#041c3c] rounded-[32px] p-8 shadow-2xl text-white overflow-hidden">

                <div className="absolute top-0 right-0 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl" />

                <img
                  src="/timeline-2.jpg"
                  alt="Production pétrolière"
                  className="rounded-2xl object-cover h-[240px] w-full"
                />

              </div>

            </div>

            <div className="order-1 md:order-2">

              <p className="text-emerald-600 font-black uppercase tracking-[0.3em]">
                2013
              </p>

              <h3 className="text-4xl font-black text-[#062b57] mt-4">
                Modernisation pétrolière
              </h3>

              <p className="mt-4 text-slate-600 leading-relaxed">
                Déploiement des nouveaux mécanismes de suivi des
                revenus pétroliers et amélioration de la publication
                des données extractives.
              </p>

            </div>

            {/* DOT */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-emerald-500 border-[6px] border-white rounded-full shadow-2xl" />

          </div>

          {/* ITEM 3 */}
          <div className="relative grid md:grid-cols-2 gap-12 items-center">

            <div className="text-right">

              <p className="text-yellow-500 font-black uppercase tracking-[0.3em]">
                2023
              </p>

              <h3 className="text-4xl font-black text-[#062b57] mt-4">
                Digitalisation des données
              </h3>

              <p className="mt-4 text-slate-600 leading-relaxed">
                Mise en place de plateformes numériques pour le
                suivi des permis, des revenus et des indicateurs
                de transparence extractive.
              </p>

            </div>

            <div>

              <div className="bg-white rounded-[32px] border border-slate-200 p-8 shadow-2xl">

                <img
                  src="/timeline-3.jpg"
                  alt="Digitalisation"
                  className="rounded-2xl object-cover h-[240px] w-full"
                />

              </div>

            </div>

            {/* DOT */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-yellow-400 border-[6px] border-white rounded-full shadow-2xl" />

          </div>

        </div>

      </div>

    </section>
  )
}