export default function CTA() {
  return (
    <section className="py-8 px-4">

      <div className="max-w-7xl mx-auto">

        <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-r from-[#062b57] via-[#0b4d91] to-cyan-600 text-white shadow-2xl">

          {/* GLOW */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/70 backdrop-blur-xl rounded-full" />

          <div className="relative z-10 px-10 py-16 lg:px-16 lg:py-20">

            <div className="grid lg:grid-cols-2 gap-10 items-center">

              {/* LEFT */}
              <div>

                <p className="text-cyan-200 uppercase tracking-[6px] text-sm font-bold">
                  Transparence extractive
                </p>

                <h2 className="text-4xl lg:text-6xl font-black leading-tight mt-6">

                  Explorez les données ouvertes du Congo

                </h2>

                <p className="text-xl text-white/80 leading-relaxed mt-8 max-w-2xl">
                  Accédez aux rapports ITIE, aux données
                  extractives, aux permis actifs et aux
                  statistiques nationales en temps réel.
                </p>

              </div>

              {/* RIGHT */}
              <div className="flex flex-col gap-5">

                <button className="bg-white text-[#062b57] hover:scale-105 hover:shadow-2xl transition font-black text-lg py-4 rounded-[24px] shadow-2xl">
                  Explorer Open Data
                </button>

                <button className="bg-black/20 backdrop-blur-md border border-white/20 hover:bg-white/10 transition font-black text-lg py-4 rounded-[24px]">
                  Télécharger les rapports
                </button>

                <button className="bg-black/20 backdrop-blur-md border border-white/20 hover:bg-white/10 transition font-black text-lg py-4 rounded-[24px]">
                  Voir la cartographie
                </button>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  )
}