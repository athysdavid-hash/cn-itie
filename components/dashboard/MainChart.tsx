"use client"

import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"

const data = [
  {
    year: "2020",
    revenus: 640,
    exportations: 75,
  },
  {
    year: "2021",
    revenus: 720,
    exportations: 81,
  },
  {
    year: "2022",
    revenus: 810,
    exportations: 86,
  },
  {
    year: "2023",
    revenus: 925,
    exportations: 90.56,
  },
]

export default function MainChart() {
  return (
    <div className="rounded-3xl border border-white/10 bg-[#082949] p-6">

      <div className="mb-6 flex items-center justify-between">

        <div>
          <p className="text-sm font-semibold text-cyan-300">
            Évolution des revenus extractifs
          </p>

          <h3 className="mt-1 text-2xl font-black text-white">
            2020 - 2023
          </h3>
        </div>

        <div className="rounded-full bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300">
          Rapport ITIE 2023
        </div>

      </div>

      <div className="h-72">

        <ResponsiveContainer width="100%" height="100%">

          <AreaChart data={data}>

            <defs>

              <linearGradient id="revenus" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#22d3ee" stopOpacity={0.6} />
                <stop offset="100%" stopColor="#22d3ee" stopOpacity={0} />
              </linearGradient>

            </defs>

            <CartesianGrid
              stroke="#1f3d5a"
              strokeDasharray="3 3"
              vertical={false}
            />

            <XAxis
              dataKey="year"
              tick={{ fill: "#94a3b8" }}
              axisLine={false}
              tickLine={false}
            />

            <YAxis
              tick={{ fill: "#94a3b8" }}
              axisLine={false}
              tickLine={false}
            />

            <Tooltip />

            <Area
              type="monotone"
              dataKey="revenus"
              stroke="#22d3ee"
              strokeWidth={4}
              fill="url(#revenus)"
            />

          </AreaChart>

        </ResponsiveContainer>

      </div>

    </div>
  )
}