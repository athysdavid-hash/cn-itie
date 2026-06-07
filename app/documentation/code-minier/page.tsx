export default function CodeMinierPage() {
  return (
    <main className="max-w-7xl mx-auto py-16">

      {/* HERO */}
      <section className="relative overflow-hidden rounded-[40px] bg-gradient-to-r from-[#062b57] to-[#0a4a8f] text-white p-12 shadow-2xl">

        <div className="max-w-4xl">

          <span className="bg-white/20 backdrop-blur px-4 py-2 rounded-full text-xs font-black uppercase tracking-wider">
            Cadre juridique minier
          </span>

          <h1 className="text-5xl lg:text-6xl font-black mt-6 leading-tight">
            Code minier de la République du Congo
          </h1>

          <p className="text-white/90 text-xl mt-6 leading-relaxed">
            Cadre légal régissant les activités de prospection,
            de recherche, d’exploitation et de valorisation des
            ressources minières sur le territoire national.
          </p>

        </div>

      </section>

      {/* PRESENTATION */}
      <section className="bg-white rounded-[32px] shadow-lg border border-slate-100 p-10 mt-10">

        <span className="text-cyan-600 font-black uppercase tracking-widest text-xs">
          Présentation
        </span>

        <h2 className="text-3xl font-black text-[#062b57] mt-3">
          Objectif du Code minier
        </h2>

        <p className="text-slate-700 leading-8 mt-6 text-lg">
          Le Code minier de la République du Congo définit les règles
          applicables à la prospection, à la recherche, à l’exploitation,
          à la transformation et à la commercialisation des substances
          minérales présentes sur le territoire national.

          Il constitue le principal instrument juridique encadrant le
          développement du secteur minier et vise à promouvoir une
          exploitation durable des ressources naturelles au bénéfice
          du développement économique et social du pays.
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
            📜 Loi n° 4-2005 du 11 avril 2005
          </p>

          <p className="text-slate-600 mt-2">
            Portant Code minier de la République du Congo ainsi que
            ses textes modificatifs et réglementaires d’application.
          </p>

        </div>

      </section>

      {/* RESUME */}
      <section className="bg-white rounded-[32px] shadow-lg border border-slate-100 p-10 mt-8">

        <span className="text-cyan-600 font-black uppercase tracking-widest text-xs">
          Vue d'ensemble
        </span>

        <h2 className="text-3xl font-black text-[#062b57] mt-3">
          Résumé du Code minier
        </h2>

        <div className="grid md:grid-cols-2 gap-4 mt-8">

          {[
            "Attribution des permis miniers",
            "Conditions de recherche et d’exploitation",
            "Obligations fiscales et douanières",
            "Protection de l’environnement",
            "Sécurité des travailleurs",
            "Participation de l’État",
            "Promotion du contenu local",
            "Valorisation des ressources"
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
              1. Domaine minier national
            </h3>
            <p className="text-slate-600 mt-2">
              Les ressources minérales constituent un patrimoine national placé sous l’autorité de l’État.
            </p>
          </div>

          <div className="border-l-4 border-cyan-500 pl-5">
            <h3 className="font-black text-xl text-[#062b57]">
              2. Titres miniers
            </h3>
            <p className="text-slate-600 mt-2">
              Toute activité minière doit être autorisée par un permis ou une convention approuvée.
            </p>
          </div>

          <div className="border-l-4 border-cyan-500 pl-5">
            <h3 className="font-black text-xl text-[#062b57]">
              3. Protection environnementale
            </h3>
            <p className="text-slate-600 mt-2">
              Les opérateurs doivent réaliser des études d’impact environnemental.
            </p>
          </div>

          <div className="border-l-4 border-cyan-500 pl-5">
            <h3 className="font-black text-xl text-[#062b57]">
              4. Sécurité
            </h3>
            <p className="text-slate-600 mt-2">
              Respect obligatoire des normes de sécurité applicables aux activités minières.
            </p>
          </div>

        </div>

      </section>

      {/* IMPORTANCE */}
      <section className="bg-white rounded-[32px] shadow-lg border border-slate-100 p-10 mt-8">

        <span className="text-cyan-600 font-black uppercase tracking-widest text-xs">
          Secteur minier congolais
        </span>

        <h2 className="text-3xl font-black text-[#062b57] mt-3">
          Importance économique
        </h2>

        <p className="text-slate-700 leading-8 mt-6 text-lg">
          La République du Congo dispose d'importantes ressources minières,
          notamment le fer, la potasse, les phosphates, l'or,
          les polymétaux et les matériaux de construction.
          Le secteur minier représente un levier stratégique de
          diversification économique complémentaire au secteur pétrolier.
        </p>

      </section>

      {/* EVOLUTION */}
      <section className="rounded-[32px] bg-gradient-to-r from-cyan-500 to-blue-600 text-white p-10 mt-8 shadow-xl">

        <h2 className="text-3xl font-black">
          Évolution du cadre minier
        </h2>

        <p className="leading-8 mt-6 text-lg text-white/95">
          Les autorités congolaises poursuivent la modernisation du cadre
          juridique minier afin de renforcer la transparence,
          améliorer le contenu local et favoriser une meilleure
          valorisation des ressources naturelles au bénéfice du développement national.
        </p>

      </section>

      {/* PDF */}
      <section className="bg-white rounded-[32px] shadow-lg border border-slate-100 p-10 mt-8 mb-16 text-center">

        <h2 className="text-3xl font-black text-[#062b57]">
          Télécharger le document officiel
        </h2>

        <p className="text-slate-500 mt-4">
          Version officielle du Code minier de la République du Congo.
        </p>

        <a
          href="#"
          className="inline-flex mt-8 bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-8 py-4 rounded-2xl font-black hover:scale-105 transition-all duration-300"
        >
          📥 Télécharger le PDF
        </a>

      </section>

    </main>
  )
}