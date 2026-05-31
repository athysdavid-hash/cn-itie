"use client"

import Reveal from "./Reveal"

const goals = [
  "Renforcer la transparence extractive",
  "Publier les données ouvertes nationales",
  "Promouvoir la bonne gouvernance",
  "Impliquer la société civile et les citoyens",
]

export default function Mission() {
  return (
    <section className="py-24 px-4 bg-white overflow-hidden">

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT */}
        <Reveal>
          <div>

            <p className="text-cyan-600 uppercase tracking-[0.3em] font-black text-sm">
              Mission nationale
            </p>

            <h2 className="text-3xl lg:text-5xl font-black text-[#062b57] mt-6 leading-tight">

              Construire une transparence durable
              des ressources naturelles

            </h2>

            <p className="text-slate-600 text-lg leading-relaxed mt-8">

              Le Comité National ITIE Congo œuvre pour une gestion
              responsable et transparente des revenus issus des
              industries extractives au bénéfice des citoyens.

            </p>

            {/* GOALS */}
            <div className="space-y-5 mt-10">

              {goals.map((goal, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4"
                >

                  <div className="w-12 h-12 rounded-2xl bg-cyan-100 flex items-center justify-center text-cyan-700 font-black">

                    ✓

                  </div>

                  <p className="text-lg font-semibold text-[#062b57]">

                    {goal}

                  </p>

                </div>
              ))}

            </div>

          </div>
        </Reveal>

        {/* RIGHT */}
        <Reveal delay={0.2}>

          <div className="relative rounded-[40px] overflow-hidden bg-gradient-to-br from-[#062b57] to-[#0b4f91] p-10 min-h-[500px] shadow-2xl">

            {/* GLOW */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-cyan-400/20 rounded-full blur-3xl" />

            {/* CONTENT */}
            <div className="relative z-10 h-full flex flex-col justify-between">

              <div>

                <div className="w-24 h-24 rounded-[30px] bg-white/10 backdrop-blur-xl flex items-center justify-center text-5xl">

                  🌍

                </div>

                <h3 className="text-4xl font-black text-white mt-10 leading-tight">

                  Transparence
                  <br />

                  Participation
                  <br />

                  Gouvernance

                </h3>

              </div>

              <div className="grid grid-cols-2 gap-6 mt-16">

                <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-6">

                  <h4 className="text-4xl font-black text-white">

                    20+

                  </h4>

                  <p className="text-cyan-100 mt-3">

                    Années d’engagement

                  </p>

                </div>

                <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-6">

                  <h4 className="text-4xl font-black text-white">

                    100%

                  </h4>

                  <p className="text-cyan-100 mt-3">

                    Données publiques

                  </p>

                </div>

              </div>

            </div>

          </div>

        </Reveal>

      </div>

    </section>
  )
}