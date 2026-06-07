"use client"

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts"

const data = [
  { year: "2021", pib: 52.82, revenus: 66.02, export: 89.54 },
  { year: "2022", pib: 59.51, revenus: 67.53, export: 98.07 },
  { year: "2023", pib: 53.26, revenus: 66.41, export: 72.42 }
]

export default function ItieTrendChart() {
  return (
    <div className="bg-white rounded-2xl p-6 shadow">
      <h2 className="text-xl font-black text-[#062b57] mb-4">
        Évolution ITIE 2021–2023
      </h2>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <XAxis dataKey="year" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="pib" stroke="#06b6d4" />
          <Line type="monotone" dataKey="revenus" stroke="#0ea5e9" />
          <Line type="monotone" dataKey="export" stroke="#2563eb" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}