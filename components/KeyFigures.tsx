"use client"
import { CartesianGrid } from "recharts"

<CartesianGrid
  strokeDasharray="3 3"
  stroke="rgba(255,255,255,0.08)"
/>
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  Tooltip,
} from "recharts"

export default function KeyFiguresV2() {
  const data = [
    { year: 2020, pib: 48, revenus: 55, export: 85, emploi: 0.4 },
    { year: 2021, pib: 50, revenus: 60, export: 87, emploi: 0.45 },
    { year: 2022, pib: 52, revenus: 63, export: 89, emploi: 0.48 },
    { year: 2023, pib: 53.26, revenus: 66.41, export: 92, emploi: 0.5 },
  ]

  return (
    <section className="bg-[#061f3a] py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-white text-3xl font-bold">
          Dashboard ITIE Congo 2020–2023
        </h2>

        <p className="text-slate-400 mt-2 mb-8">
          Principaux indicateurs du secteur extractif par année.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {data.map((item) => {
            const chartData = [
              { name: "PIB", value: item.pib },
              { name: "Rev.", value: item.revenus },
              { name: "Exp.", value: item.export },
              { name: "Emp.", value: item.emploi },
            ]

            return (
              <div
                key={item.year}
                className="bg-[#0d2d50] rounded-2xl p-4 border border-white/10 hover:border-cyan-400/40 transition"
              >
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-white font-bold text-lg">
                    {item.year}
                  </h3>

                  <span className="text-cyan-300 text-xs">
                    ITIE
                  </span>
                </div>

                <div className="h-[150px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={chartData}>
                      <XAxis
                        dataKey="name"
                        tick={{ fill: "#cbd5e1", fontSize: 10 }}
                        axisLine={false}
                        tickLine={false}
                      />

                      <Tooltip />

                      <Bar
                        dataKey="value"
                        radius={[4, 4, 0, 0]}
                        animationDuration={1200}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </div>

                <div className="mt-4 text-xs text-slate-300 space-y-1">
                  <p>PIB : {item.pib}%</p>
                  <p>Revenus : {item.revenus}%</p>
                  <p>Exportations : {item.export}%</p>
                  <p>Emploi : {item.emploi}%</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}