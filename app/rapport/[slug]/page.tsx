import { reports } from "@/data/reports"

export default async function ReportPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  const report = reports[slug as keyof typeof reports]

  if (!report) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f4f8fb]">
        <h1 className="text-4xl font-black text-red-600">
          Rapport introuvable
        </h1>
      </div>
    )
  }

  return (
    <main className="bg-[#f4f8fb] min-h-screen">

      {/* HERO */}
      <section className="relative h-[600px] overflow-hidden">

        <img
          src={report.image}
          alt={report.title}
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#02152d] via-[#02152d]/70 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex flex-col justify-end pb-16">

          <span className="bg-cyan-500/20 backdrop-blur px-4 py-2 rounded-full text-xs font-black uppercase tracking-wider text-cyan-200 w-fit">
            CN-ITIE Congo
          </span>

          <h1 className="text-5xl lg:text-7xl font-black text-white mt-6 leading-tight">
            {report.title}
          </h1>

          <p className="text-slate-200 mt-4 max-w-3xl text-lg leading-relaxed">
            Rapport officiel des industries extractives pour l’exercice {report.year}.
          </p>

        </div>

      </section>

      {/* STATS */}
      <section className="max-w-7xl mx-auto px-4 -mt-16 relative z-20">

        <div className="grid md:grid-cols-4 gap-6">

          <div className="bg-white rounded-3xl p-6 shadow-xl border border-slate-100">
            <p className="text-slate-500 text-sm">Année</p>
            <h3 className="text-3xl font-black text-[#062b57] mt-2">
              {report.year}
            </h3>
          </div>

          <div className="bg-white rounded-3xl p-6 shadow-xl border border-slate-100">
            <p className="text-slate-500 text-sm">Norme</p>
            <h3 className="text-3xl font-black text-[#062b57] mt-2">
              ITIE
            </h3>
          </div>

          <div className="bg-white rounded-3xl p-6 shadow-xl border border-slate-100">
            <p className="text-slate-500 text-sm">Pays</p>
            <h3 className="text-3xl font-black text-[#062b57] mt-2">
              Congo
            </h3>
          </div>

          <div className="bg-white rounded-3xl p-6 shadow-xl border border-slate-100">
            <p className="text-slate-500 text-sm">Statut</p>
            <h3 className="text-3xl font-black text-green-600 mt-2">
              Public
            </h3>
          </div>

        </div>

      </section>

      {/* RESUME */}
      <section className="max-w-7xl mx-auto px-4 py-12">

        <div className="bg-white rounded-[32px] p-10 shadow-xl border border-slate-100">

          <span className="text-cyan-600 font-black uppercase tracking-widest text-xs">
            Analyse
          </span>

          <h2 className="text-3xl font-black text-[#062b57] mt-3">
            Résumé exécutif
          </h2>

          <p className="text-slate-700 text-lg leading-9 mt-8 whitespace-pre-line">
            {report.summary}
          </p>

        </div>

      </section>

      {/* POINTS CLES */}
      <section className="max-w-7xl mx-auto px-4 pb-12">

        <div className="bg-white rounded-[32px] p-10 shadow-xl border border-slate-100">

          <span className="text-cyan-600 font-black uppercase tracking-widest text-xs">
            Résultats
          </span>

          <h2 className="text-3xl font-black text-[#062b57] mt-3 mb-8">
            Points clés
          </h2>

          <div className="grid md:grid-cols-2 gap-4">

            {report.highlights.map((item, index) => (
              <div
                key={index}
                className="bg-cyan-50 border border-cyan-100 rounded-2xl p-5"
              >
                <p className="font-semibold text-[#062b57]">
                  ✓ {item}
                </p>
              </div>
            ))}

          </div>

        </div>

      </section>

      {/* RECOMMANDATIONS */}
      <section className="max-w-7xl mx-auto px-4 pb-12">

        <div className="bg-white rounded-[32px] p-10 shadow-xl border border-slate-100">

          <span className="text-cyan-600 font-black uppercase tracking-widest text-xs">
            Actions
          </span>

          <h2 className="text-3xl font-black text-[#062b57] mt-3 mb-8">
            Recommandations
          </h2>

          <div className="space-y-4">

            {report.recommendations.map((item, index) => (
              <div
                key={index}
                className="border-l-4 border-cyan-500 pl-5 py-2 bg-slate-50 rounded-r-xl"
              >
                <p className="text-slate-700 font-medium">
                  {item}
                </p>
              </div>
            ))}

          </div>

        </div>

      </section>

      {/* DOWNLOAD */}
      <section className="max-w-7xl mx-auto px-4 pb-20">

        <div className="bg-gradient-to-r from-[#062b57] to-[#0b4d91] rounded-[32px] p-12 text-center text-white shadow-2xl">

          <span className="text-cyan-300 uppercase tracking-[0.25em] text-xs font-black">
            Téléchargement officiel
          </span>

          <h2 className="text-4xl font-black mt-4">
            Rapport complet ITIE
          </h2>

          <p className="text-slate-200 mt-4 max-w-3xl mx-auto">
            Accédez à la publication officielle du Comité National ITIE Congo pour l’exercice {report.year}.
          </p>

          <a
            href={report.pdf}
            target="_blank"
            className="inline-flex mt-8 bg-white text-[#062b57] px-8 py-4 rounded-2xl font-black hover:scale-105 transition-all duration-300"
          >
            📥 Télécharger le PDF
          </a>

        </div>

      </section>

    </main>
  )
}