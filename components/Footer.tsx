"use client"

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-[#02152d] via-[#062b57] to-[#0b4f91] text-white pt-14 pb-6 px-4">

      {/* GLOW */}
      <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-cyan-400/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-blue-500/10 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* TOP */}
        <div className="grid lg:grid-cols-4 gap-8 pb-8 border-b border-white/10">

          {/* BRAND */}
          <div>

            <div className="flex items-center gap-3">

              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center text-sm font-black shadow-xl">
                IT
              </div>

              <div>

                <h3 className="text-xl font-black">
                  ITIE Congo
                </h3>

                <p className="text-cyan-200 text-sm">
                  République du Congo
                </p>

              </div>

            </div>

            <p className="text-slate-300 text-sm leading-relaxed mt-4">
              Plateforme officielle du Comité National ITIE de la République du Congo.
            </p>

          </div>

          {/* NAVIGATION */}
          <div>

            <h4 className="text-lg font-black mb-4">
              Navigation
            </h4>

            <div className="space-y-2 text-sm text-slate-300">

              <p>Accueil</p>
              <p>Open Data</p>
              <p>Rapports ITIE</p>
              <p>Actualités</p>
              <p>Données publiques</p>

            </div>

          </div>

          {/* CONTACT */}
          <div>

            <h4 className="text-lg font-black mb-4">
              Contact
            </h4>

            <div className="space-y-2 text-sm text-slate-300">

              <p>📍 Brazzaville, Congo</p>
              <p>📧 contact@itie-congo.cg</p>
              <p>☎️ +242 06 676 64 44</p>
              <p>🌐 www.itie-congo.cg</p>

            </div>

          </div>

          {/* ENGAGEMENT */}
          <div>

            <div className="rounded-2xl bg-white/10 backdrop-blur-xl p-5 border border-white/10">

              <p className="text-cyan-300 uppercase tracking-[0.2em] text-xs font-black">
                Engagement
              </p>

              <h4 className="text-xl font-black mt-3 leading-snug">
                Transparence
                <br />
                Redevabilité
                <br />
                Participation
              </h4>

            </div>

          </div>

        </div>

        {/* SOCIALS */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 py-5 border-b border-white/10">

          <h4 className="text-base font-black">
            Suivez le CN-ITIE Congo
          </h4>

          <div className="flex items-center gap-3">

            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
              f
            </div>

            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
              X
            </div>

            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
              in
            </div>

            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
              ▶
            </div>

          </div>

        </div>

        {/* BOTTOM */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-3 pt-5">

          <p className="text-slate-400 text-xs text-center lg:text-left">
            © 2026 Comité National ITIE Congo — Tous droits réservés.
          </p>

          <div className="flex items-center gap-4 text-xs text-slate-400">

            <p>Confidentialité</p>
            <p>Mentions légales</p>

          </div>

        </div>

      </div>

    </footer>
  )
}