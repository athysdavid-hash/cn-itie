"use client"

import {
  LineChart,
  Line,
  ResponsiveContainer
} from "recharts"

export default function KeyFiguresV2() {

  const data = [
    { year: 2020, pib: 48, revenus: 55, export: 85, emploi: 0.4 },
    { year: 2021, pib: 50, revenus: 60, export: 87, emploi: 0.45 },
    { year: 2022, pib: 52, revenus: 63, export: 89, emploi: 0.48 },
    { year: 2023, pib: 53.26, revenus: 66.41, export: 92, emploi: 0.5 }
  ]

  const years = [2020, 2021, 2022, 2023]

  const getYearData = (year: number) =>
    data.filter(d => d.year === year)

  const MiniChart = ({ year }: { year: number }) => {
    const d = getYearData(year)

    return (
      <div
        className="
          bg-white/5
          border border-white/10
          rounded-xl
          p-4
          h-[180px]
          transition-all duration-300
          hover:scale-[1.02]
          hover:bg-white/10
        "
      >

        {/* HEADER SMALL */}
        <div className="flex justify-between mb-2">
          <span className="text-white text-sm font-semibold">
            {year}
          </span>

          <span className="text-cyan-300 text-xs">
            ITIE
          </span>
        </div>

        {/* MINI CHART */}
        <div className="h-[120px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={d}>

              <Line
                type="monotone"
                dataKey="pib"
                stroke="#22d3ee"
                strokeWidth={2}
                dot={false}
              />

              <Line
                type="monotone"
                dataKey="revenus"
                stroke="#60a5fa"
                strokeWidth={2}
                dot={false}
              />

              <Line
                type="monotone"
                dataKey="export"
                stroke="#34d399"
                strokeWidth={2}
                dot={false}
              />

            </LineChart>
          </ResponsiveContainer>
        </div>

      </div>
    )
  }

  return (
    <section className="bg-[#061f3a] py-16">

      <div className="max-w-6xl mx-auto px-6">

        {/* TITLE */}
        <h2 className="text-white text-2xl font-bold">
          ITIE Congo 2020–2023
        </h2>

        <p className="text-slate-400 text-sm mt-2 mb-8">
          Évolution des indicateurs extractifs
        </p>

        {/* GRID SMALL CARDS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

          {years.map(year => (
            <MiniChart key={year} year={year} />
          ))}

        </div>

      </div>
    </section>
  )
}