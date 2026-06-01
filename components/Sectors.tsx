const sectors = [
  {
    title: "Hydrocarbures",
    desc: "Production pétrolière et revenus énergétiques.",
    icon: "🛢️",
    color: "from-cyan-500 to-blue-600",
  },
  {
    title: "Mines",
    desc: "Exploitation et gestion des ressources minières.",
    icon: "⛏️",
    color: "from-yellow-500 to-orange-500",
  },
  {
    title: "Foresterie",
    desc: "Suivi des activités forestières.",
    icon: "🌳",
    color: "from-green-500 to-emerald-600",
  },
  {
    title: "Open Data",
    desc: "Données extractives et transparence.",
    icon: "📊",
    color: "from-indigo-500 to-purple-600",
  },
]

export default function Sectors() {
  return (
    <section className="py-2">

      <div className="bg-white rounded-[20px] border border-slate-200 shadow-sm overflow-hidden">

        {/* HEADER */}
        <div className="p-3 border-b border-slate-200">

          <p className="text-[10px] font-black tracking-[0.15em] text-cyan-600 uppercase">
            Secteurs
          </p>

          <h2 className="text-xl lg:text-2xl font-black text-[#062b57] mt-1">
            Secteurs extractifs
          </h2>

          <p className="text-slate-500 text-xs mt-2">
            Principaux secteurs suivis par l'ITIE Congo.
          </p>

        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-3 p-3">

          {sectors.map((item, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-[16px] bg-[#f4f8fb] border border-slate-200 p-4 hover:shadow-md transition"
            >

              <div
                className={`absolute top-0 right-0 w-16 h-16 bg-gradient-to-br ${item.color} opacity-10 blur-xl rounded-full`}
              />

              <div className="relative z-10">

                <div className="flex items-center justify-between">

                  <div
                    className={`w-10 h-10 rounded-lg bg-gradient-to-br ${item.color} text-white flex items-center justify-center text-lg`}
                  >
                    {item.icon}
                  </div>

                  <span className="bg-white text-[#062b57] px-2 py-1 rounded-full text-[10px] font-black">
                    Actif
                  </span>

                </div>

                <h3 className="text-lg font-black text-[#062b57] mt-3">
                  {item.title}
                </h3>

                <p className="text-slate-600 text-xs mt-2 leading-relaxed">
                  {item.desc}
                </p>

                <button
                  className={`mt-3 bg-gradient-to-r ${item.color} text-white px-3 py-1.5 rounded-lg text-xs font-black`}
                >
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