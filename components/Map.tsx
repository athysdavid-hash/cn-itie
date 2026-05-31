"use client";

import { useState } from "react";

type Zone = "none" | "nord" | "centre" | "sud";

export default function Map() {
  const [zone, setZone] = useState<Zone>("none");

  const data = {
    none: {
      title: "Carte du Congo",
      desc: "Clique sur une zone pour afficher les informations ITIE.",
    },
    nord: {
      title: "Nord du Congo",
      desc: "Zone riche en pétrole et gaz naturel. Forte contribution aux revenus extractifs.",
    },
    centre: {
      title: "Centre du Congo",
      desc: "Zone d’infrastructures et d’activités minières.",
    },
    sud: {
      title: "Sud du Congo",
      desc: "Zone forestière et ressources naturelles.",
    },
  };

  return (
    <section className="px-10 py-12">
      <h2 className="text-2xl font-bold text-center mb-6">
        Carte interactive ITIE
      </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">

        {/* CARTE SIMPLE MAIS PRO */}
        <div className="relative w-full h-[420px] bg-gray-100 border rounded-xl flex items-center justify-center">

          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">

            <button
              onClick={() => setZone("nord")}
              className="bg-blue-600 text-white px-4 py-2 rounded shadow hover:scale-105 transition"
            >
              Nord (Pétrole)
            </button>

            <button
              onClick={() => setZone("centre")}
              className="bg-green-600 text-white px-4 py-2 rounded shadow hover:scale-105 transition"
            >
              Centre (Mines)
            </button>

            <button
              onClick={() => setZone("sud")}
              className="bg-purple-600 text-white px-4 py-2 rounded shadow hover:scale-105 transition"
            >
              Sud (Forêt)
            </button>

          </div>

        </div>

        {/* PANEL INFO */}
        <div className="bg-white border rounded-xl p-6">

          <h3 className="font-bold text-xl mb-2">
            {data[zone].title}
          </h3>

          <p className="text-gray-600">
            {data[zone].desc}
          </p>

          <div className="mt-6 space-y-3 text-sm text-gray-600">

            <p>• Données extractives ITIE</p>
            <p>• Transparence des revenus</p>
            <p>• Rapport gouvernemental</p>

          </div>

        </div>

      </div>
    </section>
  );
}