"use client"

import { useState } from "react"
import { supabase } from "@/lib/supabase"

export default function AdminPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault()

    setLoading(true)
    setError("")

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (error) {
      setError("Email ou mot de passe incorrect.")
      setLoading(false)
      return
    }

    window.location.href = "/admin/dashboard"
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-100 p-6">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl p-8">

        <div className="text-center">
          <h1 className="text-4xl font-black text-[#062b57]">
            Administration CN-ITIE
          </h1>

          <p className="text-slate-500 mt-3">
            Connectez-vous pour accéder au panneau d'administration.
          </p>
        </div>

        <form onSubmit={handleLogin} className="mt-8 space-y-5">

          <div>
            <label className="block mb-2 font-semibold">
              Adresse e-mail
            </label>

            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-500"
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold">
              Mot de passe
            </label>

            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-500"
            />
          </div>

          {error && (
            <div className="bg-red-100 text-red-600 rounded-xl p-3 text-sm">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-3 rounded-xl transition"
          >
            {loading ? "Connexion..." : "Se connecter"}
          </button>

        </form>

      </div>
    </main>
  )
}