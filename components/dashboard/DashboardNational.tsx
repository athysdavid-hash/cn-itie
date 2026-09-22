"use client"

import { motion } from "framer-motion"
import { BarChart3, ArrowUpRight } from "lucide-react"

import StatsGrid from "./StatsGrid"
import MainChart from "./MainChart"
import StatusBadges from "./StatusBadges"

export default function DashboardNational() {
    console.log("NOUVEAU DASHBOARD")
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="w-full max-w-xl rounded-3xl border border-white/10 bg-slate-900/80 backdrop-blur-xl shadow-2xl overflow-hidden"
    >
      {/* Header */}
      <div className="border-b border-white/10 p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-cyan-400">
              Tableau de bord
            </p>

            <h2 className="mt-2 text-2xl font-bold text-white">
              Données officielles ITIE Congo 2023
            </h2>

            <p className="mt-1 text-sm text-slate-400">
              Principaux indicateurs des industries extractives
            </p>
          </div>

          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/10">
            <BarChart3 className="h-7 w-7 text-cyan-400" />
          </div>
        </div>
      </div>

      {/* Statistiques */}
      <div className="p-6">
        <StatsGrid />
      </div>

      {/* Graphique */}
      <div className="px-6 pb-6">
        <MainChart />
      </div>

      {/* Badges */}
      <div className="px-6 pb-6">
        <StatusBadges />
      </div>

      {/* Bouton */}
      <div className="px-6 pb-6">
        <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-500 px-5 py-3 font-semibold text-white transition hover:bg-cyan-400">
          Explorer les données
          <ArrowUpRight className="h-4 w-4" />
        </button>
      </div>
    </motion.div>
  )
}