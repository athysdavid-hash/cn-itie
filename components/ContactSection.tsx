export default function ContactSection() {
  return (
    <section className="py-12 px-4 bg-[#031b34] overflow-hidden relative">

      {/* BACKGROUND */}
      <div className="absolute inset-0">

        <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-cyan-500/10 rounded-full blur-3xl" />

        <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-blue-700/10 rounded-full blur-3xl" />

      </div>

      <div className="max-w-7xl mx-auto relative z-10">

        <div className="grid lg:grid-cols-2 gap-10 items-center">

          {/* LEFT */}
          <div>

            <p className="text-cyan-400 uppercase tracking-[0.25em] font-black text-xs">
              Contact officiel
            </p>

            <h2 className="text-3xl lg:text-4xl font-black text-white mt-4">
              Comité National ITIE Congo
            </h2>

            <p className="text-slate-300 text-base leading-relaxed mt-5 max-w-lg">
              Le Secrétariat Technique Permanent reste à votre disposition
              pour toute demande relative aux rapports ITIE, aux données
              ouvertes et à la gouvernance extractive.
            </p>

            {/* CONTACT CARDS */}
            <div className="grid gap-3 mt-6">

              <div className="bg-white/5 border border-white/10 rounded-2xl p-4 backdrop-blur-xl">
                <div className="flex items-center gap-4">

                  <div className="w-10 h-10 rounded-xl bg-cyan-500/20 flex items-center justify-center text-lg">
                    📍
                  </div>

                  <div>
                    <h3 className="text-white font-bold text-sm">
                      Adresse
                    </h3>

                    <p className="text-slate-400 text-sm">
                      Brazzaville, République du Congo
                    </p>
                  </div>

                </div>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-4 backdrop-blur-xl">
                <div className="flex items-center gap-4">

                  <div className="w-10 h-10 rounded-xl bg-cyan-500/20 flex items-center justify-center text-lg">
                    📧
                  </div>

                  <div>
                    <h3 className="text-white font-bold text-sm">
                      Email
                    </h3>

                    <p className="text-slate-400 text-sm">
                      contact@itiecongo.cg
                    </p>
                  </div>

                </div>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-4 backdrop-blur-xl">
                <div className="flex items-center gap-4">

                  <div className="w-10 h-10 rounded-xl bg-cyan-500/20 flex items-center justify-center text-lg">
                    ☎️
                  </div>

                  <div>
                    <h3 className="text-white font-bold text-sm">
                      Téléphone
                    </h3>

                    <p className="text-slate-400 text-sm">
                      +242 XX XXX XX XX
                    </p>
                  </div>

                </div>
              </div>

            </div>

          </div>

          {/* RIGHT */}
          <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-[24px] p-5 lg:p-6 shadow-xl">

            <h3 className="text-2xl font-black text-white mb-5">
              Envoyer un message
            </h3>

            <div className="space-y-3">

              <input
                type="text"
                placeholder="Nom complet"
                className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-400 outline-none focus:border-cyan-400"
              />

              <input
                type="email"
                placeholder="Adresse email"
                className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-400 outline-none focus:border-cyan-400"
              />

              <input
                type="text"
                placeholder="Objet"
                className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-400 outline-none focus:border-cyan-400"
              />

              <textarea
                rows={4}
                placeholder="Votre message..."
                className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-400 outline-none focus:border-cyan-400 resize-none"
              />

              <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 rounded-xl font-black">
                Envoyer le message
              </button>

            </div>

          </div>

        </div>

      </div>

    </section>
  )
}