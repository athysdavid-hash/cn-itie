"use client"

const contracts = [
  {
    name: "PNGF (Pointe-Noire Grands Fonds)",
    type: "Contrat de Partage de Production (CPP)",
    zone: "Offshore",
    operators: "Perenco / partenaires",
    status: "Actif",
    description:
      "Bloc historique majeur de production pétrolière offshore au Congo. Fortement contributif à la production nationale.",
  },
  {
    name: "KOMBI-LIKALALA-LIBONDO",
    type: "CPP",
    zone: "Offshore",
    operators: "TotalEnergies (historique) + partenaires",
    status: "Actif",
    description:
      "Bloc pétrolier stratégique combinant plusieurs champs offshore majeurs du Congo.",
  },
  {
    name: "TCHIBELI – LITANZI II",
    type: "CPP",
    zone: "Offshore / Onshore",
    operators: "Perenco / partenaires",
    status: "Actif",
    description:
      "Champ combiné d’exploration et de production d’hydrocarbures avec développement progressif des réserves.",
  },
  {
    name: "TCHENDO II",
    type: "CPP",
    zone: "Onshore",
    operators: "Consortium pétrolier",
    status: "Actif",
    description:
      "Bloc terrestre utilisé pour la production et le développement de pétrole brut.",
  },
  {
    name: "MARINE XI",
    type: "CPP Offshore",
    zone: "Offshore profond",
    operators: "Eni + partenaires",
    status: "Actif",
    description:
      "Bloc offshore incluant production pétrolière et gazière avec infrastructures sous-marines.",
  },
  {
    name: "MARINE XII (GNL)",
    type: "Contrat gazier stratégique",
    zone: "Offshore gazier",
    operators: "SNPC / Eni / Lukoil",
    status: "Actif",
    description:
      "Projet stratégique de gaz naturel liquéfié signé en 2023 pour 20 ans. Inclut production et exportation de GNL.",
  },
]

export default function ContractsPage() {
  return (
    <section className="py-16 px-4 bg-white">

      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-10">

          <p className="text-xs font-black tracking-[0.25em] text-cyan-600 uppercase">
            ITIE Congo 2023
          </p>

          <h2 className="text-3xl font-black text-[#062b57] mt-2">
            Contrats pétroliers & gaziers
          </h2>

          <p className="text-sm text-slate-500 mt-3 max-w-2xl mx-auto">
            Liste des principaux contrats de production et de partage de production du secteur extractif congolais.
          </p>

        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-4">

          {contracts.map((c, index) => (
            <div
              key={index}
              className="bg-[#f8fbfd] border border-slate-200 rounded-2xl p-5 hover:shadow-xl transition"
            >

              <div className="flex justify-between items-start">

                <div>
                  <h3 className="text-lg font-black text-[#062b57]">
                    {c.name}
                  </h3>

                  <p className="text-xs text-slate-500 mt-1">
                    {c.type}
                  </p>
                </div>

                <span className="text-[10px] px-2 py-1 rounded-full bg-green-100 text-green-700 font-black">
                  {c.status}
                </span>

              </div>

              <div className="mt-3 text-xs text-slate-500 space-y-1">
                <p><strong>Zone :</strong> {c.zone}</p>
                <p><strong>Opérateurs :</strong> {c.operators}</p>
              </div>

              <p className="text-sm text-slate-600 mt-3">
                {c.description}
              </p>

              <button className="mt-4 w-full bg-[#062b57] text-white py-2 rounded-xl text-sm font-black hover:bg-cyan-600 transition">
                Voir détails
              </button>

            </div>
          ))}

        </div>

      </div>

    </section>
  )
}