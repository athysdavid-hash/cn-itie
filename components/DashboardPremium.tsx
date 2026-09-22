"use client"

import {
  AreaChart,
  Area,
} from "recharts"

const cards = [
  {
    year: "2020",
    value: "49,50 %",
    label: "Contribution au PIB",
    trend: "+2,1 %",
    chart: [
      { v: 38 },
      { v: 40 },
      { v: 43 },
      { v: 46 },
      { v: 49.5 },
    ],
  },
  {
    year: "2021",
    value: "50,80 %",
    label: "Contribution au PIB",
    trend: "+1,3 %",
    chart: [
      { v: 41 },
      { v: 44 },
      { v: 46 },
      { v: 48 },
      { v: 50.8 },
    ],
  },
  {
    year: "2022",
    value: "52,10 %",
    label: "Contribution au PIB",
    trend: "+1,8 %",
    chart: [
      { v: 44 },
      { v: 46 },
      { v: 48 },
      { v: 50 },
      { v: 52.1 },
    ],
  },
  {
    year: "2023",
    value: "53,26 %",
    label: "Contribution au PIB",
    trend: "+1,2 %",
    chart: [
      { v: 46 },
      { v: 48 },
      { v: 50 },
      { v: 52 },
      { v: 53.26 },
    ],
  },
]

export default function DashboardPremium() {
  return (
    <section className="bg-white rounded-[24px] border border-slate-200 shadow-sm p-6 h-full">
      <div className="mb-6">
        <p className="uppercase tracking-[4px] text-cyan-600 text-xs font-black">
          Dashboard ITIE
        </p>

        <h2 className="text-2xl font-black text-[#062b57] mt-2">
          2020 – 2023
        </h2>

        <p className="text-slate-500 text-sm mt-2">
          Évolution de la contribution du secteur extractif au PIB.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {cards.map((card) => (
          <div
            key={card.year}
            className="bg-slate-50 border border-slate-200 rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="flex justify-between items-center">
              <span className="text-sm font-bold text-slate-500">
                {card.year}
              </span>

              <span className="bg-emerald-100 text-emerald-700 text-xs font-bold px-2 py-1 rounded-full">
                ↗ {card.trend}
              </span>
            </div>

            <h3 className="mt-5 text-3xl font-black text-[#062b57]">
              {card.value}
            </h3>

            <p className="mt-1 text-sm text-slate-500">
              {card.label}
            </p>

            <div className="mt-5 flex justify-center">
              <AreaChart
                width={180}
                height={70}
                data={card.chart}
              >
                <Area
                  type="monotone"
                  dataKey="v"
                  stroke="#0891b2"
                  strokeWidth={3}
                  fill="#67e8f9"
                  fillOpacity={0.25}
                />
              </AreaChart>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}