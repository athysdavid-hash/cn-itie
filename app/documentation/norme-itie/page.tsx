export default function NormeITIEPage() {
  return (
    <main className="max-w-7xl mx-auto py-16">

      {/* HERO */}
      <section className="relative overflow-hidden rounded-[40px] bg-gradient-to-r from-[#062b57] to-[#0a4a8f] text-white p-12 shadow-2xl">

        <div className="max-w-4xl">

          <span className="bg-white/20 backdrop-blur px-4 py-2 rounded-full text-xs font-black uppercase tracking-wider">
            Norme internationale de transparence
          </span>

          <h1 className="text-5xl lg:text-6xl font-black mt-6 leading-tight">
            Norme ITIE 2023
          </h1>

          <p className="text-white/90 text-xl mt-6 leading-relaxed">
            Cadre international de transparence des industries extractives appliqué par la
            République du Congo dans le cadre de l’Initiative pour la Transparence dans les
            Industries Extractives (ITIE).
          </p>

        </div>

      </section>

      {/* PRESENTATION */}
      <section className="bg-white rounded-[32px] shadow-lg border border-slate-100 p-10 mt-10">

        <span className="text-cyan-600 font-black uppercase tracking-widest text-xs">
          Présentation
        </span>

        <h2 className="text-3xl font-black text-[#062b57] mt-3">
          Comprendre la Norme ITIE
        </h2>

        <p className="text-slate-700 leading-8 mt-6 text-lg">
          La Norme ITIE est un standard international de transparence qui encadre la gestion des revenus
          issus des industries extractives (pétrole, gaz et mines). Elle impose la publication des données
          relatives aux paiements, contrats, licences et bénéficiaires effectifs afin de renforcer la
          gouvernance et la redevabilité.
          <br /><br />
          En République du Congo, sa mise en œuvre est assurée par le Comité National ITIE conformément
          à la Norme ITIE 2023.
        </p>

      </section>

      {/* HISTORIQUE */}
      <section className="bg-white rounded-[32px] shadow-lg border border-slate-100 p-10 mt-8">

        <span className="text-cyan-600 font-black uppercase tracking-widest text-xs">
          Historique
        </span>

        <h2 className="text-3xl font-black text-[#062b57] mt-3">
          Origine de l’ITIE
        </h2>

        <p className="text-slate-700 leading-8 mt-6 text-lg">
          Lancée en 2003, l’Initiative pour la Transparence dans les Industries Extractives vise à
          lutter contre l’opacité dans la gestion des revenus issus des ressources naturelles.
          Aujourd’hui, elle est adoptée par plus de 50 pays à travers le monde.
        </p>

      </section>

      {/* PRINCIPES */}
      <section className="bg-white rounded-[32px] shadow-lg border border-slate-100 p-10 mt-8">

        <span className="text-cyan-600 font-black uppercase tracking-widest text-xs">
          Principes
        </span>

        <h2 className="text-3xl font-black text-[#062b57] mt-3">
          Fondements de la Norme ITIE
        </h2>

        <div className="grid md:grid-cols-2 gap-4 mt-8">

          {[
            "Transparence des revenus extractifs",
            "Redevabilité des États et des entreprises",
            "Participation multipartite (État, entreprises, société civile)",
            "Publication de données fiables et accessibles"
          ].map((item, i) => (
            <div key={i} className="bg-slate-50 border border-slate-200 rounded-2xl p-5">
              <p className="font-semibold text-[#062b57]">✓ {item}</p>
            </div>
          ))}

        </div>

      </section>

      {/* EXIGENCES */}
      <section className="bg-white rounded-[32px] shadow-lg border border-slate-100 p-10 mt-8">

        <span className="text-cyan-600 font-black uppercase tracking-widest text-xs">
          Exigences ITIE 2023
        </span>

        <h2 className="text-3xl font-black text-[#062b57] mt-3">
          Obligations de transparence
        </h2>

        <div className="space-y-6 mt-8">

          <div className="border-l-4 border-cyan-500 pl-5">
            <h3 className="font-black text-xl text-[#062b57]">1. Transparence des contrats</h3>
            <p className="text-slate-600 mt-2">
              Publication des contrats pétroliers et miniers conclus avec l’État.
            </p>
          </div>

          <div className="border-l-4 border-cyan-500 pl-5">
            <h3 className="font-black text-xl text-[#062b57]">2. Revenus extractifs</h3>
            <p className="text-slate-600 mt-2">
              Divulgation des paiements effectués par les entreprises au gouvernement.
            </p>
          </div>

          <div className="border-l-4 border-cyan-500 pl-5">
            <h3 className="font-black text-xl text-[#062b57]">3. Bénéficiaires effectifs</h3>
            <p className="text-slate-600 mt-2">
              Identification des véritables propriétaires des entreprises extractives.
            </p>
          </div>

          <div className="border-l-4 border-cyan-500 pl-5">
            <h3 className="font-black text-xl text-[#062b57]">4. Entreprises d’État</h3>
            <p className="text-slate-600 mt-2">
              Transparence dans la gestion des sociétés publiques extractives.
            </p>
          </div>

          <div className="border-l-4 border-cyan-500 pl-5">
            <h3 className="font-black text-xl text-[#062b57]">5. Données ouvertes</h3>
            <p className="text-slate-600 mt-2">
              Accès public aux données dans des formats exploitables.
            </p>
          </div>

          <div className="border-l-4 border-cyan-500 pl-5">
            <h3 className="font-black text-xl text-[#062b57]">6. Audit indépendant</h3>
            <p className="text-slate-600 mt-2">
              Vérification externe des informations publiées pour garantir leur fiabilité.
            </p>
          </div>

        </div>

      </section>

      {/* GMP */}
      <section className="bg-white rounded-[32px] shadow-lg border border-slate-100 p-10 mt-8">

        <span className="text-cyan-600 font-black uppercase tracking-widest text-xs">
          Gouvernance
        </span>

        <h2 className="text-3xl font-black text-[#062b57] mt-3">
          Groupe Multipartite (GMP)
        </h2>

        <p className="text-slate-700 leading-8 mt-6 text-lg">
          Le Groupe Multipartite (GMP) est l’organe central de gouvernance de l’ITIE.
          Il regroupe l’État, les entreprises extractives et la société civile.
          Il supervise la mise en œuvre de la Norme ITIE au niveau national.
        </p>

      </section>

      {/* BENEFICIAIRES */}
      <section className="bg-white rounded-[32px] shadow-lg border border-slate-100 p-10 mt-8">

        <span className="text-cyan-600 font-black uppercase tracking-widest text-xs">
          Transparence financière
        </span>

        <h2 className="text-3xl font-black text-[#062b57] mt-3">
          Bénéficiaires effectifs
        </h2>

        <p className="text-slate-700 leading-8 mt-6 text-lg">
          La divulgation des bénéficiaires effectifs permet d’identifier les personnes physiques qui
          contrôlent réellement les entreprises extractives, contribuant à la lutte contre la corruption
          et le blanchiment de capitaux.
        </p>

      </section>

      {/* VALIDATION */}
      <section className="bg-white rounded-[32px] shadow-lg border border-slate-100 p-10 mt-8">

        <span className="text-cyan-600 font-black uppercase tracking-widest text-xs">
          Évaluation
        </span>

        <h2 className="text-3xl font-black text-[#062b57] mt-3">
          Validation ITIE
        </h2>

        <p className="text-slate-700 leading-8 mt-6 text-lg">
          La validation est le mécanisme d’évaluation de la conformité d’un pays à la Norme ITIE.
          Elle permet de mesurer les progrès réalisés et de renforcer l’amélioration continue de la transparence.
        </p>

      </section>

      {/* PDF */}
      <section className="bg-white rounded-[32px] shadow-lg border border-slate-100 p-10 mt-8 mb-16 text-center">

        <h2 className="text-3xl font-black text-[#062b57]">
          Document officiel ITIE
        </h2>

        <p className="text-slate-500 mt-4">
          Norme ITIE 2023 – Version internationale officielle.
        </p>

        <a
          href="#"
          className="inline-flex mt-8 bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-8 py-4 rounded-2xl font-black hover:scale-105 transition-all duration-300"
        >
          📥 Télécharger le PDF
        </a>

      </section>

    </main>
  );
}