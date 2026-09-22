"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { supabase } from "@/lib/supabase"

export default function News() {
  const [news, setNews] = useState<any[]>([])

  useEffect(() => {
    fetchNews()
  }, [])

  async function fetchNews() {
    const { data, error } = await supabase
      .from("actualites")
      .select("*")
      .order("date_publication", { ascending: false })

    if (!error && data) {
      setNews(data)
    }
  }

  return (
    <section className="bg-white rounded-[28px] border border-slate-200 shadow-sm h-full flex flex-col overflow-hidden">

      <div className="bg-gradient-to-r from-[#062b57] to-[#0b4d91] p-6 text-white">
        <p className="uppercase tracking-[3px] text-cyan-300 text-xs font-black">
          Actualités
        </p>

        <h2 className="text-2xl font-black mt-2">
          Actualités du secteur extractif
        </h2>

        <p className="text-slate-200 text-sm mt-2 leading-relaxed">
          Suivez les dernières réunions, rapports, ateliers et annonces du CN-ITIE Congo.
        </p>
      </div>

      <div className="p-5 space-y-4">
        {news.map((item, index) => (
          <div key={index}>

            {/* DEBUG */}
            

            <Link href={`/actualites/${item.slug}`}>

              <div className="border-b border-slate-100 pb-4 last:border-b-0 rounded-xl p-2 hover:bg-slate-50 hover:translate-x-1 transition-all duration-300 cursor-pointer">

                <span className="inline-block bg-cyan-50 text-cyan-700 px-2 py-1 rounded-full text-[10px] uppercase font-black">
                  CN-ITIE
                </span>

                <h3 className="text-[#062b57] font-bold mt-2 leading-snug hover:text-cyan-600 transition">
                  {item.titre}
                </h3>

                <p className="text-xs text-slate-400 mt-1">
                  {item.date_publication}
                </p>

              </div>

            </Link>

          </div>
        ))}
      </div>

    </section>
  )
}