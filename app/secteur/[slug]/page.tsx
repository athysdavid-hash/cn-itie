import { sectors } from "@/data/sectors"

export default async function SectorPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  const sector =
    sectors[slug as keyof typeof sectors]

  if (!sector) {
    return (
      <div className="min-h-screen flex items-center justify-center text-4xl font-black">
        Secteur introuvable
      </div>
    )
  }

  return (
    <main className="bg-[#f4f8fb] min-h-screen">

      {/* HERO */}
      <section className="relative h-[500px] overflow-hidden">

        <img
          src={sector.image}
          alt={sector.title}
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#02152d] via-[#02152d]/70 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex flex-col justify-end pb-16">

          <p className="text-cyan-300 uppercase tracking-[0.25em] font-black text-sm">
            République du Congo
          </p>

          <h1 className="text-5xl lg:text-7xl font-black text-white mt-4">
            {sector.title}
          </h1>

          <p className="text-slate-200 mt-4 max-w-3xl text-lg">
            Secteur stratégique des industries extractives de la République du Congo.
          </p>

        </div>

      </section>

      {/* STATS */}
      <section className="max-w-7xl mx-auto px-4 -mt-16 relative z-20">

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">

          <div className="bg-white rounded-3xl p-6 shadow-xl">
            <p className="text-slate-500 text-sm">
              Transparence
            </p>

            <h3 className="text-3xl font-black text-[#062b57] mt-2">
              ITIE
            </h3>
          </div>

          <div className="bg-white rounded-3xl p-6 shadow-xl">
            <p className="text-slate-500 text-sm">
              Données
            </p>

            <h3 className="text-3xl font-black text-[#062b57] mt-2">
              Open Data
            </h3>
          </div>

          <div className="bg-white rounded-3xl p-6 shadow-xl">
            <p className="text-slate-500 text-sm">
              Gouvernance
            </p>

            <h3 className="text-3xl font-black text-[#062b57] mt-2">
              3 Collèges
            </h3>
          </div>

          <div className="bg-white rounded-3xl p-6 shadow-xl">
            <p className="text-slate-500 text-sm">
              Pays
            </p>

            <h3 className="text-3xl font-black text-[#062b57] mt-2">
              🇨🇬 Congo
            </h3>
          </div>

        </div>

      </section>

      {/* ARTICLE */}
      <section className="max-w-7xl mx-auto px-4 py-12">

        <div className="bg-white rounded-[32px] shadow-xl border border-slate-200 overflow-hidden">

          <div className="p-8 lg:p-14">

            <div className="flex items-center gap-3 mb-6">

              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white font-black">
                CN
              </div>

              <div>
                <p className="font-black text-[#062b57]">
                  CN-ITIE Congo
                </p>

                <p className="text-slate-500 text-sm">
                  Comité National ITIE
                </p>
              </div>

            </div>

            <h2 className="text-3xl font-black text-[#062b57] mb-8">
              Présentation du secteur
            </h2>

            <div className="text-slate-700 text-lg leading-9 whitespace-pre-line">
              {sector.content}
            </div>

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 pb-16">

        <div className="rounded-[32px] bg-gradient-to-r from-[#062b57] to-[#0b4d91] p-10 text-center text-white">

          <p className="uppercase tracking-[0.25em] text-cyan-300 text-xs font-black">
            CN-ITIE Congo
          </p>

          <h2 className="text-3xl lg:text-4xl font-black mt-4">
            Transparence des industries extractives
          </h2>

          <p className="text-slate-200 mt-4 max-w-3xl mx-auto">
            Le Comité National ITIE Congo œuvre pour une gestion transparente,
            responsable et durable des ressources naturelles de la République du Congo.
          </p>

        </div>

      </section>

    </main>
  )
}