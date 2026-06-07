"use client"

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer
} from "recharts"

const data = [
  { name: "Secteur extractif", value: 72 },
  { name: "Autres secteurs", value: 28 }
]

const COLORS = ["#06b6d4", "#1e293b"]

export default function ItiePieChart() {
  return (
    <div className="bg-white rounded-2xl p-6 shadow">
      <h2 className="text-xl font-black text-[#062b57] mb-4">
        Dépendance économique
      </h2>

      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie data={data} dataKey="value" nameKey="name" outerRadius={100} label>
            {data.map((_, i) => (
              <Cell key={i} fill={COLORS[i]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}