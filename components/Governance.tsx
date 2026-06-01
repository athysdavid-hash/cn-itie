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
    desc: "Contribution des organisations citoyennes à la transparence.",
    icon: "🤝",
    color: "from-green-500 to-emerald-600",
  },
]

export default function Governance() {
  return (
    <section className="py-12 px-4 bg-white">

      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-10">

          <p className="text-xs font-black tracking-[0.25em] text-cyan-600 uppercase">
            Gouvernance
          </p>

          <h2 className="text-3xl lg:text-4xl font-black text-[#062b57] mt-3">
            Gouvernance multipartite
          </h2>

          <p className="text-slate-500 text-sm mt-4 leading-relaxed">
            Collaboration entre l'État, les entreprises et la société civile.
          </p>

        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-5">

          {governance.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-[22px] bg-[#f4f8fb] border border-slate-200 p-5 hover:shadow-xl transition"
            >

              <div
                className={`absolute top-0 right-0 w-28 h-28 bg-gradient-to-br ${item.color} opacity-10 blur-2xl`}
              />

              <div className="relative z-10">

                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} text-white flex items-center justify-center text-2xl shadow-lg`}
                >
                  {item.icon}
                </div>

                <h3 className="text-2xl font-black text-[#062b57] mt-4">
                  {item.title}
                </h3>

                <p className="text-slate-600 text-sm leading-relaxed mt-3">
                  {item.desc}
                </p>

                <button className="mt-4 bg-[#062b57] text-white px-4 py-2 rounded-xl text-sm font-black">
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