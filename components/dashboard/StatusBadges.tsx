"use client"

import {
  BadgeCheck,
  Database,
  FileText,
  Download,
} from "lucide-react"

const badges = [
  {
    icon: BadgeCheck,
    title: "Données vérifiées",
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
  },
  {
    icon: Database,
    title: "Open Data",
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
  },
  {
    icon: FileText,
    title: "Rapport ITIE 2023",
    color: "text-violet-400",
    bg: "bg-violet-500/10",
  },
  {
    icon: Download,
    title: "Téléchargements",
    color: "text-amber-400",
    bg: "bg-amber-500/10",
  },
]

export default function StatusBadges() {
  return (
    <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
      {badges.map((badge) => {
        const Icon = badge.icon

        return (
          <div
            key={badge.title}
            className={`flex items-center gap-3 rounded-xl border border-white/10 ${badge.bg} px-4 py-3 transition hover:scale-105`}
          >
            <Icon className={`h-5 w-5 ${badge.color}`} />

            <span className="text-sm font-medium text-white">
              {badge.title}
            </span>
          </div>
        )
      })}
    </div>
  )
}