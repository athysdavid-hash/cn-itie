export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 p-10">
      <h1 className="text-3xl font-bold mb-6">Contact</h1>

      <p className="mb-6">
        Comité National ITIE Congo - Brazzaville
      </p>

      <form className="max-w-md space-y-4">
        <input
          type="text"
          placeholder="Nom"
          className="w-full p-3 border rounded"
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 border rounded"
        />

        <textarea
          placeholder="Message"
          className="w-full p-3 border rounded h-32"
        />

        <button className="bg-black text-white px-6 py-2 rounded">
          Envoyer
        </button>
      </form>
    </main>
  )
}