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
    <section className="py-6">

      <div className="bg-white rounded-[32px] border border-slate-200 shadow-sm overflow-hidden">

        {/* HEADER */}
        <div className="p-6 border-b border-slate-200">

          <p className="text-sm font-black tracking-[0.3em] text-cyan-600 uppercase">
            Secteurs
          </p>

          <h2 className="text-4xl font-black text-[#062b57] mt-4 leading-tight">
            Secteurs extractifs
          </h2>

          <p className="text-slate-500 text-lg mt-5 leading-relaxed max-w-3xl">
            Découvrez les principaux secteurs suivis par ITIE Congo
            et les indicateurs associés à la transparence extractive.
          </p>

        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-6 p-8">

          {sectors.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-[32px] bg-[#f4f8fb] border border-slate-200 p-8 hover:-translate-y-3 hover:shadow-2xl transition-all duration-500"
            >

              {/* GLOW */}
              <div
                className={`absolute top-0 right-0 w-[180px] h-[180px] bg-gradient-to-br ${item.color} opacity-10 blur-3xl rounded-full`}
              />

              <div className="relative z-10">

                {/* TOP */}
                <div className="flex items-center justify-between">

                  <div
                    className={`w-20 h-20 rounded-[26px] bg-gradient-to-br ${item.color} text-white flex items-center justify-center text-4xl shadow-2xl group-hover:scale-110 transition`}
                  >

                    {item.icon}

                  </div>

                  <span className="bg-white text-[#062b57] px-4 py-2 rounded-full text-sm font-black shadow-sm">
                    Actif
                  </span>

                </div>

                {/* TITLE */}
                <h3 className="text-4xl font-black text-[#062b57] mt-8">

                  {item.title}

                </h3>

                {/* DESC */}
                <p className="text-slate-600 leading-relaxed text-lg mt-5">

                  {item.desc}

                </p>

                {/* BUTTON */}
                <button
                  className={`mt-8 bg-gradient-to-r ${item.color} hover:scale-105 text-white px-6 py-4 rounded-2xl font-black shadow-xl transition`}
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