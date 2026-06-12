import "./globals.css"
import "leaflet/dist/leaflet.css"

export const metadata = {
  title: "CN-ITIE Congo",
  description: "Plateforme des données extractives",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className="pt-24">

        {/* 🔥 BANDEAU ITIE GLOBAL (TOUJOURS EN HAUT) */}
        <div className="w-full bg-green-600/20 border-b border-green-400/40 text-center py-2 text-sm text-white flex items-center justify-center gap-2 fixed top-0 left-0 z-[60] backdrop-blur-md">

  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>

  <span className="font-medium">
    République du Congo — Processus de validation ITIE en cours
  </span>

</div>
        {/* RESTE DU SITE */}
        {children}

      </body>
    </html>
  )
}