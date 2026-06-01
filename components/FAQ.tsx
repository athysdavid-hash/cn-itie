"use client"

import { useState } from "react"

const faqs = [
  {
    question: "Qu’est-ce que l’ITIE ?",
    answer:
      "Initiative internationale visant à renforcer la transparence dans les industries extractives.",
  },
  {
    question: "Quels secteurs sont couverts ?",
    answer:
      "Hydrocarbures, mines, forêts et autres ressources extractives.",
  },
  {
    question: "Où télécharger les rapports ?",
    answer:
      "Dans les sections Rapports et Open Data du portail.",
  },
  {
    question: "Comment accéder aux données ouvertes ?",
    answer:
      "Via la plateforme Open Data du Comité National ITIE Congo.",
  },
]

export default function FAQ() {
  const [active, setActive] = useState<number | null>(0)

  return (
    <section className="py-12 px-4 bg-gradient-to-b from-white to-[#f4f8fb]">

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