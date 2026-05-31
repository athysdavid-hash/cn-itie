export default function ActualitesPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 p-10">
      <h1 className="text-3xl font-bold mb-6">Actualités ITIE Congo</h1>

      <div className="space-y-4">
        <article className="p-4 border rounded-lg">
          <h2 className="font-semibold">Publication du dernier rapport ITIE</h2>
          <p className="text-sm text-gray-600">
            Mise à jour des données du secteur extractif.
          </p>
        </article>

        <article className="p-4 border rounded-lg">
          <h2 className="font-semibold">Réforme de transparence</h2>
          <p className="text-sm text-gray-600">
            Nouvelles mesures pour améliorer la gouvernance.
          </p>
        </article>
      </div>
    </main>
  )
}