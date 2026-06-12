"use client"

export default function ResultatsImpactsPage() {

  const documents = [
    {
      title: "Cadre juridique et économique du secteur forestier",
      file: "/docs/resultats-impacts/foret.pdf",
    },
    {
      title: "Cadre juridique et économique du secteur des mines",
      file: "/docs/resultats-impacts/mines.pdf",
    },
    {
      title: "Cadre juridique et économique du secteur des hydrocarbures",
      file: "/docs/resultats-impacts/hydrocarbures.pdf",
    },
    {
      title: "Réponse aux résultats et impacts – rapport préliminaire ITIE",
      file: "/docs/resultats-impacts/reponse-itie.pdf",
    },
    {
      title: "Rapport des ateliers d’auto-évaluation",
      file: "/docs/resultats-impacts/ateliers.pdf",
    },
    {
      title: "Fiche synthèse",
      file: "/docs/resultats-impacts/synthese.pdf",
    },
    {
      title: "Mémoire de fin de cycle de Master sur l’ITIE",
      file: "/docs/resultats-impacts/memoire-master.pdf",
    },
  ]

  return (
    <section className="bg-[#061f3a] min-h-screen py-20 text-white">

      <div className="max-w-6xl mx-auto px-6">

        {/* HEADER */}
        <h1 className="text-3xl font-bold">
          Résultats et Impacts
        </h1>

        <p className="text-slate-400 mt-2 mb-10 max-w-2xl">
          Documents relatifs aux résultats, évaluations et impacts du processus ITIE en République du Congo.
        </p>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-6">

          {documents.map((doc, i) => (
            <div
              key={i}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-cyan-400/40 transition"
            >
              <h3 className="text-lg font-semibold">
                {doc.title}
              </h3>

              <a
                href={doc.file}
                target="_blank"
                className="inline-block mt-4 text-cyan-300 hover:text-cyan-200 transition"
              >
                📥 Télécharger le PDF
              </a>
            </div>
          ))}

        </div>

      </div>
    </section>
  )
}