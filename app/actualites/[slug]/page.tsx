import { articles } from "@/data/articles"

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  const article =
    articles[slug as keyof typeof articles]

  if (!article) {
    return (
      <div className="p-20 text-4xl font-black">
        Article introuvable
      </div>
    )
  }

  return (
    <main className="max-w-5xl mx-auto px-4 py-16">

      <p className="text-cyan-600 font-black">
        {article.category}
      </p>

      <h1 className="text-5xl font-black text-[#062b57] mt-4">
        {article.title}
      </h1>

      <p className="text-slate-500 mt-2">
        {article.date}
      </p>

      <img
        src={article.image}
        alt={article.title}
        className="w-full h-[450px] object-cover rounded-3xl mt-8"
      />

      <div className="mt-10 text-lg leading-8 whitespace-pre-line">
        {article.content}
      </div>

    </main>
  )
}