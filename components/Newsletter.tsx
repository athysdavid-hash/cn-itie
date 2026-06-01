export default function Newsletter() {
  return (
    <section className="py-4 px-4">

      <div className="max-w-7xl mx-auto">

        <div className="relative overflow-hidden rounded-[24px] bg-[#062b57] text-white">

          {/* GLOW */}
          <div className="absolute top-0 right-0 w-[250px] h-[250px] bg-cyan-500/20 blur-3xl rounded-full" />

          <div className="relative z-10 px-6 py-8 lg:px-8">

            <div className="grid md:grid-cols-2 gap-6 items-center">

              {/* LEFT */}
              <div>

                <p className="uppercase tracking-[4px] text-cyan-300 text-xs font-bold">
                  Newsletter
                </p>

                <h2 className="text-2xl lg:text-3xl font-black mt-3 leading-tight">
                  Recevez les publications ITIE
                </h2>

                <p className="text-white/70 text-sm mt-3 leading-relaxed">
                  Rapports, données ouvertes et actualités du secteur extractif.
                </p>

              </div>

              {/* RIGHT */}
              <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl p-4">

                <div className="space-y-3">

                  <input
                    type="text"
                    placeholder="Votre nom"
                    className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3 outline-none text-white placeholder:text-white/50"
                  />

                  <input
                    type="email"
                    placeholder="Votre email"
                    className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3 outline-none text-white placeholder:text-white/50"
                  />

                  <button className="w-full bg-white text-[#062b57] font-black py-3 rounded-xl">
                    S'abonner
                  </button>

                </div>

                <p className="text-white/50 text-xs mt-3">
                  Publications officielles et mises à jour ITIE Congo.
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  )
}