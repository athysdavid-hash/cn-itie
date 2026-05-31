"use client"

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-[#02152d] via-[#062b57] to-[#0b4f91] text-white pt-24 pb-10 px-4">

      {/* GLOW */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-400/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[150px]" />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* TOP */}
        <div className="grid lg:grid-cols-4 gap-14 pb-16 border-b border-white/10">

          {/* BRAND */}
          <div>

            <div className="flex items-center gap-4">

              <div className="w-16 h-16 rounded-3xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center text-xl font-black shadow-xl">
                IT
              </div>

              <div>

                <h3 className="text-3xl font-black">
                  ITIE Congo
                </h3>

                <p className="text-cyan-200">
                  République du Congo
                </p>

              </div>

            </div>

            <p className="text-slate-300 leading-relaxed mt-8">
              Plateforme officielle du Comité National ITIE de la République du Congo.
              Elle vise à promouvoir la transparence, la redevabilité et la bonne gouvernance dans les industries extractives (pétrole, mines et gaz).
            </p>

          </div>

          {/* NAVIGATION */}
          <div>

            <h4 className="text-xl font-black mb-6">
              Navigation
            </h4>

            <div className="space-y-4 text-slate-300">

              <p className="hover:text-cyan-300 cursor-pointer transition">
                Accueil
              </p>

              <p className="hover:text-cyan-300 cursor-pointer transition">
                Open Data
              </p>

              <p className="hover:text-cyan-300 cursor-pointer transition">
                Rapports ITIE
              </p>

              <p className="hover:text-cyan-300 cursor-pointer transition">
                Actualités
              </p>

              <p className="hover:text-cyan-300 cursor-pointer transition">
                Données publiques
              </p>

            </div>

          </div>

          {/* CONTACT */}
          <div>

            <h4 className="text-xl font-black mb-6">
              Contact
            </h4>

            <div className="space-y-4 text-slate-300">

              <p>📍 Brazzaville, République du Congo</p>

              <p>📧 contact@itie-congo.cg</p>

              <p>☎️ +242 06 676 64 44</p>

              <p>🌐 www.itie-congo.cg</p>

            </div>

          </div>

          {/* VISION */}
          <div>

            <div className="rounded-[32px] bg-white/10 backdrop-blur-xl p-8 border border-white/10">

              <p className="text-cyan-300 uppercase tracking-[0.3em] text-sm font-black">
                Notre engagement
              </p>

              <h4 className="text-3xl font-black mt-6 leading-tight">

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
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 py-10 border-b border-white/10">

          <h4 className="text-xl font-black">
            Suivez le CN-ITIE Congo
          </h4>

          <div className="flex items-center gap-4">

            <div className="w-12 h-12 rounded-2xl bg-white/10 hover:bg-cyan-500 transition-all duration-300 flex items-center justify-center">
              f
            </div>

            <div className="w-12 h-12 rounded-2xl bg-white/10 hover:bg-cyan-500 transition-all duration-300 flex items-center justify-center">
              X
            </div>

            <div className="w-12 h-12 rounded-2xl bg-white/10 hover:bg-cyan-500 transition-all duration-300 flex items-center justify-center">
              in
            </div>

            <div className="w-12 h-12 rounded-2xl bg-white/10 hover:bg-cyan-500 transition-all duration-300 flex items-center justify-center">
              ▶
            </div>

          </div>

        </div>

        {/* BOTTOM */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 pt-10">

          <p className="text-slate-400 text-center lg:text-left">
            © 2026 Comité National ITIE Congo — Tous droits réservés.
          </p>

          <div className="flex items-center gap-6 text-slate-400">

            <p className="hover:text-white cursor-pointer transition">
              Politique de confidentialité
            </p>

            <p className="hover:text-white cursor-pointer transition">
              Mentions légales
            </p>

          </div>

        </div>

      </div>

    </footer>
  )
}