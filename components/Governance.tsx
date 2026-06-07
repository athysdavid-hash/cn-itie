"use client"

import { useState } from "react"

export default function Governance() {
  const [selected, setSelected] = useState<any>(null)

  const governance = [
    {
      title: "Comité national ITIE Congo",
      icon: "🏛️",
      color: "from-blue-600 to-cyan-500",
      desc: "Organe multipartite chargé de superviser la mise en œuvre de la norme ITIE.",
      details: {
        role: "Organe de gouvernance stratégique",
        mission:
          "Assurer la mise en œuvre et le suivi de la norme ITIE au niveau national",
        responsibilities: [
          "Validation des rapports ITIE",
          "Supervision du processus de transparence",
          "Coordination des parties prenantes",
        ],
        interaction:
          "Coordonne l’ensemble des acteurs : État, entreprises et société civile",
      },
    },
    {
      title: "État (Ministères & administrations)",
      icon: "🏢",
      color: "from-indigo-500 to-blue-500",
      desc: "Ministères des Hydrocarbures, Mines, Finances, Douanes et Trésor.",
      details: {
        role: "Autorité publique",
        mission: "Collecter, gérer et publier les revenus extractifs",
        responsibilities: [
          "Collecte des taxes et royalties",
          "Gestion des revenus pétroliers et miniers",
          "Transmission des données au processus ITIE",
        ],
        interaction: "Fournit les données officielles au Comité ITIE",
      },
    },
    {
      title: "Entreprises extractives",
      icon: "⛽",
      color: "from-yellow-500 to-orange-500",
      desc: "Sociétés pétrolières et minières opérant au Congo.",
      details: {
        role: "Opérateurs économiques",
        mission: "Déclarer les paiements effectués à l’État",
        responsibilities: [
          "Déclaration des taxes et redevances",
          "Reporting financier ITIE",
          "Respect des obligations de transparence",
        ],
        interaction: "Transmettent leurs données à l’État et au secrétariat ITIE",
      },
    },
    {
      title: "Société civile",
      icon: "🤝",
      color: "from-green-500 to-emerald-600",
      desc: "Acteurs indépendants de contrôle et de transparence.",
      details: {
        role: "Contrôle citoyen indépendant",
        mission: "Assurer la transparence et la redevabilité publique",
        responsibilities: [
          "Analyse des rapports ITIE",
          "Plaidoyer pour la transparence",
          "Sensibilisation citoyenne",
        ],
        interaction: "Surveille et évalue les données publiques",
      },
    },
    {
      title: "Secrétariat permanent ITIE",
      icon: "📊",
      color: "from-purple-500 to-pink-500",
      desc: "Structure opérationnelle de coordination et de suivi.",
      details: {
        role: "Organe technique permanent",
        mission:
          "Coordonner la collecte des données et la production des rapports ITIE",
        responsibilities: [
          "Collecte des données",
          "Préparation des rapports ITIE",
          "Suivi des indicateurs de transparence",
        ],
        interaction:
          "Interface entre l’État, les entreprises et la société civile",
      },
    },
  ]

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <p className="text-xs font-black tracking-[0.25em] text-cyan-600 uppercase">
            Gouvernance ITIE
          </p>

          <h2 className="text-3xl lg:text-4xl font-black text-[#062b57] mt-3">
            Structure de gouvernance multipartite
          </h2>

          <p className="text-slate-500 text-sm mt-4 leading-relaxed">
            La gouvernance de l’ITIE repose sur un modèle multipartite réunissant
            l’État, les entreprises extractives et la société civile afin d’assurer
            la transparence des revenus issus du pétrole, du gaz et des mines.
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {governance.map((item, index) => (
            <div
              key={index}
              className="
                group relative overflow-hidden rounded-2xl
                bg-[#f4f8fb] border border-slate-200 p-6
                hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02]
                transition-all duration-500
              "
            >
              {/* glow */}
              <div
                className={`absolute top-0 right-0 w-[140px] h-[140px]
                bg-gradient-to-br ${item.color}
                opacity-10 blur-3xl`}
              />

              <div className="relative z-10">

                {/* icon */}
                <div
                  className={`
                    w-14 h-14 rounded-xl
                    bg-gradient-to-br ${item.color}
                    text-white flex items-center justify-center
                    text-2xl shadow-lg
                    group-hover:rotate-6 group-hover:scale-110
                    transition-all duration-500
                  `}
                >
                  {item.icon}
                </div>

                {/* title */}
                <h3 className="text-xl font-black text-[#062b57] mt-4">
                  {item.title}
                </h3>

                {/* desc */}
                <p className="text-slate-600 text-sm mt-3 leading-relaxed">
                  {item.desc}
                </p>

                {/* button */}
                <button
                  onClick={() => setSelected(item)}
                  className="
                    mt-5 bg-[#062b57] hover:bg-cyan-600
                    text-white px-4 py-2 rounded-xl
                    text-sm font-bold transition-all duration-300
                  "
                >
                  Voir détails
                </button>
              </div>

              {/* bottom line */}
              <div
                className="
                  absolute bottom-0 left-0 h-1 w-0
                  group-hover:w-full
                  bg-gradient-to-r from-cyan-400 to-blue-500
                  transition-all duration-700
                "
              />
            </div>
          ))}
        </div>

        {/* MODAL */}
        {selected && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
            <div className="bg-white max-w-xl w-full rounded-2xl p-6">

              <h2 className="text-2xl font-black text-[#062b57]">
                {selected.title}
              </h2>

              <p className="text-sm text-slate-600 mt-2">
                {selected.desc}
              </p>

              <div className="mt-5 text-sm space-y-4">

                <div>
                  <strong>Rôle :</strong> {selected.details.role}
                </div>

                <div>
                  <strong>Mission :</strong> {selected.details.mission}
                </div>

                <div>
                  <strong>Responsabilités :</strong>
                  <ul className="list-disc ml-5 mt-1 text-slate-600">
                    {selected.details.responsibilities.map(
                      (r: string, i: number) => (
                        <li key={i}>{r}</li>
                      )
                    )}
                  </ul>
                </div>

                <div>
                  <strong>Interaction :</strong> {selected.details.interaction}
                </div>
              </div>

              <button
                onClick={() => setSelected(null)}
                className="mt-6 w-full bg-[#062b57] hover:bg-cyan-600 text-white py-2 rounded-xl font-bold"
              >
                Fermer
              </button>
            </div>
          </div>
        )}

        {/* FOOTER */}
        <div className="mt-12 text-center text-xs text-slate-500">
          Norme ITIE – Transparence des industries extractives en République du Congo
        </div>

      </div>
    </section>
  )
}