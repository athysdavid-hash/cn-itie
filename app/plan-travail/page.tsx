export default function PlanTravailPage() {
  const plans = [
    {
      title: "Plan de travail 2024",
      desc: "Plan annuel des activités de la CN-ITIE République du Congo.",
      file: "/docs/plan-travail/plan-2024.pdf",
    },
    {
      title: "Plan de travail 2025",
      desc: "Programme de mise en œuvre des activités ITIE.",
      file: "/docs/plan-travail/plan-2025.pdf",
    },
    {
      title: "Plan de travail 2026",
      desc: "Planification stratégique et opérationnelle.",
      file: "/docs/plan-travail/plan-2026.pdf",
    },
    {
      title: "Plan stratégique",
      desc: "Vision et orientations de la CN-ITIE.",
      file: "/docs/plan-travail/plan-strategique.pdf",
    },
  ]

  return (
    <section className="bg-[#061f3a] min-h-screen py-20 text-white">

      <div className="max-w-6xl mx-auto px-6">

        <h1 className="text-4xl font-black">
          Plan de travail
        </h1>

        <p className="text-slate-400 mt-3 mb-10 max-w-3xl leading-7">
          Les plans de travail définissent les objectifs, les activités et les
          actions prioritaires de la CN-ITIE République du Congo afin de mettre
          en œuvre efficacement la Norme ITIE et de renforcer la transparence
          dans les industries extractives.
        </p>

        <div className="grid md:grid-cols-2 gap-6">

          {plans.map((plan, index) => (

            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-cyan-400/40 transition"
            >

              <h2 className="text-xl font-bold">
                {plan.title}
              </h2>

              <p className="text-slate-400 mt-2">
                {plan.desc}
              </p>

              <a
                href={plan.file}
                target="_blank"
                className="inline-block mt-5 px-4 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-600 transition"
              >
                📥 Télécharger le document
              </a>

            </div>

          ))}

        </div>

        <div className="mt-12 bg-white/5 border border-white/10 rounded-2xl p-6">

          <h2 className="text-2xl font-bold mb-4">
            Objectifs du plan de travail
          </h2>

          <ul className="space-y-3 text-slate-300">

            <li>✔ Renforcer la transparence du secteur extractif.</li>

            <li>✔ Améliorer la divulgation des données ITIE.</li>

            <li>✔ Mettre en œuvre les recommandations issues des rapports ITIE.</li>

            <li>✔ Développer la participation des parties prenantes.</li>

            <li>✔ Suivre les progrès liés à la validation ITIE.</li>

          </ul>

        </div>

      </div>

    </section>
  )
}