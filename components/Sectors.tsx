const sectors = [
  {
    title: "Hydrocarbures",
    desc: "Production pétrolière offshore et revenus énergétiques nationaux.",
    icon: "🛢️",
    color: "from-cyan-500 to-blue-600",
  },
  {
    title: "Mines",
    desc: "Exploitation minière et gestion des ressources naturelles.",
    icon: "⛏️",
    color: "from-yellow-500 to-orange-500",
  },
  {
    title: "Foresterie",
    desc: "Suivi des activités forestières et durabilité environnementale.",
    icon: "🌳",
    color: "from-green-500 to-emerald-600",
  },
  {
    title: "Open Data",
    desc: "Publication des données extractives et transparence numérique.",
    icon: "📊",
    color: "from-indigo-500 to-purple-600",
  },
]

export default function Sectors() {
  return (
    <section className="py-4">

      <div className="bg-white rounded-[24px] border border-slate-200 shadow-sm overflow-hidden">

        {/* HEADER */}
        <div className="p-4 border-b border-slate-200">

          <p className="text-xs font-black tracking-[0.2em] text-cyan-600 uppercase">
            Secteurs
          </p>

          <h2 className="text-2xl lg:text-3xl font-black text-[#062b57] mt-2">
            Secteurs extractifs
          </h2>

          <p className="text-slate-500 text-sm mt-3 max-w-2xl">
            Découvrez les principaux secteurs suivis par ITIE Congo.
          </p>

        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-4 p-4">

          {sectors.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-[20px] bg-[#f4f8fb] border border-slate-200 p-5 hover:shadow-lg transition-all duration-300"
            >

              <div
                className={`absolute top-0 right-0 w-[100px] h-[100px] bg-gradient-to-br ${item.color} opacity-10 blur-2xl rounded-full`}
              />

              <div className="relative z-10">

                <div className="flex items-center justify-between">

                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} text-white flex items-center justify-center text-2xl`}
                  >
                    {item.icon}
                  </div>

                  <span className="bg-white text-[#062b57] px-2 py-1 rounded-full text-xs font-black">
                    Actif
                  </span>

                </div>

                <h3 className="text-xl font-black text-[#062b57] mt-4">
                  {item.title}
                </h3>

                <p className="text-slate-600 text-sm mt-2 leading-relaxed">
                  {item.desc}
                </p>

                <button
                  className={`mt-4 bg-gradient-to-r ${item.color} text-white px-4 py-2 rounded-xl text-sm font-black`}
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