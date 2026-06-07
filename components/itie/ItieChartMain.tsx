"use client"

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts"

const data = [
  { name: "PIB", value: 53.26 },
  { name: "Revenus publics", value: 66.41 },
  { name: "Exportations", value: 72.42 },
  { name: "Emploi", value: 0.5 }
]

export default function ItieChartMain() {
  return (
    <div className="bg-white rounded-2xl p-6 shadow">
      <h2 className="text-xl font-black text-[#062b57] mb-4">
        Impact économique ITIE 2023
      </h2>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="value" fill="#06b6d4" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}