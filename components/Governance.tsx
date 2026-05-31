const governance = [
  {
    title: "État",
    desc: "Institutions publiques et ministères impliqués dans la gouvernance extractive.",
    icon: "🏛️",
    color: "from-blue-600 to-cyan-500",
  },
  {
    title: "Entreprises",
    desc: "Participation des sociétés extractives au processus ITIE Congo.",
    icon: "🏢",
    color: "from-yellow-500 to-orange-500",
  },
  {
    title: "Société civile",
    desc: "Engagement des organisations citoyennes pour la transparence.",
    icon: "🤝",
    color: "from-green-500 to-emerald-600",
  },
]

export default function Governance() {
  return (
    <section className="py-24 px-4 bg-white">

      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="text-center max-w-4xl mx-auto mb-16">

          <p className="text-sm font-black tracking-[0.3em] text-cyan-600 uppercase">
            Gouvernance
          </p>

          <h2 className="text-4xl lg:text-6xl font-black text-[#062b57] mt-5 leading-tight">
            Une gouvernance multipartite et transparente
          </h2>

          <p className="text-slate-500 text-xl mt-6 leading-relaxed">
            Le Comité National ITIE Congo repose sur la collaboration
            entre l’État, les entreprises extractives et la société civile.
          </p>

        </div>

        {/* GRID */}
        <div className="grid lg:grid-cols-3 gap-10">

          {governance.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-[30px] bg-[#f4f8fb] border border-slate-200 p-10 hover:shadow-2xl hover:-translate-y-4 transition-all duration-500"
            >

              {/* GLOW */}
              <div
                className={`absolute top-0 right-0 w-[240px] h-[240px] bg-gradient-to-br ${item.color} opacity-10 blur-3xl`}
              />

              <div className="relative z-10">

                {/* ICON */}
                <div
                  className={`w-24 h-24 rounded-[28px] bg-gradient-to-br ${item.color} text-white flex items-center justify-center text-4xl shadow-2xl group-hover:scale-110 transition`}
                >

                  {item.icon}

                </div>

                {/* TITLE */}
                <h3 className="text-4xl font-black text-[#062b57] mt-6">

                  {item.title}

                </h3>

                {/* DESC */}
                <p className="text-slate-600 leading-relaxed text-lg mt-6">

                  {item.desc}

                </p>

                {/* BUTTON */}
                <button className="mt-6 bg-[#062b57] hover:bg-cyan-600 text-white px-7 py-4 rounded-2xl font-black transition">

                  Explorer

                </button>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  )
}