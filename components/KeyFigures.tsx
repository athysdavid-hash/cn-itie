"use client"

const data = [
  {
    indicator: "Contribution au PIB (%)",
    y2020: "49,90 %",
    y2021: "52,82 %",
    y2022: "59,51 %",
    y2023: "53,26 %",
  },
  {
    indicator: "Revenus publics (%)",
    y2020: "49,55 %",
    y2021: "66,02 %",
    y2022: "67,53 %",
    y2023: "66,41 %",
  },
  {
    indicator: "Exportations (%)",
    y2020: "84,86 %",
    y2021: "89,41 %",
    y2022: "98,12 %",
    y2023: "92,00 %",
  },
  {
    indicator: "Emploi direct (%)",
    y2020: "0,32 %",
    y2021: "0,31 %",
    y2022: "0,29 %",
    y2023: "0,50 %",
  },
]

export default function KeyFigures() {
  return (
    <section className="bg-slate-50 py-20">

      <div className="max-w-7xl mx-auto px-6">

        <div className="mb-10">

          <span className="uppercase tracking-[0.3em] text-cyan-600 text-xs font-black">
            Dashboard ITIE Congo
          </span>

          <h2 className="mt-3 text-4xl font-black text-[#062b57]">
            Évolution du secteur extractif (2020–2023)
          </h2>

          <p className="mt-3 max-w-3xl text-slate-500">
            Principaux indicateurs issus des rapports ITIE Congo.
          </p>

        </div>

        <div className="rounded-[32px] bg-white border border-slate-200 shadow-sm p-6">

          <div className="mb-8">

            <div className="flex items-center justify-between">

              <h3 className="text-2xl font-black text-[#062b57]">
                Dashboard ITIE Congo 2020–2023
              </h3>

              <span className="rounded-full bg-cyan-100 px-4 py-2 text-sm font-bold text-cyan-700">
                Données officielles
              </span>

            </div>

            <p className="mt-3 text-slate-500">
              Contribution du secteur extractif à l'économie congolaise.
            </p>

          </div>

          <div className="relative h-44 rounded-3xl bg-gradient-to-br from-cyan-50 via-white to-blue-50 overflow-hidden">
                        {/* Courbe décorative */}

            <svg
              viewBox="0 0 800 220"
              className="absolute inset-0 h-full w-full"
              preserveAspectRatio="none"
            >
             <path
  d="M0 170
     C100 160 120 120 200 135
     C300 150 340 40 400 55
     C500 70 540 95 600 80
     C680 60 730 40 800 55"
  fill="none"
  stroke="#0891b2"
  strokeWidth="5"
  strokeLinecap="round"
  className="drop-shadow-sm"
/>

              <path
                d="M0 170
                   C100 160 120 120 200 135
                   C300 150 340 40 400 55
                   C500 70 540 95 600 80
                   C680 60 730 40 800 55
                   L800 220
                   L0 220 Z"
                fill="rgba(34,211,238,0.15)"
              />
            </svg>

            <div className="absolute bottom-5 left-10 right-10 flex justify-between text-sm font-bold text-slate-500">
              <span>2020</span>
              <span>2021</span>
              <span>2022</span>
              <span>2023</span>
            </div>

          </div>

          <div className="mt-5 overflow-x-auto">

            <table className="w-full border-collapse">

              <thead>

                <tr className="border-b border-slate-200">

                  <th className="py-3 text-left text-slate-500">
                    Indicateur
                  </th>

                  <th className="py-3 text-center text-slate-500">
                    2020
                  </th>

                  <th className="py-3 text-center text-slate-500">
                    2021
                  </th>

                  <th className="py-3 text-center text-slate-500">
                    2022
                  </th>

                  <th className="py-3 text-center text-slate-500">
                    2023
                  </th>

                </tr>

              </thead>

              <tbody>

                {data.map((row) => (

                  <tr
                    key={row.indicator}
                    className="border-b border-slate-100 hover:bg-slate-50 transition"
                  >

                    <td className="py-3 font-semibold text-[#062b57]">
                      {row.indicator}
                    </td>

                    <td className="py-3 text-center">
                      {row.y2020}
                    </td>

                    <td className="py-3 text-center">
                      {row.y2021}
                    </td>

                    <td className="py-3 text-center">
                      {row.y2022}
                    </td>

                    <td className="py-3 text-center font-bold text-cyan-700">
                      {row.y2023}
                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        </div>

      </div>

    </section>
  )
}