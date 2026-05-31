"use client"

import { useState } from "react"

const faqs = [
  {
    question: "Qu’est-ce que l’ITIE ?",
    answer:
      "L’ITIE est une initiative internationale visant à renforcer la transparence dans la gestion des ressources extractives.",
  },
  {
    question: "Quels secteurs sont couverts ?",
    answer:
      "Le pétrole, les mines, les forêts ainsi que les autres industries extractives stratégiques.",
  },
  {
    question: "Où télécharger les rapports ?",
    answer:
      "Les rapports sont disponibles dans la section Rapports et Open Data du portail.",
  },
  {
    question: "Comment accéder aux données ouvertes ?",
    answer:
      "Toutes les données publiques sont accessibles via la plateforme Open Data du CN-ITIE.",
  },
]

export default function FAQ() {
  const [active, setActive] = useState<number | null>(0)

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-[#f4f8fb]">

      <div className="max-w-5xl mx-auto">

        {/* TITLE */}
        <div className="text-center mb-16">

          <p className="text-cyan-600 uppercase tracking-[0.3em] font-black text-sm">

            Questions fréquentes

          </p>

          <h2 className="text-3xl lg:text-5xl font-black text-[#062b57] mt-6 tracking-tight">

            FAQ du CN-ITIE Congo

          </h2>

        </div>

        {/* FAQ */}
        <div className="space-y-6">

          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-[24px] bg-white/70 backdrop-blur-xl border border-slate-200 overflow-hidden shadow-lg hover:shadow-cyan-500/10 transition-all duration-300"
            >

              <button
                onClick={() =>
                  setActive(active === index ? null : index)
                }
                className="w-full flex items-center justify-between text-left p-6 lg:p-8"
              >

                <h3 className="text-lg lg:text-xl font-black text-[#062b57]">

                  {faq.question}

                </h3>

                <div
                  className={`text-3xl font-light text-cyan-600 transition-all duration-300 ${
                    active === index ? "rotate-45" : ""
                  }`}
                >

                  +

                </div>

              </button>

              <div
                className={`grid transition-all duration-500 ${
                  active === index
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >

                <div className="overflow-hidden">

                  <p className="px-6 lg:px-8 pb-8 text-slate-600 leading-relaxed text-lg">

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