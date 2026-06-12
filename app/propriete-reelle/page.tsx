"use client"

export default function ProprieteReellePage() {

  const documents = [
    {
      title: "Rapport du registre & rapport final du consultant",
      desc: "Analyse complète du registre des bénéficiaires effectifs et validation par le consultant ITIE",
      files: [
        "/docs/propriete-reelle/rapport-registre-consultant.pdf"
      ]
    },
    {
      title: "Modèle de registre & base de données des bénéficiaires effectifs",
      desc: "Outil standard de collecte et structuration des données sur la propriété réelle",
      files: [
        "/docs/propriete-reelle/modele-registre-beneficiaires.pdf",
        "/docs/propriete-reelle/base-donnees-beneficiaires.pdf"
      ]
    },
    {
      title: "Rapport des ateliers de sensibilisation",
      desc: "Ateliers organisés à Brazzaville et Pointe-Noire sur la transparence des bénéficiaires effectifs",
      files: [
        "/docs/propriete-reelle/rapport-ateliers-sensibilisation.pdf"
      ]
    },

    /* 🔥 NOUVEAUX AJOUTS */
    {
      title: "Loi sur les bénéficiaires effectifs (2024)",
      desc: "Cadre juridique actualisé définissant les obligations de transparence des entreprises extractives",
      files: [
        "/docs/propriete-reelle/loi-beneficiaires-effectifs-2024.pdf"
      ]
    },
    {
      title: "Feuille de route sur la propriété réelle",
      desc: "Plan stratégique de mise en œuvre de la transparence des bénéficiaires effectifs en République du Congo",
      files: [
        "/docs/propriete-reelle/feuille-route-propriete-reelle.pdf"
      ]
    }
  ]

  return (
    <section className="bg-[#061f3a] min-h-screen py-20 text-white">

      <div className="max-w-6xl mx-auto px-6">

        <h1 className="text-3xl font-black">
          Propriété réelle
        </h1>

        <p className="text-slate-400 mt-2 mb-10 max-w-2xl">
          Registre des bénéficiaires effectifs et documents de transparence ITIE.
        </p>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-6">

          {documents.map((doc, i) => (
            <div
              key={i}
              className="bg-white/5 border border-white/10 rounded-2xl p-6"
            >

              <h3 className="text-lg font-bold">
                {doc.title}
              </h3>

              <p className="text-slate-400 text-sm mt-2">
                {doc.desc}
              </p>

              <div className="mt-4 space-y-2">
                {doc.files.map((file, j) => (
                  <a
                    key={j}
                    href={file}
                    target="_blank"
                    className="block text-cyan-300 hover:text-cyan-200 transition"
                  >
                    📥 Télécharger PDF {j + 1}
                  </a>
                ))}
              </div>

            </div>
          ))}

        </div>

        {/* INFO BLOCK */}
        <div className="mt-12 bg-white/5 border border-white/10 rounded-2xl p-6">

          <h2 className="text-xl font-bold mb-3">
            À propos de la propriété réelle
          </h2>

          <p className="text-slate-400 leading-7">
            La propriété réelle identifie les personnes physiques qui contrôlent réellement les entreprises extractives.
            Elle renforce la transparence et la lutte contre la corruption dans le secteur extractif congolais.
          </p>

        </div>

      </div>
    </section>
  )
}