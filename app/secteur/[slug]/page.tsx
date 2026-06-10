"use client"

import { use } from "react"
import { sectors } from "@/data/sectors"

export default function SectorPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = use(params)

  const sector = sectors[slug as keyof typeof sectors]

  if (!sector) {
    return (
      <div className="min-h-screen flex items-center justify-center text-3xl font-black">
        Secteur introuvable
      </div>
    )
  }

  return (
    <main className="bg-[#f4f8fb] min-h-screen">

      {/* HERO */}
      <section
        className={`relative h-[350px] flex items-end bg-gradient-to-r ${sector.color}`}
      >
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 max-w-7xl mx-auto w-full px-6 pb-12">
          <h1 className="text-5xl lg:text-6xl font-black text-white">
            {sector.title}
          </h1>

          <p className="text-slate-200 mt-3 max-w-3xl">
            {sector.desc}
          </p>
        </div>
      </section>

      {/* CONTENU */}
      <section className="max-w-7xl mx-auto px-4 py-10">

        <div className="grid lg:grid-cols-2 gap-6">

          {/* CONTRATS */}
          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm">

            <h2 className="text-2xl font-black text-[#062b57] mb-4">
              📄 Contrats
            </h2>

            <div className="space-y-3">

              {sector.contracts?.map((contract: any, i: number) => (

                <a
                  key={i}
                  href={contract.pdf || "#"}
                  target="_blank"
                  className="block bg-slate-50 border border-slate-200 rounded-xl p-4 hover:border-cyan-500 hover:bg-cyan-50 transition"
                >

                  <h3 className="font-black text-[#062b57]">
                    {typeof contract === "string"
                      ? contract
                      : contract.name}
                  </h3>

                  {typeof contract !== "string" && (
                    <>
                      <p className="text-sm text-slate-500 mt-1">
                        {contract.operator}
                      </p>

                      <span className="text-cyan-600 text-sm font-bold">
                        Ouvrir le contrat →
                      </span>
                    </>
                  )}

                </a>

              ))}

            </div>

          </div>

       {/* PERMIS */}
<div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm lg:col-span-2">

  <div className="flex items-center justify-between mb-6">

    <div>
      <h2 className="text-2xl font-black text-[#062b57]">
        📍 Registre des permis
      </h2>

      <p className="text-sm text-slate-500 mt-1">
        Registre des titres extractifs, permis d'exploration et d'exploitation.
      </p>
    </div>

    <span className="px-4 py-2 rounded-xl bg-cyan-50 text-cyan-700 text-sm font-black">
      {sector.permits?.length} permis
    </span>

  </div>

  <div className="overflow-x-auto">

    <table className="w-full">

      <thead>

        <tr className="border-b border-slate-200 text-left">

          <th className="pb-3 font-black text-[#062b57]">
            Permis
          </th>

          <th className="pb-3 font-black text-[#062b57]">
            Opérateur
          </th>

          <th className="pb-3 font-black text-[#062b57]">
            Type
          </th>

          <th className="pb-3 font-black text-[#062b57]">
            Année
          </th>

          <th className="pb-3 font-black text-[#062b57]">
            Statut
          </th>

          <th className="pb-3 font-black text-[#062b57]">
            Documents
          </th>

        </tr>

      </thead>

      <tbody>

        {sector.permits?.map((permit: any, i: number) => (

          <tr
            key={i}
            className="border-b border-slate-100 hover:bg-slate-50 transition"
          >

            <td className="py-4">

              <div className="font-black text-[#062b57]">
                {permit.name}
              </div>

              <div className="text-xs text-slate-500 mt-1">
                {permit.decree}
              </div>

            </td>

            <td className="py-4 text-slate-700">
              {permit.operator}
            </td>

            <td className="py-4 text-slate-700">
              {permit.type}
            </td>

            <td className="py-4 text-slate-700">
              {permit.year}
            </td>

            <td className="py-4">

              <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-black">
                {permit.status}
              </span>

            </td>

            <td className="py-4">

              <div className="flex gap-2">

                <button
                  className="px-3 py-2 rounded-lg border border-slate-200 text-sm hover:bg-slate-50"
                >
                  Loi
                </button>

                <a
                  href={permit.pdf || "#"}
                  target="_blank"
                  className="px-3 py-2 rounded-lg bg-cyan-600 text-white text-sm font-bold hover:bg-cyan-700"
                >
                  PDF
                </a>

              </div>

            </td>

          </tr>

        ))}

      </tbody>

    </table>

  </div>

</div>
          {/* LOIS */}
          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm">

            <h2 className="text-2xl font-black text-[#062b57] mb-4">
              ⚖️ Cadre juridique
            </h2>

            <div className="space-y-3">

              {sector.laws?.map((item, i) => (
                <div
                  key={i}
                  className="bg-slate-50 border border-slate-200 rounded-xl p-3"
                >
                  {item}
                </div>
              ))}

            </div>

          </div>

          {/* PRODUCTION */}
          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm">

            <h2 className="text-2xl font-black text-[#062b57] mb-4">
              📊 Production
            </h2>

            <div className="space-y-3">

              {sector.production &&
                Object.entries(sector.production).map(([key, value]) => (
                  <div
                    key={key}
                    className="flex justify-between bg-slate-50 border border-slate-200 rounded-xl p-3"
                  >
                    <span className="capitalize font-medium">
                      {key}
                    </span>

                    <span className="font-black text-[#062b57]">
                      {String(value)}
                    </span>
                  </div>
                ))}

            </div>

          </div>

        </div>

        {"revenues" in sector && sector.revenues && (
          <div className="mt-6 bg-white rounded-3xl p-6 border border-slate-200 shadow-sm">

            <h2 className="text-2xl font-black text-[#062b57] mb-4">
              💰 Revenus extractifs
            </h2>

            <div className="grid md:grid-cols-3 gap-4">

              {Object.entries(sector.revenues).map(([key, value]) => (
                <div
                  key={key}
                  className="bg-slate-50 border border-slate-200 rounded-xl p-4"
                >
                  <p className="text-slate-500 text-sm capitalize">
                    {key.replace("_", " ")}
                  </p>

                  <p className="font-black text-[#062b57] mt-2">
                    {String(value)}
                  </p>
                </div>
              ))}

            </div>

          </div>
        )}

      </section>

    </main>
  )
}