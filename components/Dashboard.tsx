export default function Dashboard() {
  return (
    <section className="bg-white py-20 px-6">

      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">

          <div>
            <p className="uppercase tracking-[3px] text-blue-600 text-sm font-semibold">
              Open Data ITIE
            </p>

            <h2 className="text-4xl font-bold text-gray-900 mt-2">
              Dashboard National
            </h2>

            <p className="text-gray-600 mt-4 max-w-2xl">
              Suivi des revenus extractifs, indicateurs de transparence,
              publications officielles et activités économiques.
            </p>
          </div>

          <button className="bg-blue-700 text-white px-6 py-3 rounded-xl hover:bg-blue-800 transition">
            Télécharger les données
          </button>

        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">

          {/* LEFT */}
          <div className="xl:col-span-2 space-y-8">

            {/* TOP CARDS */}
            <div className="grid md:grid-cols-2 gap-6">

              {/* CARD */}
              <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white rounded-3xl p-6 shadow-lg">

                <p className="text-blue-200 text-sm">
                  Revenus extractifs
                </p>

                <h3 className="text-5xl font-bold mt-4">
                  $2.4B
                </h3>

                <p className="mt-4 text-blue-100">
                  Revenus déclarés sur l’année fiscale.
                </p>

              </div>

              {/* CARD */}
              <div className="bg-white border rounded-3xl p-8 shadow-sm">

                <p className="text-gray-500 text-sm">
                  Entreprises déclarantes
                </p>

                <h3 className="text-5xl font-bold mt-4 text-gray-900">
                  48
                </h3>

                <p className="mt-4 text-gray-600">
                  Acteurs pétroliers, miniers et forestiers.
                </p>

              </div>

            </div>

            {/* BIG PANEL */}
            <div className="bg-gray-50 border rounded-3xl p-8">

              <div className="flex items-center justify-between mb-8">
                <div>
                  <h3 className="text-2xl font-bold">
                    Transparence & conformité
                  </h3>

                  <p className="text-gray-600 mt-2">
                    Niveau d’engagement et conformité ITIE.
                  </p>
                </div>

                <div className="text-5xl font-bold text-green-600">
                  92%
                </div>
              </div>

              {/* BARRES */}
              <div className="space-y-6">

                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-gray-600">
                      Publication des rapports
                    </span>

                    <span className="text-sm font-semibold">
                      100%
                    </span>
                  </div>

                  <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                    <div className="w-full h-full bg-blue-600 rounded-full"></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-gray-600">
                      Transparence des revenus
                    </span>

                    <span className="text-sm font-semibold">
                      92%
                    </span>
                  </div>

                  <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                    <div className="w-[92%] h-full bg-green-600 rounded-full"></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-gray-600">
                      Données ouvertes
                    </span>

                    <span className="text-sm font-semibold">
                      85%
                    </span>
                  </div>

                  <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                    <div className="w-[85%] h-full bg-purple-600 rounded-full"></div>
                  </div>
                </div>

              </div>

            </div>

          </div>

          {/* RIGHT PANEL */}
          <div className="bg-gray-50 border rounded-3xl p-8">

            <h3 className="text-2xl font-bold">
              Publications récentes
            </h3>

            <p className="text-gray-600 mt-2">
              Rapports et documents officiels ITIE.
            </p>

            <div className="mt-8 space-y-5">

              <div className="bg-white rounded-2xl p-5 border">
                <p className="text-sm text-gray-500">
                  Rapport 2025
                </p>

                <h4 className="font-semibold mt-1">
                  Revenus pétroliers et miniers
                </h4>
              </div>

              <div className="bg-white rounded-2xl p-5 border">
                <p className="text-sm text-gray-500">
                  Open Data
                </p>

                <h4 className="font-semibold mt-1">
                  Base nationale des entreprises extractives
                </h4>
              </div>

              <div className="bg-white rounded-2xl p-5 border">
                <p className="text-sm text-gray-500">
                  Transparence
                </p>

                <h4 className="font-semibold mt-1">
                  Rapport de conformité ITIE Congo
                </h4>
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}