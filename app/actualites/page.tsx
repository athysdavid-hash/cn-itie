import { supabase } from "@/lib/supabase"
import Link from "next/link"

export default async function ActualitePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  const { data: article } = await supabase
    .from("actualites")
    .select("*")
    .eq("slug", slug)
    .single()
      if (!article) {
    return (
      <main className="max-w-4xl mx-auto py-20 px-6">
        <h1 className="text-3xl font-bold text-red-600">
          Actualité introuvable
        </h1>

        <Link
          href="/"
          className="mt-6 inline-block text-cyan-600 hover:underline"
        >
          ← Retour à l'accueil
        </Link>
      </main>
    )
  }

  return (
    <main className="max-w-4xl mx-auto py-20 px-6">

      <Link
        href="/"
        className="text-cyan-600 hover:underline"
      >
        ← Retour à l'accueil
      </Link>

      <div className="mt-8">

        <p className="text-sm text-slate-500">
          {article.date_publication}
        </p>

        <h1 className="mt-3 text-5xl font-black text-[#062b57]">
          {article.titre}
        </h1>

        {article.image_url && (
          <img
            src={article.image_url}
            alt={article.titre}
            className="w-full rounded-3xl mt-8"
          />
        )}

        <div className="mt-8 text-lg leading-8 text-slate-700 whitespace-pre-line">
          {article.contenu}
        </div>

      </div>

    </main>
  )
}