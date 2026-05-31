"use client"

import Reveal from "./Reveal"

const services = [
  {
    title: "Open Data",
    description:
      "Accédez aux données ouvertes des industries extractives du Congo.",
    icon: "📊",
  },
  {
    title: "Rapports ITIE",
    description:
      "Consultez les rapports officiels de transparence extractive.",
    icon: "📘",
  },
  {
    title: "Cartographie",
    description:
      "Visualisez les permis, sites et zones extractives interactives.",
    icon: "🗺️",
  },
]

export default function Services() {
  return (
  <Reveal>
    <section className="py-4 px-4 bg-red-200">

      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="text-center max-w-4xl mx-auto mb-16">

          <p className="text-cyan-600 uppercase tracking-[0.3em] font-black text-sm">
            Services
          </p>

          <h2 className="text-3xl lg:text-4xl font-black text-[#062b57] tracking-tight mt-6 leading-tight">
            Plateforme numérique ITIE Congo
          </h2>

          <p className="text-slate-500 text-lg mt-6 leading-relaxed">
            Explorez les services numériques et outils de transparence
            du Comité National ITIE Congo.
          </p>

        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

          {services.map((service, index) => (
            <Reveal
  key={index}
  delay={index * 0.15}
>

              <div className="group relative bg-[#f4f8fb] border border-slate-200 rounded-[24px] lg:rounded-[32px] p-6 lg:p-8 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-cyan-500/20 hover:shadow-2xl transition-all duration-500 overflow-hidden">

                {/* GLOW */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-400/10 rounded-full blur-3xl" />

                {/* CONTENT */}
                <div className="relative z-10">

                  {/* ICON */}
                  <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-4xl text-white shadow-xl">

                    {service.icon}

                  </div>

                  {/* TITLE */}
                  <h3 className="text-2xl font-black text-[#062b57] mt-6">

                    {service.title}

                  </h3>

                  {/* DESCRIPTION */}
                  <p className="text-slate-500 leading-relaxed mt-4">

                    {service.description}

                  </p>

                  {/* BUTTON */}
                  <button className="mt-6 bg-[#062b57] hover:bg-cyan-600 transition text-white px-6 py-4 rounded-2xl font-black">

                    Explorer →

                  </button>

                </div>

              </div>

            </Reveal>
          ))}

        </div>

      </div>

    </section>
    </Reveal>
  )
}