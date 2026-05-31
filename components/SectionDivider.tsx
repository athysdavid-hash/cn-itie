export default function SectionDivider() {
  return (
    <div className="relative py-10 overflow-hidden">

      <div className="absolute inset-0 flex items-center justify-center">

        <div className="w-full h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />

      </div>

      <div className="relative flex justify-center">

        <div className="w-5 h-5 rounded-full bg-cyan-400 shadow-[0_0_30px_rgba(34,211,238,0.8)]" />

      </div>

    </div>
  )
}