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
      <body>{children}</body>
    </html>
  )
}