import {
  FaOilCan,
  FaMountain,
  FaTree,
} from "react-icons/fa6"

export default function MapSection() {
  return (

    <section className="py-24 px-8 bg-[#001847] text-white overflow-hidden">

      <div className="max-w-[1400px] mx-auto">

        {/* TITRE */}
        <div className="text-center mb-16">

          <p className="uppercase tracking-[6px] text-cyan-300 font-bold text-sm">
            Cartographie Extractive
          </p>

          <h2 className="text-5xl font-black mt-5">
            Ressources stratégiques du Congo
          </h2>

          <p className="text-xl text-gray-300 mt-6 max-w-3xl mx-auto">
            Visualisation simplifiée des principales zones
            pétrolières, minières et forestières.
          </p>

        </div>

        {/* CONTENU */}
        <div className="grid md:grid-cols-2 gap-20 items-center">

          {/* CARTE */}
          <div className="relative">

            <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-[32px] p-10 shadow-2xl">

              <img
                src="/congo-map.png"
                alt="Carte Congo"
                className="w-full object-contain"
              />

            </div>

          </div>

          {/* BLOCS */}
          <div className="space-y-8">

            {/* PETROLE */}
            <div className="bg-white/10 border border-white/10 backdrop-blur-xl p-8 rounded-[30px] hover:bg-white/20 transition duration-300">

              <div className="flex items-center gap-5">

                <div className="w-16 h-16 rounded-2xl bg-blue-500 flex items-center justify-center text-3xl">
                  <FaOilCan />
                </div>

                <div>

                  <h3 className="text-3xl font-bold">
                    Hydrocarbures
                  </h3>

                  <p className="text-gray-300 mt-2">
                    Zones offshore et production pétrolière.
                  </p>

                </div>

              </div>

            </div>

            {/* MINES */}
            <div className="bg-white/10 border border-white/10 backdrop-blur-xl p-8 rounded-[30px] hover:bg-white/20 transition duration-300">

              <div className="flex items-center gap-5">

                <div className="w-16 h-16 rounded-2xl bg-orange-500 flex items-center justify-center text-3xl">
                  <FaMountain />
                </div>

                <div>

                  <h3 className="text-3xl font-bold">
                    Mines
                  </h3>

                  <p className="text-gray-300 mt-2">
                    Exploitation minière et permis actifs.
                  </p>

                </div>

              </div>

            </div>

            {/* FORET */}
            <div className="bg-white/10 border border-white/10 backdrop-blur-xl p-8 rounded-[30px] hover:bg-white/20 transition duration-300">

              <div className="flex items-center gap-5">

                <div className="w-16 h-16 rounded-2xl bg-green-500 flex items-center justify-center text-3xl">
                  <FaTree />
                </div>

                <div>

                  <h3 className="text-3xl font-bold">
                    Forêts
                  </h3>

                  <p className="text-gray-300 mt-2">
                    Gouvernance forestière et durabilité.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>

  )
}