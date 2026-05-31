export default function RapportPage() {
  return (
    <main className="min-h-screen bg-[#f4f8fb] pt-32">

      <section className="max-w-7xl mx-auto px-4 py-20">

        <p className="text-cyan-600 uppercase tracking-[0.3em] font-black text-sm">
          Rapports officiels
        </p>

        <h1 className="text-5xl lg:text-7xl font-black text-[#062b57] mt-6">
          Rapports ITIE Congo
        </h1>

        <p className="text-slate-600 text-xl mt-6 max-w-3xl">
          Consultez les rapports de conciliation, rapports annuels,
          études sectorielles et publications officielles du Comité
          National ITIE Congo.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

          <div className="bg-white rounded-[32px] p-8 shadow-lg border border-slate-200">
            <h3 className="text-2xl font-black text-[#062b57]">
              Rapport ITIE 2023
            </h3>

            <p className="text-slate-500 mt-4">
              Rapport de conciliation des revenus extractifs.
            </p>

            <button className="mt-8 bg-[#062b57] text-white px-6 py-3 rounded-2xl font-bold">
              Télécharger
            </button>
          </div>

          <div className="bg-white rounded-[32px] p-8 shadow-lg border border-slate-200">
            <h3 className="text-2xl font-black text-[#062b57]">
              Rapport ITIE 2022
            </h3>

            <p className="text-slate-500 mt-4">
              Publication officielle du Comité National.
            </p>

            <button className="mt-8 bg-[#062b57] text-white px-6 py-3 rounded-2xl font-bold">
              Télécharger
            </button>
          </div>

          <div className="bg-white rounded-[32px] p-8 shadow-lg border border-slate-200">
            <h3 className="text-2xl font-black text-[#062b57]">
              Rapport ITIE 2021
            </h3>

            <p className="text-slate-500 mt-4">
              Données et transparence extractive.
            </p>

            <button className="mt-8 bg-[#062b57] text-white px-6 py-3 rounded-2xl font-bold">
              Télécharger
            </button>
          </div>

        </div>

      </section>

    </main>
  )
}