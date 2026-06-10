import Link from "next/link"

const sectors = [
  {
    slug: "hydrocarbures",
    title: "Hydrocarbures",
    icon: "🛢️",
    color: "from-cyan-500 to-blue-600",
    desc:
      "Pétrole, gaz naturel et contrats de partage de production (CPP). Secteur principal des revenus de l’État.",
    docs: [
      "📄 Contrats pétroliers",
      "📍 Permis d’exploration",
      "⚖️ Code des hydrocarbures",
      "📊 Production nationale",
      "💰 Revenus extractifs",
    ],
  },

  {
    slug: "foret",
    title: "Forêt",
    icon: "🌳",
    color: "from-green-500 to-emerald-600",
    desc:
      "Exploitation forestière durable des concessions et exportation de bois certifié.",
    docs: [
      "📄 Concessions forestières",
      "📍 Permis d’exploitation forestière",
      "⚖️ Code forestier",
      "📊 Production bois",
      "🌱 Gestion durable",
    ],
  },

  {
    slug: "mines",
    title: "Mines",
    icon: "⛏️",
    color: "from-yellow-500 to-orange-500",
    desc:
      "Exploitation minière du fer, de la potasse, de l’or et des polymétaux.",
    docs: [
      "📄 Conventions minières",
      "📍 Permis miniers",
      "⚖️ Code minier",
      "📊 Production minière",
      "💰 Redevances extractives",
    ],
  },
]

export default function Sectors() {
  return (
    <section className="py-6">

      <div className="bg-white rounded-[26px] border border-slate-200 shadow-sm overflow-hidden">

        {/* HEADER */}
        <div className="px-6 py-5 border-b border-slate-200">

          <p className="text-[10px] font-black tracking-[0.25em] uppercase text-cyan-600">
            CN-ITIE Congo
          </p>

          <h2 className="text-2xl font-black text-[#062b57] mt-1">
            Secteurs extractifs
          </h2>

          <p className="text-sm text-slate-500 mt-2 max-w-2xl">
            Hydrocarbures, forêt et mines : accès centralisé aux contrats,
            permis, lois et données de production.
          </p>

        </div>

        {/* GRID */}
        <div className="grid lg:grid-cols-3 gap-5 p-5">

          {sectors.map((sector) => (
            <div
              key={sector.slug}
              className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-[#f8fbfd] hover:shadow-2xl transition-all duration-300"
            >

              {/* glow */}
              <div
                className={`absolute top-0 right-0 w-44 h-44 bg-gradient-to-br ${sector.color} opacity-10 blur-3xl`}
              />

              <div className="relative p-6">

                {/* icon */}
                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${sector.color} text-white flex items-center justify-center text-2xl shadow-lg`}
                >
                  {sector.icon}
                </div>

                {/* title */}
                <h3 className="text-xl font-black text-[#062b57] mt-4">
                  {sector.title}
                </h3>

                {/* desc */}
                <p className="text-sm text-slate-600 mt-3 leading-relaxed">
                  {sector.desc}
                </p>

               {/* DOCUMENTS */}
<div className="mt-5 space-y-2">

  {sector.docs.map((doc, i) => {
    // on détecte les permis
    const isPermis = doc.includes("Permis")

    return (
      <div
        key={i}
        className="flex items-center justify-between text-sm text-slate-700 bg-white border border-slate-200 rounded-xl px-3 py-2 hover:bg-slate-50 transition"
      >
        <span>{doc}</span>

        {isPermis && (
          <Link
            href={`/secteur/${sector.slug}/permis`}
            className="text-cyan-600 font-black text-xs hover:underline"
          >
            ouvrir →
          </Link>
        )}
      </div>
    )
  })}

</div>

                {/* button */}
                <Link
                  href={`/secteur/${sector.slug}`}
                  className={`mt-6 inline-flex items-center gap-2 bg-gradient-to-r ${sector.color} text-white px-4 py-2 rounded-xl font-black text-sm hover:scale-105 transition`}
                >
                  Explorer →
                </Link>

              </div>
            </div>
          ))}

        </div>

      </div>

    </section>
  )
}