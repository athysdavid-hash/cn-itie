export default function ValidationITIEPage() {
  const documents = [
    {
      title: "Note conceptuelle de la validation",
      desc: "Présentation générale du processus de validation ITIE.",
      file: "/docs/validation/note-conceptuelle.pdf",
    },
    {
      title: "Calendrier de la validation",
      desc: "Planning officiel des différentes étapes du processus.",
      file: "/docs/validation/calendrier.pdf",
    },
    {
      title: "Rapport d'auto-évaluation",
      desc: "Document préparatoire élaboré par le Groupe multipartite.",
      file: "/docs/validation/auto-evaluation.pdf",
    },
    {
      title: "Documents justificatifs",
      desc: "Pièces et références utilisées dans le cadre de la validation.",
      file: "/docs/validation/documents.pdf",
    },
  ]

  return (
    <section className="min-h-screen bg-[#061f3a] py-20 text-white">

      <div className="max-w-6xl mx-auto px-6">

        {/* HEADER */}

        <div className="mb-10">

          <div className="inline-flex items-center gap-2 bg-green-500/20 border border-green-400/40 px-4 py-2 rounded-full text-green-300 text-sm font-medium">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
            Processus de validation en cours
          </div>

          <h1 className="text-4xl font-black mt-5">
            Validation ITIE
          </h1>

          <p className="text-slate-300 mt-4 max-w-3xl leading-8">
            La République du Congo est engagée dans le processus de validation
            de la Norme ITIE afin d’évaluer les progrès accomplis en matière de
            transparence, de gouvernance et de redevabilité dans la gestion des
            ressources extractives.
          </p>

        </div>

        {/* DOCUMENTS */}

        <h2 className="text-2xl font-bold mb-6">
          Documents de la validation
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          {documents.map((doc, index) => (

            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-cyan-400/40 transition"
            >

              <h3 className="text-xl font-semibold">
                {doc.title}
              </h3>

              <p className="text-slate-400 mt-2">
                {doc.desc}
              </p>

              <a
                href={doc.file}
                target="_blank"
                className="inline-block mt-5 px-4 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-600 transition"
              >
                📥 Télécharger
              </a>

            </div>

          ))}

        </div>

        {/* ETAT */}

        <div className="mt-14 bg-white/5 border border-white/10 rounded-2xl p-8">

          <h2 className="text-2xl font-bold mb-6">
            Suivi des principales exigences
          </h2>

          <div className="space-y-4">

            <div className="flex justify-between border-b border-white/10 pb-3">
              <span>Gouvernance multipartite</span>
              <span className="text-green-400">✔ En cours</span>
            </div>

            <div className="flex justify-between border-b border-white/10 pb-3">
              <span>Cadre légal et institutionnel</span>
              <span className="text-green-400">✔ En cours</span>
            </div>

            <div className="flex justify-between border-b border-white/10 pb-3">
              <span>Collecte et divulgation des données</span>
              <span className="text-yellow-300">⏳ Suivi</span>
            </div>

            <div className="flex justify-between border-b border-white/10 pb-3">
              <span>Impact et résultats</span>
              <span className="text-yellow-300">⏳ En évaluation</span>
            </div>

          </div>

        </div>

      </div>

    </section>
  )
}