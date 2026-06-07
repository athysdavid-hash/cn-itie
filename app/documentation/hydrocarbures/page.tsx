export default function CodeHydrocarburesPage() {
  return (
    <main className="max-w-7xl mx-auto py-16">

      {/* HERO */}
      <section className="relative overflow-hidden rounded-[40px] bg-gradient-to-r from-[#062b57] to-[#0a4a8f] text-white p-12 shadow-2xl">

        <div className="max-w-4xl">

          <span className="bg-white/20 backdrop-blur px-4 py-2 rounded-full text-xs font-black uppercase tracking-wider">
            Cadre juridique pétrolier et gazier
          </span>

          <h1 className="text-5xl lg:text-6xl font-black mt-6 leading-tight">
            Code des hydrocarbures de la République du Congo
          </h1>

          <p className="text-white/90 text-xl mt-6 leading-relaxed">
            Cadre légal régissant les activités de prospection, exploration,
            production, transport et commercialisation des hydrocarbures sur le territoire national.
          </p>

        </div>

      </section>

      {/* PRESENTATION */}
      <section className="bg-white rounded-[32px] shadow-lg border border-slate-100 p-10 mt-10">

        <span className="text-cyan-600 font-black uppercase tracking-widest text-xs">
          Présentation
        </span>

        <h2 className="text-3xl font-black text-[#062b57] mt-3">
          Rôle du secteur des hydrocarbures
        </h2>

        <p className="text-slate-700 leading-8 mt-6 text-lg">
          Le secteur des hydrocarbures constitue l’un des piliers de l’économie nationale.
          Il contribue de manière significative aux recettes publiques, aux exportations et
          au développement des infrastructures énergétiques du pays.
        </p>

      </section>

      {/* LOI */}
      <section className="bg-white rounded-[32px] shadow-lg border border-slate-100 p-10 mt-8">

        <span className="text-cyan-600 font-black uppercase tracking-widest text-xs">
          Base légale
        </span>

        <h2 className="text-3xl font-black text-[#062b57] mt-3">
          Loi applicable
        </h2>

        <div className="mt-6 bg-slate-50 rounded-2xl p-6 border border-slate-200">

          <p className="text-lg font-bold text-[#062b57]">
            📜 Loi n° 28-2016 du 12 octobre 2016
          </p>

          <p className="text-slate-600 mt-2">
            Portant Code des hydrocarbures de la République du Congo ainsi que ses textes
            d’application et dispositions complémentaires.
          </p>

        </div>

      </section>

      {/* RESUME */}
      <section className="bg-white rounded-[32px] shadow-lg border border-slate-100 p-10 mt-8">

        <span className="text-cyan-600 font-black uppercase tracking-widest text-xs">
          Vue d'ensemble
        </span>

        <h2 className="text-3xl font-black text-[#062b57] mt-3">
          Résumé du Code des hydrocarbures
        </h2>

        <div className="grid md:grid-cols-2 gap-4 mt-8">

          {[
            "Attribution des titres pétroliers et gaziers",
            "Régime des contrats pétroliers",
            "Fiscalité et redevances pétrolières",
            "Normes environnementales",
            "Sécurité industrielle",
            "Participation de l’État",
            "Contenu local",
            "Transport et stockage des hydrocarbures"
          ].map((item, index) => (
            <div
              key={index}
              className="bg-slate-50 border border-slate-200 rounded-2xl p-5"
            >
              <p className="font-semibold text-[#062b57]">
                ✓ {item}
              </p>
            </div>
          ))}

        </div>

      </section>

      {/* ARTICLES */}
      <section className="bg-white rounded-[32px] shadow-lg border border-slate-100 p-10 mt-8">

        <span className="text-cyan-600 font-black uppercase tracking-widest text-xs">
          Dispositions essentielles
        </span>

        <h2 className="text-3xl font-black text-[#062b57] mt-3">
          Articles et principes clés
        </h2>

        <div className="space-y-6 mt-8">

          <div className="border-l-4 border-cyan-500 pl-5">
            <h3 className="font-black text-xl text-[#062b57]">
              1. Propriété des ressources
            </h3>
            <p className="text-slate-600 mt-2">
              Les hydrocarbures présents dans le sous-sol national appartiennent à l’État.
            </p>
          </div>

          <div className="border-l-4 border-cyan-500 pl-5">
            <h3 className="font-black text-xl text-[#062b57]">
              2. Autorisations
            </h3>
            <p className="text-slate-600 mt-2">
              Toute activité pétrolière ou gazière est soumise à l’obtention d’un titre légal.
            </p>
          </div>

          <div className="border-l-4 border-cyan-500 pl-5">
            <h3 className="font-black text-xl text-[#062b57]">
              3. Contrats pétroliers
            </h3>
            <p className="text-slate-600 mt-2">
              Les activités sont encadrées par des contrats de partage de production et de services.
            </p>
          </div>

          <div className="border-l-4 border-cyan-500 pl-5">
            <h3 className="font-black text-xl text-[#062b57]">
              4. Protection de l’environnement
            </h3>
            <p className="text-slate-600 mt-2">
              Les opérateurs doivent réaliser des études d’impact environnemental avant tout projet.
            </p>
          </div>

          <div className="border-l-4 border-cyan-500 pl-5">
            <h3 className="font-black text-xl text-[#062b57]">
              5. Sécurité industrielle
            </h3>
            <p className="text-slate-600 mt-2">
              Des normes strictes de sécurité sont imposées pour prévenir les risques industriels.
            </p>
          </div>

        </div>

      </section>

      {/* IMPORTANCE */}
      <section className="bg-white rounded-[32px] shadow-lg border border-slate-100 p-10 mt-8">

        <span className="text-cyan-600 font-black uppercase tracking-widest text-xs">
          Secteur stratégique
        </span>

        <h2 className="text-3xl font-black text-[#062b57] mt-3">
          Importance économique
        </h2>

        <p className="text-slate-700 leading-8 mt-6 text-lg">
          Le secteur des hydrocarbures joue un rôle central dans l’économie congolaise,
          représentant une part majeure des exportations et des revenus de l’État,
          tout en soutenant le développement énergétique national.
        </p>

      </section>

      {/* EVOLUTION */}
      <section className="rounded-[32px] bg-gradient-to-r from-cyan-500 to-blue-600 text-white p-10 mt-8 shadow-xl">

        <h2 className="text-3xl font-black">
          Modernisation du cadre pétrolier
        </h2>

        <p className="leading-8 mt-6 text-lg text-white/95">
          Les réformes en cours visent à renforcer la transparence, améliorer la gouvernance,
          promouvoir le contenu local et optimiser la valorisation des ressources pétrolières
          et gazières au bénéfice du développement national.
        </p>

      </section>

      {/* PDF */}
      <section className="bg-white rounded-[32px] shadow-lg border border-slate-100 p-10 mt-8 mb-16 text-center">

        <h2 className="text-3xl font-black text-[#062b57]">
          Document officiel
        </h2>

        <p className="text-slate-500 mt-4">
          Loi n°28-2016 du 12 octobre 2016 portant Code des hydrocarbures – République du Congo.
        </p>

        <a
          href="https://www.hydrocarbures.gouv.cg/wp-content/uploads/2023/10/Loi-n%C2%B0-28-2016-du-12-octobre-2016-portant-code-des-hydrocarbures.pdf"
          target="_blank"
          className="inline-flex mt-8 bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-8 py-4 rounded-2xl font-black hover:scale-105 transition-all duration-300"
        >
          📥 Télécharger le PDF
        </a>

      </section>

    </main>
  );
}