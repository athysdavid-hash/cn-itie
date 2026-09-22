"use client"

import CountUp from "react-countup"
import { motion } from "framer-motion"

type Props = {
  icon: React.ReactNode
  title: string
  value: number
  suffix: string
  color: string
  badge: string
}

export default function StatCard({
  icon,
  title,
  value,
  suffix,
  color,
  badge,
}: Props) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-2xl border border-white/10 bg-[#082949] p-5 transition-all"
    >
      <div className="flex items-center justify-between">
        <div
          className="flex h-11 w-11 items-center justify-center rounded-xl"
          style={{ backgroundColor: `${color}20` }}
        >
          {icon}
        </div>

        <span className="rounded-full bg-emerald-500/15 px-2 py-1 text-xs text-emerald-300">
          {badge}
        </span>
      </div>

      <p className="mt-4 text-sm text-slate-300">{title}</p>

      <h2 className="mt-2 text-3xl font-black text-white">
        <CountUp
          end={value}
          duration={2}
          decimal=","
          decimals={suffix === "%" ? 2 : 0}
        />
        {suffix}
      </h2>
    </motion.div>
  )
}