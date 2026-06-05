"use client"

export default function Footer() {
  return (
    <>
      {/* COULEURS NATIONALES */}
      <div className="h-1 w-full flex">
        <div className="flex-1 bg-green-500" />
        <div className="flex-1 bg-yellow-400" />
        <div className="flex-1 bg-red-500" />
      </div>

      <footer className="relative min-h-[500px] overflow-hidden bg-gradient-to-br from-[#02152d] via-[#062b57] to-[#0b4f91] text-white pt-20 pb-10 px-4">

        <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-cyan-400/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-blue-500/10 rounded-full blur-[120px]" />

        <div className="relative z-10 max-w-7xl mx-auto">

          {/* TOP */}
          <div className="grid lg:grid-cols-4 gap-8 pb-8 border-b border-white/10">

            {/* BRAND */}
            <div>

              <div className="flex items-center gap-3">

                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center text-sm font-black shadow-xl">
                  CN
                </div>

                <div>
                  <h3 className="text-xl font-black">
                    CN-ITIE Congo
                  </h3>

                  <p className="text-cyan-200 text-sm">
                    République du Congo
                  </p>
                </div>

              </div>

              <p className="text-slate-300 text-sm leading-relaxed mt-4">
                Plateforme officielle du Comité National de l’Initiative pour la Transparence dans les Industries Extractives.
              </p>

              <p className="text-green-300 text-xs mt-3">
                🇨🇬 Au service de la transparence des ressources naturelles du Congo
              </p>

            </div>

            {/* NAVIGATION */}
            <div>

              <h4 className="text-lg font-black mb-4">
                Navigation
              </h4>

              <div className="space-y-2 text-sm text-slate-300">

                <p className="hover:text-cyan-300 cursor-pointer">
                  Accueil
                </p>

                <p className="hover:text-cyan-300 cursor-pointer">
                  Open Data
                </p>

                <p className="hover:text-cyan-300 cursor-pointer">
                  Rapports ITIE
                </p>

                <p className="hover:text-cyan-300 cursor-pointer">
                  Actualités
                </p>

                <p className="hover:text-cyan-300 cursor-pointer">
                  Documentation
                </p>

                <p className="hover:text-cyan-300 cursor-pointer">
                  Gouvernement du Congo
                </p>

              </div>

            </div>

            {/* CONTACT */}
            <div>

              <h4 className="text-lg font-black mb-4">
                Contact
              </h4>

              <div className="space-y-2 text-sm text-slate-300">

                <p>
                  📍 Brazzaville, République du Congo
                </p>

                <p>
                  📧 contact@itie-congo.cg
                </p>

                <p>
                  ☎️ +242 06 676 64 44
                </p>

                <p>
                  🌐 www.itie-congo.cg
                </p>

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

                <p className="text-slate-300 text-xs mt-4">
                  🇨🇬 République du Congo
                </p>

              </div>

            </div>

          </div>

          {/* LIGNE */}
          <div className="my-6 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />

          {/* SOCIALS */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4 py-5 border-b border-white/10">

            <h4 className="text-base font-black">
              Suivez le CN-ITIE Congo
            </h4>

            <div className="flex items-center gap-3">

              <div className="w-12 h-12 rounded-xl bg-white/10 hover:bg-cyan-500 transition-all flex items-center justify-center cursor-pointer">
                f
              </div>

              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl bg-white/10 hover:bg-cyan-500 transition-all flex items-center justify-center"
              >
                X
              </a>

              <div className="w-12 h-12 rounded-xl bg-white/10 hover:bg-cyan-500 transition-all flex items-center justify-center cursor-pointer">
                in
              </div>

              <div className="w-12 h-12 rounded-xl bg-white/10 hover:bg-cyan-500 transition-all flex items-center justify-center cursor-pointer">
                ▶
              </div>

            </div>

          </div>

          {/* BOTTOM */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-3 pt-5">

            <p className="text-slate-400 text-xs text-center lg:text-left">
              © 2026 Comité National ITIE Congo | République du Congo | Tous droits réservés.
            </p>

            <div className="flex items-center gap-4 text-xs text-slate-400">

              <p className="hover:text-cyan-300 cursor-pointer">
                Confidentialité
              </p>

              <p className="hover:text-cyan-300 cursor-pointer">
                Mentions légales
              </p>

            </div>

          </div>

        </div>

      </footer>
    </>
  )
}