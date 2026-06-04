"use client"

export default function DataSection() {
  return (
    <section className="max-w-7xl mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-10">
        
        {/* CARD 1 */}
        <div className="bg-white rounded-[32px] p-10 shadow-xl border border-slate-100">
          <h2 className="text-4xl font-black text-slate-900 mb-4">
            Revenus extractifs
          </h2>

          <p className="text-slate-500 mb-8">
            Revenus annuels générés par le secteur extractif.
          </p>

          <div className="h-[300px] rounded-3xl bg-gradient-to-br from-cyan-100 to-blue-100 flex items-end justify-around p-6">
            
            <div className="w-16 bg-cyan-400 rounded-t-2xl h-32" />
            <div className="w-16 bg-cyan-500 rounded-t-2xl h-44" />
            <div className="w-16 bg-cyan-600 rounded-t-2xl h-56" />
            <div className="w-16 bg-cyan-700 rounded-t-2xl h-72" />
          </div>
        </div>

        {/* CARD 2 */}
        <div className="bg-white rounded-[40px] p-10 shadow-xl border border-slate-100">
          <h2 className="text-4xl font-black text-slate-900 mb-4">
            Production pétrolière
          </h2>

          <p className="text-slate-500 mb-8">
            Évolution mensuelle de la production.
          </p>

          <div className="h-[300px] rounded-3xl bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
            
            <svg
              viewBox="0 0 400 200"
              className="w-full h-full"
              fill="none"
            >
              <path
                d="M0 160 C50 100 100 120 150 80 C200 40 250 100 300 60 C340 30 370 40 400 20"
                stroke="#06b6d4"
                strokeWidth="8"
                strokeLinecap="round"
              />

              <circle cx="150" cy="80" r="8" fill="#06b6d4" />
              <circle cx="300" cy="60" r="8" fill="#06b6d4" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}