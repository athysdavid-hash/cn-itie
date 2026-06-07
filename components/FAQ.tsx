"use client"

import { useState } from "react"

const faqs = [
  {
    question: "Qu’est-ce que l’ITIE ?",
    answer:
      "L’Initiative pour la Transparence dans les Industries Extractives (ITIE) est une norme internationale qui impose la publication et la vérification des revenus issus du pétrole, du gaz et des mines afin de renforcer la transparence et la redevabilité.",
  },
  {
    question: "Quel est le rôle du Comité National ITIE Congo ?",
    answer:
      "Le Comité National ITIE Congo est l’organe tripartite chargé de la mise en œuvre de la norme ITIE. Il regroupe l’État, les entreprises extractives et la société civile pour superviser la production et la publication des rapports.",
  },
  {
    question: "Quels secteurs sont couverts par l’ITIE au Congo ?",
    answer:
      "Le périmètre couvre principalement les hydrocarbures (pétrole et gaz) et les industries minières, incluant la production, les exportations et les revenus fiscaux associés.",
  },
  {
    question: "Où consulter les données et rapports ITIE ?",
    answer:
      "Les rapports ITIE et les jeux de données ouverts sont disponibles dans les sections 'Rapports' et 'Open Data' du portail officiel du Comité National ITIE Congo.",
  },
  {
    question: "À quoi servent les données publiées par l’ITIE ?",
    answer:
      "Elles permettent de comparer les paiements des entreprises et les recettes perçues par l’État afin de garantir la transparence, réduire les écarts et renforcer la gouvernance du secteur extractif.",
  },
  {
    question: "Qui valide les rapports ITIE ?",
    answer:
      "Les rapports sont validés par le Comité National ITIE après production par un administrateur indépendant et vérification des données fournies par les parties prenantes.",
  },
]

export default function FAQ() {
  const [active, setActive] = useState<number | null>(0)

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-white to-[#f4f8fb]">

      <div className="max-w-4xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-8">

          <p className="text-cyan-600 uppercase tracking-[0.25em] font-black text-xs">
            Questions fréquentes
          </p>

          <h2 className="text-2xl lg:text-3xl font-black text-[#062b57] mt-2">
            FAQ CN-ITIE Congo
          </h2>

        </div>

        {/* QUESTIONS */}
        <div className="space-y-3">

          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white border border-slate-200 rounded-2xl overflow-hidden"
            >

              <button
                onClick={() =>
                  setActive(active === index ? null : index)
                }
                className="w-full flex items-center justify-between p-4 text-left"
              >

                <h3 className="font-bold text-[#062b57] text-sm lg:text-base">
                  {faq.question}
                </h3>

                <span
                  className={`text-cyan-600 text-xl transition ${
                    active === index ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>

              </button>

              <div
                className={`grid transition-all duration-300 ${
                  active === index
                    ? "grid-rows-[1fr]"
                    : "grid-rows-[0fr]"
                }`}
              >

                <div className="overflow-hidden">

                  <p className="px-4 pb-4 text-sm text-slate-600">
                    {faq.answer}
                  </p>

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  )
}