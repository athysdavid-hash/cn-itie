export default function AproposPage() {
  return (
    <main className="bg-[#f4f8fb]">

      {/* HERO INSTITUTIONNEL PROPRE */}
      <section className="bg-[#062b57] py-24">
        <div className="max-w-7xl mx-auto px-6">

          <span className="inline-block bg-white/10 text-cyan-200 px-4 py-2 rounded-full text-xs font-black tracking-widest uppercase">
            République du Congo • CN-ITIE
          </span>

          <h1 className="text-4xl lg:text-6xl font-black text-white mt-6 leading-tight max-w-5xl">
            Comité National de l’Initiative pour la Transparence dans les Industries Extractives
          </h1>

          <p className="text-slate-200 text-lg lg:text-xl mt-6 max-w-3xl leading-8">
            Institution nationale chargée de la mise en œuvre de la Norme ITIE,
            visant à renforcer la transparence, la redevabilité et la bonne gouvernance
            dans le secteur des industries extractives.
          </p>

        </div>
      </section>

      {/* INTRO ITIE */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">

          <span className="text-cyan-600 font-black uppercase tracking-widest text-xs">
            Présentation
          </span>

          <h2 className="text-3xl lg:text-5xl font-black text-[#062b57] mt-4 max-w-4xl">
            Qu’est-ce que l’ITIE ?
          </h2>

          <div className="mt-10 space-y-6 text-slate-700 text-lg leading-8 max-w-4xl">

            <p>
              L’Initiative pour la Transparence dans les Industries Extractives (ITIE)
              est une norme internationale visant à améliorer la gouvernance des ressources naturelles.
            </p>

            <p>
              Elle impose la publication des informations sur les licences, la production,
              les revenus générés et les paiements effectués par les entreprises.
            </p>

            <p>
              En République du Congo, sa mise en œuvre est assurée par un comité multipartite
              regroupant l’État, les entreprises extractives et la société civile.
            </p>

          </div>

        </div>
      </section>

      {/* GOUVERNANCE */}
      <section className="max-w-7xl mx-auto px-6 py-20">

        <span className="text-cyan-600 font-black uppercase tracking-widest text-xs">
          Gouvernance
        </span>

        <h2 className="text-3xl lg:text-5xl font-black text-[#062b57] mt-4">
          Structure multipartite
        </h2>

        <div className="grid md:grid-cols-3 gap-6 mt-12">

          <div className="bg-[#062b57] text-white rounded-2xl p-8">
            <h3 className="text-xl font-black">État</h3>
            <p className="text-slate-200 mt-4">
              Ministères et institutions publiques assurant la régulation.
            </p>
          </div>

          <div className="bg-cyan-600 text-white rounded-2xl p-8">
            <h3 className="text-xl font-black">Entreprises</h3>
            <p className="text-slate-100 mt-4">
              Opérateurs pétroliers, gaziers et miniers.
            </p>
          </div>

          <div className="bg-slate-800 text-white rounded-2xl p-8">
            <h3 className="text-xl font-black">Société civile</h3>
            <p className="text-slate-200 mt-4">
              Organisations indépendantes de contrôle et de suivi.
            </p>
          </div>

        </div>

      </section>

      {/* TIMELINE PROPRE ET ORDONNÉE */}
      <section className="max-w-7xl mx-auto px-6 py-20">

        <span className="text-cyan-600 font-black uppercase tracking-widest text-xs">
          Historique
        </span>

        <h2 className="text-3xl lg:text-5xl font-black text-[#062b57] mt-4 mb-14">
          Chronologie de l’ITIE au Congo
        </h2>

        <div className="relative border-l-2 border-cyan-500 ml-6 space-y-12">

          {/* 2004 */}
          <div className="relative pl-10">
            <div className="absolute -left-4 w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center text-white text-xs font-black">
              2004
            </div>

            <h3 className="text-xl font-black text-[#062b57]">
              Adhésion du Congo à l’ITIE
            </h3>

            <p className="text-slate-600 mt-2 leading-7">
              Engagement officiel de la République du Congo dans l’Initiative
              pour la Transparence dans les Industries Extractives.
            </p>
          </div>

          {/* 2013 */}
          <div className="relative pl-10">
            <div className="absolute -left-4 w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center text-white text-xs font-black">
              2013
            </div>

            <h3 className="text-xl font-black text-[#062b57]">
              Renforcement institutionnel
            </h3>

            <p className="text-slate-600 mt-2 leading-7">
              Amélioration du cadre national de mise en œuvre et structuration du CN-ITIE.
            </p>
          </div>

          {/* 2020 */}
          <div className="relative pl-10">
            <div className="absolute -left-4 w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center text-white text-xs font-black">
              2020
            </div>

            <h3 className="text-xl font-black text-[#062b57]">
              Publication du rapport ITIE
            </h3>

            <p className="text-slate-600 mt-2 leading-7">
              Diffusion des données sur les revenus extractifs et les paiements des entreprises.
            </p>
          </div>

          {/* 2021 */}
          <div className="relative pl-10">
            <div className="absolute -left-4 w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center text-white text-xs font-black">
              2021
            </div>

            <h3 className="text-xl font-black text-[#062b57]">
              Amélioration des divulgations
            </h3>

            <p className="text-slate-600 mt-2 leading-7">
              Renforcement de la transparence sur les revenus et la production.
            </p>
          </div>

          {/* 2022 */}
          <div className="relative pl-10">
            <div className="absolute -left-4 w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center text-white text-xs font-black">
              2022
            </div>

            <h3 className="text-xl font-black text-[#062b57]">
              Consolidation des données
            </h3>

            <p className="text-slate-600 mt-2 leading-7">
              Extension des rapports aux secteurs pétrolier, minier et forestier.
            </p>
          </div>

          {/* 2023 */}
          <div className="relative pl-10">
            <div className="absolute -left-4 w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center text-white text-xs font-black">
              2023
            </div>

            <h3 className="text-xl font-black text-[#062b57]">
              Rapport ITIE 2023
            </h3>

            <p className="text-slate-600 mt-2 leading-7">
              Analyse approfondie et suivi des recommandations de gouvernance extractive.
            </p>
          </div>

        </div>

      </section>

    </main>
  )
}