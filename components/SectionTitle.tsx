type Props = {
  badge: string
  title: string
  subtitle?: string
}

export default function SectionTitle({
  badge,
  title,
  subtitle,
}: Props) {
  return (
    <div className="mb-10">

      {/* BADGE */}
      <div className="inline-flex items-center gap-3 bg-cyan-50 border border-cyan-100 px-5 py-2 rounded-full">

        <span className="w-3 h-3 rounded-full bg-cyan-500 animate-pulse" />

        <span className="text-cyan-700 text-sm font-black uppercase tracking-wider">
          {badge}
        </span>

      </div>

      {/* TITLE */}
      <h2 className="text-3xl sm:text-4xl lg:text-6xl font-black text-[#062b57] mt-6 leading-tight max-w-4xl">
        {title}
      </h2>

      {/* SUBTITLE */}
      {subtitle && (
        <p className="text-slate-500 text-xl leading-relaxed mt-6 max-w-3xl">
          {subtitle}
        </p>
      )}

    </div>
  )
}