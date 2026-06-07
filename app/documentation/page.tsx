import Link from "next/link"
export default function DocumentationPage() {
  const categories = [
    {
      title: "Rapports ITIE",
      desc: "Rapports annuels et rapports de conciliation.",
      icon: "📊",
      link: "/rapport",
    },
{
  title: "Décrets",
  desc: "Décrets et textes réglementaires.",
  icon: "⚖️",
  link: "/documentation/decrets",
   },
    {
      title: "Code des hydrocarbures",
      desc: "Cadre juridique du secteur pétrolier.",
      icon: "🛢️",
      link: "/documentation/hydrocarbures",
    },
    {
      title: "Code minier",
      desc: "Législation applicable aux activités minières.",
      icon: "⛏️",
      link: "/documentation/code-minier"
    },
    {
      title: "Norme ITIE",
      desc: "Norme internationale ITIE et documents associés.",
      icon: "🌍",
      link: "/documentation/norme-itie",
    },
{
  title: "Communiqués",
  desc: "Communiqués officiels du CN-ITIE Congo.",
  icon: "📢",
  link: "/documentation/communiques",
},
  ]

  return (
    <main className="bg-[#f4f8fb] min-h-screen">

      {/* HERO */}
      <section className="bg-[#062b57] py-28">

        <div className="max-w-7xl mx-auto px-4">

          <p className="uppercase tracking-[0.3em] text-cyan-300 font-black text-sm">
            Centre documentaire
          </p>

          <h1 className="text-5xl lg:text-7xl font-black text-white mt-6">
            Documentation
          </h1>

          <p className="text-slate-200 text-xl max-w-4xl mt-8">
            Consultez l'ensemble des documents officiels du Comité National ITIE Congo.
          </p>

        </div>

      </section>

      {/* DOCUMENTS */}
      <section className="max-w-7xl mx-auto px-4 py-20">

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

          {categories.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="bg-white rounded-[32px] p-8 shadow-xl border border-slate-200 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
            >

              <div className="text-5xl">
                {item.icon}
              </div>

              <h2 className="text-2xl font-black text-[#062b57] mt-6">
                {item.title}
              </h2>

              <p className="text-slate-500 mt-4 leading-7">
                {item.desc}
              </p>

              <div className="mt-6 text-cyan-600 font-black">
                Consulter →
              </div>

            </a>
          ))}

        </div>

      </section>

    </main>
  )
}