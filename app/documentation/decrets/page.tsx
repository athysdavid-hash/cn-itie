export default function DecretsPage() {
  return (
    <main className="max-w-7xl mx-auto py-16">

      {/* HERO */}
      <section className="relative overflow-hidden rounded-[40px] bg-gradient-to-r from-[#062b57] to-[#0a4a8f] text-white p-12 shadow-2xl">

        <div className="max-w-4xl">

          <span className="bg-white/20 backdrop-blur px-4 py-2 rounded-full text-xs font-black uppercase tracking-wider">
            Textes réglementaires
          </span>

          <h1 className="text-5xl lg:text-6xl font-black mt-6 leading-tight">
            Décrets et textes officiels
          </h1>

          <p className="text-white/90 text-xl mt-6 leading-relaxed">
            Ensemble des décrets, arrêtés et textes réglementaires encadrant les industries extractives
            en République du Congo.
          </p>

        </div>

      </section>

      {/* PRESENTATION */}
      <section className="bg-white rounded-[32px] shadow-lg border border-slate-100 p-10 mt-10">

        <span className="text-cyan-600 font-black uppercase tracking-widest text-xs">
          Présentation
        </span>

        <h2 className="text-3xl font-black text-[#062b57] mt-3">
          Rôle des textes réglementaires
        </h2>

        <p className="text-slate-700 leading-8 mt-6 text-lg">
          Les décrets constituent les textes d’application des lois dans le secteur extractif.
          Ils précisent les modalités pratiques de mise en œuvre du Code minier, du Code des hydrocarbures
          et des engagements liés à la Norme ITIE.
          <br /><br />
          Ils jouent un rôle essentiel dans la régulation des activités pétrolières, gazières et minières
          sur l’ensemble du territoire national.
        </p>

      </section>

      {/* TYPES */}
      <section className="bg-white rounded-[32px] shadow-lg border border-slate-100 p-10 mt-8">

        <span className="text-cyan-600 font-black uppercase tracking-widest text-xs">
          Typologie
        </span>

        <h2 className="text-3xl font-black text-[#062b57] mt-3">
          Types de textes réglementaires
        </h2>

        <div className="grid md:grid-cols-2 gap-4 mt-8">

          {[
            "Décrets présidentiels relatifs au secteur extractif",
            "Arrêtés ministériels d’application",
            "Textes fiscaux et douaniers spécifiques",
            "Décisions administratives de régulation",
            "Textes liés à la gouvernance ITIE"
          ].map((item, i) => (
            <div key={i} className="bg-slate-50 border border-slate-200 rounded-2xl p-5">
              <p className="font-semibold text-[#062b57]">✓ {item}</p>
            </div>
          ))}

        </div>

      </section>

      {/* ROLE */}
      <section className="bg-white rounded-[32px] shadow-lg border border-slate-100 p-10 mt-8">

        <span className="text-cyan-600 font-black uppercase tracking-widest text-xs">
          Fonction
        </span>

        <h2 className="text-3xl font-black text-[#062b57] mt-3">
          Rôle des décrets
        </h2>

        <div className="space-y-6 mt-8">

          <div className="border-l-4 border-purple-500 pl-5">
            <h3 className="font-black text-xl text-[#062b57]">
              1. Encadrement juridique
            </h3>
            <p className="text-slate-600 mt-2">
              Préciser les dispositions des lois dans le secteur extractif.
            </p>
          </div>

          <div className="border-l-4 border-purple-500 pl-5">
            <h3 className="font-black text-xl text-[#062b57]">
              2. Organisation du secteur
            </h3>
            <p className="text-slate-600 mt-2">
              Définir les règles d’exploitation des ressources naturelles.
            </p>
          </div>

          <div className="border-l-4 border-purple-500 pl-5">
            <h3 className="font-black text-xl text-[#062b57]">
              3. Transparence ITIE
            </h3>
            <p className="text-slate-600 mt-2">
              Renforcer la mise en œuvre des exigences de transparence.
            </p>
          </div>

          <div className="border-l-4 border-purple-500 pl-5">
            <h3 className="font-black text-xl text-[#062b57]">
              4. Fiscalité
            </h3>
            <p className="text-slate-600 mt-2">
              Encadrer les taxes, redevances et obligations financières.
            </p>
          </div>

          <div className="border-l-4 border-purple-500 pl-5">
            <h3 className="font-black text-xl text-[#062b57]">
              5. Gouvernance
            </h3>
            <p className="text-slate-600 mt-2">
              Améliorer la gestion des ressources naturelles.
            </p>
          </div>

        </div>

      </section>

      {/* EXEMPLES */}
      <section className="bg-white rounded-[32px] shadow-lg border border-slate-100 p-10 mt-8">

        <span className="text-cyan-600 font-black uppercase tracking-widest text-xs">
          Références
        </span>

        <h2 className="text-3xl font-black text-[#062b57] mt-3">
          Exemples de décrets
        </h2>

        <div className="space-y-4 mt-8 text-slate-700 leading-8">

          <p>• Décret sur l’attribution des permis miniers</p>
          <p>• Décret sur le partage de production pétrolière</p>
          <p>• Décret sur la publication des contrats extractifs</p>
          <p>• Décret portant organisation du CN-ITIE</p>

        </div>

      </section>

      {/* PDF */}
      <section className="bg-white rounded-[32px] shadow-lg border border-slate-100 p-10 mt-8 mb-16 text-center">

        <h2 className="text-3xl font-black text-[#062b57]">
          Compilation officielle
        </h2>

        <p className="text-slate-500 mt-4">
          Ensemble des principaux décrets du secteur extractif en République du Congo.
        </p>

        <a
          href="#"
          className="inline-flex mt-8 bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-8 py-4 rounded-2xl font-black hover:scale-105 transition-all duration-300"
        >
          📥 Télécharger le PDF
        </a>

      </section>

    </main>
  );
}