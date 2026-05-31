export default function Newsletter() {
  return (
    <section className="py-8 px-4">

      <div className="max-w-7xl mx-auto">

        <div className="relative overflow-hidden rounded-[32px] bg-[#062b57] text-white">

          {/* GLOW */}
          <div className="absolute top-0 right-0 w-[420px] h-[420px] bg-cyan-500/20 blur-3xl rounded-full" />

          <div className="relative z-10 px-10 py-16 lg:px-16">

            <div className="grid lg:grid-cols-grid md:grid-cols-2 gap-10 items-center">

              {/* LEFT */}
              <div>

                <p className="uppercase tracking-[6px] text-cyan-300 text-sm font-bold">
                  Newsletter
                </p>

                <h2 className="text-3xl sm:text-4xl lg:text-6xl font-black mt-6 leading-tight">

                  Recevez les dernières publications ITIE

                </h2>

                <p className="text-white/70 text-xl leading-relaxed mt-8">
                  Soyez informé des nouveaux rapports,
                  données ouvertes, publications et
                  actualités du secteur extractif congolais.
                </p>

              </div>

              {/* RIGHT */}
              <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-[32px] p-6">

                <div className="space-y-5">

                  <input
                    type="text"
                    placeholder="Votre nom"
                    className="w-full bg-white/10 border border-white/10 rounded-2xl px-6 py-4 outline-none text-white placeholder:text-white/50"
                  />

                  <input
                    type="email"
                    placeholder="Votre email"
                    className="w-full bg-white/10 border border-white/10 rounded-2xl px-6 py-4 outline-none text-white placeholder:text-white/50"
                  />

                  <button className="w-full bg-white text-[#062b57] hover:scale-[1.02] transition font-black py-4 rounded-2xl text-lg">
                    S’abonner maintenant
                  </button>

                </div>

                <p className="text-white/50 text-sm mt-5 leading-relaxed">
                  En vous abonnant, vous recevrez les
                  publications officielles et les mises à jour ITIE Congo.
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  )
}