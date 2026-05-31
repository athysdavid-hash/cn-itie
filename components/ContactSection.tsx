export default function ContactSection() {
  return (
    <section className="py-28 px-4 bg-[#031b34] overflow-hidden relative">

      {/* BACKGROUND */}
      <div className="absolute inset-0">

        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-3xl" />

        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-700/10 rounded-full blur-3xl" />

      </div>

      <div className="max-w-7xl mx-auto relative z-10">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT */}
          <div>

            <p className="text-cyan-400 uppercase tracking-[0.35em] font-black text-sm">
              Contact officiel
            </p>

            <h2 className="text-4xl lg:text-5xl font-black text-white mt-6 leading-tight">
              Comité National ITIE Congo
            </h2>

            <p className="text-slate-300 text-lg leading-relaxed mt-8 max-w-xl">
              Le Secrétariat Technique Permanent du Comité National ITIE Congo
              reste à votre disposition pour toute demande relative aux
              rapports ITIE, aux données ouvertes et à la gouvernance des
              industries extractives.
            </p>

            {/* CONTACT CARDS */}
            <div className="grid gap-5 mt-12">

              <div className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-xl">
                <div className="flex items-center gap-5">

                  <div className="w-14 h-14 rounded-2xl bg-cyan-500/20 flex items-center justify-center text-2xl">
                    📍
                  </div>

                  <div>
                    <h3 className="text-white font-bold">
                      Adresse
                    </h3>
                    <p className="text-slate-400">
                      Brazzaville, République du Congo
                    </p>
                  </div>

                </div>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-xl">
                <div className="flex items-center gap-5">

                  <div className="w-14 h-14 rounded-2xl bg-cyan-500/20 flex items-center justify-center text-2xl">
                    📧
                  </div>

                  <div>
                    <h3 className="text-white font-bold">
                      Email
                    </h3>
                    <p className="text-slate-400">
                      contact@itiecongo.cg
                    </p>
                  </div>

                </div>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-xl">
                <div className="flex items-center gap-5">

                  <div className="w-14 h-14 rounded-2xl bg-cyan-500/20 flex items-center justify-center text-2xl">
                    ☎️
                  </div>

                  <div>
                    <h3 className="text-white font-bold">
                      Téléphone
                    </h3>
                    <p className="text-slate-400">
                      +242 XX XXX XX XX
                    </p>
                  </div>

                </div>
              </div>

            </div>

          </div>

          {/* RIGHT */}
          <div className="bg-white/10 backdrop-blur-2xl border border-white/10 rounded-[36px] p-8 lg:p-10 shadow-2xl">

            <h3 className="text-3xl font-black text-white mb-8">
              Envoyer un message
            </h3>

            <div className="space-y-5">

              <input
                type="text"
                placeholder="Nom complet"
                className="w-full bg-white/10 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-slate-400 outline-none focus:border-cyan-400"
              />

              <input
                type="email"
                placeholder="Adresse email"
                className="w-full bg-white/10 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-slate-400 outline-none focus:border-cyan-400"
              />

              <input
                type="text"
                placeholder="Objet"
                className="w-full bg-white/10 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-slate-400 outline-none focus:border-cyan-400"
              />

              <textarea
                rows={6}
                placeholder="Votre message..."
                className="w-full bg-white/10 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-slate-400 outline-none focus:border-cyan-400 resize-none"
              />

              <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:scale-[1.02] transition text-white px-6 py-4 rounded-2xl font-black shadow-2xl">
                Envoyer le message
              </button>

            </div>

          </div>

        </div>

      </div>

    </section>
  )
}