const governance = [
  {
    title: "État",
    desc: "Institutions publiques impliquées dans la gouvernance extractive.",
    icon: "🏛️",
    color: "from-blue-600 to-cyan-500",
  },
  {
    title: "Entreprises",
    desc: "Participation des sociétés extractives au processus ITIE.",
    icon: "🏢",
    color: "from-yellow-500 to-orange-500",
  },
  {
    title: "Société civile",
    desc: "Engagement citoyen pour la transparence des ressources.",
    icon: "🤝",
    color: "from-green-500 to-emerald-600",
  },
]

export default function Governance() {
  return (
    <section className="py-12 px-4 bg-white">

      <div className="max-w-7xl mx-auto">

        <div className="text-center max-w-3xl mx-auto mb-8">

          <p className="text-xs font-black tracking-[0.25em] text-cyan-600 uppercase">
            Gouvernance
          </p>

          <h2 className="text-3xl lg:text-4xl font-black text-[#062b57] mt-3">
            Gouvernance multipartite
          </h2>

          <p className="text-slate-500 text-sm mt-3 leading-relaxed">
            Collaboration entre l'État, les entreprises extractives
            et la société civile pour renforcer la transparence.
          </p>

        </div>

        <div className="grid lg:grid-cols-3 gap-4">

          {governance.map((item, index) => (
            <div
              key={index}
              className="
                group
                relative
                overflow-hidden
                rounded-2xl
                bg-[#f4f8fb]
                border
                border-slate-200
                p-5
                hover:shadow-2xl
                hover:-translate-y-3
                hover:scale-[1.03]
                transition-all
                duration-500
              "
            >

              <div
                className={`absolute top-0 right-0 w-[120px] h-[120px]
                bg-gradient-to-br ${item.color}
                opacity-10 blur-3xl`}
              />

              <div className="relative z-10">

                <div
                  className={`
                    w-14 h-14 rounded-xl
                    bg-gradient-to-br ${item.color}
                    text-white
                    flex items-center justify-center
                    text-2xl
                    shadow-lg
                    group-hover:rotate-12
                    group-hover:scale-110
                    transition-all
                    duration-500
                  `}
                >
                  {item.icon}
                </div>

                <h3 className="text-xl font-black text-[#062b57] mt-4">
                  {item.title}
                </h3>

                <p className="text-slate-600 text-sm leading-relaxed mt-3">
                  {item.desc}
                </p>

                <button
                  className="
                    mt-4
                    bg-[#062b57]
                    hover:bg-cyan-600
                    hover:scale-105
                    hover:shadow-xl
                    text-white
                    px-4
                    py-2
                    rounded-xl
                    text-sm
                    font-black
                    transition-all
                    duration-300
                  "
                >
                  Explorer
                </button>

              </div>

              <div
                className="
                  absolute
                  bottom-0
                  left-0
                  h-1
                  w-0
                  group-hover:w-full
                  bg-gradient-to-r
                  from-cyan-400
                  to-blue-500
                  transition-all
                  duration-700
                "
              />

            </div>
          ))}

        </div>

      </div>

    </section>
  )
}