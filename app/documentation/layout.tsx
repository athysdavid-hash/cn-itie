export default function DocumentationLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-[#f4f8fb]">
      <main className="max-w-7xl mx-auto px-4 py-12">
        {children}
      </main>
    </div>
  )
}