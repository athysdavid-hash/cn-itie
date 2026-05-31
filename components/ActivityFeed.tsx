"use client"

import Reveal from "./Reveal"

const activities = [
  {
    title: "Publication du rapport 2025",
    date: "Il y a 2 jours",
    color: "bg-cyan-500",
  },
  {
    title: "Mise à jour Open Data",
    date: "Il y a 5 jours",
    color: "bg-emerald-500",
  },
  {
    title: "Validation du comité national",
    date: "Cette semaine",
    color: "bg-yellow-500",
  },
  {
    title: "Ajout des statistiques minières",
    date: "Ce mois",
    color: "bg-blue-500",
  },
]

export default function ActivityFeed() {
  return (
    <section className="py-24 px-4 bg-[#f4f8fb] group overflow-hidden">

      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-16">

          <p className="text-cyan-600 uppercase tracking-[0.3em] font-black text-sm">
            Activités
          </p>

          <h2 className="text-3xl lg:text-5xl font-black text-[#062b57] tracking-tight mt-6">
            Activités récentes
          </h2>

        </div>

        {/* FEED */}
        <div className="space-y-6">

          {activities.map((item, index) => (
            <Reveal
              key={index}
              delay={index * 0.12}
            >

              <div className="group flex items-center gap-6 bg-white rounded-[30px] p-6 border border-slate-200 hover:shadow-cyan-500/20 hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">

                {/* DOT */}
                <div className={`w-5 h-5 rounded-full ${item.color}`} />

                {/* CONTENT */}
                <div className="flex-1">

                  <h3 className="text-xl font-black text-[#062b57] group-hover:text-cyan-600 transition-colors">

                    {item.title}

                  </h3>

                  <p className="text-slate-500 mt-2">

                    {item.date}

                  </p>

                </div>

                {/* ICON */}
                <div className="w-14 h-14 rounded-2xl bg-[#f4f8fb] flex items-center justify-center text-2xl group-hover:rotate-12 transition-all duration-300">

                  ⚡

                </div>

              </div>

            </Reveal>
          ))}

        </div>

      </div>

    </section>
  )
}