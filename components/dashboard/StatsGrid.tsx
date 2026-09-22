"use client"

import {
  DollarSign,
  Fuel,
  Ship,
  PieChart,
} from "lucide-react"

import StatCard from "./StatCard"

export default function StatsGrid() {
  return (
    <div className="grid grid-cols-2 gap-4">

      <StatCard
        icon={<DollarSign className="w-6 h-6 text-cyan-400" />}
        title="Revenus publics"
        value={925}
        suffix=" Mds"
        color="#22d3ee"
        badge="+8,2%"
      />

      <StatCard
        icon={<Fuel className="w-6 h-6 text-sky-400" />}
        title="Production"
        value={95.65}
        suffix=" M"
        color="#38bdf8"
        badge="+3,6%"
      />

      <StatCard
        icon={<Ship className="w-6 h-6 text-teal-400" />}
        title="Exportations"
        value={90.56}
        suffix=" M"
        color="#14b8a6"
        badge="+5,4%"
      />

      <StatCard
        icon={<PieChart className="w-6 h-6 text-cyan-400" />}
        title="PIB extractif"
        value={53.26}
        suffix="%"
        color="#06b6d4"
        badge="+1,1%"
      />

    </div>
  )
}