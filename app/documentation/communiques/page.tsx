export default function CommuniquesPage() {
  return (
    <main className="max-w-7xl mx-auto py-16">

      {/* HERO */}
      <section className="relative overflow-hidden rounded-[40px] bg-gradient-to-r from-[#062b57] to-[#0a4a8f] text-white p-12 shadow-2xl">

        <div className="max-w-4xl">

          <span className="bg-white/20 backdrop-blur px-4 py-2 rounded-full text-xs font-black uppercase tracking-wider">
            Communication institutionnelle
          </span>

          <h1 className="text-5xl lg:text-6xl font-black mt-6 leading-tight">
            Communiqués officiels
          </h1>

          <p className="text-white/90 text-xl mt-6 leading-relaxed">
            Publications officielles du Comité National ITIE Congo (CN-ITIE),
            incluant annonces, décisions, réunions et activités institutionnelles.
          </p>

        </div>

      </section>

      {/* PRESENTATION */}
      <section className="bg-white rounded-[32px] shadow-lg border border-slate-100 p-10 mt-10">

        <span className="text-cyan-600 font-black uppercase tracking-widest text-xs">
          Présentation
        </span>

        <h2 className="text-3xl font-black text-[#062b57] mt-3">
          Rôle des communiqués officiels
        </h2>

        <p className="text-slate-700 leading-8 mt-6 text-lg">
          Les communiqués officiels du CN-ITIE Congo constituent un outil essentiel de transparence
          et de communication institutionnelle. Ils permettent d’informer le public sur les activités
          du Comité National, les réunions du Groupe Multipartite, les décisions stratégiques et
          l’évolution de la mise en œuvre de la Norme ITIE.
        </p>

      </section>

      {/* ACTIVITES */}
      <section className="bg-white rounded-[32px] shadow-lg border border-slate-100 p-10 mt-8">

        <span className="text-cyan-600 font-black uppercase tracking-widest text-xs">
          Actualité
        </span>

        <h2 className="text-3xl font-black text-[#062b57] mt-3">
          Activités récentes
        </h2>

        <div className="space-y-6 mt-8">

          <div className="border-l-4 border-green-500 pl-5">
            <h3 className="font-black text-xl text-[#062b57]">
              Session CN-ITIE 2026
            </h3>
            <p className="text-slate-600 mt-2">
              Le Comité exécutif a tenu sa première session de l’année 2026 pour définir les priorités
              de mise en œuvre de la Norme ITIE.
            </p>
          </div>

          <div className="border-l-4 border-green-500 pl-5">
            <h3 className="font-black text-xl text-[#062b57]">
              Validation ITIE
            </h3>
            <p className="text-slate-600 mt-2">
              Le Congo prépare activement la prochaine validation ITIE prévue en 2027 conformément aux exigences internationales.
            </p>
          </div>

          <div className="border-l-4 border-green-500 pl-5">
            <h3 className="font-black text-xl text-[#062b57]">
              Rapport ITIE 2023
            </h3>
            <p className="text-slate-600 mt-2">
              Publication et vulgarisation des résultats des industries extractives (pétrole, gaz, mines et forêt).
            </p>
          </div>

        </div>

      </section>

      {/* ROLE */}
      <section className="bg-white rounded-[32px] shadow-lg border border-slate-100 p-10 mt-8">

        <span className="text-cyan-600 font-black uppercase tracking-widest text-xs">
          Mission
        </span>

        <h2 className="text-3xl font-black text-[#062b57] mt-3">
          Rôle des communiqués
        </h2>

        <div className="grid md:grid-cols-2 gap-4 mt-8">

          {[
            "Informer le public sur les décisions du CN-ITIE",
            "Garantir la transparence institutionnelle",
            "Partager les résultats des réunions officielles",
            "Suivre la mise en œuvre de la Norme ITIE"
          ].map((item, i) => (
            <div key={i} className="bg-slate-50 border border-slate-200 rounded-2xl p-5">
              <p className="font-semibold text-[#062b57]">✓ {item}</p>
            </div>
          ))}

        </div>

      </section>

      {/* ARCHIVES */}
      <section className="bg-white rounded-[32px] shadow-lg border border-slate-100 p-10 mt-8">

        <span className="text-cyan-600 font-black uppercase tracking-widest text-xs">
          Mémoire institutionnelle
        </span>

        <h2 className="text-3xl font-black text-[#062b57] mt-3">
          Archives des communiqués
        </h2>

        <div className="space-y-4 mt-8 text-slate-700 leading-8">

          <p>• Communiqué sur la session du comité exécutif 2025</p>
          <p>• Communiqué sur la publication du Rapport ITIE 2023</p>
          <p>• Communiqué sur les ateliers de vulgarisation ITIE</p>
          <p>• Communiqué sur la gouvernance du Groupe Multipartite</p>

        </div>

      </section>

      {/* PDF */}
      <section className="bg-white rounded-[32px] shadow-lg border border-slate-100 p-10 mt-8 mb-16 text-center">

        <h2 className="text-3xl font-black text-[#062b57]">
          Compilation officielle
        </h2>

        <p className="text-slate-500 mt-4">
          Ensemble des communiqués officiels du CN-ITIE Congo.
        </p>

        <a
          href="#"
          className="inline-flex mt-8 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-2xl font-black hover:scale-105 transition-all duration-300"
        >
          📥 Télécharger le PDF
        </a>

      </section>

    </main>
  );
}