
import Link from "next/link"
import { permits } from "@/data/permits"
const sectors = [
  {
    slug: "hydrocarbures",
    title: "Hydrocarbures",
    desc: "Le pétrole et le gaz représentent l’essentiel des exportations et des recettes publiques du Congo.",
    icon: "🛢️",
    color: "from-cyan-500 to-blue-600",
  },

  {
    slug: "foret",
    title: "Forêt",
    desc: "Exploitation forestière durable : bois tropicaux (okoumé, sapelli, sipo) et exportations certifiées.",
    icon: "🌳",
    color: "from-green-500 to-emerald-600",
  },

  {
    slug: "mines",
    title: "Mines",
    desc: "Potasse, fer, or et polymétaux constituent le potentiel minier du pays.",
    icon: "⛏️",
    color: "from-yellow-500 to-orange-500",
  },
]

export default function Sectors() {
  return (
    <section className="py-2">

      <div className="bg-white rounded-[20px] border border-slate-200 shadow-sm overflow-hidden">

        {/* HEADER */}
        <div className="p-3 border-b border-slate-200">

          <p className="text-[10px] font-black tracking-[0.15em] text-cyan-600 uppercase">
            République du Congo
          </p>

          <h2 className="text-xl lg:text-2xl font-black text-[#062b57] mt-1">
            Secteurs économiques clés
          </h2>

          <p className="text-slate-500 text-xs mt-2">
            Hydrocarbures, forêts et mines — piliers des exportations nationales.
          </p>

        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-3 p-3">

          {sectors.map((item, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-[16px] bg-[#f4f8fb] border border-slate-200 p-4 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >

              {/* glow background */}
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
                    CN-ITIE
                  </span>

                </div>

                <h3 className="text-lg font-black text-[#062b57] mt-3">
                  {item.title}
                </h3>

                <p className="text-slate-600 text-xs mt-2 leading-relaxed">
                  {item.desc}
                </p>

                <Link
                  href={`/secteur/${item.slug}`}
                  className={`inline-block mt-3 bg-gradient-to-r ${item.color} text-white px-3 py-1.5 rounded-lg text-xs font-black hover:scale-105 transition-all duration-300`}
                >
                  Explorer
                </Link>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  )
}